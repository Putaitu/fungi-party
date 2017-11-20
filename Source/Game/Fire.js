'use strict';

/**
 * A fire into which mushrooms can be discarded
 */
class Fire extends Engine.Actors.Actor {
    /**
     * Constructor
     */
    constructor(config) {
        super(config);

        this.spriteAnimator.play('burning', true);
    }

    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.addComponent('SpriteRenderer', {
            texture: './Content/Textures/T_Fire_D.png',
            width: UNIT,
            height: UNIT
        });

        this.addComponent('Collider', {
            width: UNIT,
            height: UNIT,
            offset: new Engine.Math.Vector2(0.5, 0.5)
        });

        this.addComponent('SpriteAnimator', {
            framesPerSecond: 12,
            animations: {
                'burning': [
                    new Engine.Math.Rect(0, 0, 256, 256),
                    new Engine.Math.Rect(256, 0, 256, 256),
                    new Engine.Math.Rect(512, 0, 256, 256),
                    new Engine.Math.Rect(768, 0, 256, 256),
                    new Engine.Math.Rect(0, 256, 256, 256),
                    new Engine.Math.Rect(256, 256, 256, 256),
                    new Engine.Math.Rect(512, 256, 256, 256),
                    new Engine.Math.Rect(768, 256, 256, 256)
                ]
            }
        });

        this.transform.position.y = Engine.Graphics.screenHeight - UNIT;
        this.transform.position.x = Engine.Graphics.screenWidth / 2;
    }
}

Game.Actors.Fire = Fire;
