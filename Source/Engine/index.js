// Engine namespace
window.Engine = {
	Math: {},
    Actors: {},
    Components: {}
};

// Init
document.addEventListener('DOMContentLoaded', () => {
    Engine.Core.init();
}, false);

// Load modules
require('./Core');
require('./Debug');
require('./Entity');
require('./Graphics');
require('./Input');
require('./Scene');
require('./Settings');
require('./Stage');
require('./Time');
require('./UI');

require('./Math/Color');
require('./Math/Rect');
require('./Math/Vector2');

require('./Actors/Actor');
require('./Actors/Pawn');

require('./Components/Component');
require('./Components/Collider');
require('./Components/GeometryRenderer');
require('./Components/SpriteRenderer');
require('./Components/SpriteAnimator');
require('./Components/TextRenderer');
require('./Components/Transform');
