'use strict';

window.Game = {
    Actors: {}
};

// Set screen size
Engine.Settings.screenWidth = 800;
Engine.Settings.screenHeight = 600;

// A standard unit for the game
window.UNIT = Engine.Graphics.screenWidth / 10;

/**
 * A simple colour tile 
 */
Game.Actors.ColorTile = class ColorTile extends Engine.Actors.Actor {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
                    
        this.addComponent('GeometryRenderer', {
            type: 'rectangle',
            width: UNIT,
            height: UNIT,
            fillColor: this.color
        });
    }

    /**
     * Sets stroke color
     *
     * @param {Color} color
     */
    setStrokeColor(color) {
        this.geometryRenderer.strokeColor = color;
        this.geometryRenderer.strokeWidth = color ? 4 : 0;
    }
    
    /**
     * Sets the color
     *
     * @param {Color} color
     */
    setColor(color) {
        this.geometryRenderer.fillColor = color;
    }
    
    /**
     * Gets the color
     */
    getColor(color) {
        return this.geometryRenderer.fillColor;
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.color = new Engine.Math.Color(0, 0, 0);
    }
}

