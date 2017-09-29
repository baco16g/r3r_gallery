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

/***/ 31:
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

/***/ 551:
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

var _reducers = __webpack_require__(552);

var _reducers2 = _interopRequireDefault(_reducers);

var _ImageContainer = __webpack_require__(559);

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

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(28);

var _load = __webpack_require__(553);

var _load2 = _interopRequireDefault(_load);

var _windowSize = __webpack_require__(554);

var _windowSize2 = _interopRequireDefault(_windowSize);

var _camera = __webpack_require__(555);

var _camera2 = _interopRequireDefault(_camera);

var _time = __webpack_require__(556);

var _time2 = _interopRequireDefault(_time);

var _pointer = __webpack_require__(557);

var _pointer2 = _interopRequireDefault(_pointer);

var _image = __webpack_require__(558);

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

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(31);

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

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(31);

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

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(31);

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

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(31);

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

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(11);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(31);

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

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(31);

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

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(35);

var _Image = __webpack_require__(560);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(564);

var _time = __webpack_require__(565);

var _clickMesh = __webpack_require__(566);

var _moveMouse = __webpack_require__(567);

var _load = __webpack_require__(568);

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

/***/ 560:
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

var _MouseInput = __webpack_require__(561);

var _MouseInput2 = _interopRequireDefault(_MouseInput);

var _image = __webpack_require__(562);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(563);

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
				url: "../assets/img/ripple/cat2.jpg"
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

/***/ 561:
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

