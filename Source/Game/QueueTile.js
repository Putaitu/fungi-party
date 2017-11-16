'use strict';

/**
 * The tile that appears in the queue
 */
Game.Actors.QueueTile = class QueueTile extends Game.Actors.ColorTile {
    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.addComponent('SpriteRenderer', {
            width: UNIT,
            height: UNIT,
            tint: new Engine.Math.Color(1, 1, 1)
        });
    }
    
    /**
     * Getter: Colour
     */
    get color() {
        return this.spriteRenderer.tint;
    }
    
    /**
     * Setter: Colour
     */
    set color(value) {
        this.spriteRenderer.tint = value;

        if(value.r > 0) {
            this.spriteRenderer.setTexture('./Content/Textures/T_Mushroom_Red_D.png');

        } else if(value.g > 0) {
            this.spriteRenderer.setTexture('./Content/Textures/T_Mushroom_Green_D.png');

        } else if(value.b > 0) {
            this.spriteRenderer.setTexture('./Content/Textures/T_Mushroom_Blue_D.png');

        }
    }
    
    /**
     * Sets transparent
     *
     * @param {Boolean} isTransparent
     */
    setTransparent(isTransparent) {
        
    }
    
    /**
     * Event: Picked
     *
     * @param {PlayerGrid} playerGrid
     * @param {Number} tileIndex
     */
    onPicked(playerGrid, tileIndex) {
        let queueColor = this.color;
        
        // Get the current tile
        let currentTile = playerGrid.children[tileIndex];
        
        if(typeof currentTile.isCorrect !== 'undefined') { return; }
        
        // Add the new colour to the old colour
        let oldColor = currentTile.color;
        let newColor = Engine.Math.Color.add(oldColor, queueColor);

        // Apply the mixed colour
        currentTile.pushColor(newColor);
    }

}
