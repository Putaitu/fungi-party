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
            height: UNIT
        });
    }
    
    /**
     * Getter: Colour
     */
    get color() {
        return this._color;
    }
    
    /**
     * Setter: Colour
     */
    set color(value) {
        this._color = value;

        if(value.r === 1) {
            this.spriteRenderer.texture = './Content/Textures/T_MushroomDouble_Red_D.png';
        
        } else if(value.r === 0.5) {
            this.spriteRenderer.texture = './Content/Textures/T_Mushroom_Red_D.png';

        } else if(value.g === 1) {
            this.spriteRenderer.texture = './Content/Textures/T_MushroomDouble_Green_D.png';
        
        } else if(value.g === 0.5) {
            this.spriteRenderer.texture = './Content/Textures/T_Mushroom_Green_D.png';

        } else if(value.b === 1) {
            this.spriteRenderer.texture = './Content/Textures/T_MushroomDouble_Blue_D.png';
        
        } else if(value.b === 0.5) {
            this.spriteRenderer.texture = './Content/Textures/T_Mushroom_Blue_D.png';

        }
    }
    
    /**
     * Sets transparent
     *
     * @param {Boolean} isTransparent
     */
    setTransparent(isTransparent) {
        this.spriteRenderer.alpha = isTransparent ? 0.5 : 1; 
    }
}
