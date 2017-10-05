webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
module.exports = __webpack_require__(10).Object.keys;


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(68);
var $keys = __webpack_require__(44);

__webpack_require__(76)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(144);
module.exports = __webpack_require__(10).Object.values;


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(24);
var $values = __webpack_require__(145)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(44);
var toIObject = __webpack_require__(32);
var isEnum = __webpack_require__(59).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(147);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
var $Object = __webpack_require__(10).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(32);
var $getOwnPropertyDescriptor = __webpack_require__(82).f;

__webpack_require__(76)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Types = {
	RESIZE_WINDOW: 'RESIZE_WINDOW',
	MOVE_MOUSE: 'MOVE_MOUSE',
	UPDATE_CAMERA_POSITION: 'UPDATE_CAMERA_POSITION',
	LOADING: 'LOADING',
	LOADED: 'LOADED',
	UPDATE_TIME: 'UPDATE_TIME',
	RESET_TIME: 'RESET_TIME',
	CLICK_MESH: 'CLICK_MESH'
};
exports.default = Types;

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(48);

var _typeof3 = _interopRequireDefault(_typeof2);

__webpack_require__(69);

var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

var _reactThreeRenderer = __webpack_require__(26);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _reactDom = __webpack_require__(72);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(29);

var _reactRedux = __webpack_require__(35);

var _reducers = __webpack_require__(518);

var _reducers2 = _interopRequireDefault(_reducers);

var _ImageContainer = __webpack_require__(527);

var _ImageContainer2 = _interopRequireDefault(_ImageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
	return f;
}));

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(_ImageContainer2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(29);

var _load = __webpack_require__(519);

var _load2 = _interopRequireDefault(_load);

var _windowSize = __webpack_require__(520);

var _windowSize2 = _interopRequireDefault(_windowSize);

var _camera = __webpack_require__(521);

var _camera2 = _interopRequireDefault(_camera);

var _time = __webpack_require__(522);

var _time2 = _interopRequireDefault(_time);

var _mouse = __webpack_require__(523);

var _mouse2 = _interopRequireDefault(_mouse);

var _pointer = __webpack_require__(524);

var _pointer2 = _interopRequireDefault(_pointer);

var _resolution = __webpack_require__(525);

var _resolution2 = _interopRequireDefault(_resolution);

var _image = __webpack_require__(526);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  load: _load2.default,
  windowSize: _windowSize2.default,
  camera: _camera2.default,
  time: _time2.default,
  mouse: _mouse2.default,
  // pointer,
  resolution: _resolution2.default,
  image: _image2.default
});

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var load = function load() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		loading: true
	};
	var action = arguments[1];


	switch (action.type) {
		case _actiontypes2.default.LOADING:
			return (0, _assign2.default)({}, state, {
				loading: true
			});
		case _actiontypes2.default.LOADED:
			return (0, _assign2.default)({}, state, {
				loading: false
			});
		default:
			return state;
	}
};

exports.default = load;

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var windowSize = function windowSize() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new THREE.Vector2(window.innerWidth, window.innerHeight);
	var action = arguments[1];


	switch (action.type) {
		case _actiontypes2.default.RESIZE_WINDOW:
			return (0, _assign2.default)({}, state, new THREE.Vector2(window.innerWidth, window.innerHeight));
		default:
			return state;
	}
};

exports.default = windowSize;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var camera = function camera() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		position: new THREE.Vector3(0, 0, 3.8)
	};
	var action = arguments[1];


	switch (action.type) {
		default:
			return state;
	}
};

exports.default = camera;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = function time() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		elapsed: 0.0,
		duration: 1.5
	};
	var action = arguments[1];


	switch (action.type) {
		case _actiontypes2.default.UPDATE_TIME:
			return (0, _assign2.default)({}, state, {
				elapsed: state.elapsed + 0.01,
				duration: state.duration
			});
		case _actiontypes2.default.RESET_TIME:
			return (0, _assign2.default)({}, state, {
				elapsed: state.elapsed * 0.0,
				duration: state.duration
			});
		default:
			return state;
	}
};

exports.default = time;

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouse = function mouse() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		target: new THREE.Vector2(0, 0)
	};
	var action = arguments[1];


	switch (action.type) {
		case _actiontypes2.default.MOVE_MOUSE:
			var rect = action.e.target.getBoundingClientRect();
			var w = (action.e.clientX - rect.left) / action.e.target.width;
			var h = (action.e.target.height - action.e.clientY + rect.top) / action.e.target.height;
			console.log(state.target);
			return (0, _assign2.default)({}, state, {
				target: new THREE.Vector2(w, h)
			});
		default:
			return state;
	}
};

exports.default = mouse;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pointer = function pointer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		position: new THREE.Vector2(0.5, 0.5)
	};
	var action = arguments[1];


	switch (action.type) {
		case _actiontypes2.default.CLICK_MESH:
			var rect = action.e.target.getBoundingClientRect();
			return (0, _assign2.default)({}, state, {
				position: new THREE.Vector2((action.e.clientX - rect.left) / action.e.target.width, (action.e.target.height - action.e.clientY + rect.top) / action.e.target.height)
			});
		default:
			return state;
	}
};

exports.default = pointer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = document.getElementById('content');

var resolution = function resolution() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		width: content.clientWidth,
		height: content.clientHeight
	};
	var action = arguments[1];


	switch (action.type) {

		default:
			return state;
	}
};

exports.default = resolution;

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = function image() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];


	switch (action.type) {
		// case Types.LOADING:
		// 	return Object.assign({}, state, {
		// 		loading: true,
		// 	})
		// case Types.LOADED:
		// 	return Object.assign({}, state, {
		// 		loading: false,
		// 	})
		default:
			return state;
	}
};

exports.default = image;

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(35);

var _Image = __webpack_require__(528);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(532);

var _time = __webpack_require__(533);

var _clickMesh = __webpack_require__(534);

var _moveMouse = __webpack_require__(535);

var _load = __webpack_require__(536);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {

	return {
		loading: state.load.loading,
		width: state.resolution.width,
		height: state.resolution.height,
		windowWidth: state.windowSize.x,
		windowHeight: state.windowSize.y,
		cameraPosition: state.camera.position,
		elapsed: state.time.elapsed,
		duration: state.time.duration,
		// pointerPosition: state.pointer.position,
		mouse: state.mouse.target
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onLoading: function onLoading() {
			console.log('Loading...');
			dispatch((0, _load.loading)());
		},
		onLoaded: function onLoaded() {
			console.log('loaded...');
			dispatch((0, _load.loaded)());
		},
		onResize: function onResize(e) {
			dispatch((0, _resizeWindow.resizeWindow)(e));
		},
		onUpdateTime: function onUpdateTime() {
			dispatch((0, _time.updateTime)());
		},
		onResetTime: function onResetTime() {
			dispatch((0, _time.resetTime)());
		},
		// onClickMesh: (e) => {
		// 	dispatch(clickMesh(e))
		// },
		onMoveMouse: function onMoveMouse(e) {
			dispatch((0, _moveMouse.moveMouse)(e));
		}
	};
};

var ImageContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Image2.default);

exports.default = ImageContainer;

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__(75);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(54);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(55);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(56);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(57);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(21);

var _react2 = _interopRequireDefault(_react);

var _reactThreeRenderer = __webpack_require__(26);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _MouseInput = __webpack_require__(529);

var _MouseInput2 = _interopRequireDefault(_MouseInput);

var _image = __webpack_require__(530);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(531);

