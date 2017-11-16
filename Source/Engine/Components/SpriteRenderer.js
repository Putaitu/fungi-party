'use strict';

/**
 * A component for drawing sprites
 */
class SpriteRenderer extends Engine.Components.Component {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
    }
   
    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.texture = null;
        this.rect = null;
        this.width = null;
        this.height = null;
        this.offset = new Engine.Math.Vector2(0.5, 0.5);
        this.useTiling = false;
    }

    /**
     * Sets a texture
     *
     * @param {Image|String} img
     */
    setTexture(img) {
        if(typeof img === 'string') {
            let src = img;

            img = new Image();
            img.src = src;
        }

        this.texture = img;
    }

    /**
     * Draw
     */
    draw() {
        if(!this.texture) { return; }

        if(this.useTiling) {
            if(!this.texturePattern) {
                this.texturePattern = Engine.Graphics.ctx.createPattern(this.texture, 'repeat');
            }

            Engine.Graphics.drawPattern(
                -this.offset.x * (this.width || 0),
                -this.offset.y * (this.height || 0),
                this.texturePattern,
                this.width,
                this.height
            );
        } else {
            this.texturePattern = null;

            Engine.Graphics.drawImage(
                -this.offset.x * (this.width || 0),
                -this.offset.y * (this.height || 0),
                this.texture,
                this.rect,
                this.width,
                this.height
            );
        }
    }
}

Engine.Components.SpriteRenderer = SpriteRenderer;
