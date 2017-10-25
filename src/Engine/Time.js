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
        
        this.update(0);
    }
    
    /**
     * The update loop
     */
    static update(timestamp) {
        this.deltaTime = (timestamp - this.lastTimeStamp) * 0.01;
        this.lastTimeStamp = timestamp;
        
        for(let i in Engine.Stage.actors) {
            if(!Engine.Stage.actors[i].canUpdate) { continue; }

            Engine.Stage.actors[i].update();
        }

        window.requestAnimationFrame((timestamp) => {
            this.update(timestamp);
        });
    }
}

Engine.Time = Time;
