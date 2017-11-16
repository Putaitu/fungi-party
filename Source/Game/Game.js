'use strict';

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
