'use strict';

/**
 * A floor tile, which is both in the target grid and the player grid
 */
Game.Actors.FloorTile = class FloorTile extends Game.Actors.ColorTile {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
                    
        this.colorHistory = [ this.color ];
    }
    
    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.addComponent('GeometryRenderer', {
            type: 'rectangle',
            width: UNIT,
            height: UNIT,
            fillColor: new Engine.Math.Color(0, 0, 0),
            strokeColor: new Engine.Math.Color(1, 1, 1),
            strokeWidth: 0
        });
        
        this.lineRenderer2 = this.addComponent('GeometryRenderer', {
            type: 'line',
            strokeColor: new Engine.Math.Color(0, 0, 0),
            strokeWidth: UNIT / 10,
            points: [],
            isEnabled: false
        });

        this.lineRenderer1 = this.addComponent('GeometryRenderer', {
            type: 'line',
            strokeColor: new Engine.Math.Color(1, 1, 1),
            strokeWidth: UNIT / 20,
            points: [],
            isEnabled: false
        });
        
        this.addComponent('TextRenderer', {
            fillColor: new Engine.Math.Color(1, 1, 1),
            strokeColor: new Engine.Math.Color(0, 0, 0),
            size: UNIT,
            strokeWidth: UNIT / 20
        });
        
        this.colorHistory = [];
    }
    
    /**
     * Getter: Colour
     */
    get color() {
        return this.geometryRenderer.fillColor;
    }
    
    /**
     * Setter: Colour
     */
    set color(value) {
        let unit = this.geometryRenderer.width * 0.8;
        let yMax = unit / 2;
        let xMin = -yMax;

        this.geometryRenderer.fillColor = value;
       
        this.lineRenderer1.points = [
            new Engine.Math.Vector2(xMin, yMax - (unit * value.r)),
            new Engine.Math.Vector2(xMin + (unit / 2), yMax - (unit * value.g)),
            new Engine.Math.Vector2(xMin + unit, yMax - (unit * value.b))
        ];
        
        this.lineRenderer2.points = this.lineRenderer1.points;
    }
    
    /**
     * Sets highlight
     *
     * @param {Boolean} isActive
     */
    setHighlight(isActive) {
        this.geometryRenderer.strokeWidth = isActive ? UNIT / 20 : 0;
    }
    
    /**
     * Sets the color
     *
     * @param {Color} color
     */
    pushColor(color) {
        this.colorHistory.push(this.color);

        this.color = color;
    }

    /**
     * Undo color
     */
    undoColor() {
        if(this.colorHistory.length < 2) { return; }

        let prevColor = this.colorHistory.pop();
        
        this.color = prevColor;
    }

    /**
     * Sets correct state
     *
     * @param {Boolean} isCorrect
     */
    setCorrect(isCorrect) {
        this.isCorrect = isCorrect;

        switch(isCorrect) {
            case true:
                this.textRenderer.text = '✓';
                break;

            case false:
                this.textRenderer.text = '✕';
                break;

            case undefined:
                this.textRenderer.text = '';
                break;
        }
    }
}
