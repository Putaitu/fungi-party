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
        this.div.style.top = 0;
        this.div.style.left = 0;
        this.div.style.width = Engine.Graphics.screenWidth + 'px';
        this.div.style.height = Engine.Graphics.screenWidth + 'px';

        document.body.appendChild(this.div);
    }

    /**
     * Adds a widget
     *
     * @param {Widget} widget
     */
    static addWidget(widget) {
        this.div.appendChild(widget.element);
    }
}

/**
 * A button
 */
UI.Button = class Button extends Engine.Entity {
    // Getters
    get width() { return parseInt(this.element.style.width); }
    get height() { return parseInt(this.element.style.height); }
    get x() { return parseInt(this.element.style.left); }
    get y() { return parseInt(this.element.style.top); }
    get text() { return this.element.innerHTML; }

    // Setters
    set width(value) { this.element.style.width = value + 'px'; }
    set height(value) { this.element.style.height = value + 'px'; }
    set x(value) { this.element.style.left = value + 'px'; }
    set y(value) { this.element.style.top = value + 'px'; }
    set text(value) { this.element.innerHTML = value; }
   
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
        this.element = document.createElement('button');
        this.element.style.display = 'block';
        this.element.style.position = 'absolute';;
        this.element.style.transform = 'translate(-50%, -50%)';

        this.element.addEventListener('click', (e) => {
            e.preventDefault();

            this.onClick();
        });

        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 40;
        this.text = 'My button';
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

Engine.UI = UI;
