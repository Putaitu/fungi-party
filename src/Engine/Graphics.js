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

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;

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
    static translate(x, y) {
        this.ctx.moveTo(x, y);
    }

    /**
     * Pushes the draw state
     */
    static push() {
        this.ctx.save();
    }

    /**
     * Pops the draw state
     */
    static pop() {
        this.ctx.restore();
    }

    /**
     * Draw a circle
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} radius
     * @param {String} fillColor
     * @param {String} strokeColor
     */
    static drawCircle(x, y, radius, fillColor, strokeColor) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = fillColor;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.fill();//what if no fill?
    }

    /**
     * Draw a rectangle
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
	 * @param {Number} strokeWidth
     * @param {String} strokeColor
     * @param {String} fillColor

     */
    static drawRectangle(x, y, width, height, strokeWidth, strokeColor, fillColor) {
		this.ctx.beginPath();
		this.ctx.rect(x, y, width, height);
		this.ctx.fillStyle = fillColor;
		this.ctx.lineWidth = strokeWidth;
		this.strokeStyle = strokeColor;
		this.ctx.stroke(); //what if no stroke?
		this.ctx.fill(); //what if no fill?
	}
    
    /**
     * TODO: Draw a line
     */
    static drawLine() {
		//ctx.beginPath();
		//ctx.lineTo(300,150);
		//ctx.stroke();
	}
}

Engine.Graphics = Graphics;
