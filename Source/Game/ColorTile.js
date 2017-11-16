'use strict';

/**
 * A simple colour tile 
 */
Game.Actors.ColorTile = class ColorTile extends Engine.Actors.Actor {
    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.addComponent('Collider', {
            width: UNIT,
            height: UNIT,
            offset: {
                x: 0.5,
                y: 0.5
            }
        });
    }

    /**
     * Getter: Colour
     */
    get color() {
        return new Engine.Math.Color(0, 0, 0);
    }
    
    /**
     * Setter: Colour
     */
    set color(value) {}
}
