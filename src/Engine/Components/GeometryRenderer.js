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
        this.fillColor = '#000000';
        this.type = 'circle';
		this.pivot = { x: 0.5, y: 0.5 };
    }

    /**
     * Draw
     */
    draw() {
        switch(this.type) {
            case 'circle':
                Engine.Graphics.drawCircle(
                    this.actor.transform.position.x + this.offset.x + this.radius - this.pivot.x * (this.radius * 2),
                    this.actor.transform.position.y + this.offset.y + this.radius - this.pivot.y * (this.radius * 2),
                    this.radius,
					this.strokeWidth,
                    this.strokeColor,
					this.fillColor
                );
			
			case 'rectangle' :
				Engine.Graphics.drawRectangle (
                    this.actor.transform.position.x + this.offset.x - this.pivot.x * this.width,
                    this.actor.transform.position.y + this.offset.y - this.pivot.y * this.height,
                    this.width,
					this.height,
                    this.strokeWidth,
					this.strokeColor,
					this.fillColor
				) ;
				
			case 'line' :
				Engine.Graphics.drawLine (
                    this.actor.transform.position.x + this.offset.x,
                    this.actor.transform.position.y + this.offset.y,
                    this.moveX,
					this.moveY,
					this.strokeWidth,
					this.strokeColor
				) ;
				
                break;
        }
    }
}

Engine.Components.GeometryRenderer = GeometryRenderer;