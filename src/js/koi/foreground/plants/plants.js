import Mesh from "../../../render/mesh";
import MeshData from "../../../render/meshData";
import MeshNormalizer from "../../../render/meshNormalizer";
import Vector2 from "../../../render/vector2";
import Slots from "../slots";
import Planter from "./planter";
import PlantMap from "./plantMap";

import Color from "../../../render/color";

import Path2QuadraticBezier from "../../samplers/path2QuadraticBezier";
import Path2Sampler from "../../samplers/path2Sampler";
import FlexSampler from "./flexSampler";
import LeafSet from "./leafSet";



import Vector3 from "../../../render/vector3";
import Bounds from "../../samplers/bounds";

import Sampler from "../../samplers/sampler";
import SamplerPlateau from "../../samplers/samplerPlateau";
import SamplerPower from "../../samplers/samplerPower";
import BugSpot from "../bugs/bugSpot";
import Path2Linear from "../../samplers/path2Linear";


/**
 * Plants
 * @param {WebGLRenderingContext} gl A WebGL rendering context
 * @param {Constellation} constellation The constellation
 * @param {Slots} slots The slots to place objects on
 * @param {HiddenSlots} hiddenSlots The hidden slots
 * @param {Biome} biome The biome
 * @param {Random} random A randomizer
 * @constructor
 */
const Plants = function(
    gl,
    constellation,
    slots,
    hiddenSlots,
    biome,
    random) {
    let vertices = [];
    let indices = [];

    this.plantMap = new PlantMap(constellation.width, constellation.height, Slots.prototype.RADIUS);

    const planter = new Planter(slots, hiddenSlots, biome, this.plantMap, random)

    this.bugSpots = planter.plant(this, vertices, indices);
    vertices = []
    indices = [];
    this.mesh = this.makeMesh(gl, vertices, indices, constellation);
};

Plants.prototype.STRIDE = 10;
Plants.prototype.WIND_UV_RADIUS = .6;

/**
 * Make the vegetation mesh
 * @param {WebGLRenderingContext} gl A WebGL rendering context
 * @param {Number[]} vertices All plant vertices
 * @param {Number[]} indices All plant indices
 * @param {Constellation} constellation The constellation
 * @returns {Mesh} The plant mesh
 */
Plants.prototype.makeMesh = function(
    gl,
    vertices,
    indices,
    constellation) {
    new MeshNormalizer(
        constellation.width,
        constellation.height,
        this.STRIDE,
        [3],
        [4],
        [6],
        [5, 7],
        [8],
        [9]).apply(vertices);

    return new Mesh(gl, new MeshData(vertices, indices), this.getFirstIndex(vertices) - 1 > 0xFFFF ? 4 : 2);
};

/**
 * Get the first index of a new mesh in the vertex array
 * @param {Number[]} vertices The vertex array
 * @returns {Number} The first index of vertices that will be added to the array
 */
Plants.prototype.getFirstIndex = function(vertices) {
    return vertices.length / this.STRIDE;
};

/**
 * Make a frequency map UV with some offset
 * @param {Number} x The X origin
 * @param {Number} y The Y origin
 * @param {Random} random A randomizer
 * @returns {Vector2} The UV coordinates
 */
Plants.prototype.makeUV = function(x, y, random) {
    const angle = random.getFloat() * Math.PI * 2;
    const radius = Math.sqrt(random.getFloat()) * this.WIND_UV_RADIUS;

    return new Vector2(
        x + Math.cos(angle) * radius,
        y + Math.sin(angle) * radius);
};

/**
 * Free all resources maintained by plants
 */
Plants.prototype.free = function() {
    this.mesh.free();
};

Plants.prototype.CAPSULE_SEGMENTS_MIN = 3;
Plants.prototype.CAPSULE_RESOLUTION = .11;
Plants.prototype.CAPSULE_RADIUS_POWER = .25;

