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
}

Engine.Entity = Entity;
