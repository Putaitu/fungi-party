'use strict';

window.Game = {
    Actors: {}
};

// Set screen size
Engine.Graphics.setFullscreen(true);

// A standard unit for the game
window.UNIT = Engine.Graphics.screenWidth / 10;

/**
 * A simple colour tile 
 */
Game.Actors.ColorTile = class ColorTile extends Engine.Actors.Actor {
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
            fillColor: new Color(0, 0, 0),
            strokeWidth: 0
        });

        this.addComponent('TextRenderer', {
            fillColor: new Color(1, 1, 1),
            strokeColor: new Color(1, 1, 1),
            size: UNIT / 4,
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
        this.geometryRenderer.fillColor = value;
        this.geometryRenderer.strokeColor = value.getNegative();
        this.textRenderer.fillColor = value.getNegative();
    }

    /**
     * Event: Picked
     *
     * @param {PlayerGrid} playerGrid
     */
    onPicked(playerGrid) {
        let queueColor = this.color;
        
        // Get the current tile
        let currentTile = playerGrid.children[playerGrid.currentTile];
        
        if(typeof currentTile.isCorrect !== 'undefined') { return; }
        
        // Add the new colour to the old colour
        let oldColor = currentTile.color;
        let newColor = Engine.Math.Color.add(oldColor, queueColor);

        // Apply the mixed colour
        currentTile.pushColor(newColor);
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

/**
 * A powerup tile
 */
Game.Actors.PowerupTile = class PowerupTile extends Game.Actors.ColorTile {
    /**
     * Constructor
     */
    constructor(params) {
        super(params);
   
        this.textRenderer.size = UNIT / 8;

        switch(this.type) {
            case 'undo':
                this.textRenderer.text = '↺ undo';
                break;
        }
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.type = 'undo';
    }

    /**
     * Event: Picked
     *
     * @param {PlayerGrid} playerGrid
     */
    onPicked(playerGrid) {
        // Get the current tile
        let currentTile = playerGrid.children[playerGrid.currentTile];
        
        switch(this.type) {
            case 'undo':
                currentTile.undoColor();
                break;

        }
    }
}

/**
 * Queue 
 */
Game.Actors.Queue = class Queue extends Engine.Actors.Actor {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);

        // Position the queue
        this.transform.position.x = Engine.Graphics.screenWidth / 2;
        this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 2;
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.interval = 1;
        this.timer = 0;
        this.randomAmounts = [0, 0, 0];
    }

    /**
     * Update
     */
    update() {
        if(this.timer <= 0) {
            this.spawnTile();

            this.timer = this.interval;
        }

        this.timer -= Engine.Time.deltaTime;
    }

    /**
     * Updates tiles
     */
    updateTiles() {
        for(let i = 0; i < this.children.length; i++) {
            this.children[i].transform.scale = i === 0 ? 1 : 0.8;
            this.children[i].setHighlight(i === 0);
            this.children[i].transform.position.y = -i * UNIT + UNIT;
        }
    }

    /**
     * Spawns a new tile
     */
    spawnTile() {
        if(this.children.length > 5) { return; }

        // Get random powerup tile
        let randomPowerups = [
            false,
            false,
            false,
            'undo'
        ];

        let randomPowerupIndex = Math.floor(Math.random() * randomPowerups.length);

        if(randomPowerups[randomPowerupIndex]) {
            let tile = new Game.Actors.PowerupTile({
                color: new Color(1, 1, 1),
                type: randomPowerups[randomPowerupIndex]
            });
        
            this.addChild(tile);

            this.updateTiles();
            return;
        }

        // Get random color
        let randomColors = [
            new Color(0.5, 0, 0),
            new Color(0, 0.5, 0),
            new Color(0, 0, 0.5)
        ];

        let randomColorIndex = Math.floor(Math.random() * 3);
        
        // Make sure it isn't too random by comparing to previous occurrences
        for(let i = 0; i < 3; i++) {
            if(this.randomAmounts[i] < this.randomAmounts[randomColorIndex]) {
                randomColorIndex = i;
                break;
            }
        }

        this.randomAmounts[randomColorIndex]++;

        // Get random colour and assign it to a new tile
        let randomColor = randomColors[randomColorIndex];

        let tile = new Game.Actors.ColorTile({color: randomColor})
    
        this.addChild(tile);

        this.updateTiles();
    }
    
    /**
     * Removes the oldest tile from the queue and returns it
     *
     * @returns {ColorTile} Result
     */
    popTile() {
        if(this.children.length < 1) { return; }

        let colorTile = this.children.shift();

        this.updateTiles();

        colorTile.destroy();

        return colorTile;
    }
}

/**
 * A grid
 */
Game.Actors.Grid = class Grid extends Engine.Actors.Actor {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.tiles = []
    }
}

/**
 * The target grid
 */
Game.Actors.TargetGrid = class TargetGrid extends Game.Actors.Grid {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
    
        // Build random tiles
        for(let y = 0; y < this.size; y++) {
            for(let x = 0; x < this.size; x++) {
                let tile = new Game.Actors.ColorTile({
                    color: Engine.Math.Color.getRandom(0.5, Engine.Math.Color.RULE.NO_GREYSCALE)
                });
                
                tile.transform.position.x = UNIT * x - UNIT;
                tile.transform.position.y = UNIT * y - UNIT;

                this.addChild(tile);
            }
        }

        // Place grid
        this.transform.position.x = Engine.Graphics.screenWidth - UNIT * 2;
        this.transform.position.y = Engine.Graphics.screenHeight / 2;
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.size = 3;
    }
}