/**
 * Model a capsule shape
 * @param {Path2Sampler} pathSampler The path to model the capsule on
 * @param {Bounds} bounds The bounds to model the stalk on
 * @param {Number} y The Y position
 * @param {Number} radius The capsule radius
 * @param {Vector2} uv The air UV
 * @param {Color} color The capsule color
 * @param {Number} shade The shade multiplier
 * @param {FlexSampler} flexSampler A flex sampler
 * @param {Number[]} vertices The vertex array
 * @param {Number[]} indices The index array
 */
Plants.prototype.modelCapsule = function(
    pathSampler,
    bounds,
    y,
    radius,
    uv,
    color,
    shade,
    flexSampler,
    vertices,
    indices) {

    const firstIndex = this.getFirstIndex(vertices);
    const segments = Math.max(
        this.CAPSULE_SEGMENTS_MIN,
        Math.round(pathSampler.getLength() * bounds.getDomain() / this.CAPSULE_RESOLUTION) + 1);
    const sample = new Vector2();
    const direction = new Vector2();

    pathSampler.sample(sample, pathSampler.getLength() * bounds.min);

    vertices.push(
        color.r * .5 * (shade + 1),
        color.g * .5 * (shade + 1),
        color.b * .5 * (shade + 1),
        sample.x,
        y,
        sample.y,
        0,
        0,
        uv.x,
        uv.y);
    indices.push(
        firstIndex,
        firstIndex + 1,
        firstIndex + 2);

    for (let segment = 1; segment < segments - 1; ++segment) {
        const f = segment / (segments - 1);
        const at = pathSampler.getLength() * bounds.map(f);

        pathSampler.sample(sample, at);
        pathSampler.sampleDirection(direction, at);

        const r = radius * Math.pow(Math.cos(Math.PI * (f - .5)), this.CAPSULE_RADIUS_POWER);

        vertices.push(
            color.r * shade,
            color.g * shade,
            color.b * shade,
            sample.x - direction.y * r,
            y,
            sample.y + direction.x * r,
            0,
            0,
            uv.x,
            uv.y);
        vertices.push(
            color.r,
            color.g,
            color.b,
            sample.x + direction.y * r,
            y,
            sample.y - direction.x * r,
            0,
            0,
            uv.x,
            uv.y);

        if (segment !== segments - 2)
            indices.push(
                firstIndex + (segment << 1) - 1,
                firstIndex + (segment << 1),
                firstIndex + (segment << 1) + 2,
                firstIndex + (segment << 1) + 2,
                firstIndex + (segment << 1) + 1,
                firstIndex + (segment << 1) - 1);
    }

    pathSampler.sample(sample, pathSampler.getLength() * bounds.max);

    vertices.push(
        color.r * .5 * (shade + 1),
        color.g * .5 * (shade + 1),
        color.b * .5 * (shade + 1),
        sample.x,
        y,
        sample.y,
        0,
        0,
        uv.x,
        uv.y);
    indices.push(
        firstIndex + ((segments - 2) << 1) - 1,
        firstIndex + ((segments - 2) << 1),
        firstIndex + ((segments - 2) << 1) + 1);

    flexSampler.applyToRange(vertices, firstIndex, firstIndex + ((segments - 1) << 1) - 1);
};