/***/ 562:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nuniform sampler2D texture;\nuniform float time;\nuniform float duration;\nuniform vec2 mouse;\n\nvoid main() {\n\tvec2 uv = vUv;\n\tvec2 texCoord = uv;\n\tvec2 departure = mouse;\n\tfloat amplitude = 0.7;\n\tfloat waveLengthOffset = 0.1;\n\tfloat speed = 0.8;\n\tfloat elapsed = mod(time * speed, duration);\n\t// float elapsed = time;\n\n\tfloat dist = distance(uv, departure);\n\n\tif ( (dist <= (elapsed + waveLengthOffset)) && (dist >= (elapsed - waveLengthOffset)) ) {\n\t\tfloat diff = abs(elapsed - dist);\n\t\tfloat powDiff = 1.0 - pow((diff*10.0), amplitude);\n\n\t\tfloat diffTime = diff * powDiff;\n\t\ttexCoord = uv + (uv * diffTime);\n\t}\n\n\tvec4 color = texture2D(texture, texCoord);\n\n\tgl_FragColor = color;\n}\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(31);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetTime = exports.updateTime = undefined;

var _actiontypes = __webpack_require__(31);

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

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clickMesh = undefined;

var _actiontypes = __webpack_require__(31);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clickMesh = exports.clickMesh = function clickMesh(e) {
	return {
		type: _actiontypes2.default.CLICK_MESH,
		e: e
	};
};

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(31);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(31);

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

},[551]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvY29uc3RhbnRzL2FjdGlvbnR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvcmVkdWNlcnMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvY29tcG9uZW50cy9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9saWIvTW91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9nbHNsL2ltYWdlLnZlcnQiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvZ2xzbC9pbWFnZS5mcmFnIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2FjdGlvbnMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9hY3Rpb25zL2NsaWNrTWVzaC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9hY3Rpb25zL21vdmVNb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9hY3Rpb25zL2xvYWQuanMiXSwibmFtZXMiOlsiVHlwZXMiLCJSRVNJWkVfV0lORE9XIiwiTU9WRV9NT1VTRSIsIlVQREFURV9DQU1FUkFfUE9TSVRJT04iLCJMT0FESU5HIiwiTE9BREVEIiwiVVBEQVRFX1RJTUUiLCJSRVNFVF9USU1FIiwiQ0xJQ0tfTUVTSCIsInN0b3JlIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWQiLCJ3aW5kb3dTaXplIiwiY2FtZXJhIiwidGltZSIsInBvaW50ZXIiLCJpbWFnZSIsInN0YXRlIiwibG9hZGluZyIsImFjdGlvbiIsInR5cGUiLCJUSFJFRSIsIlZlY3RvcjIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsIlZlY3RvcjMiLCJlbGFwc2VkIiwiZHVyYXRpb24iLCJyZWN0IiwiZSIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRZIiwidG9wIiwibWFwU3RhdGVUb1Byb3BzIiwiY29udGVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ4Iiwid2luZG93SGVpZ2h0IiwieSIsImNhbWVyYVBvc2l0aW9uIiwicG9pbnRlclBvc2l0aW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwib25Mb2FkZWQiLCJvblJlc2l6ZSIsIm9uVXBkYXRlVGltZSIsIm9uUmVzZXRUaW1lIiwib25DbGlja01lc2giLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwicHJvcHMiLCJ0ZXh0dXJlcyIsInVybCIsImluaXRpYWxpemUiLCJ0aGVuIiwic2V0VGltZW91dCIsInNldE1vdXNlSW5wdXQiLCJoYW5kbGVSZXNpemUiLCJuZXdQcm9wcyIsIm1vdXNlSW5wdXQiLCJyZWZzIiwiY29udGFpbmVyUmVzaXplZCIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkVGV4dHVyZSIsImNvbnRhaW5lciIsImlzUmVhZHkiLCJzY2VuZSIsInJlYWR5Iiwic2V0QWN0aXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJjcm9zc09yaWdpbiIsIm5hbWUiLCJ0ZXh0dXJlIiwiaGFuZGxlQW5pbWF0ZSIsImhhbmRsZUNsaWNrIiwiTm9ybWFsQmxlbmRpbmciLCJDb21wb25lbnQiLCJ0ZW1wVmVjdG9yMiIsImxpc3RlbmVyQ2FsbGJhY2tOYW1lcyIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZUV2ZW50cyIsImJvb2xQcm9wcyIsImlnbm9yZVBvaW50ZXJFdmVudHMiLCJNb3VzZUlucHV0IiwiX29uTW91c2VEb3duIiwiY2FsbGJhY2tOYW1lIiwibW91c2VFdmVudCIsImJhdGNoZWRVcGRhdGVzIiwiX2ludGVyc2VjdEFuZERpc3BhdGNoIiwiZXZlbnQiLCJpbnRlcnNlY3Rpb25zIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJfaW50ZXJzZWN0aW9uc0ZvckNsaWNrIiwiX29uTW91c2VVcCIsImludGVyc2VjdGlvblVVSURNYXAiLCJyZWR1Y2UiLCJtYXAiLCJpbnRlcnNlY3Rpb24iLCJvYmplY3QiLCJ1dWlkIiwiaSIsImxlbmd0aCIsImV2ZW50RGlzcGF0Y2hlciIsImRpc3BhdGNoRXZlbnQiLCJfY3JlYXRlU3ludGhldGljTW91c2VFdmVudCIsIl9pc1JlYWR5IiwiX2FjdGl2ZSIsIl9yZXN0cmljdEludGVyc2VjdGlvbnMiLCJfb2JqZWN0c1RvSW50ZXJzZWN0IiwiX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUiLCJfcGF0Y2hlZERlc2NyaXB0b3JzIiwicmVhY3QzUmVuZGVyZXJJbnN0YW5jZSIsIk9iamVjdDNERGVzY3JpcHRvciIsInRocmVlRWxlbWVudERlc2NyaXB0b3JzIiwib2JqZWN0M0QiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJlbGVtZW50RGVzY3JpcHRvciIsImhhc0V2ZW50IiwiZXZlbnROYW1lIiwiaGFzUHJvcCIsInByb3BOYW1lIiwiYm9vbCIsInVwZGF0ZSIsInRocmVlT2JqZWN0IiwidmFsdWUiLCJ1c2VyRGF0YSIsImRlZmF1bHQiLCJwdXNoIiwiYWN0aXZlIiwib2JqZWN0cyIsInJlY3Vyc2l2ZSIsIl9zY2VuZSIsIl9jb250YWluZXIiLCJfY2FtZXJhIiwiX3JheWNhc3RlciIsIlJheWNhc3RlciIsIl9tb3VzZSIsIl9vbk1vdXNlTW92ZSIsInNldCIsIl91cGRhdGVFbnRlckxlYXZlIiwiX2NvbnRhaW5lclJlY3QiLCJfaG92ZXJPYmplY3RNYXAiLCJfY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucyIsImJvdW5kTGlzdGVuZXIiLCJsaXN0ZW5lckNhbGxiYWNrTmFtZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwicHJvdG90eXBlIiwiZ2V0UG9vbGVkIiwiTW91c2VFdmVudCIsIl9nZXRJbnRlcnNlY3Rpb25zIiwibW91c2VDb29yZHMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRzIiwiX2dldFJlbGF0aXZlTW91c2VDb29yZHMiLCJzZXRGcm9tQ2FtZXJhIiwiaW50ZXJzZWN0T2JqZWN0cyIsImludGVyc2VjdE9iamVjdCIsIm9yaWdpbmFsUmF5IiwicmF5IiwiY2xvbmUiLCJyZXN1bHRSYXkiLCJjb3B5IiwiaG92ZXJNYXBUb1VwZGF0ZSIsIm1vdXNlRW50ZXJFdmVudCIsImRlcHRoIiwibW91c2VMZWF2ZUV2ZW50IiwidW5zZWVuVVVJRHMiLCJzY3JlZW5Nb3VzZUNvb3JkcyIsImNvbnRhaW5lclJlY3QiLCJzdWIiLCJkaXZpZGUiLCJjbGVhbnVwRnVuY3Rpb24iLCJhbGxQcm9wcyIsImNvbmNhdCIsInJlbW92ZVByb3AiLCJyZXNpemVXaW5kb3ciLCJ1cGRhdGVUaW1lIiwicmVzZXRUaW1lIiwiY2xpY2tNZXNoIiwibW92ZU1vdXNlIiwibG9hZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7QUN0QkEsa0JBQWtCLHlEOzs7Ozs7O0FDQWxCO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNSRCxrQkFBa0IseUQ7Ozs7Ozs7QUNBbEI7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7OztBQ2ZBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7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LFNBQWJBLFVBQWEsR0FBTTtBQUMvQixRQUFPO0FBQ045SyxRQUFNLHNCQUFNbkI7QUFETixFQUFQO0FBR0EsQ0FKTTs7QUFNQSxJQUFNa00sZ0NBQVksU0FBWkEsU0FBWSxHQUFNO0FBQzlCLFFBQU87QUFDTi9LLFFBQU0sc0JBQU1sQjtBQUROLEVBQVA7QUFHQSxDQUpNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JQOzs7Ozs7QUFFTyxJQUFNa00sZ0NBQVksU0FBWkEsU0FBWSxDQUFDdEssQ0FBRCxFQUFPO0FBQy9CLFFBQU87QUFDTlYsUUFBTSxzQkFBTWpCLFVBRE47QUFFTjJCLEtBQUdBO0FBRkcsRUFBUDtBQUlBLENBTE0sQzs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVPLElBQU11SyxnQ0FBWSxTQUFaQSxTQUFZLENBQUN2SyxDQUFELEVBQU87QUFDL0IsUUFBTztBQUNOVixRQUFNLHNCQUFNdkIsVUFETjtBQUVOaUMsS0FBR0E7QUFGRyxFQUFQO0FBSUEsQ0FMTSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7Ozs7O0FBRU8sSUFBTVosNEJBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQzVCLFFBQU87QUFDTkUsUUFBTSxzQkFBTXJCO0FBRE4sRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTXVNLDBCQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUMzQixRQUFPO0FBQ05sTCxRQUFNLHNCQUFNcEI7QUFETixFQUFQO0FBR0EsQ0FKTSxDIiwiZmlsZSI6ImFzc2V0cy9qcy9wYWdlcy9yaXBwbGUtY2xpY2thYmxlLjI2OTdjZTliM2RlZWJlYTYxOTBmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnZhbHVlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgVHlwZXMgPSB7XG5cdFJFU0laRV9XSU5ET1c6ICdSRVNJWkVfV0lORE9XJyxcblx0TU9WRV9NT1VTRTogJ01PVkVfTU9VU0UnLFxuXHRVUERBVEVfQ0FNRVJBX1BPU0lUSU9OOiAnVVBEQVRFX0NBTUVSQV9QT1NJVElPTicsXG5cdExPQURJTkc6ICdMT0FESU5HJyxcblx0TE9BREVEOiAnTE9BREVEJyxcblx0VVBEQVRFX1RJTUU6ICdVUERBVEVfVElNRScsXG5cdFJFU0VUX1RJTUU6ICdSRVNFVF9USU1FJyxcblx0Q0xJQ0tfTUVTSDogJ0NMSUNLX01FU0gnLFxufVxuZXhwb3J0IGRlZmF1bHQgVHlwZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsImltcG9ydCAnLi4vLi4vc3R5bHVzL3N0eWxlLnN0eWwnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXInXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGNvbXBvc2UoXG5cdHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gIT09ICd1bmRlZmluZWQnID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbikpO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8SW1hZ2VDb250YWluZXIvPlxuXHQ8L1Byb3ZpZGVyPlxuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQnXG5pbXBvcnQgd2luZG93U2l6ZSBmcm9tICcuL3dpbmRvd1NpemUnXG5pbXBvcnQgY2FtZXJhIGZyb20gJy4vY2FtZXJhJ1xuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJ1xuLy8gaW1wb3J0IG1vdXNlIGZyb20gJy4vbW91c2UnXG5pbXBvcnQgcG9pbnRlciBmcm9tICcuL3BvaW50ZXInXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbG9hZCxcbiAgd2luZG93U2l6ZSxcbiAgY2FtZXJhLFxuICB0aW1lLFxuICAvLyBtb3VzZSxcbiAgcG9pbnRlcixcbiAgaW1hZ2UsXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBsb2FkID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRsb2FkaW5nOiB0cnVlXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuTE9BRElORzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0fSlcblx0XHRjYXNlIFR5cGVzLkxPQURFRDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvcmVkdWNlcnMvbG9hZC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHdpbmRvd1NpemUgPSAoXG5cdHN0YXRlID0gbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuUkVTSVpFX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSxcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0XHRcdClcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTaXplXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy93aW5kb3dTaXplLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgY2FtZXJhID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMy44KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FtZXJhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy9jYW1lcmEuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCB0aW1lID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRlbGFwc2VkOiAwLjAsXG5cdFx0ZHVyYXRpb246IDEuNSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5VUERBVEVfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICsgMC4wMSxcblx0XHRcdFx0ZHVyYXRpb246IHN0YXRlLmR1cmF0aW9uLFxuXHRcdFx0fSlcblx0XHRjYXNlIFR5cGVzLlJFU0VUX1RJTUU6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0ZWxhcHNlZDogc3RhdGUuZWxhcHNlZCAqIDAuMCxcblx0XHRcdFx0ZHVyYXRpb246IHN0YXRlLmR1cmF0aW9uLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgcG9pbnRlciA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMC41KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5DTElDS19NRVNIOlxuXHRcdFx0bGV0IHJlY3QgPSBhY3Rpb24uZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdChhY3Rpb24uZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGFjdGlvbi5lLnRhcmdldC53aWR0aCxcblx0XHRcdFx0XHQoYWN0aW9uLmUudGFyZ2V0LmhlaWdodCAtIGFjdGlvbi5lLmNsaWVudFkgKyByZWN0LnRvcCkgLyBhY3Rpb24uZS50YXJnZXQuaGVpZ2h0LFxuXHRcdFx0XHQpLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwb2ludGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy9wb2ludGVyLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgaW1hZ2UgPSAoXG5cdHN0YXRlID0ge1xuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHQvLyBjYXNlIFR5cGVzLkxPQURJTkc6XG5cdFx0Ly8gXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHQvLyBcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHQvLyBcdH0pXG5cdFx0Ly8gY2FzZSBUeXBlcy5MT0FERUQ6XG5cdFx0Ly8gXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHQvLyBcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0Ly8gXHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvcmVkdWNlcnMvaW1hZ2UuanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZSdcblxuaW1wb3J0IHtyZXNpemVXaW5kb3d9IGZyb20gJy4uL2FjdGlvbnMvcmVzaXplV2luZG93J1xuaW1wb3J0IHt1cGRhdGVUaW1lLCByZXNldFRpbWV9IGZyb20gJy4uL2FjdGlvbnMvdGltZSdcbmltcG9ydCB7Y2xpY2tNZXNofSBmcm9tICcuLi9hY3Rpb25zL2NsaWNrTWVzaCdcbmltcG9ydCB7bW92ZU1vdXNlfSBmcm9tICcuLi9hY3Rpb25zL21vdmVNb3VzZSdcbmltcG9ydCB7bG9hZGluZywgbG9hZGVkfSBmcm9tICcuLi9hY3Rpb25zL2xvYWQnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXHRyZXR1cm4ge1xuXHRcdGxvYWRpbmc6IHN0YXRlLmxvYWQubG9hZGluZyxcblx0XHR3aWR0aDogY29udGVudC5jbGllbnRXaWR0aCxcblx0XHRoZWlnaHQ6IGNvbnRlbnQuY2xpZW50SGVpZ2h0LFxuXHRcdHdpbmRvd1dpZHRoOiBzdGF0ZS53aW5kb3dTaXplLngsXG5cdFx0d2luZG93SGVpZ2h0OiBzdGF0ZS53aW5kb3dTaXplLnksXG5cdFx0Y2FtZXJhUG9zaXRpb246IHN0YXRlLmNhbWVyYS5wb3NpdGlvbixcblx0XHRlbGFwc2VkOiBzdGF0ZS50aW1lLmVsYXBzZWQsXG5cdFx0ZHVyYXRpb246IHN0YXRlLnRpbWUuZHVyYXRpb24sXG5cdFx0cG9pbnRlclBvc2l0aW9uOiBzdGF0ZS5wb2ludGVyLnBvc2l0aW9uLFxuXHRcdC8vIG1vdXNlOiBzdGF0ZS5tb3VzZS50YXJnZXQsXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0b25Mb2FkaW5nOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnTG9hZGluZy4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkaW5nKCkpXG5cdFx0fSxcblx0XHRvbkxvYWRlZDogKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2xvYWRlZC4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkZWQoKSlcblx0XHR9LFxuXHRcdG9uUmVzaXplOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzaXplV2luZG93KGUpKVxuXHRcdH0sXG5cdFx0b25VcGRhdGVUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVUaW1lKCkpXG5cdFx0fSxcblx0XHRvblJlc2V0VGltZTogKCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzZXRUaW1lKCkpXG5cdFx0fSxcblx0XHRvbkNsaWNrTWVzaDogKGUpID0+IHtcblx0XHRcdGRpc3BhdGNoKGNsaWNrTWVzaChlKSlcblx0XHR9LFxuXHRcdC8vIG9uTW92ZU1vdXNlOiAoZSkgPT4ge1xuXHRcdC8vIFx0ZGlzcGF0Y2gobW92ZU1vdXNlKGUpKVxuXHRcdC8vIH0sXG5cdH1cbn1cblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbWFnZSlcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJ1xuXG5pbXBvcnQgTW91c2VJbnB1dCBmcm9tICcuLi9saWIvTW91c2VJbnB1dCdcblxuaW1wb3J0IHZzIGZyb20gJy4uL2dsc2wvaW1hZ2UudmVydCdcbmltcG9ydCBmcyBmcm9tICcuLi9nbHNsL2ltYWdlLmZyYWcnXG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5vbkxvYWRpbmcgPSA6OnRoaXMucHJvcHMub25Mb2FkaW5nXG5cdFx0dGhpcy5vbkxvYWRlZCA9IDo6dGhpcy5wcm9wcy5vbkxvYWRlZFxuXHRcdHRoaXMub25SZXNpemUgPSA6OnRoaXMucHJvcHMub25SZXNpemVcblx0XHR0aGlzLm9uVXBkYXRlVGltZSA9IDo6dGhpcy5wcm9wcy5vblVwZGF0ZVRpbWVcblx0XHQvLyB0aGlzLm9uTW92ZU1vdXNlID0gOjp0aGlzLnByb3BzLm9uTW92ZU1vdXNlXG5cdFx0dGhpcy5vblJlc2V0VGltZSA9IDo6dGhpcy5wcm9wcy5vblJlc2V0VGltZVxuXHRcdHRoaXMub25DbGlja01lc2ggPSA6OnRoaXMucHJvcHMub25DbGlja01lc2hcblxuXHRcdHRoaXMudGV4dHVyZXMgPSB7XG5cdFx0XHRcIm1haW5cIjoge1xuXHRcdFx0XHR1cmw6IFwiLi4vYXNzZXRzL2ltZy9yaXBwbGUvY2F0Mi5qcGdcIlxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIExpZmVDeWNsZSAqL1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdFx0XHQvLyB0aGlzLmhhbmRsZU1vdXNlTW92ZSgpXG5cdFx0XHRcdHRoaXMuc2V0TW91c2VJbnB1dCgpXG5cdFx0XHRcdHRoaXMuaGFuZGxlUmVzaXplKClcblxuXHRcdFx0fSwgMzAwKVxuXHRcdH0pXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUobmV3UHJvcHMpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRtb3VzZUlucHV0LFxuXHRcdH0gPSB0aGlzLnJlZnM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHR3aW5kb3dXaWR0aCxcblx0XHRcdHdpbmRvd0hlaWdodCxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmICh3aW5kb3dXaWR0aCAhPT0gbmV3UHJvcHMud2luZG93V2lkdGggfHwgd2luZG93SGVpZ2h0ICE9PSBuZXdQcm9wcy53aW5kb3dIZWlnaHQpIHtcblx0XHRcdG1vdXNlSW5wdXQuY29udGFpbmVyUmVzaXplZCgpO1xuXHRcdH1cblx0fVxuXG5cblx0LyogY3VzdG9tIEZ1bmN0aW9uICAqL1xuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhpcy5vbkxvYWRpbmcoKVxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmxvYWRUZXh0dXJlKClcblx0XHRcdHJlc29sdmUoKVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0TW91c2VJbnB1dCgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRtb3VzZUlucHV0LFxuXHRcdFx0Y29udGFpbmVyXG5cdFx0fSA9IHRoaXMucmVmcztcblxuXHRcdGlmICghbW91c2VJbnB1dC5pc1JlYWR5KCkpIHtcblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0c2NlbmUsXG5cdFx0XHRcdGNhbWVyYSxcblx0XHRcdH0gPSB0aGlzLnJlZnM7XG5cblx0XHRcdG1vdXNlSW5wdXQucmVhZHkoc2NlbmUsIGNvbnRhaW5lciwgY2FtZXJhKTtcblx0XHRcdC8vIG1vdXNlSW5wdXQucmVzdHJpY3RJbnRlcnNlY3Rpb25zKGltYWdlTWVzaCk7XG5cdFx0XHRtb3VzZUlucHV0LnNldEFjdGl2ZShmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlUmVzaXplKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSlcblx0fVxuXG5cdC8vIGhhbmRsZU1vdXNlTW92ZSgpIHtcblx0Ly8gXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdmVNb3VzZSwgZmFsc2UpXG5cdC8vIFx0fVxuXG5cdGhhbmRsZUNsaWNrKGUpIHtcblx0XHR0aGlzLm9uUmVzZXRUaW1lKClcblx0XHR0aGlzLm9uQ2xpY2tNZXNoKGUpXG5cdH1cblxuXHRoYW5kbGVBbmltYXRlKCkge1xuXHRcdHRoaXMub25VcGRhdGVUaW1lKClcblx0fVxuXG5cdGxvYWRUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKClcblx0XHRsb2FkZXIuY3Jvc3NPcmlnaW4gPSAnKidcblx0XHRmb3IgKGxldCBuYW1lIGluIHRoaXMudGV4dHVyZXMpIHtcblx0XHRcdGxvYWRlci5sb2FkKHRoaXMudGV4dHVyZXNbbmFtZV0udXJsLCAodGV4dHVyZSkgPT4ge1xuIFx0XHRcdHRoaXMudGV4dHVyZXNbbmFtZV0udGV4dHVyZSA9IHRleHR1cmVcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtsb2FkaW5nLCB3aWR0aCwgaGVpZ2h0LCBjYW1lcmFQb3NpdGlvbiwgZWxhcHNlZCwgZHVyYXRpb24sIHBvaW50ZXJQb3NpdGlvbn0gPSB0aGlzLnByb3BzXG5cblx0XHRpZiAobG9hZGluZykgcmV0dXJuKDxoMj5Mb2FkaW5nLi4uPC9oMj4pXG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IHJlZj1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8UmVhY3QzXG5cdFx0XHRcdFx0bWFpbkNhbWVyYT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0XHRcdGhlaWdodD17aGVpZ2h0fVxuXHRcdFx0XHRcdG9uQW5pbWF0ZT17Ojp0aGlzLmhhbmRsZUFuaW1hdGV9XG5cdFx0XHRcdFx0Y2xlYXJDb2xvcj17MHgwMDAwMDB9XG5cdFx0XHRcdFx0YW50aWFsaWFzPXt0cnVlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG1vZHVsZVxuXHRcdFx0XHRcdFx0cmVmPVwibW91c2VJbnB1dFwiXG5cdFx0XHRcdFx0XHRkZXNjcmlwdG9yPXtNb3VzZUlucHV0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PHNjZW5lXG5cdFx0XHRcdFx0XHRyZWY9XCJzY2VuZVwiXG5cdFx0XHRcdFx0XHQvLyBmb2c9e25ldyBUSFJFRS5Gb2coMHgyMjIyMjIsIDAuNiwgMi44KX1cblx0XHRcdFx0XHQ+XG5cblx0XHRcdFx0XHRcdHsvKiBIZWxwZXIgKi99XG5cdFx0XHRcdFx0XHR7LyogPGF4aXNIZWxwZXIgLz4gKi99XG5cblx0XHRcdFx0XHRcdHsvKiBDYW1lcmEgKi99XG5cdFx0XHRcdFx0XHQ8cGVyc3BlY3RpdmVDYW1lcmFcblx0XHRcdFx0XHRcdFx0cmVmPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0XHRcdGZvdj17MTV9XG5cdFx0XHRcdFx0XHRcdGFzcGVjdD17d2lkdGggLyBoZWlnaHR9XG5cdFx0XHRcdFx0XHRcdG5lYXI9ezAuMDF9XG5cdFx0XHRcdFx0XHRcdGZhcj17MTAwMH1cblx0XHRcdFx0XHRcdFx0cG9zaXRpb249e2NhbWVyYVBvc2l0aW9ufVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIExpZ2h0ICovfVxuXHRcdFx0XHRcdFx0PGhlbWlzcGhlcmVMaWdodFxuXHRcdFx0XHRcdFx0XHRza3lDb2xvcj17MHhmZmZmYmJ9XG5cdFx0XHRcdFx0XHRcdGdyb3VuZENvbG9yPXsweDg4Nzk3OX1cblx0XHRcdFx0XHRcdFx0aW50ZW5zaXR5PXswLjl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpcmVjdGlvbmFsTGlnaHRcblx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZmZmZmZmfVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBoZWxwZXIgTWVzaCovfVxuXHRcdFx0XHRcdFx0ey8qIDxtZXNoPlxuXHRcdFx0XHRcdFx0XHRcdDxib3hHZW9tZXRyeVxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxfVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MX1cblx0XHRcdFx0XHRcdFx0XHRkZXB0aD17MX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PG1lc2hCYXNpY01hdGVyaWFsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZWVlZWVlfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9tZXNoPiAqL31cblxuXHRcdFx0XHRcdFx0ey8qIEltYWdlIE1lc2ggKi99XG5cdFx0XHRcdFx0XHQ8bWVzaFxuXHRcdFx0XHRcdFx0XHRyZWY9J2ltYWdlTWVzaCdcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxwbGFuZUdlb21ldHJ5XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8c2hhZGVyTWF0ZXJpYWxcblx0XHRcdFx0XHRcdFx0XHR2ZXJ0ZXhTaGFkZXI9e3ZzfVxuXHRcdFx0XHRcdFx0XHRcdGZyYWdtZW50U2hhZGVyPXtmc31cblx0XHRcdFx0XHRcdFx0XHRibGVuZGluZz17VEhSRUUuTm9ybWFsQmxlbmRpbmd9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybXM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsndGV4dHVyZSd9IHR5cGU9eyd0J30gdmFsdWU9e3RoaXMudGV4dHVyZXNbJ21haW4nXS50ZXh0dXJlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J3RpbWUnfSB0eXBlPXsnZid9IHZhbHVlPXtlbGFwc2VkfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2R1cmF0aW9uJ30gdHlwZT17J2YnfSB2YWx1ZT17ZHVyYXRpb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnbW91c2UnfSB0eXBlPXsndmVjMid9IHZhbHVlPXtwb2ludGVyUG9zaXRpb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC91bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0PC9zaGFkZXJNYXRlcmlhbD5cblxuXHRcdFx0XHRcdFx0PC9tZXNoPlxuXG5cdFx0XHRcdFx0PC9zY2VuZT5cblx0XHRcdFx0PC9SZWFjdDM+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJpbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBSZWFjdFVwZGF0ZXMgZnJvbSAncmVhY3QtZG9tL2xpYi9SZWFjdFVwZGF0ZXMnO1xuXG5pbXBvcnQgU3ludGhldGljTW91c2VFdmVudCBmcm9tICdyZWFjdC1kb20vbGliL1N5bnRoZXRpY01vdXNlRXZlbnQnO1xuXG5pbXBvcnQgTW9kdWxlIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyL2xpYi9Nb2R1bGUnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3JlYWN0L2xpYi9SZWFjdFByb3BUeXBlcyc7XG5cbmNvbnN0IHRlbXBWZWN0b3IyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuY29uc3QgbGlzdGVuZXJDYWxsYmFja05hbWVzID0ge1xuICBtb3VzZWRvd246ICdvbk1vdXNlRG93bicsXG4gIG1vdXNldXA6ICdvbk1vdXNlVXAnLFxufTtcblxuY29uc3QgbW91c2VFdmVudHMgPSBbXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uTW91c2VEb3duJyxcbiAgJ29uTW91c2VVcCcsXG4gICdvbkNsaWNrJyxcbl07XG5cbmNvbnN0IGJvb2xQcm9wcyA9IHtcbiAgaWdub3JlUG9pbnRlckV2ZW50czogZmFsc2UsXG59O1xuXG5jbGFzcyBNb3VzZUlucHV0IGV4dGVuZHMgTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lzUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCA9IG51bGw7XG5cbiAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMgPSBbXTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgc2V0dXAocmVhY3QzUmVuZGVyZXJJbnN0YW5jZSkge1xuICAgIHN1cGVyLnNldHVwKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UpO1xuXG4gICAgY29uc3QgT2JqZWN0M0REZXNjcmlwdG9yID0gcmVhY3QzUmVuZGVyZXJJbnN0YW5jZS50aHJlZUVsZW1lbnREZXNjcmlwdG9ycy5vYmplY3QzRC5jb25zdHJ1Y3RvcjtcblxuICAgIE9iamVjdC52YWx1ZXMocmVhY3QzUmVuZGVyZXJJbnN0YW5jZS50aHJlZUVsZW1lbnREZXNjcmlwdG9ycykuZm9yRWFjaChlbGVtZW50RGVzY3JpcHRvciA9PiB7XG4gICAgICBpZiAoZWxlbWVudERlc2NyaXB0b3IgaW5zdGFuY2VvZiBPYmplY3QzRERlc2NyaXB0b3IpIHtcbiAgICAgICAgbW91c2VFdmVudHMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLmhhc0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGJvb2xQcm9wcykuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgICAgZWxlbWVudERlc2NyaXB0b3IuaGFzUHJvcChwcm9wTmFtZSwge1xuICAgICAgICAgICAgdHlwZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICB1cGRhdGUodGhyZWVPYmplY3QsIHZhbHVlLCBoYXNQcm9wKSB7XG4gICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhyZWVPYmplY3QudXNlckRhdGFbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyZWVPYmplY3QudXNlckRhdGFbcHJvcE5hbWVdID0gYm9vbFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJvb2xQcm9wc1twcm9wTmFtZV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycy5wdXNoKGVsZW1lbnREZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzUmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVhZHk7XG4gIH1cblxuICBzZXRBY3RpdmUoYWN0aXZlKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgcmVzdHJpY3RJbnRlcnNlY3Rpb25zKG9iamVjdHMsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zID0gdHJ1ZTtcbiAgICB0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QgPSBvYmplY3RzO1xuXG4gICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSA9IHJlY3Vyc2l2ZTtcbiAgfVxuXG4gIHJlYWR5KHNjZW5lLCBjb250YWluZXIsIGNhbWVyYSkge1xuICAgIHRoaXMuX2lzUmVhZHkgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5fY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuICAgIHRoaXMuX21vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIHRoaXMuX29uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9tb3VzZS5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgIGlmICghdGhpcy5fYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUVudGVyTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwID0ge307XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcblxuICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVyQ2FsbGJhY2tOYW1lcykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgbGV0IGJvdW5kTGlzdGVuZXI7XG5cbiAgICAgIGNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tOYW1lID0gbGlzdGVuZXJDYWxsYmFja05hbWVzW2V2ZW50TmFtZV07XG4gICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgIGJvdW5kTGlzdGVuZXIgPSB0aGlzLl9vbk1vdXNlRG93bi5iaW5kKHRoaXMsIGxpc3RlbmVyQ2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgYm91bmRMaXN0ZW5lciA9IHRoaXMuX29uTW91c2VVcC5iaW5kKHRoaXMsIGxpc3RlbmVyQ2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGJvdW5kTGlzdGVuZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZExpc3RlbmVyLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX29uTW91c2VEb3duID0gKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkgPT4ge1xuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpbnRlcnNlY3Rpb25zLFxuICAgICAgfSA9IHRoaXMuX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCk7XG5cbiAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBpbnRlcnNlY3Rpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9vbk1vdXNlVXAgPSAoY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSA9PiB7XG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgICB9ID0gdGhpcy5faW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KTtcblxuICAgICAgaWYgKCEoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGludGVyc2VjdCBjdXJyZW50IGludGVyc2VjdGlvbnMgd2l0aCB0aGUgaW50ZXJzZWN0aW9ucyBmb3IgY2xpY2tcbiAgICAgICAgLy8gICBjYWxsIHh6aWJpdCBBU0FQIHdlIGhhdmUgYSBnb29kIG9uZSBzb25cbiAgICAgICAgLy8gICAgIGl0IHdhc24ndCB0aGF0IGdvb2RcblxuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25VVUlETWFwID0gdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrLnJlZHVjZSgobWFwLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICAgICAgICBtYXBbaW50ZXJzZWN0aW9uLm9iamVjdC51dWlkXSA9IGludGVyc2VjdGlvbjtcblxuICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbaV07XG5cbiAgICAgICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICAgICAgY29uc3QgdXVpZCA9IG9iamVjdC51dWlkO1xuXG4gICAgICAgICAgaWYgKGludGVyc2VjdGlvblVVSURNYXBbdXVpZF0pIHtcbiAgICAgICAgICAgIC8vIG9oIGJveSBvaCBib3kgaGVyZSB3ZSBnbywgd2UgZ290IGEgY2xpY2tlclxuXG4gICAgICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyXG4gICAgICAgICAgICAgIC5kaXNwYXRjaEV2ZW50KG9iamVjdCwgJ29uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ2NsaWNrJywgZXZlbnQpLCBpbnRlcnNlY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcbiAgfTtcblxuICBfY3JlYXRlU3ludGhldGljTW91c2VFdmVudChldmVudFR5cGUsIHByb3RvdHlwZSkge1xuICAgIHJldHVybiBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChudWxsLCBudWxsLFxuICAgICAgbmV3IE1vdXNlRXZlbnQoZXZlbnRUeXBlLCBwcm90b3R5cGUpLCBwcm90b3R5cGUudGFyZ2V0KTtcbiAgfVxuXG4gIF9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBldmVudCA9IFN5bnRoZXRpY01vdXNlRXZlbnQuZ2V0UG9vbGVkKG51bGwsIG51bGwsIG1vdXNlRXZlbnQsIG1vdXNlRXZlbnQudGFyZ2V0KTtcblxuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9nZXRJbnRlcnNlY3Rpb25zKHRlbXBWZWN0b3IyLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKSk7XG5cbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbaV07XG5cbiAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChvYmplY3QsIGNhbGxiYWNrTmFtZSwgZXZlbnQsIGludGVyc2VjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQsXG4gICAgICBpbnRlcnNlY3Rpb25zLFxuICAgIH07XG4gIH1cblxuICBfZ2V0SW50ZXJzZWN0aW9ucyhtb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBpZiAodGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHModGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0LFxuICAgICAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCh0aGlzLl9zY2VuZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1RIUkVFLlZlY3RvcjJ9IG1vdXNlQ29vcmRzIHVzdWFsbHkgYW4gZXZlbnQncyBjbGllbnRYIGFuZCBjbGllbnRZXG4gICAqIEByZXR1cm5zIHtUSFJFRS5SYXl9XG4gICAqL1xuICBnZXRDYW1lcmFSYXkobW91c2VDb29yZHMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICBjb25zdCBvcmlnaW5hbFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBjb25zdCByZXN1bHRSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIucmF5LmNvcHkob3JpZ2luYWxSYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFJheTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgaW50ZXJzZWN0T2JqZWN0KG1vdXNlQ29vcmRzLCBvYmplY3QsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3Qob2JqZWN0LCByZWN1cnNpdmUpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnJheS5jb3B5KG9yaWdpbmFsUmF5KTtcblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICB9XG5cbiAgY29udGFpbmVyUmVzaXplZCgpIHtcbiAgICB0aGlzLl9jb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5faXNSZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUVudGVyTGVhdmUoKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlRW50ZXJMZWF2ZSgpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fZ2V0SW50ZXJzZWN0aW9ucyh0aGlzLl9tb3VzZSk7XG5cbiAgICBjb25zdCBob3Zlck1hcFRvVXBkYXRlID0ge1xuICAgICAgLi4udGhpcy5faG92ZXJPYmplY3RNYXAsXG4gICAgfTtcblxuICAgIGNvbnN0IG1vdXNlRW50ZXJFdmVudCA9IHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ21vdXNlRW50ZXInLCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIGNsaWVudFg6IHRoaXMuX21vdXNlLngsXG4gICAgICBjbGllbnRZOiB0aGlzLl9tb3VzZS55LFxuICAgIH0pO1xuXG4gICAgLy8gZmluZCBmaXJzdCBpbnRlcnNlY3Rpb24gdGhhdCBkb2VzIG5vdCBpZ25vcmUgcG9pbnRlciBldmVudHNcbiAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsrZGVwdGgpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbZGVwdGhdO1xuICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgaWYgKG9iamVjdC51c2VyRGF0YSAmJiBvYmplY3QudXNlckRhdGEuaWdub3JlUG9pbnRlckV2ZW50cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXVpZCA9IG9iamVjdC51dWlkO1xuXG4gICAgICBpZiAodGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0pIHtcbiAgICAgICAgZGVsZXRlIGhvdmVyTWFwVG9VcGRhdGVbdXVpZF07XG5cbiAgICAgICAgLy8ganVzdCB1cGRhdGUgdGhhdCBpbnRlcnNlY3Rpb25cbiAgICAgICAgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0uaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0gPSB7XG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgIGludGVyc2VjdGlvbixcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIShtb3VzZUVudGVyRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgbW91c2VFbnRlckV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KG9iamVjdCwgJ29uTW91c2VFbnRlcicsXG4gICAgICAgICAgICBtb3VzZUVudGVyRXZlbnQsIGludGVyc2VjdGlvbiwgZGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGhhdmUgZm91bmQgdGhlIGZpcnN0IHNvbGlkIGludGVyc2VjdGlvbiwgZG9uJ3QgZ28gZnVydGhlclxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VMZWF2ZUV2ZW50ID0gdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnbW91c2VMZWF2ZScsIHtcbiAgICAgIHRhcmdldDogdGhpcy5fY29udGFpbmVyLFxuICAgICAgY2xpZW50WDogdGhpcy5fbW91c2UueCxcbiAgICAgIGNsaWVudFk6IHRoaXMuX21vdXNlLnksXG4gICAgfSk7XG5cbiAgICAvLyBkZWxldGUgYWxsIHVuc2VlbiB1dWlkcyBpbiBob3ZlciBtYXBcbiAgICBjb25zdCB1bnNlZW5VVUlEcyA9IE9iamVjdC5rZXlzKGhvdmVyTWFwVG9VcGRhdGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNlZW5VVUlEcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgdXVpZCA9IHVuc2VlblVVSURzW2ldO1xuXG4gICAgICBpZiAoIShtb3VzZUxlYXZlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgbW91c2VMZWF2ZUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudCh0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXS5vYmplY3QsXG4gICAgICAgICAgJ29uTW91c2VMZWF2ZScsIG1vdXNlTGVhdmVFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXTtcbiAgICB9XG4gIH1cblxuICBfZ2V0UmVsYXRpdmVNb3VzZUNvb3JkcyhzY3JlZW5Nb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXJSZWN0O1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHNjcmVlbk1vdXNlQ29vcmRzLmNsb25lKClcbiAgICAgIC5zdWIodGVtcFZlY3RvcjIuc2V0KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApKVxuICAgICAgLmRpdmlkZSh0ZW1wVmVjdG9yMi5zZXQoY29udGFpbmVyUmVjdC53aWR0aCwgY29udGFpbmVyUmVjdC5oZWlnaHQpKTtcblxuICAgIC8vIG1vdXNlLnggPSAoIGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCApICogMiAtIDE7XG4gICAgLy8gbW91c2UueSA9IC0gKCBldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0ICkgKiAyICsgMTtcblxuICAgIHJlbGF0aXZlTW91c2VDb29yZHMueCA9IHJlbGF0aXZlTW91c2VDb29yZHMueCAqIDIgLSAxO1xuICAgIHJlbGF0aXZlTW91c2VDb29yZHMueSA9IC1yZWxhdGl2ZU1vdXNlQ29vcmRzLnkgKiAyICsgMTtcblxuICAgIHJldHVybiByZWxhdGl2ZU1vdXNlQ29vcmRzO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBkaXNwb3NlKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zLmZvckVhY2goY2xlYW51cEZ1bmN0aW9uID0+IGNsZWFudXBGdW5jdGlvbigpKTtcbiAgICBkZWxldGUgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucztcblxuICAgIGRlbGV0ZSB0aGlzLl9vbk1vdXNlTW92ZTtcblxuICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycy5mb3JFYWNoKGVsZW1lbnREZXNjcmlwdG9yID0+IHtcbiAgICAgIGNvbnN0IGFsbFByb3BzID0gT2JqZWN0LmtleXMoYm9vbFByb3BzKVxuICAgICAgICAuY29uY2F0KG1vdXNlRXZlbnRzKTtcblxuICAgICAgYWxsUHJvcHMuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLnJlbW92ZVByb3AocHJvcE5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW91c2VJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL2xpYi9Nb3VzZUlucHV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL2dsc2wvaW1hZ2UudmVydFxuLy8gbW9kdWxlIGlkID0gNTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcbnVuaWZvcm0gZmxvYXQgZHVyYXRpb247XFxudW5pZm9ybSB2ZWMyIG1vdXNlO1xcblxcbnZvaWQgbWFpbigpIHtcXG5cXHR2ZWMyIHV2ID0gdlV2O1xcblxcdHZlYzIgdGV4Q29vcmQgPSB1djtcXG5cXHR2ZWMyIGRlcGFydHVyZSA9IG1vdXNlO1xcblxcdGZsb2F0IGFtcGxpdHVkZSA9IDAuNztcXG5cXHRmbG9hdCB3YXZlTGVuZ3RoT2Zmc2V0ID0gMC4xO1xcblxcdGZsb2F0IHNwZWVkID0gMC44O1xcblxcdGZsb2F0IGVsYXBzZWQgPSBtb2QodGltZSAqIHNwZWVkLCBkdXJhdGlvbik7XFxuXFx0Ly8gZmxvYXQgZWxhcHNlZCA9IHRpbWU7XFxuXFxuXFx0ZmxvYXQgZGlzdCA9IGRpc3RhbmNlKHV2LCBkZXBhcnR1cmUpO1xcblxcblxcdGlmICggKGRpc3QgPD0gKGVsYXBzZWQgKyB3YXZlTGVuZ3RoT2Zmc2V0KSkgJiYgKGRpc3QgPj0gKGVsYXBzZWQgLSB3YXZlTGVuZ3RoT2Zmc2V0KSkgKSB7XFxuXFx0XFx0ZmxvYXQgZGlmZiA9IGFicyhlbGFwc2VkIC0gZGlzdCk7XFxuXFx0XFx0ZmxvYXQgcG93RGlmZiA9IDEuMCAtIHBvdygoZGlmZioxMC4wKSwgYW1wbGl0dWRlKTtcXG5cXG5cXHRcXHRmbG9hdCBkaWZmVGltZSA9IGRpZmYgKiBwb3dEaWZmO1xcblxcdFxcdHRleENvb3JkID0gdXYgKyAodXYgKiBkaWZmVGltZSk7XFxuXFx0fVxcblxcblxcdHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdGV4Q29vcmQpO1xcblxcblxcdGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvZ2xzbC9pbWFnZS5mcmFnXG4vLyBtb2R1bGUgaWQgPSA1NjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZVdpbmRvdyA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUkVTSVpFX1dJTkRPVyxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9hY3Rpb25zL3Jlc2l6ZVdpbmRvdy5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUaW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlVQREFURV9USU1FLFxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCByZXNldFRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUkVTRVRfVElNRSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvYWN0aW9ucy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IGNsaWNrTWVzaCA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuQ0xJQ0tfTUVTSCxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9hY3Rpb25zL2NsaWNrTWVzaC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBtb3ZlTW91c2UgPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLk1PVkVfTU9VU0UsXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvYWN0aW9ucy9tb3ZlTW91c2UuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5MT0FESU5HXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlZCA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5MT0FERURcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvYWN0aW9ucy9sb2FkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==