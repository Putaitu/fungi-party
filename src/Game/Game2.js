'use strict';

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

/**
 * The player grid
 */
Game.Actors.PlayerGrid = class PlayerGrid extends Game.Actors.Grid {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
    
        // Build blank tiles
        for(let y = 0; y < this.size; y++) {
            for(let x = 0; x < this.size; x++) {
                let tile = new Game.Actors.ColorTile({
                    color: new Engine.Math.Color(0, 0, 0)
                });
                
                tile.transform.position.x = UNIT * x - UNIT;
                tile.transform.position.y = UNIT * y - UNIT;

                this.addChild(tile);
            }
        }

        // Place grid
        this.transform.position.x = UNIT * 2;
        this.transform.position.y = Engine.Graphics.screenHeight / 2;

        // Update tiles
        this.updateTiles();

        // Init input
        Engine.Input.on('keydown', Engine.Input.KEY.W, (e) => { this.move('y', -1); });
        Engine.Input.on('keydown', Engine.Input.KEY.A, (e) => { this.move('x', -1); });
        Engine.Input.on('keydown', Engine.Input.KEY.S, (e) => { this.move('y', 1); });
        Engine.Input.on('keydown', Engine.Input.KEY.D, (e) => { this.move('x', 1); });
        Engine.Input.on('keydown', Engine.Input.KEY.SPACE, (e) => { this.pickColor(); });
    }

    /**
     * Move current tile along axis
     *
     * @param {String} axis
     * @param {Number} amount
     */
    move(axis, amount) {
        let newTile = this.currentTile;

        if(axis === 'y') {
            newTile = this.currentTile + amount * this.size;
        }
        
        if(axis === 'x') {
            let mod = this.currentTile % this.size;

            // Prevent going too far left
            if(amount < 0 && mod === 0) { return; }
            
            // Prevent going too far right
            if(amount > 0 && mod === 2) { return; }

            newTile = this.currentTile + amount;
        }

        let minIndex = 0;
        let maxIndex = Math.pow(this.size, 2) - 1;

        if(newTile < minIndex || newTile > maxIndex) { return; }

        this.currentTile = newTile;

        this.updateTiles();

    }

    /**
     * Picks the current color from the queue and applies it to the current tile
     */
    pickColor() {
        let queue = Engine.Stage.getActor(Game.Actors.Queue);
        let queueColor = queue.popColor();
   
        let oldColor = this.children[this.currentTile].getColor();
        let newColor = Engine.Math.Color.add(oldColor, queueColor);

        this.children[this.currentTile].setColor(newColor);
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.size = 3;
        this.currentTile = 0;
    }

    /**
     * Updates tiles
     */
    updateTiles() {
        for(let i = 0; i < this.children.length; i++) {
            this.children[i].setStrokeColor(i === this.currentTile ? new Color(1, 1, 1) : null); 
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

        this.interval = 3;
        this.timer = 0;
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

        let configs = [
            { r: 0.5, g: 0, b: 0 },
            { r: 0, g: 0.5, b: 0 },
            { r: 0, g: 0, b: 0.5 }
        ];

        let randomIndex = Math.floor(Math.random() * 3);
        let config = configs[randomIndex];

        let tile = new Game.Actors.ColorTile({color: new Engine.Math.Color(config.r, config.g, config.b)})
    
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

// Initialise the grids
let targetGrid = new Game.Actors.TargetGrid();
let playerGrid = new Game.Actors.PlayerGrid();

// Initialise the queue
let queue = new Game.Actors.Queue;
