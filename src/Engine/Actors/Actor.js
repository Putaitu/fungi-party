'use strict';

/**
 * The base actor class
 */
class Actor extends Engine.Entity {
    /**
     * Constructor
     */
    constructor(config) {
        // Apply config
        super(config);

        // Add to stage
        Engine.Stage.addActor(this);
    }

    /**
     * Defaults
     */
    defaults() {
        this.canUpdate = true;
        this.canDraw = true;
        this.position = { x: 0, y: 0 };
        this.components = [];
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
        for(let i in this.components) {
            if(!this.components[i].canDraw) { continue; }

            this.components[i].draw();
        }
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
