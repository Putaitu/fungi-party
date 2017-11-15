'use strict';

/**
 * The time subsystem
 */
class Time {
    /**
     * Init
     */
    static init() {
        this.deltaTime = 0;
        this.startTime = Date.now();
        this.lastTimeStamp = 0;

        // Kick off the first time update
        window.requestAnimationFrame((timestamp) => {
            this.update(0);
        });
    }
    
    /**
     * The update loop
     */
    static update(timestamp) {
        this.deltaTime = (timestamp - this.lastTimeStamp) * 0.001;
        this.lastTimeStamp = timestamp;
        
        let actors = Engine.Stage.getActors();
        
        for(let i in actors) {
            if(!actors[i].canUpdate) { continue; }

            actors[i].update();
        }

        window.requestAnimationFrame((timestamp) => {
            this.update(timestamp);
        });
    }
}

Engine.Time = Time;