var _image4 = _interopRequireDefault(_image3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function (_React$Component) {
	(0, _inherits3.default)(Image, _React$Component);

	function Image(props) {
		var _context;

		(0, _classCallCheck3.default)(this, Image);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call(this, props));

		_this.onLoading = (_context = _this.props).onLoading.bind(_context);
		_this.onLoaded = (_context = _this.props).onLoaded.bind(_context);
		_this.onResize = (_context = _this.props).onResize.bind(_context);
		_this.onUpdateTime = (_context = _this.props).onUpdateTime.bind(_context);
		_this.onMoveMouse = (_context = _this.props).onMoveMouse.bind(_context);
		// this.onResetTime = ::this.props.onResetTime
		// this.onClickMesh = ::this.props.onClickMesh

		_this.textures = {
			"main": {
				url: "../assets/img/waterColor/shoes.jpg"
			},
			"gray": {
				url: "../assets/img/waterColor/noise.png"
			}
		};
		return _this;
	}

	/* LifeCycle */

	(0, _createClass3.default)(Image, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.initialize().then(function () {
				setTimeout(function () {
					_this2.onLoaded();
					_this2.handleMouseMove();
					// this.setMouseInput()
					_this2.handleResize();
				}, 300);
			});
		}
		//
		// componentDidUpdate(newProps) {
		// 	const {
		// 		mouseInput,
		// 	} = this.refs;
		//
		// 	const {
		// 		windowWidth,
		// 		windowHeight,
		// 	} = this.props;
		//
		// 	if (windowWidth !== newProps.windowWidth || windowHeight !== newProps.windowHeight) {
		// 		mouseInput.containerResized();
		// 	}
		// }


		/* custom Function  */

	}, {
		key: 'initialize',
		value: function initialize() {
			var _this3 = this;

			this.onLoading();
			return new _promise2.default(function (resolve, reject) {
				_this3.loadTexture();
				resolve();
			});
		}

		// setMouseInput() {
		// 	const {
		// 		mouseInput,
		// 		container
		// 	} = this.refs;
		//
		// 	if (!mouseInput.isReady()) {
		// 		const {
		// 			scene,
		// 			camera,
		// 		} = this.refs;
		//
		// 		mouseInput.ready(scene, container, camera);
		// 		// mouseInput.restrictIntersections(imageMesh);
		// 		mouseInput.setActive(false);
		// 	}
		// }

	}, {
		key: 'handleResize',
		value: function handleResize() {
			window.addEventListener('resize', this.onResize, false);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove() {
			window.addEventListener('mousemove', this.onMoveMouse, false);
		}

		// handleClick(e) {
		// 	this.onResetTime()
		// 	this.onClickMesh(e)
		// }

	}, {
		key: 'handleAnimate',
		value: function handleAnimate() {
			this.onUpdateTime();
		}
	}, {
		key: 'loadTexture',
		value: function loadTexture() {
			var _this4 = this;

			var loader = new THREE.TextureLoader();
			loader.crossOrigin = '*';

			var _loop = function _loop(name) {
				loader.load(_this4.textures[name].url, function (texture) {
					_this4.textures[name].texture = texture;
				});
			};

			for (var name in this.textures) {
				_loop(name);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    loading = _props.loading,
			    width = _props.width,
			    height = _props.height,
			    cameraPosition = _props.cameraPosition,
			    elapsed = _props.elapsed,
			    duration = _props.duration,
			    mouse = _props.mouse;


			if (loading) return _react2.default.createElement(
				'h2',
				null,
				'Loading...'
			);

			return _react2.default.createElement(
				'div',
				{ ref: 'container' },
				_react2.default.createElement(
					_reactThreeRenderer2.default,
					{
						mainCamera: 'camera',
						width: width,
						height: height,
						onAnimate: this.handleAnimate.bind(this),
						clearColor: 0x000000,
						antialias: true
					},
					_react2.default.createElement(
						'scene',
						{
							ref: 'scene'
							// fog={new THREE.Fog(0x222222, 0.6, 2.8)}
						},
						_react2.default.createElement('perspectiveCamera', {
							ref: 'camera',
							name: 'camera',
							fov: 15,
							aspect: width / height,
							near: 0.01,
							far: 1000,
							position: cameraPosition
						}),
						_react2.default.createElement('hemisphereLight', {
							skyColor: 0xffffbb,
							groundColor: 0x887979,
							intensity: 0.9
						}),
						_react2.default.createElement('directionalLight', {
							color: 0xffffff,
							intensity: 0.8
						}),
						_react2.default.createElement(
							'mesh',
							{
								ref: 'imageMesh'
								// onClick={(e) => this.handleClick(e)}
							},
							_react2.default.createElement('planeGeometry', {
								width: 1,
								height: 1
							}),
							_react2.default.createElement(
								'shaderMaterial',
								{
									vertexShader: _image2.default,
									fragmentShader: _image4.default,
									blending: THREE.NormalBlending
								},
								_react2.default.createElement(
									'uniforms',
									null,
									_react2.default.createElement('uniform', { name: 'colorMap', type: 't', value: this.textures['main'].texture }),
									_react2.default.createElement('uniform', { name: 'heightMap', type: 't', value: this.textures['gray'].texture }),
									_react2.default.createElement('uniform', { name: 'time', type: 'f', value: elapsed }),
									_react2.default.createElement('uniform', { name: 'duration', type: 'f', value: duration }),
									_react2.default.createElement('uniform', { name: 'mouse', type: 'vec2', value: mouse }),
									_react2.default.createElement('uniform', { name: 'resolution', type: 'vec2', value: new THREE.Vector2(width, height) })
								)
							)
						)
					)
				)
			);
		}
	}]);
	return Image;
}(_react2.default.Component);

exports.default = Image;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(138);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(139);

var _keys2 = _interopRequireDefault(_keys);

var _values = __webpack_require__(142);

var _values2 = _interopRequireDefault(_values);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(54);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(55);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(56);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(146);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(57);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactThreeRenderer = __webpack_require__(26);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _ReactUpdates = __webpack_require__(17);

var _ReactUpdates2 = _interopRequireDefault(_ReactUpdates);

var _SyntheticMouseEvent = __webpack_require__(63);

var _SyntheticMouseEvent2 = _interopRequireDefault(_SyntheticMouseEvent);

var _Module2 = __webpack_require__(93);

var _Module3 = _interopRequireDefault(_Module2);

var _ReactPropTypes = __webpack_require__(117);

var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempVector2 = new THREE.Vector2();

var listenerCallbackNames = {
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp'
};

var mouseEvents = ['onMouseEnter', 'onMouseLeave', 'onMouseDown', 'onMouseUp', 'onClick'];

var boolProps = {
  ignorePointerEvents: false
};