Plants.prototype.CATTAIL_COLOR_STALK = Color.fromCSS("--color-cattail-stalk");
Plants.prototype.CATTAIL_COLOR_CAPSULE = Color.fromCSS("--color-cattail-capsule");
Plants.prototype.CATTAIL_COLOR_LEAF = Color.fromCSS("--color-cattail-leaf");
Plants.prototype.CATTAIL_ANGLE_RADIUS = .05;
Plants.prototype.CATTAIL_FLEX = new SamplerPower(0, .15, 1.5);
Plants.prototype.CATTAIL_HEIGHT = new SamplerPower(1.5, 2.1, 1.5);
Plants.prototype.CATTAIL_STALK_RADIUS = .02;
Plants.prototype.CATTAIL_STALK_RADIUS_POWER = .7;
Plants.prototype.CATTAIL_STALK_SHADE = .7;
Plants.prototype.CATTAIL_LEAVES_PLACEMENT = new SamplerPower(.1, .55, 1.5);
Plants.prototype.CATTAIL_LEAVES_DENSITY = .36;
Plants.prototype.CATTAIL_LEAVES_ANGLE = new Sampler(.8, 1.5);
Plants.prototype.CATTAIL_LEAVES_LENGTH = new Sampler(.8, .35);
Plants.prototype.CATTAIL_LEAVES_WIDTH = .6;
Plants.prototype.CATTAIL_LEAVES_FLEX = new Sampler(.04, .22);
Plants.prototype.CATTAIL_CAPSULE_BOUNDS = new Bounds(.65, .95);
Plants.prototype.CATTAIL_CAPSULE_RADIUS = .04;
Plants.prototype.CATTAIL_CAPSULE_SHADE = .65;
Plants.prototype.CATTAIL_CAPSULE_SPOT = new SamplerPlateau(.2, .5, .8, 0.5);

/**
 * Model cattail
 * @param {Number} x The X origin
 * @param {Number} y The Y origin
 * @param {Random} random A randomizer
 * @param {Number[]} vertices The vertex array
 * @param {Number[]} indices The index array
 * @returns {BugSpot[]} Spots for bugs to land on
 */
Plants.prototype.modelCattail = function(
    x,
    y,
    random,
    vertices,
    indices) {
    const uv = this.makeUV(x, y, random);
    const height = this.CATTAIL_HEIGHT.sample(random.getFloat());

    const direction = Math.PI * .5 + (random.getFloat() * 2 - 1) * this.CATTAIL_ANGLE_RADIUS;
    const directionCos = Math.cos(direction);
    const directionSin = Math.sin(direction);
    const flexSampler = new FlexSampler(x, 0, this.CATTAIL_FLEX, height);
    const pathSampler = new Path2Sampler(
        new Path2QuadraticBezier(
            new Vector2(x, 0),
            new Vector2(x, directionSin * height * .5),
            new Vector2(x + directionCos * height, directionSin * height)));
    const leafSet = new LeafSet(
        pathSampler,
        this.CATTAIL_LEAVES_PLACEMENT,
        this.CATTAIL_LEAVES_DENSITY,
        this.CATTAIL_LEAVES_ANGLE,
        this.CATTAIL_LEAVES_LENGTH,
        this.CATTAIL_LEAVES_WIDTH,
        this.CATTAIL_LEAVES_FLEX,
        random);

    this.modelCapsule(
        pathSampler,
        this.CATTAIL_CAPSULE_BOUNDS,
        y,
        this.CATTAIL_CAPSULE_RADIUS * height,
        uv,
        this.CATTAIL_COLOR_CAPSULE,
        this.CATTAIL_CAPSULE_SHADE,
        flexSampler,
        vertices,
        indices);

    this.modelStalk(
        pathSampler,
        y,
        this.CATTAIL_STALK_RADIUS * height,
        this.CATTAIL_STALK_RADIUS_POWER,
        uv,
        this.CATTAIL_COLOR_STALK,
        this.CATTAIL_COLOR_STALK,
        this.CATTAIL_STALK_SHADE,
        flexSampler,
        vertices,
        indices);

    leafSet.model(
        y,
        uv,
        this.CATTAIL_COLOR_LEAF,
        this,
        flexSampler,
        random,
        vertices,
        indices);

    const bugSpot = new Vector2();

    pathSampler.sample(bugSpot, pathSampler.getLength() * this.CATTAIL_CAPSULE_BOUNDS.map(
        this.CATTAIL_CAPSULE_SPOT.sample(random.getFloat())));

    return [new BugSpot(new Vector3(bugSpot.x, y, bugSpot.y), uv, flexSampler)];
};

