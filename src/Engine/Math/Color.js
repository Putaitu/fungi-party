'use strict';

/**
 * A class for performing color operations
 */
class Color {
    // Enum: Rule
    static get RULE() {
        return {
            NONE: 0,
            NO_GREYSCALE: 1
        }
    }
    
    // Preset: Black
    static get BLACK() {
        return new Color(0, 0, 0, 1);
    }

    /**
     * Constructor
     */
    constructor(r, g, b, a) {
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a || 1;

        if(this.r > 1) { this.r = 1; };
        if(this.g > 1) { this.g = 1; };
        if(this.b > 1) { this.b = 1; };
        if(this.a > 1) { this.a = 1; };
        
        if(this.r < 0) { this.r = 0; };
        if(this.g < 0) { this.g = 0; };
        if(this.b < 0) { this.b = 0; };
        if(this.a < 0) { this.a = 0; };
    }

    /**
     * Returns negative colour
     *
     * @returns {Color} Negative
     */
    getNegative() {
        return new Color(1 - this.r, 1 - this.g, 1 - this.b, this.a);
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
        diff += Math.abs(this.a - color.a);

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
        return new Color(a.r + b.r, a.g + b.g, a.b + b.b, a.a, b.a);
    }

    /**
     * Gets a random color
     *
     * @param {Number} divisableBy
     *
     * @returns {Color} Color
     */
    static getRandom(divisableBy = 1, rule = Color.RULE.NONE) {
        let dec = 1 / divisableBy;
        let generate = () => {
            return new Color(
                parseFloat((Math.round(Math.random() * dec) / dec).toFixed(1)),
                parseFloat((Math.round(Math.random() * dec) / dec).toFixed(1)),
                parseFloat((Math.round(Math.random() * dec) / dec).toFixed(1)),
                1
            );
        };

        let color = generate();

        // Rule: No greys
        while(rule === Color.RULE.NO_GREYSCALE && color.isGreyscale()) {
            color = generate();
        }

        return color;
    }
   
    /**
     * Gets whether this colour is greyscale
     *
     * @returns {Boolean} Is greyscale
     */
    isGreyscale() {
        return this.r === this.g && this.g === this.b;
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
        
        return '#' + componentToHex(this.r) + componentToHex(this.g) + componentToHex(this.b);
    }
   
    /**
     * Gets an RGB value
     *
     * @returns {String} RGB
     */
    toRGB() {
        return 'rgba(' + Math.round(this.r * 255) + ',' + Math.round(this.g * 255) + ',' + Math.round(this.b * 255) + ',' + this.a + ')';
    }
}

Engine.Math.Color = Color;
