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
    get text() { return this.element.innerHTML; }
    get textSize() { return parseInt(this.element.style.fontSize); }
    get textAlign() { return this.element.style.textAlign; }
    get textColor() { return Engine.Math.Color.fromRGB(this.element.style.color); }
    get font() { return parseInt(this.element.style.fontFamily); }

    // Setters
    set width(value) { this.element.style.width = value + 'px'; }
    set height(value) { this.element.style.height = value + 'px'; }
    set x(value) { this.element.style.left = value + 'px'; }
    set y(value) { this.element.style.top = value + 'px'; }
    set text(value) { this.element.innerHTML = value; }
    set textSize(value) { this.element.style.fontSize = value + 'px'; }
    set textAlign(value) { this.element.style.textAlign = value; }
    set textColor(value) { this.element.style.color = value.toRGB(); }
    set font(value) { this.element.style.fontFamily = value; }
    
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
        this.element.style.display = 'block';
        this.element.style.position = 'absolute';;
        this.element.style.transform = 'translate(-50%, -50%)';
        this.element.style.userSelect = 'none';

        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 40;
        this.text = 'My widget';
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
    }
}

Engine.UI = UI;