Plants.prototype.GRASS_COLOR_A = Color.fromCSS("--color-grass-a");
Plants.prototype.GRASS_COLOR_B = Color.fromCSS("--color-grass-b");
Plants.prototype.GRASS_COLOR_BASE = Color.fromCSS("--color-earth");
Plants.prototype.GRASS_COLOR_DARKEN_RANDOM = .15;
Plants.prototype.GRASS_COLOR_DARKEN_BIOME = 2;
Plants.prototype.GRASS_FLEX_MAX = new Sampler(.2, .4);
Plants.prototype.GRASS_FLEX_POWER = 1.7;
Plants.prototype.GRASS_HEIGHT = new SamplerPower(.55, .75, 1.4);
Plants.prototype.GRASS_BLADES = 3;
Plants.prototype.GRASS_FAN = new SamplerPower(.21, .24, .6);
Plants.prototype.GRASS_SHADE = .85;
Plants.prototype.GRASS_RADIUS = .19;
Plants.prototype.GRASS_RADIUS_POWER = .8;
Plants.prototype.GRASS_SHORE_GRADIENT = .5;
Plants.prototype.GRASS_SHORE_WIDTH = .3;
Plants.prototype.GRASS_Y_SHIFT = new Sampler(-.01, .01);

/**
 * Model grass
 * @param {Number} x The X origin
 * @param {Number} y The Y origin
 * @param {Number} darken A color multiplier in the range [0, 1]
 * @param {Number} shoreDistance The distance to the nearest shore
 * @param {Random} random A randomizer
 * @param {Number[]} vertices The vertex array
 * @param {Number[]} indices The index array
 */
Plants.prototype.modelGrass = function(
    x,
    y,
    darken,
    shoreDistance,
    random,
    vertices,
    indices) {
    const color = this.GRASS_COLOR_A.lerp(
        this.GRASS_COLOR_B,
        Math.min(1, darken * this.GRASS_COLOR_DARKEN_BIOME)).multiply(
            1 - this.GRASS_COLOR_DARKEN_RANDOM * random.getFloat());
    const colorBase = this.GRASS_COLOR_BASE.lerp(
        color,
        Math.min(1, Math.max(0, shoreDistance - this.GRASS_SHORE_WIDTH) / this.GRASS_SHORE_GRADIENT));
    const flexSampler = new FlexSampler(
        x,
        0,
        new SamplerPower(0, this.GRASS_FLEX_MAX.sample(random.getFloat()), this.GRASS_FLEX_POWER),
        this.GRASS_HEIGHT.max);

    for (let i = 0; i < this.GRASS_BLADES; ++i) {
        const height = this.GRASS_HEIGHT.sample(random.getFloat());
        const angle = Math.PI * .5 + ((i / (this.GRASS_BLADES - 1)) * 2 - 1) * this.GRASS_FAN.sample(random.getFloat());
        const path = new Path2Linear(new Vector2(x, 0), new Vector2(x + Math.cos(angle) * height, Math.sin(angle) * height));

        this.modelStalk(
            new Path2Sampler(path),
            y + this.GRASS_Y_SHIFT.sample(random.getFloat()),
            this.GRASS_RADIUS * height,
            this.GRASS_RADIUS_POWER,
            this.makeUV(x, y, random),
            colorBase,
            color,
            this.GRASS_SHADE,
            flexSampler,
            vertices,
            indices);
    }
};

Plants.prototype.LEAF_RESOLUTION = .15;
Plants.prototype.LEAF_SEGMENTS_MIN = 5;
Plants.prototype.LEAF_BULGE = .55;
Plants.prototype.LEAF_SHADE = .8;

/**
 * Model a leaf
 * @param {Vector2} flexVector The flex vector at the root of this leaf
 * @param {Number} x1 The X origin
 * @param {Number} z1 The Z origin
 * @param {Number} x2 The X target
 * @param {Number} z2 The Z target
 * @param {Number} y The Y position
 * @param {Number} width The leaf width factor, proportional to length
 * @param {Number} flex The flexibility
 * @param {Vector2} uv The air UV
 * @param {Color} color The leaf color
 * @param {Number[]} vertices The vertex array
 * @param {Number[]} indices The index array
 */
