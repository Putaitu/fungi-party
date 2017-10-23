'use strict';

/**
 * The base class for everything
 */
class Entity {
    /**
     * Constructor
     */
    constructor(config) {
        for(let k in config) {
            this[k] = config[k];
        }
    }
}

Engine.Entity = Entity;
