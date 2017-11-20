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
    
        // Build random tiles
        for(let y = 0; y < this.size; y++) {
            for(let x = 0; x < this.size; x++) {
                let tile = new Game.Actors.GridTile({
                    color: Engine.Math.Color.getRandom(0.5, Engine.Math.Color.RULE.NO_GREYSCALE)
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

