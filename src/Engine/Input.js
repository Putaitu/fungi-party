'use strict';

/**
 * The input subsystem
 */
class Input {
    /**
     * Init
     */
    static init() {
        // Events dictionary
        this.events = {
            keydown: {},
            keyup: {}
        };

        // Init listeners
        document.addEventListener('keydown', (e) => { this.onKeyDown(e); });
        document.addEventListener('keyup', (e) => { this.onKeyUp(e); });
        document.addEventListener('mousedown', (e) => { this.onPointerDown(e); });
        document.addEventListener('mouseup', (e) => { this.onPointerUp(e); });
        document.addEventListener('mousecancel', (e) => { this.onPointerUp(e); });
        document.addEventListener('mousemove', (e) => { this.onPointerMove(e); });
        document.addEventListener('touchstart', (e) => { this.onPointerDown(e); });
        document.addEventListener('touchend', (e) => { this.onPointerUp(e); });
        document.addEventListener('touchcancel', (e) => { this.onPointerUp(e); });
        document.addEventListener('touchmove', (e) => { this.onPointerMove(e); });

        // Cached values
        this.previousPointerPosition = new Engine.Math.Vector2(0, 0);
        this.pointerDelta = new Engine.Math.Vector2(0, 0);

        // Buttons
        this.BUTTON = {
            LEFT_MOUSE: 1,
            MIDDLE_MOUSE: 2,
            RIGHT_MOUSE: 3
        };

        // Keys
        this.KEY = {
            SPACE: 32,
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE_BREAK: 19,
            CAPS_LOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT_ARROW: 37,
            UP_ARROW: 38,
            RIGHT_ARROW: 39,
            DOWN_ARROW: 40,
            INSERT: 45,
            DELETE: 46,
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            LEFT_SUPER_KEY: 91,
            RIGHT_SUPER_KEY: 92,
            SELECT_KEY: 93,
            NUMPAD_0: 96,
            NUMPAD_1: 97,
            NUMPAD_2: 98,
            NUMPAD_3: 99,
            NUMPAD_4: 100,
            NUMPAD_5: 101,
            NUMPAD_6: 102,
            NUMPAD_7: 103,
            NUMPAD_8: 104,
            NUMPAD_9: 105,
            MULTIPLY: 106,
            ADD: 107,
            SUBTRACT: 109,
            DECIMAL_POINT: 110,
            DIVIDE: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUM_LOCK: 144,
            SCROLL_LOCK: 145,
            SEMI_COLON: 186,
            EQUAL_SIGN: 187,
            COMMA: 188,
            DASH: 189,
            PERIOD: 190,
            FORWARD_SLASH: 191,
            GRAVE_ACCENT: 192,
            OPEN_BRACKET: 219,
            BACK_SLASH: 220,
            CLOSE_BRAKET: 221,
            SINGLE_QUOTE: 222
        };
    }

    /**
     * Triggers an input event
     *
     * @param {String} action
     * @param {Number} key
     * @param {InputEvent} event
     */
    static trigger(action, key, event) {
        if(!this.events[action]) { return; }
        if(!this.events[action][key]) { return; }
            
        for(let i in this.events[action][key]) {
            if(typeof this.events[action][key][i] !== 'function') { continue; }

            this.events[action][key][i](event);
        }
    }

    /**
     * Binds an input event
     *
     * @param {String} action
     * @param {Number|String} key
     * @param {Function} callback
     */
    static on(action, key, callback) {
        if(!this.events[action]) {
            this.events[action] = {};
        }
        
        if(!this.events[action][key]) {
            this.events[action][key] = [];
        }

        this.events[action][key].push(callback);
    }

    /**
     * Handles key down event
     *
     * @param {InputEvent} e
     */
    static onKeyDown(e) {
        e.preventDefault();
        
        this.trigger('keydown', e.which, e);
    }
    
    /**
     * Handles key up event
     *
     * @param {InputEvent} e
     */
    static onKeyUp(e) {
        e.preventDefault();
        
        this.trigger('keyup', e.which, e);
    }
    
    /**
     * Handles pointer move
     *
     * @param {InputEvent} e
     */
    static onPointerMove(e) {
        let x = 0;
        let y = 0;

        // Touch input
        if(e.changedTouches && e.changedTouches.length > 0) {
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
        
        // Mouse input
        } else if(typeof e.pageX === 'number') {
            x = e.pageX;
            y = e.pageY;
        
        // Neither?
        } else {
            return;

        }
       
        // Ignore the very first frame, as the delta would be inaccurate
        if(this.previousPointerPosition.x !== 0 && this.previousPointerPosition.y !== 0) {
            this.pointerDelta.x = x - this.previousPointerPosition.x;
            this.pointerDelta.y = y - this.previousPointerPosition.y;
        }
        
        this.previousPointerPosition.x = x;
        this.previousPointerPosition.y = y;
        
        this.trigger('pointermove', e.which, e);
    }
    
    /**
     * Handles pointer down event
     *
     * @param {InputEvent} e
     */
    static onPointerDown(e) {
        e.stopPropagation();

        let pointerPos = new Engine.Math.Vector2(e.pageX, e.pageY);

        if(e.changedTouches && e.changedTouches.length > 0) {
            pointerPos.x = e.changedTouches[0].pageX;
            pointerPos.y = e.changedTouches[0].pageY;
        }

        // Update previous pointer position
        this.previousPointerPosition.x = pointerPos.x;
        this.previousPointerPosition.y = pointerPos.y;

        this.trigger('pointerdown', e.which, e);

        // Look for colliders to trigger clicks on
        let actors = Engine.Stage.getActors();

        for(let i in actors) {
            if(actors[i].collider && actors[i].collider.getBounds().contains(pointerPos.x, pointerPos.y)) {
                actors[i].trigger('pointerdown');
            }
        }
    }
    
    /**
     * Handles pointer up event
     *
     * @param {InputEvent} e
     */
    static onPointerUp(e) {
        e.preventDefault();
        e.stopPropagation();

        let pointerPos = new Engine.Math.Vector2(e.pageX, e.pageY);

        if(e.changedTouches && e.changedTouches.length > 0) {
            pointerPos.x = e.changedTouches[0].pageX;
            pointerPos.y = e.changedTouches[0].pageY;
        }

        // Clear delta
        this.pointerDelta.x = 0;
        this.pointerDelta.y = 0;

        this.trigger('pointerup', e.which, e);

        // Look for colliders to trigger clicks on
        let actors = Engine.Stage.getActors();

        for(let i in actors) {
            if(actors[i].collider && actors[i].collider.getBounds().contains(pointerPos.x, pointerPos.y)) {
                actors[i].trigger('pointerup');
            }
        }
    }
}

Engine.Input = Input;
