import SamplerSigmoid from "../../../../samplers/samplerSigmoid";
import Mixer from "../mixer";
import LayerWeb from "../../../pattern/layer/layerWeb";
/**
 * Mix web layers
 * @param {LayerWeb} mother The mother layer
 * @param {LayerWeb} father The father layer
 * @constructor
 */
const MixerLayerWeb = function(mother, father) {
    this.mother = mother;
    this.father = father;
};

MixerLayerWeb.prototype = Object.create(Mixer.prototype);
MixerLayerWeb.prototype.SAMPLER_PLANE = new SamplerSigmoid(0, 1, 15);
MixerLayerWeb.prototype.SAMPLER_SCALE = new SamplerSigmoid(0, 1, 5);
MixerLayerWeb.prototype.SAMPLER_THRESHOLD = new SamplerSigmoid(0, 1, 3);
MixerLayerWeb.prototype.SAMPLER_THICKNESS = new SamplerSigmoid(0, 1, 6);

/**
 * Create a new layer that mixes the properties from both parents
 * @param {Random} random A randomizer
 * @returns {LayerWeb} The mixed layer
 */
MixerLayerWeb.prototype.mix = function(random) {
    const interpolateSample = random.getFloat();

    return new LayerWeb(
        this.father.plane && this.mother.plane ? this.mother.plane.interpolate(this.father.plane, this.SAMPLER_PLANE.sample(interpolateSample)):(this.father.plane || this.mother.plane),
        this.mother.paletteIndex,
        this.mixUint8(this.mother.scale, this.father.scale, this.SAMPLER_SCALE, interpolateSample),
        this.mixUint8(this.mother.thickness, this.father.thickness, this.SAMPLER_THICKNESS, interpolateSample),
        this.mixUint8(this.mother.threshold, this.father.threshold, this.SAMPLER_THRESHOLD, interpolateSample));
};

export default MixerLayerWeb