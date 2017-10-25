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
	getHex() {
		function componentToHex(c) {
			var hex = Math.round(c * 255).toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		}
		
		return "#" + componentToHex(this.r) + componentToHex(this.g) + componentToHex(this.b);
	}
}

Engine.Math.Color = Color;
