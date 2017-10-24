'use strict';

/**
 * A class for performing color operations
 */
class Color extends Engine.Entity {
	/**
	 * Defaults
	 */
	defaults() {
		this.r = 0;
		this.g = 0;
		this.b = 0;
	}
	
	/**
	 * Gets a random color
	 *
	 * @returns {Color} Color
	 */
	static getRandom() {
		return new Color({
			r: parseFloat((Math.round(Math.random() * 2) / 2).toFixed(1)),
			g: parseFloat((Math.round(Math.random() * 2) / 2).toFixed(1)),
			b: parseFloat((Math.round(Math.random() * 2) / 2).toFixed(1))
		});
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