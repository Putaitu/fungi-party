'use strict';

/**
 * A fish!
 */
Game.Actors.Fish = class Fish extends Engine.Actors.Pawn {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);

        this.addComponent('GeometryRenderer', {
            type: 'circle',
            radius: UNIT / 4,
            fillColor: '#ffaa00'
        });
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.direction = 1;
        this.movementSpeed = 300;
        this.currentTile = 1;
    }

    /**
     * Update
     */
    update() {
        // If close to the tile limit or the right sides of the screen, change direction
        if(this.transform.position.x > Engine.Graphics.screenWidth - this.geometryRenderer.radius) {
            this.direction = -1;
        } else if(this.transform.position.x < (this.currentTile * UNIT) + this.geometryRenderer.radius) {
            this.direction = 1;
        }
            
        // Move in the given direction on the X axis
        this.move(this.direction, 0);
    }
}

/**
 * The player
 */
Game.Actors.Player = class Player extends Engine.Actors.Pawn {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);

        this.color = new Engine.Math.Color(0, 0, 0);

        this.setCurrentTile(0);

        this.addComponent('GeometryRenderer', {
            type: 'rectangle',
            width: UNIT * 0.5,
            height: UNIT * 0.5,
            fillColor: this.color
        });

        // Set up input
        Engine.Input.on('keydown', Engine.Input.KEY.Q, (e) => {
            this.incrementColorComponent('r', 0.5);  
        });
        
        Engine.Input.on('keydown', Engine.Input.KEY.W, (e) => {
            this.incrementColorComponent('g', 0.5);  
        });
        
        Engine.Input.on('keydown', Engine.Input.KEY.E, (e) => {
            this.incrementColorComponent('b', 0.5);  
        });
        
        Engine.Input.on('keydown', Engine.Input.KEY.R, (e) => {
            this.resetColor();
        });
    }

    /**
     * Resets the color
     */
    resetColor() {
        this.color.r = 0;
        this.color.g = 0;
        this.color.b = 0;
        
        // Update the GeometryRenderer component
        this.getComponent('GeometryRenderer').fillColor = this.color;
    }

    /**
     * Updates a colour component
     *
     * @param {String} component
     * @param {Number} increment
     */
    incrementColorComponent(component, increment) {
        // Increment the component
        this.color[component] += increment;

        // If the value is higher than 1, reset to 0
        if(this.color[component] > 1) {
            this.color[component] = 0;
        }
        
        // Update the GemoetryRenderer component
        this.getComponent('GeometryRenderer').fillColor = this.color;

        // Check if the colour matches the tile
        let tile = Engine.Stage.getActors(Game.Actors.Tile)[this.currentTile];

        if(!tile) {
            throw new Error('Tile at position "' + this.currentTile + '" does not exist');
        }

        // If the colur matches the tile, increment the current tile and kill the fish
        if(tile.color.compare(this.color) === 0) {
            let fish = Engine.Stage.getActors(Game.Actors.Fish);

            for(let i in fish) {
                if(fish[i].currentTile === this.currentTile) {
                    fish[i].destroy();
                }
            }
            
            this.setCurrentTile(this.currentTile + 1);
        }
    }

    /**
     * Sets the current tile
     *
     * @param {Number} currentTile
     */
    setCurrentTile(tile) {
        this.currentTile = tile;

        this.transform.position.x = this.currentTile * UNIT + UNIT * 0.5;
    }
}

// --------------------
// Generate tiles
// --------------------
for (let i = 0; i < 10; i++) {  
    let tile = new Game.Actors.ColorTile({
        color: Engine.Math.Color.getRandom(0.5)
    });

    // Place each tile to fill out the scene space (offset by half its width/height)
    tile.transform.position.x = i * UNIT + UNIT * 0.5;
    tile.transform.position.y = Engine.Graphics.screenHeight - UNIT * 0.5;
}

// --------------------
// Create fish
// --------------------
for(let i = 0; i < 10; i++) {
    let fish = new Game.Actors.Fish({
        currentTile: i
    });

    // Start at 100x100 position
    fish.transform.position.y = UNIT + i * (UNIT * 0.5);
    fish.transform.position.x = UNIT * 10;
}

// --------------------
// Place player
// --------------------
let player = new Game.Actors.Player();

player.transform.position.y = Engine.Graphics.screenHeight - UNIT * 1.25;
