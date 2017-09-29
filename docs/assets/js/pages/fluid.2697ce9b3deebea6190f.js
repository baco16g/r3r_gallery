webpackJsonp([1],{

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
var $export = __webpack_require__(23);
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

/***/ 30:
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

var _reactThreeRenderer = __webpack_require__(25);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _reactDom = __webpack_require__(72);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(28);

var _reactRedux = __webpack_require__(35);

var _reducers = __webpack_require__(518);

var _reducers2 = _interopRequireDefault(_reducers);

var _ImageContainer = __webpack_require__(525);

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

var _redux = __webpack_require__(28);

var _load = __webpack_require__(519);

var _load2 = _interopRequireDefault(_load);

var _windowSize = __webpack_require__(520);

var _windowSize2 = _interopRequireDefault(_windowSize);

var _camera = __webpack_require__(521);

var _camera2 = _interopRequireDefault(_camera);

var _time = __webpack_require__(522);

var _time2 = _interopRequireDefault(_time);

var _pointer = __webpack_require__(523);

var _pointer2 = _interopRequireDefault(_pointer);

var _image = __webpack_require__(524);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mouse from './mouse'
exports.default = (0, _redux.combineReducers)({
  load: _load2.default,
  windowSize: _windowSize2.default,
  camera: _camera2.default,
  time: _time2.default,
  // mouse,
  pointer: _pointer2.default,
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

var _actiontypes = __webpack_require__(30);

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

var _actiontypes = __webpack_require__(30);

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

var _actiontypes = __webpack_require__(30);

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

var _actiontypes = __webpack_require__(30);

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

var _actiontypes = __webpack_require__(30);

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

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(30);

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

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(35);

var _Image = __webpack_require__(526);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(530);

var _time = __webpack_require__(531);

var _clickMesh = __webpack_require__(532);

var _moveMouse = __webpack_require__(533);

var _load = __webpack_require__(534);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {

	var content = document.getElementById('content');
	return {
		loading: state.load.loading,
		width: content.clientWidth,
		height: content.clientHeight,
		windowWidth: state.windowSize.x,
		windowHeight: state.windowSize.y,
		cameraPosition: state.camera.position,
		elapsed: state.time.elapsed,
		duration: state.time.duration,
		pointerPosition: state.pointer.position
		// mouse: state.mouse.target,
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
		onClickMesh: function onClickMesh(e) {
			dispatch((0, _clickMesh.clickMesh)(e));
		}
		// onMoveMouse: (e) => {
		// 	dispatch(moveMouse(e))
		// },
	};
};

var ImageContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Image2.default);

exports.default = ImageContainer;

/***/ }),

/***/ 526:
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

var _reactThreeRenderer = __webpack_require__(25);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _MouseInput = __webpack_require__(527);

var _MouseInput2 = _interopRequireDefault(_MouseInput);

var _image = __webpack_require__(528);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(529);

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
		// this.onMoveMouse = ::this.props.onMoveMouse
		_this.onResetTime = (_context = _this.props).onResetTime.bind(_context);
		_this.onClickMesh = (_context = _this.props).onClickMesh.bind(_context);

		_this.textures = {
			"main": {
				url: "../assets/img/fluid/tile.jpg"
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
					// this.handleMouseMove()
					_this2.setMouseInput();
					_this2.handleResize();
				}, 300);
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(newProps) {
			var mouseInput = this.refs.mouseInput;
			var _props = this.props,
			    windowWidth = _props.windowWidth,
			    windowHeight = _props.windowHeight;


			if (windowWidth !== newProps.windowWidth || windowHeight !== newProps.windowHeight) {
				mouseInput.containerResized();
			}
		}

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
	}, {
		key: 'setMouseInput',
		value: function setMouseInput() {
			var _refs = this.refs,
			    mouseInput = _refs.mouseInput,
			    container = _refs.container;


			if (!mouseInput.isReady()) {
				var _refs2 = this.refs,
				    scene = _refs2.scene,
				    camera = _refs2.camera;


				mouseInput.ready(scene, container, camera);
				// mouseInput.restrictIntersections(imageMesh);
				mouseInput.setActive(false);
			}
		}
	}, {
		key: 'handleResize',
		value: function handleResize() {
			window.addEventListener('resize', this.onResize, false);
		}

		// handleMouseMove() {
		// 	window.addEventListener('mousemove', this.onMoveMouse, false)
		// 	}

	}, {
		key: 'handleClick',
		value: function handleClick(e) {
			this.onResetTime();
			this.onClickMesh(e);
		}
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
			var _this5 = this;

			var _props2 = this.props,
			    loading = _props2.loading,
			    width = _props2.width,
			    height = _props2.height,
			    cameraPosition = _props2.cameraPosition,
			    elapsed = _props2.elapsed,
			    duration = _props2.duration,
			    pointerPosition = _props2.pointerPosition;


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
					_react2.default.createElement('module', {
						ref: 'mouseInput',
						descriptor: _MouseInput2.default
					}),
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
								ref: 'imageMesh',
								onClick: function onClick(e) {
									return _this5.handleClick(e);
								}
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
									_react2.default.createElement('uniform', { name: 'texture', type: 't', value: this.textures['main'].texture }),
									_react2.default.createElement('uniform', { name: 'time', type: 'f', value: elapsed }),
									_react2.default.createElement('uniform', { name: 'duration', type: 'f', value: duration }),
									_react2.default.createElement('uniform', { name: 'mouse', type: 'vec2', value: pointerPosition })
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

/***/ 527:
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

var _reactThreeRenderer = __webpack_require__(25);

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

/***/ 528:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nuniform sampler2D texture;\nuniform float time;\nuniform float duration;\nuniform vec2 mouse;\n\n#define M_PI 3.1415926535897932384626433832795\n\n\nvoid main() {\n\tvec2 uv = vUv;\n\tvec2 texCoord = uv;\n\tvec2 departure = mouse;\n\tfloat amplitude = 0.7;\n\tfloat waveLengthOffset = 0.1;\n\tfloat speed = 0.8;\n\tfloat elapsed = mod(time * speed, duration);\n\n\tvec2 u = vec2(sin(2.0*M_PI*uv.y), sin(2.0*M_PI*uv.x));\n\n\tvec2 uu = vec2(uv + u * time);\n\n\tvec4 color = texture2D(texture, uu);\n\t// color.rgb = color.rgb + c;\n\n\tgl_FragColor = color;\n}\n"

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(30);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetTime = exports.updateTime = undefined;

var _actiontypes = __webpack_require__(30);

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

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clickMesh = undefined;

var _actiontypes = __webpack_require__(30);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clickMesh = exports.clickMesh = function clickMesh(e) {
	return {
		type: _actiontypes2.default.CLICK_MESH,
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
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(30);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(30);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZsdWlkL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZmx1aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZsdWlkL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9yZWR1Y2Vycy9sb2FkLmpzIiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9yZWR1Y2Vycy93aW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9yZWR1Y2Vycy9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZsdWlkL3JlZHVjZXJzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZsdWlkL3JlZHVjZXJzL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZsdWlkL3JlZHVjZXJzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9jb250YWluZXJzL0ltYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9jb21wb25lbnRzL0ltYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9saWIvTW91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZmx1aWQvZ2xzbC9pbWFnZS52ZXJ0Iiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9nbHNsL2ltYWdlLmZyYWciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZsdWlkL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9hY3Rpb25zL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZsdWlkL2FjdGlvbnMvY2xpY2tNZXNoLmpzIiwid2VicGFjazovLy8uL2FwcC9mbHVpZC9hY3Rpb25zL21vdmVNb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZmx1aWQvYWN0aW9ucy9sb2FkLmpzIl0sIm5hbWVzIjpbIlR5cGVzIiwiUkVTSVpFX1dJTkRPVyIsIk1PVkVfTU9VU0UiLCJVUERBVEVfQ0FNRVJBX1BPU0lUSU9OIiwiTE9BRElORyIsIkxPQURFRCIsIlVQREFURV9USU1FIiwiUkVTRVRfVElNRSIsIkNMSUNLX01FU0giLCJzdG9yZSIsIndpbmRvdyIsImRldlRvb2xzRXh0ZW5zaW9uIiwiZiIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2FkIiwid2luZG93U2l6ZSIsImNhbWVyYSIsInRpbWUiLCJwb2ludGVyIiwiaW1hZ2UiLCJzdGF0ZSIsImxvYWRpbmciLCJhY3Rpb24iLCJ0eXBlIiwiVEhSRUUiLCJWZWN0b3IyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJWZWN0b3IzIiwiZWxhcHNlZCIsImR1cmF0aW9uIiwicmVjdCIsImUiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50WSIsInRvcCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbnRlbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIndpbmRvd1dpZHRoIiwieCIsIndpbmRvd0hlaWdodCIsInkiLCJjYW1lcmFQb3NpdGlvbiIsInBvaW50ZXJQb3NpdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25Mb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIm9uTG9hZGVkIiwib25SZXNpemUiLCJvblVwZGF0ZVRpbWUiLCJvblJlc2V0VGltZSIsIm9uQ2xpY2tNZXNoIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsInByb3BzIiwidGV4dHVyZXMiLCJ1cmwiLCJpbml0aWFsaXplIiwidGhlbiIsInNldFRpbWVvdXQiLCJzZXRNb3VzZUlucHV0IiwiaGFuZGxlUmVzaXplIiwibmV3UHJvcHMiLCJtb3VzZUlucHV0IiwicmVmcyIsImNvbnRhaW5lclJlc2l6ZWQiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZFRleHR1cmUiLCJjb250YWluZXIiLCJpc1JlYWR5Iiwic2NlbmUiLCJyZWFkeSIsInNldEFjdGl2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwiY3Jvc3NPcmlnaW4iLCJuYW1lIiwidGV4dHVyZSIsImhhbmRsZUFuaW1hdGUiLCJoYW5kbGVDbGljayIsIk5vcm1hbEJsZW5kaW5nIiwiQ29tcG9uZW50IiwidGVtcFZlY3RvcjIiLCJsaXN0ZW5lckNhbGxiYWNrTmFtZXMiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwibW91c2VFdmVudHMiLCJib29sUHJvcHMiLCJpZ25vcmVQb2ludGVyRXZlbnRzIiwiTW91c2VJbnB1dCIsIl9vbk1vdXNlRG93biIsImNhbGxiYWNrTmFtZSIsIm1vdXNlRXZlbnQiLCJiYXRjaGVkVXBkYXRlcyIsIl9pbnRlcnNlY3RBbmREaXNwYXRjaCIsImV2ZW50IiwiaW50ZXJzZWN0aW9ucyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiX2ludGVyc2VjdGlvbnNGb3JDbGljayIsIl9vbk1vdXNlVXAiLCJpbnRlcnNlY3Rpb25VVUlETWFwIiwicmVkdWNlIiwibWFwIiwiaW50ZXJzZWN0aW9uIiwib2JqZWN0IiwidXVpZCIsImkiLCJsZW5ndGgiLCJldmVudERpc3BhdGNoZXIiLCJkaXNwYXRjaEV2ZW50IiwiX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQiLCJfaXNSZWFkeSIsIl9hY3RpdmUiLCJfcmVzdHJpY3RJbnRlcnNlY3Rpb25zIiwiX29iamVjdHNUb0ludGVyc2VjdCIsIl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlIiwiX3BhdGNoZWREZXNjcmlwdG9ycyIsInJlYWN0M1JlbmRlcmVySW5zdGFuY2UiLCJPYmplY3QzRERlc2NyaXB0b3IiLCJ0aHJlZUVsZW1lbnREZXNjcmlwdG9ycyIsIm9iamVjdDNEIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiZWxlbWVudERlc2NyaXB0b3IiLCJoYXNFdmVudCIsImV2ZW50TmFtZSIsImhhc1Byb3AiLCJwcm9wTmFtZSIsImJvb2wiLCJ1cGRhdGUiLCJ0aHJlZU9iamVjdCIsInZhbHVlIiwidXNlckRhdGEiLCJkZWZhdWx0IiwicHVzaCIsImFjdGl2ZSIsIm9iamVjdHMiLCJyZWN1cnNpdmUiLCJfc2NlbmUiLCJfY29udGFpbmVyIiwiX2NhbWVyYSIsIl9yYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJfbW91c2UiLCJfb25Nb3VzZU1vdmUiLCJzZXQiLCJfdXBkYXRlRW50ZXJMZWF2ZSIsIl9jb250YWluZXJSZWN0IiwiX2hvdmVyT2JqZWN0TWFwIiwiX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMiLCJib3VuZExpc3RlbmVyIiwibGlzdGVuZXJDYWxsYmFja05hbWUiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsInByb3RvdHlwZSIsImdldFBvb2xlZCIsIk1vdXNlRXZlbnQiLCJfZ2V0SW50ZXJzZWN0aW9ucyIsIm1vdXNlQ29vcmRzIiwicmVsYXRpdmVNb3VzZUNvb3JkcyIsIl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzIiwic2V0RnJvbUNhbWVyYSIsImludGVyc2VjdE9iamVjdHMiLCJpbnRlcnNlY3RPYmplY3QiLCJvcmlnaW5hbFJheSIsInJheSIsImNsb25lIiwicmVzdWx0UmF5IiwiY29weSIsImhvdmVyTWFwVG9VcGRhdGUiLCJtb3VzZUVudGVyRXZlbnQiLCJkZXB0aCIsIm1vdXNlTGVhdmVFdmVudCIsInVuc2VlblVVSURzIiwic2NyZWVuTW91c2VDb29yZHMiLCJjb250YWluZXJSZWN0Iiwic3ViIiwiZGl2aWRlIiwiY2xlYW51cEZ1bmN0aW9uIiwiYWxsUHJvcHMiLCJjb25jYXQiLCJyZW1vdmVQcm9wIiwicmVzaXplV2luZG93IiwidXBkYXRlVGltZSIsInJlc2V0VGltZSIsImNsaWNrTWVzaCIsIm1vdmVNb3VzZSIsImxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7O0FDdEJBLGtCQUFrQix5RDs7Ozs7OztBQ0FsQjtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDUkQsa0JBQWtCLHlEOzs7Ozs7O0FDQWxCO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7QUNmQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3JDQSxrQkFBa0IseUQ7Ozs7Ozs7QUNBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1JELElBQU1BLFFBQVE7QUFDYkMsZ0JBQWUsZUFERjtBQUViQyxhQUFZLFlBRkM7QUFHYkMs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LFFBQU0sc0JBQU1qQixVQUROO0FBRU4yQixLQUFHQTtBQUZHLEVBQVA7QUFJQSxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOzs7Ozs7QUFFTyxJQUFNdUssZ0NBQVksU0FBWkEsU0FBWSxDQUFDdkssQ0FBRCxFQUFPO0FBQy9CLFFBQU87QUFDTlYsUUFBTSxzQkFBTXZCLFVBRE47QUFFTmlDLEtBQUdBO0FBRkcsRUFBUDtBQUlBLENBTE0sQzs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVPLElBQU1aLDRCQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUM1QixRQUFPO0FBQ05FLFFBQU0sc0JBQU1yQjtBQUROLEVBQVA7QUFHQSxDQUpNOztBQU1BLElBQU11TSwwQkFBUyxTQUFUQSxNQUFTLEdBQU07QUFDM0IsUUFBTztBQUNObEwsUUFBTSxzQkFBTXBCO0FBRE4sRUFBUDtBQUdBLENBSk0sQyIsImZpbGUiOiJhc3NldHMvanMvcGFnZXMvZmx1aWQuMjY5N2NlOWIzZGVlYmVhNjE5MGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QudmFsdWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRNT1ZFX01PVVNFOiAnTU9WRV9NT1VTRScsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0TE9BRElORzogJ0xPQURJTkcnLFxuXHRMT0FERUQ6ICdMT0FERUQnLFxuXHRVUERBVEVfVElNRTogJ1VQREFURV9USU1FJyxcblx0UkVTRVRfVElNRTogJ1JFU0VUX1RJTUUnLFxuXHRDTElDS19NRVNIOiAnQ0xJQ0tfTUVTSCcsXG59XG5leHBvcnQgZGVmYXVsdCBUeXBlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2ZsdWlkL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsImltcG9ydCAnLi4vLi4vc3R5bHVzL3N0eWxlLnN0eWwnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXInXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGNvbXBvc2UoXG5cdHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gIT09ICd1bmRlZmluZWQnID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbikpO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8SW1hZ2VDb250YWluZXIvPlxuXHQ8L1Byb3ZpZGVyPlxuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9mbHVpZC9pbmRleC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkJ1xuaW1wb3J0IHdpbmRvd1NpemUgZnJvbSAnLi93aW5kb3dTaXplJ1xuaW1wb3J0IGNhbWVyYSBmcm9tICcuL2NhbWVyYSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSdcbi8vIGltcG9ydCBtb3VzZSBmcm9tICcuL21vdXNlJ1xuaW1wb3J0IHBvaW50ZXIgZnJvbSAnLi9wb2ludGVyJ1xuaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxvYWQsXG4gIHdpbmRvd1NpemUsXG4gIGNhbWVyYSxcbiAgdGltZSxcbiAgLy8gbW91c2UsXG4gIHBvaW50ZXIsXG4gIGltYWdlLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9mbHVpZC9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGxvYWQgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGxvYWRpbmc6IHRydWVcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZmx1aWQvcmVkdWNlcnMvbG9hZC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHdpbmRvd1NpemUgPSAoXG5cdHN0YXRlID0gbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuUkVTSVpFX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSxcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0XHRcdClcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTaXplXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZmx1aWQvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGNhbWVyYSA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDMuOCksXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVyYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2ZsdWlkL3JlZHVjZXJzL2NhbWVyYS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHRpbWUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGVsYXBzZWQ6IDAuMCxcblx0XHRkdXJhdGlvbjogMS41LFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLlVQREFURV9USU1FOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGVsYXBzZWQ6IHN0YXRlLmVsYXBzZWQgKyAwLjAxLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuUkVTRVRfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICogMC4wLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9mbHVpZC9yZWR1Y2Vycy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgcG9pbnRlciA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMC41KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5DTElDS19NRVNIOlxuXHRcdFx0bGV0IHJlY3QgPSBhY3Rpb24uZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdChhY3Rpb24uZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGFjdGlvbi5lLnRhcmdldC53aWR0aCxcblx0XHRcdFx0XHQoYWN0aW9uLmUudGFyZ2V0LmhlaWdodCAtIGFjdGlvbi5lLmNsaWVudFkgKyByZWN0LnRvcCkgLyBhY3Rpb24uZS50YXJnZXQuaGVpZ2h0LFxuXHRcdFx0XHQpLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwb2ludGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZmx1aWQvcmVkdWNlcnMvcG9pbnRlci5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGltYWdlID0gKFxuXHRzdGF0ZSA9IHtcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Ly8gY2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdC8vIFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0Ly8gXHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0Ly8gXHR9KVxuXHRcdC8vIGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdC8vIFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0Ly8gXHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdC8vIFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9mbHVpZC9yZWR1Y2Vycy9pbWFnZS5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xuXG5pbXBvcnQge3Jlc2l6ZVdpbmRvd30gZnJvbSAnLi4vYWN0aW9ucy9yZXNpemVXaW5kb3cnXG5pbXBvcnQge3VwZGF0ZVRpbWUsIHJlc2V0VGltZX0gZnJvbSAnLi4vYWN0aW9ucy90aW1lJ1xuaW1wb3J0IHtjbGlja01lc2h9IGZyb20gJy4uL2FjdGlvbnMvY2xpY2tNZXNoJ1xuaW1wb3J0IHttb3ZlTW91c2V9IGZyb20gJy4uL2FjdGlvbnMvbW92ZU1vdXNlJ1xuaW1wb3J0IHtsb2FkaW5nLCBsb2FkZWR9IGZyb20gJy4uL2FjdGlvbnMvbG9hZCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cdHJldHVybiB7XG5cdFx0bG9hZGluZzogc3RhdGUubG9hZC5sb2FkaW5nLFxuXHRcdHdpZHRoOiBjb250ZW50LmNsaWVudFdpZHRoLFxuXHRcdGhlaWdodDogY29udGVudC5jbGllbnRIZWlnaHQsXG5cdFx0d2luZG93V2lkdGg6IHN0YXRlLndpbmRvd1NpemUueCxcblx0XHR3aW5kb3dIZWlnaHQ6IHN0YXRlLndpbmRvd1NpemUueSxcblx0XHRjYW1lcmFQb3NpdGlvbjogc3RhdGUuY2FtZXJhLnBvc2l0aW9uLFxuXHRcdGVsYXBzZWQ6IHN0YXRlLnRpbWUuZWxhcHNlZCxcblx0XHRkdXJhdGlvbjogc3RhdGUudGltZS5kdXJhdGlvbixcblx0XHRwb2ludGVyUG9zaXRpb246IHN0YXRlLnBvaW50ZXIucG9zaXRpb24sXG5cdFx0Ly8gbW91c2U6IHN0YXRlLm1vdXNlLnRhcmdldCxcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRvbkxvYWRpbmc6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRpbmcoKSlcblx0XHR9LFxuXHRcdG9uTG9hZGVkOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbG9hZGVkLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRlZCgpKVxuXHRcdH0sXG5cdFx0b25SZXNpemU6IChlKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNpemVXaW5kb3coZSkpXG5cdFx0fSxcblx0XHRvblVwZGF0ZVRpbWU6ICgpID0+IHtcblx0XHRcdGRpc3BhdGNoKHVwZGF0ZVRpbWUoKSlcblx0XHR9LFxuXHRcdG9uUmVzZXRUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNldFRpbWUoKSlcblx0XHR9LFxuXHRcdG9uQ2xpY2tNZXNoOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2goY2xpY2tNZXNoKGUpKVxuXHRcdH0sXG5cdFx0Ly8gb25Nb3ZlTW91c2U6IChlKSA9PiB7XG5cdFx0Ly8gXHRkaXNwYXRjaChtb3ZlTW91c2UoZSkpXG5cdFx0Ly8gfSxcblx0fVxufVxuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEltYWdlKVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2ZsdWlkL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJ1xuXG5pbXBvcnQgTW91c2VJbnB1dCBmcm9tICcuLi9saWIvTW91c2VJbnB1dCdcblxuaW1wb3J0IHZzIGZyb20gJy4uL2dsc2wvaW1hZ2UudmVydCdcbmltcG9ydCBmcyBmcm9tICcuLi9nbHNsL2ltYWdlLmZyYWcnXG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5vbkxvYWRpbmcgPSA6OnRoaXMucHJvcHMub25Mb2FkaW5nXG5cdFx0dGhpcy5vbkxvYWRlZCA9IDo6dGhpcy5wcm9wcy5vbkxvYWRlZFxuXHRcdHRoaXMub25SZXNpemUgPSA6OnRoaXMucHJvcHMub25SZXNpemVcblx0XHR0aGlzLm9uVXBkYXRlVGltZSA9IDo6dGhpcy5wcm9wcy5vblVwZGF0ZVRpbWVcblx0XHQvLyB0aGlzLm9uTW92ZU1vdXNlID0gOjp0aGlzLnByb3BzLm9uTW92ZU1vdXNlXG5cdFx0dGhpcy5vblJlc2V0VGltZSA9IDo6dGhpcy5wcm9wcy5vblJlc2V0VGltZVxuXHRcdHRoaXMub25DbGlja01lc2ggPSA6OnRoaXMucHJvcHMub25DbGlja01lc2hcblxuXHRcdHRoaXMudGV4dHVyZXMgPSB7XG5cdFx0XHRcIm1haW5cIjoge1xuXHRcdFx0XHR1cmw6IFwiLi4vYXNzZXRzL2ltZy9mbHVpZC90aWxlLmpwZ1wiXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyogTGlmZUN5Y2xlICovXG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5pbml0aWFsaXplKCkudGhlbigoKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5vbkxvYWRlZCgpXG5cdFx0XHRcdC8vIHRoaXMuaGFuZGxlTW91c2VNb3ZlKClcblx0XHRcdFx0dGhpcy5zZXRNb3VzZUlucHV0KClcblx0XHRcdFx0dGhpcy5oYW5kbGVSZXNpemUoKVxuXG5cdFx0XHR9LCAzMDApXG5cdFx0fSlcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShuZXdQcm9wcykge1xuXHRcdGNvbnN0IHtcblx0XHRcdG1vdXNlSW5wdXQsXG5cdFx0fSA9IHRoaXMucmVmcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdHdpbmRvd1dpZHRoLFxuXHRcdFx0d2luZG93SGVpZ2h0LFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKHdpbmRvd1dpZHRoICE9PSBuZXdQcm9wcy53aW5kb3dXaWR0aCB8fCB3aW5kb3dIZWlnaHQgIT09IG5ld1Byb3BzLndpbmRvd0hlaWdodCkge1xuXHRcdFx0bW91c2VJbnB1dC5jb250YWluZXJSZXNpemVkKCk7XG5cdFx0fVxuXHR9XG5cblxuXHQvKiBjdXN0b20gRnVuY3Rpb24gICovXG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLm9uTG9hZGluZygpXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMubG9hZFRleHR1cmUoKVxuXHRcdFx0cmVzb2x2ZSgpXG5cdFx0fSk7XG5cdH1cblxuXHRzZXRNb3VzZUlucHV0KCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdG1vdXNlSW5wdXQsXG5cdFx0XHRjb250YWluZXJcblx0XHR9ID0gdGhpcy5yZWZzO1xuXG5cdFx0aWYgKCFtb3VzZUlucHV0LmlzUmVhZHkoKSkge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRzY2VuZSxcblx0XHRcdFx0Y2FtZXJhLFxuXHRcdFx0fSA9IHRoaXMucmVmcztcblxuXHRcdFx0bW91c2VJbnB1dC5yZWFkeShzY2VuZSwgY29udGFpbmVyLCBjYW1lcmEpO1xuXHRcdFx0Ly8gbW91c2VJbnB1dC5yZXN0cmljdEludGVyc2VjdGlvbnMoaW1hZ2VNZXNoKTtcblx0XHRcdG1vdXNlSW5wdXQuc2V0QWN0aXZlKGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVSZXNpemUoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlKVxuXHR9XG5cblx0Ly8gaGFuZGxlTW91c2VNb3ZlKCkge1xuXHQvLyBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW92ZU1vdXNlLCBmYWxzZSlcblx0Ly8gXHR9XG5cblx0aGFuZGxlQ2xpY2soZSkge1xuXHRcdHRoaXMub25SZXNldFRpbWUoKVxuXHRcdHRoaXMub25DbGlja01lc2goZSlcblx0fVxuXG5cdGhhbmRsZUFuaW1hdGUoKSB7XG5cdFx0dGhpcy5vblVwZGF0ZVRpbWUoKVxuXHR9XG5cblx0bG9hZFRleHR1cmUoKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKVxuXHRcdGxvYWRlci5jcm9zc09yaWdpbiA9ICcqJ1xuXHRcdGZvciAobGV0IG5hbWUgaW4gdGhpcy50ZXh0dXJlcykge1xuXHRcdFx0bG9hZGVyLmxvYWQodGhpcy50ZXh0dXJlc1tuYW1lXS51cmwsICh0ZXh0dXJlKSA9PiB7XG4gXHRcdFx0dGhpcy50ZXh0dXJlc1tuYW1lXS50ZXh0dXJlID0gdGV4dHVyZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2xvYWRpbmcsIHdpZHRoLCBoZWlnaHQsIGNhbWVyYVBvc2l0aW9uLCBlbGFwc2VkLCBkdXJhdGlvbiwgcG9pbnRlclBvc2l0aW9ufSA9IHRoaXMucHJvcHNcblxuXHRcdGlmIChsb2FkaW5nKSByZXR1cm4oPGgyPkxvYWRpbmcuLi48L2gyPilcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgcmVmPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxSZWFjdDNcblx0XHRcdFx0XHRtYWluQ2FtZXJhPVwiY2FtZXJhXCJcblx0XHRcdFx0XHR3aWR0aD17d2lkdGh9XG5cdFx0XHRcdFx0aGVpZ2h0PXtoZWlnaHR9XG5cdFx0XHRcdFx0b25BbmltYXRlPXs6OnRoaXMuaGFuZGxlQW5pbWF0ZX1cblx0XHRcdFx0XHRjbGVhckNvbG9yPXsweDAwMDAwMH1cblx0XHRcdFx0XHRhbnRpYWxpYXM9e3RydWV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bW9kdWxlXG5cdFx0XHRcdFx0XHRyZWY9XCJtb3VzZUlucHV0XCJcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3I9e01vdXNlSW5wdXR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8c2NlbmVcblx0XHRcdFx0XHRcdHJlZj1cInNjZW5lXCJcblx0XHRcdFx0XHRcdC8vIGZvZz17bmV3IFRIUkVFLkZvZygweDIyMjIyMiwgMC42LCAyLjgpfVxuXHRcdFx0XHRcdD5cblxuXHRcdFx0XHRcdFx0ey8qIEhlbHBlciAqL31cblx0XHRcdFx0XHRcdHsvKiA8YXhpc0hlbHBlciAvPiAqL31cblxuXHRcdFx0XHRcdFx0ey8qIENhbWVyYSAqL31cblx0XHRcdFx0XHRcdDxwZXJzcGVjdGl2ZUNhbWVyYVxuXHRcdFx0XHRcdFx0XHRyZWY9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0Zm92PXsxNX1cblx0XHRcdFx0XHRcdFx0YXNwZWN0PXt3aWR0aCAvIGhlaWdodH1cblx0XHRcdFx0XHRcdFx0bmVhcj17MC4wMX1cblx0XHRcdFx0XHRcdFx0ZmFyPXsxMDAwfVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17Y2FtZXJhUG9zaXRpb259XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHR7LyogTGlnaHQgKi99XG5cdFx0XHRcdFx0XHQ8aGVtaXNwaGVyZUxpZ2h0XG5cdFx0XHRcdFx0XHRcdHNreUNvbG9yPXsweGZmZmZiYn1cblx0XHRcdFx0XHRcdFx0Z3JvdW5kQ29sb3I9ezB4ODg3OTc5fVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGlyZWN0aW9uYWxMaWdodFxuXHRcdFx0XHRcdFx0XHRjb2xvcj17MHhmZmZmZmZ9XG5cdFx0XHRcdFx0XHRcdGludGVuc2l0eT17MC44fVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIGhlbHBlciBNZXNoKi99XG5cdFx0XHRcdFx0XHR7LyogPG1lc2g+XG5cdFx0XHRcdFx0XHRcdFx0PGJveEdlb21ldHJ5XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRcdFx0XHRcdGRlcHRoPXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8bWVzaEJhc2ljTWF0ZXJpYWxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj17MHhlZWVlZWV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L21lc2g+ICovfVxuXG5cdFx0XHRcdFx0XHR7LyogSW1hZ2UgTWVzaCAqL31cblx0XHRcdFx0XHRcdDxtZXNoXG5cdFx0XHRcdFx0XHRcdHJlZj0naW1hZ2VNZXNoJ1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHBsYW5lR2VvbWV0cnlcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MX1cblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezF9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxzaGFkZXJNYXRlcmlhbFxuXHRcdFx0XHRcdFx0XHRcdHZlcnRleFNoYWRlcj17dnN9XG5cdFx0XHRcdFx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI9e2ZzfVxuXHRcdFx0XHRcdFx0XHRcdGJsZW5kaW5nPXtUSFJFRS5Ob3JtYWxCbGVuZGluZ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDx1bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eyd0ZXh0dXJlJ30gdHlwZT17J3QnfSB2YWx1ZT17dGhpcy50ZXh0dXJlc1snbWFpbiddLnRleHR1cmV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsndGltZSd9IHR5cGU9eydmJ30gdmFsdWU9e2VsYXBzZWR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnZHVyYXRpb24nfSB0eXBlPXsnZid9IHZhbHVlPXtkdXJhdGlvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydtb3VzZSd9IHR5cGU9eyd2ZWMyJ30gdmFsdWU9e3BvaW50ZXJQb3NpdGlvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3VuaWZvcm1zPlxuXHRcdFx0XHRcdFx0XHQ8L3NoYWRlck1hdGVyaWFsPlxuXG5cdFx0XHRcdFx0XHQ8L21lc2g+XG5cblx0XHRcdFx0XHQ8L3NjZW5lPlxuXHRcdFx0XHQ8L1JlYWN0Mz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2ZsdWlkL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJpbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBSZWFjdFVwZGF0ZXMgZnJvbSAncmVhY3QtZG9tL2xpYi9SZWFjdFVwZGF0ZXMnO1xuXG5pbXBvcnQgU3ludGhldGljTW91c2VFdmVudCBmcm9tICdyZWFjdC1kb20vbGliL1N5bnRoZXRpY01vdXNlRXZlbnQnO1xuXG5pbXBvcnQgTW9kdWxlIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyL2xpYi9Nb2R1bGUnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3JlYWN0L2xpYi9SZWFjdFByb3BUeXBlcyc7XG5cbmNvbnN0IHRlbXBWZWN0b3IyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuY29uc3QgbGlzdGVuZXJDYWxsYmFja05hbWVzID0ge1xuICBtb3VzZWRvd246ICdvbk1vdXNlRG93bicsXG4gIG1vdXNldXA6ICdvbk1vdXNlVXAnLFxufTtcblxuY29uc3QgbW91c2VFdmVudHMgPSBbXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uTW91c2VEb3duJyxcbiAgJ29uTW91c2VVcCcsXG4gICdvbkNsaWNrJyxcbl07XG5cbmNvbnN0IGJvb2xQcm9wcyA9IHtcbiAgaWdub3JlUG9pbnRlckV2ZW50czogZmFsc2UsXG59O1xuXG5jbGFzcyBNb3VzZUlucHV0IGV4dGVuZHMgTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lzUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCA9IG51bGw7XG5cbiAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMgPSBbXTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgc2V0dXAocmVhY3QzUmVuZGVyZXJJbnN0YW5jZSkge1xuICAgIHN1cGVyLnNldHVwKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UpO1xuXG4gICAgY29uc3QgT2JqZWN0M0REZXNjcmlwdG9yID0gcmVhY3QzUmVuZGVyZXJJbnN0YW5jZS50aHJlZUVsZW1lbnREZXNjcmlwdG9ycy5vYmplY3QzRC5jb25zdHJ1Y3RvcjtcblxuICAgIE9iamVjdC52YWx1ZXMocmVhY3QzUmVuZGVyZXJJbnN0YW5jZS50aHJlZUVsZW1lbnREZXNjcmlwdG9ycykuZm9yRWFjaChlbGVtZW50RGVzY3JpcHRvciA9PiB7XG4gICAgICBpZiAoZWxlbWVudERlc2NyaXB0b3IgaW5zdGFuY2VvZiBPYmplY3QzRERlc2NyaXB0b3IpIHtcbiAgICAgICAgbW91c2VFdmVudHMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLmhhc0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGJvb2xQcm9wcykuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgICAgZWxlbWVudERlc2NyaXB0b3IuaGFzUHJvcChwcm9wTmFtZSwge1xuICAgICAgICAgICAgdHlwZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICB1cGRhdGUodGhyZWVPYmplY3QsIHZhbHVlLCBoYXNQcm9wKSB7XG4gICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhyZWVPYmplY3QudXNlckRhdGFbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyZWVPYmplY3QudXNlckRhdGFbcHJvcE5hbWVdID0gYm9vbFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJvb2xQcm9wc1twcm9wTmFtZV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycy5wdXNoKGVsZW1lbnREZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzUmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVhZHk7XG4gIH1cblxuICBzZXRBY3RpdmUoYWN0aXZlKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgcmVzdHJpY3RJbnRlcnNlY3Rpb25zKG9iamVjdHMsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zID0gdHJ1ZTtcbiAgICB0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QgPSBvYmplY3RzO1xuXG4gICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSA9IHJlY3Vyc2l2ZTtcbiAgfVxuXG4gIHJlYWR5KHNjZW5lLCBjb250YWluZXIsIGNhbWVyYSkge1xuICAgIHRoaXMuX2lzUmVhZHkgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5fY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuICAgIHRoaXMuX21vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIHRoaXMuX29uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9tb3VzZS5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgIGlmICghdGhpcy5fYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUVudGVyTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwID0ge307XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcblxuICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVyQ2FsbGJhY2tOYW1lcykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgbGV0IGJvdW5kTGlzdGVuZXI7XG5cbiAgICAgIGNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tOYW1lID0gbGlzdGVuZXJDYWxsYmFja05hbWVzW2V2ZW50TmFtZV07XG4gICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgIGJvdW5kTGlzdGVuZXIgPSB0aGlzLl9vbk1vdXNlRG93bi5iaW5kKHRoaXMsIGxpc3RlbmVyQ2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgYm91bmRMaXN0ZW5lciA9IHRoaXMuX29uTW91c2VVcC5iaW5kKHRoaXMsIGxpc3RlbmVyQ2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGJvdW5kTGlzdGVuZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZExpc3RlbmVyLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX29uTW91c2VEb3duID0gKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkgPT4ge1xuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpbnRlcnNlY3Rpb25zLFxuICAgICAgfSA9IHRoaXMuX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCk7XG5cbiAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBpbnRlcnNlY3Rpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9vbk1vdXNlVXAgPSAoY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSA9PiB7XG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgICB9ID0gdGhpcy5faW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KTtcblxuICAgICAgaWYgKCEoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGludGVyc2VjdCBjdXJyZW50IGludGVyc2VjdGlvbnMgd2l0aCB0aGUgaW50ZXJzZWN0aW9ucyBmb3IgY2xpY2tcbiAgICAgICAgLy8gICBjYWxsIHh6aWJpdCBBU0FQIHdlIGhhdmUgYSBnb29kIG9uZSBzb25cbiAgICAgICAgLy8gICAgIGl0IHdhc24ndCB0aGF0IGdvb2RcblxuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25VVUlETWFwID0gdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrLnJlZHVjZSgobWFwLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICAgICAgICBtYXBbaW50ZXJzZWN0aW9uLm9iamVjdC51dWlkXSA9IGludGVyc2VjdGlvbjtcblxuICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbaV07XG5cbiAgICAgICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICAgICAgY29uc3QgdXVpZCA9IG9iamVjdC51dWlkO1xuXG4gICAgICAgICAgaWYgKGludGVyc2VjdGlvblVVSURNYXBbdXVpZF0pIHtcbiAgICAgICAgICAgIC8vIG9oIGJveSBvaCBib3kgaGVyZSB3ZSBnbywgd2UgZ290IGEgY2xpY2tlclxuXG4gICAgICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyXG4gICAgICAgICAgICAgIC5kaXNwYXRjaEV2ZW50KG9iamVjdCwgJ29uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ2NsaWNrJywgZXZlbnQpLCBpbnRlcnNlY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcbiAgfTtcblxuICBfY3JlYXRlU3ludGhldGljTW91c2VFdmVudChldmVudFR5cGUsIHByb3RvdHlwZSkge1xuICAgIHJldHVybiBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChudWxsLCBudWxsLFxuICAgICAgbmV3IE1vdXNlRXZlbnQoZXZlbnRUeXBlLCBwcm90b3R5cGUpLCBwcm90b3R5cGUudGFyZ2V0KTtcbiAgfVxuXG4gIF9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBldmVudCA9IFN5bnRoZXRpY01vdXNlRXZlbnQuZ2V0UG9vbGVkKG51bGwsIG51bGwsIG1vdXNlRXZlbnQsIG1vdXNlRXZlbnQudGFyZ2V0KTtcblxuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9nZXRJbnRlcnNlY3Rpb25zKHRlbXBWZWN0b3IyLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKSk7XG5cbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbaV07XG5cbiAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChvYmplY3QsIGNhbGxiYWNrTmFtZSwgZXZlbnQsIGludGVyc2VjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQsXG4gICAgICBpbnRlcnNlY3Rpb25zLFxuICAgIH07XG4gIH1cblxuICBfZ2V0SW50ZXJzZWN0aW9ucyhtb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBpZiAodGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHModGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0LFxuICAgICAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCh0aGlzLl9zY2VuZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1RIUkVFLlZlY3RvcjJ9IG1vdXNlQ29vcmRzIHVzdWFsbHkgYW4gZXZlbnQncyBjbGllbnRYIGFuZCBjbGllbnRZXG4gICAqIEByZXR1cm5zIHtUSFJFRS5SYXl9XG4gICAqL1xuICBnZXRDYW1lcmFSYXkobW91c2VDb29yZHMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICBjb25zdCBvcmlnaW5hbFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBjb25zdCByZXN1bHRSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIucmF5LmNvcHkob3JpZ2luYWxSYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFJheTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgaW50ZXJzZWN0T2JqZWN0KG1vdXNlQ29vcmRzLCBvYmplY3QsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3Qob2JqZWN0LCByZWN1cnNpdmUpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnJheS5jb3B5KG9yaWdpbmFsUmF5KTtcblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICB9XG5cbiAgY29udGFpbmVyUmVzaXplZCgpIHtcbiAgICB0aGlzLl9jb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5faXNSZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUVudGVyTGVhdmUoKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlRW50ZXJMZWF2ZSgpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fZ2V0SW50ZXJzZWN0aW9ucyh0aGlzLl9tb3VzZSk7XG5cbiAgICBjb25zdCBob3Zlck1hcFRvVXBkYXRlID0ge1xuICAgICAgLi4udGhpcy5faG92ZXJPYmplY3RNYXAsXG4gICAgfTtcblxuICAgIGNvbnN0IG1vdXNlRW50ZXJFdmVudCA9IHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ21vdXNlRW50ZXInLCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIGNsaWVudFg6IHRoaXMuX21vdXNlLngsXG4gICAgICBjbGllbnRZOiB0aGlzLl9tb3VzZS55LFxuICAgIH0pO1xuXG4gICAgLy8gZmluZCBmaXJzdCBpbnRlcnNlY3Rpb24gdGhhdCBkb2VzIG5vdCBpZ25vcmUgcG9pbnRlciBldmVudHNcbiAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsrZGVwdGgpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbZGVwdGhdO1xuICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgaWYgKG9iamVjdC51c2VyRGF0YSAmJiBvYmplY3QudXNlckRhdGEuaWdub3JlUG9pbnRlckV2ZW50cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXVpZCA9IG9iamVjdC51dWlkO1xuXG4gICAgICBpZiAodGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0pIHtcbiAgICAgICAgZGVsZXRlIGhvdmVyTWFwVG9VcGRhdGVbdXVpZF07XG5cbiAgICAgICAgLy8ganVzdCB1cGRhdGUgdGhhdCBpbnRlcnNlY3Rpb25cbiAgICAgICAgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0uaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0gPSB7XG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgIGludGVyc2VjdGlvbixcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIShtb3VzZUVudGVyRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgbW91c2VFbnRlckV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KG9iamVjdCwgJ29uTW91c2VFbnRlcicsXG4gICAgICAgICAgICBtb3VzZUVudGVyRXZlbnQsIGludGVyc2VjdGlvbiwgZGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGhhdmUgZm91bmQgdGhlIGZpcnN0IHNvbGlkIGludGVyc2VjdGlvbiwgZG9uJ3QgZ28gZnVydGhlclxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VMZWF2ZUV2ZW50ID0gdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnbW91c2VMZWF2ZScsIHtcbiAgICAgIHRhcmdldDogdGhpcy5fY29udGFpbmVyLFxuICAgICAgY2xpZW50WDogdGhpcy5fbW91c2UueCxcbiAgICAgIGNsaWVudFk6IHRoaXMuX21vdXNlLnksXG4gICAgfSk7XG5cbiAgICAvLyBkZWxldGUgYWxsIHVuc2VlbiB1dWlkcyBpbiBob3ZlciBtYXBcbiAgICBjb25zdCB1bnNlZW5VVUlEcyA9IE9iamVjdC5rZXlzKGhvdmVyTWFwVG9VcGRhdGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNlZW5VVUlEcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgdXVpZCA9IHVuc2VlblVVSURzW2ldO1xuXG4gICAgICBpZiAoIShtb3VzZUxlYXZlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgbW91c2VMZWF2ZUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudCh0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXS5vYmplY3QsXG4gICAgICAgICAgJ29uTW91c2VMZWF2ZScsIG1vdXNlTGVhdmVFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXTtcbiAgICB9XG4gIH1cblxuICBfZ2V0UmVsYXRpdmVNb3VzZUNvb3JkcyhzY3JlZW5Nb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXJSZWN0O1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHNjcmVlbk1vdXNlQ29vcmRzLmNsb25lKClcbiAgICAgIC5zdWIodGVtcFZlY3RvcjIuc2V0KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApKVxuICAgICAgLmRpdmlkZSh0ZW1wVmVjdG9yMi5zZXQoY29udGFpbmVyUmVjdC53aWR0aCwgY29udGFpbmVyUmVjdC5oZWlnaHQpKTtcblxuICAgIC8vIG1vdXNlLnggPSAoIGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCApICogMiAtIDE7XG4gICAgLy8gbW91c2UueSA9IC0gKCBldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0ICkgKiAyICsgMTtcblxuICAgIHJlbGF0aXZlTW91c2VDb29yZHMueCA9IHJlbGF0aXZlTW91c2VDb29yZHMueCAqIDIgLSAxO1xuICAgIHJlbGF0aXZlTW91c2VDb29yZHMueSA9IC1yZWxhdGl2ZU1vdXNlQ29vcmRzLnkgKiAyICsgMTtcblxuICAgIHJldHVybiByZWxhdGl2ZU1vdXNlQ29vcmRzO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBkaXNwb3NlKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zLmZvckVhY2goY2xlYW51cEZ1bmN0aW9uID0+IGNsZWFudXBGdW5jdGlvbigpKTtcbiAgICBkZWxldGUgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucztcblxuICAgIGRlbGV0ZSB0aGlzLl9vbk1vdXNlTW92ZTtcblxuICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycy5mb3JFYWNoKGVsZW1lbnREZXNjcmlwdG9yID0+IHtcbiAgICAgIGNvbnN0IGFsbFByb3BzID0gT2JqZWN0LmtleXMoYm9vbFByb3BzKVxuICAgICAgICAuY29uY2F0KG1vdXNlRXZlbnRzKTtcblxuICAgICAgYWxsUHJvcHMuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLnJlbW92ZVByb3AocHJvcE5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW91c2VJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9mbHVpZC9saWIvTW91c2VJbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvZmx1aWQvZ2xzbC9pbWFnZS52ZXJ0XG4vLyBtb2R1bGUgaWQgPSA1Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxudW5pZm9ybSBmbG9hdCBkdXJhdGlvbjtcXG51bmlmb3JtIHZlYzIgbW91c2U7XFxuXFxuI2RlZmluZSBNX1BJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcblxcbnZvaWQgbWFpbigpIHtcXG5cXHR2ZWMyIHV2ID0gdlV2O1xcblxcdHZlYzIgdGV4Q29vcmQgPSB1djtcXG5cXHR2ZWMyIGRlcGFydHVyZSA9IG1vdXNlO1xcblxcdGZsb2F0IGFtcGxpdHVkZSA9IDAuNztcXG5cXHRmbG9hdCB3YXZlTGVuZ3RoT2Zmc2V0ID0gMC4xO1xcblxcdGZsb2F0IHNwZWVkID0gMC44O1xcblxcdGZsb2F0IGVsYXBzZWQgPSBtb2QodGltZSAqIHNwZWVkLCBkdXJhdGlvbik7XFxuXFxuXFx0dmVjMiB1ID0gdmVjMihzaW4oMi4wKk1fUEkqdXYueSksIHNpbigyLjAqTV9QSSp1di54KSk7XFxuXFxuXFx0dmVjMiB1dSA9IHZlYzIodXYgKyB1ICogdGltZSk7XFxuXFxuXFx0dmVjNCBjb2xvciA9IHRleHR1cmUyRCh0ZXh0dXJlLCB1dSk7XFxuXFx0Ly8gY29sb3IucmdiID0gY29sb3IucmdiICsgYztcXG5cXG5cXHRnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9mbHVpZC9nbHNsL2ltYWdlLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDUyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgcmVzaXplV2luZG93ID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNJWkVfV0lORE9XLFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9mbHVpZC9hY3Rpb25zL3Jlc2l6ZVdpbmRvdy5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUaW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlVQREFURV9USU1FLFxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCByZXNldFRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUkVTRVRfVElNRSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2ZsdWlkL2FjdGlvbnMvdGltZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBjbGlja01lc2ggPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkNMSUNLX01FU0gsXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2ZsdWlkL2FjdGlvbnMvY2xpY2tNZXNoLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IG1vdmVNb3VzZSA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTU9WRV9NT1VTRSxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvZmx1aWQvYWN0aW9ucy9tb3ZlTW91c2UuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5MT0FESU5HXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlZCA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5MT0FERURcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2ZsdWlkL2FjdGlvbnMvbG9hZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=