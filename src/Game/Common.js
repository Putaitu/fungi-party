'use strict';

window.Game = {
    Actors: {}
};

// Set screen size
Engine.Settings.screenWidth = 800;
Engine.Settings.screenHeight = 600;

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
                    
        this.addComponent('GeometryRenderer', {
            type: 'rectangle',
            width: UNIT,
            height: UNIT,
            fillColor: this.color
        });

        this.addComponent('TextRenderer', {
            fillColor: new Color(1, 1, 1)
        });
    }

    /**
     * Sets stroke color
     *
     * @param {Color} color
     */
    setStrokeColor(color) {
        this.geometryRenderer.strokeColor = color;
        this.geometryRenderer.strokeWidth = color ? 4 : 0;
    }
    
    /**
     * Sets the color
     *
     * @param {Color} color
     */
    setColor(color) {
        this.color = color;

        this.geometryRenderer.fillColor = color;
    }
    
    /**
     * Gets the color
     */
    getColor(color) {
        return this.geometryRenderer.fillColor;
    }

    /**
     * Sets correct state
     *
     * @param {Boolean} isCorrect
     */
    setCorrect(isCorrect) {
        this.isCorrect = isCorrect;

        this.textRenderer.text = isCorrect ? '✓' : '✕';
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.color = new Engine.Math.Color(0, 0, 0);
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
            this.children[i].setStrokeColor(i === 0 ? new Color(1, 1, 1) : null);
            this.children[i].transform.position.y = -i * UNIT + UNIT;
        }
    }

    /**
     * Spawns a new tile
     */
    spawnTile() {
        if(this.children.length > 5) { return; }

        let randomColors = [
            new Color(0.5, 0, 0),
            new Color(0, 0.5, 0),
            new Color(0, 0, 0.5)
        ];

        // Get random index
        let randomIndex = Math.floor(Math.random() * 3);
        
        // Make sure it isn't too random by comparing to previous occurrences
        for(let i = 0; i < 3; i++) {
            if(this.randomAmounts[i] < this.randomAmounts[randomIndex]) {
                randomIndex = i;
                break;
            }
        }

        this.randomAmounts[randomIndex]++;

        // Get random colour and assign it to a new tile
        let randomColor = randomColors[randomIndex];

        let tile = new Game.Actors.ColorTile({color: randomColor})
    
        this.addChild(tile);

        this.updateTiles();
    }
    
    /**
     * Removes the oldest color from the queue and returns it
     *
     * @returns {Color} Result
     */
    popColor() {
        if(this.children.length < 1) { return; }

        let colorTile = this.children.shift();
        let color = colorTile.color;

        colorTile.destroy();

        this.updateTiles();

        return color;
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
                    color: Engine.Math.Color.getRandom(0.5)
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

