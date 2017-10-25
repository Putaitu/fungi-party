'use strict';

/**
 * The stage subsystem
 */
class Stage {
    /**
     * Init
     */
    static init() {
        this.actors = [];
    }

    /**
     * Adds an actor
     *
     * @param {Actor} actor
     */
    static addActor(actor) {
        if(actor instanceof Engine.Actors.Actor === false) {
            throw new TypeError('Not an Actor', actor);
        }

        this.actors.push(actor);
    }

    /**
     * Gets an actor
     *
     * @param {Actor} type
     */
    static getActor(type) {
        for(let i in this.actors) {
            if(this.actors[i] instanceof type) {
                return this.actors[i];
            }
        }

        return null;
    }
}

Engine.Stage = Stage;
