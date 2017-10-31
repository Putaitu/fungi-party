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

        this.screenWidth = Engine.Settings.screenWidth || window.innerWidth;
        this.screenHeight = Engine.Settings.screenHeight || window.innerHeight;

        this.canvas.style.display = 'block';
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;

        this.backgroundColor = '#cccccc';
        
        document.body.appendChild(this.canvas);

        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        document.body.style.margin = 0;
        document.body.style.display = 'flex';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        document.body.style.backgroundColor = '#333333';

        this.draw();
    }

    /**
     * The draw loop
     */
    static draw() {
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for(let i in Engine.Stage.actors) {
            if(!Engine.Stage.actors[i].canDraw) { continue; }

            let transform = Engine.Stage.actors[i].getGlobalTransform();

            this.translate(transform.position.x, transform.position.y);
            //this.scale(transform.scale.x, transform.scale.y);
            this.rotate(transform.rotate);

            Engine.Stage.actors[i].draw();
           
            this.rotate(-transform.rotate);
            //this.scale(Math.pow(transform.scale.x, -1), Math.pow(transform.scale.y, -1));
            this.translate(-transform.position.x, -transform.position.y);
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
        this.ctx.translate(x, y);
    }
    
    /**
     * Rotate
     *
     * @param {Number} degrees
     */
    static rotate(degrees) {
        this.ctx.rotate(degrees * Math.PI / 180);
    }
    
    /**
     * Scale
     *
     * @param {Number} x
     * @param {Number} y
     */
    static scale(x, y) {
        this.ctx.scale(x, y);
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
     * @param {Color} strokeColor
     * @param {Color} fillColor
     */
    static drawCircle(x, y, radius, strokeWidth, strokeColor, fillColor) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.lineWidth = strokeWidth;
        
        if(fillColor) {
            this.ctx.fillStyle = fillColor.toHex();
            this.ctx.fill();
        }
        
        if(strokeColor) {
            this.ctx.strokeStyle = strokeColor.toHex();
            this.ctx.stroke();
        }
    }

    /**
     * Draw a rectangle
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @param {Number} strokeWidth
     * @param {Color} strokeColor
     * @param {Color} fillColor
     */
    static drawRectangle(x, y, width, height, strokeWidth, strokeColor, fillColor) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.lineWidth = strokeWidth;

        if(fillColor) {
            this.ctx.fillStyle = fillColor.toHex();
            this.ctx.fill();
        }
        
        if(strokeColor) {
            this.ctx.strokeStyle = strokeColor.toHex();
            this.ctx.stroke();
        }
    }
    
    /**
     * Draw a line
     *
     * @param {Number} moveX How much to move on x-axis
     * @param {Number} moveY How much to move on y-axis
     * @param {Number} strokeWidth
     * @param {Color} strokeColor
     */
    static drawLine(x, y, moveX, moveY, strokeWidth, strokeColor) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + moveX, y + moveY);
        this.ctx.lineWidth = strokeWidth;
        this.ctx.strokeStyle = strokeColor ? strokeColor.toHex() : '#000000';
        this.ctx.stroke();
    }
}

Engine.Graphics = Graphics;
