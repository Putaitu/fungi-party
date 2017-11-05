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
        this.sprites = [];
    }

    /**
     * Draw
     */
    draw() {
        if(!this.texture) { return; }
    }
}

Engine.Components.SpriteRenderer = SpriteRenderer;
