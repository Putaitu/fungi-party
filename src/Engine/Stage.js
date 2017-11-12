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
    
    /**
     * Removes an actor
     *
     * @param {Actor} actor
     */
    static removeActor(actor) {
        for(let i = this.actors.length - 1; i > 0; i--) {
            if(this.actors[i] === actor) {
                // Update parent Actor
                if(this.actors[i].parent) {
                    let childIndex = this.actors[i].parent.children.indexOf(this.actors[i]);

                    this.actors[i].parent.children.splice(childIndex, 1);
                }

                this.actors.splice(i, 1);
            }
        }
    }
        
    /**
     * Gets a list of actors
     *
     * @param {Actor} type
     */
    static getActors(type) {
        let actors = [];

        for(let i in this.actors) {
            if(!type || this.actors[i] instanceof type) {
                actors.push(this.actors[i]);
            }
        }

        return actors;
    }
}

Engine.Stage = Stage;
