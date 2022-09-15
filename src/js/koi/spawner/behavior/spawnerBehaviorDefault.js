import SpawnerState from "../spawnerState";
import SpawnerBehavior from "./spawnerBehavior";

/**
 * Default spawner behavior
 * @constructor
 */
const SpawnerBehaviorDefault = function() {
    SpawnerBehavior.call(this, this.BLUEPRINTS, this.SPAWN_CHANCE);
};

SpawnerBehaviorDefault.prototype = Object.create(SpawnerBehavior.prototype);
SpawnerBehaviorDefault.prototype.SPAWN_CHANCE = .09;
SpawnerBehaviorDefault.prototype.SPAWN_INDEX_POWER = 1.5;
SpawnerBehaviorDefault.prototype.BLUEPRINTS = SpawnerState.prototype.BLUEPRINTS;

/**
 * Get the index of the blueprint to spawn
 * @param {WeatherState} weatherState The weather state
 * @param {Random} random The randomizer
 * @returns {Number} The blueprint index
 */
SpawnerBehaviorDefault.prototype.getBlueprintIndex = function(weatherState, random) {
    // const maxLength = weatherState.isDrizzle() ? this.BLUEPRINTS.length : this.BLUEPRINTS.length - 1;
    console.log("length",this.BLUEPRINTS.length)
    console.log("maxLength",maxLength)
    console.log("random.getFloat()",random.getFloat())
    return Math.floor(this.BLUEPRINTS.length * Math.pow(random.getFloat(), this.SPAWN_INDEX_POWER));
};

export default SpawnerBehaviorDefault