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
        Engine.Input.init();
        Engine.Graphics.init();
        Engine.Stage.init();

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
}

window.Engine = {
	Core: Core,
	Math: {}
};

document.addEventListener('DOMContentLoaded', () => {
    Engine.Core.init();
}, false);
