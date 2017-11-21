'use strict';

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
        this.transform.position.x = Engine.Graphics.screenWidth / 2 - UNIT * 3;
        this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 2;


        this.addComponent('GeometryRenderer', {
            type: 'rectangle',
            pivot: new Engine.Math.Vector2(0, 0.5),
            fillColor: new Engine.Math.Color(0.3, 0.3, 0.3),
            height: UNIT,
            width: UNIT * 6
        });
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
        let draggingTile = Engine.Stage.getActor(Game.Actors.PlayerGrid).draggingTile;

        for(let i = 0; i < this.children.length; i++) {
            // Don't auto position the dragged tile
            if(this.children[i] === draggingTile) { continue; }

            this.children[i].transform.position.x = (i + 0.5) * UNIT;
            this.children[i].transform.position.y = 0;
        }
    }

	/**
	 * Gets the next colour
	 *
	 * @returns {Color} The next color
	 */
	getNextColor() {
		// If a queue was specified, pick the next colour from that queue
		if(this.colors && this.colors.length > 0) {
			return this.colors.shift();
			
		// If not, get a random colour
		} else {
			// Get random color
			let randomColors = [
				new Engine.Math.Color(0.5, 0, 0),
				new Engine.Math.Color(0, 0.5, 0),
				new Engine.Math.Color(0, 0, 0.5)
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
			
			return randomColors[randomColorIndex];
		}
	}
	
    /**
     * Spawns a new tile
     */
    spawnTile() {
        if(this.children.length > 5) { return; }

        let tile = new Game.Actors.QueueTile({color: this.getNextColor()})
   
        // Set input events on tile
        tile.on('pointerdown', (e) => {
            Engine.Stage.getActor(Game.Actors.PlayerGrid).draggingTile = tile;
        });

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

