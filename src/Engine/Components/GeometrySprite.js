'use strict';

/**
 * A component for drawing simple geometry
 */
class GeometrySprite extends Engine.Components.Component {
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

        this.radius = 10;
        this.fillColor = '#000000';
        this.strokeColor = '#000000';
        this.type = 'circle';
    }

    /**
     * Draw
     */
    draw() {
        // TODO: Cases for rectangles and lines
        switch(this.type) {
            case 'circle':
                Engine.Graphics.drawCircle(
                    this.actor.position.x + this.position.x,
                    this.actor.position.y + this.position.y,
                    this.radius,
                    this.fillColor,
                    this.strokeColor
                );
                break;
        }
    }
}

Engine.Components.GeometrySprite = GeometrySprite;
