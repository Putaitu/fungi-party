'use strict';

/**
 * A component
 */
class Component extends Engine.Entity {
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
        this.canUpdate = true;
        this.canDraw = true;
        this.isEnabled = true;
        this.offset = new Engine.Math.Vector2(0, 0);
    }

    /**
     * Toggle
     *
     * @param {Boolean} isActive
     */
    toggle(isActive) {
        this.isActive = isActive;
    }

    /**
     * Update
     */
    update() {}

    /**
     * Draw
     */
    draw() {}
}

Engine.Components.Component = Component;
