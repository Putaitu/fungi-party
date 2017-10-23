'use strict';

/**
 * The base actor class
 */
class Actor extends Engine.Entity {
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
        
        if(!config.position) {
            config.position = { x: 0, y: 0 };
        }

        if(!config.components) {
            config.components = [];
        }

        // Apply config
        super(config);

        // Add to stage
        Engine.Stage.addActor(this);
    }

    /**
     * Adds a components
     *
     * @param {Component} component
     */
    addComponent(component) {
        if(component instanceof Engine.Components.Component === false) {
            throw new TypeError('Not a component', component);
        }

        component.actor = this;

        this.components.push(component);
    }

    /**
     * Draw
     */
    draw() {
        Engine.Graphics.moveTo(this.position.x, this.position.y);

        for(let i in this.components) {
            if(!this.components[i].canDraw) { continue; }

            this.components[i].draw();
        }

        Engine.Graphics.moveTo(0, 0);
    }

    /**
     * Update
     */
    update() {
        for(let i in this.components) {
            if(!this.components[i].canUpdate) { continue; }

            this.components[i].update();
        }
    }
}

Engine.Actors = { Actor: Actor };
