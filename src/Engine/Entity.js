'use strict';

/**
 * The base class for everything
 */
class Entity {
    /**
     * Constructor
     */
    constructor(config) {
        this.defaults();

        if(!config) { return; }

        for(let k in config) {
            this[k] = config[k];
        }
    }

    /**
     * Defaults
     */
    defaults() {}

    /**
     * Creates a clone of this Entity
     *
     * @returns {Entity} Clone
     */
    clone() {
        return Object.assign({}, this);
    }
}

Engine.Entity = Entity;
