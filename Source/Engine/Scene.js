'use strict';

/**
 * The scene subsystem
 */
class Scene {
    // Getters
    get name() {
        return this.constructor.name;
    }
    
    /**
     * Constructor
     */
    constructor() {
        this.actors = [];
    }

    /**
     * Starts the scene
     */
    start() {}

    /**
     * Adds an actor
     *
     * @param {Actor} actor
     */
    addActor(actor) {
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
    getActor(type) {
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
    removeActor(actor) {
        for(let i = this.actors.length - 1; i >= 0; i--) {
            if(
                this.actors[i] === actor || // The argument is an instance
                (typeof actor === 'function' && this.actors[i] instanceof actor) // The argument is a class
            ) {
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
     * Clears all actors
     */
    clearActors() {
        this.removeActor(Engine.Actors.Actor);
    }

    /**
     * Gets a list of actors
     *
     * @param {Actor} type
     */
    getActors(type) {
        let actors = [];

        for(let i in this.actors) {
            if(!type || this.actors[i] instanceof type) {
                actors.push(this.actors[i]);
            }
        }

        return actors;
    }
}

Engine.Scene = Scene;
