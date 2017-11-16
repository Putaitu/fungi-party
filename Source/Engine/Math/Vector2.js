'use strict';

/**
 * A vector class for 2 dimensional calculations
 */
class Vector2 {
    /**
     * Constructor
     */
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
}

Engine.Math.Vector2 = Vector2;
