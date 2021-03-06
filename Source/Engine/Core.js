'use strict';

/**
 * The core game class
 */
class Core {
    /**
     * Init
     */
    static init() {
        // Fullscreen invisible button
        let fsBtn = document.createElement('button');
        fsBtn.style.position = 'fixed';
        fsBtn.style.top = '0%';
        fsBtn.style.left = '0%';
        fsBtn.style.width = '100%';
        fsBtn.style.height = '100%';
		fsBtn.style.fontSize = '4vw';
        fsBtn.innerHTML = 'PRESS TO PLAY<br><br>' + Engine.Settings.Game.title;

        document.body.appendChild(fsBtn);

        fsBtn.addEventListener('click', (e) => {
            // Remove the fullscreen button
            document.body.removeChild(fsBtn);

            // Set fullscreen
            Engine.Graphics.setFullscreen(true)
            .then(() => {
                // Init submodules
                Engine.Time.init();
                Engine.UI.init();
                Engine.Graphics.init();
                Engine.Input.init();
                Engine.Stage.init();

                // Init everything else
                this.trigger('init');
            });
        });
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

Engine.Core = Core;
