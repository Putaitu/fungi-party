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
     *
     * @returns {Component} Component
     */
    addComponent(component) {
        if(component instanceof Engine.Components.Component === false) {
            throw new TypeError('Not a component', component);
        }

        component.actor = this;

        this.components.push(component);

        return component;
    }

    /**
     * Gets a component
     *
     * @param {Component} type
     *
     * @returns {Component} Component
     */
    getComponent(type) {
        for(let i in this.components) {
            if(this.components[i] instanceof type) {
                return this.components[i];
            }
        }
    }
    
    /**
     * Gets a list of components
     *
     * @param {Component} type
     *
     * @returns {Array} Components
     */
    getComponents(type) {
        let result = [];

        for(let i in this.components) {
            if(typeof type === 'undefined' || this.components[i] instanceof type) {
                result.add(this.components[i]);
            }
        }

        return result;
    }

    /**
     * Draw
     */
    draw() {
        for(let i in this.components) {
            if(!this.components[i].canDraw) { continue; }

            this.components[i].draw();
        }

        // Debug
        if(Engine.Settings.useDebug === true) {
            Engine.Graphics.drawCircle(this.position.x, this.position.y, 10, 0, null, '#ff0000');
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
