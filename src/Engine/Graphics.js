'use strict';

/**
 * The graphics subsystem
 */
class Graphics {
    /**
     * Init
     */
    static init() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.draw();
    }

    /**
     * The draw loop
     */
    static draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for(let i in Engine.Stage.actors) {
            if(!Engine.Stage.actors[i].canDraw) { continue; }

            Engine.Stage.actors[i].draw();
        }

        window.requestAnimationFrame(() => {
            this.draw();
        });
    }

    /**
     * Translate
     *
     * @param {Number} x
     * @param {Number} y
     */
    static moveTo(x, y) {
        this.ctx.moveTo(x, y);
    }

    /**
     * Draw a circle
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} radius
     * @param {String} color
     */
    static drawCircle(x, y, radius, color) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    /**
     * TODO: Draw a rectangle
     */
    static drawRectangle() {}
    
    /**
     * TODO: Draw a line
     */
    static drawLine() {}
}

Engine.Graphics = Graphics;
