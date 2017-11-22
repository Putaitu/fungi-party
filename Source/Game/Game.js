'use strict';

Game.Game = class Game {
    static showEndLevelScreen() {
        Engine.Stage.clearActors();
        Engine.UI.clearWidgets();

        new Engine.UI.Label({
            text: 'You used ' + Engine.Stage.scene.usedMoves + ' moves',
            textAlignX: 'center',
            textAlignY: 'center',
            textSize: UNIT / 2,
            x: Engine.Graphics.screenWidth / 2,
            y: UNIT * 4,
            width: UNIT * 8,
            height: UNIT
        });

        new Engine.UI.Button({
            text: 'NEXT →',
            width: UNIT * 2,
            height: UNIT,
            x: Engine.Graphics.screenWidth / 2,
            y: Engine.Graphics.screenHeight - UNIT * 4,
            textSize: UNIT / 3,
            textColor: new Engine.Math.Color(1, 1, 1),
            fillColor: new Engine.Math.Color(0, 0, 0),
            onClick: () => {
                Engine.Stage.loadNextScene();
            }
        });
    }
}

// Init everything
Engine.Core.on('init', () => {
    // A standard unit for the game
    window.UNIT = Engine.Graphics.screenHeight / 14;

    // Init scenes
    require('./Scenes/Scene1');
    Engine.Stage.addScene(Game.Scenes.Scene1);
    
    require('./Scenes/Scene2');
    Engine.Stage.addScene(Game.Scenes.Scene2);

    // Load first scene
    Engine.Stage.loadScene('Scene1');
});
