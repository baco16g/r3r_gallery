webpackJsonp([0],{

/***/ 26:
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

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(47);

var _typeof3 = _interopRequireDefault(_typeof2);

__webpack_require__(64);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactThreeRenderer = __webpack_require__(18);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _reactDom = __webpack_require__(68);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(25);

var _reactRedux = __webpack_require__(30);

var _reducers = __webpack_require__(519);

var _reducers2 = _interopRequireDefault(_reducers);

var _ImageContainer = __webpack_require__(528);

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

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(25);

var _load = __webpack_require__(520);

var _load2 = _interopRequireDefault(_load);

var _windowSize = __webpack_require__(521);

var _windowSize2 = _interopRequireDefault(_windowSize);

var _camera = __webpack_require__(522);

var _camera2 = _interopRequireDefault(_camera);

var _time = __webpack_require__(523);

var _time2 = _interopRequireDefault(_time);

var _mouse = __webpack_require__(524);

var _mouse2 = _interopRequireDefault(_mouse);

var _pointer = __webpack_require__(525);

var _pointer2 = _interopRequireDefault(_pointer);

var _resolution = __webpack_require__(526);

var _resolution2 = _interopRequireDefault(_resolution);

var _image = __webpack_require__(527);

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

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(26);

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

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(26);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(26);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(26);

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

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(26);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(26);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(26);

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

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(26);

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

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(30);

var _Image = __webpack_require__(529);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(533);

var _time = __webpack_require__(534);

var _clickMesh = __webpack_require__(535);

var _moveMouse = __webpack_require__(536);

var _load = __webpack_require__(537);

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

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactThreeRenderer = __webpack_require__(18);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _MouseInput = __webpack_require__(530);

var _MouseInput2 = _interopRequireDefault(_MouseInput);

var _image = __webpack_require__(531);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(532);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(80);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(81);

var _keys2 = _interopRequireDefault(_keys);

var _values = __webpack_require__(84);

var _values2 = _interopRequireDefault(_values);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(43);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(44);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(88);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactThreeRenderer = __webpack_require__(18);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _ReactUpdates = __webpack_require__(19);

var _ReactUpdates2 = _interopRequireDefault(_ReactUpdates);

var _SyntheticMouseEvent = __webpack_require__(60);

var _SyntheticMouseEvent2 = _interopRequireDefault(_SyntheticMouseEvent);

var _Module2 = __webpack_require__(76);

var _Module3 = _interopRequireDefault(_Module2);

var _ReactPropTypes = __webpack_require__(99);

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

/***/ 531:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\nattribute vec3 color;\n\nvoid main() {\n  tc = uv;\n  vcolor = vec4(color, 1.0);\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\n\nuniform sampler2D colorMap;\nuniform sampler2D heightMap;\nuniform float time;\n\n\n// 2D Random\nfloat random (in vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))\n                 * 43758.5453123);\n}\n\n// 2D Noise based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    // Smooth Interpolation\n\n    // Cubic Hermine Curve.  Same as SmoothStep()\n    vec2 u = f*f*(3.0-2.0*f);\n    // u = smoothstep(0.,1.,f);\n\n    // Mix 4 coorners porcentages\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\n\nvoid main(){\n\n\tfloat gradientStep = sin(time) * 0.01 * noise(vec2(time)); // default .0015, min -1., max 1.\n\tfloat advectStep = sin(time) * 0.01 * noise(vec2(time)); // default .0015, min -1., max 1.\n\tfloat flipHeightMap = 0.7; // default 0.7, min 0., max 2.\n\tfloat expand = 1.0; // default 0., min 0., max 1.\n\n\n\tvec4 advectMatrix = vec4(0.1);\n\tvec4 cxp = texture2D(heightMap, vec2(tc.x + gradientStep, flipHeightMap*tc.y));\n\tvec4 cxn = texture2D(heightMap, vec2(tc.x - gradientStep, flipHeightMap*tc.y));\n\tvec4 cyp = texture2D(heightMap, vec2(tc.x, flipHeightMap*(tc.y + gradientStep)));\n\tvec4 cyn = texture2D(heightMap, vec2(tc.x, flipHeightMap*(tc.y - gradientStep)));\n\n\tvec3 grey = vec3(.3, .59, .11);\n\tfloat axp = dot(grey, cxp.xyz);\n\tfloat axn = dot(grey, cxn.xyz);\n\tfloat ayp = dot(grey, cyp.xyz);\n\tfloat ayn = dot(grey, cyn.xyz);\n\n\tvec2 grad = vec2(axp - axn, ayp - ayn);\n\tvec2 newtc = tc + advectStep * normalize(advectMatrix.xy * grad) * expand;\n\n\tgl_FragColor.rgb = texture2D(colorMap, newtc).rgb * vcolor.rgb;\n\tgl_FragColor.a = vcolor.a;\n}\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(26);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
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
exports.resetTime = exports.updateTime = undefined;

var _actiontypes = __webpack_require__(26);

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

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clickMesh = undefined;

var _actiontypes = __webpack_require__(26);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clickMesh = exports.clickMesh = function clickMesh(e) {
	return {
		type: _actiontypes2.default.CLICK_MESH,
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
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(26);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(26);

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

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(7);

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

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(83);
module.exports = __webpack_require__(8).Object.keys;


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(63);
var $keys = __webpack_require__(35);

__webpack_require__(61)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86);
module.exports = __webpack_require__(8).Object.values;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(21);
var $values = __webpack_require__(87)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(35);
var toIObject = __webpack_require__(27);
var isEnum = __webpack_require__(57).f;
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

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(89);

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

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
var $Object = __webpack_require__(8).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(27);
var $getOwnPropertyDescriptor = __webpack_require__(74).f;

__webpack_require__(61)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ })

},[518]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9jb25zdGFudHMvYWN0aW9udHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy93aW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy90aW1lLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL21vdXNlLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvcmVzb2x1dGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9jb250YWluZXJzL0ltYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvbGliL01vdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvZ2xzbC9pbWFnZS52ZXJ0Iiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yL2dsc2wvaW1hZ2UuZnJhZyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9hY3Rpb25zL3Jlc2l6ZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci9hY3Rpb25zL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvYWN0aW9ucy9jbGlja01lc2guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvYWN0aW9ucy9tb3ZlTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3IvYWN0aW9ucy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyJdLCJuYW1lcyI6WyJUeXBlcyIsIlJFU0laRV9XSU5ET1ciLCJNT1ZFX01PVVNFIiwiVVBEQVRFX0NBTUVSQV9QT1NJVElPTiIsIkxPQURJTkciLCJMT0FERUQiLCJVUERBVEVfVElNRSIsIlJFU0VUX1RJTUUiLCJDTElDS19NRVNIIiwic3RvcmUiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZCIsIndpbmRvd1NpemUiLCJjYW1lcmEiLCJ0aW1lIiwibW91c2UiLCJyZXNvbHV0aW9uIiwiaW1hZ2UiLCJzdGF0ZSIsImxvYWRpbmciLCJhY3Rpb24iLCJ0eXBlIiwiVEhSRUUiLCJWZWN0b3IyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJWZWN0b3IzIiwiZWxhcHNlZCIsImR1cmF0aW9uIiwidGFyZ2V0IiwicmVjdCIsImUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3IiwiY2xpZW50WCIsImxlZnQiLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJjbGllbnRZIiwidG9wIiwiY29uc29sZSIsImxvZyIsInBvaW50ZXIiLCJjb250ZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ3aW5kb3dXaWR0aCIsIngiLCJ3aW5kb3dIZWlnaHQiLCJ5IiwiY2FtZXJhUG9zaXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uTG9hZGluZyIsIm9uTG9hZGVkIiwib25SZXNpemUiLCJvblVwZGF0ZVRpbWUiLCJvblJlc2V0VGltZSIsIm9uTW92ZU1vdXNlIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsInByb3BzIiwidGV4dHVyZXMiLCJ1cmwiLCJpbml0aWFsaXplIiwidGhlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVSZXNpemUiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZFRleHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImNyb3NzT3JpZ2luIiwibmFtZSIsInRleHR1cmUiLCJoYW5kbGVBbmltYXRlIiwiTm9ybWFsQmxlbmRpbmciLCJDb21wb25lbnQiLCJ0ZW1wVmVjdG9yMiIsImxpc3RlbmVyQ2FsbGJhY2tOYW1lcyIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZUV2ZW50cyIsImJvb2xQcm9wcyIsImlnbm9yZVBvaW50ZXJFdmVudHMiLCJNb3VzZUlucHV0IiwiX29uTW91c2VEb3duIiwiY2FsbGJhY2tOYW1lIiwibW91c2VFdmVudCIsImJhdGNoZWRVcGRhdGVzIiwiX2ludGVyc2VjdEFuZERpc3BhdGNoIiwiZXZlbnQiLCJpbnRlcnNlY3Rpb25zIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJfaW50ZXJzZWN0aW9uc0ZvckNsaWNrIiwiX29uTW91c2VVcCIsImludGVyc2VjdGlvblVVSURNYXAiLCJyZWR1Y2UiLCJtYXAiLCJpbnRlcnNlY3Rpb24iLCJvYmplY3QiLCJ1dWlkIiwiaSIsImxlbmd0aCIsImV2ZW50RGlzcGF0Y2hlciIsImRpc3BhdGNoRXZlbnQiLCJfY3JlYXRlU3ludGhldGljTW91c2VFdmVudCIsIl9pc1JlYWR5IiwiX2FjdGl2ZSIsIl9yZXN0cmljdEludGVyc2VjdGlvbnMiLCJfb2JqZWN0c1RvSW50ZXJzZWN0IiwiX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUiLCJfcGF0Y2hlZERlc2NyaXB0b3JzIiwicmVhY3QzUmVuZGVyZXJJbnN0YW5jZSIsIk9iamVjdDNERGVzY3JpcHRvciIsInRocmVlRWxlbWVudERlc2NyaXB0b3JzIiwib2JqZWN0M0QiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJlbGVtZW50RGVzY3JpcHRvciIsImhhc0V2ZW50IiwiZXZlbnROYW1lIiwiaGFzUHJvcCIsInByb3BOYW1lIiwiYm9vbCIsInVwZGF0ZSIsInRocmVlT2JqZWN0IiwidmFsdWUiLCJ1c2VyRGF0YSIsImRlZmF1bHQiLCJwdXNoIiwiYWN0aXZlIiwib2JqZWN0cyIsInJlY3Vyc2l2ZSIsInNjZW5lIiwiY29udGFpbmVyIiwiX3NjZW5lIiwiX2NvbnRhaW5lciIsIl9jYW1lcmEiLCJfcmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiX21vdXNlIiwiX29uTW91c2VNb3ZlIiwic2V0IiwiX3VwZGF0ZUVudGVyTGVhdmUiLCJfY29udGFpbmVyUmVjdCIsIl9ob3Zlck9iamVjdE1hcCIsIl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zIiwiYm91bmRMaXN0ZW5lciIsImxpc3RlbmVyQ2FsbGJhY2tOYW1lIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudFR5cGUiLCJwcm90b3R5cGUiLCJnZXRQb29sZWQiLCJNb3VzZUV2ZW50IiwiX2dldEludGVyc2VjdGlvbnMiLCJtb3VzZUNvb3JkcyIsInJlbGF0aXZlTW91c2VDb29yZHMiLCJfZ2V0UmVsYXRpdmVNb3VzZUNvb3JkcyIsInNldEZyb21DYW1lcmEiLCJpbnRlcnNlY3RPYmplY3RzIiwiaW50ZXJzZWN0T2JqZWN0Iiwib3JpZ2luYWxSYXkiLCJyYXkiLCJjbG9uZSIsInJlc3VsdFJheSIsImNvcHkiLCJob3Zlck1hcFRvVXBkYXRlIiwibW91c2VFbnRlckV2ZW50IiwiZGVwdGgiLCJtb3VzZUxlYXZlRXZlbnQiLCJ1bnNlZW5VVUlEcyIsInNjcmVlbk1vdXNlQ29vcmRzIiwiY29udGFpbmVyUmVjdCIsInN1YiIsImRpdmlkZSIsImNsZWFudXBGdW5jdGlvbiIsImFsbFByb3BzIiwiY29uY2F0IiwicmVtb3ZlUHJvcCIsInJlc2l6ZVdpbmRvdyIsInVwZGF0ZVRpbWUiLCJyZXNldFRpbWUiLCJjbGlja01lc2giLCJtb3ZlTW91c2UiLCJsb2FkZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUTtBQUNiQyxnQkFBZSxlQURGO0FBRWJDLGFBQVksWUFGQztBQUdiQyx5QkFBd0Isd0JBSFg7QUFJYkMsVUFBUyxTQUpJO0FBS2JDLFNBQVEsUUFMSztBQU1iQyxjQUFhLGFBTkE7QUFPYkMsYUFBWSxZQVBDO0FBUWJDLGFBQVk7QUFSQyxDQUFkO2tCQVVlUixLOzs7Ozs7Ozs7Ozs7OztBQ1ZmOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1TLFFBQVEsNENBQXNCLG9CQUNuQyxRQUFPQyxNQUFQLHVEQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQThCLE9BQU9BLE9BQU9DLGlCQUFkLEtBQW9DLFdBQWxFLEdBQWdGRCxPQUFPQyxpQkFBUCxFQUFoRixHQUE2RztBQUFBLFFBQUtDLENBQUw7QUFBQSxDQUQxRSxDQUF0QixDQUFkOztBQU1BLG1CQUFTQyxNQUFULENBQ0M7QUFBQTtBQUFBLEdBQVUsT0FBT0osS0FBakI7QUFDQztBQURELENBREQsRUFJRUssU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUpGLEU7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSw0QkFBZ0I7QUFDN0JDLHNCQUQ2QjtBQUU3QkMsa0NBRjZCO0FBRzdCQywwQkFINkI7QUFJ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O0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7OztBQ2ZBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDckNBLGtCQUFrQix3RDs7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXNzZXRzL2pzL3BhZ2VzL3dhdGVyQ29sb3IuNWNlN2FiZDVhNGQ1YWQ3MWMxY2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRNT1ZFX01PVVNFOiAnTU9WRV9NT1VTRScsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0TE9BRElORzogJ0xPQURJTkcnLFxuXHRMT0FERUQ6ICdMT0FERUQnLFxuXHRVUERBVEVfVElNRTogJ1VQREFURV9USU1FJyxcblx0UkVTRVRfVElNRTogJ1JFU0VUX1RJTUUnLFxuXHRDTElDS19NRVNIOiAnQ0xJQ0tfTUVTSCcsXG59XG5leHBvcnQgZGVmYXVsdCBUeXBlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvY29uc3RhbnRzL2FjdGlvbnR5cGVzLmpzIiwiaW1wb3J0ICcuLi8uLi9zdHlsdXMvc3R5bGUuc3R5bCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9JbWFnZUNvbnRhaW5lcidcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgY29tcG9zZShcblx0dHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxuKSk7XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdDxJbWFnZUNvbnRhaW5lci8+XG5cdDwvUHJvdmlkZXI+XG4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvaW5kZXguanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZCdcbmltcG9ydCB3aW5kb3dTaXplIGZyb20gJy4vd2luZG93U2l6ZSdcbmltcG9ydCBjYW1lcmEgZnJvbSAnLi9jYW1lcmEnXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnXG5pbXBvcnQgbW91c2UgZnJvbSAnLi9tb3VzZSdcbmltcG9ydCBwb2ludGVyIGZyb20gJy4vcG9pbnRlcidcbmltcG9ydCByZXNvbHV0aW9uIGZyb20gJy4vcmVzb2x1dGlvbidcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2FkLFxuICB3aW5kb3dTaXplLFxuICBjYW1lcmEsXG4gIHRpbWUsXG4gIG1vdXNlLFxuICAvLyBwb2ludGVyLFxuICByZXNvbHV0aW9uLFxuICBpbWFnZSxcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGxvYWQgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGxvYWRpbmc6IHRydWVcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9sb2FkLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3Qgd2luZG93U2l6ZSA9IChcblx0c3RhdGUgPSBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5SRVNJWkVfV0lORE9XOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLFxuXHRcdFx0XHRuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdFx0KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1NpemVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL3dpbmRvd1NpemUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBjYW1lcmEgPSAoXG5cdHN0YXRlID0ge1xuXHRcdHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAzLjgpLFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW1lcmFcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL2NhbWVyYS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHRpbWUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGVsYXBzZWQ6IDAuMCxcblx0XHRkdXJhdGlvbjogMS41LFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLlVQREFURV9USU1FOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGVsYXBzZWQ6IHN0YXRlLmVsYXBzZWQgKyAwLjAxLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuUkVTRVRfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICogMC4wLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL3RpbWUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBtb3VzZSA9IChcblx0c3RhdGUgPSB7XG5cdFx0dGFyZ2V0OiBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5NT1ZFX01PVVNFOlxuXHRcdFx0bGV0IHJlY3QgPSBhY3Rpb24uZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRsZXQgdyA9IChhY3Rpb24uZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGFjdGlvbi5lLnRhcmdldC53aWR0aDtcblx0XHRcdGxldCBoID0gKGFjdGlvbi5lLnRhcmdldC5oZWlnaHQgLSBhY3Rpb24uZS5jbGllbnRZICsgcmVjdC50b3ApIC8gYWN0aW9uLmUudGFyZ2V0LmhlaWdodDtcblx0XHRcdGNvbnNvbGUubG9nKHN0YXRlLnRhcmdldClcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR0YXJnZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdHcsXG5cdFx0XHRcdFx0aFxuXHRcdFx0XHQpLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3VzZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvbW91c2UuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBwb2ludGVyID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjIoMC41LCAwLjUpLFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLkNMSUNLX01FU0g6XG5cdFx0XHRsZXQgcmVjdCA9IGFjdGlvbi5lLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjIoXG5cdFx0XHRcdFx0KGFjdGlvbi5lLmNsaWVudFggLSByZWN0LmxlZnQpIC8gYWN0aW9uLmUudGFyZ2V0LndpZHRoLFxuXHRcdFx0XHRcdChhY3Rpb24uZS50YXJnZXQuaGVpZ2h0IC0gYWN0aW9uLmUuY2xpZW50WSArIHJlY3QudG9wKSAvIGFjdGlvbi5lLnRhcmdldC5oZWlnaHQsXG5cdFx0XHRcdCksXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvaW50ZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL3JlZHVjZXJzL3BvaW50ZXIuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuY29uc3QgcmVzb2x1dGlvbiA9IChcblx0c3RhdGUgPSB7XG5cdFx0d2lkdGg6IGNvbnRlbnQuY2xpZW50V2lkdGgsXG5cdFx0aGVpZ2h0OiBjb250ZW50LmNsaWVudEhlaWdodCxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHV0aW9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci9yZWR1Y2Vycy9yZXNvbHV0aW9uLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgaW1hZ2UgPSAoXG5cdHN0YXRlID0ge1xuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHQvLyBjYXNlIFR5cGVzLkxPQURJTkc6XG5cdFx0Ly8gXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHQvLyBcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHQvLyBcdH0pXG5cdFx0Ly8gY2FzZSBUeXBlcy5MT0FERUQ6XG5cdFx0Ly8gXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHQvLyBcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0Ly8gXHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvcmVkdWNlcnMvaW1hZ2UuanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZSdcblxuaW1wb3J0IHtyZXNpemVXaW5kb3d9IGZyb20gJy4uL2FjdGlvbnMvcmVzaXplV2luZG93J1xuaW1wb3J0IHt1cGRhdGVUaW1lLCByZXNldFRpbWV9IGZyb20gJy4uL2FjdGlvbnMvdGltZSdcbmltcG9ydCB7Y2xpY2tNZXNofSBmcm9tICcuLi9hY3Rpb25zL2NsaWNrTWVzaCdcbmltcG9ydCB7bW92ZU1vdXNlfSBmcm9tICcuLi9hY3Rpb25zL21vdmVNb3VzZSdcbmltcG9ydCB7bG9hZGluZywgbG9hZGVkfSBmcm9tICcuLi9hY3Rpb25zL2xvYWQnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG5cdHJldHVybiB7XG5cdFx0bG9hZGluZzogc3RhdGUubG9hZC5sb2FkaW5nLFxuXHRcdHdpZHRoOiBzdGF0ZS5yZXNvbHV0aW9uLndpZHRoLFxuXHRcdGhlaWdodDogc3RhdGUucmVzb2x1dGlvbi5oZWlnaHQsXG5cdFx0d2luZG93V2lkdGg6IHN0YXRlLndpbmRvd1NpemUueCxcblx0XHR3aW5kb3dIZWlnaHQ6IHN0YXRlLndpbmRvd1NpemUueSxcblx0XHRjYW1lcmFQb3NpdGlvbjogc3RhdGUuY2FtZXJhLnBvc2l0aW9uLFxuXHRcdGVsYXBzZWQ6IHN0YXRlLnRpbWUuZWxhcHNlZCxcblx0XHRkdXJhdGlvbjogc3RhdGUudGltZS5kdXJhdGlvbixcblx0XHQvLyBwb2ludGVyUG9zaXRpb246IHN0YXRlLnBvaW50ZXIucG9zaXRpb24sXG5cdFx0bW91c2U6IHN0YXRlLm1vdXNlLnRhcmdldCxcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRvbkxvYWRpbmc6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRpbmcoKSlcblx0XHR9LFxuXHRcdG9uTG9hZGVkOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbG9hZGVkLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRlZCgpKVxuXHRcdH0sXG5cdFx0b25SZXNpemU6IChlKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNpemVXaW5kb3coZSkpXG5cdFx0fSxcblx0XHRvblVwZGF0ZVRpbWU6ICgpID0+IHtcblx0XHRcdGRpc3BhdGNoKHVwZGF0ZVRpbWUoKSlcblx0XHR9LFxuXHRcdG9uUmVzZXRUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNldFRpbWUoKSlcblx0XHR9LFxuXHRcdC8vIG9uQ2xpY2tNZXNoOiAoZSkgPT4ge1xuXHRcdC8vIFx0ZGlzcGF0Y2goY2xpY2tNZXNoKGUpKVxuXHRcdC8vIH0sXG5cdFx0b25Nb3ZlTW91c2U6IChlKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChtb3ZlTW91c2UoZSkpXG5cdFx0fSxcblx0fVxufVxuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEltYWdlKVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInXG5cbmltcG9ydCBNb3VzZUlucHV0IGZyb20gJy4uL2xpYi9Nb3VzZUlucHV0J1xuXG5pbXBvcnQgdnMgZnJvbSAnLi4vZ2xzbC9pbWFnZS52ZXJ0J1xuaW1wb3J0IGZzIGZyb20gJy4uL2dsc2wvaW1hZ2UuZnJhZydcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLm9uTG9hZGluZyA9IDo6dGhpcy5wcm9wcy5vbkxvYWRpbmdcblx0XHR0aGlzLm9uTG9hZGVkID0gOjp0aGlzLnByb3BzLm9uTG9hZGVkXG5cdFx0dGhpcy5vblJlc2l6ZSA9IDo6dGhpcy5wcm9wcy5vblJlc2l6ZVxuXHRcdHRoaXMub25VcGRhdGVUaW1lID0gOjp0aGlzLnByb3BzLm9uVXBkYXRlVGltZVxuXHRcdHRoaXMub25Nb3ZlTW91c2UgPSA6OnRoaXMucHJvcHMub25Nb3ZlTW91c2Vcblx0XHQvLyB0aGlzLm9uUmVzZXRUaW1lID0gOjp0aGlzLnByb3BzLm9uUmVzZXRUaW1lXG5cdFx0Ly8gdGhpcy5vbkNsaWNrTWVzaCA9IDo6dGhpcy5wcm9wcy5vbkNsaWNrTWVzaFxuXG5cdFx0dGhpcy50ZXh0dXJlcyA9IHtcblx0XHRcdFwibWFpblwiOiB7XG5cdFx0XHRcdHVybDogXCIuLi9hc3NldHMvaW1nL3dhdGVyQ29sb3Ivc2hvZXMuanBnXCJcblx0XHRcdH0sXG5cdFx0XHRcImdyYXlcIjoge1xuXHRcdFx0XHR1cmw6IFwiLi4vYXNzZXRzL2ltZy93YXRlckNvbG9yL25vaXNlLnBuZ1wiXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyogTGlmZUN5Y2xlICovXG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5pbml0aWFsaXplKCkudGhlbigoKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5vbkxvYWRlZCgpXG5cdFx0XHRcdHRoaXMuaGFuZGxlTW91c2VNb3ZlKClcblx0XHRcdFx0Ly8gdGhpcy5zZXRNb3VzZUlucHV0KClcblx0XHRcdFx0dGhpcy5oYW5kbGVSZXNpemUoKVxuXG5cdFx0XHR9LCAzMDApXG5cdFx0fSlcblx0fVxuXHQvL1xuXHQvLyBjb21wb25lbnREaWRVcGRhdGUobmV3UHJvcHMpIHtcblx0Ly8gXHRjb25zdCB7XG5cdC8vIFx0XHRtb3VzZUlucHV0LFxuXHQvLyBcdH0gPSB0aGlzLnJlZnM7XG5cdC8vXG5cdC8vIFx0Y29uc3Qge1xuXHQvLyBcdFx0d2luZG93V2lkdGgsXG5cdC8vIFx0XHR3aW5kb3dIZWlnaHQsXG5cdC8vIFx0fSA9IHRoaXMucHJvcHM7XG5cdC8vXG5cdC8vIFx0aWYgKHdpbmRvd1dpZHRoICE9PSBuZXdQcm9wcy53aW5kb3dXaWR0aCB8fCB3aW5kb3dIZWlnaHQgIT09IG5ld1Byb3BzLndpbmRvd0hlaWdodCkge1xuXHQvLyBcdFx0bW91c2VJbnB1dC5jb250YWluZXJSZXNpemVkKCk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cblxuXHQvKiBjdXN0b20gRnVuY3Rpb24gICovXG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLm9uTG9hZGluZygpXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMubG9hZFRleHR1cmUoKVxuXHRcdFx0cmVzb2x2ZSgpXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBzZXRNb3VzZUlucHV0KCkge1xuXHQvLyBcdGNvbnN0IHtcblx0Ly8gXHRcdG1vdXNlSW5wdXQsXG5cdC8vIFx0XHRjb250YWluZXJcblx0Ly8gXHR9ID0gdGhpcy5yZWZzO1xuXHQvL1xuXHQvLyBcdGlmICghbW91c2VJbnB1dC5pc1JlYWR5KCkpIHtcblx0Ly8gXHRcdGNvbnN0IHtcblx0Ly8gXHRcdFx0c2NlbmUsXG5cdC8vIFx0XHRcdGNhbWVyYSxcblx0Ly8gXHRcdH0gPSB0aGlzLnJlZnM7XG5cdC8vXG5cdC8vIFx0XHRtb3VzZUlucHV0LnJlYWR5KHNjZW5lLCBjb250YWluZXIsIGNhbWVyYSk7XG5cdC8vIFx0XHQvLyBtb3VzZUlucHV0LnJlc3RyaWN0SW50ZXJzZWN0aW9ucyhpbWFnZU1lc2gpO1xuXHQvLyBcdFx0bW91c2VJbnB1dC5zZXRBY3RpdmUoZmFsc2UpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG5cdGhhbmRsZVJlc2l6ZSgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UpXG5cdH1cblxuXHRoYW5kbGVNb3VzZU1vdmUoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlTW91c2UsIGZhbHNlKVxuXHRcdH1cblxuXHQvLyBoYW5kbGVDbGljayhlKSB7XG5cdC8vIFx0dGhpcy5vblJlc2V0VGltZSgpXG5cdC8vIFx0dGhpcy5vbkNsaWNrTWVzaChlKVxuXHQvLyB9XG5cblx0aGFuZGxlQW5pbWF0ZSgpIHtcblx0XHR0aGlzLm9uVXBkYXRlVGltZSgpXG5cdH1cblxuXHRsb2FkVGV4dHVyZSgpIHtcblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpXG5cdFx0bG9hZGVyLmNyb3NzT3JpZ2luID0gJyonXG5cdFx0Zm9yIChsZXQgbmFtZSBpbiB0aGlzLnRleHR1cmVzKSB7XG5cdFx0XHRsb2FkZXIubG9hZCh0aGlzLnRleHR1cmVzW25hbWVdLnVybCwgKHRleHR1cmUpID0+IHtcbiBcdFx0XHR0aGlzLnRleHR1cmVzW25hbWVdLnRleHR1cmUgPSB0ZXh0dXJlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7bG9hZGluZywgd2lkdGgsIGhlaWdodCwgY2FtZXJhUG9zaXRpb24sIGVsYXBzZWQsIGR1cmF0aW9uLCBtb3VzZX0gPSB0aGlzLnByb3BzXG5cblx0XHRpZiAobG9hZGluZykgcmV0dXJuKDxoMj5Mb2FkaW5nLi4uPC9oMj4pXG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IHJlZj1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8UmVhY3QzXG5cdFx0XHRcdFx0bWFpbkNhbWVyYT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0XHRcdGhlaWdodD17aGVpZ2h0fVxuXHRcdFx0XHRcdG9uQW5pbWF0ZT17Ojp0aGlzLmhhbmRsZUFuaW1hdGV9XG5cdFx0XHRcdFx0Y2xlYXJDb2xvcj17MHgwMDAwMDB9XG5cdFx0XHRcdFx0YW50aWFsaWFzPXt0cnVlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0ey8qIDxtb2R1bGVcblx0XHRcdFx0XHRcdHJlZj1cIm1vdXNlSW5wdXRcIlxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRvcj17TW91c2VJbnB1dH1cblx0XHRcdFx0XHQvPiAqL31cblx0XHRcdFx0XHQ8c2NlbmVcblx0XHRcdFx0XHRcdHJlZj1cInNjZW5lXCJcblx0XHRcdFx0XHRcdC8vIGZvZz17bmV3IFRIUkVFLkZvZygweDIyMjIyMiwgMC42LCAyLjgpfVxuXHRcdFx0XHRcdD5cblxuXHRcdFx0XHRcdFx0ey8qIEhlbHBlciAqL31cblx0XHRcdFx0XHRcdHsvKiA8YXhpc0hlbHBlciAvPiAqL31cblxuXHRcdFx0XHRcdFx0ey8qIENhbWVyYSAqL31cblx0XHRcdFx0XHRcdDxwZXJzcGVjdGl2ZUNhbWVyYVxuXHRcdFx0XHRcdFx0XHRyZWY9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0Zm92PXsxNX1cblx0XHRcdFx0XHRcdFx0YXNwZWN0PXt3aWR0aCAvIGhlaWdodH1cblx0XHRcdFx0XHRcdFx0bmVhcj17MC4wMX1cblx0XHRcdFx0XHRcdFx0ZmFyPXsxMDAwfVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17Y2FtZXJhUG9zaXRpb259XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHR7LyogTGlnaHQgKi99XG5cdFx0XHRcdFx0XHQ8aGVtaXNwaGVyZUxpZ2h0XG5cdFx0XHRcdFx0XHRcdHNreUNvbG9yPXsweGZmZmZiYn1cblx0XHRcdFx0XHRcdFx0Z3JvdW5kQ29sb3I9ezB4ODg3OTc5fVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGlyZWN0aW9uYWxMaWdodFxuXHRcdFx0XHRcdFx0XHRjb2xvcj17MHhmZmZmZmZ9XG5cdFx0XHRcdFx0XHRcdGludGVuc2l0eT17MC44fVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIGhlbHBlciBNZXNoKi99XG5cdFx0XHRcdFx0XHR7LyogPG1lc2g+XG5cdFx0XHRcdFx0XHRcdFx0PGJveEdlb21ldHJ5XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRcdFx0XHRcdGRlcHRoPXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8bWVzaEJhc2ljTWF0ZXJpYWxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj17MHhlZWVlZWV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L21lc2g+ICovfVxuXG5cdFx0XHRcdFx0XHR7LyogSW1hZ2UgTWVzaCAqL31cblx0XHRcdFx0XHRcdDxtZXNoXG5cdFx0XHRcdFx0XHRcdHJlZj0naW1hZ2VNZXNoJ1xuXHRcdFx0XHRcdFx0XHQvLyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHBsYW5lR2VvbWV0cnlcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MX1cblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezF9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxzaGFkZXJNYXRlcmlhbFxuXHRcdFx0XHRcdFx0XHRcdHZlcnRleFNoYWRlcj17dnN9XG5cdFx0XHRcdFx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI9e2ZzfVxuXHRcdFx0XHRcdFx0XHRcdGJsZW5kaW5nPXtUSFJFRS5Ob3JtYWxCbGVuZGluZ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDx1bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydjb2xvck1hcCd9IHR5cGU9eyd0J30gdmFsdWU9e3RoaXMudGV4dHVyZXNbJ21haW4nXS50ZXh0dXJlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2hlaWdodE1hcCd9IHR5cGU9eyd0J30gdmFsdWU9e3RoaXMudGV4dHVyZXNbJ2dyYXknXS50ZXh0dXJlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J3RpbWUnfSB0eXBlPXsnZid9IHZhbHVlPXtlbGFwc2VkfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2R1cmF0aW9uJ30gdHlwZT17J2YnfSB2YWx1ZT17ZHVyYXRpb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnbW91c2UnfSB0eXBlPXsndmVjMid9IHZhbHVlPXttb3VzZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydyZXNvbHV0aW9uJ30gdHlwZT17J3ZlYzInfSB2YWx1ZT17bmV3IFRIUkVFLlZlY3RvcjIod2lkdGgsIGhlaWdodCl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC91bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0PC9zaGFkZXJNYXRlcmlhbD5cblxuXHRcdFx0XHRcdFx0PC9tZXNoPlxuXG5cdFx0XHRcdFx0PC9zY2VuZT5cblx0XHRcdFx0PC9SZWFjdDM+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJpbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBSZWFjdFVwZGF0ZXMgZnJvbSAncmVhY3QtZG9tL2xpYi9SZWFjdFVwZGF0ZXMnO1xuXG5pbXBvcnQgU3ludGhldGljTW91c2VFdmVudCBmcm9tICdyZWFjdC1kb20vbGliL1N5bnRoZXRpY01vdXNlRXZlbnQnO1xuXG5pbXBvcnQgTW9kdWxlIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyL2xpYi9Nb2R1bGUnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3JlYWN0L2xpYi9SZWFjdFByb3BUeXBlcyc7XG5cbmNvbnN0IHRlbXBWZWN0b3IyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuY29uc3QgbGlzdGVuZXJDYWxsYmFja05hbWVzID0ge1xuICBtb3VzZWRvd246ICdvbk1vdXNlRG93bicsXG4gIG1vdXNldXA6ICdvbk1vdXNlVXAnLFxufTtcblxuY29uc3QgbW91c2VFdmVudHMgPSBbXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uTW91c2VEb3duJyxcbiAgJ29uTW91c2VVcCcsXG4gICdvbkNsaWNrJyxcbl07XG5cbmNvbnN0IGJvb2xQcm9wcyA9IHtcbiAgaWdub3JlUG9pbnRlckV2ZW50czogZmFsc2UsXG59O1xuXG5jbGFzcyBNb3VzZUlucHV0IGV4dGVuZHMgTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lzUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCA9IG51bGw7XG5cbiAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMgPSBbXTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgc2V0dXAocmVhY3QzUmVuZGVyZXJJbnN0YW5jZSkge1xuICAgIHN1cGVyLnNldHVwKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UpO1xuXG4gICAgY29uc3QgT2JqZWN0M0REZXNjcmlwdG9yID0gcmVhY3QzUmVuZGVyZXJJbnN0YW5jZS50aHJlZUVsZW1lbnREZXNjcmlwdG9ycy5vYmplY3QzRC5jb25zdHJ1Y3RvcjtcblxuICAgIE9iamVjdC52YWx1ZXMocmVhY3QzUmVuZGVyZXJJbnN0YW5jZS50aHJlZUVsZW1lbnREZXNjcmlwdG9ycykuZm9yRWFjaChlbGVtZW50RGVzY3JpcHRvciA9PiB7XG4gICAgICBpZiAoZWxlbWVudERlc2NyaXB0b3IgaW5zdGFuY2VvZiBPYmplY3QzRERlc2NyaXB0b3IpIHtcbiAgICAgICAgbW91c2VFdmVudHMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLmhhc0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGJvb2xQcm9wcykuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgICAgZWxlbWVudERlc2NyaXB0b3IuaGFzUHJvcChwcm9wTmFtZSwge1xuICAgICAgICAgICAgdHlwZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICB1cGRhdGUodGhyZWVPYmplY3QsIHZhbHVlLCBoYXNQcm9wKSB7XG4gICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhyZWVPYmplY3QudXNlckRhdGFbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyZWVPYmplY3QudXNlckRhdGFbcHJvcE5hbWVdID0gYm9vbFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJvb2xQcm9wc1twcm9wTmFtZV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycy5wdXNoKGVsZW1lbnREZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzUmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVhZHk7XG4gIH1cblxuICBzZXRBY3RpdmUoYWN0aXZlKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgcmVzdHJpY3RJbnRlcnNlY3Rpb25zKG9iamVjdHMsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zID0gdHJ1ZTtcbiAgICB0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QgPSBvYmplY3RzO1xuXG4gICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSA9IHJlY3Vyc2l2ZTtcbiAgfVxuXG4gIHJlYWR5KHNjZW5lLCBjb250YWluZXIsIGNhbWVyYSkge1xuICAgIHRoaXMuX2lzUmVhZHkgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5fY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuICAgIHRoaXMuX21vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIHRoaXMuX29uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9tb3VzZS5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgIGlmICghdGhpcy5fYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUVudGVyTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwID0ge307XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcblxuICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVyQ2FsbGJhY2tOYW1lcykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgbGV0IGJvdW5kTGlzdGVuZXI7XG5cbiAgICAgIGNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tOYW1lID0gbGlzdGVuZXJDYWxsYmFja05hbWVzW2V2ZW50TmFtZV07XG4gICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgIGJvdW5kTGlzdGVuZXIgPSB0aGlzLl9vbk1vdXNlRG93bi5iaW5kKHRoaXMsIGxpc3RlbmVyQ2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgYm91bmRMaXN0ZW5lciA9IHRoaXMuX29uTW91c2VVcC5iaW5kKHRoaXMsIGxpc3RlbmVyQ2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGJvdW5kTGlzdGVuZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZExpc3RlbmVyLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX29uTW91c2VEb3duID0gKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkgPT4ge1xuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpbnRlcnNlY3Rpb25zLFxuICAgICAgfSA9IHRoaXMuX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCk7XG5cbiAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBpbnRlcnNlY3Rpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9vbk1vdXNlVXAgPSAoY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSA9PiB7XG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgICB9ID0gdGhpcy5faW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KTtcblxuICAgICAgaWYgKCEoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGludGVyc2VjdCBjdXJyZW50IGludGVyc2VjdGlvbnMgd2l0aCB0aGUgaW50ZXJzZWN0aW9ucyBmb3IgY2xpY2tcbiAgICAgICAgLy8gICBjYWxsIHh6aWJpdCBBU0FQIHdlIGhhdmUgYSBnb29kIG9uZSBzb25cbiAgICAgICAgLy8gICAgIGl0IHdhc24ndCB0aGF0IGdvb2RcblxuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25VVUlETWFwID0gdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrLnJlZHVjZSgobWFwLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICAgICAgICBtYXBbaW50ZXJzZWN0aW9uLm9iamVjdC51dWlkXSA9IGludGVyc2VjdGlvbjtcblxuICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbaV07XG5cbiAgICAgICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICAgICAgY29uc3QgdXVpZCA9IG9iamVjdC51dWlkO1xuXG4gICAgICAgICAgaWYgKGludGVyc2VjdGlvblVVSURNYXBbdXVpZF0pIHtcbiAgICAgICAgICAgIC8vIG9oIGJveSBvaCBib3kgaGVyZSB3ZSBnbywgd2UgZ290IGEgY2xpY2tlclxuXG4gICAgICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyXG4gICAgICAgICAgICAgIC5kaXNwYXRjaEV2ZW50KG9iamVjdCwgJ29uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ2NsaWNrJywgZXZlbnQpLCBpbnRlcnNlY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcbiAgfTtcblxuICBfY3JlYXRlU3ludGhldGljTW91c2VFdmVudChldmVudFR5cGUsIHByb3RvdHlwZSkge1xuICAgIHJldHVybiBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChudWxsLCBudWxsLFxuICAgICAgbmV3IE1vdXNlRXZlbnQoZXZlbnRUeXBlLCBwcm90b3R5cGUpLCBwcm90b3R5cGUudGFyZ2V0KTtcbiAgfVxuXG4gIF9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBldmVudCA9IFN5bnRoZXRpY01vdXNlRXZlbnQuZ2V0UG9vbGVkKG51bGwsIG51bGwsIG1vdXNlRXZlbnQsIG1vdXNlRXZlbnQudGFyZ2V0KTtcblxuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9nZXRJbnRlcnNlY3Rpb25zKHRlbXBWZWN0b3IyLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKSk7XG5cbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbaV07XG5cbiAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChvYmplY3QsIGNhbGxiYWNrTmFtZSwgZXZlbnQsIGludGVyc2VjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQsXG4gICAgICBpbnRlcnNlY3Rpb25zLFxuICAgIH07XG4gIH1cblxuICBfZ2V0SW50ZXJzZWN0aW9ucyhtb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBpZiAodGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHModGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0LFxuICAgICAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCh0aGlzLl9zY2VuZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1RIUkVFLlZlY3RvcjJ9IG1vdXNlQ29vcmRzIHVzdWFsbHkgYW4gZXZlbnQncyBjbGllbnRYIGFuZCBjbGllbnRZXG4gICAqIEByZXR1cm5zIHtUSFJFRS5SYXl9XG4gICAqL1xuICBnZXRDYW1lcmFSYXkobW91c2VDb29yZHMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICBjb25zdCBvcmlnaW5hbFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBjb25zdCByZXN1bHRSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIucmF5LmNvcHkob3JpZ2luYWxSYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFJheTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgaW50ZXJzZWN0T2JqZWN0KG1vdXNlQ29vcmRzLCBvYmplY3QsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3Qob2JqZWN0LCByZWN1cnNpdmUpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnJheS5jb3B5KG9yaWdpbmFsUmF5KTtcblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICB9XG5cbiAgY29udGFpbmVyUmVzaXplZCgpIHtcbiAgICB0aGlzLl9jb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5faXNSZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUVudGVyTGVhdmUoKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlRW50ZXJMZWF2ZSgpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fZ2V0SW50ZXJzZWN0aW9ucyh0aGlzLl9tb3VzZSk7XG5cbiAgICBjb25zdCBob3Zlck1hcFRvVXBkYXRlID0ge1xuICAgICAgLi4udGhpcy5faG92ZXJPYmplY3RNYXAsXG4gICAgfTtcblxuICAgIGNvbnN0IG1vdXNlRW50ZXJFdmVudCA9IHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ21vdXNlRW50ZXInLCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIGNsaWVudFg6IHRoaXMuX21vdXNlLngsXG4gICAgICBjbGllbnRZOiB0aGlzLl9tb3VzZS55LFxuICAgIH0pO1xuXG4gICAgLy8gZmluZCBmaXJzdCBpbnRlcnNlY3Rpb24gdGhhdCBkb2VzIG5vdCBpZ25vcmUgcG9pbnRlciBldmVudHNcbiAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsrZGVwdGgpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbZGVwdGhdO1xuICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgaWYgKG9iamVjdC51c2VyRGF0YSAmJiBvYmplY3QudXNlckRhdGEuaWdub3JlUG9pbnRlckV2ZW50cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXVpZCA9IG9iamVjdC51dWlkO1xuXG4gICAgICBpZiAodGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0pIHtcbiAgICAgICAgZGVsZXRlIGhvdmVyTWFwVG9VcGRhdGVbdXVpZF07XG5cbiAgICAgICAgLy8ganVzdCB1cGRhdGUgdGhhdCBpbnRlcnNlY3Rpb25cbiAgICAgICAgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0uaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0gPSB7XG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgIGludGVyc2VjdGlvbixcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIShtb3VzZUVudGVyRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgbW91c2VFbnRlckV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KG9iamVjdCwgJ29uTW91c2VFbnRlcicsXG4gICAgICAgICAgICBtb3VzZUVudGVyRXZlbnQsIGludGVyc2VjdGlvbiwgZGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGhhdmUgZm91bmQgdGhlIGZpcnN0IHNvbGlkIGludGVyc2VjdGlvbiwgZG9uJ3QgZ28gZnVydGhlclxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VMZWF2ZUV2ZW50ID0gdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnbW91c2VMZWF2ZScsIHtcbiAgICAgIHRhcmdldDogdGhpcy5fY29udGFpbmVyLFxuICAgICAgY2xpZW50WDogdGhpcy5fbW91c2UueCxcbiAgICAgIGNsaWVudFk6IHRoaXMuX21vdXNlLnksXG4gICAgfSk7XG5cbiAgICAvLyBkZWxldGUgYWxsIHVuc2VlbiB1dWlkcyBpbiBob3ZlciBtYXBcbiAgICBjb25zdCB1bnNlZW5VVUlEcyA9IE9iamVjdC5rZXlzKGhvdmVyTWFwVG9VcGRhdGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNlZW5VVUlEcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgdXVpZCA9IHVuc2VlblVVSURzW2ldO1xuXG4gICAgICBpZiAoIShtb3VzZUxlYXZlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgbW91c2VMZWF2ZUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudCh0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXS5vYmplY3QsXG4gICAgICAgICAgJ29uTW91c2VMZWF2ZScsIG1vdXNlTGVhdmVFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXTtcbiAgICB9XG4gIH1cblxuICBfZ2V0UmVsYXRpdmVNb3VzZUNvb3JkcyhzY3JlZW5Nb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXJSZWN0O1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHNjcmVlbk1vdXNlQ29vcmRzLmNsb25lKClcbiAgICAgIC5zdWIodGVtcFZlY3RvcjIuc2V0KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApKVxuICAgICAgLmRpdmlkZSh0ZW1wVmVjdG9yMi5zZXQoY29udGFpbmVyUmVjdC53aWR0aCwgY29udGFpbmVyUmVjdC5oZWlnaHQpKTtcblxuICAgIC8vIG1vdXNlLnggPSAoIGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCApICogMiAtIDE7XG4gICAgLy8gbW91c2UueSA9IC0gKCBldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0ICkgKiAyICsgMTtcblxuICAgIHJlbGF0aXZlTW91c2VDb29yZHMueCA9IHJlbGF0aXZlTW91c2VDb29yZHMueCAqIDIgLSAxO1xuICAgIHJlbGF0aXZlTW91c2VDb29yZHMueSA9IC1yZWxhdGl2ZU1vdXNlQ29vcmRzLnkgKiAyICsgMTtcblxuICAgIHJldHVybiByZWxhdGl2ZU1vdXNlQ29vcmRzO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBkaXNwb3NlKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zLmZvckVhY2goY2xlYW51cEZ1bmN0aW9uID0+IGNsZWFudXBGdW5jdGlvbigpKTtcbiAgICBkZWxldGUgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucztcblxuICAgIGRlbGV0ZSB0aGlzLl9vbk1vdXNlTW92ZTtcblxuICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycy5mb3JFYWNoKGVsZW1lbnREZXNjcmlwdG9yID0+IHtcbiAgICAgIGNvbnN0IGFsbFByb3BzID0gT2JqZWN0LmtleXMoYm9vbFByb3BzKVxuICAgICAgICAuY29uY2F0KG1vdXNlRXZlbnRzKTtcblxuICAgICAgYWxsUHJvcHMuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLnJlbW92ZVByb3AocHJvcE5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW91c2VJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2xpYi9Nb3VzZUlucHV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB0YztcXG52YXJ5aW5nIHZlYzQgdmNvbG9yO1xcbmF0dHJpYnV0ZSB2ZWMzIGNvbG9yO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIHRjID0gdXY7XFxuICB2Y29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xcbiAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvd2F0ZXJDb2xvci9nbHNsL2ltYWdlLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDUzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHRjO1xcbnZhcnlpbmcgdmVjNCB2Y29sb3I7XFxuXFxudW5pZm9ybSBzYW1wbGVyMkQgY29sb3JNYXA7XFxudW5pZm9ybSBzYW1wbGVyMkQgaGVpZ2h0TWFwO1xcbnVuaWZvcm0gZmxvYXQgdGltZTtcXG5cXG5cXG4vLyAyRCBSYW5kb21cXG5mbG9hdCByYW5kb20gKGluIHZlYzIgc3QpIHtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihkb3Qoc3QueHksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIHZlYzIoMTIuOTg5OCw3OC4yMzMpKSlcXG4gICAgICAgICAgICAgICAgICogNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbi8vIDJEIE5vaXNlIGJhc2VkIG9uIE1vcmdhbiBNY0d1aXJlIEBtb3JnYW4zZFxcbi8vIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy80ZFMzV2RcXG5mbG9hdCBub2lzZSAoaW4gdmVjMiBzdCkge1xcbiAgICB2ZWMyIGkgPSBmbG9vcihzdCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHN0KTtcXG5cXG4gICAgLy8gRm91ciBjb3JuZXJzIGluIDJEIG9mIGEgdGlsZVxcbiAgICBmbG9hdCBhID0gcmFuZG9tKGkpO1xcbiAgICBmbG9hdCBiID0gcmFuZG9tKGkgKyB2ZWMyKDEuMCwgMC4wKSk7XFxuICAgIGZsb2F0IGMgPSByYW5kb20oaSArIHZlYzIoMC4wLCAxLjApKTtcXG4gICAgZmxvYXQgZCA9IHJhbmRvbShpICsgdmVjMigxLjAsIDEuMCkpO1xcblxcbiAgICAvLyBTbW9vdGggSW50ZXJwb2xhdGlvblxcblxcbiAgICAvLyBDdWJpYyBIZXJtaW5lIEN1cnZlLiAgU2FtZSBhcyBTbW9vdGhTdGVwKClcXG4gICAgdmVjMiB1ID0gZipmKigzLjAtMi4wKmYpO1xcbiAgICAvLyB1ID0gc21vb3Roc3RlcCgwLiwxLixmKTtcXG5cXG4gICAgLy8gTWl4IDQgY29vcm5lcnMgcG9yY2VudGFnZXNcXG4gICAgcmV0dXJuIG1peChhLCBiLCB1LngpICtcXG4gICAgICAgICAgICAoYyAtIGEpKiB1LnkgKiAoMS4wIC0gdS54KSArXFxuICAgICAgICAgICAgKGQgLSBiKSAqIHUueCAqIHUueTtcXG59XFxuXFxuXFxudm9pZCBtYWluKCl7XFxuXFxuXFx0ZmxvYXQgZ3JhZGllbnRTdGVwID0gc2luKHRpbWUpICogMC4wMSAqIG5vaXNlKHZlYzIodGltZSkpOyAvLyBkZWZhdWx0IC4wMDE1LCBtaW4gLTEuLCBtYXggMS5cXG5cXHRmbG9hdCBhZHZlY3RTdGVwID0gc2luKHRpbWUpICogMC4wMSAqIG5vaXNlKHZlYzIodGltZSkpOyAvLyBkZWZhdWx0IC4wMDE1LCBtaW4gLTEuLCBtYXggMS5cXG5cXHRmbG9hdCBmbGlwSGVpZ2h0TWFwID0gMC43OyAvLyBkZWZhdWx0IDAuNywgbWluIDAuLCBtYXggMi5cXG5cXHRmbG9hdCBleHBhbmQgPSAxLjA7IC8vIGRlZmF1bHQgMC4sIG1pbiAwLiwgbWF4IDEuXFxuXFxuXFxuXFx0dmVjNCBhZHZlY3RNYXRyaXggPSB2ZWM0KDAuMSk7XFxuXFx0dmVjNCBjeHAgPSB0ZXh0dXJlMkQoaGVpZ2h0TWFwLCB2ZWMyKHRjLnggKyBncmFkaWVudFN0ZXAsIGZsaXBIZWlnaHRNYXAqdGMueSkpO1xcblxcdHZlYzQgY3huID0gdGV4dHVyZTJEKGhlaWdodE1hcCwgdmVjMih0Yy54IC0gZ3JhZGllbnRTdGVwLCBmbGlwSGVpZ2h0TWFwKnRjLnkpKTtcXG5cXHR2ZWM0IGN5cCA9IHRleHR1cmUyRChoZWlnaHRNYXAsIHZlYzIodGMueCwgZmxpcEhlaWdodE1hcCoodGMueSArIGdyYWRpZW50U3RlcCkpKTtcXG5cXHR2ZWM0IGN5biA9IHRleHR1cmUyRChoZWlnaHRNYXAsIHZlYzIodGMueCwgZmxpcEhlaWdodE1hcCoodGMueSAtIGdyYWRpZW50U3RlcCkpKTtcXG5cXG5cXHR2ZWMzIGdyZXkgPSB2ZWMzKC4zLCAuNTksIC4xMSk7XFxuXFx0ZmxvYXQgYXhwID0gZG90KGdyZXksIGN4cC54eXopO1xcblxcdGZsb2F0IGF4biA9IGRvdChncmV5LCBjeG4ueHl6KTtcXG5cXHRmbG9hdCBheXAgPSBkb3QoZ3JleSwgY3lwLnh5eik7XFxuXFx0ZmxvYXQgYXluID0gZG90KGdyZXksIGN5bi54eXopO1xcblxcblxcdHZlYzIgZ3JhZCA9IHZlYzIoYXhwIC0gYXhuLCBheXAgLSBheW4pO1xcblxcdHZlYzIgbmV3dGMgPSB0YyArIGFkdmVjdFN0ZXAgKiBub3JtYWxpemUoYWR2ZWN0TWF0cml4Lnh5ICogZ3JhZCkgKiBleHBhbmQ7XFxuXFxuXFx0Z2xfRnJhZ0NvbG9yLnJnYiA9IHRleHR1cmUyRChjb2xvck1hcCwgbmV3dGMpLnJnYiAqIHZjb2xvci5yZ2I7XFxuXFx0Z2xfRnJhZ0NvbG9yLmEgPSB2Y29sb3IuYTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC93YXRlckNvbG9yL2dsc2wvaW1hZ2UuZnJhZ1xuLy8gbW9kdWxlIGlkID0gNTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCByZXNpemVXaW5kb3cgPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlJFU0laRV9XSU5ET1csXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGltZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5VUERBVEVfVElNRSxcblx0fVxufVxuXG5leHBvcnQgY29uc3QgcmVzZXRUaW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlJFU0VUX1RJTUUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2FjdGlvbnMvdGltZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBjbGlja01lc2ggPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkNMSUNLX01FU0gsXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3IvYWN0aW9ucy9jbGlja01lc2guanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgbW92ZU1vdXNlID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5NT1ZFX01PVVNFLFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2FjdGlvbnMvbW92ZU1vdXNlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTE9BRElOR1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZWQgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTE9BREVEXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yL2FjdGlvbnMvbG9hZC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnZhbHVlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=