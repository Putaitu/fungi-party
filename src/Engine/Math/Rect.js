'use strict';

/**
 * A rectangle
 */
class Rect {
    // Getters
    get xMin() { return this.x; }
    get yMin() { return this.y; }
    get xMax() { return this.x + this.width; }
    get yMax() { return this.y + this.height; }
    
    /**
     * Constructor
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     */
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * Check whether a point is inside this rect
     *
     * @param {Number} x
     * @param {Number} y
     *
     * @returns {Boolean} Is inside
     */
    contains(x, y) {
        return x >= this.xMin && x <= this.xMax && y >= this.yMin && y <= this.yMax;
    }
}

Engine.Math.Rect = Rect;
