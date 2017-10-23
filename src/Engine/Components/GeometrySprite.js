'use strict';

/**
 * A component for drawing simple geometry
 */
class GeometrySprite extends Engine.Components.Component {
    /**
     * Constructor
     */
    constructor(config) {
        // Set defaults
        if(!config.radius) {
            config.radius = 10;
        }

        if(!config.fillColor) {
            config.fillColor = '#000000';
        }

        if(!config.type) {
            config.type = 'circle';
        }
        
        config.canUpdate = true;
        config.canDraw = true;

        // Apply config
        super(config);
    }
    
    /**
     * Draw
     */
    draw() {
        // TODO: Cases for rectangles and lines
        switch(this.type) {
            case 'circle':
                Engine.Graphics.drawCircle(
                    this.position.x,
                    this.position.y,
                    this.radius,
                    this.color
                );
                break;
        }
    }
}

Engine.Components.GeometrySprite = GeometrySprite;