Plants.prototype.modelLeaf = function(
    flexVector,
    x1,
    z1,
    x2,
    z2,
    y,
    width,
    flex,
    uv,
    color,
    vertices,
    indices) {
    const firstIndex = this.getFirstIndex(vertices);
    const dx = x2 - x1;
    const dz = z2 - z1;
    const length = Math.sqrt(dx * dx + dz * dz);
    const dxn = dx / length;
    const dzn = dz / length;
    const segments = Math.max(this.LEAF_SEGMENTS_MIN, Math.round(length / this.LEAF_RESOLUTION) + 1);

    const shadeLeft = dxn < 0 ? this.LEAF_SHADE : 1;
    const shadeRight = dxn < 0 ? 1 : this.LEAF_SHADE;
    const centerOffset = (dxn < 0 ? this.LEAF_BULGE : -this.LEAF_BULGE) * (1 - Math.abs(dzn));

    vertices.push(
        color.r * shadeLeft,
        color.g * shadeLeft,
        color.b * shadeLeft,
        x1,
        y,
        z1,
        flexVector.x,
        flexVector.y,
        uv.x,
        uv.y,
        color.r * shadeRight,
        color.g * shadeRight,
        color.b * shadeRight,
        x1,
        y,
        z1,
        flexVector.x,
        flexVector.y,
        uv.x,
        uv.y);

    indices.push(
        firstIndex,
        firstIndex + 2,
        firstIndex + 3,
        firstIndex + 1,
        firstIndex + 4,
        firstIndex + 5);

    for (let segment = 1; segment < segments - 1; ++segment) {
        const f = segment / (segments - 1);
        const radius = length * width * .5 * Math.cos(Math.PI * (f - .5));

        vertices.push(
            color.r * shadeLeft,
            color.g * shadeLeft,
            color.b * shadeLeft,
            x1 + dx * f + dzn * radius * centerOffset,
            y,
            z1 + dz * f - dxn * radius * centerOffset,
            flexVector.x,
            flexVector.y,
            uv.x,
            uv.y,
            color.r * shadeRight,
            color.g * shadeRight,
            color.b * shadeRight,
            x1 + dx * f + dzn * radius,
            y,
            z1 + dz * f - dxn * radius,
            flexVector.x,
            flexVector.y,
            uv.x,
            uv.y);

        vertices.push(
            color.r * shadeRight,
            color.g * shadeRight,
            color.b * shadeRight,
            x1 + dx * f + dzn * radius * centerOffset,
            y,
            z1 + dz * f - dxn * radius * centerOffset,
            flexVector.x,
            flexVector.y,
            uv.x,
            uv.y,
            color.r * shadeLeft,
            color.g * shadeLeft,
            color.b * shadeLeft,
            x1 + dx * f - dzn * radius,
            y,
            z1 + dz * f + dxn * radius,
            flexVector.x,
            flexVector.y,
            uv.x,
            uv.y);

        if (segment !== segments - 2)
            indices.push(
                firstIndex + (segment << 2) - 2,
                firstIndex + (segment << 2) - 1,
                firstIndex + (segment << 2) + 3,
                firstIndex + (segment << 2) + 3,
                firstIndex + (segment << 2) + 2,
                firstIndex + (segment << 2) - 2,
                firstIndex + (segment << 2),
                firstIndex + (segment << 2) + 1,
                firstIndex + (segment << 2) + 5,
                firstIndex + (segment << 2) + 5,
                firstIndex + (segment << 2) + 4,
                firstIndex + (segment << 2));
        else
            indices.push(
                firstIndex + (segment << 2) - 2,
                firstIndex + (segment << 2) - 1,
                firstIndex + (segment << 2) + 2,
                firstIndex + (segment << 2),
                firstIndex + (segment << 2) + 1,
                firstIndex + (segment << 2) + 3);
    }

    vertices.push(
        color.r * shadeLeft,
        color.g * shadeLeft,
        color.b * shadeLeft,
        x2,
        y,
        z2,
        0,
        0,
        uv.x,
        uv.y,
        color.r * shadeRight,
        color.g * shadeRight,
        color.b * shadeRight,
        x2,
        y,
        z2,
        0,
        0,
        uv.x,
        uv.y);

    new FlexSampler(x1, z1, flex, 0, flexVector).applyToRange(
        vertices,
        firstIndex,
        firstIndex + ((segments - 1) << 2) - 1);
};

