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
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);

	__webpack_require__(34);

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
/* 22 */,
/* 23 */,
/* 24 */
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
/* 25 */
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

	Game.Actors.GridTile = function (_Game$Actors$ColorTil) {
	    _inherits(GridTile, _Game$Actors$ColorTil);

	    /**
	     * Constructor
	     */
	    function GridTile(config) {
	        _classCallCheck(this, GridTile);

	        var _this = _possibleConstructorReturn(this, (GridTile.__proto__ || Object.getPrototypeOf(GridTile)).call(this, config));

	        _this.colorHistory = [_this.color];
	        return _this;
	    }

	    /**
	     * Defaults
	     */


	    _createClass(GridTile, [{
	        key: 'defaults',
	        value: function defaults() {
	            _get(GridTile.prototype.__proto__ || Object.getPrototypeOf(GridTile.prototype), 'defaults', this).call(this);

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
	                points: [],
	                isEnabled: false
	            });

	            this.lineRenderer1 = this.addComponent('GeometryRenderer', {
	                type: 'line',
	                strokeColor: new Engine.Math.Color(1, 1, 1),
	                strokeWidth: UNIT / 20,
	                points: [],
	                isEnabled: false
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
	         * @param {Color} newColor
	         */

	    }, {
	        key: 'pushColor',
	        value: function pushColor(newColor) {
	            this.colorHistory.push(newColor);

	            this.color = Engine.Math.Color.add(this.color, newColor);
	        }

	        /**
	         * Pop/undo color
	         *
	         * @returns {Color} Color from queue
	         */

	    }, {
	        key: 'popColor',
	        value: function popColor() {
	            if (this.colorHistory.length < 2) {
	                return;
	            }

	            var prevColor = this.colorHistory.pop();

	            this.color = Engine.Math.Color.subtract(this.color, prevColor);

	            return prevColor;
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

	    return GridTile;
	}(Game.Actors.ColorTile);

/***/ }),
/* 26 */
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
	                height: UNIT
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
	        value: function setTransparent(isTransparent) {
	            this.spriteRenderer.alpha = isTransparent ? 0.5 : 1;
	        }
	    }, {
	        key: 'color',
	        get: function get() {
	            return this._color;
	        }

	        /**
	         * Setter: Colour
	         */
	        ,
	        set: function set(value) {
	            value = value || new Engine.Math.Color(0, 0, 0);

	            this._color = value;

	            if (value.r === 1) {
	                this.spriteRenderer.texture = './Content/Textures/T_MushroomDouble_Red_D.png';
	            } else if (value.r === 0.5) {
	                this.spriteRenderer.texture = './Content/Textures/T_Mushroom_Red_D.png';
	            } else if (value.g === 1) {
	                this.spriteRenderer.texture = './Content/Textures/T_MushroomDouble_Green_D.png';
	            } else if (value.g === 0.5) {
	                this.spriteRenderer.texture = './Content/Textures/T_Mushroom_Green_D.png';
	            } else if (value.b === 1) {
	                this.spriteRenderer.texture = './Content/Textures/T_MushroomDouble_Blue_D.png';
	            } else if (value.b === 0.5) {
	                this.spriteRenderer.texture = './Content/Textures/T_Mushroom_Blue_D.png';
	            }
	        }
	    }]);

	    return QueueTile;
	}(Game.Actors.ColorTile);

/***/ }),
/* 27 */
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
	                    currentTile.popColor();
	                    break;

	            }
	        }
	    }]);

	    return PowerupTile;
	}(Game.Actors.ColorTile);

