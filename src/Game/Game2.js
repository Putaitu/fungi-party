'use strict';

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
        // Get the current tile
        let currentTile = this.children[this.currentTile];

        if(currentTile.isCorrect) { return; }
   
        // Get colour from queue
        let queue = Engine.Stage.getActor(Game.Actors.Queue);
        let queueColor = queue.popColor();
        
        // Add the new colour to the old colour
        let oldColor = currentTile.getColor();
        let newColor = Engine.Math.Color.add(oldColor, queueColor);

        // Apply the mixed colour
        currentTile.setColor(newColor);

        // Compare to the target colour
        let targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);

        let targetTile = targetGrid.children[this.currentTile];

        let isCorrect = currentTile.color.equals(targetTile.color);

        if(isCorrect) {
            currentTile.setCorrect(true);
        }
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

// Initialise the grids
let targetGrid = new Game.Actors.TargetGrid();
let playerGrid = new Game.Actors.PlayerGrid();

// Initialise the queue
let queue = new Game.Actors.Queue;
