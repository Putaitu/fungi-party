'use strict';

class Scene2 extends Engine.Scene {
    start() {
        Engine.UI.clearWidgets();

        let background = new Engine.Actors.Actor();
        let backgroundSprite = background.addComponent('SpriteRenderer', {
            offset: new Engine.Math.Vector2(0, 0),
            width: Engine.Graphics.screenWidth,
            height: Engine.Graphics.screenHeight,
            useTiling: true
        });

        backgroundSprite.setTexture('./Content/Textures/T_ForestFloor_D.png');


        let targetGrid = new Game.Actors.TargetGrid();
        let playerGrid = new Game.Actors.PlayerGrid();
        let queue = new Game.Actors.Queue();
    }
}

Game.Scenes.Scene2 = Scene2;
