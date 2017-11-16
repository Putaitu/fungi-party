/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Game namespace
	window.Game = {
	    Actors: {},
	    Components: {},
	    Scenes: {}
	};

	// Load modules
	__webpack_require__(25);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(22);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Init everything

	Engine.Core.on('init', function () {
	    // A standard unit for the game
	    window.UNIT = Engine.Graphics.screenHeight / 14;

	    // Init scenes
	    __webpack_require__(23);
	    Engine.Stage.addScene(Game.Scenes.Scene1);

	    __webpack_require__(24);
	    Engine.Stage.addScene(Game.Scenes.Scene2);

	    // Load first scene
	    Engine.Stage.loadScene('Scene1');
	});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scene1 = function (_Engine$Scene) {
	    _inherits(Scene1, _Engine$Scene);

	    function Scene1() {
	        _classCallCheck(this, Scene1);

	        return _possibleConstructorReturn(this, (Scene1.__proto__ || Object.getPrototypeOf(Scene1)).apply(this, arguments));
	    }

	    _createClass(Scene1, [{
	        key: 'start',
	        value: function start() {
	            Engine.UI.clearWidgets();

	            var background = new Engine.Actors.Actor();
	            var backgroundSprite = background.addComponent('SpriteRenderer', {
	                offset: new Engine.Math.Vector2(0, 0),
	                width: Engine.Graphics.screenWidth,
	                height: Engine.Graphics.screenHeight,
	                useTiling: true
	            });

	            backgroundSprite.setTexture('./Content/Textures/T_ForestFloor_D.png');

	            var targetGrid = new Game.Actors.TargetGrid({ size: 2 });
	            var playerGrid = new Game.Actors.PlayerGrid({ size: 2 });
	            var queue = new Game.Actors.Queue();

	            var label1 = new Engine.UI.Label({
	                text: 'The blueprint: Try to match the the floor tile colours to this blueprint ⮕',
	                textSize: 20,
	                textAlign: 'right',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2 - UNIT * 4,
	                y: UNIT * 2,
	                width: UNIT * 4
	            });

	            var label2 = new Engine.UI.Label({
	                text: '⬅ The floor: Drag and drop mushrooms to add colour to this floor',
	                textSize: 20,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                x: Engine.Graphics.screenWidth / 2 + UNIT * 4,
	                y: Engine.Graphics.screenHeight / 2
	            });

	            var label3 = new Engine.UI.Label({
	                text: '⬅ Mushrooms: Red, green or blue. Use the "↺" to undo',
	                textSize: 20,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                x: Engine.Graphics.screenWidth - UNIT * 4,
	                y: Engine.Graphics.screenHeight - UNIT * 2
	            });
	        }
	    }]);

	    return Scene1;
	}(Engine.Scene);

	Game.Scenes.Scene1 = Scene1;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scene2 = function (_Engine$Scene) {
	    _inherits(Scene2, _Engine$Scene);

	    function Scene2() {
	        _classCallCheck(this, Scene2);

	        return _possibleConstructorReturn(this, (Scene2.__proto__ || Object.getPrototypeOf(Scene2)).apply(this, arguments));
	    }

	    _createClass(Scene2, [{
	        key: 'start',
	        value: function start() {
	            Engine.UI.clearWidgets();

	            var background = new Engine.Actors.Actor();
	            var backgroundSprite = background.addComponent('SpriteRenderer', {
	                offset: new Engine.Math.Vector2(0, 0),
	                width: Engine.Graphics.screenWidth,
	                height: Engine.Graphics.screenHeight,
	                useTiling: true
	            });

	            backgroundSprite.setTexture('./Content/Textures/T_ForestFloor_D.png');

	            var targetGrid = new Game.Actors.TargetGrid();
	            var playerGrid = new Game.Actors.PlayerGrid();
	            var queue = new Game.Actors.Queue();
	        }
	    }]);

	    return Scene2;
	}(Engine.Scene);

	Game.Scenes.Scene2 = Scene2;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A simple colour tile 
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Game.Actors.ColorTile = function (_Engine$Actors$Actor) {
	    _inherits(ColorTile, _Engine$Actors$Actor);

	    function ColorTile() {
	        _classCallCheck(this, ColorTile);

	        return _possibleConstructorReturn(this, (ColorTile.__proto__ || Object.getPrototypeOf(ColorTile)).apply(this, arguments));
	    }

	    _createClass(ColorTile, [{
	        key: 'defaults',

	        /**
	         * Defaults
	         */
	        value: function defaults() {
	            _get(ColorTile.prototype.__proto__ || Object.getPrototypeOf(ColorTile.prototype), 'defaults', this).call(this);

	            this.addComponent('Collider', {
	                width: UNIT,
	                height: UNIT,
	                offset: {
	                    x: 0.5,
	                    y: 0.5
	                }
	            });
	        }

	        /**
	         * Getter: Colour
	         */

	    }, {
	        key: 'color',
	        get: function get() {
	            return new Engine.Math.Color(0, 0, 0);
	        }

	        /**
	         * Setter: Colour
	         */
	        ,
	        set: function set(value) {}
	    }]);

	    return ColorTile;
	}(Engine.Actors.Actor);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A powerup tile
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Game.Actors.PowerupTile = function (_Game$Actors$ColorTil) {
	    _inherits(PowerupTile, _Game$Actors$ColorTil);

	    /**
	     * Constructor
	     */
	    function PowerupTile(params) {
	        _classCallCheck(this, PowerupTile);

	        var _this = _possibleConstructorReturn(this, (PowerupTile.__proto__ || Object.getPrototypeOf(PowerupTile)).call(this, params));

	        _this.textRenderer.size = UNIT / 2;

	        switch (_this.type) {
	            case 'undo':
	                _this.textRenderer.text = '↺';
	                break;
	        }
	        return _this;
	    }

	    /**
	     * Sets transparent
	     *
	     * @param {Boolean} isTransparent
	     */


	    _createClass(PowerupTile, [{
	        key: 'setTransparent',
	        value: function setTransparent(isTransparent) {
	            if (isTransparent) {
	                this.textRenderer.strokeColor.a = 0.5;
	                this.textRenderer.fillColor.a = 0.5;
	            } else {
	                this.textRenderer.strokeColor.a = 1;
	                this.textRenderer.fillColor.a = 1;
	            }
	        }

	        /**
	         * Defaults
	         */

	    }, {
	        key: 'defaults',
	        value: function defaults() {
	            _get(PowerupTile.prototype.__proto__ || Object.getPrototypeOf(PowerupTile.prototype), 'defaults', this).call(this);

	            this.addComponent('TextRenderer', {
	                fillColor: new Engine.Math.Color(1, 1, 1),
	                strokeColor: new Engine.Math.Color(0, 0, 0),
	                size: UNIT,
	                strokeWidth: UNIT / 20
	            });

	            this.type = 'undo';
	        }

	        /**
	         * Event: Picked
	         *
	         * @param {PlayerGrid} playerGrid
	         * @param {Number} tileIndex
	         */

	    }, {
	        key: 'onPicked',
	        value: function onPicked(playerGrid, tileIndex) {
	            // Get the current tile
	            var currentTile = playerGrid.children[tileIndex];

	            switch (this.type) {
	                case 'undo':
	                    currentTile.undoColor();
	                    break;

	            }
	        }
	    }]);

	    return PowerupTile;
	}(Game.Actors.ColorTile);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Queue 
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Game.Actors.Queue = function (_Engine$Actors$Actor) {
	    _inherits(Queue, _Engine$Actors$Actor);

	    /**
	     * Constructor
	     */
	    function Queue(config) {
	        _classCallCheck(this, Queue);

	        // Position the queue
	        var _this = _possibleConstructorReturn(this, (Queue.__proto__ || Object.getPrototypeOf(Queue)).call(this, config));

	        _this.transform.position.x = UNIT;
	        _this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 2;

	        _this.addComponent('GeometryRenderer', {
	            type: 'rectangle',
	            fillColor: new Engine.Math.Color(0.3, 0.3, 0.3),
	            height: UNIT,
	            width: UNIT * 12
	        });
	        return _this;
	    }

	    /**
	     * Defaults
	     */


	    _createClass(Queue, [{
	        key: 'defaults',
	        value: function defaults() {
	            _get(Queue.prototype.__proto__ || Object.getPrototypeOf(Queue.prototype), 'defaults', this).call(this);

	            this.interval = 1;
	            this.timer = 0;
	            this.randomAmounts = [0, 0, 0];
	        }

	        /**
	         * Update
	         */

	    }, {
	        key: 'update',
	        value: function update() {
	            if (this.timer <= 0) {
	                this.spawnTile();

	                this.timer = this.interval;
	            }

	            this.timer -= Engine.Time.deltaTime;
	        }

	        /**
	         * Updates tiles
	         */

	    }, {
	        key: 'updateTiles',
	        value: function updateTiles() {
	            var draggingTile = Engine.Stage.getActor(Game.Actors.PlayerGrid).draggingTile;

	            for (var i = 0; i < this.children.length; i++) {
	                // Don't auto position the dragged tile
	                if (this.children[i] === draggingTile) {
	                    continue;
	                }

	                this.children[i].transform.position.x = i * UNIT;
	                this.children[i].transform.position.y = 0;
	            }
	        }

	        /**
	         * Spawns a new tile
	         */

	    }, {
	        key: 'spawnTile',
	        value: function spawnTile() {
	            if (this.children.length > 5) {
	                return;
	            }

	            // Get random powerup tile
	            var randomPowerups = [false, false, false, 'undo'];

	            var randomPowerupIndex = Math.floor(Math.random() * randomPowerups.length);

	            if (randomPowerups[randomPowerupIndex]) {
	                var _tile = new Game.Actors.PowerupTile({
	                    color: new Engine.Math.Color(1, 1, 1),
	                    type: randomPowerups[randomPowerupIndex]
	                });

	                this.addChild(_tile);

	                // Set input events on tile
	                _tile.on('pointerdown', function (e) {
	                    Engine.Stage.getActor(Game.Actors.PlayerGrid).draggingTile = _tile;
	                });

	                this.updateTiles();
	                return;
	            }

	            // Get random color
	            var randomColors = [new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5)];

	            var randomColorIndex = Math.floor(Math.random() * 3);

	            // Make sure it isn't too random by comparing to previous occurrences
	            for (var i = 0; i < 3; i++) {
	                if (this.randomAmounts[i] < this.randomAmounts[randomColorIndex]) {
	                    randomColorIndex = i;
	                    break;
	                }
	            }

	            this.randomAmounts[randomColorIndex]++;

	            // Get random colour and assign it to a new tile
	            var randomColor = randomColors[randomColorIndex];

	            var tile = new Game.Actors.QueueTile({ color: randomColor });

	            // Set input events on tile
	            tile.on('pointerdown', function (e) {
	                Engine.Stage.getActor(Game.Actors.PlayerGrid).draggingTile = tile;
	            });

	            this.addChild(tile);

	            this.updateTiles();
	        }

	        /**
	         * Removes the oldest tile from the queue and returns it
	         *
	         * @returns {ColorTile} Result
	         */

	    }, {
	        key: 'popTile',
	        value: function popTile() {
	            if (this.children.length < 1) {
	                return;
	            }

	            var colorTile = this.children.shift();

	            this.updateTiles();

	            colorTile.destroy();

	            return colorTile;
	        }
	    }]);

	    return Queue;
	}(Engine.Actors.Actor);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A grid
	 */
	Game.Actors.Grid = function (_Engine$Actors$Actor) {
	  _inherits(Grid, _Engine$Actors$Actor);

	  /**
	   * Constructor
	   */
	  function Grid(config) {
	    _classCallCheck(this, Grid);

	    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, config));
	  }

	  /**
	   * Defaults
	   */


	  _createClass(Grid, [{
	    key: "defaults",
	    value: function defaults() {
	      _get(Grid.prototype.__proto__ || Object.getPrototypeOf(Grid.prototype), "defaults", this).call(this);

	      this.tiles = [];
	    }
	  }]);

	  return Grid;
	}(Engine.Actors.Actor);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * The target grid
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Game.Actors.TargetGrid = function (_Game$Actors$Grid) {
	    _inherits(TargetGrid, _Game$Actors$Grid);

	    /**
	     * Constructor
	     */
	    function TargetGrid(config) {
	        _classCallCheck(this, TargetGrid);

	        // Build random tiles
	        var _this = _possibleConstructorReturn(this, (TargetGrid.__proto__ || Object.getPrototypeOf(TargetGrid)).call(this, config));

	        for (var y = 0; y < _this.size; y++) {
	            for (var x = 0; x < _this.size; x++) {
	                var tile = new Game.Actors.FloorTile({
	                    color: Engine.Math.Color.getRandom(0.5, Engine.Math.Color.RULE.NO_GREYSCALE)
	                });

	                tile.transform.position.x = UNIT * x - UNIT;
	                tile.transform.position.y = UNIT * y - UNIT;

	                _this.addChild(tile);
	            }
	        }

	        // Place grid
	        _this.transform.position.x = Engine.Graphics.screenWidth / 2;
	        _this.transform.position.y = UNIT * 2;
	        return _this;
	    }

	    /**
	     * Defaults
	     */


	    _createClass(TargetGrid, [{
	        key: 'defaults',
	        value: function defaults() {
	            _get(TargetGrid.prototype.__proto__ || Object.getPrototypeOf(TargetGrid.prototype), 'defaults', this).call(this);

	            this.size = 3;
	        }
	    }]);

	    return TargetGrid;
	}(Game.Actors.Grid);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * The player grid
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Game.Actors.PlayerGrid = function (_Game$Actors$Grid) {
	    _inherits(PlayerGrid, _Game$Actors$Grid);

	    /**
	     * Constructor
	     */
	    function PlayerGrid(config) {
	        _classCallCheck(this, PlayerGrid);

	        // Build blank tiles
	        var _this = _possibleConstructorReturn(this, (PlayerGrid.__proto__ || Object.getPrototypeOf(PlayerGrid)).call(this, config));

	        for (var y = 0; y < _this.size; y++) {
	            for (var x = 0; x < _this.size; x++) {
	                var tile = new Game.Actors.FloorTile();

	                tile.transform.position.x = UNIT * 2 * (x - 1);
	                tile.transform.position.y = UNIT * 2 * (y - 1);

	                tile.geometryRenderer.width = UNIT * 2;
	                tile.geometryRenderer.height = UNIT * 2;

	                tile.collider.width = UNIT * 2;
	                tile.collider.height = UNIT * 2;

	                tile.color = new Engine.Math.Color(0, 0, 0);

	                _this.addChild(tile);
	            }
	        }

	        // Place grid
	        _this.transform.position.x = Engine.Graphics.screenWidth / 2;
	        _this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 6.5;

	        // Pointer events 
	        Engine.Input.on('pointerup', [0, 1], function (e) {
	            if (!_this.draggingTile) {
	                return;
	            }

	            _this.onReleasingTile(e, _this.draggingTile);
	        });

	        Engine.Input.on('pointermove', [0, 1], function (e) {
	            if (!_this.draggingTile) {
	                return;
	            }

	            _this.onDraggingTile(e, _this.draggingTile);
	        });
	        return _this;
	    }

	    /**
	     * Event: A tile is being dragged
	     *
	     * @param {InputEvent} e
	     * @param {ColorTile} queueTile
	     */


	    _createClass(PlayerGrid, [{
	        key: 'onDraggingTile',
	        value: function onDraggingTile(e, queueTile) {
	            queueTile.transform.translate(Engine.Input.pointerDelta.x, Engine.Input.pointerDelta.y);

	            var x = e.pageX;
	            var y = e.pageY;

	            if (e.changedTouches && e.changedTouches.length > 0) {
	                x = e.changedTouches[0].pageX;
	                y = e.changedTouches[0].pageY;
	            }

	            // Highlight hovered tile
	            for (var i = 0; i < this.children.length; i++) {
	                this.children[i].setHighlight(this.children[i].collider.getBounds().contains(x, y));
	            }

	            // Check if tile is hovering the void
	            queueTile.setTransparent(y > Engine.Stage.getActor(Game.Actors.Queue).getGlobalTransform().position.y + UNIT);
	        }

	        /**
	         * Event: A tile is being released
	         *
	         * @param {ColorTile} queueTile
	         */

	    }, {
	        key: 'onReleasingTile',
	        value: function onReleasingTile(e, queueTile) {
	            var x = e.pageX;
	            var y = e.pageY;

	            if (e.changedTouches && e.changedTouches.length > 0) {
	                x = e.changedTouches[0].pageX;
	                y = e.changedTouches[0].pageY;
	            }

	            // Find hovered tile, if any
	            for (var i = 0; i < this.children.length; i++) {
	                if (this.children[i].collider.getBounds().contains(x, y)) {
	                    this.onDropTile(this.draggingTile, i);
	                }
	            }

	            // Check if tile is hovering the void
	            if (y > Engine.Stage.getActor(Game.Actors.Queue).getGlobalTransform().position.y + UNIT) {
	                this.draggingTile.destroy();
	            }

	            this.draggingTile = null;

	            Engine.Stage.getActor(Game.Actors.Queue).updateTiles();
	        }

	        /**
	         * Event: A tile was dropped onto the grid
	         *
	         * @param {ColorTile} queueTile
	         * @param {Number} tileIndex
	         */

	    }, {
	        key: 'onDropTile',
	        value: function onDropTile(queueTile, tileIndex) {
	            // Trigger on picked event
	            queueTile.onPicked(this, tileIndex);

	            // Compare to the target colour
	            var targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);

	            var targetTile = targetGrid.children[tileIndex];
	            var currentTile = this.children[tileIndex];

	            currentTile.setHighlight(false);

	            var isCorrect = currentTile.color.equals(targetTile.color);

	            var isIncorrect = currentTile.color.r > targetTile.color.r || currentTile.color.g > targetTile.color.g || currentTile.color.b > targetTile.color.b;

	            if (isIncorrect) {
	                currentTile.setCorrect(false);
	            } else if (isCorrect) {
	                currentTile.setCorrect(true);
	            } else {
	                currentTile.setCorrect(undefined);
	            }

	            // Check if won
	            this.checkIfWon();

	            // Remove queue tile
	            queueTile.destroy();
	        }

	        /**
	         * Checks if the level is won
	         */

	    }, {
	        key: 'checkIfWon',
	        value: function checkIfWon() {
	            var targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);
	            var correctTiles = 0;

	            for (var i in this.children) {
	                var currentTile = this.children[i];
	                var targetTile = targetGrid.children[i];

	                if (targetTile.color.equals(currentTile.color)) {
	                    correctTiles++;
	                }
	            }

	            if (correctTiles >= this.children.length) {
	                var currentScene = parseInt(Engine.Stage.scene.name.match(/\d+/));

	                currentScene++;

	                Engine.Stage.loadScene('Scene' + currentScene);
	            }
	        }

	        /**
	         * Defaults
	         */

	    }, {
	        key: 'defaults',
	        value: function defaults() {
	            _get(PlayerGrid.prototype.__proto__ || Object.getPrototypeOf(PlayerGrid.prototype), 'defaults', this).call(this);

	            this.size = 3;
	        }
	    }]);

	    return PlayerGrid;
	}(Game.Actors.Grid);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A floor tile, which is both in the target grid and the player grid
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Game.Actors.FloorTile = function (_Game$Actors$ColorTil) {
	    _inherits(FloorTile, _Game$Actors$ColorTil);

	    /**
	     * Constructor
	     */
	    function FloorTile(config) {
	        _classCallCheck(this, FloorTile);

	        var _this = _possibleConstructorReturn(this, (FloorTile.__proto__ || Object.getPrototypeOf(FloorTile)).call(this, config));

	        _this.colorHistory = [_this.color];
	        return _this;
	    }

	    /**
	     * Defaults
	     */


	    _createClass(FloorTile, [{
	        key: 'defaults',
	        value: function defaults() {
	            _get(FloorTile.prototype.__proto__ || Object.getPrototypeOf(FloorTile.prototype), 'defaults', this).call(this);

	            this.addComponent('GeometryRenderer', {
	                type: 'rectangle',
	                width: UNIT,
	                height: UNIT,
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                strokeColor: new Engine.Math.Color(1, 1, 1),
	                strokeWidth: 0
	            });

	            this.lineRenderer2 = this.addComponent('GeometryRenderer', {
	                type: 'line',
	                strokeColor: new Engine.Math.Color(0, 0, 0),
	                strokeWidth: UNIT / 10,
	                points: []
	            });

	            this.lineRenderer1 = this.addComponent('GeometryRenderer', {
	                type: 'line',
	                strokeColor: new Engine.Math.Color(1, 1, 1),
	                strokeWidth: UNIT / 20,
	                points: []
	            });

	            this.addComponent('TextRenderer', {
	                fillColor: new Engine.Math.Color(1, 1, 1),
	                strokeColor: new Engine.Math.Color(0, 0, 0),
	                size: UNIT,
	                strokeWidth: UNIT / 20
	            });

	            this.colorHistory = [];
	        }

	        /**
	         * Getter: Colour
	         */

	    }, {
	        key: 'setHighlight',


	        /**
	         * Sets highlight
	         *
	         * @param {Boolean} isActive
	         */
	        value: function setHighlight(isActive) {
	            this.geometryRenderer.strokeWidth = isActive ? UNIT / 20 : 0;
	        }

	        /**
	         * Sets the color
	         *
	         * @param {Color} color
	         */

	    }, {
	        key: 'pushColor',
	        value: function pushColor(color) {
	            this.colorHistory.push(this.color);

	            this.color = color;
	        }

	        /**
	         * Undo color
	         */

	    }, {
	        key: 'undoColor',
	        value: function undoColor() {
	            if (this.colorHistory.length < 2) {
	                return;
	            }

	            var prevColor = this.colorHistory.pop();

	            this.color = prevColor;
	        }

	        /**
	         * Sets correct state
	         *
	         * @param {Boolean} isCorrect
	         */

	    }, {
	        key: 'setCorrect',
	        value: function setCorrect(isCorrect) {
	            this.isCorrect = isCorrect;

	            switch (isCorrect) {
	                case true:
	                    this.textRenderer.text = '✓';
	                    break;

	                case false:
	                    this.textRenderer.text = '✕';
	                    break;

	                case undefined:
	                    this.textRenderer.text = '';
	                    break;
	            }
	        }
	    }, {
	        key: 'color',
	        get: function get() {
	            return this.geometryRenderer.fillColor;
	        }

	        /**
	         * Setter: Colour
	         */
	        ,
	        set: function set(value) {
	            var unit = this.geometryRenderer.width * 0.8;
	            var yMax = unit / 2;
	            var xMin = -yMax;

	            this.geometryRenderer.fillColor = value;

	            this.lineRenderer1.points = [new Engine.Math.Vector2(xMin, yMax - unit * value.r), new Engine.Math.Vector2(xMin + unit / 2, yMax - unit * value.g), new Engine.Math.Vector2(xMin + unit, yMax - unit * value.b)];

	            this.lineRenderer2.points = this.lineRenderer1.points;
	        }
	    }]);

	    return FloorTile;
	}(Game.Actors.ColorTile);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * The tile that appears in the queue
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	Game.Actors.QueueTile = function (_Game$Actors$ColorTil) {
	    _inherits(QueueTile, _Game$Actors$ColorTil);

	    function QueueTile() {
	        _classCallCheck(this, QueueTile);

	        return _possibleConstructorReturn(this, (QueueTile.__proto__ || Object.getPrototypeOf(QueueTile)).apply(this, arguments));
	    }

	    _createClass(QueueTile, [{
	        key: 'defaults',

	        /**
	         * Defaults
	         */
	        value: function defaults() {
	            _get(QueueTile.prototype.__proto__ || Object.getPrototypeOf(QueueTile.prototype), 'defaults', this).call(this);

	            this.addComponent('SpriteRenderer', {
	                width: UNIT,
	                height: UNIT,
	                tint: new Engine.Math.Color(1, 1, 1)
	            });
	        }

	        /**
	         * Getter: Colour
	         */

	    }, {
	        key: 'setTransparent',


	        /**
	         * Sets transparent
	         *
	         * @param {Boolean} isTransparent
	         */
	        value: function setTransparent(isTransparent) {}

	        /**
	         * Event: Picked
	         *
	         * @param {PlayerGrid} playerGrid
	         * @param {Number} tileIndex
	         */

	    }, {
	        key: 'onPicked',
	        value: function onPicked(playerGrid, tileIndex) {
	            var queueColor = this.color;

	            // Get the current tile
	            var currentTile = playerGrid.children[tileIndex];

	            if (typeof currentTile.isCorrect !== 'undefined') {
	                return;
	            }

	            // Add the new colour to the old colour
	            var oldColor = currentTile.color;
	            var newColor = Engine.Math.Color.add(oldColor, queueColor);

	            // Apply the mixed colour
	            currentTile.pushColor(newColor);
	        }
	    }, {
	        key: 'color',
	        get: function get() {
	            return this.spriteRenderer.tint;
	        }

	        /**
	         * Setter: Colour
	         */
	        ,
	        set: function set(value) {
	            this.spriteRenderer.tint = value;

	            if (value.r > 0) {
	                this.spriteRenderer.setTexture('./Content/Textures/T_Mushroom_Red_D.png');
	            } else if (value.g > 0) {
	                this.spriteRenderer.setTexture('./Content/Textures/T_Mushroom_Green_D.png');
	            } else if (value.b > 0) {
	                this.spriteRenderer.setTexture('./Content/Textures/T_Mushroom_Blue_D.png');
	            }
	        }
	    }]);

	    return QueueTile;
	}(Game.Actors.ColorTile);

/***/ })
/******/ ]);