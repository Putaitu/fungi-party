'use strict';

/**
 * A pawn is an actor that can move
 */
class Pawn extends Engine.Actors.Actor {
    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.movementSpeed = 10;
    }

    /**
     * Moves this pawn
     *
     * @param {Number} x
     * @param {Number} y
     */
    move(x, y) {
        this.transform.position.x += x * Engine.Time.deltaTime * this.movementSpeed;
        this.transform.position.y += y * Engine.Time.deltaTime * this.movementSpeed;
    }
}

Engine.Actors.Pawn = Pawn;
