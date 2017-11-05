'use strict';

/**
 * A component for drawing sprites
 */
class TextRenderer extends Engine.Components.Component {
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

        this.size = 30;
        this.font = 'OpenSans';
        this.text = '';
        this.xAlign = 'center';
        this.yAlign = 'middle';
        this.strokeColor = null;
        this.fillColor = new Engine.Math.Color(0, 0, 0);
    }

    /**
     * Draw
     */
    draw() {
        if(!this.text) { return; }

        Engine.Graphics.drawText(this.offset.x, this.offset.y, this.text, this.xAlign, this.yAlign, this.size, this.font, this.strokeColor, this.fillColor);
    }
}

Engine.Components.TextRenderer = TextRenderer;
