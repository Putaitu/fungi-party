'use strict';

/**
 * The UI subsystem
 */
class UI {
    /**
     * Init
     */
    static init() {
        this.div = document.createElement('div');

        this.div.style.position = 'absolute';
        this.div.style.top = '50%';
        this.div.style.left = '50%';
        this.div.style.transform = 'translate(-50%, -50%)';
        this.div.style.width = Engine.Graphics.screenWidth + 'px';
        this.div.style.height = Engine.Graphics.screenHeight + 'px';
        this.div.style.pointerEvents = 'none';

        this.cssDictionary = {
            'flex-end': 'end',
            'flex-start': 'start'
        };

        document.body.appendChild(this.div);
    }

    /**
     * Updates the screen dimensions
     */
    static updateScreenDimensions() {
        this.div.style.width = Engine.Graphics.screenWidth + 'px';
        this.div.style.height = Engine.Graphics.screenHeight + 'px';
    }

    /**
     * Adds a widget
     *
     * @param {Widget} widget
     */
    static addWidget(widget) {
        widget.element.style.pointerEvents = 'all';

        this.div.appendChild(widget.element);
    }

    /**
     * Clears widgets
     */
    static clearWidgets() {
        this.div.innerHTML = '';
    }
    
    /**
     * Translates CSS properties to sensible names
     *
     * @param {String} css
     *
     * @returns {String} Name
     */
    static fromCss(css) {
        return this.cssDictionary[css] || css;
    }
    
    /**
     * Translates sensible names to CSS properties
     *
     * @param {String} name
     *
     * @returns {String} CSS property
     */
    static toCss(name) {
        for(let css in this.cssDictionary) {
            if(this.cssDictionary[css] === name) {
                return css;
            }
        }

        return name;
    }
}

/**
 * A widget
 */
UI.Widget = class Widget extends Engine.Entity {
    // Getters
    get width() { return parseInt(this.element.style.width); }
    get height() { return parseInt(this.element.style.height); }
    get x() { return parseInt(this.element.style.left); }
    get y() { return parseInt(this.element.style.top); }
    get text() { return this.element.innerHTML.replace(/\<br\>/g, '\n'); }
    get textSize() { return parseInt(this.element.style.fontSize); }
    get textAlignX() { return Engine.UI.fromCss(this.element.style.justifyContent); }
    get textAlignY() { return Engine.UI.fromCss(this.element.style.alignItems); }
    get textColor() { return Engine.Math.Color.fromRGB(this.element.style.color); }
    get font() { return parseInt(this.element.style.fontFamily); }
    get strokeWidth() { return parseInt(this.element.style.borderWidth); }
    get strokeColor() { return Engine.Math.Color.fromRGB(this.element.style.borderColor); }
	get fillColor() { return Engine.Math.Color.fromRGB(this.element.style.backgroundColor); }

    // Setters
    set width(value) { this.element.style.width = value + 'px'; }
    set height(value) { this.element.style.height = value + 'px'; }
    set x(value) { this.element.style.left = value + 'px'; }
    set y(value) { this.element.style.top = value + 'px'; }
    set text(value) { this.element.innerHTML = value.replace(/\n/g, '<br>'); }
    set textSize(value) { this.element.style.fontSize = value + 'px'; }
    set textAlignX(value) { this.element.style.justifyContent = Engine.UI.toCss(value); }
    set textAlignY(value) { this.element.style.alignItems = Engine.UI.toCss(value); }
    set textColor(value) { this.element.style.color = value.toRGB(); }
    set font(value) { this.element.style.fontFamily = value; }
    set strokeWidth(value) { this.element.style.borderWidth = value + 'px'; }
    set strokeColor(value) { this.element.style.borderColor = value.toRGB(); }
	set fillColor(value) { this.element.style.backgroundColor = value.toRGB(); }
    
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
    
        Engine.UI.addWidget(this);
    }
    
    /**
     * Defaults
     */
    defaults() {
        this.element = document.createElement('div');
        this.element.style.display = 'flex';
        this.element.style.position = 'absolute';
        this.element.style.transform = 'translate(-50%, -50%)';
        this.element.style.userSelect = 'none';
        this.element.style.cursor = 'normal';
        this.element.style.borderStyle = 'solid';
        this.element.style.borderWidth = '0px';

        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 40;
        this.text = '';
        this.font = 'Arial';
        this.textSize = 10;
        
        this.element.addEventListener('click', (e) => {
            e.preventDefault();

            this.onClick();
        });
    }

    /**
     * Sets focus of this button
     */
    setFocus(isFocused) {
        if(isFocused) {
            this.element.focus();
        } else {
            this.element.blur();
        }
    }
    
    /**
     * Event: Click
     */
    onClick() {}
}

/**
 * A label
 */
UI.Label = class Label extends UI.Widget {
    /**
     * Defaults
     */
    defaults() {
        super.defaults();
        
        this.text = 'My label';
    }
}

/**
 * A button
 */
UI.Button = class Button extends UI.Widget {
    /**
     * Defaults
     */
    defaults() {
        super.defaults();
        
        this.text = 'My button';
        this.strokeWidth = 4;
        this.strokeColor = new Engine.Math.Color(1, 1, 1);
        this.textAlignX = 'center';
        this.textAlignY = 'center';
    }
}

/**
 * An image
 */
UI.Image = class Image extends UI.Widget {
	// Getters
	get source() {
		let url = this.element.style.backgroundImage;
		
		return url.replace('url(', '').replace(')', '');
	}
	
	// Setter
	set source(url) {
		this.element.style.backgroundImage = 'url(' + url + ')';
	}
	
    /**
     * Defaults
     */
    defaults() {
        super.defaults();
		
		this.element.style.backgroundSize = 'contain';
		this.element.style.backgroundPosition = 'center';
    }
}

Engine.UI = UI;