Plants.prototype.SHRUBBERY_COLOR_STALK = Color.fromCSS("--color-shrubbery-stalk");
Plants.prototype.SHRUBBERY_COLOR_LEAF = Color.fromCSS("--color-shrubbery-leaf");
Plants.prototype.SHRUBBERY_STALK_SHADE = .65;
Plants.prototype.SHRUBBERY_STALK_RADIUS = .05;
Plants.prototype.SHRUBBERY_STALK_RADIUS_POWER = .5;
Plants.prototype.SHRUBBERY_LENGTH = new SamplerPower(2.3, 3.7, 1.5);
Plants.prototype.SHRUBBERY_CONTROL_HEIGHT = .8;
Plants.prototype.SHRUBBERY_LENGTH_MULTIPLIER = new Sampler(.4, 1);
Plants.prototype.SHRUBBERY_DIRECTION = new SamplerPlateau(Math.PI * .4, Math.PI * .5, Math.PI * .6, .1);
Plants.prototype.SHRUBBERY_DIRECTION_AMPLITUDE = Math.PI * .07;
Plants.prototype.SHRUBBERY_DIRECTION_REVERSE_CHANCE = .07;
Plants.prototype.SHRUBBERY_FLEX = new SamplerPower(0, .1, 1.8);
Plants.prototype.SHRUBBERY_LEAF_ANGLE = new Sampler(1.1, 1.3);
Plants.prototype.SHRUBBERY_LEAF_WIDTH = .6;
Plants.prototype.SHRUBBERY_LEAF_FLEX = new Sampler(.08, .2);
Plants.prototype.SHRUBBERY_LEAF_LENGTH = new Sampler(.85, .3);
Plants.prototype.SHRUBBERY_LEAF_DENSITY = .25;
Plants.prototype.SHRUBBERY_LEAF_DISTRIBUTION = new SamplerPower(.1, 1, 1.1);

/**
 * Model a shrubbery
 * @param {Number} x The X origin
 * @param {Number} y The Y origin
 * @param {Number} size A size factor in the range [0, 1]
 * @param {Number} waterDirection The direction towards the nearest water, -1 or 1
 * @param {Random} random A randomizer
 * @param {Number[]} vertices The vertex array
 * @param {Number[]} indices The index array
 */
Plants.prototype.modelShrubbery = function(
    x,
    y,
    size,
    waterDirection,
    random,
    vertices,
    indices) {
    if (random.getFloat() < this.SHRUBBERY_DIRECTION_REVERSE_CHANCE)
        waterDirection = -waterDirection;

    const direction = this.SHRUBBERY_DIRECTION.sample(random.getFloat()) - waterDirection * this.SHRUBBERY_DIRECTION_AMPLITUDE;
    const uv = this.makeUV(x, y, random);
    const sizeMultiplier = this.SHRUBBERY_LENGTH_MULTIPLIER.sample(size);
    const flexSampler = new FlexSampler(x, 0, this.SHRUBBERY_FLEX, this.SHRUBBERY_LENGTH.max * sizeMultiplier);
    const length = this.SHRUBBERY_LENGTH.sample(random.getFloat()) * sizeMultiplier;
    const end = new Vector2(x + Math.cos(direction) * length, Math.sin(direction) * length);
    const controlPoint = new Vector2(x, end.y * this.SHRUBBERY_CONTROL_HEIGHT);
    const pathSampler = new Path2Sampler(
        new Path2QuadraticBezier(
            new Vector2(x, 0),
            controlPoint,
            end));
    const leafSet = new LeafSet(
        pathSampler,
        this.SHRUBBERY_LEAF_DISTRIBUTION,
        this.SHRUBBERY_LEAF_DENSITY,
        this.SHRUBBERY_LEAF_ANGLE,
        this.SHRUBBERY_LEAF_LENGTH,
        this.SHRUBBERY_LEAF_WIDTH,
        this.SHRUBBERY_LEAF_FLEX,
        random);

    this.modelStalk(
        pathSampler,
        y,
        this.SHRUBBERY_STALK_RADIUS,
        this.SHRUBBERY_STALK_RADIUS_POWER,
        uv,
        this.SHRUBBERY_COLOR_STALK,
        this.SHRUBBERY_COLOR_STALK,
        this.SHRUBBERY_STALK_SHADE,
        flexSampler,
        vertices,
        indices);

    leafSet.model(y, uv, this.SHRUBBERY_COLOR_LEAF, this, flexSampler, random, vertices, indices);
};


