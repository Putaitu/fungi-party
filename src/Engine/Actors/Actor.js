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
        this.components = [];
        this.events = {};
        this.children = [];
        this.parent = null;

        this.addComponent(Engine.Components.Transform);
    }

    /**
     * Adds an event handler
     *
     * @param {String} event
     * @param {Function} handler
     */
    on(event, handler) {
        if(!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(handler);
    }

    /**
     * Triggers an event
     *
     * @param {String} event
     */
    trigger(event) {
        if(!this.events[event]) { return; }

        for(let i in this.events[event]) {
            this.events[event][i]();
        }
    }

    /**
     * Gets the global transform
     *
     * @returns {Transform} Global transform
     */
    getGlobalTransform() {
        let result = this.transform.clone();
        let parent = this.parent;

        while(parent) {
            result = Engine.Components.Transform.add(result, parent.transform);

            parent = parent.parent;
        }

        return result;
    }

    /**
     * Adds a child
     *
     * @param {Actor} actor
     */
    addChild(actor) {
        if(!actor || actor instanceof Actor === false) { return; }

        actor.parent = this;

        this.children.push(actor);
    }

    /**
     * Adds a components
     *
     * @param {Component|String} component
     * @param {Object} config
     *
     * @returns {Component} Component
     */
    addComponent(component, config) {
        if(typeof component === 'function') {
            component = new component(config);
        }

        if(typeof component === 'string') {
            component = new Engine.Components[component](config);
        }

        if(component instanceof Engine.Components.Component === false) {
            throw new TypeError('Not a component', component);
        }

        // Assign component name as shortcut..
        let name = component.constructor.name;
        
        name = name.substring(0, 1).toLowerCase() + name.substring(1);

        // ...but only if it hasn't been already
        if(!this[name]) {
            this[name] = component;
        }

        component.actor = this;

        this.components.push(component);

        return component;
    }

    /**
     * Gets a component
     *
     * @param {Component|String} type
     *
     * @returns {Component} Component
     */
    getComponent(type) {
        if(typeof type === 'string') {
            type = Engine.Components[type];
        }

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

            Engine.Graphics.translate(this.components[i].offset.x, this.components[i].offset.y);

            this.components[i].draw();
            
            Engine.Graphics.translate(-this.components[i].offset.x, -this.components[i].offset.y);
        }

        // Debug
        if(Engine.Settings.useDebug === true) {
            Engine.Graphics.drawCircle(this.transform.position.x, this.transform.position.y, 10, 0, null, '#ff0000');
        }
    }

    /**
     * Destroys this actor
     */
    destroy() {
        Engine.Stage.removeActor(this);
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
