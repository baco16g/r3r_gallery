webpackJsonp([1],{

/***/ 27:
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

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(48);

var _typeof3 = _interopRequireDefault(_typeof2);

__webpack_require__(64);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactThreeRenderer = __webpack_require__(18);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _reactDom = __webpack_require__(68);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(25);

var _reactRedux = __webpack_require__(31);

var _reducers = __webpack_require__(539);

var _reducers2 = _interopRequireDefault(_reducers);

var _ImageContainer = __webpack_require__(548);

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

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(25);

var _load = __webpack_require__(540);

var _load2 = _interopRequireDefault(_load);

var _windowSize = __webpack_require__(541);

var _windowSize2 = _interopRequireDefault(_windowSize);

var _camera = __webpack_require__(542);

var _camera2 = _interopRequireDefault(_camera);

var _time = __webpack_require__(543);

var _time2 = _interopRequireDefault(_time);

var _mouse = __webpack_require__(544);

var _mouse2 = _interopRequireDefault(_mouse);

var _pointer = __webpack_require__(545);

var _pointer2 = _interopRequireDefault(_pointer);

var _resolution = __webpack_require__(546);

var _resolution2 = _interopRequireDefault(_resolution);

var _image = __webpack_require__(547);

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

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(27);

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

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(27);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(27);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(27);

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

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(27);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(27);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(27);

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

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(27);

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

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(31);

var _Image = __webpack_require__(549);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(553);

var _time = __webpack_require__(554);

var _clickMesh = __webpack_require__(555);

var _moveMouse = __webpack_require__(556);

var _load = __webpack_require__(557);

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

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(44);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(45);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactThreeRenderer = __webpack_require__(18);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _MouseInput = __webpack_require__(550);

var _MouseInput2 = _interopRequireDefault(_MouseInput);

var _image = __webpack_require__(551);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(552);

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
				url: "../assets/img/waterColor/fukyowaon.jpg"
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
						clearColor: 0xffffff,
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
									blending: THREE.NormalBlending,
									transparent: true
								},
								_react2.default.createElement(
									'uniforms',
									null,
									_react2.default.createElement('uniform', { name: 'colorMap', type: 't', value: this.textures['main'].texture }),
									_react2.default.createElement('uniform', { name: 'heightMap', type: 't', value: this.textures['gray'].texture }),
									_react2.default.createElement('uniform', { name: 'time', type: 'f', value: elapsed }),
									_react2.default.createElement('uniform', { name: 'scroll', type: 'f', value: scroll }),
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),

/***/ 550:
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

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(44);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(45);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(88);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(47);

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

/***/ 551:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\nattribute vec3 color;\n\nvoid main() {\n  tc = uv;\n  vcolor = vec4(color, 1.0);\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\n\nuniform sampler2D colorMap;\nuniform sampler2D heightMap;\nuniform float time;\nuniform vec2 mouse;\n\n\n// 2D Random\nfloat random (in vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))\n                 * 43758.5453123);\n}\n\n// 2D Noise based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    // Four corners in 2D of a tile\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n\n    // Smooth Interpolation\n\n    // Cubic Hermine Curve.  Same as SmoothStep()\n    vec2 u = f*f*(3.0-2.0*f);\n    // u = smoothstep(0.,1.,f);\n\n    // Mix 4 coorners porcentages\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\n\nvoid main(){\n\n  float sefloat = 1.0 - min(time * 0.2, 1.0);\n  vec2 sevec2 = vec2(1.0) - vec2(min(time * 0.5, 1.0));\n  vec3 sevec3 = vec3(min(time * 0.4, 1.0));\n\n\tfloat gradientStep = pow(sefloat, time) * 0.025; // default .0015, min -1., max 1.\n\tfloat advectStep = pow(sefloat, time) * 0.025; // default .0015, min -1., max 1.\n\tfloat flipHeightMap = 0.7; // default 0.7, min 0., max 2.\n\tfloat expand = 1.0;// abs(cos(time * 0.01)); // default 0., min 0., max 1.\n\n\n\tvec4 advectMatrix = vec4(0.1);\n\tvec4 cxp = texture2D(heightMap, vec2(tc.x + gradientStep, flipHeightMap*tc.y));\n\tvec4 cxn = texture2D(heightMap, vec2(tc.x - gradientStep, flipHeightMap*tc.y));\n\tvec4 cyp = texture2D(heightMap, vec2(tc.x, flipHeightMap*(tc.y + gradientStep)));\n\tvec4 cyn = texture2D(heightMap, vec2(tc.x, flipHeightMap*(tc.y - gradientStep)));\n\n\tvec3 grey = vec3(.3, .59, .11);\n\tfloat axp = dot(grey, cxp.xyz);\n\tfloat axn = dot(grey, cxn.xyz);\n\tfloat ayp = dot(grey, cyp.xyz);\n\tfloat ayn = dot(grey, cyn.xyz);\n\n\tvec2 grad = vec2(axp - axn, ayp - ayn);\n\tvec2 newtc = tc + advectStep * normalize(advectMatrix.xy * grad) * expand;\n\n\tvec3 baseColor = texture2D(colorMap, newtc).rgb * vcolor.rgb;\n\n  gl_FragColor.rgb = baseColor * sevec3;\n\n\tgl_FragColor.a = vcolor.a;\n}\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(27);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetTime = exports.updateTime = undefined;

var _actiontypes = __webpack_require__(27);

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

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clickMesh = undefined;

var _actiontypes = __webpack_require__(27);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clickMesh = exports.clickMesh = function clickMesh(e) {
	return {
		type: _actiontypes2.default.CLICK_MESH,
		e: e
	};
};

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(27);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(27);

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
module.exports = __webpack_require__(9).Object.keys;


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(63);
var $keys = __webpack_require__(36);

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
module.exports = __webpack_require__(9).Object.values;


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

var getKeys = __webpack_require__(36);
var toIObject = __webpack_require__(28);
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

var _getPrototypeOf = __webpack_require__(32);

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
var $Object = __webpack_require__(9).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(28);
var $getOwnPropertyDescriptor = __webpack_require__(74).f;

__webpack_require__(61)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ })

},[538]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9sb2FkLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9yZXNvbHV0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9jb250YWluZXJzL0ltYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvY29tcG9uZW50cy9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2xpYi9Nb3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvZ2xzbC9pbWFnZS52ZXJ0Iiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvZ2xzbC9pbWFnZS5mcmFnIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9hY3Rpb25zL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9hY3Rpb25zL2NsaWNrTWVzaC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvbW92ZU1vdXNlLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyJdLCJuYW1lcyI6WyJUeXBlcyIsIlJFU0laRV9XSU5ET1ciLCJNT1ZFX01PVVNFIiwiVVBEQVRFX0NBTUVSQV9QT1NJVElPTiIsIkxPQURJTkciLCJMT0FERUQiLCJVUERBVEVfVElNRSIsIlJFU0VUX1RJTUUiLCJDTElDS19NRVNIIiwic3RvcmUiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZCIsIndpbmRvd1NpemUiLCJjYW1lcmEiLCJ0aW1lIiwibW91c2UiLCJyZXNvbHV0aW9uIiwiaW1hZ2UiLCJzdGF0ZSIsImxvYWRpbmciLCJhY3Rpb24iLCJ0eXBlIiwiVEhSRUUiLCJWZWN0b3IyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJWZWN0b3IzIiwiZWxhcHNlZCIsImR1cmF0aW9uIiwidGFyZ2V0IiwicmVjdCIsImUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3IiwiY2xpZW50WCIsImxlZnQiLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJjbGllbnRZIiwidG9wIiwiY29uc29sZSIsImxvZyIsInBvaW50ZXIiLCJjb250ZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ3aW5kb3dXaWR0aCIsIngiLCJ3aW5kb3dIZWlnaHQiLCJ5IiwiY2FtZXJhUG9zaXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uTG9hZGluZyIsIm9uTG9hZGVkIiwib25SZXNpemUiLCJvblVwZGF0ZVRpbWUiLCJvblJlc2V0VGltZSIsIm9uTW92ZU1vdXNlIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsInByb3BzIiwidGV4dHVyZXMiLCJ1cmwiLCJpbml0aWFsaXplIiwidGhlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVSZXNpemUiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZFRleHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImNyb3NzT3JpZ2luIiwibmFtZSIsInRleHR1cmUiLCJoYW5kbGVBbmltYXRlIiwiTm9ybWFsQmxlbmRpbmciLCJzY3JvbGwiLCJDb21wb25lbnQiLCJ0ZW1wVmVjdG9yMiIsImxpc3RlbmVyQ2FsbGJhY2tOYW1lcyIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZUV2ZW50cyIsImJvb2xQcm9wcyIsImlnbm9yZVBvaW50ZXJFdmVudHMiLCJNb3VzZUlucHV0IiwiX29uTW91c2VEb3duIiwiY2FsbGJhY2tOYW1lIiwibW91c2VFdmVudCIsImJhdGNoZWRVcGRhdGVzIiwiX2ludGVyc2VjdEFuZERpc3BhdGNoIiwiZXZlbnQiLCJpbnRlcnNlY3Rpb25zIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJfaW50ZXJzZWN0aW9uc0ZvckNsaWNrIiwiX29uTW91c2VVcCIsImludGVyc2VjdGlvblVVSURNYXAiLCJyZWR1Y2UiLCJtYXAiLCJpbnRlcnNlY3Rpb24iLCJvYmplY3QiLCJ1dWlkIiwiaSIsImxlbmd0aCIsImV2ZW50RGlzcGF0Y2hlciIsImRpc3BhdGNoRXZlbnQiLCJfY3JlYXRlU3ludGhldGljTW91c2VFdmVudCIsIl9pc1JlYWR5IiwiX2FjdGl2ZSIsIl9yZXN0cmljdEludGVyc2VjdGlvbnMiLCJfb2JqZWN0c1RvSW50ZXJzZWN0IiwiX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUiLCJfcGF0Y2hlZERlc2NyaXB0b3JzIiwicmVhY3QzUmVuZGVyZXJJbnN0YW5jZSIsIk9iamVjdDNERGVzY3JpcHRvciIsInRocmVlRWxlbWVudERlc2NyaXB0b3JzIiwib2JqZWN0M0QiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJlbGVtZW50RGVzY3JpcHRvciIsImhhc0V2ZW50IiwiZXZlbnROYW1lIiwiaGFzUHJvcCIsInByb3BOYW1lIiwiYm9vbCIsInVwZGF0ZSIsInRocmVlT2JqZWN0IiwidmFsdWUiLCJ1c2VyRGF0YSIsImRlZmF1bHQiLCJwdXNoIiwiYWN0aXZlIiwib2JqZWN0cyIsInJlY3Vyc2l2ZSIsInNjZW5lIiwiY29udGFpbmVyIiwiX3NjZW5lIiwiX2NvbnRhaW5lciIsIl9jYW1lcmEiLCJfcmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiX21vdXNlIiwiX29uTW91c2VNb3ZlIiwic2V0IiwiX3VwZGF0ZUVudGVyTGVhdmUiLCJfY29udGFpbmVyUmVjdCIsIl9ob3Zlck9iamVjdE1hcCIsIl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zIiwiYm91bmRMaXN0ZW5lciIsImxpc3RlbmVyQ2FsbGJhY2tOYW1lIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudFR5cGUiLCJwcm90b3R5cGUiLCJnZXRQb29sZWQiLCJNb3VzZUV2ZW50IiwiX2dldEludGVyc2VjdGlvbnMiLCJtb3VzZUNvb3JkcyIsInJlbGF0aXZlTW91c2VDb29yZHMiLCJfZ2V0UmVsYXRpdmVNb3VzZUNvb3JkcyIsInNldEZyb21DYW1lcmEiLCJpbnRlcnNlY3RPYmplY3RzIiwiaW50ZXJzZWN0T2JqZWN0Iiwib3JpZ2luYWxSYXkiLCJyYXkiLCJjbG9uZSIsInJlc3VsdFJheSIsImNvcHkiLCJob3Zlck1hcFRvVXBkYXRlIiwibW91c2VFbnRlckV2ZW50IiwiZGVwdGgiLCJtb3VzZUxlYXZlRXZlbnQiLCJ1bnNlZW5VVUlEcyIsInNjcmVlbk1vdXNlQ29vcmRzIiwiY29udGFpbmVyUmVjdCIsInN1YiIsImRpdmlkZSIsImNsZWFudXBGdW5jdGlvbiIsImFsbFByb3BzIiwiY29uY2F0IiwicmVtb3ZlUHJvcCIsInJlc2l6ZVdpbmRvdyIsInVwZGF0ZVRpbWUiLCJyZXNldFRpbWUiLCJjbGlja01lc2giLCJtb3ZlTW91c2UiLCJsb2FkZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUTtBQUNiQyxnQkFBZSxlQURGO0FBRWJDLGFBQVksWUFGQztBQUdiQyx5QkFBd0Isd0JBSFg7QUFJYkMsVUFBUyxTQUpJO0FBS2JDLFNBQVEsUUFMSztBQU1iQyxjQUFhLGFBTkE7QUFPYkMsYUFBWSxZQVBDO0FBUWJDLGFBQVk7QUFSQyxDQUFkO2tCQVVlUixLOzs7Ozs7Ozs7Ozs7OztBQ1ZmOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1TLFFBQVEsNENBQXNCLG9CQUNuQyxRQUFPQyxNQUFQLHVEQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQThCLE9BQU9BLE9BQU9DLGlCQUFkLEtBQW9DLFdBQWxFLEdBQWdGRCxPQUFPQyxpQkFBUCxFQUFoRixHQUE2RztBQUFBLFFBQUtDLENBQUw7QUFBQSxDQUQxRSxDQUF0QixDQUFkOztBQU1BLG1CQUFTQyxNQUFULENBQ0M7QUFBQTtBQUFBLEdBQVUsT0FBT0osS0FBakI7QUFDQztBQURELENBREQsRUFJRUssU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUpGLEU7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUNBOzs7O0FB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Q0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7O0FDdEJBLGtCQUFrQix3RDs7Ozs7OztBQ0FsQjtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDUkQsa0JBQWtCLHdEOzs7Ozs7O0FDQWxCO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7QUNmQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3JDQSxrQkFBa0Isd0Q7Ozs7Ozs7QUNBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFzc2V0cy9qcy9wYWdlcy93YXRlckNvbG9yLWZhZGUuMzVlOWU1NzdjNTkzYTRkMWJiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRNT1ZFX01PVVNFOiAnTU9WRV9NT1VTRScsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0TE9BRElORzogJ0xPQURJTkcnLFxuXHRMT0FERUQ6ICdMT0FERUQnLFxuXHRVUERBVEVfVElNRTogJ1VQREFURV9USU1FJyxcblx0UkVTRVRfVElNRTogJ1JFU0VUX1RJTUUnLFxuXHRDTElDS19NRVNIOiAnQ0xJQ0tfTUVTSCcsXG59XG5leHBvcnQgZGVmYXVsdCBUeXBlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9jb25zdGFudHMvYWN0aW9udHlwZXMuanMiLCJpbXBvcnQgJy4uLy4uL3N0eWx1cy9zdHlsZS5zdHlsJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0MyBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlcic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0ltYWdlQ29udGFpbmVyJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBjb21wb3NlKFxuXHR0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4pKTtcblxuXG5cblJlYWN0RE9NLnJlbmRlcihcblx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0PEltYWdlQ29udGFpbmVyLz5cblx0PC9Qcm92aWRlcj5cbiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQnXG5pbXBvcnQgd2luZG93U2l6ZSBmcm9tICcuL3dpbmRvd1NpemUnXG5pbXBvcnQgY2FtZXJhIGZyb20gJy4vY2FtZXJhJ1xuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJ1xuaW1wb3J0IG1vdXNlIGZyb20gJy4vbW91c2UnXG5pbXBvcnQgcG9pbnRlciBmcm9tICcuL3BvaW50ZXInXG5pbXBvcnQgcmVzb2x1dGlvbiBmcm9tICcuL3Jlc29sdXRpb24nXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbG9hZCxcbiAgd2luZG93U2l6ZSxcbiAgY2FtZXJhLFxuICB0aW1lLFxuICBtb3VzZSxcbiAgLy8gcG9pbnRlcixcbiAgcmVzb2x1dGlvbixcbiAgaW1hZ2UsXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGxvYWQgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGxvYWRpbmc6IHRydWVcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2xvYWQuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCB3aW5kb3dTaXplID0gKFxuXHRzdGF0ZSA9IG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpLCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLlJFU0laRV9XSU5ET1c6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsXG5cdFx0XHRcdG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cdFx0XHQpXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2luZG93U2l6ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy93aW5kb3dTaXplLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgY2FtZXJhID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMy44KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FtZXJhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2NhbWVyYS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHRpbWUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGVsYXBzZWQ6IDAuMCxcblx0XHRkdXJhdGlvbjogMS41LFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLlVQREFURV9USU1FOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGVsYXBzZWQ6IHN0YXRlLmVsYXBzZWQgKyAwLjAxLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuUkVTRVRfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICogMC4wLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvdGltZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IG1vdXNlID0gKFxuXHRzdGF0ZSA9IHtcblx0XHR0YXJnZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApLFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLk1PVkVfTU9VU0U6XG5cdFx0XHRsZXQgcmVjdCA9IGFjdGlvbi5lLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGxldCB3ID0gKGFjdGlvbi5lLmNsaWVudFggLSByZWN0LmxlZnQpIC8gYWN0aW9uLmUudGFyZ2V0LndpZHRoO1xuXHRcdFx0bGV0IGggPSAoYWN0aW9uLmUudGFyZ2V0LmhlaWdodCAtIGFjdGlvbi5lLmNsaWVudFkgKyByZWN0LnRvcCkgLyBhY3Rpb24uZS50YXJnZXQuaGVpZ2h0O1xuXHRcdFx0Y29uc29sZS5sb2coc3RhdGUudGFyZ2V0KVxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdHRhcmdldDogbmV3IFRIUkVFLlZlY3RvcjIoXG5cdFx0XHRcdFx0dyxcblx0XHRcdFx0XHRoXG5cdFx0XHRcdCksXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdXNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL21vdXNlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgcG9pbnRlciA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMC41KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5DTElDS19NRVNIOlxuXHRcdFx0bGV0IHJlY3QgPSBhY3Rpb24uZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdChhY3Rpb24uZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGFjdGlvbi5lLnRhcmdldC53aWR0aCxcblx0XHRcdFx0XHQoYWN0aW9uLmUudGFyZ2V0LmhlaWdodCAtIGFjdGlvbi5lLmNsaWVudFkgKyByZWN0LnRvcCkgLyBhY3Rpb24uZS50YXJnZXQuaGVpZ2h0LFxuXHRcdFx0XHQpLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwb2ludGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3BvaW50ZXIuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuY29uc3QgcmVzb2x1dGlvbiA9IChcblx0c3RhdGUgPSB7XG5cdFx0d2lkdGg6IGNvbnRlbnQuY2xpZW50V2lkdGgsXG5cdFx0aGVpZ2h0OiBjb250ZW50LmNsaWVudEhlaWdodCxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHV0aW9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3Jlc29sdXRpb24uanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBpbWFnZSA9IChcblx0c3RhdGUgPSB7XG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdC8vIGNhc2UgVHlwZXMuTE9BRElORzpcblx0XHQvLyBcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdC8vIFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdC8vIFx0fSlcblx0XHQvLyBjYXNlIFR5cGVzLkxPQURFRDpcblx0XHQvLyBcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdC8vIFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHQvLyBcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2ltYWdlLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXG5cbmltcG9ydCB7cmVzaXplV2luZG93fSBmcm9tICcuLi9hY3Rpb25zL3Jlc2l6ZVdpbmRvdydcbmltcG9ydCB7dXBkYXRlVGltZSwgcmVzZXRUaW1lfSBmcm9tICcuLi9hY3Rpb25zL3RpbWUnXG5pbXBvcnQge2NsaWNrTWVzaH0gZnJvbSAnLi4vYWN0aW9ucy9jbGlja01lc2gnXG5pbXBvcnQge21vdmVNb3VzZX0gZnJvbSAnLi4vYWN0aW9ucy9tb3ZlTW91c2UnXG5pbXBvcnQge2xvYWRpbmcsIGxvYWRlZH0gZnJvbSAnLi4vYWN0aW9ucy9sb2FkJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuXHRyZXR1cm4ge1xuXHRcdGxvYWRpbmc6IHN0YXRlLmxvYWQubG9hZGluZyxcblx0XHR3aWR0aDogc3RhdGUucmVzb2x1dGlvbi53aWR0aCxcblx0XHRoZWlnaHQ6IHN0YXRlLnJlc29sdXRpb24uaGVpZ2h0LFxuXHRcdHdpbmRvd1dpZHRoOiBzdGF0ZS53aW5kb3dTaXplLngsXG5cdFx0d2luZG93SGVpZ2h0OiBzdGF0ZS53aW5kb3dTaXplLnksXG5cdFx0Y2FtZXJhUG9zaXRpb246IHN0YXRlLmNhbWVyYS5wb3NpdGlvbixcblx0XHRlbGFwc2VkOiBzdGF0ZS50aW1lLmVsYXBzZWQsXG5cdFx0ZHVyYXRpb246IHN0YXRlLnRpbWUuZHVyYXRpb24sXG5cdFx0Ly8gcG9pbnRlclBvc2l0aW9uOiBzdGF0ZS5wb2ludGVyLnBvc2l0aW9uLFxuXHRcdG1vdXNlOiBzdGF0ZS5tb3VzZS50YXJnZXQsXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0b25Mb2FkaW5nOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnTG9hZGluZy4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkaW5nKCkpXG5cdFx0fSxcblx0XHRvbkxvYWRlZDogKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2xvYWRlZC4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkZWQoKSlcblx0XHR9LFxuXHRcdG9uUmVzaXplOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzaXplV2luZG93KGUpKVxuXHRcdH0sXG5cdFx0b25VcGRhdGVUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVUaW1lKCkpXG5cdFx0fSxcblx0XHRvblJlc2V0VGltZTogKCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzZXRUaW1lKCkpXG5cdFx0fSxcblx0XHQvLyBvbkNsaWNrTWVzaDogKGUpID0+IHtcblx0XHQvLyBcdGRpc3BhdGNoKGNsaWNrTWVzaChlKSlcblx0XHQvLyB9LFxuXHRcdG9uTW92ZU1vdXNlOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gobW92ZU1vdXNlKGUpKVxuXHRcdH0sXG5cdH1cbn1cblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbWFnZSlcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInXG5cbmltcG9ydCBNb3VzZUlucHV0IGZyb20gJy4uL2xpYi9Nb3VzZUlucHV0J1xuXG5pbXBvcnQgdnMgZnJvbSAnLi4vZ2xzbC9pbWFnZS52ZXJ0J1xuaW1wb3J0IGZzIGZyb20gJy4uL2dsc2wvaW1hZ2UuZnJhZydcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLm9uTG9hZGluZyA9IDo6dGhpcy5wcm9wcy5vbkxvYWRpbmdcblx0XHR0aGlzLm9uTG9hZGVkID0gOjp0aGlzLnByb3BzLm9uTG9hZGVkXG5cdFx0dGhpcy5vblJlc2l6ZSA9IDo6dGhpcy5wcm9wcy5vblJlc2l6ZVxuXHRcdHRoaXMub25VcGRhdGVUaW1lID0gOjp0aGlzLnByb3BzLm9uVXBkYXRlVGltZVxuXHRcdHRoaXMub25Nb3ZlTW91c2UgPSA6OnRoaXMucHJvcHMub25Nb3ZlTW91c2Vcblx0XHQvLyB0aGlzLm9uUmVzZXRUaW1lID0gOjp0aGlzLnByb3BzLm9uUmVzZXRUaW1lXG5cdFx0Ly8gdGhpcy5vbkNsaWNrTWVzaCA9IDo6dGhpcy5wcm9wcy5vbkNsaWNrTWVzaFxuXG5cdFx0dGhpcy50ZXh0dXJlcyA9IHtcblx0XHRcdFwibWFpblwiOiB7XG5cdFx0XHRcdHVybDogXCIuLi9hc3NldHMvaW1nL3dhdGVyQ29sb3IvZnVreW93YW9uLmpwZ1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJncmF5XCI6IHtcblx0XHRcdFx0dXJsOiBcIi4uL2Fzc2V0cy9pbWcvd2F0ZXJDb2xvci9ub2lzZS5wbmdcIlxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIExpZmVDeWNsZSAqL1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdFx0XHR0aGlzLmhhbmRsZU1vdXNlTW92ZSgpXG5cdFx0XHRcdC8vIHRoaXMuc2V0TW91c2VJbnB1dCgpXG5cdFx0XHRcdHRoaXMuaGFuZGxlUmVzaXplKClcblxuXHRcdFx0fSwgMzAwKVxuXHRcdH0pXG5cdH1cblx0Ly9cblx0Ly8gY29tcG9uZW50RGlkVXBkYXRlKG5ld1Byb3BzKSB7XG5cdC8vIFx0Y29uc3Qge1xuXHQvLyBcdFx0bW91c2VJbnB1dCxcblx0Ly8gXHR9ID0gdGhpcy5yZWZzO1xuXHQvL1xuXHQvLyBcdGNvbnN0IHtcblx0Ly8gXHRcdHdpbmRvd1dpZHRoLFxuXHQvLyBcdFx0d2luZG93SGVpZ2h0LFxuXHQvLyBcdH0gPSB0aGlzLnByb3BzO1xuXHQvL1xuXHQvLyBcdGlmICh3aW5kb3dXaWR0aCAhPT0gbmV3UHJvcHMud2luZG93V2lkdGggfHwgd2luZG93SGVpZ2h0ICE9PSBuZXdQcm9wcy53aW5kb3dIZWlnaHQpIHtcblx0Ly8gXHRcdG1vdXNlSW5wdXQuY29udGFpbmVyUmVzaXplZCgpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG5cblx0LyogY3VzdG9tIEZ1bmN0aW9uICAqL1xuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhpcy5vbkxvYWRpbmcoKVxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmxvYWRUZXh0dXJlKClcblx0XHRcdHJlc29sdmUoKVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gc2V0TW91c2VJbnB1dCgpIHtcblx0Ly8gXHRjb25zdCB7XG5cdC8vIFx0XHRtb3VzZUlucHV0LFxuXHQvLyBcdFx0Y29udGFpbmVyXG5cdC8vIFx0fSA9IHRoaXMucmVmcztcblx0Ly9cblx0Ly8gXHRpZiAoIW1vdXNlSW5wdXQuaXNSZWFkeSgpKSB7XG5cdC8vIFx0XHRjb25zdCB7XG5cdC8vIFx0XHRcdHNjZW5lLFxuXHQvLyBcdFx0XHRjYW1lcmEsXG5cdC8vIFx0XHR9ID0gdGhpcy5yZWZzO1xuXHQvL1xuXHQvLyBcdFx0bW91c2VJbnB1dC5yZWFkeShzY2VuZSwgY29udGFpbmVyLCBjYW1lcmEpO1xuXHQvLyBcdFx0Ly8gbW91c2VJbnB1dC5yZXN0cmljdEludGVyc2VjdGlvbnMoaW1hZ2VNZXNoKTtcblx0Ly8gXHRcdG1vdXNlSW5wdXQuc2V0QWN0aXZlKGZhbHNlKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxuXHRoYW5kbGVSZXNpemUoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlKVxuXHR9XG5cblx0aGFuZGxlTW91c2VNb3ZlKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW92ZU1vdXNlLCBmYWxzZSlcblx0XHR9XG5cblx0Ly8gaGFuZGxlQ2xpY2soZSkge1xuXHQvLyBcdHRoaXMub25SZXNldFRpbWUoKVxuXHQvLyBcdHRoaXMub25DbGlja01lc2goZSlcblx0Ly8gfVxuXG5cdGhhbmRsZUFuaW1hdGUoKSB7XG5cdFx0dGhpcy5vblVwZGF0ZVRpbWUoKVxuXHR9XG5cblx0bG9hZFRleHR1cmUoKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKVxuXHRcdGxvYWRlci5jcm9zc09yaWdpbiA9ICcqJ1xuXHRcdGZvciAobGV0IG5hbWUgaW4gdGhpcy50ZXh0dXJlcykge1xuXHRcdFx0bG9hZGVyLmxvYWQodGhpcy50ZXh0dXJlc1tuYW1lXS51cmwsICh0ZXh0dXJlKSA9PiB7XG4gXHRcdFx0dGhpcy50ZXh0dXJlc1tuYW1lXS50ZXh0dXJlID0gdGV4dHVyZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2xvYWRpbmcsIHdpZHRoLCBoZWlnaHQsIGNhbWVyYVBvc2l0aW9uLCBlbGFwc2VkLCBkdXJhdGlvbiwgbW91c2V9ID0gdGhpcy5wcm9wc1xuXG5cdFx0aWYgKGxvYWRpbmcpIHJldHVybig8aDI+TG9hZGluZy4uLjwvaDI+KVxuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiByZWY9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PFJlYWN0M1xuXHRcdFx0XHRcdG1haW5DYW1lcmE9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdHdpZHRoPXt3aWR0aH1cblx0XHRcdFx0XHRoZWlnaHQ9e2hlaWdodH1cblx0XHRcdFx0XHRvbkFuaW1hdGU9ezo6dGhpcy5oYW5kbGVBbmltYXRlfVxuXHRcdFx0XHRcdGNsZWFyQ29sb3I9ezB4ZmZmZmZmfVxuXHRcdFx0XHRcdGFudGlhbGlhcz17dHJ1ZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHsvKiA8bW9kdWxlXG5cdFx0XHRcdFx0XHRyZWY9XCJtb3VzZUlucHV0XCJcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3I9e01vdXNlSW5wdXR9XG5cdFx0XHRcdFx0Lz4gKi99XG5cdFx0XHRcdFx0PHNjZW5lXG5cdFx0XHRcdFx0XHRyZWY9XCJzY2VuZVwiXG5cdFx0XHRcdFx0XHQvLyBmb2c9e25ldyBUSFJFRS5Gb2coMHgyMjIyMjIsIDAuNiwgMi44KX1cblx0XHRcdFx0XHQ+XG5cblx0XHRcdFx0XHRcdHsvKiBIZWxwZXIgKi99XG5cdFx0XHRcdFx0XHR7LyogPGF4aXNIZWxwZXIgLz4gKi99XG5cblx0XHRcdFx0XHRcdHsvKiBDYW1lcmEgKi99XG5cdFx0XHRcdFx0XHQ8cGVyc3BlY3RpdmVDYW1lcmFcblx0XHRcdFx0XHRcdFx0cmVmPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0XHRcdGZvdj17MTV9XG5cdFx0XHRcdFx0XHRcdGFzcGVjdD17d2lkdGggLyBoZWlnaHR9XG5cdFx0XHRcdFx0XHRcdG5lYXI9ezAuMDF9XG5cdFx0XHRcdFx0XHRcdGZhcj17MTAwMH1cblx0XHRcdFx0XHRcdFx0cG9zaXRpb249e2NhbWVyYVBvc2l0aW9ufVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIExpZ2h0ICovfVxuXHRcdFx0XHRcdFx0PGhlbWlzcGhlcmVMaWdodFxuXHRcdFx0XHRcdFx0XHRza3lDb2xvcj17MHhmZmZmYmJ9XG5cdFx0XHRcdFx0XHRcdGdyb3VuZENvbG9yPXsweDg4Nzk3OX1cblx0XHRcdFx0XHRcdFx0aW50ZW5zaXR5PXswLjl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpcmVjdGlvbmFsTGlnaHRcblx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZmZmZmZmfVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBoZWxwZXIgTWVzaCovfVxuXHRcdFx0XHRcdFx0ey8qIDxtZXNoPlxuXHRcdFx0XHRcdFx0XHRcdDxib3hHZW9tZXRyeVxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxfVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MX1cblx0XHRcdFx0XHRcdFx0XHRkZXB0aD17MX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PG1lc2hCYXNpY01hdGVyaWFsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZWVlZWVlfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9tZXNoPiAqL31cblxuXHRcdFx0XHRcdFx0ey8qIEltYWdlIE1lc2ggKi99XG5cdFx0XHRcdFx0XHQ8bWVzaFxuXHRcdFx0XHRcdFx0XHRyZWY9J2ltYWdlTWVzaCdcblx0XHRcdFx0XHRcdFx0Ly8gb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxwbGFuZUdlb21ldHJ5XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8c2hhZGVyTWF0ZXJpYWxcblx0XHRcdFx0XHRcdFx0XHR2ZXJ0ZXhTaGFkZXI9e3ZzfVxuXHRcdFx0XHRcdFx0XHRcdGZyYWdtZW50U2hhZGVyPXtmc31cblx0XHRcdFx0XHRcdFx0XHRibGVuZGluZz17VEhSRUUuTm9ybWFsQmxlbmRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNwYXJlbnQ9e3RydWV9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybXM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnY29sb3JNYXAnfSB0eXBlPXsndCd9IHZhbHVlPXt0aGlzLnRleHR1cmVzWydtYWluJ10udGV4dHVyZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydoZWlnaHRNYXAnfSB0eXBlPXsndCd9IHZhbHVlPXt0aGlzLnRleHR1cmVzWydncmF5J10udGV4dHVyZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eyd0aW1lJ30gdHlwZT17J2YnfSB2YWx1ZT17ZWxhcHNlZH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydzY3JvbGwnfSB0eXBlPXsnZid9IHZhbHVlPXtzY3JvbGx9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnZHVyYXRpb24nfSB0eXBlPXsnZid9IHZhbHVlPXtkdXJhdGlvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydtb3VzZSd9IHR5cGU9eyd2ZWMyJ30gdmFsdWU9e21vdXNlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J3Jlc29sdXRpb24nfSB0eXBlPXsndmVjMid9IHZhbHVlPXtuZXcgVEhSRUUuVmVjdG9yMih3aWR0aCwgaGVpZ2h0KX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3VuaWZvcm1zPlxuXHRcdFx0XHRcdFx0XHQ8L3NoYWRlck1hdGVyaWFsPlxuXG5cdFx0XHRcdFx0XHQ8L21lc2g+XG5cblx0XHRcdFx0XHQ8L3NjZW5lPlxuXHRcdFx0XHQ8L1JlYWN0Mz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9jb21wb25lbnRzL0ltYWdlLmpzIiwiaW1wb3J0IFJlYWN0MyBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgUmVhY3RVcGRhdGVzIGZyb20gJ3JlYWN0LWRvbS9saWIvUmVhY3RVcGRhdGVzJztcblxuaW1wb3J0IFN5bnRoZXRpY01vdXNlRXZlbnQgZnJvbSAncmVhY3QtZG9tL2xpYi9TeW50aGV0aWNNb3VzZUV2ZW50JztcblxuaW1wb3J0IE1vZHVsZSBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlci9saWIvTW9kdWxlJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdyZWFjdC9saWIvUmVhY3RQcm9wVHlwZXMnO1xuXG5jb25zdCB0ZW1wVmVjdG9yMiA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbmNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tOYW1lcyA9IHtcbiAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbn07XG5cbmNvbnN0IG1vdXNlRXZlbnRzID0gW1xuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZScsXG4gICdvbk1vdXNlRG93bicsXG4gICdvbk1vdXNlVXAnLFxuICAnb25DbGljaycsXG5dO1xuXG5jb25zdCBib29sUHJvcHMgPSB7XG4gIGlnbm9yZVBvaW50ZXJFdmVudHM6IGZhbHNlLFxufTtcblxuY2xhc3MgTW91c2VJbnB1dCBleHRlbmRzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pc1JlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QgPSBudWxsO1xuXG4gICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzID0gW107XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIHNldHVwKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UpIHtcbiAgICBzdXBlci5zZXR1cChyZWFjdDNSZW5kZXJlckluc3RhbmNlKTtcblxuICAgIGNvbnN0IE9iamVjdDNERGVzY3JpcHRvciA9IHJlYWN0M1JlbmRlcmVySW5zdGFuY2UudGhyZWVFbGVtZW50RGVzY3JpcHRvcnMub2JqZWN0M0QuY29uc3RydWN0b3I7XG5cbiAgICBPYmplY3QudmFsdWVzKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UudGhyZWVFbGVtZW50RGVzY3JpcHRvcnMpLmZvckVhY2goZWxlbWVudERlc2NyaXB0b3IgPT4ge1xuICAgICAgaWYgKGVsZW1lbnREZXNjcmlwdG9yIGluc3RhbmNlb2YgT2JqZWN0M0REZXNjcmlwdG9yKSB7XG4gICAgICAgIG1vdXNlRXZlbnRzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5oYXNFdmVudChldmVudE5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhib29sUHJvcHMpLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLmhhc1Byb3AocHJvcE5hbWUsIHtcbiAgICAgICAgICAgIHR5cGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgdXBkYXRlKHRocmVlT2JqZWN0LCB2YWx1ZSwgaGFzUHJvcCkge1xuICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRocmVlT2JqZWN0LnVzZXJEYXRhW3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocmVlT2JqZWN0LnVzZXJEYXRhW3Byb3BOYW1lXSA9IGJvb2xQcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0OiBib29sUHJvcHNbcHJvcE5hbWVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMucHVzaChlbGVtZW50RGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1JlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pc1JlYWR5O1xuICB9XG5cbiAgc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHJlc3RyaWN0SW50ZXJzZWN0aW9ucyhvYmplY3RzLCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyA9IHRydWU7XG4gICAgdGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0ID0gb2JqZWN0cztcblxuICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUgPSByZWN1cnNpdmU7XG4gIH1cblxuICByZWFkeShzY2VuZSwgY29udGFpbmVyLCBjYW1lcmEpIHtcbiAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuX2NhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuX3JheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcbiAgICB0aGlzLl9tb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB0aGlzLl9vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fbW91c2Uuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVFbnRlckxlYXZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2NvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLl9ob3Zlck9iamVjdE1hcCA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUsIGZhbHNlKTtcblxuICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG5cbiAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhsaXN0ZW5lckNhbGxiYWNrTmFtZXMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIGxldCBib3VuZExpc3RlbmVyO1xuXG4gICAgICBjb25zdCBsaXN0ZW5lckNhbGxiYWNrTmFtZSA9IGxpc3RlbmVyQ2FsbGJhY2tOYW1lc1tldmVudE5hbWVdO1xuICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgICBib3VuZExpc3RlbmVyID0gdGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzLCBsaXN0ZW5lckNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgIGJvdW5kTGlzdGVuZXIgPSB0aGlzLl9vbk1vdXNlVXAuYmluZCh0aGlzLCBsaXN0ZW5lckNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChib3VuZExpc3RlbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRMaXN0ZW5lciwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGJvdW5kTGlzdGVuZXIsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9vbk1vdXNlRG93biA9IChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpID0+IHtcbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudCxcbiAgICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICAgIH0gPSB0aGlzLl9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpO1xuXG4gICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gaW50ZXJzZWN0aW9ucztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfb25Nb3VzZVVwID0gKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkgPT4ge1xuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpbnRlcnNlY3Rpb25zLFxuICAgICAgfSA9IHRoaXMuX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCk7XG5cbiAgICAgIGlmICghKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnRlcnNlY3QgY3VycmVudCBpbnRlcnNlY3Rpb25zIHdpdGggdGhlIGludGVyc2VjdGlvbnMgZm9yIGNsaWNrXG4gICAgICAgIC8vICAgY2FsbCB4emliaXQgQVNBUCB3ZSBoYXZlIGEgZ29vZCBvbmUgc29uXG4gICAgICAgIC8vICAgICBpdCB3YXNuJ3QgdGhhdCBnb29kXG5cbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uVVVJRE1hcCA9IHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljay5yZWR1Y2UoKG1hcCwgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgbWFwW2ludGVyc2VjdGlvbi5vYmplY3QudXVpZF0gPSBpbnRlcnNlY3Rpb247XG5cbiAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2ldO1xuXG4gICAgICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgICAgIGNvbnN0IHV1aWQgPSBvYmplY3QudXVpZDtcblxuICAgICAgICAgIGlmIChpbnRlcnNlY3Rpb25VVUlETWFwW3V1aWRdKSB7XG4gICAgICAgICAgICAvLyBvaCBib3kgb2ggYm95IGhlcmUgd2UgZ28sIHdlIGdvdCBhIGNsaWNrZXJcblxuICAgICAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlclxuICAgICAgICAgICAgICAuZGlzcGF0Y2hFdmVudChvYmplY3QsICdvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdjbGljaycsIGV2ZW50KSwgaW50ZXJzZWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG4gIH07XG5cbiAgX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoZXZlbnRUeXBlLCBwcm90b3R5cGUpIHtcbiAgICByZXR1cm4gU3ludGhldGljTW91c2VFdmVudC5nZXRQb29sZWQobnVsbCwgbnVsbCxcbiAgICAgIG5ldyBNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcHJvdG90eXBlKSwgcHJvdG90eXBlLnRhcmdldCk7XG4gIH1cblxuICBfaW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChudWxsLCBudWxsLCBtb3VzZUV2ZW50LCBtb3VzZUV2ZW50LnRhcmdldCk7XG5cbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fZ2V0SW50ZXJzZWN0aW9ucyh0ZW1wVmVjdG9yMi5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSkpO1xuXG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2ldO1xuXG4gICAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQob2JqZWN0LCBjYWxsYmFja05hbWUsIGV2ZW50LCBpbnRlcnNlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50LFxuICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgX2dldEludGVyc2VjdGlvbnMobW91c2VDb29yZHMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgaWYgKHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCxcbiAgICAgICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3QodGhpcy5fc2NlbmUsIHRydWUpO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IyfSBtb3VzZUNvb3JkcyB1c3VhbGx5IGFuIGV2ZW50J3MgY2xpZW50WCBhbmQgY2xpZW50WVxuICAgKiBAcmV0dXJucyB7VEhSRUUuUmF5fVxuICAgKi9cbiAgZ2V0Q2FtZXJhUmF5KG1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgY29uc3QgcmVzdWx0UmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnJheS5jb3B5KG9yaWdpbmFsUmF5KTtcblxuICAgIHJldHVybiByZXN1bHRSYXk7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIGludGVyc2VjdE9iamVjdChtb3VzZUNvb3Jkcywgb2JqZWN0LCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KG9iamVjdCwgcmVjdXJzaXZlKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5yYXkuY29weShvcmlnaW5hbFJheSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuXG4gIGNvbnRhaW5lclJlc2l6ZWQoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzUmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl91cGRhdGVFbnRlckxlYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUVudGVyTGVhdmUoKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX2dldEludGVyc2VjdGlvbnModGhpcy5fbW91c2UpO1xuXG4gICAgY29uc3QgaG92ZXJNYXBUb1VwZGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuX2hvdmVyT2JqZWN0TWFwLFxuICAgIH07XG5cbiAgICBjb25zdCBtb3VzZUVudGVyRXZlbnQgPSB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdtb3VzZUVudGVyJywge1xuICAgICAgdGFyZ2V0OiB0aGlzLl9jb250YWluZXIsXG4gICAgICBjbGllbnRYOiB0aGlzLl9tb3VzZS54LFxuICAgICAgY2xpZW50WTogdGhpcy5fbW91c2UueSxcbiAgICB9KTtcblxuICAgIC8vIGZpbmQgZmlyc3QgaW50ZXJzZWN0aW9uIHRoYXQgZG9lcyBub3QgaWdub3JlIHBvaW50ZXIgZXZlbnRzXG4gICAgZm9yIChsZXQgZGVwdGggPSAwOyBkZXB0aCA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2RlcHRoKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2RlcHRoXTtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgIGlmIChvYmplY3QudXNlckRhdGEgJiYgb2JqZWN0LnVzZXJEYXRhLmlnbm9yZVBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHV1aWQgPSBvYmplY3QudXVpZDtcblxuICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdKSB7XG4gICAgICAgIGRlbGV0ZSBob3Zlck1hcFRvVXBkYXRlW3V1aWRdO1xuXG4gICAgICAgIC8vIGp1c3QgdXBkYXRlIHRoYXQgaW50ZXJzZWN0aW9uXG4gICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdID0ge1xuICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICBpbnRlcnNlY3Rpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCEobW91c2VFbnRlckV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IG1vdXNlRW50ZXJFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChvYmplY3QsICdvbk1vdXNlRW50ZXInLFxuICAgICAgICAgICAgbW91c2VFbnRlckV2ZW50LCBpbnRlcnNlY3Rpb24sIGRlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBoYXZlIGZvdW5kIHRoZSBmaXJzdCBzb2xpZCBpbnRlcnNlY3Rpb24sIGRvbid0IGdvIGZ1cnRoZXJcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdXNlTGVhdmVFdmVudCA9IHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ21vdXNlTGVhdmUnLCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIGNsaWVudFg6IHRoaXMuX21vdXNlLngsXG4gICAgICBjbGllbnRZOiB0aGlzLl9tb3VzZS55LFxuICAgIH0pO1xuXG4gICAgLy8gZGVsZXRlIGFsbCB1bnNlZW4gdXVpZHMgaW4gaG92ZXIgbWFwXG4gICAgY29uc3QgdW5zZWVuVVVJRHMgPSBPYmplY3Qua2V5cyhob3Zlck1hcFRvVXBkYXRlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5zZWVuVVVJRHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHV1aWQgPSB1bnNlZW5VVUlEc1tpXTtcblxuICAgICAgaWYgKCEobW91c2VMZWF2ZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IG1vdXNlTGVhdmVFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQodGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0ub2JqZWN0LFxuICAgICAgICAgICdvbk1vdXNlTGVhdmUnLCBtb3VzZUxlYXZlRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF07XG4gICAgfVxuICB9XG5cbiAgX2dldFJlbGF0aXZlTW91c2VDb29yZHMoc2NyZWVuTW91c2VDb29yZHMpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyUmVjdDtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSBzY3JlZW5Nb3VzZUNvb3Jkcy5jbG9uZSgpXG4gICAgICAuc3ViKHRlbXBWZWN0b3IyLnNldChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKSlcbiAgICAgIC5kaXZpZGUodGVtcFZlY3RvcjIuc2V0KGNvbnRhaW5lclJlY3Qud2lkdGgsIGNvbnRhaW5lclJlY3QuaGVpZ2h0KSk7XG5cbiAgICAvLyBtb3VzZS54ID0gKCBldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGggKSAqIDIgLSAxO1xuICAgIC8vIG1vdXNlLnkgPSAtICggZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCApICogMiArIDE7XG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRzLnggPSByZWxhdGl2ZU1vdXNlQ29vcmRzLnggKiAyIC0gMTtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRzLnkgPSAtcmVsYXRpdmVNb3VzZUNvb3Jkcy55ICogMiArIDE7XG5cbiAgICByZXR1cm4gcmVsYXRpdmVNb3VzZUNvb3JkcztcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgZGlzcG9zZSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucy5mb3JFYWNoKGNsZWFudXBGdW5jdGlvbiA9PiBjbGVhbnVwRnVuY3Rpb24oKSk7XG4gICAgZGVsZXRlIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnM7XG5cbiAgICBkZWxldGUgdGhpcy5fb25Nb3VzZU1vdmU7XG5cbiAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMuZm9yRWFjaChlbGVtZW50RGVzY3JpcHRvciA9PiB7XG4gICAgICBjb25zdCBhbGxQcm9wcyA9IE9iamVjdC5rZXlzKGJvb2xQcm9wcylcbiAgICAgICAgLmNvbmNhdChtb3VzZUV2ZW50cyk7XG5cbiAgICAgIGFsbFByb3BzLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5yZW1vdmVQcm9wKHByb3BOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdXNlSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2xpYi9Nb3VzZUlucHV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB0YztcXG52YXJ5aW5nIHZlYzQgdmNvbG9yO1xcbmF0dHJpYnV0ZSB2ZWMzIGNvbG9yO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIHRjID0gdXY7XFxuICB2Y29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xcbiAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UudmVydFxuLy8gbW9kdWxlIGlkID0gNTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdGM7XFxudmFyeWluZyB2ZWM0IHZjb2xvcjtcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCBjb2xvck1hcDtcXG51bmlmb3JtIHNhbXBsZXIyRCBoZWlnaHRNYXA7XFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcbnVuaWZvcm0gdmVjMiBtb3VzZTtcXG5cXG5cXG4vLyAyRCBSYW5kb21cXG5mbG9hdCByYW5kb20gKGluIHZlYzIgc3QpIHtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihkb3Qoc3QueHksXFxuICAgICAgICAgICAgICAgICAgICAgICAgIHZlYzIoMTIuOTg5OCw3OC4yMzMpKSlcXG4gICAgICAgICAgICAgICAgICogNDM3NTguNTQ1MzEyMyk7XFxufVxcblxcbi8vIDJEIE5vaXNlIGJhc2VkIG9uIE1vcmdhbiBNY0d1aXJlIEBtb3JnYW4zZFxcbi8vIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy80ZFMzV2RcXG5mbG9hdCBub2lzZSAoaW4gdmVjMiBzdCkge1xcbiAgICB2ZWMyIGkgPSBmbG9vcihzdCk7XFxuICAgIHZlYzIgZiA9IGZyYWN0KHN0KTtcXG5cXG4gICAgLy8gRm91ciBjb3JuZXJzIGluIDJEIG9mIGEgdGlsZVxcbiAgICBmbG9hdCBhID0gcmFuZG9tKGkpO1xcbiAgICBmbG9hdCBiID0gcmFuZG9tKGkgKyB2ZWMyKDEuMCwgMC4wKSk7XFxuICAgIGZsb2F0IGMgPSByYW5kb20oaSArIHZlYzIoMC4wLCAxLjApKTtcXG4gICAgZmxvYXQgZCA9IHJhbmRvbShpICsgdmVjMigxLjAsIDEuMCkpO1xcblxcbiAgICAvLyBTbW9vdGggSW50ZXJwb2xhdGlvblxcblxcbiAgICAvLyBDdWJpYyBIZXJtaW5lIEN1cnZlLiAgU2FtZSBhcyBTbW9vdGhTdGVwKClcXG4gICAgdmVjMiB1ID0gZipmKigzLjAtMi4wKmYpO1xcbiAgICAvLyB1ID0gc21vb3Roc3RlcCgwLiwxLixmKTtcXG5cXG4gICAgLy8gTWl4IDQgY29vcm5lcnMgcG9yY2VudGFnZXNcXG4gICAgcmV0dXJuIG1peChhLCBiLCB1LngpICtcXG4gICAgICAgICAgICAoYyAtIGEpKiB1LnkgKiAoMS4wIC0gdS54KSArXFxuICAgICAgICAgICAgKGQgLSBiKSAqIHUueCAqIHUueTtcXG59XFxuXFxuXFxudm9pZCBtYWluKCl7XFxuXFxuICBmbG9hdCBzZWZsb2F0ID0gMS4wIC0gbWluKHRpbWUgKiAwLjIsIDEuMCk7XFxuICB2ZWMyIHNldmVjMiA9IHZlYzIoMS4wKSAtIHZlYzIobWluKHRpbWUgKiAwLjUsIDEuMCkpO1xcbiAgdmVjMyBzZXZlYzMgPSB2ZWMzKG1pbih0aW1lICogMC40LCAxLjApKTtcXG5cXG5cXHRmbG9hdCBncmFkaWVudFN0ZXAgPSBwb3coc2VmbG9hdCwgdGltZSkgKiAwLjAyNTsgLy8gZGVmYXVsdCAuMDAxNSwgbWluIC0xLiwgbWF4IDEuXFxuXFx0ZmxvYXQgYWR2ZWN0U3RlcCA9IHBvdyhzZWZsb2F0LCB0aW1lKSAqIDAuMDI1OyAvLyBkZWZhdWx0IC4wMDE1LCBtaW4gLTEuLCBtYXggMS5cXG5cXHRmbG9hdCBmbGlwSGVpZ2h0TWFwID0gMC43OyAvLyBkZWZhdWx0IDAuNywgbWluIDAuLCBtYXggMi5cXG5cXHRmbG9hdCBleHBhbmQgPSAxLjA7Ly8gYWJzKGNvcyh0aW1lICogMC4wMSkpOyAvLyBkZWZhdWx0IDAuLCBtaW4gMC4sIG1heCAxLlxcblxcblxcblxcdHZlYzQgYWR2ZWN0TWF0cml4ID0gdmVjNCgwLjEpO1xcblxcdHZlYzQgY3hwID0gdGV4dHVyZTJEKGhlaWdodE1hcCwgdmVjMih0Yy54ICsgZ3JhZGllbnRTdGVwLCBmbGlwSGVpZ2h0TWFwKnRjLnkpKTtcXG5cXHR2ZWM0IGN4biA9IHRleHR1cmUyRChoZWlnaHRNYXAsIHZlYzIodGMueCAtIGdyYWRpZW50U3RlcCwgZmxpcEhlaWdodE1hcCp0Yy55KSk7XFxuXFx0dmVjNCBjeXAgPSB0ZXh0dXJlMkQoaGVpZ2h0TWFwLCB2ZWMyKHRjLngsIGZsaXBIZWlnaHRNYXAqKHRjLnkgKyBncmFkaWVudFN0ZXApKSk7XFxuXFx0dmVjNCBjeW4gPSB0ZXh0dXJlMkQoaGVpZ2h0TWFwLCB2ZWMyKHRjLngsIGZsaXBIZWlnaHRNYXAqKHRjLnkgLSBncmFkaWVudFN0ZXApKSk7XFxuXFxuXFx0dmVjMyBncmV5ID0gdmVjMyguMywgLjU5LCAuMTEpO1xcblxcdGZsb2F0IGF4cCA9IGRvdChncmV5LCBjeHAueHl6KTtcXG5cXHRmbG9hdCBheG4gPSBkb3QoZ3JleSwgY3huLnh5eik7XFxuXFx0ZmxvYXQgYXlwID0gZG90KGdyZXksIGN5cC54eXopO1xcblxcdGZsb2F0IGF5biA9IGRvdChncmV5LCBjeW4ueHl6KTtcXG5cXG5cXHR2ZWMyIGdyYWQgPSB2ZWMyKGF4cCAtIGF4biwgYXlwIC0gYXluKTtcXG5cXHR2ZWMyIG5ld3RjID0gdGMgKyBhZHZlY3RTdGVwICogbm9ybWFsaXplKGFkdmVjdE1hdHJpeC54eSAqIGdyYWQpICogZXhwYW5kO1xcblxcblxcdHZlYzMgYmFzZUNvbG9yID0gdGV4dHVyZTJEKGNvbG9yTWFwLCBuZXd0YykucmdiICogdmNvbG9yLnJnYjtcXG5cXG4gIGdsX0ZyYWdDb2xvci5yZ2IgPSBiYXNlQ29sb3IgKiBzZXZlYzM7XFxuXFxuXFx0Z2xfRnJhZ0NvbG9yLmEgPSB2Y29sb3IuYTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvZ2xzbC9pbWFnZS5mcmFnXG4vLyBtb2R1bGUgaWQgPSA1NTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZVdpbmRvdyA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUkVTSVpFX1dJTkRPVyxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuVVBEQVRFX1RJTUUsXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0VGltZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNFVF9USU1FLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvdGltZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBjbGlja01lc2ggPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkNMSUNLX01FU0gsXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9hY3Rpb25zL2NsaWNrTWVzaC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBtb3ZlTW91c2UgPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLk1PVkVfTU9VU0UsXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9hY3Rpb25zL21vdmVNb3VzZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURJTkdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVkID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURFRFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvbG9hZC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnZhbHVlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=