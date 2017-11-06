'use strict';

/**
 * A component for detecting collisions
 */
class Collider extends Engine.Components.Component {
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

        this.width = 100;
        this.height = 100;
    }

    /**
     * Gets bounding rect
     */
    getBounds() {
        let transform = this.actor.getGlobalTransform();
       
        return new Engine.Math.Rect(
            transform.position.x - this.offset.x,
            transform.position.y - this.offset.y,
            this.width,
            this.height
        );
    }
}