Plants.prototype.STALK_RESOLUTION = .3;

/**
 * Model a stalk
 * @param {Path2Sampler} pathSampler The path sampler to model the stalk along
 * @param {Number} y The Y position
 * @param {Number} radius The stalk radius
 * @param {Number} radiusPower A power to apply to the radius
 * @param {Vector2} uv The air UV
 * @param {Color} colorBase The base color
 * @param {Color} color The color
 * @param {Number} shade The dark side shade
 * @param {FlexSampler} flexSampler A flex sampler
 * @param {Number[]} vertices The vertex array
 * @param {Number[]} indices The index array
 */
Plants.prototype.modelStalk = function(
    pathSampler,
    y,
    radius,
    radiusPower,
    uv,
    colorBase,
    color,
    shade,
    flexSampler,
    vertices,
    indices) {
    const firstIndex = this.getFirstIndex(vertices);
    const sample = new Vector2();
    const direction = new Vector2();
    const segments = Math.max(2, Math.round(pathSampler.getLength() / this.STALK_RESOLUTION) + 1);

    for (let segment = 0; segment < segments - 1; ++segment) {
        const f = segment / (segments - 1);
        const r = radius * Math.pow(1 - f, radiusPower);
        const at = f * pathSampler.getLength();

        pathSampler.sample(sample, at);
        pathSampler.sampleDirection(direction, at);

        if (segment === 0) {
            if (colorBase === color)
                vertices.push(
                    colorBase.r * shade,
                    colorBase.g * shade,
                    colorBase.b * shade);
            else
                vertices.push(
                    colorBase.r,
                    colorBase.g,
                    colorBase.b);
        }
        else
            vertices.push(
                color.r * shade,
                color.g * shade,
                color.b * shade);

        vertices.push(
            sample.x - direction.y * r,
            y,
            sample.y + direction.x * r,
            0,
            0,
            uv.x,
            uv.y);

        if (segment === 0)
            vertices.push(
                colorBase.r,
                colorBase.g,
                colorBase.b);
        else
            vertices.push(
                color.r,
                color.g,
                color.b);

        vertices.push(
            sample.x + direction.y * r,
            y,
            sample.y - direction.x * r,
            0,
            0,
            uv.x,
            uv.y);

        if (segment !== segments - 2)
            indices.push(
                firstIndex + (segment << 1),
                firstIndex + (segment << 1) + 1,
                firstIndex + (segment << 1) + 3,
                firstIndex + (segment << 1) + 3,
                firstIndex + (segment << 1) + 2,
                firstIndex + (segment << 1));
        else
            indices.push(
                firstIndex + (segment << 1),
                firstIndex + (segment << 1) + 1,
                firstIndex + (segment << 1) + 2);
    }

    vertices.push(
        color.r * (1 - (1 - shade) * .5),
        color.g * (1 - (1 - shade) * .5),
        color.b * (1 - (1 - shade) * .5),
        pathSampler.getPath().getEnd().x,
        y,
        pathSampler.getPath().getEnd().y,
        0,
        0,
        uv.x,
        uv.y);

    flexSampler.applyToRange(vertices, firstIndex, firstIndex + ((segments - 1) << 1));
};

export default Plants