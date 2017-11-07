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

                tile.addComponent('Collider', {
                    width: UNIT,
                    height: UNIT,
                    offset: {
                        x: 0.5,
                        y: 0.5
                    }
                });
                    
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
        Engine.Input.on('click', Engine.Input.BUTTON.LEFT_MOUSE, (e) => { this.onClick(e); });

        // Place button
        this.discardButton = new Engine.UI.Button({
            x: this.transform.position.x,
            y: this.transform.position.y + UNIT * 2,
            width: UNIT,
            height: UNIT / 2,
            text: '⌫ discard',
            size: UNIT / 8,
            onClick: () => {
                let queue = Engine.Stage.getActor(Game.Actors.Queue);
                
                queue.popTile();
            }
        });
    }

    /**
     * Add tile
     *
     * @param {ColorTile} tile
     */
    addChild(tile) {
        let index = this.children.length;

        super.addChild(tile);

        tile.on('click', () => {
            this.currentTile = index;
            this.updateTiles();
            this.pickColor();
        });
    }

        
    /**
     * Event: Click
     */
    onClick(e) {
        
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
        
        // If we're at the top, stop players from going up
        if(newTile < minIndex) { return; }

        // If we're on the bottom row and press down once more, focus the discard button
        this.discardButton.setFocus(newTile > maxIndex);

        if(newTile <= maxIndex + this.size) {
            this.currentTile = newTile;
        }

        this.updateTiles();
    }

    /**
     * Picks the current color from the queue and applies it to the current tile
     */
    pickColor() { 
        // Check if we're above the max index, in which case the discard button is focused
        let maxIndex = Math.pow(this.size, 2) - 1;
        
        // Get current tile
        let currentTile = this.children[this.currentTile];
        
        // Get colour from queue
        let queue = Engine.Stage.getActor(Game.Actors.Queue);
        let queueTile = queue.popTile();
        
        // If we're highlighting the discard button, just pop the queue
        if(this.currentTile > maxIndex) { return; }
       
        // Trigger on picked event
        queueTile.onPicked(this);

        // Compare to the target colour
        let targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);

        let targetTile = targetGrid.children[playerGrid.currentTile];

        let isCorrect = currentTile.color.equals(targetTile.color);

        let isIncorrect =
            currentTile.color.r > targetTile.color.r || 
            currentTile.color.g > targetTile.color.g || 
            currentTile.color.b > targetTile.color.b;

        if(isIncorrect) {
            currentTile.setCorrect(false);
        } else if(isCorrect) {
            currentTile.setCorrect(true);
        } else {
            currentTile.setCorrect(undefined);
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
            this.children[i].setHighlight(i === this.currentTile); 
        }
    }
}

// Initialise the grids
let targetGrid = new Game.Actors.TargetGrid();
let playerGrid = new Game.Actors.PlayerGrid();

// Initialise the queue
let queue = new Game.Actors.Queue;
