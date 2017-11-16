'use strict';

/**
 * A powerup tile
 */
Game.Actors.PowerupTile = class PowerupTile extends Game.Actors.ColorTile {
    /**
     * Constructor
     */
    constructor(params) {
        super(params);
   
        this.textRenderer.size = UNIT / 2;

        switch(this.type) {
            case 'undo':
                this.textRenderer.text = '↺';
                break;
        }
    }

    /**
     * Sets transparent
     *
     * @param {Boolean} isTransparent
     */
    setTransparent(isTransparent) {
        if(isTransparent) {
            this.textRenderer.strokeColor.a = 0.5;
            this.textRenderer.fillColor.a = 0.5;
        } else {
            this.textRenderer.strokeColor.a = 1;
            this.textRenderer.fillColor.a = 1;
        }
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();
        
        this.addComponent('TextRenderer', {
            fillColor: new Engine.Math.Color(1, 1, 1),
            strokeColor: new Engine.Math.Color(0, 0, 0),
            size: UNIT,
            strokeWidth: UNIT / 20
        });

        this.type = 'undo';
    }

    /**
     * Event: Picked
     *
     * @param {PlayerGrid} playerGrid
     * @param {Number} tileIndex
     */
    onPicked(playerGrid, tileIndex) {
        // Get the current tile
        let currentTile = playerGrid.children[tileIndex];
        
        switch(this.type) {
            case 'undo':
                currentTile.undoColor();
                break;

        }
    }
}
