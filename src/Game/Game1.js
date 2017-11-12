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
            
                tile.transform.position.x = (UNIT * 2) * (x - 1);
                tile.transform.position.y = (UNIT * 2) * (y - 1);

                tile.geometryRenderer.width = UNIT * 2
                tile.geometryRenderer.height = UNIT * 2
                
                tile.collider.width = UNIT * 2
                tile.collider.height = UNIT * 2
                
                this.addChild(tile);
            }
        }

        // Place grid
        this.transform.position.x = Engine.Graphics.screenWidth / 2;
        this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 6.5;

        // Update tiles
        this.updateTiles();

        // Pointer events 
        Engine.Input.on('pointerup', 0, (e) => {
            this.draggingTile = null;
        });
        
        Engine.Input.on('pointermove', 0, (e) => {
            if(!this.draggingTile) { return; }

            this.onDraggingTile(e, this.draggingTile);
        });

        // Place button
        this.discardButton = new Engine.UI.Button({
            x: this.transform.position.x,
            y: this.transform.position.y + UNIT * 4,
            width: UNIT,
            height: UNIT,
            text: '⌫ ',
            size: UNIT / 2,
            onClick: () => {
                let queue = Engine.Stage.getActor(Game.Actors.Queue);
                
                queue.popTile();
            }
        });
    }

    /**
     * Event: A tile is being dragged
     *
     * @param {InputEvent} e
     * @param {ColorTile} queueTile
     */
    onDraggingTile(e, queueTile) {
        queueTile.transform.translate(Engine.Input.pointerDelta.x, Engine.Input.pointerDelta.y);
    }

    /**
     * Event: A tile is hovering over the grid
     *
     * @param {ColorTile} queueTile
     */
    onHoverTile(queueTile) {
           
    }

    /**
     * Event: A tile was dropped onto the grid
     *
     * @param {ColorTile} queueTile
     * @param {Number} targetTileIndex
     */
    onDropTile(queueTile, targetTileIndex) { 
        // Trigger on picked event
        queueTile.onPicked(this);

        // Compare to the target colour
        let targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);

        let targetTile = targetGrid.children[targetTileIndex];

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

// Init everything
Engine.Core.on('init', () => {
    // A standard unit for the game
    window.UNIT = Engine.Graphics.screenHeight / 14;

    // Initialise the grids
    let targetGrid = new Game.Actors.TargetGrid();
    let playerGrid = new Game.Actors.PlayerGrid();

    // Initialise the queue
    let queue = new Game.Actors.Queue;
});
