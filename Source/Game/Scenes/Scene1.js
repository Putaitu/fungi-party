'use strict';

class Scene1 extends Engine.Scene {
    start() {
        Engine.UI.clearWidgets();

        let colorBlindButton = new Engine.UI.Button({
            text: 'Colour Blind: OFF',
            width: UNIT * 3,
            height: UNIT / 2,
            x: Engine.Graphics.screenWidth - UNIT * 2,
            y: UNIT,
            textColor: new Engine.Math.Color(1, 1, 1),
            textSize: UNIT / 4,
            onClick: () => {
                let isOn = colorBlindButton.text.indexOf('ON') < 0;

                colorBlindButton.text = 'Colour Blind: ' + (isOn ? 'ON' : 'OFF');

                for(let gridTile of Engine.Stage.getActors(Game.Actors.GridTile)) {
                    gridTile.lineRenderer1.isEnabled = isOn;
                    gridTile.lineRenderer2.isEnabled = isOn;
                }
            }
        });

        let background = new Engine.Actors.Actor();
        let backgroundSprite = background.addComponent('SpriteRenderer', {
            offset: new Engine.Math.Vector2(0, 0),
            width: Engine.Graphics.screenWidth,
            height: Engine.Graphics.screenHeight,
            useTiling: true
        });

        backgroundSprite.texture = './Content/Textures/T_ForestFloor_D.png';

        let targetGrid = new Game.Actors.TargetGrid({size: 2});
        let playerGrid = new Game.Actors.PlayerGrid({size: 2});
        let queue = new Game.Actors.Queue();
        
        let label1 = new Engine.UI.Label({
            text: 'The blueprint ⮕\nTry to match the the floor tile colours to this blueprint',
            textSize: UNIT / 4,
            textAlignX: 'end',
            textColor: new Engine.Math.Color(1, 1, 1),
            x: (Engine.Graphics.screenWidth / 2) - (UNIT * 4),
            y: UNIT * 2,
            width: UNIT * 4
        });
        
        let label2 = new Engine.UI.Label({
            text: '⬅ The floor\nDrag and drop mushrooms to add colour to this floor',
            textSize: UNIT / 4,
            textColor: new Engine.Math.Color(1, 1, 1),
            width: UNIT * 4,
            x: (Engine.Graphics.screenWidth / 2) + (UNIT * 4),
            y: Engine.Graphics.screenHeight / 2
        });
        
        let label3 = new Engine.UI.Label({
            text: '⬅ Mushrooms\nRed, green or blue. \nUse the "↺" to undo. \nDrag down to discard.',
            textSize: 20,
            textColor: new Engine.Math.Color(1, 1, 1),
            width: UNIT * 4,
            x: Engine.Graphics.screenWidth - (UNIT * 4),
            y: Engine.Graphics.screenHeight - UNIT * 2
        });

        let fire = new Game.Actors.Fire();
    }
}

Game.Scenes.Scene1 = Scene1;
