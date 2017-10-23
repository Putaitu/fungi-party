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
}

Engine.Stage = Stage;
