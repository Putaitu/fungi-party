'use strict';

window.Game = {
    Actors: {}
};

Engine.Core.on('init', () => {
    /**
     * A simple colour tile 
     */
    Game.Actors.ColorTile = class ColorTile extends Engine.Actors.Actor {
        /**
         * Constructor
         */
        constructor(config) {
            super(config);
                        
            this.addComponent(new Engine.Components.GeometryRenderer({
                type: 'rectangle',
                width: Engine.Graphics.screenWidth/10,
                height: Engine.Graphics.screenWidth/10,
                fillColor: this.color.getHex()
            }));
        }
    }

    /**
     * A fish!
     */
    Game.Actors.Fish = class Fish extends Engine.Actors.Pawn {
        /**
         * Constructor
         */
        constructor(config) {
            super(config);
            
            this.direction = 1;
            this.movementSpeed = 30;

            this.addComponent(new Engine.Components.GeometryRenderer({
                type: 'circle',
                radius: 40,
                fillColor: '#ffaa00'
            }));
        }

        /**
         * Update
         */
        update() {
            // If we're less than 100 pixels from the left or right sides of the screen, change direction
            if(
                this.transform.position.x > Engine.Graphics.screenWidth - 100 ||
                this.transform.position.x < 100
            ) {
                this.direction = this.direction * -1;
            }
                
            // Move in the given direction on the X axis
            this.move(this.direction, 0);
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
        tile.transform.position.x = i*(Engine.Graphics.screenWidth / 10) + (tile.geometryRenderer.width / 2);
        tile.transform.position.y = Engine.Graphics.screenHeight - (tile.geometryRenderer.width / 2);
    }
   
    // --------------------
    // Create fish
    // --------------------
    let fish = new Game.Actors.Fish();

    // Start at 100x100 position
    fish.transform.position.y = 100;
    fish.transform.position.x = 100;
});
