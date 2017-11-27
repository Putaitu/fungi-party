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
                this.initTile(x, y);
            }
        }

        // Place grid
        this.transform.position.x = Engine.Graphics.screenWidth / 2;
        this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 6.25;

        // Pointer events 
        Engine.Input.on('pointerup', [0, 1], (e) => {
            if(!this.draggingTile) { return; }

            this.onReleasingTile(e, this.draggingTile);
        });
        
        Engine.Input.on('pointermove', [0, 1], (e) => {
            if(!this.draggingTile) { return; }

            this.onDraggingTile(e, this.draggingTile);
        });
    }

    /**
     * Init a tile
     *
     * @param {Number} x
     * @param {Number} y
     */
    initTile(x, y) {
        let tile = new Game.Actors.GridTile();
    
        tile.transform.position.x = (UNIT * 2) * (x - 1);
        tile.transform.position.y = (UNIT * 2) * (y - 1);

        tile.geometryRenderer.width = UNIT * 2;
        tile.geometryRenderer.height = UNIT * 2;
        
        tile.collider.width = UNIT * 2;
        tile.collider.height = UNIT * 2;
       
        tile.color = new Engine.Math.Color(0, 0, 0);

        // Set input events on tile
        tile.on('pointerdown', (e) => {
            if(tile.isCorrect) { return; }

            let lastColor = tile.popColor();

            if(!lastColor) { return; }

            this.draggingTile = new Game.Actors.QueueTile({
                color: lastColor 
            });

            tile.addChild(this.draggingTile);

            this.updateTiles();
        });

        this.addChild(tile);
    }

    /**
     * Event: A tile is being dragged
     *
     * @param {InputEvent} e
     * @param {ColorTile} queueTile
     */
    onDraggingTile(e, queueTile) {
        queueTile.transform.translate(Engine.Input.pointerDelta.x, Engine.Input.pointerDelta.y);

        let x = e.pageX;
        let y = e.pageY;

        if(e.changedTouches && e.changedTouches.length > 0) {
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
        }
        
        // Highlight hovered tile
        for(let i = 0; i < this.children.length; i++) {
            this.children[i].setHighlight(
                !this.children[i].isCorrect && // If it's not already correct
                queueTile.color.r + this.children[i].color.r <= 1 && // Red is within bounds
                queueTile.color.g + this.children[i].color.g <= 1 && // Green is within bounds
                queueTile.color.b + this.children[i].color.b <= 1 && // Blue is within bounds
                this.children[i].collider.getBounds().contains(x, y) // If the pointer is within the bounds
            );
        }
        
        // Check if tile is hovering the fire
        queueTile.setTransparent(Engine.Stage.getActor(Game.Actors.Fire).collider.getBounds().contains(x, y));
    }

    /**
     * Event: A tile is being released
     *
     * @param {ColorTile} queueTile
     */
    onReleasingTile(e, queueTile) {
        let x = e.pageX;
        let y = e.pageY;

        // Get touch position
        if(e.changedTouches && e.changedTouches.length > 0) {
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
        }

        // Check if tile is hovering the fire
        let fire = Engine.Stage.getActor(Game.Actors.Fire);

        if(fire.collider.getBounds().contains(x, y)) {
            fire.burn(this.draggingTile);

        // If not...
        } else {
            // Find a hovered tile
            let foundHovered = false;
            for(let i = 0; i < this.children.length; i++) {
                if(
                    !this.children[i].isCorrect && // If it's not already correct
                    queueTile.color.r + this.children[i].color.r <= 1 && // Red is within bounds
                    queueTile.color.g + this.children[i].color.g <= 1 && // Green is within bounds
                    queueTile.color.b + this.children[i].color.b <= 1 && // Blue is within bounds
                    this.children[i].collider.getBounds().contains(x, y) // If the pointer is within the bounds

                ) {
                    this.onDropTile(this.draggingTile, i);
                    Engine.Stage.scene.usedMoves++;
                    foundHovered = true;
                }
            }

            // If no hovered tile, find a parent (meaning it's being dragged away from a tile)
            if(!foundHovered) {
                for(let i = 0; i < this.children.length; i++) {
                    if(this.children[i] == this.draggingTile.parent) {
                        this.onDropTile(this.draggingTile, i);
                    }
                }
            }
        }

        this.draggingTile.setTransparent(false);

        this.draggingTile = null;

		let queue = Engine.Stage.getActor(Game.Actors.Queue);
		
		if(queue) {
			queue.updateTiles();
		}

        this.updateTiles();
    }

    /**
     * Event: A tile was dropped onto the grid
     *
     * @param {ColorTile} queueTile
     * @param {Number} tileIndex
     */
    onDropTile(queueTile, tileIndex) { 
        let currentTile = this.children[tileIndex];

        // Apply the queue colour
        currentTile.pushColor(queueTile.color);

        currentTile.setHighlight(false);

        // Update tiles
        this.updateTiles();

        // Check if won
        this.checkIfWon();

        // Remove queue tile
        queueTile.destroy();
    }

    /**
     * Updates all tiles
     */
    updateTiles() {
        let targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);

        for(let tileIndex in this.children) {
            let targetTile = targetGrid.children[tileIndex];
            let currentTile = this.children[tileIndex];
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
    }

    /**
     * Checks if the level is won
     */
    checkIfWon() {
        let targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);
        let correctTiles = 0;

        for(let i in this.children) {
            let currentTile = this.children[i];
            let targetTile = targetGrid.children[i];
        
            if(targetTile.color.equals(currentTile.color)) {
                correctTiles++;
            }
        }

        if(correctTiles >= this.children.length) {
            Engine.Stage.scene.showEndLevelScreen();
        }
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.size = 3;
    }
}
