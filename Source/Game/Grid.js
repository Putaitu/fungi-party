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

