'use strict';

/**
 * The input subsystem
 */
class Input {
    /**
     * Init
     */
    static init() {
        this.events = {
            keydown: {},
            keyup: {}
        };

        document.addEventListener('keydown', (e) => {
            this.trigger('keydown', e.which, e);
        });
        
        document.addEventListener('keyup', (e) => {
            this.trigger('keyup', e.which, e);
        });
    }

    /**
     * Triggers an input event
     *
     * @param {String} action
     * @param {Number} key
     * @param {InputEvent} event
     */
    static trigger(action, key, event) {
        if(!this.events[action][key]) { return; }
            
        for(let i in this.events[action][key]) {
            if(typeof this.events[action][key][i] !== 'function') { continue; }

            this.events[action][key][i](event);
        }
    }

    /**
     * Binds an input event
     *
     * @param {String} action
     * @param {Number|String} key
     * @param {Function} callback
     */
    static on(action, key, callback) {
        if(!this.events[action][key]) {
            this.events[action][key] = [];
        }

        this.events[action][key].push(callback);
    }
}

Engine.Input = Input;