var MouseInput = function (_Module) {
  (0, _inherits3.default)(MouseInput, _Module);

  function MouseInput() {
    (0, _classCallCheck3.default)(this, MouseInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MouseInput.__proto__ || (0, _getPrototypeOf2.default)(MouseInput)).call(this));

    _this._onMouseDown = function (callbackName, mouseEvent) {
      _ReactUpdates2.default.batchedUpdates(function () {
        var _this$_intersectAndDi = _this._intersectAndDispatch(callbackName, mouseEvent),
            event = _this$_intersectAndDi.event,
            intersections = _this$_intersectAndDi.intersections;

        if (event.isDefaultPrevented() || event.isPropagationStopped()) {
          _this._intersectionsForClick = null;
        } else {
          _this._intersectionsForClick = intersections;
        }
      });
    };

    _this._onMouseUp = function (callbackName, mouseEvent) {
      _ReactUpdates2.default.batchedUpdates(function () {
        var _this$_intersectAndDi2 = _this._intersectAndDispatch(callbackName, mouseEvent),
            event = _this$_intersectAndDi2.event,
            intersections = _this$_intersectAndDi2.intersections;

        if (!(event.isDefaultPrevented() || event.isPropagationStopped())) {
          if (_this._intersectionsForClick === null) {
            return;
          }

          // intersect current intersections with the intersections for click
          //   call xzibit ASAP we have a good one son
          //     it wasn't that good

          var intersectionUUIDMap = _this._intersectionsForClick.reduce(function (map, intersection) {
            map[intersection.object.uuid] = intersection;

            return map;
          }, {});

          for (var i = 0; i < intersections.length; ++i) {
            if (event.isDefaultPrevented() || event.isPropagationStopped()) {
              return;
            }

            var intersection = intersections[i];

            var object = intersection.object;

            var uuid = object.uuid;

            if (intersectionUUIDMap[uuid]) {
              // oh boy oh boy here we go, we got a clicker

              _reactThreeRenderer2.default.eventDispatcher.dispatchEvent(object, 'onClick', _this._createSyntheticMouseEvent('click', event), intersection);
            }
          }
        }
      });

      _this._intersectionsForClick = null;
    };

    _this._isReady = false;
    _this._active = true;
    _this._restrictIntersections = false;
    _this._objectsToIntersect = null;

    _this._restrictedIntersectionRecursive = false;

    _this._patchedDescriptors = [];
    return _this;
  }

  // noinspection JSUnusedGlobalSymbols


  (0, _createClass3.default)(MouseInput, [{
    key: 'setup',
    value: function setup(react3RendererInstance) {
      var _this2 = this;

      (0, _get3.default)(MouseInput.prototype.__proto__ || (0, _getPrototypeOf2.default)(MouseInput.prototype), 'setup', this).call(this, react3RendererInstance);

      var Object3DDescriptor = react3RendererInstance.threeElementDescriptors.object3D.constructor;

      (0, _values2.default)(react3RendererInstance.threeElementDescriptors).forEach(function (elementDescriptor) {
        if (elementDescriptor instanceof Object3DDescriptor) {
          mouseEvents.forEach(function (eventName) {
            elementDescriptor.hasEvent(eventName);
          });

          (0, _keys2.default)(boolProps).forEach(function (propName) {
            elementDescriptor.hasProp(propName, {
              type: _ReactPropTypes2.default.bool,
              update: function update(threeObject, value, hasProp) {
                if (hasProp) {
                  threeObject.userData[propName] = value;
                } else {
                  threeObject.userData[propName] = boolProps[propName];
                }
              },

              default: boolProps[propName]
            });
          });

          _this2._patchedDescriptors.push(elementDescriptor);
        }
      });
    }
  }, {
    key: 'isReady',
    value: function isReady() {
      return this._isReady;
    }
  }, {
    key: 'setActive',
    value: function setActive(active) {
      this._active = active;
    }
  }, {
    key: 'restrictIntersections',
    value: function restrictIntersections(objects) {
      var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._restrictIntersections = true;
      this._objectsToIntersect = objects;

      this._restrictedIntersectionRecursive = recursive;
    }
  }, {
    key: 'ready',
    value: function ready(scene, container, camera) {
      var _this3 = this;

      this._isReady = true;

      this._scene = scene;
      this._container = container;
      this._camera = camera;

      this._raycaster = new THREE.Raycaster();
      this._mouse = new THREE.Vector2();

      this._onMouseMove = function (event) {
        _this3._mouse.set(event.clientX, event.clientY);

        if (!_this3._active) {
          _this3._updateEnterLeave();
        }
      };

      this._containerRect = this._container.getBoundingClientRect();

      this._hoverObjectMap = {};

      document.addEventListener('mousemove', this._onMouseMove, false);

      this._intersectionsForClick = null;

      this._caughtListenersCleanupFunctions = [];

      (0, _keys2.default)(listenerCallbackNames).forEach(function (eventName) {
        var boundListener = void 0;

        var listenerCallbackName = listenerCallbackNames[eventName];
        switch (eventName) {
          case 'mousedown':
            boundListener = _this3._onMouseDown.bind(_this3, listenerCallbackName);
            break;
          case 'mouseup':
            boundListener = _this3._onMouseUp.bind(_this3, listenerCallbackName);
            break;
          default:
            break;
        }

        if (boundListener) {
          container.addEventListener(eventName, boundListener, true);

          _this3._caughtListenersCleanupFunctions.push(function () {
            container.removeEventListener(eventName, boundListener, true);
          });
        }
      });
    }
  }, {
    key: '_createSyntheticMouseEvent',
    value: function _createSyntheticMouseEvent(eventType, prototype) {
      return _SyntheticMouseEvent2.default.getPooled(null, null, new MouseEvent(eventType, prototype), prototype.target);
    }
  }, {
    key: '_intersectAndDispatch',
    value: function _intersectAndDispatch(callbackName, mouseEvent) {
      var event = _SyntheticMouseEvent2.default.getPooled(null, null, mouseEvent, mouseEvent.target);

      var intersections = this._getIntersections(tempVector2.set(event.clientX, event.clientY));

      _ReactUpdates2.default.batchedUpdates(function () {
        for (var i = 0; i < intersections.length; ++i) {
          var intersection = intersections[i];

          if (event.isDefaultPrevented() || event.isPropagationStopped()) {
            return;
          }

          var object = intersection.object;

          _reactThreeRenderer2.default.eventDispatcher.dispatchEvent(object, callbackName, event, intersection);
        }
      });

      return {
        event: event,
        intersections: intersections
      };
    }
  }, {
    key: '_getIntersections',
    value: function _getIntersections(mouseCoords) {
      var relativeMouseCoords = this._getRelativeMouseCoords(mouseCoords);

      this._raycaster.setFromCamera(relativeMouseCoords, this._camera);

      if (this._restrictIntersections) {
        return this._raycaster.intersectObjects(this._objectsToIntersect, this._restrictedIntersectionRecursive);
      }

      return this._raycaster.intersectObject(this._scene, true);
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     *
     * @param {THREE.Vector2} mouseCoords usually an event's clientX and clientY
     * @returns {THREE.Ray}
     */

  }, {
    key: 'getCameraRay',
    value: function getCameraRay(mouseCoords) {
      var relativeMouseCoords = this._getRelativeMouseCoords(mouseCoords);

      var originalRay = this._raycaster.ray.clone();

      this._raycaster.setFromCamera(relativeMouseCoords, this._camera);

      var resultRay = this._raycaster.ray.clone();

      this._raycaster.ray.copy(originalRay);

      return resultRay;
    }

    // noinspection JSUnusedGlobalSymbols

  }, {
    key: 'intersectObject',
    value: function intersectObject(mouseCoords, object) {
      var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var relativeMouseCoords = this._getRelativeMouseCoords(mouseCoords);

      var originalRay = this._raycaster.ray.clone();

      this._raycaster.setFromCamera(relativeMouseCoords, this._camera);

      var intersections = this._raycaster.intersectObject(object, recursive);

      this._raycaster.ray.copy(originalRay);

      return intersections;
    }
  }, {
    key: 'containerResized',
    value: function containerResized() {
      this._containerRect = this._container.getBoundingClientRect();
    }
  }, {
    key: 'update',
    value: function update() {
      if (!this._isReady) {
        return;
      }

      if (this._active) {
        this._updateEnterLeave();
      }
    }
  }, {
    key: '_updateEnterLeave',
    value: function _updateEnterLeave() {
      var intersections = this._getIntersections(this._mouse);

      var hoverMapToUpdate = (0, _extends3.default)({}, this._hoverObjectMap);

      var mouseEnterEvent = this._createSyntheticMouseEvent('mouseEnter', {
        target: this._container,
        clientX: this._mouse.x,
        clientY: this._mouse.y
      });

      // find first intersection that does not ignore pointer events
      for (var depth = 0; depth < intersections.length; ++depth) {
        var intersection = intersections[depth];
        var object = intersection.object;

        if (object.userData && object.userData.ignorePointerEvents) {
          continue;
        }

        var uuid = object.uuid;

        if (this._hoverObjectMap[uuid]) {
          delete hoverMapToUpdate[uuid];

          // just update that intersection
          this._hoverObjectMap[uuid].intersection = intersection;
        } else {
          this._hoverObjectMap[uuid] = {
            object: object,
            intersection: intersection
          };

          if (!(mouseEnterEvent.isDefaultPrevented() || mouseEnterEvent.isPropagationStopped())) {
            _reactThreeRenderer2.default.eventDispatcher.dispatchEvent(object, 'onMouseEnter', mouseEnterEvent, intersection, depth);
          }
        }

        // we have found the first solid intersection, don't go further
        break;
      }

      var mouseLeaveEvent = this._createSyntheticMouseEvent('mouseLeave', {
        target: this._container,
        clientX: this._mouse.x,
        clientY: this._mouse.y
      });

      // delete all unseen uuids in hover map
      var unseenUUIDs = (0, _keys2.default)(hoverMapToUpdate);

      for (var i = 0; i < unseenUUIDs.length; ++i) {
        var _uuid = unseenUUIDs[i];

        if (!(mouseLeaveEvent.isDefaultPrevented() || mouseLeaveEvent.isPropagationStopped())) {
          _reactThreeRenderer2.default.eventDispatcher.dispatchEvent(this._hoverObjectMap[_uuid].object, 'onMouseLeave', mouseLeaveEvent);
        }

        delete this._hoverObjectMap[_uuid];
      }
    }
  }, {
    key: '_getRelativeMouseCoords',
    value: function _getRelativeMouseCoords(screenMouseCoords) {
      var containerRect = this._containerRect;

      var relativeMouseCoords = screenMouseCoords.clone().sub(tempVector2.set(containerRect.left, containerRect.top)).divide(tempVector2.set(containerRect.width, containerRect.height));

      // mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      // mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      relativeMouseCoords.x = relativeMouseCoords.x * 2 - 1;
      relativeMouseCoords.y = -relativeMouseCoords.y * 2 + 1;

      return relativeMouseCoords;
    }

    // noinspection JSUnusedGlobalSymbols

  }, {
    key: 'dispose',
    value: function dispose() {
      document.removeEventListener('mousemove', this._onMouseMove, false);

      this._caughtListenersCleanupFunctions.forEach(function (cleanupFunction) {
        return cleanupFunction();
      });
      delete this._caughtListenersCleanupFunctions;

      delete this._onMouseMove;

      this._patchedDescriptors.forEach(function (elementDescriptor) {
        var allProps = (0, _keys2.default)(boolProps).concat(mouseEvents);

        allProps.forEach(function (propName) {
          elementDescriptor.removeProp(propName);
        });
      });
    }
  }]);
  return MouseInput;
}(_Module3.default);

