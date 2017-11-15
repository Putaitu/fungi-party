'use strict';

class Scene2 extends Engine.Scene {
    start() {
        Engine.UI.clearWidgets();

        let targetGrid = new Game.Actors.TargetGrid();
        let playerGrid = new Game.Actors.PlayerGrid();
        let queue = new Game.Actors.Queue();
    }
}

Game.Scenes.Scene2 = Scene2;
