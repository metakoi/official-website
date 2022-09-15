import LayerBase from "../../../fish/pattern/layer/layerBase";
import LayerFootprint from "../../../fish/pattern/layer/layerFootprint";
import LayerRidge from "../../../fish/pattern/layer/layerRidge";
import LayerSpots from "../../../fish/pattern/layer/layerSpots";
import LayerStripes from "../../../fish/pattern/layer/layerStripes";
import PatternFootprint from "../../../fish/pattern/patternFootprint";
import Palette from "../../../samplers/palette";
import CardRequirement from "./cardRequirement";

/**
 * The card slot requirements, applied to slots on even pages
 * @type {CardRequirement[][]}
 */
const CardRequirements = [
    [
        null, null, null, null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BLACK)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_BLACK)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BLACK),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_WHITE)
        ]))
    ],
    [
        null, null, null, null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_GOLD)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_ORANGE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_GOLD)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_ORANGE)
        ]))
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerStripes.prototype.ID, Palette.INDEX_BLACK)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BLACK),
            new LayerFootprint(LayerStripes.prototype.ID, Palette.INDEX_WHITE)
        ])),
        null,
        null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BLACK),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_GOLD)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BLACK),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_ORANGE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_BLACK),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_ORANGE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_GOLD),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_BLACK)
        ])),
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_PINK)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_PINK)
        ])),
        null,
        null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_RED)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_RED)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_RED),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_GOLD)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_BLACK),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_RED)
        ]))
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerRidge.prototype.ID, Palette.INDEX_BLACK)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BLACK),
            new LayerFootprint(LayerRidge.prototype.ID, Palette.INDEX_WHITE)
        ])),
        null,
        null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BROWN),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_WHITE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BROWN),
            new LayerFootprint(LayerRidge.prototype.ID, Palette.INDEX_WHITE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_BROWN)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerRidge.prototype.ID, Palette.INDEX_BROWN)
        ]))
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_PURPLE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_PURPLE),
            new LayerFootprint(LayerRidge.prototype.ID, Palette.INDEX_BLACK)
        ])),
        null,
        null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerStripes.prototype.ID, Palette.INDEX_PURPLE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_PURPLE),
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_LIGHTPURPLE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerStripes.prototype.ID, Palette.INDEX_LIGHTPURPLE)
        ]))
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_BLUE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerStripes.prototype.ID, Palette.INDEX_BLUE)
        ])),
        null,
        null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BLUE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_GOLD)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BLUE),
            new LayerFootprint(LayerRidge.prototype.ID, Palette.INDEX_GOLD)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_WHITE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_DARKBLUE)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_DARKBLUE),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_GOLD)
        ]))
    ],
    [
        null, null, null, null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_TEAL)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_TEAL),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_BLACK)
        ])),
        null,
        null
    ],
    [
        null, null, null, null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_GREEN)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_GREEN),
            new LayerFootprint(LayerStripes.prototype.ID, Palette.INDEX_ORANGE)
        ])),
        null,
        null
    ],
    [
        null, null, null, null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_DARKGREEN)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_DARKGREEN),
            new LayerFootprint(LayerRidge.prototype.ID, Palette.INDEX_GREEN)
        ])),
        null,
        null
    ],
    [
        null, null, null, null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BROWN),
            new LayerFootprint(LayerStripes.prototype.ID, Palette.INDEX_LIGHTBROWN)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BROWN),
            new LayerFootprint(LayerSpots.prototype.ID, Palette.INDEX_LIGHTBROWN)
        ])),
        null,
        null
    ],
    [
        null, null, null, null
    ],
    [
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BORDEAUX)
        ])),
        new CardRequirement(new PatternFootprint([
            new LayerFootprint(LayerBase.prototype.ID, Palette.INDEX_BORDEAUX),
            new LayerFootprint(LayerRidge.prototype.ID, Palette.INDEX_RED)
        ])),
        null,
        null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ],
    [
        null, null, null, null
    ]
];

export default CardRequirements