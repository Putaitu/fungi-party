'use strict';

/**
 * The core game class
 */
class Core {
    /**
     * Init
     */
    static init() {
        Engine.Time.init();
        Engine.Graphics.init();
        Engine.Input.init();
        Engine.Stage.init();
        Engine.UI.init();

        this.trigger('init');
    }

    /**
     * Register event
     *
     * @param {String} type
     * @param {Function} callback
     */
    static on(type, callback) {
        if(!this.events) { this.events = {}; }
        if(!Array.isArray(this.events[type])) { this.events[type] = []; }

        this.events[type].push(callback);
    }

    /**
     * Trigger event
     *
     * @param {String} type
     */
    static trigger(type) {
        if(!this.events) { this.events = {}; }
        if(!Array.isArray(this.events[type])) { return; }

        for(let i in this.events[type]) {
            this.events[type][i]();
        }
    }

    /**
     * Loads a script
     *
     * @param {String} path
     */
    static load(path) {
        if(typeof path !== 'string') {
            Engine.Debug.error('Parameter "path" must be of type "string"');
        }

        // Append .js if not present
        if(path.indexOf('.js') < 0) {
            path += '.js';
        }

        // Append root dir
        path = './src/Game/' + path;

        let script = document.createElement('script');
        script.src = path;

        document.head.appendChild(script);
    }
}

window.Engine = {
	Core: Core,
	Math: {}
};

document.addEventListener('DOMContentLoaded', () => {
    Engine.Core.init();
}, false);
