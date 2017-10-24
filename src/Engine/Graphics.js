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
     * @param {Number} strokeWidth
     * @param {String} strokeColor
     * @param {String} fillColor
     */
    static drawCircle(x, y, radius, strokeWidth, strokeColor, fillColor) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
		this.ctx.lineWidth = strokeWidth;
		
		if(fillColor) {
			this.ctx.fillStyle = fillColor;
			this.ctx.fill();
		}
		
		if(strokeColor) {
			this.ctx.strokeStyle = strokeColor;
			this.ctx.stroke();
		}
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
		this.ctx.lineWidth = strokeWidth;
		
		if(fillColor) {
			this.ctx.fillStyle = fillColor;
			this.ctx.fill();
		}
		
		if(strokeColor) {
			this.ctx.strokeStyle = strokeColor;
			this.ctx.stroke();
		}
	}
    
    /**
     * Draw a line
     * @param {Number} moveX How much to move on x-axis
     * @param {Number} moveY How much to move on y-axis
	 * @param {Number} strokeWidth
     * @param {String} strokeColor
     */
    static drawLine(x, y, moveX, moveY, strokeWidth, strokeColor) {
		this.ctx.beginPath();
		this.ctx.moveTo(x, y);
		this.ctx.lineTo(x + moveX, y + moveY);
		this.ctx.lineWidth = strokeWidth;
		this.ctx.strokeStyle = strokeColor;
		this.ctx.stroke();
	}
}

Engine.Graphics = Graphics;
