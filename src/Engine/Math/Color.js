'use strict';

/**
 * A class for performing color operations
 */
class Color {
    /**
     * Constructor
     */
    constructor(r, g, b) {
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;

        if(this.r > 1) { this.r = 1; };
        if(this.g > 1) { this.g = 1; };
        if(this.b > 1) { this.b = 1; };
        
        if(this.r < 0) { this.r = 0; };
        if(this.g < 0) { this.g = 0; };
        if(this.b < 0) { this.b = 0; };
    }

    /**
     * Returns negative colour
     *
     * @returns {Color} Negative
     */
    getNegative() {
        return new Color(1 - this.r, 1 - this.g, 1 - this.b);
    }

    /**
     * Returns true if this colour equals the other
     *
     * @param {Color} color
     *
     * @returns {Boolean} Is equal
     */
    equals(color) {
        return this.compare(color) === 0;
    }
        
    /**
     * Compares to another colour
     *
     * @param {Color} color
     *
     * @returns {Number} Difference
     */
    compare(color) {
        let diff = 0;

        diff += Math.abs(this.r - color.r);
        diff += Math.abs(this.g - color.g);
        diff += Math.abs(this.b - color.b);

        return diff;
    }

    /**
     * Adds one color to another
     *
     * @param {Color} a
     * @param {Color} b
     *
     * @returns {Color} Result
     */
    static add(a, b) {
        return new Color(a.r + b.r, a.g + b.g, a.b + b.b);
    }

    /**
     * Gets a random color
     *
     * @param {Number} divisableBy
     *
     * @returns {Color} Color
     */
    static getRandom(divisableBy = 1) {
        let dec = 1 / divisableBy;

        return new Color(
            parseFloat((Math.round(Math.random() * dec) / dec).toFixed(1)),
            parseFloat((Math.round(Math.random() * dec) / dec).toFixed(1)),
            parseFloat((Math.round(Math.random() * dec) / dec).toFixed(1))
        );
    }
    
    /**
     * Gets a hex value
     *
     * @returns {String} Hex
     */
    toHex() {
        function componentToHex(c) {
            var hex = Math.round(c * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }
        
        return "#" + componentToHex(this.r) + componentToHex(this.g) + componentToHex(this.b);
    }
}

Engine.Math.Color = Color;
