'use strict';

class Scene1 extends Engine.Scene {
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

        let targetGrid = new Game.Actors.TargetGrid({size: 2});
        let playerGrid = new Game.Actors.PlayerGrid({size: 2});
        let queue = new Game.Actors.Queue();
        
        let label1 = new Engine.UI.Label({
            text: 'The blueprint: Try to match the the floor tile colours to this blueprint ⮕',
            textSize: 20,
            textAlign: 'right',
            textColor: new Engine.Math.Color(1, 1, 1),
            x: (Engine.Graphics.screenWidth / 2) - (UNIT * 4),
            y: UNIT * 2,
            width: UNIT * 4
        });
        
        let label2 = new Engine.UI.Label({
            text: '⬅ The floor: Drag and drop mushrooms to add colour to this floor',
            textSize: 20,
            textColor: new Engine.Math.Color(1, 1, 1),
            width: UNIT * 4,
            x: (Engine.Graphics.screenWidth / 2) + (UNIT * 4),
            y: Engine.Graphics.screenHeight / 2
        });
        
        let label3 = new Engine.UI.Label({
            text: '⬅ Mushrooms: Red, green or blue. Use the "↺" to undo',
            textSize: 20,
            textColor: new Engine.Math.Color(1, 1, 1),
            width: UNIT * 4,
            x: Engine.Graphics.screenWidth - (UNIT * 4),
            y: Engine.Graphics.screenHeight - UNIT * 2
        });
    }
}

Game.Scenes.Scene1 = Scene1;