/***/ }),
/* 28 */
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

	        _this.transform.position.x = Engine.Graphics.screenWidth / 2 - UNIT * 3;
	        _this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 2;

	        _this.addComponent('GeometryRenderer', {
	            type: 'rectangle',
	            pivot: new Engine.Math.Vector2(0, 0.5),
	            fillColor: new Engine.Math.Color(0.3, 0.3, 0.3),
	            height: UNIT,
	            width: UNIT * 6
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
	            this.isLooping = true;
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

	                this.children[i].transform.position.x = (i + 0.5) * UNIT;
	                this.children[i].transform.position.y = 0;
	            }
	        }

	        /**
	         * Gets the next colour
	         *
	         * @returns {Color} The next colour
	         */

	    }, {
	        key: 'getNextColor',
	        value: function getNextColor() {
	            // If a queue was specified, pick the next colour from that queue
	            if (this.colors) {
	                this.currentQueueColorIndex = this.currentQueueColorIndex || 0;

	                var color = this.colors[this.currentQueueColorIndex];

	                // Loop colours if specified
	                if (this.currentQueueColorIndex >= this.colors.length) {
	                    if (this.isLooping) {
	                        this.currentQueueColorIndex = 0;
	                    } else {
	                        return null;
	                    }
	                } else {
	                    this.currentQueueColorIndex++;
	                }

	                return color;

	                // If not, get a random colour
	            } else {
	                // Get random color
	                var randomColors = [new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(0, 0, 1)];

	                var randomColorIndex = Math.floor(Math.random() * randomColors.length);

	                // Make sure it isn't too random by comparing to previous occurrences
	                for (var i = 0; i < 3; i++) {
	                    if (this.randomAmounts[i] < this.randomAmounts[randomColorIndex]) {
	                        randomColorIndex = i;
	                        break;
	                    }
	                }

	                this.randomAmounts[randomColorIndex]++;

	                return randomColors[randomColorIndex];
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

	            var tile = new Game.Actors.QueueTile({ color: this.getNextColor() });

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
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * A fire into which mushrooms can be discarded
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FIRE_READY_TIMEOUT = 2;

	var Fire = function (_Engine$Actors$Actor) {
	    _inherits(Fire, _Engine$Actors$Actor);

	    /**
	     * Constructor
	     */
	    function Fire(config) {
	        _classCallCheck(this, Fire);

	        var _this = _possibleConstructorReturn(this, (Fire.__proto__ || Object.getPrototypeOf(Fire)).call(this, config));

	        _this.spriteAnimator.play('burning', true);
	        return _this;
	    }

	    /**
	     * Defaults
	     */


	    _createClass(Fire, [{
	        key: 'defaults',
	        value: function defaults() {
	            _get(Fire.prototype.__proto__ || Object.getPrototypeOf(Fire.prototype), 'defaults', this).call(this);

	            this.addComponent('SpriteRenderer', {
	                texture: './Content/Textures/T_Fire_D.png',
	                width: UNIT,
	                height: UNIT
	            });

	            this.addComponent('Collider', {
	                width: UNIT,
	                height: UNIT,
	                offset: new Engine.Math.Vector2(0.5, 0.5)
	            });

	            this.addComponent('SpriteAnimator', {
	                framesPerSecond: 12,
	                animations: {
	                    'burning': [new Engine.Math.Rect(0, 0, 256, 256), new Engine.Math.Rect(256, 0, 256, 256), new Engine.Math.Rect(512, 0, 256, 256), new Engine.Math.Rect(768, 0, 256, 256), new Engine.Math.Rect(0, 256, 256, 256), new Engine.Math.Rect(256, 256, 256, 256), new Engine.Math.Rect(512, 256, 256, 256), new Engine.Math.Rect(768, 256, 256, 256)]
	                }
	            });

	            this.transform.position.y = Engine.Graphics.screenHeight - UNIT;
	            this.transform.position.x = Engine.Graphics.screenWidth / 2;
	        }

	        /**
	         * Burns a tile
	         *
	         * @param {Tile} tile
	         */

	    }, {
	        key: 'burn',
	        value: function burn(tile) {
	            var _this2 = this;

	            if (!tile || !this.isReady) {
	                return;
	            }

	            tile.destroy();

	            this.isReady = false;

	            Engine.Stage.scene.usedMoves++;

	            setTimeout(function () {
	                _this2.isReady = true;
	            }, FIRE_READY_TIMEOUT * 1000);
	        }

	        /**
	         * Gets ready state
	         *
	         * @returns {Boolean} Is ready
	         */

	    }, {
	        key: 'isReady',
	        get: function get() {
	            return this.spriteRenderer.alpha === 1;
	        }

	        /**
	         * Sets ready state
	         *
	         * @returns {Boolean} Is ready
	         */
	        ,
	        set: function set(isReady) {
	            this.spriteRenderer.alpha = isReady ? 1 : 0.25;
	        }
	    }]);

	    return Fire;
	}(Engine.Actors.Actor);

	Game.Actors.Fire = Fire;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * The UI helper class
	 */

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UI = function UI() {
	  _classCallCheck(this, UI);
	};

	Game.UI = UI;

/***/ }),
/* 32 */
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

	        // Build tiles
	        var _this = _possibleConstructorReturn(this, (TargetGrid.__proto__ || Object.getPrototypeOf(TargetGrid)).call(this, config));

	        for (var y = 0; y < _this.size; y++) {
	            for (var x = 0; x < _this.size; x++) {
	                // Start with a random colour
	                var color = Engine.Math.Color.getRandom(0.5, Engine.Math.Color.RULE.NO_GREYSCALE);

	                // If a preset colour exists, use that instead
	                if (_this.colors && _this.colors[y] && _this.colors[y][x]) {
	                    color = _this.colors[y][x];
	                }

	                var tile = new Game.Actors.GridTile({
	                    color: color
	                });

	                tile.transform.position.x = UNIT * x - UNIT;
	                tile.transform.position.y = UNIT * y - UNIT;

	                _this.addChild(tile);
	            }
	        }

	        // Place grid
	        _this.transform.position.x = Engine.Graphics.screenWidth / 2;
	        _this.transform.position.y = UNIT * 2.75;
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
/* 33 */
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
	                _this.initTile(x, y);
	            }
	        }

	        // Place grid
	        _this.transform.position.x = Engine.Graphics.screenWidth / 2;
	        _this.transform.position.y = Engine.Graphics.screenHeight - UNIT * 6.25;

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
	     * Init a tile
	     *
	     * @param {Number} x
	     * @param {Number} y
	     */


	    _createClass(PlayerGrid, [{
	        key: 'initTile',
	        value: function initTile(x, y) {
	            var _this2 = this;

	            var tile = new Game.Actors.GridTile();

	            tile.transform.position.x = UNIT * 2 * (x - 1);
	            tile.transform.position.y = UNIT * 2 * (y - 1);

	            tile.geometryRenderer.width = UNIT * 2;
	            tile.geometryRenderer.height = UNIT * 2;

	            tile.collider.width = UNIT * 2;
	            tile.collider.height = UNIT * 2;

	            tile.color = new Engine.Math.Color(0, 0, 0);

	            // Set input events on tile
	            tile.on('pointerdown', function (e) {
	                if (tile.isCorrect) {
	                    return;
	                }

	                var lastColor = tile.popColor();

	                if (!lastColor) {
	                    return;
	                }

	                _this2.draggingTile = new Game.Actors.QueueTile({
	                    color: lastColor
	                });

	                tile.addChild(_this2.draggingTile);

	                _this2.updateTiles();
	            });

	            this.addChild(tile);
	        }

	        /**
	         * Event: A tile is being dragged
	         *
	         * @param {InputEvent} e
	         * @param {ColorTile} queueTile
	         */

	    }, {
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
	                this.children[i].setHighlight(!this.children[i].isCorrect && // If it's not already correct
	                queueTile.color.r + this.children[i].color.r <= 1 && // Red is within bounds
	                queueTile.color.g + this.children[i].color.g <= 1 && // Green is within bounds
	                queueTile.color.b + this.children[i].color.b <= 1 && // Blue is within bounds
	                this.children[i].collider.getBounds().contains(x, y) // If the pointer is within the bounds
	                );
	            }

	            // Check if tile is hovering the fire
	            queueTile.setTransparent(Engine.Stage.getActor(Game.Actors.Fire).collider.getBounds().contains(x, y));
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

	            // Get touch position
	            if (e.changedTouches && e.changedTouches.length > 0) {
	                x = e.changedTouches[0].pageX;
	                y = e.changedTouches[0].pageY;
	            }

	            // Check if tile is hovering the fire
	            var fire = Engine.Stage.getActor(Game.Actors.Fire);

	            if (fire.collider.getBounds().contains(x, y)) {
	                fire.burn(this.draggingTile);

	                // If not...
	            } else {
	                // Find a hovered tile
	                var foundHovered = false;
	                for (var i = 0; i < this.children.length; i++) {
	                    if (!this.children[i].isCorrect && // If it's not already correct
	                    queueTile.color.r + this.children[i].color.r <= 1 && // Red is within bounds
	                    queueTile.color.g + this.children[i].color.g <= 1 && // Green is within bounds
	                    queueTile.color.b + this.children[i].color.b <= 1 && // Blue is within bounds
	                    this.children[i].collider.getBounds().contains(x, y) // If the pointer is within the bounds

	                    ) {
	                            this.onDropTile(this.draggingTile, i);
	                            Engine.Stage.scene.usedMoves++;
	                            foundHovered = true;
	                        }
	                }

	                // If no hovered tile, find a parent (meaning it's being dragged away from a tile)
	                if (!foundHovered) {
	                    for (var _i = 0; _i < this.children.length; _i++) {
	                        if (this.children[_i] == this.draggingTile.parent) {
	                            this.onDropTile(this.draggingTile, _i);
	                        }
	                    }
	                }
	            }

	            this.draggingTile.setTransparent(false);

	            this.draggingTile = null;

	            var queue = Engine.Stage.getActor(Game.Actors.Queue);

	            if (queue) {
	                queue.updateTiles();
	            }

	            this.updateTiles();
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
	            var currentTile = this.children[tileIndex];

	            // Apply the queue colour
	            currentTile.pushColor(queueTile.color);

	            currentTile.setHighlight(false);

	            // Update tiles
	            this.updateTiles();

	            // Check if won
	            this.checkIfWon();

	            // Remove queue tile
	            queueTile.destroy();
	        }

	        /**
	         * Updates all tiles
	         */

	    }, {
	        key: 'updateTiles',
	        value: function updateTiles() {
	            var targetGrid = Engine.Stage.getActor(Game.Actors.TargetGrid);

	            for (var tileIndex in this.children) {
	                var targetTile = targetGrid.children[tileIndex];
	                var currentTile = this.children[tileIndex];
	                var isCorrect = currentTile.color.equals(targetTile.color);

	                var isIncorrect = currentTile.color.r > targetTile.color.r || currentTile.color.g > targetTile.color.g || currentTile.color.b > targetTile.color.b;

	                if (isIncorrect) {
	                    currentTile.setCorrect(false);
	                } else if (isCorrect) {
	                    currentTile.setCorrect(true);
	                } else {
	                    currentTile.setCorrect(undefined);
	                }
	            }
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
	                Engine.Stage.scene.showEndLevelScreen();
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Engine.Settings.Game.title = 'Fungi Party';

	// Init everything
	Engine.Core.on('init', function () {
	   // A standard unit for the game
	   window.UNIT = Engine.Graphics.screenHeight / 14;

	   // Init scenes
	   __webpack_require__(35);
	   Engine.Stage.addScene(Game.Scenes.Scene1);

	   __webpack_require__(36);
	   Engine.Stage.addScene(Game.Scenes.Scene2);

	   __webpack_require__(37);
	   Engine.Stage.addScene(Game.Scenes.Scene3);

	   __webpack_require__(38);
	   Engine.Stage.addScene(Game.Scenes.Scene4);

	   __webpack_require__(39);
	   Engine.Stage.addScene(Game.Scenes.Scene5);

	   // Load first scene
	   Engine.Stage.loadScene('Scene1');
	});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * The tutorial level
	 */

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
	        key: 'showEndLevelScreen',

	        /**
	         * Shows the end level screen
	         */
	        value: function showEndLevelScreen() {
	            Engine.Stage.clearActors();
	            Engine.UI.clearWidgets();

	            new Engine.UI.Label({
	                text: 'Level 1 completed with ' + Engine.Stage.scene.usedMoves + ' moves',
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
	                onClick: function onClick() {
	                    Engine.Stage.loadNextScene();
	                }
	            });
	        }

	        /**
	         * Starts the tutorial step 1
	         */

	    }, {
	        key: 'startTutorial1',
	        value: function startTutorial1() {
	            var _this2 = this;

	            var label1 = new Engine.UI.Label({
	                text: 'Drag and drop the glowing mushrooms to the floor tile to add color, mix color so it matches with the guide',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 2,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var image1 = new Engine.UI.Image({
	                width: UNIT * 7,
	                height: UNIT * 7,
	                source: './Content/Textures/T_Tutorial1_D.png',
	                x: Engine.Graphics.screenWidth / 2,
	                y: Engine.Graphics.screenHeight / 2
	            });

	            var button = new Engine.UI.Button({
	                text: 'Next',
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 12,
	                textSize: UNIT * 0.6,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                height: UNIT,
	                onClick: function onClick() {
	                    _this2.startTutorial2();
	                }
	            });
	        }

	        /**
	         * Starts tutorial step 2
	         */

	    }, {
	        key: 'startTutorial2',
	        value: function startTutorial2() {
	            var _this3 = this;

	            // Remove previous UI widgets
	            Engine.UI.clearWidgets();

	            var label1 = new Engine.UI.Label({
	                text: 'Drag mushrooms from the tray to the fire to discard, hold and drag to remove a mushroom from the floor tile  ',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 2,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var image1 = new Engine.UI.Image({
	                width: UNIT * 7,
	                height: UNIT * 7,
	                source: './Content/Textures/T_Tutorial2_D.png',
	                x: Engine.Graphics.screenWidth / 2,
	                y: Engine.Graphics.screenHeight / 2
	            });

	            var button = new Engine.UI.Button({
	                text: 'Next',
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 12,
	                textSize: UNIT * 0.6,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                height: UNIT,
	                onClick: function onClick() {
	                    _this3.startTutorial3();
	                }
	            });
	        }

	        /**
	        * Starts tutorial step 3
	        */

	    }, {
	        key: 'startTutorial3',
	        value: function startTutorial3() {
	            var _this4 = this;

	            // Remove previous UI widgets
	            Engine.UI.clearWidgets();

	            var label1 = new Engine.UI.Label({
	                text: 'The "Color guide mode" helps to get you familiar to RGB color mixing, it is also a color blind mode',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 2,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var image1 = new Engine.UI.Image({
	                width: UNIT * 7,
	                height: UNIT * 7,
	                source: './Content/Textures/T_Tutorial3_D.png',
	                x: Engine.Graphics.screenWidth / 2,
	                y: Engine.Graphics.screenHeight / 2
	            });

	            var button = new Engine.UI.Button({
	                text: 'Start',
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 12,
	                textSize: UNIT * 0.6,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                height: UNIT,
	                onClick: function onClick() {
	                    _this4.startLevel();
	                }
	            });
	        }

	        /**
	         * Start level
	         */

	    }, {
	        key: 'startLevel',
	        value: function startLevel() {
	            var _this5 = this;

	            this.usedMoves = 0;

	            // Remove previous UI widgets
	            Engine.UI.clearWidgets();

	            // By default, set colour guides to "ON"
	            setTimeout(function () {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var gridTile = _step.value;

	                        gridTile.lineRenderer1.isEnabled = true;
	                        gridTile.lineRenderer2.isEnabled = true;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }, 10);

	            // Retry level
	            var retryButton = new Engine.UI.Button({
	                text: '↺ RETRY',
	                width: UNIT * 2,
	                height: UNIT,
	                x: UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    Engine.Stage.reloadCurrentScene();
	                }
	            });

	            // Skip level
	            var skipButton = new Engine.UI.Button({
	                text: 'SKIP ↷',
	                width: UNIT * 2,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth - UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    _this5.showEndLevelScreen();
	                }
	            });

	            // Toggle colour guides
	            var colorBlindButton = new Engine.UI.Button({
	                text: 'Guides: ✓',
	                width: UNIT * 2.5,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT / 2,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                textSize: UNIT / 3,
	                onClick: function onClick() {
	                    var isOn = colorBlindButton.text.indexOf('✓') < 0;

	                    colorBlindButton.text = 'Guides: ' + (isOn ? '✓' : '✕');

	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var gridTile = _step2.value;

	                            gridTile.lineRenderer1.isEnabled = isOn;
	                            gridTile.lineRenderer2.isEnabled = isOn;
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	            });

	            var background = new Engine.Actors.Actor();
	            var backgroundSprite = background.addComponent('SpriteRenderer', {
	                offset: new Engine.Math.Vector2(0, 0),
	                width: Engine.Graphics.screenWidth,
	                height: Engine.Graphics.screenHeight,
	                useTiling: true
	            });

	            backgroundSprite.texture = './Content/Textures/T_ForestFloor_D.png';

	            var targetGrid = new Game.Actors.TargetGrid({
	                size: 3,
	                colors: [[new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0, 0.5, 0)], [new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0, 1)], [new Engine.Math.Color(0.5, 0.5, 0), new Engine.Math.Color(0.5, 0, 0.5), new Engine.Math.Color(0, 0.5, 0.5)]]
	            });

	            var playerGrid = new Game.Actors.PlayerGrid({ size: 3 });

	            var queue = new Game.Actors.Queue({
	                isLooping: true,
	                colors: [new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5)]
	            });

	            var fire = new Game.Actors.Fire();
	        }

	        /**
	         * Start
	         */

	    }, {
	        key: 'start',
	        value: function start() {
	            this.startTutorial1();
	        }
	    }]);

	    return Scene1;
	}(Engine.Scene);

	Game.Scenes.Scene1 = Scene1;

