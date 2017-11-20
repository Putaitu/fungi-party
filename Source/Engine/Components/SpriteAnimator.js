'use strict';

/**
 * A component for animating sprites
 */
class SpriteAnimator extends Engine.Components.Component {
    /**
     * Defaults
     */
    defaults() {
        super.defaults();

        this.animations = {};
        this.currentAnimationName = null;
        this.framesPerSecond = 30;
        this.frameTimer = 0;
        this.currentFrame = 0;
        this.isLooping = false;
    }

    /**
     * Plays an animation by name
     *
     * @param {String} name
     * @param {Boolean} isLooping
     */
    play(name, isLooping) {
        if(!this.animations[name]) { 
            return console.warn('Animation "' + name + '" could not be found', this);
        }

        this.isLooping = isLooping || false;

        this.currentAnimationName = name;
    }

    /**
     * Adds an animaton
     *
     * @param {String} name
     * @param {Array} frames
     */
    add(name, frames) {
        this.animations[name] = frames;
    }

    /**
     * Update
     */
    update() {
        if(!this.actor.spriteRenderer) { return; }

        let animation = this.animations[this.currentAnimationName];

        if(!animation) { return; }

        // Determine which frame we should be playing
        if(this.frameTimer > 1 / this.framesPerSecond) {
            this.frameTimer = 0;

            this.currentFrame++;

            if(this.currentFrame >= animation.length) {
                if(this.isLooping) {
                    this.currentFrame = 0;
                } else {
                    this.currentFrame = animation.length - 1;
                }
            }
        }

        // Change the SpriteRenderer to the current frame
        this.actor.spriteRenderer.rect = animation[this.currentFrame];

        // Increase the frame timer
        this.frameTimer += Engine.Time.deltaTime;
    }
}

Engine.Components.SpriteAnimator = SpriteAnimator;
