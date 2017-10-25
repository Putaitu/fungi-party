'use strict';

/**
 * A transform component
 */
class Transform extends Engine.Components.Component {
    /**
     * Defaults
     */
    defaults() {
        this.position = { x: 0, y: 0 };
        this.scale = { x: 1, y: 1 };
        this.rotation = 0;
    }
}

Engine.Components.Transform = Transform;
