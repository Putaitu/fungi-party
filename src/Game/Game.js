'use strict';

/**
 * A simple colour tile 
 */
Game.Actors.ColorTile = class ColorTile extends Engine.Actors.Actor {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
                    
        this.colorHistory = [ this.color ];
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.addComponent('GeometryRenderer', {
            type: 'rectangle',
            width: UNIT,
            height: UNIT,
            fillColor: new Engine.Math.Color(0, 0, 0),
            strokeWidth: 0
        });
        
        this.lineRenderer = this.addComponent('GeometryRenderer', {
            type: 'line',
            strokeColor: new Engine.Math.Color(1, 1, 1),
            strokeWidth: UNIT / 20,
            points: []
        });

        this.addComponent('TextRenderer', {
            fillColor: new Engine.Math.Color(1, 1, 1),
            strokeColor: new Engine.Math.Color(1, 1, 1),
            size: UNIT,
            strokeWidth: UNIT / 20
        });
        
        this.addComponent('Collider', {
            width: UNIT,
            height: UNIT,
            offset: {
                x: 0.5,
                y: 0.5
            }
        });
                    
        this.colorHistory = [];
    }

    /**
     * Getter: Colour
     */
    get color() {
        return this.geometryRenderer.fillColor;
    }
    
    /**
     * Setter: Colour
     */
    set color(value) {
        let unit = this.geometryRenderer.width * 0.8;
        let yMax = unit / 2;
        let xMin = -yMax;

        this.geometryRenderer.fillColor = value;
        this.geometryRenderer.strokeColor = value.getNegative();
        this.textRenderer.fillColor = value.getNegative();
        this.textRenderer.fillColor = value.getNegative();
        this.lineRenderer.strokeColor = value.getNegative();
        this.lineRenderer.points = [
            new Engine.Math.Vector2(xMin, yMax - (unit * value.r)),
            new Engine.Math.Vector2(xMin + (unit / 2), yMax - (unit * value.g)),
            new Engine.Math.Vector2(xMin + unit, yMax - (unit * value.b))
        ];
    }

    /**
     * Event: Picked
     *
     * @param {PlayerGrid} playerGrid
     * @param {Number} tileIndex
     */
    onPicked(playerGrid, tileIndex) {
        let queueColor = this.color;
        
        // Get the current tile
        let currentTile = playerGrid.children[tileIndex];
        
        if(typeof currentTile.isCorrect !== 'undefined') { return; }
        
        // Add the new colour to the old colour
        let oldColor = currentTile.color;
        let newColor = Engine.Math.Color.add(oldColor, queueColor);

        // Apply the mixed colour
        currentTile.pushColor(newColor);
    }

    /**
     * Sets highlight
     *
     * @param {Boolean} isActive
     */
    setHighlight(isActive) {
        this.geometryRenderer.strokeWidth = isActive ? UNIT / 20 : 0;
    }
    
    /**
     * Sets transparent
     *
     * @param {Boolean} isTransparent
     */
    setTransparent(isTransparent) {
        let color = this.color;

        color.a = isTransparent ? 0.5 : 1;

        this.color = color;
    }

    /**
     * Sets the color
     *
     * @param {Color} color
     */
    pushColor(color) {
        this.colorHistory.push(this.color);

        this.color = color;
    }

    /**
     * Undo color
     */
    undoColor() {
        if(this.colorHistory.length < 2) { return; }

        let prevColor = this.colorHistory.pop();
        
        this.color = prevColor;
    }

    /**
     * Sets correct state
     *
     * @param {Boolean} isCorrect
     */
    setCorrect(isCorrect) {
        this.isCorrect = isCorrect;

        switch(isCorrect) {
            case true:
                this.textRenderer.text = '✓';
                break;

            case false:
                this.textRenderer.text = '✕';
                break;

            case undefined:
                this.textRenderer.text = '';
                break;
        }
    }
}

/**
 * A powerup tile
 */
Game.Actors.PowerupTile = class PowerupTile extends Game.Actors.ColorTile {
    /**
     * Constructor
     */
    constructor(params) {
        super(params);
   
        this.textRenderer.size = UNIT / 2;

        switch(this.type) {
            case 'undo':
                this.textRenderer.text = '↺';
                break;
        }
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.type = 'undo';
    }

    /**
     * Event: Picked
     *
     * @param {PlayerGrid} playerGrid
     * @param {Number} tileIndex
     */
    onPicked(playerGrid, tileIndex) {
        // Get the current tile
        let currentTile = playerGrid.children[tileIndex];
        
        switch(this.type) {
            case 'undo':
                currentTile.undoColor();
                break;

        }
    }
}

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

        let tile = new Game.Actors.ColorTile({color: randomColor})
   
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

/**
 * A grid
 */
Game.Actors.Grid = class Grid extends Engine.Actors.Actor {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.tiles = []
    }
}

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
                let tile = new Game.Actors.ColorTile({
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
                let tile = new Game.Actors.ColorTile();
            
                tile.transform.position.x = (UNIT * 2) * (x - 1);
                tile.transform.position.y = (UNIT * 2) * (y - 1);

                tile.geometryRenderer.width = UNIT * 2
                tile.geometryRenderer.height = UNIT * 2
                
                tile.collider.width = UNIT * 2
                tile.collider.height = UNIT * 2
               
                tile.color = new Engine.Math.Color(0, 0, 0);

                this.addChild(tile);
            }
        }

        // Place grid
        this.transform.position.x = Engine.Graphics.screenWidth / 2;
        this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 6.5;

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
            this.children[i].setHighlight(this.children[i].collider.getBounds().contains(x, y));
        }
        
        // Check if tile is hovering the void
        queueTile.setTransparent(y > Engine.Stage.getActor(Game.Actors.Queue).getGlobalTransform().position.y + UNIT);
    }

    /**
     * Event: A tile is being released
     *
     * @param {ColorTile} queueTile
     */
    onReleasingTile(e, queueTile) {
        let x = e.pageX;
        let y = e.pageY;

        if(e.changedTouches && e.changedTouches.length > 0) {
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
        }

        // Find hovered tile, if any
        for(let i = 0; i < this.children.length; i++) {
            if(this.children[i].collider.getBounds().contains(x, y)) {
                this.onDropTile(this.draggingTile, i);
            }
        }

        // Check if tile is hovering the void
        if(y > Engine.Stage.getActor(Game.Actors.Queue).getGlobalTransform().position.y + UNIT) {
            this.draggingTile.destroy();
        }

        this.draggingTile = null;

        Engine.Stage.getActor(Game.Actors.Queue).updateTiles();
    }

    /**
     * Event: A tile was dropped onto the grid
     *
     * @param {ColorTile} queueTile
     * @param {Number} tileIndex
     */
    onDropTile(queueTile, tileIndex) { 
        // Trigger on picked event
        queueTile.onPicked(this, tileIndex);

        // Compare to the target colour
        let targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);

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

        // Remove queue tile
        queueTile.destroy();
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.size = 3;
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
