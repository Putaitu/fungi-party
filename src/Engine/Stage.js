'use strict';

/**
 * The stage subsystem
 */
class Stage {
    /**
     * Init
     */
    static init() {
        this.scene = null;
        this.scenes = {};
    }
  
    /**
     * Adds a scene to the list
     *
     * @param {Scene} scene
     */
    static addScene(scene) {
        if(!scene) { return; }

        if(this.scenes[scene.name]) {
            throw new Error('A scene by name "' + scene.name + '" was already added');
        }

        this.scenes[scene.name] = scene;
    }

    /**
     * Loads a Scene
     *
     * @param {String} name
     *
     * @returns {Scene} Scene
     */
    static loadScene(name) {
        if(!this.scenes[name]) {
            throw new Error('A scene by name "' + name + '" was not added');
        }
        
        this.scene = new this.scenes[name](); 

        this.scene.start();
    }

    /**
     * Checks if a Scene is loaded
     */
    static checkScene() {
        if(!this.scene) {
            throw new Error('No scene is currently loaded');
        }
    }

    /**
     * Adds an actor
     *
     * @param {Actor} actor
     */
    static addActor(actor) {
        this.checkScene();
        this.scene.addActor(actor);
    }

    /**
     * Gets an actor
     *
     * @param {Actor} type
     */
    static getActor(type) {
        this.checkScene();
        return this.scene.getActor(type);
    }
    
    /**
     * Removes an actor
     *
     * @param {Actor} actor
     */
    static removeActor(actor) {
        this.checkScene();
        this.scene.removeActor(actor);
    }
        
    /**
     * Gets a list of actors
     *
     * @param {Actor} type
     */
    static getActors(type) {
        this.checkScene();
        return this.scene.getActors(type);
    }
}

Engine.Stage = Stage;
