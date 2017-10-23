'use strict';

/**
 * A component
 */
class Component extends Engine.Entity {
    /**
     * Constructor
     */
    constructor(config) {
        // Set defaults
        if(typeof config.canUpdate === 'undefined') {
            config.canUpdate = true;
        }
        
        if(typeof config.canDraw === 'undefined') {
            config.canDraw = true;
        }

        if(typeof config.isActive === 'undefined') {
            config.isActive = true;
        }

        if(!config.position) {
            config.position = { x: 0, y: 0 };
        }

        // Apply config
        super(config);
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

Engine.Components = { Component: Component };
