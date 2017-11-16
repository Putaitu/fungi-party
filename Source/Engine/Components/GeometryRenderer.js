'use strict';

/**
 * A component for drawing simple geometry
 */
class GeometryRenderer extends Engine.Components.Component {
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
        this.fillColor = new Engine.Math.Color(1, 1, 1);
        this.type = 'circle';
        this.pivot = new Engine.Math.Vector2(0.5, 0.5);
    }

    /**
     * Draw
     */
    draw() {
        switch(this.type) {
            case 'circle':
                Engine.Graphics.drawCircle(
                    this.radius - this.pivot.x * (this.radius * 2),
                    this.radius - this.pivot.y * (this.radius * 2),
                    this.radius,
                    this.strokeWidth,
                    this.strokeColor,
                    this.fillColor
                );
            
            case 'rectangle' :
                Engine.Graphics.drawRectangle (
                    -this.pivot.x * this.width,
                    -this.pivot.y * this.height,
                    this.width,
                    this.height,
                    this.strokeWidth,
                    this.strokeColor,
                    this.fillColor
                );
                
            case 'line':
                if(!this.points) { this.points = []; }

                for(let i = 0; i < this.points.length - 1; i++) {
                    Engine.Graphics.drawLine (
                        this.points[i].x,
                        this.points[i].y,
                        this.points[i + 1].x,
                        this.points[i + 1].y,
                        this.strokeWidth,
                        this.strokeColor
                    );
                }
                break;
        }
    }
}

Engine.Components.GeometryRenderer = GeometryRenderer;
