'use strict';

class Scene2 extends Engine.Scene {
    start() {
        // Retry level
        let retryButton = new Engine.UI.Button({
            text: '↺ RETRY',
            width: UNIT * 2,
            height: UNIT,
            x: UNIT,
            y: UNIT / 2,
            textSize: UNIT / 3,
            textColor: new Engine.Math.Color(1, 1, 1),
            fillColor: new Engine.Math.Color(0, 0, 0),
            onClick: () => {
                Engine.Stage.reloadCurrentScene(); 
            }
        });

        // Toggle colour guides
        let colorBlindButton = new Engine.UI.Button({
            text: 'Guides: OFF',
            width: UNIT * 2,
            height: UNIT,
            x: Engine.Graphics.screenWidth - UNIT,
            y: UNIT / 2,
            textColor: new Engine.Math.Color(1, 1, 1),
            fillColor: new Engine.Math.Color(0, 0, 0),
            textSize: UNIT / 3,
            onClick: () => {
                let isOn = colorBlindButton.text.indexOf('ON') < 0;

                colorBlindButton.text = 'Guides: ' + (isOn ? 'ON' : 'OFF');

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


        let targetGrid = new Game.Actors.TargetGrid();
        let playerGrid = new Game.Actors.PlayerGrid();
        let queue = new Game.Actors.Queue();
		let fire = new Game.Actors.Fire();
    }
}

Game.Scenes.Scene2 = Scene2;
