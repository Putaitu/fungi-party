'use strict';

Engine.Settings.Game.title = 'Fungi Party';

// Init everything
Engine.Core.on('init', () => {
    // A standard unit for the game
    window.UNIT = Engine.Graphics.screenHeight / 14;

    // Init scenes
    require('./Scenes/Scene1');
    Engine.Stage.addScene(Game.Scenes.Scene1);
    
    require('./Scenes/Scene2');
    Engine.Stage.addScene(Game.Scenes.Scene2);

	require('./Scenes/Scene3');
    Engine.Stage.addScene(Game.Scenes.Scene3);
	
	require('./Scenes/Scene4');
    Engine.Stage.addScene(Game.Scenes.Scene4);
	
	require('./Scenes/Scene5');
    Engine.Stage.addScene(Game.Scenes.Scene5);
	
    // Load first scene
    Engine.Stage.loadScene('Scene1');
});
