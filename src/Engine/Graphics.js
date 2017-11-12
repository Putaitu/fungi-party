'use strict';

/**
 * The graphics subsystem
 */
class Graphics {
    /**
     * Init
     */
    static init() {
        // Init canvas and context
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        // Init colours
        this.backgroundColor = new Color(0.7, 0.7, 0.7);
        this.frameColor = new Color(0.3, 0.3, 0.3);

        // Set canvas styling
        this.canvas.style.display = 'block';

        // Append to body
        document.body.appendChild(this.canvas);
        
        // Set html styling
        document.documentElement.style.overflow = 'hidden';

        // Set body styling
        document.body.style.overflow = 'hidden';
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        document.body.style.margin = 0;
        document.body.style.display = 'flex';
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        document.body.userSelect = 'none';
        document.body.style.backgroundColor = this.frameColor.toHex();

        // Update screen dimensions
        this.updateScreenDimensions();

        // Kick off the first draw call
        window.requestAnimationFrame(() => {
            this.draw();
        });
    }

    /**
     * Sets the background colour
     *
     * @param {Color} color
     */
    static setBackgroundColor(color) {
        this.backgroundColor = color;
    }

    /**
     * Updates the screen dimensions
     */
    static updateScreenDimensions() {
        let width = window.innerWidth;
        let height = window.innerHeight;

        this.screenWidth = width;
        this.screenHeight = height;
        
        this.screenWidth = width;
        this.screenHeight = height;
        
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;

        Engine.UI.updateScreenDimensions();
    }

    /**
     * Set full screen
     *
     * @param {Boolean} isFullscreen
     *
     * @returns {Promise} Completed
     */
    static setFullscreen(isFullscreen) {
        return new Promise((resolve, reject) => {
            // Assume standards compatible API is available
            let changeName = 'fullscreenchange';
            let requestName = 'requestFullScreen';
            let exitName = 'exitFullScreen';

            // Change event
            let onChange = () => {
                document.removeEventListener(changeName, onChange);

                window.requestAnimationFrame(() => {
                    resolve();
                });
            };

            // Webkit
            if(typeof document.documentElement.webkitRequestFullscreen === 'function') {
                changeName = 'webkitfullscreenchange';
                requestName = 'webkitRequestFullScreen';
                exitName = 'webkitExitFullScreen';

            // Mozilla
            } else if(typeof document.documentElement.mozFullscreen === 'function') {
                changeName = 'mozfullscreenchange';
                requestName = 'mozRequestFullScreen';
                exitName = 'mozExitFullScreen';
            
            // MS
            } else if(typeof document.documentElement.msFullscreen === 'function') {
                changeName = 'MSFullscreenChange';
                requestName = 'msRequestFullScreen';
                exitName = 'msExitFullScreen';

            }

            // Toggle on/off
            if(isFullscreen) {
                document.documentElement[requestName]();
            
            } else {
                document[exitName]();
            }
            
            // Set change event
            document.documentElement.addEventListener(changeName, onChange);
        });
    }

    /**
     * The draw loop
     */
    static draw() {
        // First check if the screen dimensions are correct
        if(this.screenWidth !== window.innerWidth || this.screenHeight !== window.innerHeight) {
            this.updateScreenDimensions();
        }

        this.ctx.fillStyle = this.backgroundColor.toHex();
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for(let i in Engine.Stage.actors) {
            if(!Engine.Stage.actors[i].canDraw) { continue; }

            let transform = Engine.Stage.actors[i].getGlobalTransform();

            this.translate(transform.position.x, transform.position.y);
            this.scale(transform.scale.x, transform.scale.y);
            this.rotate(transform.rotate);

            Engine.Stage.actors[i].draw();
           
            this.rotate(-transform.rotate);
            this.scale(Math.pow(transform.scale.x, -1), Math.pow(transform.scale.y, -1));
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
     * Draws text
     *
     * @param {Number} x
     * @param {Number} y
     * @param {String} text
     * @param {String} xAlign
     * @param {String} yAlign
     * @param {Number} size
     * @param {String} font
     * @param {Number} strokeWidth
     * @param {Color} strokeColor
     * @param {Color} fillColor
     */
    static drawText(x, y, text, xAlign, yAlign, size, font, strokeWidth, strokeColor, fillColor) {
        this.ctx.font = size + 'px ' + font;

        this.ctx.textAlign = xAlign;
        this.ctx.textBaseline = yAlign;

        if(strokeColor && strokeWidth > 0) {
            this.ctx.strokeStyle = strokeColor.toRGB();
            this.ctx.strokeText(text, x, y)
        }
        
        if(fillColor) {
            this.ctx.fillStyle = fillColor.toRGB();
            this.ctx.fillText(text, x, y)
        }
    }

    /**
     * Draws a circle
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
            this.ctx.fillStyle = fillColor.toRGB();
            this.ctx.fill();
        }
        
        if(strokeColor && strokeWidth > 0) {
            this.ctx.strokeStyle = strokeColor.toRGB();
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
            this.ctx.fillStyle = fillColor.toRGB();
            this.ctx.fill();
        }
        
        if(strokeColor && strokeWidth > 0) {
            this.ctx.strokeStyle = strokeColor.toRGB();
            this.ctx.stroke();
        }
    }
    
    /**
     * Draw a line
     *
     * @param {Number} fromX
     * @param {Number} fromY
     * @param {Number} toX
     * @param {Number} toY
     * @param {Number} strokeWidth
     * @param {Color} strokeColor
     */
    static drawLine(fromX, fromY, toX, toY, strokeWidth, strokeColor) {
        this.ctx.beginPath();
        this.ctx.moveTo(fromX, fromY);
        this.ctx.lineTo(toX, toY);
        this.ctx.lineWidth = strokeWidth;
        this.ctx.strokeStyle = strokeColor ? strokeColor.toRGB() : 'rgba(0,0,0,1)';
        this.ctx.stroke();
    }
}

Engine.Graphics = Graphics;
