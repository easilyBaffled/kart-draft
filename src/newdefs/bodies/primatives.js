/**
 *
 * @type {{HANDLING: string, SPEED: string, POSITION: string, BODIES: string, POWER: string, ALIVE: string, LEVEL: string}}
 */
/**
 * Primatives
 */

/**
 * A non-scaled position in a 2D world
 * @typedef {Object} WorldPos
 * @property {number} x
 * @property {number} y
 */

/**
 * Indicate where this Element is, for example a card can be in a deck or in the track
 * @typedef {Object} In
 * @property {string} type
 * @property {string} id
 */

/**
 * A number that wraps around from min to max, rather than being clamped
 * @typedef {Object} WrappingNumber
 * @property {number} value
 * @property {number} min
 * @property {number} max
 */

/**
 * A number that will stay at the min or max rather then exceeding them
 * @typedef {Object} ClampedNumber
 * @property {number} value
 * @property {number} min
 * @property {number} max
 */

/**
 * A number that will stay at the min or max rather then exceeding them
 * @typedef {Object} Attribute
 * @property {string} id
 * @property {string} type
 * @property {*} value
 */

/**
 * Kart Properties
 */

/**
 * @typedef {number} TopSpeed
 */

/**
 * @typedef {number} Accel
 */

/**
 * @typedef {ClampedNumber} Speed
 */

/**
 * @typedef {number} Handling
 */

/**
 * @typedef {Object} TrackPos
 * @property {string} trackId
 * @property {number} length
 */


/**
 * Track Segment Properties
 */

/**
 * @typedef {number} Length
 */

/**
 * @typedef {number} Angle
 */

/**
 * @typedef {Object} Path
 * @property {WorldPos} ControlPoint
 * @property {WorldPos} EndPoint
 */

/**
 * @typedef {string} PathString
 */

export const attr = {
    ALIVE:    "ALIVE",
    BODIES:   "BODIES",
    HANDLING: "handling",
    LEVEL:    "LEVEL",
    POSITION: "position",
    POWER:    "power",
    SPEED:    "speed"
};

export const events = {
    COLLISION: "COLLISION",
    SPAWN:     "SPAWN",
    TICK:      "TICK",
    USE:       "USE"
};
export const time = {
    TICK: 1
};

export const affectTargets = {
    ALL:      "ALL",
    COLLIDER: "COLLIDER",
    HOLDER:   "HOLDER",
    RANGE:    "RANGE",
    SELF:     "SELF",
    WORLD:    "WORLD"
};

export const placement = {
    AHEAD:  'AHEAD',
    BEHIND: 'BEHIND'
};

export const attribute = ({ type, id, value, maxValue }) => ({
    id: id ?? type,
    maxValue,
    type,
    value
});
attribute.speed = ({ value, maxValue }) =>
    attribute({
        id:   attr.SPEED,
        maxValue,
        type: attr.SPEED,
        value
    });
attribute.position = ({ value }) =>
    attribute({
        id:   attr.POSITION,
        type: attr.POSITION,
        value
    });
attribute.handling = ({ value, maxValue }) =>
    attribute({
        id:   attr.HANDLING,
        maxValue,
        type: attr.HANDLING,
        value
    });
