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
        this.transform.position.x = UNIT;
        this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 2;


        this.addComponent('GeometryRenderer', {
            type: 'rectangle',
            fillColor: new Engine.Math.Color(0.3, 0.3, 0.3),
            height: UNIT,
            width: UNIT * 12
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

            this.children[i].transform.position.x = i * UNIT;
            this.children[i].transform.position.y = 0;
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
                color: new Engine.Math.Color(1, 1, 1),
                type: randomPowerups[randomPowerupIndex]
            });
        
            this.addChild(tile);

            // Set input events on tile
            tile.on('pointerdown', (e) => {
                Engine.Stage.getActor(Game.Actors.PlayerGrid).draggingTile = tile;
            });
            
            this.updateTiles();
            return;
        }

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

        // Get random colour and assign it to a new tile
        let randomColor = randomColors[randomColorIndex];

        let tile = new Game.Actors.QueueTile({color: randomColor})
   
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

