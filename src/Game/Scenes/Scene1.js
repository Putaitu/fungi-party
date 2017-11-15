'use strict';

class Scene1 extends Engine.Scene {
    start() {
        Engine.UI.clearWidgets();

        let targetGrid = new Game.Actors.TargetGrid({size: 2});
        let playerGrid = new Game.Actors.PlayerGrid({size: 2});
        let queue = new Game.Actors.Queue();
        
        let label1 = new Engine.UI.Label({
            text: 'Bla bla bla ⮕',
            textSize: 20,
            x: UNIT * 7,
            y: UNIT * 2
        });
        
        let label2 = new Engine.UI.Label({
            text: '⬅ Bla bla bla',
            textSize: 20,
            x: UNIT * 14,
            y: Engine.Graphics.screenHeight / 2
        });
        
        let label3 = new Engine.UI.Label({
            text: '⬅ Bla bla bla',
            textSize: 20,
            x: UNIT * 14,
            y: Engine.Graphics.screenHeight - UNIT * 2
        });
    }
}

Game.Scenes.Scene1 = Scene1;
