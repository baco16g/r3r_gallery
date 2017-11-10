webpackJsonp([1],{

/***/ 32:
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

var _reactRedux = __webpack_require__(30);

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

var _actiontypes = __webpack_require__(32);

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

var _actiontypes = __webpack_require__(32);

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

var _actiontypes = __webpack_require__(32);

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

var _actiontypes = __webpack_require__(32);

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

var _actiontypes = __webpack_require__(32);

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

var _actiontypes = __webpack_require__(32);

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

var _actiontypes = __webpack_require__(32);

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

var _actiontypes = __webpack_require__(32);

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

var _reactRedux = __webpack_require__(30);

var _Image = __webpack_require__(549);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(553);

var _time = __webpack_require__(554);

var _moveMouse = __webpack_require__(555);

var _load = __webpack_require__(556);

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

var _getPrototypeOf = __webpack_require__(31);

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
		_this.textures = {
			"main": {
				url: "../assets/img/waterColor/iphonex.png"
			},
			"noise": {
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
		key: 'handleResize',
		value: function handleResize() {
			window.addEventListener('resize', this.onResize, false);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove() {
			window.addEventListener('mousemove', this.onMoveMouse, false);
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
			var _props = this.props,
			    loading = _props.loading,
			    width = _props.width,
			    height = _props.height,
			    windowWidth = _props.windowWidth,
			    windowHeight = _props.windowHeight,
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
									_react2.default.createElement('uniform', { name: 'noiseMap', type: 't', value: this.textures['noise'].texture }),
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

var _getPrototypeOf = __webpack_require__(31);

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

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\n\nuniform sampler2D colorMap;\nuniform sampler2D noiseMap;\nuniform float time;\n\nvoid main(){\n\n  float sefloat = 1.0 - min(exp(time * 0.6) * 0.5, 1.0);\n  vec2 sevec2 = vec2(min(time * 0.8, 1.0));\n  vec3 sevec3 = vec3(min(time * 0.8, 1.0));\n\n\tfloat gradientStep = pow(sefloat, time) * 0.05;\n\tfloat advectStep = pow(sefloat, time) * 0.05;\n\tfloat flipHeightMap = 1.0;\n\tfloat expand = 1.0;\n\n\n\tvec4 advectMatrix = vec4(0.1);\n\tvec4 cxp = texture2D(noiseMap, vec2(tc.x + gradientStep, flipHeightMap*tc.y));\n\tvec4 cxn = texture2D(noiseMap, vec2(tc.x - gradientStep, flipHeightMap*tc.y));\n\tvec4 cyp = texture2D(noiseMap, vec2(tc.x, flipHeightMap*(tc.y + gradientStep)));\n\tvec4 cyn = texture2D(noiseMap, vec2(tc.x, flipHeightMap*(tc.y - gradientStep)));\n\n\tvec3 grey = vec3(.3, .59, .11);\n\tfloat axp = dot(grey, cxp.xyz);\n\tfloat axn = dot(grey, cxn.xyz);\n\tfloat ayp = dot(grey, cyp.xyz);\n\tfloat ayn = dot(grey, cyn.xyz);\n\n\tvec2 grad = vec2(axp - axn, ayp - ayn);\n\tvec2 newtc = tc + advectStep * normalize(advectMatrix.xy * grad) * expand;\n\n\tvec3 baseColor = texture2D(colorMap, newtc).rgb * vcolor.rgb;\n\n  gl_FragColor.rgb = baseColor * sevec3;\n\n\tgl_FragColor.a = vcolor.a;\n}\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(32);

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

var _actiontypes = __webpack_require__(32);

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
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(32);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
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
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(32);

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
var $Object = __webpack_require__(9).Object;
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

},[538]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9sb2FkLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9yZXNvbHV0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9jb250YWluZXJzL0ltYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvY29tcG9uZW50cy9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2xpYi9Nb3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvZ2xzbC9pbWFnZS52ZXJ0Iiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvZ2xzbC9pbWFnZS5mcmFnIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9hY3Rpb25zL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9hY3Rpb25zL21vdmVNb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiXSwibmFtZXMiOlsiVHlwZXMiLCJSRVNJWkVfV0lORE9XIiwiTU9WRV9NT1VTRSIsIlVQREFURV9DQU1FUkFfUE9TSVRJT04iLCJMT0FESU5HIiwiTE9BREVEIiwiVVBEQVRFX1RJTUUiLCJSRVNFVF9USU1FIiwiQ0xJQ0tfTUVTSCIsInN0b3JlIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWQiLCJ3aW5kb3dTaXplIiwiY2FtZXJhIiwidGltZSIsIm1vdXNlIiwicmVzb2x1dGlvbiIsImltYWdlIiwic3RhdGUiLCJsb2FkaW5nIiwiYWN0aW9uIiwidHlwZSIsIlRIUkVFIiwiVmVjdG9yMiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwiVmVjdG9yMyIsImVsYXBzZWQiLCJkdXJhdGlvbiIsInRhcmdldCIsInJlY3QiLCJlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidyIsImNsaWVudFgiLCJsZWZ0Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiY2xpZW50WSIsInRvcCIsInBvaW50ZXIiLCJjb250ZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ3aW5kb3dXaWR0aCIsIngiLCJ3aW5kb3dIZWlnaHQiLCJ5IiwiY2FtZXJhUG9zaXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJvbkxvYWRlZCIsIm9uUmVzaXplIiwib25VcGRhdGVUaW1lIiwib25SZXNldFRpbWUiLCJvbk1vdmVNb3VzZSIsIkltYWdlQ29udGFpbmVyIiwiSW1hZ2UiLCJwcm9wcyIsInRleHR1cmVzIiwidXJsIiwiaW5pdGlhbGl6ZSIsInRoZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlUmVzaXplIiwicmVzb2x2ZSIsInJlamVjdCIsImxvYWRUZXh0dXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJjcm9zc09yaWdpbiIsIm5hbWUiLCJ0ZXh0dXJlIiwiaGFuZGxlQW5pbWF0ZSIsIk5vcm1hbEJsZW5kaW5nIiwic2Nyb2xsIiwiQ29tcG9uZW50IiwidGVtcFZlY3RvcjIiLCJsaXN0ZW5lckNhbGxiYWNrTmFtZXMiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwibW91c2VFdmVudHMiLCJib29sUHJvcHMiLCJpZ25vcmVQb2ludGVyRXZlbnRzIiwiTW91c2VJbnB1dCIsIl9vbk1vdXNlRG93biIsImNhbGxiYWNrTmFtZSIsIm1vdXNlRXZlbnQiLCJiYXRjaGVkVXBkYXRlcyIsIl9pbnRlcnNlY3RBbmREaXNwYXRjaCIsImV2ZW50IiwiaW50ZXJzZWN0aW9ucyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiX2ludGVyc2VjdGlvbnNGb3JDbGljayIsIl9vbk1vdXNlVXAiLCJpbnRlcnNlY3Rpb25VVUlETWFwIiwicmVkdWNlIiwibWFwIiwiaW50ZXJzZWN0aW9uIiwib2JqZWN0IiwidXVpZCIsImkiLCJsZW5ndGgiLCJldmVudERpc3BhdGNoZXIiLCJkaXNwYXRjaEV2ZW50IiwiX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQiLCJfaXNSZWFkeSIsIl9hY3RpdmUiLCJfcmVzdHJpY3RJbnRlcnNlY3Rpb25zIiwiX29iamVjdHNUb0ludGVyc2VjdCIsIl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlIiwiX3BhdGNoZWREZXNjcmlwdG9ycyIsInJlYWN0M1JlbmRlcmVySW5zdGFuY2UiLCJPYmplY3QzRERlc2NyaXB0b3IiLCJ0aHJlZUVsZW1lbnREZXNjcmlwdG9ycyIsIm9iamVjdDNEIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiZWxlbWVudERlc2NyaXB0b3IiLCJoYXNFdmVudCIsImV2ZW50TmFtZSIsImhhc1Byb3AiLCJwcm9wTmFtZSIsImJvb2wiLCJ1cGRhdGUiLCJ0aHJlZU9iamVjdCIsInZhbHVlIiwidXNlckRhdGEiLCJkZWZhdWx0IiwicHVzaCIsImFjdGl2ZSIsIm9iamVjdHMiLCJyZWN1cnNpdmUiLCJzY2VuZSIsImNvbnRhaW5lciIsIl9zY2VuZSIsIl9jb250YWluZXIiLCJfY2FtZXJhIiwiX3JheWNhc3RlciIsIlJheWNhc3RlciIsIl9tb3VzZSIsIl9vbk1vdXNlTW92ZSIsInNldCIsIl91cGRhdGVFbnRlckxlYXZlIiwiX2NvbnRhaW5lclJlY3QiLCJfaG92ZXJPYmplY3RNYXAiLCJfY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucyIsImJvdW5kTGlzdGVuZXIiLCJsaXN0ZW5lckNhbGxiYWNrTmFtZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwicHJvdG90eXBlIiwiZ2V0UG9vbGVkIiwiTW91c2VFdmVudCIsIl9nZXRJbnRlcnNlY3Rpb25zIiwibW91c2VDb29yZHMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRzIiwiX2dldFJlbGF0aXZlTW91c2VDb29yZHMiLCJzZXRGcm9tQ2FtZXJhIiwiaW50ZXJzZWN0T2JqZWN0cyIsImludGVyc2VjdE9iamVjdCIsIm9yaWdpbmFsUmF5IiwicmF5IiwiY2xvbmUiLCJyZXN1bHRSYXkiLCJjb3B5IiwiaG92ZXJNYXBUb1VwZGF0ZSIsIm1vdXNlRW50ZXJFdmVudCIsImRlcHRoIiwibW91c2VMZWF2ZUV2ZW50IiwidW5zZWVuVVVJRHMiLCJzY3JlZW5Nb3VzZUNvb3JkcyIsImNvbnRhaW5lclJlY3QiLCJzdWIiLCJkaXZpZGUiLCJjbGVhbnVwRnVuY3Rpb24iLCJhbGxQcm9wcyIsImNvbmNhdCIsInJlbW92ZVByb3AiLCJyZXNpemVXaW5kb3ciLCJ1cGRhdGVUaW1lIiwicmVzZXRUaW1lIiwibW92ZU1vdXNlIiwibG9hZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVE7QUFDYkMsZ0JBQWUsZUFERjtBQUViQyxhQUFZLFlBRkM7QUFHYkMseUJBQXdCLHdCQUhYO0FBSWJDLFVBQVMsU0FKSTtBQUtiQyxTQUFRLFFBTEs7QUFNYkMsY0FBYSxhQU5BO0FBT2JDLGFBQVksWUFQQztBQVFiQyxhQUFZO0FBUkMsQ0FBZDtrQkFVZVIsSzs7Ozs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNUyxRQUFRLDRDQUFzQixvQkFDbkMsUUFBT0MsTUFBUCx1REFBT0EsTUFBUCxPQUFrQixRQUFsQixJQUE4QixPQUFPQSxPQUFPQyxpQkFBZCxLQUFvQyxXQUFsRSxHQUFnRkQsT0FBT0MsaUJBQVAsRUFBaEYsR0FBNkc7QUFBQSxRQUFLQyxDQUFMO0FBQUEsQ0FEMUUsQ0FBdEIsQ0FBZDs7QUFNQSxtQkFBU0MsTUFBVCxDQUNDO0FBQUE7QUFBQSxHQUFVLE9BQU9KLEtBQWpCO0FBQ0M7QUFERCxDQURELEVBSUVLLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRixFOzs7Ozs7Ozs7Ozs7OztBQ2pCQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsNEJBQWdC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QTtBQUNBLEU7Ozs7Ozs7QUNyQ0Esa0JBQWtCLHdEOzs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhc3NldHMvanMvcGFnZXMvd2F0ZXJDb2xvci1mYWRlLjkwZGUzZjRmMzYxNjRmMGQ4OGQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHlwZXMgPSB7XG5cdFJFU0laRV9XSU5ET1c6ICdSRVNJWkVfV0lORE9XJyxcblx0TU9WRV9NT1VTRTogJ01PVkVfTU9VU0UnLFxuXHRVUERBVEVfQ0FNRVJBX1BPU0lUSU9OOiAnVVBEQVRFX0NBTUVSQV9QT1NJVElPTicsXG5cdExPQURJTkc6ICdMT0FESU5HJyxcblx0TE9BREVEOiAnTE9BREVEJyxcblx0VVBEQVRFX1RJTUU6ICdVUERBVEVfVElNRScsXG5cdFJFU0VUX1RJTUU6ICdSRVNFVF9USU1FJyxcblx0Q0xJQ0tfTUVTSDogJ0NMSUNLX01FU0gnLFxufVxuZXhwb3J0IGRlZmF1bHQgVHlwZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvY29uc3RhbnRzL2FjdGlvbnR5cGVzLmpzIiwiaW1wb3J0ICcuLi8uLi9zdHlsdXMvc3R5bGUuc3R5bCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9JbWFnZUNvbnRhaW5lcidcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgY29tcG9zZShcblx0dHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxuKSk7XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdDxJbWFnZUNvbnRhaW5lci8+XG5cdDwvUHJvdmlkZXI+XG4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9pbmRleC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkJ1xuaW1wb3J0IHdpbmRvd1NpemUgZnJvbSAnLi93aW5kb3dTaXplJ1xuaW1wb3J0IGNhbWVyYSBmcm9tICcuL2NhbWVyYSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSdcbmltcG9ydCBtb3VzZSBmcm9tICcuL21vdXNlJ1xuaW1wb3J0IHBvaW50ZXIgZnJvbSAnLi9wb2ludGVyJ1xuaW1wb3J0IHJlc29sdXRpb24gZnJvbSAnLi9yZXNvbHV0aW9uJ1xuaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxvYWQsXG4gIHdpbmRvd1NpemUsXG4gIGNhbWVyYSxcbiAgdGltZSxcbiAgbW91c2UsXG4gIHJlc29sdXRpb24sXG4gIGltYWdlLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBsb2FkID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRsb2FkaW5nOiB0cnVlXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuTE9BRElORzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0fSlcblx0XHRjYXNlIFR5cGVzLkxPQURFRDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9sb2FkLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3Qgd2luZG93U2l6ZSA9IChcblx0c3RhdGUgPSBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5SRVNJWkVfV0lORE9XOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLFxuXHRcdFx0XHRuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdFx0KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1NpemVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGNhbWVyYSA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDMuOCksXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVyYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9jYW1lcmEuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCB0aW1lID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRlbGFwc2VkOiAwLjAsXG5cdFx0ZHVyYXRpb246IDEuNSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5VUERBVEVfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICsgMC4wMSxcblx0XHRcdFx0ZHVyYXRpb246IHN0YXRlLmR1cmF0aW9uLFxuXHRcdFx0fSlcblx0XHRjYXNlIFR5cGVzLlJFU0VUX1RJTUU6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0ZWxhcHNlZDogc3RhdGUuZWxhcHNlZCAqIDAuMCxcblx0XHRcdFx0ZHVyYXRpb246IHN0YXRlLmR1cmF0aW9uLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3RpbWUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBtb3VzZSA9IChcblx0c3RhdGUgPSB7XG5cdFx0dGFyZ2V0OiBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5NT1ZFX01PVVNFOlxuXHRcdFx0bGV0IHJlY3QgPSBhY3Rpb24uZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRsZXQgdyA9IChhY3Rpb24uZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGFjdGlvbi5lLnRhcmdldC53aWR0aDtcblx0XHRcdGxldCBoID0gKGFjdGlvbi5lLnRhcmdldC5oZWlnaHQgLSBhY3Rpb24uZS5jbGllbnRZICsgcmVjdC50b3ApIC8gYWN0aW9uLmUudGFyZ2V0LmhlaWdodDtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR0YXJnZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdHcsXG5cdFx0XHRcdFx0aFxuXHRcdFx0XHQpLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBtb3VzZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9tb3VzZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHBvaW50ZXIgPSAoXG5cdHN0YXRlID0ge1xuXHRcdHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMigwLjUsIDAuNSksXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuQ0xJQ0tfTUVTSDpcblx0XHRcdGxldCByZWN0ID0gYWN0aW9uLmUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMihcblx0XHRcdFx0XHQoYWN0aW9uLmUuY2xpZW50WCAtIHJlY3QubGVmdCkgLyBhY3Rpb24uZS50YXJnZXQud2lkdGgsXG5cdFx0XHRcdFx0KGFjdGlvbi5lLnRhcmdldC5oZWlnaHQgLSBhY3Rpb24uZS5jbGllbnRZICsgcmVjdC50b3ApIC8gYWN0aW9uLmUudGFyZ2V0LmhlaWdodCxcblx0XHRcdFx0KSxcblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9pbnRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9wb2ludGVyLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbmNvbnN0IHJlc29sdXRpb24gPSAoXG5cdHN0YXRlID0ge1xuXHRcdHdpZHRoOiBjb250ZW50LmNsaWVudFdpZHRoLFxuXHRcdGhlaWdodDogY29udGVudC5jbGllbnRIZWlnaHQsXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x1dGlvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9yZXNvbHV0aW9uLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgaW1hZ2UgPSAoXG5cdHN0YXRlID0ge1xuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHQvLyBjYXNlIFR5cGVzLkxPQURJTkc6XG5cdFx0Ly8gXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHQvLyBcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHQvLyBcdH0pXG5cdFx0Ly8gY2FzZSBUeXBlcy5MT0FERUQ6XG5cdFx0Ly8gXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHQvLyBcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0Ly8gXHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9pbWFnZS5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xuXG5pbXBvcnQge3Jlc2l6ZVdpbmRvd30gZnJvbSAnLi4vYWN0aW9ucy9yZXNpemVXaW5kb3cnXG5pbXBvcnQge3VwZGF0ZVRpbWUsIHJlc2V0VGltZX0gZnJvbSAnLi4vYWN0aW9ucy90aW1lJ1xuaW1wb3J0IHttb3ZlTW91c2V9IGZyb20gJy4uL2FjdGlvbnMvbW92ZU1vdXNlJ1xuaW1wb3J0IHtsb2FkaW5nLCBsb2FkZWR9IGZyb20gJy4uL2FjdGlvbnMvbG9hZCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0XHRsb2FkaW5nOiBzdGF0ZS5sb2FkLmxvYWRpbmcsXG5cdFx0d2lkdGg6IHN0YXRlLnJlc29sdXRpb24ud2lkdGgsXG5cdFx0aGVpZ2h0OiBzdGF0ZS5yZXNvbHV0aW9uLmhlaWdodCxcblx0XHR3aW5kb3dXaWR0aDogc3RhdGUud2luZG93U2l6ZS54LFxuXHRcdHdpbmRvd0hlaWdodDogc3RhdGUud2luZG93U2l6ZS55LFxuXHRcdGNhbWVyYVBvc2l0aW9uOiBzdGF0ZS5jYW1lcmEucG9zaXRpb24sXG5cdFx0ZWxhcHNlZDogc3RhdGUudGltZS5lbGFwc2VkLFxuXHRcdGR1cmF0aW9uOiBzdGF0ZS50aW1lLmR1cmF0aW9uLFxuXHRcdG1vdXNlOiBzdGF0ZS5tb3VzZS50YXJnZXQsXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0b25Mb2FkaW5nOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnTG9hZGluZy4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkaW5nKCkpXG5cdFx0fSxcblx0XHRvbkxvYWRlZDogKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2xvYWRlZC4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkZWQoKSlcblx0XHR9LFxuXHRcdG9uUmVzaXplOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzaXplV2luZG93KGUpKVxuXHRcdH0sXG5cdFx0b25VcGRhdGVUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVUaW1lKCkpXG5cdFx0fSxcblx0XHRvblJlc2V0VGltZTogKCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzZXRUaW1lKCkpXG5cdFx0fSxcblx0XHRvbk1vdmVNb3VzZTogKGUpID0+IHtcblx0XHRcdGRpc3BhdGNoKG1vdmVNb3VzZShlKSlcblx0XHR9LFxuXHR9XG59XG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW1hZ2UpXG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29udGFpbmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJ1xuXG5pbXBvcnQgTW91c2VJbnB1dCBmcm9tICcuLi9saWIvTW91c2VJbnB1dCdcblxuaW1wb3J0IHZzIGZyb20gJy4uL2dsc2wvaW1hZ2UudmVydCdcbmltcG9ydCBmcyBmcm9tICcuLi9nbHNsL2ltYWdlLmZyYWcnXG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5vbkxvYWRpbmcgPSA6OnRoaXMucHJvcHMub25Mb2FkaW5nXG5cdFx0dGhpcy5vbkxvYWRlZCA9IDo6dGhpcy5wcm9wcy5vbkxvYWRlZFxuXHRcdHRoaXMub25SZXNpemUgPSA6OnRoaXMucHJvcHMub25SZXNpemVcblx0XHR0aGlzLm9uVXBkYXRlVGltZSA9IDo6dGhpcy5wcm9wcy5vblVwZGF0ZVRpbWVcblx0XHR0aGlzLm9uTW92ZU1vdXNlID0gOjp0aGlzLnByb3BzLm9uTW92ZU1vdXNlXG5cdFx0dGhpcy50ZXh0dXJlcyA9IHtcblx0XHRcdFwibWFpblwiOiB7XG5cdFx0XHRcdHVybDogXCIuLi9hc3NldHMvaW1nL3dhdGVyQ29sb3IvaXBob25leC5wbmdcIlxuXHRcdFx0fSxcblx0XHRcdFwibm9pc2VcIjoge1xuXHRcdFx0XHR1cmw6IFwiLi4vYXNzZXRzL2ltZy93YXRlckNvbG9yL25vaXNlLnBuZ1wiXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyogTGlmZUN5Y2xlICovXG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5pbml0aWFsaXplKCkudGhlbigoKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5vbkxvYWRlZCgpXG5cdFx0XHRcdHRoaXMuaGFuZGxlTW91c2VNb3ZlKClcblx0XHRcdFx0Ly8gdGhpcy5zZXRNb3VzZUlucHV0KClcblx0XHRcdFx0dGhpcy5oYW5kbGVSZXNpemUoKVxuXG5cdFx0XHR9LCAzMDApXG5cdFx0fSlcblx0fVxuXG5cdC8qIGN1c3RvbSBGdW5jdGlvbiAgKi9cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMub25Mb2FkaW5nKClcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5sb2FkVGV4dHVyZSgpXG5cdFx0XHRyZXNvbHZlKClcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZVJlc2l6ZSgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UpXG5cdH1cblxuXHRoYW5kbGVNb3VzZU1vdmUoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlTW91c2UsIGZhbHNlKVxuXHRcdH1cblxuXG5cdGhhbmRsZUFuaW1hdGUoKSB7XG5cdFx0dGhpcy5vblVwZGF0ZVRpbWUoKVxuXHR9XG5cblx0bG9hZFRleHR1cmUoKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKVxuXHRcdGxvYWRlci5jcm9zc09yaWdpbiA9ICcqJ1xuXHRcdGZvciAobGV0IG5hbWUgaW4gdGhpcy50ZXh0dXJlcykge1xuXHRcdFx0bG9hZGVyLmxvYWQodGhpcy50ZXh0dXJlc1tuYW1lXS51cmwsICh0ZXh0dXJlKSA9PiB7XG4gXHRcdFx0dGhpcy50ZXh0dXJlc1tuYW1lXS50ZXh0dXJlID0gdGV4dHVyZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2xvYWRpbmcsIHdpZHRoLCBoZWlnaHQsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQsIGNhbWVyYVBvc2l0aW9uLCBlbGFwc2VkLCBkdXJhdGlvbiwgbW91c2V9ID0gdGhpcy5wcm9wc1xuXG5cdFx0aWYgKGxvYWRpbmcpIHJldHVybig8aDI+TG9hZGluZy4uLjwvaDI+KVxuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiByZWY9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PFJlYWN0M1xuXHRcdFx0XHRcdG1haW5DYW1lcmE9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdHdpZHRoPXt3aWR0aH1cblx0XHRcdFx0XHRoZWlnaHQ9e2hlaWdodH1cblx0XHRcdFx0XHRvbkFuaW1hdGU9ezo6dGhpcy5oYW5kbGVBbmltYXRlfVxuXHRcdFx0XHRcdGNsZWFyQ29sb3I9ezB4ZmZmZmZmfVxuXHRcdFx0XHRcdGFudGlhbGlhcz17dHJ1ZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzY2VuZVxuXHRcdFx0XHRcdFx0cmVmPVwic2NlbmVcIlxuXHRcdFx0XHRcdD5cblxuXG5cdFx0XHRcdFx0XHR7LyogQ2FtZXJhICovfVxuXHRcdFx0XHRcdFx0PHBlcnNwZWN0aXZlQ2FtZXJhXG5cdFx0XHRcdFx0XHRcdHJlZj1cImNhbWVyYVwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdFx0XHRmb3Y9ezE1fVxuXHRcdFx0XHRcdFx0XHRhc3BlY3Q9e3dpZHRoIC8gaGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRuZWFyPXswLjAxfVxuXHRcdFx0XHRcdFx0XHRmYXI9ezEwMDB9XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXtjYW1lcmFQb3NpdGlvbn1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBMaWdodCAqL31cblx0XHRcdFx0XHRcdDxoZW1pc3BoZXJlTGlnaHRcblx0XHRcdFx0XHRcdFx0c2t5Q29sb3I9ezB4ZmZmZmJifVxuXHRcdFx0XHRcdFx0XHRncm91bmRDb2xvcj17MHg4ODc5Nzl9XG5cdFx0XHRcdFx0XHRcdGludGVuc2l0eT17MC45fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxkaXJlY3Rpb25hbExpZ2h0XG5cdFx0XHRcdFx0XHRcdGNvbG9yPXsweGZmZmZmZn1cblx0XHRcdFx0XHRcdFx0aW50ZW5zaXR5PXswLjh9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHR7LyogSW1hZ2UgTWVzaCAqL31cblx0XHRcdFx0XHRcdDxtZXNoXG5cdFx0XHRcdFx0XHRcdHJlZj0naW1hZ2VNZXNoJ1xuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8cGxhbmVHZW9tZXRyeVxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxfVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PHNoYWRlck1hdGVyaWFsXG5cdFx0XHRcdFx0XHRcdFx0dmVydGV4U2hhZGVyPXt2c31cblx0XHRcdFx0XHRcdFx0XHRmcmFnbWVudFNoYWRlcj17ZnN9XG5cdFx0XHRcdFx0XHRcdFx0YmxlbmRpbmc9e1RIUkVFLk5vcm1hbEJsZW5kaW5nfVxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zcGFyZW50PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm1zPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2NvbG9yTWFwJ30gdHlwZT17J3QnfSB2YWx1ZT17dGhpcy50ZXh0dXJlc1snbWFpbiddLnRleHR1cmV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnbm9pc2VNYXAnfSB0eXBlPXsndCd9IHZhbHVlPXt0aGlzLnRleHR1cmVzWydub2lzZSddLnRleHR1cmV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsndGltZSd9IHR5cGU9eydmJ30gdmFsdWU9e2VsYXBzZWR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnc2Nyb2xsJ30gdHlwZT17J2YnfSB2YWx1ZT17c2Nyb2xsfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2R1cmF0aW9uJ30gdHlwZT17J2YnfSB2YWx1ZT17ZHVyYXRpb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnbW91c2UnfSB0eXBlPXsndmVjMid9IHZhbHVlPXttb3VzZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydyZXNvbHV0aW9uJ30gdHlwZT17J3ZlYzInfSB2YWx1ZT17bmV3IFRIUkVFLlZlY3RvcjIod2lkdGgsIGhlaWdodCl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC91bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0PC9zaGFkZXJNYXRlcmlhbD5cblxuXHRcdFx0XHRcdFx0PC9tZXNoPlxuXG5cdFx0XHRcdFx0PC9zY2VuZT5cblx0XHRcdFx0PC9SZWFjdDM+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvY29tcG9uZW50cy9JbWFnZS5qcyIsImltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IFJlYWN0VXBkYXRlcyBmcm9tICdyZWFjdC1kb20vbGliL1JlYWN0VXBkYXRlcyc7XG5cbmltcG9ydCBTeW50aGV0aWNNb3VzZUV2ZW50IGZyb20gJ3JlYWN0LWRvbS9saWIvU3ludGhldGljTW91c2VFdmVudCc7XG5cbmltcG9ydCBNb2R1bGUgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXIvbGliL01vZHVsZSc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncmVhY3QvbGliL1JlYWN0UHJvcFR5cGVzJztcblxuY29uc3QgdGVtcFZlY3RvcjIgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5jb25zdCBsaXN0ZW5lckNhbGxiYWNrTmFtZXMgPSB7XG4gIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcbiAgbW91c2V1cDogJ29uTW91c2VVcCcsXG59O1xuXG5jb25zdCBtb3VzZUV2ZW50cyA9IFtcbiAgJ29uTW91c2VFbnRlcicsXG4gICdvbk1vdXNlTGVhdmUnLFxuICAnb25Nb3VzZURvd24nLFxuICAnb25Nb3VzZVVwJyxcbiAgJ29uQ2xpY2snLFxuXTtcblxuY29uc3QgYm9vbFByb3BzID0ge1xuICBpZ25vcmVQb2ludGVyRXZlbnRzOiBmYWxzZSxcbn07XG5cbmNsYXNzIE1vdXNlSW5wdXQgZXh0ZW5kcyBNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faXNSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zID0gZmFsc2U7XG4gICAgdGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0ID0gbnVsbDtcblxuICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycyA9IFtdO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBzZXR1cChyZWFjdDNSZW5kZXJlckluc3RhbmNlKSB7XG4gICAgc3VwZXIuc2V0dXAocmVhY3QzUmVuZGVyZXJJbnN0YW5jZSk7XG5cbiAgICBjb25zdCBPYmplY3QzRERlc2NyaXB0b3IgPSByZWFjdDNSZW5kZXJlckluc3RhbmNlLnRocmVlRWxlbWVudERlc2NyaXB0b3JzLm9iamVjdDNELmNvbnN0cnVjdG9yO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhyZWFjdDNSZW5kZXJlckluc3RhbmNlLnRocmVlRWxlbWVudERlc2NyaXB0b3JzKS5mb3JFYWNoKGVsZW1lbnREZXNjcmlwdG9yID0+IHtcbiAgICAgIGlmIChlbGVtZW50RGVzY3JpcHRvciBpbnN0YW5jZW9mIE9iamVjdDNERGVzY3JpcHRvcikge1xuICAgICAgICBtb3VzZUV2ZW50cy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgICAgZWxlbWVudERlc2NyaXB0b3IuaGFzRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYm9vbFByb3BzKS5mb3JFYWNoKHByb3BOYW1lID0+IHtcbiAgICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5oYXNQcm9wKHByb3BOYW1lLCB7XG4gICAgICAgICAgICB0eXBlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIHVwZGF0ZSh0aHJlZU9iamVjdCwgdmFsdWUsIGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0aHJlZU9iamVjdC51c2VyRGF0YVtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJlZU9iamVjdC51c2VyRGF0YVtwcm9wTmFtZV0gPSBib29sUHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmYXVsdDogYm9vbFByb3BzW3Byb3BOYW1lXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzLnB1c2goZWxlbWVudERlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWFkeTtcbiAgfVxuXG4gIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICByZXN0cmljdEludGVyc2VjdGlvbnMob2JqZWN0cywgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMgPSB0cnVlO1xuICAgIHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCA9IG9iamVjdHM7XG5cbiAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlID0gcmVjdXJzaXZlO1xuICB9XG5cbiAgcmVhZHkoc2NlbmUsIGNvbnRhaW5lciwgY2FtZXJhKSB7XG4gICAgdGhpcy5faXNSZWFkeSA9IHRydWU7XG5cbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLl9jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XG4gICAgdGhpcy5fbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgdGhpcy5fb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX21vdXNlLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRW50ZXJMZWF2ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9jb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdGhpcy5faG92ZXJPYmplY3RNYXAgPSB7fTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuXG4gICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMobGlzdGVuZXJDYWxsYmFja05hbWVzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICBsZXQgYm91bmRMaXN0ZW5lcjtcblxuICAgICAgY29uc3QgbGlzdGVuZXJDYWxsYmFja05hbWUgPSBsaXN0ZW5lckNhbGxiYWNrTmFtZXNbZXZlbnROYW1lXTtcbiAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgICAgYm91bmRMaXN0ZW5lciA9IHRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcywgbGlzdGVuZXJDYWxsYmFja05hbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgICBib3VuZExpc3RlbmVyID0gdGhpcy5fb25Nb3VzZVVwLmJpbmQodGhpcywgbGlzdGVuZXJDYWxsYmFja05hbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm91bmRMaXN0ZW5lcikge1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGJvdW5kTGlzdGVuZXIsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZExpc3RlbmVyLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfb25Nb3VzZURvd24gPSAoY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSA9PiB7XG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgICB9ID0gdGhpcy5faW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KTtcblxuICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IGludGVyc2VjdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX29uTW91c2VVcCA9IChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpID0+IHtcbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudCxcbiAgICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICAgIH0gPSB0aGlzLl9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpO1xuXG4gICAgICBpZiAoIShldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICBpZiAodGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW50ZXJzZWN0IGN1cnJlbnQgaW50ZXJzZWN0aW9ucyB3aXRoIHRoZSBpbnRlcnNlY3Rpb25zIGZvciBjbGlja1xuICAgICAgICAvLyAgIGNhbGwgeHppYml0IEFTQVAgd2UgaGF2ZSBhIGdvb2Qgb25lIHNvblxuICAgICAgICAvLyAgICAgaXQgd2Fzbid0IHRoYXQgZ29vZFxuXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvblVVSURNYXAgPSB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sucmVkdWNlKChtYXAsIGludGVyc2VjdGlvbikgPT4ge1xuICAgICAgICAgIG1hcFtpbnRlcnNlY3Rpb24ub2JqZWN0LnV1aWRdID0gaW50ZXJzZWN0aW9uO1xuXG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tpXTtcblxuICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgICAgICBjb25zdCB1dWlkID0gb2JqZWN0LnV1aWQ7XG5cbiAgICAgICAgICBpZiAoaW50ZXJzZWN0aW9uVVVJRE1hcFt1dWlkXSkge1xuICAgICAgICAgICAgLy8gb2ggYm95IG9oIGJveSBoZXJlIHdlIGdvLCB3ZSBnb3QgYSBjbGlja2VyXG5cbiAgICAgICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXJcbiAgICAgICAgICAgICAgLmRpc3BhdGNoRXZlbnQob2JqZWN0LCAnb25DbGljaycsXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnY2xpY2snLCBldmVudCksIGludGVyc2VjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuICB9O1xuXG4gIF9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcHJvdG90eXBlKSB7XG4gICAgcmV0dXJuIFN5bnRoZXRpY01vdXNlRXZlbnQuZ2V0UG9vbGVkKG51bGwsIG51bGwsXG4gICAgICBuZXcgTW91c2VFdmVudChldmVudFR5cGUsIHByb3RvdHlwZSksIHByb3RvdHlwZS50YXJnZXQpO1xuICB9XG5cbiAgX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gU3ludGhldGljTW91c2VFdmVudC5nZXRQb29sZWQobnVsbCwgbnVsbCwgbW91c2VFdmVudCwgbW91c2VFdmVudC50YXJnZXQpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX2dldEludGVyc2VjdGlvbnModGVtcFZlY3RvcjIuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpKTtcblxuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tpXTtcblxuICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KG9iamVjdCwgY2FsbGJhY2tOYW1lLCBldmVudCwgaW50ZXJzZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBldmVudCxcbiAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIF9nZXRJbnRlcnNlY3Rpb25zKG1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGlmICh0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyh0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QsXG4gICAgICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KHRoaXMuX3NjZW5lLCB0cnVlKTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yMn0gbW91c2VDb29yZHMgdXN1YWxseSBhbiBldmVudCdzIGNsaWVudFggYW5kIGNsaWVudFlcbiAgICogQHJldHVybnMge1RIUkVFLlJheX1cbiAgICovXG4gIGdldENhbWVyYVJheShtb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGNvbnN0IHJlc3VsdFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5yYXkuY29weShvcmlnaW5hbFJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0UmF5O1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBpbnRlcnNlY3RPYmplY3QobW91c2VDb29yZHMsIG9iamVjdCwgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICBjb25zdCBvcmlnaW5hbFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdChvYmplY3QsIHJlY3Vyc2l2ZSk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIucmF5LmNvcHkob3JpZ2luYWxSYXkpO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBjb250YWluZXJSZXNpemVkKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1JlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlRW50ZXJMZWF2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVFbnRlckxlYXZlKCkge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9nZXRJbnRlcnNlY3Rpb25zKHRoaXMuX21vdXNlKTtcblxuICAgIGNvbnN0IGhvdmVyTWFwVG9VcGRhdGUgPSB7XG4gICAgICAuLi50aGlzLl9ob3Zlck9iamVjdE1hcCxcbiAgICB9O1xuXG4gICAgY29uc3QgbW91c2VFbnRlckV2ZW50ID0gdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnbW91c2VFbnRlcicsIHtcbiAgICAgIHRhcmdldDogdGhpcy5fY29udGFpbmVyLFxuICAgICAgY2xpZW50WDogdGhpcy5fbW91c2UueCxcbiAgICAgIGNsaWVudFk6IHRoaXMuX21vdXNlLnksXG4gICAgfSk7XG5cbiAgICAvLyBmaW5kIGZpcnN0IGludGVyc2VjdGlvbiB0aGF0IGRvZXMgbm90IGlnbm9yZSBwb2ludGVyIGV2ZW50c1xuICAgIGZvciAobGV0IGRlcHRoID0gMDsgZGVwdGggPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytkZXB0aCkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tkZXB0aF07XG4gICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICBpZiAob2JqZWN0LnVzZXJEYXRhICYmIG9iamVjdC51c2VyRGF0YS5pZ25vcmVQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1dWlkID0gb2JqZWN0LnV1aWQ7XG5cbiAgICAgIGlmICh0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXSkge1xuICAgICAgICBkZWxldGUgaG92ZXJNYXBUb1VwZGF0ZVt1dWlkXTtcblxuICAgICAgICAvLyBqdXN0IHVwZGF0ZSB0aGF0IGludGVyc2VjdGlvblxuICAgICAgICB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXS5pbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXSA9IHtcbiAgICAgICAgICBvYmplY3QsXG4gICAgICAgICAgaW50ZXJzZWN0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghKG1vdXNlRW50ZXJFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBtb3VzZUVudGVyRXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQob2JqZWN0LCAnb25Nb3VzZUVudGVyJyxcbiAgICAgICAgICAgIG1vdXNlRW50ZXJFdmVudCwgaW50ZXJzZWN0aW9uLCBkZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgaGF2ZSBmb3VuZCB0aGUgZmlyc3Qgc29saWQgaW50ZXJzZWN0aW9uLCBkb24ndCBnbyBmdXJ0aGVyXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBtb3VzZUxlYXZlRXZlbnQgPSB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdtb3VzZUxlYXZlJywge1xuICAgICAgdGFyZ2V0OiB0aGlzLl9jb250YWluZXIsXG4gICAgICBjbGllbnRYOiB0aGlzLl9tb3VzZS54LFxuICAgICAgY2xpZW50WTogdGhpcy5fbW91c2UueSxcbiAgICB9KTtcblxuICAgIC8vIGRlbGV0ZSBhbGwgdW5zZWVuIHV1aWRzIGluIGhvdmVyIG1hcFxuICAgIGNvbnN0IHVuc2VlblVVSURzID0gT2JqZWN0LmtleXMoaG92ZXJNYXBUb1VwZGF0ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuc2VlblVVSURzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCB1dWlkID0gdW5zZWVuVVVJRHNbaV07XG5cbiAgICAgIGlmICghKG1vdXNlTGVhdmVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBtb3VzZUxlYXZlRXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdLm9iamVjdCxcbiAgICAgICAgICAnb25Nb3VzZUxlYXZlJywgbW91c2VMZWF2ZUV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKHNjcmVlbk1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lclJlY3Q7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gc2NyZWVuTW91c2VDb29yZHMuY2xvbmUoKVxuICAgICAgLnN1Yih0ZW1wVmVjdG9yMi5zZXQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcCkpXG4gICAgICAuZGl2aWRlKHRlbXBWZWN0b3IyLnNldChjb250YWluZXJSZWN0LndpZHRoLCBjb250YWluZXJSZWN0LmhlaWdodCkpO1xuXG4gICAgLy8gbW91c2UueCA9ICggZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoICkgKiAyIC0gMTtcbiAgICAvLyBtb3VzZS55ID0gLSAoIGV2ZW50LmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgKSAqIDIgKyAxO1xuXG4gICAgcmVsYXRpdmVNb3VzZUNvb3Jkcy54ID0gcmVsYXRpdmVNb3VzZUNvb3Jkcy54ICogMiAtIDE7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3Jkcy55ID0gLXJlbGF0aXZlTW91c2VDb29yZHMueSAqIDIgKyAxO1xuXG4gICAgcmV0dXJuIHJlbGF0aXZlTW91c2VDb29yZHM7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIGRpc3Bvc2UoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUsIGZhbHNlKTtcblxuICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMuZm9yRWFjaChjbGVhbnVwRnVuY3Rpb24gPT4gY2xlYW51cEZ1bmN0aW9uKCkpO1xuICAgIGRlbGV0ZSB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zO1xuXG4gICAgZGVsZXRlIHRoaXMuX29uTW91c2VNb3ZlO1xuXG4gICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzLmZvckVhY2goZWxlbWVudERlc2NyaXB0b3IgPT4ge1xuICAgICAgY29uc3QgYWxsUHJvcHMgPSBPYmplY3Qua2V5cyhib29sUHJvcHMpXG4gICAgICAgIC5jb25jYXQobW91c2VFdmVudHMpO1xuXG4gICAgICBhbGxQcm9wcy5mb3JFYWNoKHByb3BOYW1lID0+IHtcbiAgICAgICAgZWxlbWVudERlc2NyaXB0b3IucmVtb3ZlUHJvcChwcm9wTmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3VzZUlucHV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9saWIvTW91c2VJbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdGM7XFxudmFyeWluZyB2ZWM0IHZjb2xvcjtcXG5hdHRyaWJ1dGUgdmVjMyBjb2xvcjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB0YyA9IHV2O1xcbiAgdmNvbG9yID0gdmVjNChjb2xvciwgMS4wKTtcXG4gIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9nbHNsL2ltYWdlLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDU1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHRjO1xcbnZhcnlpbmcgdmVjNCB2Y29sb3I7XFxuXFxudW5pZm9ybSBzYW1wbGVyMkQgY29sb3JNYXA7XFxudW5pZm9ybSBzYW1wbGVyMkQgbm9pc2VNYXA7XFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcblxcbnZvaWQgbWFpbigpe1xcblxcbiAgZmxvYXQgc2VmbG9hdCA9IDEuMCAtIG1pbihleHAodGltZSAqIDAuNikgKiAwLjUsIDEuMCk7XFxuICB2ZWMyIHNldmVjMiA9IHZlYzIobWluKHRpbWUgKiAwLjgsIDEuMCkpO1xcbiAgdmVjMyBzZXZlYzMgPSB2ZWMzKG1pbih0aW1lICogMC44LCAxLjApKTtcXG5cXG5cXHRmbG9hdCBncmFkaWVudFN0ZXAgPSBwb3coc2VmbG9hdCwgdGltZSkgKiAwLjA1O1xcblxcdGZsb2F0IGFkdmVjdFN0ZXAgPSBwb3coc2VmbG9hdCwgdGltZSkgKiAwLjA1O1xcblxcdGZsb2F0IGZsaXBIZWlnaHRNYXAgPSAxLjA7XFxuXFx0ZmxvYXQgZXhwYW5kID0gMS4wO1xcblxcblxcblxcdHZlYzQgYWR2ZWN0TWF0cml4ID0gdmVjNCgwLjEpO1xcblxcdHZlYzQgY3hwID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHRjLnggKyBncmFkaWVudFN0ZXAsIGZsaXBIZWlnaHRNYXAqdGMueSkpO1xcblxcdHZlYzQgY3huID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHRjLnggLSBncmFkaWVudFN0ZXAsIGZsaXBIZWlnaHRNYXAqdGMueSkpO1xcblxcdHZlYzQgY3lwID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHRjLngsIGZsaXBIZWlnaHRNYXAqKHRjLnkgKyBncmFkaWVudFN0ZXApKSk7XFxuXFx0dmVjNCBjeW4gPSB0ZXh0dXJlMkQobm9pc2VNYXAsIHZlYzIodGMueCwgZmxpcEhlaWdodE1hcCoodGMueSAtIGdyYWRpZW50U3RlcCkpKTtcXG5cXG5cXHR2ZWMzIGdyZXkgPSB2ZWMzKC4zLCAuNTksIC4xMSk7XFxuXFx0ZmxvYXQgYXhwID0gZG90KGdyZXksIGN4cC54eXopO1xcblxcdGZsb2F0IGF4biA9IGRvdChncmV5LCBjeG4ueHl6KTtcXG5cXHRmbG9hdCBheXAgPSBkb3QoZ3JleSwgY3lwLnh5eik7XFxuXFx0ZmxvYXQgYXluID0gZG90KGdyZXksIGN5bi54eXopO1xcblxcblxcdHZlYzIgZ3JhZCA9IHZlYzIoYXhwIC0gYXhuLCBheXAgLSBheW4pO1xcblxcdHZlYzIgbmV3dGMgPSB0YyArIGFkdmVjdFN0ZXAgKiBub3JtYWxpemUoYWR2ZWN0TWF0cml4Lnh5ICogZ3JhZCkgKiBleHBhbmQ7XFxuXFxuXFx0dmVjMyBiYXNlQ29sb3IgPSB0ZXh0dXJlMkQoY29sb3JNYXAsIG5ld3RjKS5yZ2IgKiB2Y29sb3IucmdiO1xcblxcbiAgZ2xfRnJhZ0NvbG9yLnJnYiA9IGJhc2VDb2xvciAqIHNldmVjMztcXG5cXG5cXHRnbF9GcmFnQ29sb3IuYSA9IHZjb2xvci5hO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9nbHNsL2ltYWdlLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDU1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgcmVzaXplV2luZG93ID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNJWkVfV0lORE9XLFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGltZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5VUERBVEVfVElNRSxcblx0fVxufVxuXG5leHBvcnQgY29uc3QgcmVzZXRUaW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlJFU0VUX1RJTUUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IG1vdmVNb3VzZSA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTU9WRV9NT1VTRSxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvbW92ZU1vdXNlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTE9BRElOR1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZWQgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTE9BREVEXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9sb2FkLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QudmFsdWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGlzRW51bSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKSB7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIl0sInNvdXJjZVJvb3QiOiIifQ==