exports.default = MouseInput;

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\nattribute vec3 color;\n\nvoid main() {\n  tc = uv;\n  vcolor = vec4(color, 1.0);\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\n\nuniform sampler2D colorMap;\nuniform sampler2D heightMap;\nuniform float time;\n\n\n// 2D Random\nfloat random (in vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))\n                 * 43758.5453123);\n}\n\n// 2D Noise based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    // Smooth Interpolation\n\n    // Cubic Hermine Curve.  Same as SmoothStep()\n    vec2 u = f*f*(3.0-2.0*f);\n    // u = smoothstep(0.,1.,f);\n\n    // Mix 4 coorners porcentages\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\n\nvoid main(){\n\n\tfloat gradientStep = sin(time) * 0.01 * noise(vec2(time)); // default .0015, min -1., max 1.\n\tfloat advectStep = sin(time) * 0.01 * noise(vec2(time)); // default .0015, min -1., max 1.\n\tfloat flipHeightMap = 0.7; // default 0.7, min 0., max 2.\n\tfloat expand = 1.0; // default 0., min 0., max 1.\n\n\n\tvec4 advectMatrix = vec4(0.1);\n\tvec4 cxp = texture2D(heightMap, vec2(tc.x + gradientStep, flipHeightMap*tc.y));\n\tvec4 cxn = texture2D(heightMap, vec2(tc.x - gradientStep, flipHeightMap*tc.y));\n\tvec4 cyp = texture2D(heightMap, vec2(tc.x, flipHeightMap*(tc.y + gradientStep)));\n\tvec4 cyn = texture2D(heightMap, vec2(tc.x, flipHeightMap*(tc.y - gradientStep)));\n\n\tvec3 grey = vec3(.3, .59, .11);\n\tfloat axp = dot(grey, cxp.xyz);\n\tfloat axn = dot(grey, cxn.xyz);\n\tfloat ayp = dot(grey, cyp.xyz);\n\tfloat ayn = dot(grey, cyn.xyz);\n\n\tvec2 grad = vec2(axp - axn, ayp - ayn);\n\tvec2 newtc = tc + advectStep * normalize(advectMatrix.xy * grad) * expand;\n\n\tgl_FragColor.rgb = texture2D(colorMap, newtc).rgb * vcolor.rgb;\n\tgl_FragColor.a = vcolor.a;\n}\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetTime = exports.updateTime = undefined;

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateTime = exports.updateTime = function updateTime() {
	return {
		type: _actiontypes2.default.UPDATE_TIME
	};
};

var resetTime = exports.resetTime = function resetTime() {
	return {
		type: _actiontypes2.default.RESET_TIME
	};
};

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clickMesh = undefined;

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clickMesh = exports.clickMesh = function clickMesh(e) {
	return {
		type: _actiontypes2.default.CLICK_MESH,
		e: e
	};
};

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(23);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loading = exports.loading = function loading() {
	return {
		type: _actiontypes2.default.LOADING
	};
};

var loaded = exports.loaded = function loaded() {
	return {
		type: _actiontypes2.default.LOADED
	};
};

/***/ })

},[517]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvY29uc3RhbnRzL2FjdGlvbnR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL3Jlc29sdXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9jb21wb25lbnRzL0ltYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL2xpYi9Nb3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL2dsc2wvaW1hZ2UudmVydCIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9nbHNsL2ltYWdlLmZyYWciLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvYWN0aW9ucy90aW1lLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL2FjdGlvbnMvY2xpY2tNZXNoLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL2FjdGlvbnMvbW92ZU1vdXNlLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL2FjdGlvbnMvbG9hZC5qcyJdLCJuYW1lcyI6WyJUeXBlcyIsIlJFU0laRV9XSU5ET1ciLCJNT1ZFX01PVVNFIiwiVVBEQVRFX0NBTUVSQV9QT1NJVElPTiIsIkxPQURJTkciLCJMT0FERUQiLCJVUERBVEVfVElNRSIsIlJFU0VUX1RJTUUiLCJDTElDS19NRVNIIiwic3RvcmUiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZCIsIndpbmRvd1NpemUiLCJjYW1lcmEiLCJ0aW1lIiwibW91c2UiLCJyZXNvbHV0aW9uIiwiaW1hZ2UiLCJzdGF0ZSIsImxvYWRpbmciLCJhY3Rpb24iLCJ0eXBlIiwiVEhSRUUiLCJWZWN0b3IyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJWZWN0b3IzIiwiZWxhcHNlZCIsImR1cmF0aW9uIiwidGFyZ2V0IiwicmVjdCIsImUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3IiwiY2xpZW50WCIsImxlZnQiLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJjbGllbnRZIiwidG9wIiwiY29uc29sZSIsImxvZyIsInBvaW50ZXIiLCJjb250ZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ3aW5kb3dXaWR0aCIsIngiLCJ3aW5kb3dIZWlnaHQiLCJ5IiwiY2FtZXJhUG9zaXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uTG9hZGluZyIsIm9uTG9hZGVkIiwib25SZXNpemUiLCJvblVwZGF0ZVRpbWUiLCJvblJlc2V0VGltZSIsIm9uTW92ZU1vdXNlIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsInByb3BzIiwidGV4dHVyZXMiLCJ1cmwiLCJpbml0aWFsaXplIiwidGhlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVSZXNpemUiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZFRleHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImNyb3NzT3JpZ2luIiwibmFtZSIsInRleHR1cmUiLCJoYW5kbGVBbmltYXRlIiwiTm9ybWFsQmxlbmRpbmciLCJDb21wb25lbnQiLCJ0ZW1wVmVjdG9yMiIsImxpc3RlbmVyQ2FsbGJhY2tOYW1lcyIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZUV2ZW50cyIsImJvb2xQcm9wcyIsImlnbm9yZVBvaW50ZXJFdmVudHMiLCJNb3VzZUlucHV0IiwiX29uTW91c2VEb3duIiwiY2FsbGJhY2tOYW1lIiwibW91c2VFdmVudCIsImJhdGNoZWRVcGRhdGVzIiwiX2ludGVyc2VjdEFuZERpc3BhdGNoIiwiZXZlbnQiLCJpbnRlcnNlY3Rpb25zIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJfaW50ZXJzZWN0aW9uc0ZvckNsaWNrIiwiX29uTW91c2VVcCIsImludGVyc2VjdGlvblVVSURNYXAiLCJyZWR1Y2UiLCJtYXAiLCJpbnRlcnNlY3Rpb24iLCJvYmplY3QiLCJ1dWlkIiwiaSIsImxlbmd0aCIsImV2ZW50RGlzcGF0Y2hlciIsImRpc3BhdGNoRXZlbnQiLCJfY3JlYXRlU3ludGhldGljTW91c2VFdmVudCIsIl9pc1JlYWR5IiwiX2FjdGl2ZSIsIl9yZXN0cmljdEludGVyc2VjdGlvbnMiLCJfb2JqZWN0c1RvSW50ZXJzZWN0IiwiX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUiLCJfcGF0Y2hlZERlc2NyaXB0b3JzIiwicmVhY3QzUmVuZGVyZXJJbnN0YW5jZSIsIk9iamVjdDNERGVzY3JpcHRvciIsInRocmVlRWxlbWVudERlc2NyaXB0b3JzIiwib2JqZWN0M0QiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJlbGVtZW50RGVzY3JpcHRvciIsImhhc0V2ZW50IiwiZXZlbnROYW1lIiwiaGFzUHJvcCIsInByb3BOYW1lIiwiYm9vbCIsInVwZGF0ZSIsInRocmVlT2JqZWN0IiwidmFsdWUiLCJ1c2VyRGF0YSIsImRlZmF1bHQiLCJwdXNoIiwiYWN0aXZlIiwib2JqZWN0cyIsInJlY3Vyc2l2ZSIsInNjZW5lIiwiY29udGFpbmVyIiwiX3NjZW5lIiwiX2NvbnRhaW5lciIsIl9jYW1lcmEiLCJfcmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiX21vdXNlIiwiX29uTW91c2VNb3ZlIiwic2V0IiwiX3VwZGF0ZUVudGVyTGVhdmUiLCJfY29udGFpbmVyUmVjdCIsIl9ob3Zlck9iamVjdE1hcCIsIl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zIiwiYm91bmRMaXN0ZW5lciIsImxpc3RlbmVyQ2FsbGJhY2tOYW1lIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudFR5cGUiLCJwcm90b3R5cGUiLCJnZXRQb29sZWQiLCJNb3VzZUV2ZW50IiwiX2dldEludGVyc2VjdGlvbnMiLCJtb3VzZUNvb3JkcyIsInJlbGF0aXZlTW91c2VDb29yZHMiLCJfZ2V0UmVsYXRpdmVNb3VzZUNvb3JkcyIsInNldEZyb21DYW1lcmEiLCJpbnRlcnNlY3RPYmplY3RzIiwiaW50ZXJzZWN0T2JqZWN0Iiwib3JpZ2luYWxSYXkiLCJyYXkiLCJjbG9uZSIsInJlc3VsdFJheSIsImNvcHkiLCJob3Zlck1hcFRvVXBkYXRlIiwibW91c2VFbnRlckV2ZW50IiwiZGVwdGgiLCJtb3VzZUxlYXZlRXZlbnQiLCJ1bnNlZW5VVUlEcyIsInNjcmVlbk1vdXNlQ29vcmRzIiwiY29udGFpbmVyUmVjdCIsInN1YiIsImRpdmlkZSIsImNsZWFudXBGdW5jdGlvbiIsImFsbFByb3BzIiwiY29uY2F0IiwicmVtb3ZlUHJvcCIsInJlc2l6ZVdpbmRvdyIsInVwZGF0ZVRpbWUiLCJyZXNldFRpbWUiLCJjbGlja01lc2giLCJtb3ZlTW91c2UiLCJsb2FkZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7OztBQ3RCQSxrQkFBa0IseUQ7Ozs7Ozs7QUNBbEI7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ1JELGtCQUFrQix5RDs7Ozs7OztBQ0FsQjtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDUkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O0FDZkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNyQ0Esa0JBQWtCLHlEOzs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7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QUFPO0FBQy9CLFFBQU87QUFDTlgsUUFBTSxzQkFBTWxCLFVBRE47QUFFTjZCLEtBQUdBO0FBRkcsRUFBUDtBQUlBLENBTE0sQzs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVPLElBQU1nSyxnQ0FBWSxTQUFaQSxTQUFZLENBQUNoSyxDQUFELEVBQU87QUFDL0IsUUFBTztBQUNOWCxRQUFNLHNCQUFNeEIsVUFETjtBQUVObUMsS0FBR0E7QUFGRyxFQUFQO0FBSUEsQ0FMTSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7Ozs7O0FBRU8sSUFBTWIsNEJBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQzVCLFFBQU87QUFDTkUsUUFBTSxzQkFBTXRCO0FBRE4sRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTWtNLDBCQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUMzQixRQUFPO0FBQ041SyxRQUFNLHNCQUFNckI7QUFETixFQUFQO0FBR0EsQ0FKTSxDIiwiZmlsZSI6ImFzc2V0cy9qcy9wYWdlcy93YXRlckNvbG9yLmUwMzYxNzhjN2VhNWM5MmIzNTdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnZhbHVlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgVHlwZXMgPSB7XG5cdFJFU0laRV9XSU5ET1c6ICdSRVNJWkVfV0lORE9XJyxcblx0TU9WRV9NT1VTRTogJ01PVkVfTU9VU0UnLFxuXHRVUERBVEVfQ0FNRVJBX1BPU0lUSU9OOiAnVVBEQVRFX0NBTUVSQV9QT1NJVElPTicsXG5cdExPQURJTkc6ICdMT0FESU5HJyxcblx0TE9BREVEOiAnTE9BREVEJyxcblx0VVBEQVRFX1RJTUU6ICdVUERBVEVfVElNRScsXG5cdFJFU0VUX1RJTUU6ICdSRVNFVF9USU1FJyxcblx0Q0xJQ0tfTUVTSDogJ0NMSUNLX01FU0gnLFxufVxuZXhwb3J0IGRlZmF1bHQgVHlwZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsImltcG9ydCAnLi4vLi4vc3R5bHVzL3N0eWxlLnN0eWwnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXInXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGNvbXBvc2UoXG5cdHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gIT09ICd1bmRlZmluZWQnID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbikpO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8SW1hZ2VDb250YWluZXIvPlxuXHQ8L1Byb3ZpZGVyPlxuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQnXG5pbXBvcnQgd2luZG93U2l6ZSBmcm9tICcuL3dpbmRvd1NpemUnXG5pbXBvcnQgY2FtZXJhIGZyb20gJy4vY2FtZXJhJ1xuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJ1xuaW1wb3J0IG1vdXNlIGZyb20gJy4vbW91c2UnXG5pbXBvcnQgcG9pbnRlciBmcm9tICcuL3BvaW50ZXInXG5pbXBvcnQgcmVzb2x1dGlvbiBmcm9tICcuL3Jlc29sdXRpb24nXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbG9hZCxcbiAgd2luZG93U2l6ZSxcbiAgY2FtZXJhLFxuICB0aW1lLFxuICBtb3VzZSxcbiAgLy8gcG9pbnRlcixcbiAgcmVzb2x1dGlvbixcbiAgaW1hZ2UsXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBsb2FkID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRsb2FkaW5nOiB0cnVlXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuTE9BRElORzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0fSlcblx0XHRjYXNlIFR5cGVzLkxPQURFRDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvbG9hZC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHdpbmRvd1NpemUgPSAoXG5cdHN0YXRlID0gbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuUkVTSVpFX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSxcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0XHRcdClcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTaXplXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy93aW5kb3dTaXplLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgY2FtZXJhID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMy44KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FtZXJhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9jYW1lcmEuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCB0aW1lID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRlbGFwc2VkOiAwLjAsXG5cdFx0ZHVyYXRpb246IDEuNSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5VUERBVEVfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICsgMC4wMSxcblx0XHRcdFx0ZHVyYXRpb246IHN0YXRlLmR1cmF0aW9uLFxuXHRcdFx0fSlcblx0XHRjYXNlIFR5cGVzLlJFU0VUX1RJTUU6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0ZWxhcHNlZDogc3RhdGUuZWxhcHNlZCAqIDAuMCxcblx0XHRcdFx0ZHVyYXRpb246IHN0YXRlLmR1cmF0aW9uLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgbW91c2UgPSAoXG5cdHN0YXRlID0ge1xuXHRcdHRhcmdldDogbmV3IFRIUkVFLlZlY3RvcjIoMCwgMCksXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuTU9WRV9NT1VTRTpcblx0XHRcdGxldCByZWN0ID0gYWN0aW9uLmUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0bGV0IHcgPSAoYWN0aW9uLmUuY2xpZW50WCAtIHJlY3QubGVmdCkgLyBhY3Rpb24uZS50YXJnZXQud2lkdGg7XG5cdFx0XHRsZXQgaCA9IChhY3Rpb24uZS50YXJnZXQuaGVpZ2h0IC0gYWN0aW9uLmUuY2xpZW50WSArIHJlY3QudG9wKSAvIGFjdGlvbi5lLnRhcmdldC5oZWlnaHQ7XG5cdFx0XHRjb25zb2xlLmxvZyhzdGF0ZS50YXJnZXQpXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0dGFyZ2V0OiBuZXcgVEhSRUUuVmVjdG9yMihcblx0XHRcdFx0XHR3LFxuXHRcdFx0XHRcdGhcblx0XHRcdFx0KSxcblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbW91c2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL21vdXNlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgcG9pbnRlciA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMC41KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5DTElDS19NRVNIOlxuXHRcdFx0bGV0IHJlY3QgPSBhY3Rpb24uZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdChhY3Rpb24uZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGFjdGlvbi5lLnRhcmdldC53aWR0aCxcblx0XHRcdFx0XHQoYWN0aW9uLmUudGFyZ2V0LmhlaWdodCAtIGFjdGlvbi5lLmNsaWVudFkgKyByZWN0LnRvcCkgLyBhY3Rpb24uZS50YXJnZXQuaGVpZ2h0LFxuXHRcdFx0XHQpLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwb2ludGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9wb2ludGVyLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbmNvbnN0IHJlc29sdXRpb24gPSAoXG5cdHN0YXRlID0ge1xuXHRcdHdpZHRoOiBjb250ZW50LmNsaWVudFdpZHRoLFxuXHRcdGhlaWdodDogY29udGVudC5jbGllbnRIZWlnaHQsXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x1dGlvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvcmVzb2x1dGlvbi5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGltYWdlID0gKFxuXHRzdGF0ZSA9IHtcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Ly8gY2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdC8vIFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0Ly8gXHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0Ly8gXHR9KVxuXHRcdC8vIGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdC8vIFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0Ly8gXHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdC8vIFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL2ltYWdlLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXG5cbmltcG9ydCB7cmVzaXplV2luZG93fSBmcm9tICcuLi9hY3Rpb25zL3Jlc2l6ZVdpbmRvdydcbmltcG9ydCB7dXBkYXRlVGltZSwgcmVzZXRUaW1lfSBmcm9tICcuLi9hY3Rpb25zL3RpbWUnXG5pbXBvcnQge2NsaWNrTWVzaH0gZnJvbSAnLi4vYWN0aW9ucy9jbGlja01lc2gnXG5pbXBvcnQge21vdmVNb3VzZX0gZnJvbSAnLi4vYWN0aW9ucy9tb3ZlTW91c2UnXG5pbXBvcnQge2xvYWRpbmcsIGxvYWRlZH0gZnJvbSAnLi4vYWN0aW9ucy9sb2FkJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuXHRyZXR1cm4ge1xuXHRcdGxvYWRpbmc6IHN0YXRlLmxvYWQubG9hZGluZyxcblx0XHR3aWR0aDogc3RhdGUucmVzb2x1dGlvbi53aWR0aCxcblx0XHRoZWlnaHQ6IHN0YXRlLnJlc29sdXRpb24uaGVpZ2h0LFxuXHRcdHdpbmRvd1dpZHRoOiBzdGF0ZS53aW5kb3dTaXplLngsXG5cdFx0d2luZG93SGVpZ2h0OiBzdGF0ZS53aW5kb3dTaXplLnksXG5cdFx0Y2FtZXJhUG9zaXRpb246IHN0YXRlLmNhbWVyYS5wb3NpdGlvbixcblx0XHRlbGFwc2VkOiBzdGF0ZS50aW1lLmVsYXBzZWQsXG5cdFx0ZHVyYXRpb246IHN0YXRlLnRpbWUuZHVyYXRpb24sXG5cdFx0Ly8gcG9pbnRlclBvc2l0aW9uOiBzdGF0ZS5wb2ludGVyLnBvc2l0aW9uLFxuXHRcdG1vdXNlOiBzdGF0ZS5tb3VzZS50YXJnZXQsXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0b25Mb2FkaW5nOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnTG9hZGluZy4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkaW5nKCkpXG5cdFx0fSxcblx0XHRvbkxvYWRlZDogKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2xvYWRlZC4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkZWQoKSlcblx0XHR9LFxuXHRcdG9uUmVzaXplOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzaXplV2luZG93KGUpKVxuXHRcdH0sXG5cdFx0b25VcGRhdGVUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVUaW1lKCkpXG5cdFx0fSxcblx0XHRvblJlc2V0VGltZTogKCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzZXRUaW1lKCkpXG5cdFx0fSxcblx0XHQvLyBvbkNsaWNrTWVzaDogKGUpID0+IHtcblx0XHQvLyBcdGRpc3BhdGNoKGNsaWNrTWVzaChlKSlcblx0XHQvLyB9LFxuXHRcdG9uTW92ZU1vdXNlOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gobW92ZU1vdXNlKGUpKVxuXHRcdH0sXG5cdH1cbn1cblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbWFnZSlcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJ1xuXG5pbXBvcnQgTW91c2VJbnB1dCBmcm9tICcuLi9saWIvTW91c2VJbnB1dCdcblxuaW1wb3J0IHZzIGZyb20gJy4uL2dsc2wvaW1hZ2UudmVydCdcbmltcG9ydCBmcyBmcm9tICcuLi9nbHNsL2ltYWdlLmZyYWcnXG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5vbkxvYWRpbmcgPSA6OnRoaXMucHJvcHMub25Mb2FkaW5nXG5cdFx0dGhpcy5vbkxvYWRlZCA9IDo6dGhpcy5wcm9wcy5vbkxvYWRlZFxuXHRcdHRoaXMub25SZXNpemUgPSA6OnRoaXMucHJvcHMub25SZXNpemVcblx0XHR0aGlzLm9uVXBkYXRlVGltZSA9IDo6dGhpcy5wcm9wcy5vblVwZGF0ZVRpbWVcblx0XHR0aGlzLm9uTW92ZU1vdXNlID0gOjp0aGlzLnByb3BzLm9uTW92ZU1vdXNlXG5cdFx0Ly8gdGhpcy5vblJlc2V0VGltZSA9IDo6dGhpcy5wcm9wcy5vblJlc2V0VGltZVxuXHRcdC8vIHRoaXMub25DbGlja01lc2ggPSA6OnRoaXMucHJvcHMub25DbGlja01lc2hcblxuXHRcdHRoaXMudGV4dHVyZXMgPSB7XG5cdFx0XHRcIm1haW5cIjoge1xuXHRcdFx0XHR1cmw6IFwiLi4vYXNzZXRzL2ltZy93YXRlckNvbG9yL3Nob2VzLmpwZ1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJncmF5XCI6IHtcblx0XHRcdFx0dXJsOiBcIi4uL2Fzc2V0cy9pbWcvd2F0ZXJDb2xvci9ub2lzZS5wbmdcIlxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIExpZmVDeWNsZSAqL1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdFx0XHR0aGlzLmhhbmRsZU1vdXNlTW92ZSgpXG5cdFx0XHRcdC8vIHRoaXMuc2V0TW91c2VJbnB1dCgpXG5cdFx0XHRcdHRoaXMuaGFuZGxlUmVzaXplKClcblxuXHRcdFx0fSwgMzAwKVxuXHRcdH0pXG5cdH1cblx0Ly9cblx0Ly8gY29tcG9uZW50RGlkVXBkYXRlKG5ld1Byb3BzKSB7XG5cdC8vIFx0Y29uc3Qge1xuXHQvLyBcdFx0bW91c2VJbnB1dCxcblx0Ly8gXHR9ID0gdGhpcy5yZWZzO1xuXHQvL1xuXHQvLyBcdGNvbnN0IHtcblx0Ly8gXHRcdHdpbmRvd1dpZHRoLFxuXHQvLyBcdFx0d2luZG93SGVpZ2h0LFxuXHQvLyBcdH0gPSB0aGlzLnByb3BzO1xuXHQvL1xuXHQvLyBcdGlmICh3aW5kb3dXaWR0aCAhPT0gbmV3UHJvcHMud2luZG93V2lkdGggfHwgd2luZG93SGVpZ2h0ICE9PSBuZXdQcm9wcy53aW5kb3dIZWlnaHQpIHtcblx0Ly8gXHRcdG1vdXNlSW5wdXQuY29udGFpbmVyUmVzaXplZCgpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG5cblx0LyogY3VzdG9tIEZ1bmN0aW9uICAqL1xuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhpcy5vbkxvYWRpbmcoKVxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmxvYWRUZXh0dXJlKClcblx0XHRcdHJlc29sdmUoKVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gc2V0TW91c2VJbnB1dCgpIHtcblx0Ly8gXHRjb25zdCB7XG5cdC8vIFx0XHRtb3VzZUlucHV0LFxuXHQvLyBcdFx0Y29udGFpbmVyXG5cdC8vIFx0fSA9IHRoaXMucmVmcztcblx0Ly9cblx0Ly8gXHRpZiAoIW1vdXNlSW5wdXQuaXNSZWFkeSgpKSB7XG5cdC8vIFx0XHRjb25zdCB7XG5cdC8vIFx0XHRcdHNjZW5lLFxuXHQvLyBcdFx0XHRjYW1lcmEsXG5cdC8vIFx0XHR9ID0gdGhpcy5yZWZzO1xuXHQvL1xuXHQvLyBcdFx0bW91c2VJbnB1dC5yZWFkeShzY2VuZSwgY29udGFpbmVyLCBjYW1lcmEpO1xuXHQvLyBcdFx0Ly8gbW91c2VJbnB1dC5yZXN0cmljdEludGVyc2VjdGlvbnMoaW1hZ2VNZXNoKTtcblx0Ly8gXHRcdG1vdXNlSW5wdXQuc2V0QWN0aXZlKGZhbHNlKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxuXHRoYW5kbGVSZXNpemUoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlKVxuXHR9XG5cblx0aGFuZGxlTW91c2VNb3ZlKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW92ZU1vdXNlLCBmYWxzZSlcblx0XHR9XG5cblx0Ly8gaGFuZGxlQ2xpY2soZSkge1xuXHQvLyBcdHRoaXMub25SZXNldFRpbWUoKVxuXHQvLyBcdHRoaXMub25DbGlja01lc2goZSlcblx0Ly8gfVxuXG5cdGhhbmRsZUFuaW1hdGUoKSB7XG5cdFx0dGhpcy5vblVwZGF0ZVRpbWUoKVxuXHR9XG5cblx0bG9hZFRleHR1cmUoKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKVxuXHRcdGxvYWRlci5jcm9zc09yaWdpbiA9ICcqJ1xuXHRcdGZvciAobGV0IG5hbWUgaW4gdGhpcy50ZXh0dXJlcykge1xuXHRcdFx0bG9hZGVyLmxvYWQodGhpcy50ZXh0dXJlc1tuYW1lXS51cmwsICh0ZXh0dXJlKSA9PiB7XG4gXHRcdFx0dGhpcy50ZXh0dXJlc1tuYW1lXS50ZXh0dXJlID0gdGV4dHVyZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2xvYWRpbmcsIHdpZHRoLCBoZWlnaHQsIGNhbWVyYVBvc2l0aW9uLCBlbGFwc2VkLCBkdXJhdGlvbiwgbW91c2V9ID0gdGhpcy5wcm9wc1xuXG5cdFx0aWYgKGxvYWRpbmcpIHJldHVybig8aDI+TG9hZGluZy4uLjwvaDI+KVxuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiByZWY9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PFJlYWN0M1xuXHRcdFx0XHRcdG1haW5DYW1lcmE9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdHdpZHRoPXt3aWR0aH1cblx0XHRcdFx0XHRoZWlnaHQ9e2hlaWdodH1cblx0XHRcdFx0XHRvbkFuaW1hdGU9ezo6dGhpcy5oYW5kbGVBbmltYXRlfVxuXHRcdFx0XHRcdGNsZWFyQ29sb3I9ezB4MDAwMDAwfVxuXHRcdFx0XHRcdGFudGlhbGlhcz17dHJ1ZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsvKiA8bW9kdWxlXG5cdFx0XHRcdFx0XHRyZWY9XCJtb3VzZUlucHV0XCJcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3I9e01vdXNlSW5wdXR9XG5cdFx0XHRcdFx0Lz4gKi99XG5cdFx0XHRcdFx0PHNjZW5lXG5cdFx0XHRcdFx0XHRyZWY9XCJzY2VuZVwiXG5cdFx0XHRcdFx0XHQvLyBmb2c9e25ldyBUSFJFRS5Gb2coMHgyMjIyMjIsIDAuNiwgMi44KX1cblx0XHRcdFx0XHQ+XG5cblx0XHRcdFx0XHRcdHsvKiBIZWxwZXIgKi99XG5cdFx0XHRcdFx0XHR7LyogPGF4aXNIZWxwZXIgLz4gKi99XG5cblx0XHRcdFx0XHRcdHsvKiBDYW1lcmEgKi99XG5cdFx0XHRcdFx0XHQ8cGVyc3BlY3RpdmVDYW1lcmFcblx0XHRcdFx0XHRcdFx0cmVmPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0XHRcdGZvdj17MTV9XG5cdFx0XHRcdFx0XHRcdGFzcGVjdD17d2lkdGggLyBoZWlnaHR9XG5cdFx0XHRcdFx0XHRcdG5lYXI9ezAuMDF9XG5cdFx0XHRcdFx0XHRcdGZhcj17MTAwMH1cblx0XHRcdFx0XHRcdFx0cG9zaXRpb249e2NhbWVyYVBvc2l0aW9ufVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIExpZ2h0ICovfVxuXHRcdFx0XHRcdFx0PGhlbWlzcGhlcmVMaWdodFxuXHRcdFx0XHRcdFx0XHRza3lDb2xvcj17MHhmZmZmYmJ9XG5cdFx0XHRcdFx0XHRcdGdyb3VuZENvbG9yPXsweDg4Nzk3OX1cblx0XHRcdFx0XHRcdFx0aW50ZW5zaXR5PXswLjl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpcmVjdGlvbmFsTGlnaHRcblx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZmZmZmZmfVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBoZWxwZXIgTWVzaCovfVxuXHRcdFx0XHRcdFx0ey8qIDxtZXNoPlxuXHRcdFx0XHRcdFx0XHRcdDxib3hHZW9tZXRyeVxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxfVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MX1cblx0XHRcdFx0XHRcdFx0XHRkZXB0aD17MX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PG1lc2hCYXNpY01hdGVyaWFsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZWVlZWVlfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9tZXNoPiAqL31cblxuXHRcdFx0XHRcdFx0ey8qIEltYWdlIE1lc2ggKi99XG5cdFx0XHRcdFx0XHQ8bWVzaFxuXHRcdFx0XHRcdFx0XHRyZWY9J2ltYWdlTWVzaCdcblx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxwbGFuZUdlb21ldHJ5XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8c2hhZGVyTWF0ZXJpYWxcblx0XHRcdFx0XHRcdFx0XHR2ZXJ0ZXhTaGFkZXI9e3ZzfVxuXHRcdFx0XHRcdFx0XHRcdGZyYWdtZW50U2hhZGVyPXtmc31cblx0XHRcdFx0XHRcdFx0XHRibGVuZGluZz17VEhSRUUuTm9ybWFsQmxlbmRpbmd9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybXM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnY29sb3JNYXAnfSB0eXBlPXsndCd9IHZhbHVlPXt0aGlzLnRleHR1cmVzWydtYWluJ10udGV4dHVyZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydoZWlnaHRNYXAnfSB0eXBlPXsndCd9IHZhbHVlPXt0aGlzLnRleHR1cmVzWydncmF5J10udGV4dHVyZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eyd0aW1lJ30gdHlwZT17J2YnfSB2YWx1ZT17ZWxhcHNlZH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydkdXJhdGlvbid9IHR5cGU9eydmJ30gdmFsdWU9e2R1cmF0aW9ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J21vdXNlJ30gdHlwZT17J3ZlYzInfSB2YWx1ZT17bW91c2V9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsncmVzb2x1dGlvbid9IHR5cGU9eyd2ZWMyJ30gdmFsdWU9e25ldyBUSFJFRS5WZWN0b3IyKHdpZHRoLCBoZWlnaHQpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvdW5pZm9ybXM+XG5cdFx0XHRcdFx0XHRcdDwvc2hhZGVyTWF0ZXJpYWw+XG5cblx0XHRcdFx0XHRcdDwvbWVzaD5cblxuXHRcdFx0XHRcdDwvc2NlbmU+XG5cdFx0XHRcdDwvUmVhY3QzPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9jb21wb25lbnRzL0ltYWdlLmpzIiwiaW1wb3J0IFJlYWN0MyBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgUmVhY3RVcGRhdGVzIGZyb20gJ3JlYWN0LWRvbS9saWIvUmVhY3RVcGRhdGVzJztcblxuaW1wb3J0IFN5bnRoZXRpY01vdXNlRXZlbnQgZnJvbSAncmVhY3QtZG9tL2xpYi9TeW50aGV0aWNNb3VzZUV2ZW50JztcblxuaW1wb3J0IE1vZHVsZSBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlci9saWIvTW9kdWxlJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdyZWFjdC9saWIvUmVhY3RQcm9wVHlwZXMnO1xuXG5jb25zdCB0ZW1wVmVjdG9yMiA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbmNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tOYW1lcyA9IHtcbiAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbn07XG5cbmNvbnN0IG1vdXNlRXZlbnRzID0gW1xuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZScsXG4gICdvbk1vdXNlRG93bicsXG4gICdvbk1vdXNlVXAnLFxuICAnb25DbGljaycsXG5dO1xuXG5jb25zdCBib29sUHJvcHMgPSB7XG4gIGlnbm9yZVBvaW50ZXJFdmVudHM6IGZhbHNlLFxufTtcblxuY2xhc3MgTW91c2VJbnB1dCBleHRlbmRzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pc1JlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QgPSBudWxsO1xuXG4gICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzID0gW107XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIHNldHVwKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UpIHtcbiAgICBzdXBlci5zZXR1cChyZWFjdDNSZW5kZXJlckluc3RhbmNlKTtcblxuICAgIGNvbnN0IE9iamVjdDNERGVzY3JpcHRvciA9IHJlYWN0M1JlbmRlcmVySW5zdGFuY2UudGhyZWVFbGVtZW50RGVzY3JpcHRvcnMub2JqZWN0M0QuY29uc3RydWN0b3I7XG5cbiAgICBPYmplY3QudmFsdWVzKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UudGhyZWVFbGVtZW50RGVzY3JpcHRvcnMpLmZvckVhY2goZWxlbWVudERlc2NyaXB0b3IgPT4ge1xuICAgICAgaWYgKGVsZW1lbnREZXNjcmlwdG9yIGluc3RhbmNlb2YgT2JqZWN0M0REZXNjcmlwdG9yKSB7XG4gICAgICAgIG1vdXNlRXZlbnRzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5oYXNFdmVudChldmVudE5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhib29sUHJvcHMpLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLmhhc1Byb3AocHJvcE5hbWUsIHtcbiAgICAgICAgICAgIHR5cGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgdXBkYXRlKHRocmVlT2JqZWN0LCB2YWx1ZSwgaGFzUHJvcCkge1xuICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRocmVlT2JqZWN0LnVzZXJEYXRhW3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocmVlT2JqZWN0LnVzZXJEYXRhW3Byb3BOYW1lXSA9IGJvb2xQcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0OiBib29sUHJvcHNbcHJvcE5hbWVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMucHVzaChlbGVtZW50RGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1JlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pc1JlYWR5O1xuICB9XG5cbiAgc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHJlc3RyaWN0SW50ZXJzZWN0aW9ucyhvYmplY3RzLCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyA9IHRydWU7XG4gICAgdGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0ID0gb2JqZWN0cztcblxuICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUgPSByZWN1cnNpdmU7XG4gIH1cblxuICByZWFkeShzY2VuZSwgY29udGFpbmVyLCBjYW1lcmEpIHtcbiAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuX2NhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuX3JheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcbiAgICB0aGlzLl9tb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB0aGlzLl9vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fbW91c2Uuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVFbnRlckxlYXZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2NvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLl9ob3Zlck9iamVjdE1hcCA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUsIGZhbHNlKTtcblxuICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG5cbiAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhsaXN0ZW5lckNhbGxiYWNrTmFtZXMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIGxldCBib3VuZExpc3RlbmVyO1xuXG4gICAgICBjb25zdCBsaXN0ZW5lckNhbGxiYWNrTmFtZSA9IGxpc3RlbmVyQ2FsbGJhY2tOYW1lc1tldmVudE5hbWVdO1xuICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgICBib3VuZExpc3RlbmVyID0gdGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzLCBsaXN0ZW5lckNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgIGJvdW5kTGlzdGVuZXIgPSB0aGlzLl9vbk1vdXNlVXAuYmluZCh0aGlzLCBsaXN0ZW5lckNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChib3VuZExpc3RlbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRMaXN0ZW5lciwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGJvdW5kTGlzdGVuZXIsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9vbk1vdXNlRG93biA9IChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpID0+IHtcbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudCxcbiAgICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICAgIH0gPSB0aGlzLl9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpO1xuXG4gICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gaW50ZXJzZWN0aW9ucztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfb25Nb3VzZVVwID0gKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkgPT4ge1xuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpbnRlcnNlY3Rpb25zLFxuICAgICAgfSA9IHRoaXMuX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCk7XG5cbiAgICAgIGlmICghKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnRlcnNlY3QgY3VycmVudCBpbnRlcnNlY3Rpb25zIHdpdGggdGhlIGludGVyc2VjdGlvbnMgZm9yIGNsaWNrXG4gICAgICAgIC8vICAgY2FsbCB4emliaXQgQVNBUCB3ZSBoYXZlIGEgZ29vZCBvbmUgc29uXG4gICAgICAgIC8vICAgICBpdCB3YXNuJ3QgdGhhdCBnb29kXG5cbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uVVVJRE1hcCA9IHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljay5yZWR1Y2UoKG1hcCwgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgbWFwW2ludGVyc2VjdGlvbi5vYmplY3QudXVpZF0gPSBpbnRlcnNlY3Rpb247XG5cbiAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2ldO1xuXG4gICAgICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgICAgIGNvbnN0IHV1aWQgPSBvYmplY3QudXVpZDtcblxuICAgICAgICAgIGlmIChpbnRlcnNlY3Rpb25VVUlETWFwW3V1aWRdKSB7XG4gICAgICAgICAgICAvLyBvaCBib3kgb2ggYm95IGhlcmUgd2UgZ28sIHdlIGdvdCBhIGNsaWNrZXJcblxuICAgICAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlclxuICAgICAgICAgICAgICAuZGlzcGF0Y2hFdmVudChvYmplY3QsICdvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdjbGljaycsIGV2ZW50KSwgaW50ZXJzZWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG4gIH07XG5cbiAgX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoZXZlbnRUeXBlLCBwcm90b3R5cGUpIHtcbiAgICByZXR1cm4gU3ludGhldGljTW91c2VFdmVudC5nZXRQb29sZWQobnVsbCwgbnVsbCxcbiAgICAgIG5ldyBNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcHJvdG90eXBlKSwgcHJvdG90eXBlLnRhcmdldCk7XG4gIH1cblxuICBfaW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChudWxsLCBudWxsLCBtb3VzZUV2ZW50LCBtb3VzZUV2ZW50LnRhcmdldCk7XG5cbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fZ2V0SW50ZXJzZWN0aW9ucyh0ZW1wVmVjdG9yMi5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSkpO1xuXG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2ldO1xuXG4gICAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQob2JqZWN0LCBjYWxsYmFja05hbWUsIGV2ZW50LCBpbnRlcnNlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50LFxuICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgX2dldEludGVyc2VjdGlvbnMobW91c2VDb29yZHMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgaWYgKHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCxcbiAgICAgICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3QodGhpcy5fc2NlbmUsIHRydWUpO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IyfSBtb3VzZUNvb3JkcyB1c3VhbGx5IGFuIGV2ZW50J3MgY2xpZW50WCBhbmQgY2xpZW50WVxuICAgKiBAcmV0dXJucyB7VEhSRUUuUmF5fVxuICAgKi9cbiAgZ2V0Q2FtZXJhUmF5KG1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgY29uc3QgcmVzdWx0UmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnJheS5jb3B5KG9yaWdpbmFsUmF5KTtcblxuICAgIHJldHVybiByZXN1bHRSYXk7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIGludGVyc2VjdE9iamVjdChtb3VzZUNvb3Jkcywgb2JqZWN0LCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KG9iamVjdCwgcmVjdXJzaXZlKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5yYXkuY29weShvcmlnaW5hbFJheSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuXG4gIGNvbnRhaW5lclJlc2l6ZWQoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzUmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl91cGRhdGVFbnRlckxlYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUVudGVyTGVhdmUoKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX2dldEludGVyc2VjdGlvbnModGhpcy5fbW91c2UpO1xuXG4gICAgY29uc3QgaG92ZXJNYXBUb1VwZGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuX2hvdmVyT2JqZWN0TWFwLFxuICAgIH07XG5cbiAgICBjb25zdCBtb3VzZUVudGVyRXZlbnQgPSB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdtb3VzZUVudGVyJywge1xuICAgICAgdGFyZ2V0OiB0aGlzLl9jb250YWluZXIsXG4gICAgICBjbGllbnRYOiB0aGlzLl9tb3VzZS54LFxuICAgICAgY2xpZW50WTogdGhpcy5fbW91c2UueSxcbiAgICB9KTtcblxuICAgIC8vIGZpbmQgZmlyc3QgaW50ZXJzZWN0aW9uIHRoYXQgZG9lcyBub3QgaWdub3JlIHBvaW50ZXIgZXZlbnRzXG4gICAgZm9yIChsZXQgZGVwdGggPSAwOyBkZXB0aCA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2RlcHRoKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2RlcHRoXTtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgIGlmIChvYmplY3QudXNlckRhdGEgJiYgb2JqZWN0LnVzZXJEYXRhLmlnbm9yZVBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHV1aWQgPSBvYmplY3QudXVpZDtcblxuICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdKSB7XG4gICAgICAgIGRlbGV0ZSBob3Zlck1hcFRvVXBkYXRlW3V1aWRdO1xuXG4gICAgICAgIC8vIGp1c3QgdXBkYXRlIHRoYXQgaW50ZXJzZWN0aW9uXG4gICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdID0ge1xuICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICBpbnRlcnNlY3Rpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCEobW91c2VFbnRlckV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IG1vdXNlRW50ZXJFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChvYmplY3QsICdvbk1vdXNlRW50ZXInLFxuICAgICAgICAgICAgbW91c2VFbnRlckV2ZW50LCBpbnRlcnNlY3Rpb24sIGRlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBoYXZlIGZvdW5kIHRoZSBmaXJzdCBzb2xpZCBpbnRlcnNlY3Rpb24sIGRvbid0IGdvIGZ1cnRoZXJcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdXNlTGVhdmVFdmVudCA9IHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ21vdXNlTGVhdmUnLCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIGNsaWVudFg6IHRoaXMuX21vdXNlLngsXG4gICAgICBjbGllbnRZOiB0aGlzLl9tb3VzZS55LFxuICAgIH0pO1xuXG4gICAgLy8gZGVsZXRlIGFsbCB1bnNlZW4gdXVpZHMgaW4gaG92ZXIgbWFwXG4gICAgY29uc3QgdW5zZWVuVVVJRHMgPSBPYmplY3Qua2V5cyhob3Zlck1hcFRvVXBkYXRlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5zZWVuVVVJRHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHV1aWQgPSB1bnNlZW5VVUlEc1tpXTtcblxuICAgICAgaWYgKCEobW91c2VMZWF2ZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IG1vdXNlTGVhdmVFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQodGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0ub2JqZWN0LFxuICAgICAgICAgICdvbk1vdXNlTGVhdmUnLCBtb3VzZUxlYXZlRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF07XG4gICAgfVxuICB9XG5cbiAgX2dldFJlbGF0aXZlTW91c2VDb29yZHMoc2NyZWVuTW91c2VDb29yZHMpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyUmVjdDtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSBzY3JlZW5Nb3VzZUNvb3Jkcy5jbG9uZSgpXG4gICAgICAuc3ViKHRlbXBWZWN0b3IyLnNldChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKSlcbiAgICAgIC5kaXZpZGUodGVtcFZlY3RvcjIuc2V0KGNvbnRhaW5lclJlY3Qud2lkdGgsIGNvbnRhaW5lclJlY3QuaGVpZ2h0KSk7XG5cbiAgICAvLyBtb3VzZS54ID0gKCBldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGggKSAqIDIgLSAxO1xuICAgIC8vIG1vdXNlLnkgPSAtICggZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCApICogMiArIDE7XG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRzLnggPSByZWxhdGl2ZU1vdXNlQ29vcmRzLnggKiAyIC0gMTtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRzLnkgPSAtcmVsYXRpdmVNb3VzZUNvb3Jkcy55ICogMiArIDE7XG5cbiAgICByZXR1cm4gcmVsYXRpdmVNb3VzZUNvb3JkcztcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgZGlzcG9zZSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucy5mb3JFYWNoKGNsZWFudXBGdW5jdGlvbiA9PiBjbGVhbnVwRnVuY3Rpb24oKSk7XG4gICAgZGVsZXRlIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnM7XG5cbiAgICBkZWxldGUgdGhpcy5fb25Nb3VzZU1vdmU7XG5cbiAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMuZm9yRWFjaChlbGVtZW50RGVzY3JpcHRvciA9PiB7XG4gICAgICBjb25zdCBhbGxQcm9wcyA9IE9iamVjdC5rZXlzKGJvb2xQcm9wcylcbiAgICAgICAgLmNvbmNhdChtb3VzZUV2ZW50cyk7XG5cbiAgICAgIGFsbFByb3BzLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5yZW1vdmVQcm9wKHByb3BOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdXNlSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9saWIvTW91c2VJbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdGM7XFxudmFyeWluZyB2ZWM0IHZjb2xvcjtcXG5hdHRyaWJ1dGUgdmVjMyBjb2xvcjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB0YyA9IHV2O1xcbiAgdmNvbG9yID0gdmVjNChjb2xvciwgMS4wKTtcXG4gIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3dhdGVyQ29sb3IvZ2xzbC9pbWFnZS52ZXJ0XG4vLyBtb2R1bGUgaWQgPSA1MzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB0YztcXG52YXJ5aW5nIHZlYzQgdmNvbG9yO1xcblxcbnVuaWZvcm0gc2FtcGxlcjJEIGNvbG9yTWFwO1xcbnVuaWZvcm0gc2FtcGxlcjJEIGhlaWdodE1hcDtcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxuXFxuXFxuLy8gMkQgUmFuZG9tXFxuZmxvYXQgcmFuZG9tIChpbiB2ZWMyIHN0KSB7XFxuICAgIHJldHVybiBmcmFjdChzaW4oZG90KHN0Lnh5LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICB2ZWMyKDEyLjk4OTgsNzguMjMzKSkpXFxuICAgICAgICAgICAgICAgICAqIDQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG4vLyAyRCBOb2lzZSBiYXNlZCBvbiBNb3JnYW4gTWNHdWlyZSBAbW9yZ2FuM2RcXG4vLyBodHRwczovL3d3dy5zaGFkZXJ0b3kuY29tL3ZpZXcvNGRTM1dkXFxuZmxvYXQgbm9pc2UgKGluIHZlYzIgc3QpIHtcXG4gICAgdmVjMiBpID0gZmxvb3Ioc3QpO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChzdCk7XFxuXFxuICAgIC8vIEZvdXIgY29ybmVycyBpbiAyRCBvZiBhIHRpbGVcXG4gICAgZmxvYXQgYSA9IHJhbmRvbShpKTtcXG4gICAgZmxvYXQgYiA9IHJhbmRvbShpICsgdmVjMigxLjAsIDAuMCkpO1xcbiAgICBmbG9hdCBjID0gcmFuZG9tKGkgKyB2ZWMyKDAuMCwgMS4wKSk7XFxuICAgIGZsb2F0IGQgPSByYW5kb20oaSArIHZlYzIoMS4wLCAxLjApKTtcXG5cXG4gICAgLy8gU21vb3RoIEludGVycG9sYXRpb25cXG5cXG4gICAgLy8gQ3ViaWMgSGVybWluZSBDdXJ2ZS4gIFNhbWUgYXMgU21vb3RoU3RlcCgpXFxuICAgIHZlYzIgdSA9IGYqZiooMy4wLTIuMCpmKTtcXG4gICAgLy8gdSA9IHNtb290aHN0ZXAoMC4sMS4sZik7XFxuXFxuICAgIC8vIE1peCA0IGNvb3JuZXJzIHBvcmNlbnRhZ2VzXFxuICAgIHJldHVybiBtaXgoYSwgYiwgdS54KSArXFxuICAgICAgICAgICAgKGMgLSBhKSogdS55ICogKDEuMCAtIHUueCkgK1xcbiAgICAgICAgICAgIChkIC0gYikgKiB1LnggKiB1Lnk7XFxufVxcblxcblxcbnZvaWQgbWFpbigpe1xcblxcblxcdGZsb2F0IGdyYWRpZW50U3RlcCA9IHNpbih0aW1lKSAqIDAuMDEgKiBub2lzZSh2ZWMyKHRpbWUpKTsgLy8gZGVmYXVsdCAuMDAxNSwgbWluIC0xLiwgbWF4IDEuXFxuXFx0ZmxvYXQgYWR2ZWN0U3RlcCA9IHNpbih0aW1lKSAqIDAuMDEgKiBub2lzZSh2ZWMyKHRpbWUpKTsgLy8gZGVmYXVsdCAuMDAxNSwgbWluIC0xLiwgbWF4IDEuXFxuXFx0ZmxvYXQgZmxpcEhlaWdodE1hcCA9IDAuNzsgLy8gZGVmYXVsdCAwLjcsIG1pbiAwLiwgbWF4IDIuXFxuXFx0ZmxvYXQgZXhwYW5kID0gMS4wOyAvLyBkZWZhdWx0IDAuLCBtaW4gMC4sIG1heCAxLlxcblxcblxcblxcdHZlYzQgYWR2ZWN0TWF0cml4ID0gdmVjNCgwLjEpO1xcblxcdHZlYzQgY3hwID0gdGV4dHVyZTJEKGhlaWdodE1hcCwgdmVjMih0Yy54ICsgZ3JhZGllbnRTdGVwLCBmbGlwSGVpZ2h0TWFwKnRjLnkpKTtcXG5cXHR2ZWM0IGN4biA9IHRleHR1cmUyRChoZWlnaHRNYXAsIHZlYzIodGMueCAtIGdyYWRpZW50U3RlcCwgZmxpcEhlaWdodE1hcCp0Yy55KSk7XFxuXFx0dmVjNCBjeXAgPSB0ZXh0dXJlMkQoaGVpZ2h0TWFwLCB2ZWMyKHRjLngsIGZsaXBIZWlnaHRNYXAqKHRjLnkgKyBncmFkaWVudFN0ZXApKSk7XFxuXFx0dmVjNCBjeW4gPSB0ZXh0dXJlMkQoaGVpZ2h0TWFwLCB2ZWMyKHRjLngsIGZsaXBIZWlnaHRNYXAqKHRjLnkgLSBncmFkaWVudFN0ZXApKSk7XFxuXFxuXFx0dmVjMyBncmV5ID0gdmVjMyguMywgLjU5LCAuMTEpO1xcblxcdGZsb2F0IGF4cCA9IGRvdChncmV5LCBjeHAueHl6KTtcXG5cXHRmbG9hdCBheG4gPSBkb3QoZ3JleSwgY3huLnh5eik7XFxuXFx0ZmxvYXQgYXlwID0gZG90KGdyZXksIGN5cC54eXopO1xcblxcdGZsb2F0IGF5biA9IGRvdChncmV5LCBjeW4ueHl6KTtcXG5cXG5cXHR2ZWMyIGdyYWQgPSB2ZWMyKGF4cCAtIGF4biwgYXlwIC0gYXluKTtcXG5cXHR2ZWMyIG5ld3RjID0gdGMgKyBhZHZlY3RTdGVwICogbm9ybWFsaXplKGFkdmVjdE1hdHJpeC54eSAqIGdyYWQpICogZXhwYW5kO1xcblxcblxcdGdsX0ZyYWdDb2xvci5yZ2IgPSB0ZXh0dXJlMkQoY29sb3JNYXAsIG5ld3RjKS5yZ2IgKiB2Y29sb3IucmdiO1xcblxcdGdsX0ZyYWdDb2xvci5hID0gdmNvbG9yLmE7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvd2F0ZXJDb2xvci9nbHNsL2ltYWdlLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDUzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgcmVzaXplV2luZG93ID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNJWkVfV0lORE9XLFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuVVBEQVRFX1RJTUUsXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0VGltZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNFVF9USU1FLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9hY3Rpb25zL3RpbWUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgY2xpY2tNZXNoID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5DTElDS19NRVNILFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2FjdGlvbnMvY2xpY2tNZXNoLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IG1vdmVNb3VzZSA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTU9WRV9NT1VTRSxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9hY3Rpb25zL21vdmVNb3VzZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURJTkdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVkID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURFRFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9hY3Rpb25zL2xvYWQuanMiXSwic291cmNlUm9vdCI6IiJ9