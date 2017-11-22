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
        this.scenes = [];
    }
 
    /**
     * Clears all actors
     */
    static clearActors() {
        this.checkScene();

        this.scene.clearActors();
    }

    /**
     * Adds a scene to the list
     *
     * @param {Scene} scene
     */
    static addScene(scene) {
        if(!scene) { return; }

        if(this.scenes.indexOf(scene) > -1) {
            throw new Error('A scene by name "' + scene.name + '" was already added');
        }

        this.scenes.push(scene);
    }

    /**
     * Reloads the current scene
     *
     * @returns {Scene} Scene
     */
    static reloadCurrentScene() {
        this.checkScene();

        return this.loadScene(this.scene.constructor.name);
    }

    /**
     * Loads a Scene
     *
     * @param {String} name
     *
     * @returns {Scene} Scene
     */
    static loadScene(name) {
        for(let scene of this.scenes) {
            if(scene.name === name) {
                Engine.UI.clearWidgets();
                
                this.scene = new scene(); 

                this.scene.start();

                return this.scene;
            }
        }
       
        throw new Error('A scene by name "' + name + '" was not added');
    }
    
    /**
     * Loads the next Scene in the list
     *
     * @returns {Scene} Scene
     */
    static loadNextScene() {
        for(let i = 0; i < this.scenes.length; i++) {
            let scene = this.scenes[i];

            if(scene === this.scene.constructor && i < this.scenes.length - 1) {
                Engine.UI.clearWidgets();
               
                this.scene = new this.scenes[i + 1](); 

                this.scene.start();

                return this.scene;
            }
        }
       
        throw new Error('No next scene was found');
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
