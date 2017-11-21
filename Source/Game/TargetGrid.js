'use strict';

/**
 * The target grid
 */
Game.Actors.TargetGrid = class TargetGrid extends Game.Actors.Grid {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
    
        // Build tiles
        for(let y = 0; y < this.size; y++) {
            for(let x = 0; x < this.size; x++) {
				// Start with a random colour
				let color = Engine.Math.Color.getRandom(0.5, Engine.Math.Color.RULE.NO_GREYSCALE);
				
				// If a preset colour exists, use that instead
				if(this.colors && this.colors[y] && this.colors[y][x]) {
					color = this.colors[y][x];
				}
				
                let tile = new Game.Actors.GridTile({
                    color: color
                });
                
                tile.transform.position.x = UNIT * x - UNIT;
                tile.transform.position.y = UNIT * y - UNIT;

                this.addChild(tile);
            }
        }

        // Place grid
        this.transform.position.x = Engine.Graphics.screenWidth / 2;
        this.transform.position.y = UNIT * 2;
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.size = 3;
    }
}