/***/ }),
/* 36 */
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
	        key: 'showEndLevelScreen',


	        /**
	         * Shows the end level screen
	         */
	        value: function showEndLevelScreen() {
	            Engine.Stage.clearActors();
	            Engine.UI.clearWidgets();

	            new Engine.UI.Label({
	                text: 'Level 2 completed with ' + Engine.Stage.scene.usedMoves + ' moves',
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
	                onClick: function onClick() {
	                    Engine.Stage.loadNextScene();
	                }
	            });
	        }

	        /**
	         * Starts the tutorial step 1
	         */

	    }, {
	        key: 'startTutorial1',
	        value: function startTutorial1() {
	            var _this2 = this;

	            var label1 = new Engine.UI.Label({
	                text: 'Level 2',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 2,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var label2 = new Engine.UI.Label({
	                text: 'Mix up those mushrooms! Turn on the guides if you need help.',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 4,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var button = new Engine.UI.Button({
	                text: 'Next',
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 12,
	                textSize: UNIT * 0.6,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                height: UNIT,
	                onClick: function onClick() {
	                    _this2.startLevel();
	                }
	            });
	        }

	        /**
	         * Init
	         */

	    }, {
	        key: 'startLevel',
	        value: function startLevel() {
	            var _this3 = this;

	            this.usedMoves = 0;

	            // Remove previous UI widgets
	            Engine.UI.clearWidgets();

	            // Retry level
	            var retryButton = new Engine.UI.Button({
	                text: '↺ RETRY',
	                width: UNIT * 2,
	                height: UNIT,
	                x: UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    Engine.Stage.reloadCurrentScene();
	                }
	            });

	            // Skip level
	            var skipButton = new Engine.UI.Button({
	                text: 'SKIP ↷',
	                width: UNIT * 2,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth - UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    _this3.showEndLevelScreen();
	                }
	            });

	            // Toggle colour guides
	            var colorBlindButton = new Engine.UI.Button({
	                text: 'Guides: ✕',
	                width: UNIT * 2.5,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT / 2,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                textSize: UNIT / 3,
	                onClick: function onClick() {
	                    var isOn = colorBlindButton.text.indexOf('✓') < 0;

	                    colorBlindButton.text = 'Guides: ' + (isOn ? '✓' : '✕');

	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;

	                    try {
	                        for (var _iterator = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var gridTile = _step.value;

	                            gridTile.lineRenderer1.isEnabled = isOn;
	                            gridTile.lineRenderer2.isEnabled = isOn;
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	                }
	            });

	            var background = new Engine.Actors.Actor();
	            var backgroundSprite = background.addComponent('SpriteRenderer', {
	                offset: new Engine.Math.Vector2(0, 0),
	                width: Engine.Graphics.screenWidth,
	                height: Engine.Graphics.screenHeight,
	                useTiling: true
	            });

	            backgroundSprite.texture = './Content/Textures/T_ForestFloor_D.png';

	            var targetGrid = new Game.Actors.TargetGrid();
	            var playerGrid = new Game.Actors.PlayerGrid();

	            var queue = new Game.Actors.Queue({
	                isLooping: true,
	                colors: [new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0)]
	            });

	            var fire = new Game.Actors.Fire();
	        }

	        /**
	        * Start
	        */

	    }, {
	        key: 'start',
	        value: function start() {
	            this.startTutorial1();
	        }
	    }]);

	    return Scene2;
	}(Engine.Scene);

	Game.Scenes.Scene2 = Scene2;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Level 3 with double mushrooms
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scene3 = function (_Engine$Scene) {
	    _inherits(Scene3, _Engine$Scene);

	    function Scene3() {
	        _classCallCheck(this, Scene3);

	        return _possibleConstructorReturn(this, (Scene3.__proto__ || Object.getPrototypeOf(Scene3)).apply(this, arguments));
	    }

	    _createClass(Scene3, [{
	        key: 'showEndLevelScreen',

	        /**
	         * Shows the end level screen
	         */
	        value: function showEndLevelScreen() {
	            Engine.Stage.clearActors();
	            Engine.UI.clearWidgets();

	            new Engine.UI.Label({
	                text: 'Level 3 completed with ' + Engine.Stage.scene.usedMoves + ' moves',
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
	                onClick: function onClick() {
	                    Engine.Stage.loadNextScene();
	                }
	            });
	        }

	        /**
	         * Starts the tutorial step 1
	         */

	    }, {
	        key: 'startTutorial1',
	        value: function startTutorial1() {
	            var _this2 = this;

	            var label1 = new Engine.UI.Label({
	                text: 'Level 3',
	                textSize: UNIT * 0.4,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 2,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var label2 = new Engine.UI.Label({
	                text: 'Double mushrooms are twice as strong as the single one, use them wisely.',
	                textSize: UNIT * 0.4,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 4,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            /** let image1 = new Engine.UI.Image({
	                width: UNIT * 7,
	                height: UNIT * 7,
	                source: './Content/Textures/T_Tutorial1_D.png',
	                x: Engine.Graphics.screenWidth / 2,
	                y: Engine.Graphics.screenHeight /2
	            });
	            */

	            var button = new Engine.UI.Button({
	                text: 'Start',
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 12,
	                textSize: UNIT * 0.6,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                height: UNIT,
	                onClick: function onClick() {
	                    _this2.startLevel();
	                }
	            });
	        }

	        /**
	         * Start level
	         */

	    }, {
	        key: 'startLevel',
	        value: function startLevel() {
	            var _this3 = this;

	            this.usedMoves = 0;

	            // Remove previous UI widgets
	            Engine.UI.clearWidgets();

	            // By default, set colour guides to "OFF"
	            setTimeout(function () {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var gridTile = _step.value;

	                        gridTile.lineRenderer1.isEnabled = false;
	                        gridTile.lineRenderer2.isEnabled = false;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }, 10);

	            // Retry level
	            var retryButton = new Engine.UI.Button({
	                text: '↺ RETRY',
	                width: UNIT * 2,
	                height: UNIT,
	                x: UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    Engine.Stage.reloadCurrentScene();
	                }
	            });

	            // Skip level
	            var skipButton = new Engine.UI.Button({
	                text: 'SKIP ↷',
	                width: UNIT * 2,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth - UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    _this3.showEndLevelScreen();
	                }
	            });

	            // Toggle colour guides
	            var colorBlindButton = new Engine.UI.Button({
	                text: 'Guides: ✕',
	                width: UNIT * 2.5,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT / 2,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                textSize: UNIT / 3,
	                onClick: function onClick() {
	                    var isOn = colorBlindButton.text.indexOf('✓') < 0;

	                    colorBlindButton.text = 'Guides: ' + (isOn ? '✓' : '✕');

	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var gridTile = _step2.value;

	                            gridTile.lineRenderer1.isEnabled = isOn;
	                            gridTile.lineRenderer2.isEnabled = isOn;
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	            });

	            var background = new Engine.Actors.Actor();
	            var backgroundSprite = background.addComponent('SpriteRenderer', {
	                offset: new Engine.Math.Vector2(0, 0),
	                width: Engine.Graphics.screenWidth,
	                height: Engine.Graphics.screenHeight,
	                useTiling: true
	            });

	            backgroundSprite.texture = './Content/Textures/T_ForestFloor_D.png';

	            var targetGrid = new Game.Actors.TargetGrid();

	            var playerGrid = new Game.Actors.PlayerGrid({ size: 3 });

	            var queue = new Game.Actors.Queue({
	                isLooping: true,
	                colors: [new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0)]
	            });

	            var fire = new Game.Actors.Fire();
	        }

	        /**
	         * Start
	         */

	    }, {
	        key: 'start',
	        value: function start() {
	            this.startTutorial1();
	        }
	    }]);

	    return Scene3;
	}(Engine.Scene);

	Game.Scenes.Scene3 = Scene3;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * The tutorial level
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scene4 = function (_Engine$Scene) {
	    _inherits(Scene4, _Engine$Scene);

	    function Scene4() {
	        _classCallCheck(this, Scene4);

	        return _possibleConstructorReturn(this, (Scene4.__proto__ || Object.getPrototypeOf(Scene4)).apply(this, arguments));
	    }

	    _createClass(Scene4, [{
	        key: 'showEndLevelScreen',

	        /**
	         * Shows the end level screen
	         */
	        value: function showEndLevelScreen() {
	            Engine.Stage.clearActors();
	            Engine.UI.clearWidgets();

	            new Engine.UI.Label({
	                text: 'Level 4 completed with ' + Engine.Stage.scene.usedMoves + ' moves',
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
	                onClick: function onClick() {
	                    Engine.Stage.loadNextScene();
	                }
	            });
	        }

	        /**
	         * Starts the tutorial step 1
	         */

	    }, {
	        key: 'startTutorial1',
	        value: function startTutorial1() {
	            var _this2 = this;

	            var label1 = new Engine.UI.Label({
	                text: 'Level 4',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 2,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var label2 = new Engine.UI.Label({
	                text: 'In this level, there will be limited amount of mushrooms to discourage food waste',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 4,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var button = new Engine.UI.Button({
	                text: 'Next',
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 12,
	                textSize: UNIT * 0.6,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                height: UNIT,
	                onClick: function onClick() {
	                    _this2.startLevel();
	                }
	            });
	        }

	        /**
	         * Start level
	         */

	    }, {
	        key: 'startLevel',
	        value: function startLevel() {
	            var _this3 = this;

	            this.usedMoves = 0;

	            // Remove previous UI widgets
	            Engine.UI.clearWidgets();

	            // By default, set colour guides to "OFF"
	            setTimeout(function () {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var gridTile = _step.value;

	                        gridTile.lineRenderer1.isEnabled = false;
	                        gridTile.lineRenderer2.isEnabled = false;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }, 10);

	            // Retry level
	            var retryButton = new Engine.UI.Button({
	                text: '↺ RETRY',
	                width: UNIT * 2,
	                height: UNIT,
	                x: UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    Engine.Stage.reloadCurrentScene();
	                }
	            });

	            // Skip level
	            var skipButton = new Engine.UI.Button({
	                text: 'SKIP ↷',
	                width: UNIT * 2,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth - UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    _this3.showEndLevelScreen();
	                }
	            });

	            // Toggle colour guides
	            var colorBlindButton = new Engine.UI.Button({
	                text: 'Guides: ✕',
	                width: UNIT * 2.5,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT / 2,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                textSize: UNIT / 3,
	                onClick: function onClick() {
	                    var isOn = colorBlindButton.text.indexOf('✓') < 0;

	                    colorBlindButton.text = 'Guides: ' + (isOn ? '✓' : '✕');

	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var gridTile = _step2.value;

	                            gridTile.lineRenderer1.isEnabled = isOn;
	                            gridTile.lineRenderer2.isEnabled = isOn;
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	            });

	            var background = new Engine.Actors.Actor();
	            var backgroundSprite = background.addComponent('SpriteRenderer', {
	                offset: new Engine.Math.Vector2(0, 0),
	                width: Engine.Graphics.screenWidth,
	                height: Engine.Graphics.screenHeight,
	                useTiling: true
	            });

	            backgroundSprite.texture = './Content/Textures/T_ForestFloor_D.png';

	            var targetGrid = new Game.Actors.TargetGrid({
	                size: 3,
	                colors: [[new Engine.Math.Color(1, 0, 1), new Engine.Math.Color(0.5, 0, 1), new Engine.Math.Color(0, 1, 0.5)], [new Engine.Math.Color(0.5, 1, 0), new Engine.Math.Color(0, 0.5, 1), new Engine.Math.Color(0, 1, 1)], [new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(1, 1, 0)]]
	            });

	            var playerGrid = new Game.Actors.PlayerGrid({ size: 3 });

	            var queue = new Game.Actors.Queue({
	                isLooping: false,
	                colors: [new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0.5, 0, 0)]
	            });

	            var fire = new Game.Actors.Fire();
	        }

	        /**
	         * Start
	         */

	    }, {
	        key: 'start',
	        value: function start() {
	            this.startTutorial1();
	        }
	    }]);

	    return Scene4;
	}(Engine.Scene);

	Game.Scenes.Scene4 = Scene4;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * The tutorial level
	 */

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scene5 = function (_Engine$Scene) {
	    _inherits(Scene5, _Engine$Scene);

	    function Scene5() {
	        _classCallCheck(this, Scene5);

	        return _possibleConstructorReturn(this, (Scene5.__proto__ || Object.getPrototypeOf(Scene5)).apply(this, arguments));
	    }

	    _createClass(Scene5, [{
	        key: 'showEndLevelScreen',

	        /**
	         * Shows the end level screen
	         */
	        value: function showEndLevelScreen() {
	            Engine.Stage.clearActors();
	            Engine.UI.clearWidgets();

	            new Engine.UI.Label({
	                text: Engine.Stage.scene.usedMoves <= 20 ? 'Game completed! You used ' + Engine.Stage.scene.usedMoves + ' moves' : 'Failed. You used ' + Engine.Stage.scene.usedMoves + ' moves',
	                textAlignX: 'center',
	                textAlignY: 'center',
	                textSize: UNIT / 2,
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 4,
	                width: Engine.Graphics.screenWidth,
	                height: UNIT
	            });

	            new Engine.UI.Button({
	                text: 'Retry →',
	                width: UNIT * 2,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth / 2,
	                y: Engine.Graphics.screenHeight - UNIT * 4,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    Engine.Stage.reloadCurrentScene();
	                }

	            });
	        }

	        /**
	         * Starts the tutorial step 1
	         */

	    }, {
	        key: 'startTutorial1',
	        value: function startTutorial1() {
	            var _this2 = this;

	            var label1 = new Engine.UI.Label({
	                text: 'Level 5',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 2,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var label2 = new Engine.UI.Label({
	                text: 'Challenge level! Try to use less than 20 moves',
	                textSize: UNIT * 0.4,
	                //textAlignX: 'end',
	                textColor: new Engine.Math.Color(1, 1, 1),
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 4,
	                width: Engine.Graphics.screenWidth * 0.7
	            });

	            var button = new Engine.UI.Button({
	                text: 'Next',
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT * 12,
	                textSize: UNIT * 0.6,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                width: UNIT * 4,
	                height: UNIT,
	                onClick: function onClick() {
	                    _this2.startLevel();
	                }
	            });
	        }

	        /**
	         * Start level
	         */

	    }, {
	        key: 'startLevel',
	        value: function startLevel() {
	            var _this3 = this;

	            this.usedMoves = 0;

	            // Remove previous UI widgets
	            Engine.UI.clearWidgets();

	            // By default, set colour guides to "OFF"
	            setTimeout(function () {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var gridTile = _step.value;

	                        gridTile.lineRenderer1.isEnabled = false;
	                        gridTile.lineRenderer2.isEnabled = false;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }, 10);

	            // Retry level
	            var retryButton = new Engine.UI.Button({
	                text: '↺ RETRY',
	                width: UNIT * 2,
	                height: UNIT,
	                x: UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    Engine.Stage.reloadCurrentScene();
	                }
	            });

	            // Skip level
	            var skipButton = new Engine.UI.Button({
	                text: 'SKIP ↷',
	                width: UNIT * 2,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth - UNIT,
	                y: UNIT / 2,
	                textSize: UNIT / 3,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                onClick: function onClick() {
	                    _this3.showEndLevelScreen();
	                }
	            });

	            // Toggle colour guides
	            var colorBlindButton = new Engine.UI.Button({
	                text: 'Guides: ✕',
	                width: UNIT * 2.5,
	                height: UNIT,
	                x: Engine.Graphics.screenWidth / 2,
	                y: UNIT / 2,
	                textColor: new Engine.Math.Color(1, 1, 1),
	                fillColor: new Engine.Math.Color(0, 0, 0),
	                textSize: UNIT / 3,
	                onClick: function onClick() {
	                    var isOn = colorBlindButton.text.indexOf('✓') < 0;

	                    colorBlindButton.text = 'Guides: ' + (isOn ? '✓' : '✕');

	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        for (var _iterator2 = Engine.Stage.getActors(Game.Actors.GridTile)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var gridTile = _step2.value;

	                            gridTile.lineRenderer1.isEnabled = isOn;
	                            gridTile.lineRenderer2.isEnabled = isOn;
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	            });

	            var background = new Engine.Actors.Actor();
	            var backgroundSprite = background.addComponent('SpriteRenderer', {
	                offset: new Engine.Math.Vector2(0, 0),
	                width: Engine.Graphics.screenWidth,
	                height: Engine.Graphics.screenHeight,
	                useTiling: true
	            });

	            backgroundSprite.texture = './Content/Textures/T_ForestFloor_D.png';

	            var targetGrid = new Game.Actors.TargetGrid({
	                size: 3,
	                colors: [[new Engine.Math.Color(0.5, 0, 0.5), new Engine.Math.Color(0.5, 1, 0), new Engine.Math.Color(0, 0.5, 0.5)], [new Engine.Math.Color(1, 1, 0), new Engine.Math.Color(0, 0.5, 1), new Engine.Math.Color(0, 1, 1)], [new Engine.Math.Color(1, 0, 1), new Engine.Math.Color(1, 0.5, 0), new Engine.Math.Color(0, 1, 0)]]
	            });

	            var playerGrid = new Game.Actors.PlayerGrid({ size: 3 });

	            var queue = new Game.Actors.Queue({
	                isLooping: true,
	                colors: [new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0, 0.5, 0), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(0, 0, 1), new Engine.Math.Color(0, 0, 0.5), new Engine.Math.Color(0, 1, 0), new Engine.Math.Color(1, 0, 0), new Engine.Math.Color(0.5, 0, 0), new Engine.Math.Color(0, 0.5, 0)]
	            });

	            var fire = new Game.Actors.Fire();
	        }

	        /**
	         * Start
	         */

	    }, {
	        key: 'start',
	        value: function start() {
	            this.startTutorial1();
	        }
	    }]);

	    return Scene5;
	}(Engine.Scene);

	Game.Scenes.Scene5 = Scene5;

/***/ })
/******/ ]);