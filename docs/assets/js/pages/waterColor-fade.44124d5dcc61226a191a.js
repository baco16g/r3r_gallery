webpackJsonp([2],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Types = {
	RESIZE_WINDOW: 'RESIZE_WINDOW',
	UPDATE_CAMERA_POSITION: 'UPDATE_CAMERA_POSITION',
	LOADING: 'LOADING',
	LOADED: 'LOADED',
	PLAY_TIME: 'PLAY_TIME',
	REWIND_TIME: 'REWIND_TIME'
};
exports.default = Types;

/***/ }),

/***/ 538:
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

var _reducers = __webpack_require__(539);

var _reducers2 = _interopRequireDefault(_reducers);

var _ImageContainer = __webpack_require__(545);

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

var _resolution = __webpack_require__(544);

var _resolution2 = _interopRequireDefault(_resolution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  load: _load2.default,
  windowSize: _windowSize2.default,
  camera: _camera2.default,
  time: _time2.default,
  resolution: _resolution2.default
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

var _actiontypes = __webpack_require__(53);

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

var _actiontypes = __webpack_require__(53);

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

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(53);

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

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(53);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = function time() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		elapsed: 0.0,
		duration: 0.5
	};
	var action = arguments[1];


	switch (action.type) {
		case _actiontypes2.default.PLAY_TIME:
			return (0, _assign2.default)({}, state, {
				elapsed: Math.min(state.elapsed + 0.01, state.duration),
				duration: state.duration
			});
		case _actiontypes2.default.REWIND_TIME:
			return (0, _assign2.default)({}, state, {
				elapsed: Math.max(state.elapsed - 0.01, 0.0),
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


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(53);

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

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(30);

var _Image = __webpack_require__(546);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(550);

var _time = __webpack_require__(551);

var _load = __webpack_require__(552);

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
		duration: state.time.duration
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
		onPlayTime: function onPlayTime() {
			dispatch((0, _time.playTime)());
		},
		onRewindTime: function onRewindTime() {
			dispatch((0, _time.rewindTime)());
		}
	};
};

var ImageContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Image2.default);

exports.default = ImageContainer;

/***/ }),

/***/ 546:
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

var _MouseInput = __webpack_require__(547);

var _MouseInput2 = _interopRequireDefault(_MouseInput);

var _image = __webpack_require__(548);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(549);

var _image4 = _interopRequireDefault(_image3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function (_React$Component) {
	(0, _inherits3.default)(Image, _React$Component);

	function Image(props) {
		var _context;

		(0, _classCallCheck3.default)(this, Image);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call(this, props));

		_this.flagEnter = false;

		_this.onLoading = (_context = _this.props).onLoading.bind(_context);
		_this.onLoaded = (_context = _this.props).onLoaded.bind(_context);
		_this.onResize = (_context = _this.props).onResize.bind(_context);
		_this.onPlayTime = (_context = _this.props).onPlayTime.bind(_context);
		_this.onRewindTime = (_context = _this.props).onRewindTime.bind(_context);

		_this.textures = {
			"main": {
				url: "../assets/img/waterColor/model_02.jpg"
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
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(e) {
			this.flagEnter = true;
		}
	}, {
		key: 'handleMouseLeave',
		value: function handleMouseLeave(e) {
			this.flagEnter = false;
		}
	}, {
		key: 'handleAnimate',
		value: function handleAnimate() {
			if (this.flagEnter) this.onPlayTime();
			if (!this.flagEnter) this.onRewindTime();
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
			    mouse = _props2.mouse;


			if (loading) return _react2.default.createElement('h2', { className: 'loader' });

			return _react2.default.createElement(
				'div',
				{ ref: 'container' },
				_react2.default.createElement('h2', { className: 'loader' }),
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
					_react2.default.createElement('module', {
						ref: 'mouseInput',
						descriptor: _MouseInput2.default
					}),
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
								ref: 'imageMesh',
								onMouseEnter: function onMouseEnter(e) {
									return _this5.handleMouseEnter(e);
								},
								onMouseLeave: function onMouseLeave(e) {
									return _this5.handleMouseLeave(e);
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
									blending: THREE.NormalBlending,
									transparent: true
								},
								_react2.default.createElement(
									'uniforms',
									null,
									_react2.default.createElement('uniform', { name: 'colorMap', type: 't', value: this.textures['main'].texture }),
									_react2.default.createElement('uniform', { name: 'noiseMap', type: 't', value: this.textures['noise'].texture }),
									_react2.default.createElement('uniform', { name: 'elapsed', type: 'f', value: elapsed }),
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 547:
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

/***/ 548:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\nattribute vec3 color;\n\nvoid main() {\n  tc = uv;\n  vcolor = vec4(color, 1.0);\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\n\nuniform sampler2D colorMap;\nuniform sampler2D noiseMap;\nuniform float elapsed;\nuniform float duration;\n\nvoid main(){\n\n  float sefloat = duration - min(exp(elapsed) * 0.3, duration);\n  vec2 sevec2 = vec2(min(exp(elapsed) * 0.3, duration));\n  vec3 sevec3 = 2.0 - vec3(min(exp(elapsed * 2.0) , 2.0));\n\n\tfloat gradientStep = sefloat * 0.03;\n\tfloat advectStep = sefloat * 0.03;\n\tfloat flipHeightMap = 1.0;\n\tfloat expand = 1.0;\n\n\n\tvec4 advectMatrix = vec4(0.1);\n\tvec4 cxp = texture2D(noiseMap, vec2(tc.x + gradientStep, flipHeightMap*tc.y));\n\tvec4 cxn = texture2D(noiseMap, vec2(tc.x - gradientStep, flipHeightMap*tc.y));\n\tvec4 cyp = texture2D(noiseMap, vec2(tc.x, flipHeightMap*(tc.y + gradientStep)));\n\tvec4 cyn = texture2D(noiseMap, vec2(tc.x, flipHeightMap*(tc.y - gradientStep)));\n\n\tvec3 grey = vec3(.3, .59, .11);\n\tfloat axp = dot(grey, cxp.xyz);\n\tfloat axn = dot(grey, cxn.xyz);\n\tfloat ayp = dot(grey, cyp.xyz);\n\tfloat ayn = dot(grey, cyn.xyz);\n\n\tvec2 grad = vec2(axp - axn, ayp - ayn);\n\tvec2 newtc = tc + advectStep * normalize(advectMatrix.xy * grad) * expand;\n\n\tvec3 baseColor = texture2D(colorMap, newtc).rgb * vcolor.rgb;\n\n  gl_FragColor.rgb = baseColor;\n\n\tgl_FragColor.a = vcolor.a;\n}\n"

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(53);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.rewindTime = exports.playTime = undefined;

var _actiontypes = __webpack_require__(53);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playTime = exports.playTime = function playTime() {
	return {
		type: _actiontypes2.default.PLAY_TIME
	};
};

var rewindTime = exports.rewindTime = function rewindTime() {
	return {
		type: _actiontypes2.default.REWIND_TIME
	};
};

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(53);

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

},[538]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9sb2FkLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9yZXNvbHV0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9saWIvTW91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UudmVydCIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UuZnJhZyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy90aW1lLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyJdLCJuYW1lcyI6WyJUeXBlcyIsIlJFU0laRV9XSU5ET1ciLCJVUERBVEVfQ0FNRVJBX1BPU0lUSU9OIiwiTE9BRElORyIsIkxPQURFRCIsIlBMQVlfVElNRSIsIlJFV0lORF9USU1FIiwic3RvcmUiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZCIsIndpbmRvd1NpemUiLCJjYW1lcmEiLCJ0aW1lIiwicmVzb2x1dGlvbiIsInN0YXRlIiwibG9hZGluZyIsImFjdGlvbiIsInR5cGUiLCJUSFJFRSIsIlZlY3RvcjIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsIlZlY3RvcjMiLCJlbGFwc2VkIiwiZHVyYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwiY29udGVudCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ3aW5kb3dXaWR0aCIsIngiLCJ3aW5kb3dIZWlnaHQiLCJ5IiwiY2FtZXJhUG9zaXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJvbkxvYWRlZCIsIm9uUmVzaXplIiwiZSIsIm9uUGxheVRpbWUiLCJvblJld2luZFRpbWUiLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwicHJvcHMiLCJmbGFnRW50ZXIiLCJ0ZXh0dXJlcyIsInVybCIsImluaXRpYWxpemUiLCJ0aGVuIiwic2V0VGltZW91dCIsInNldE1vdXNlSW5wdXQiLCJoYW5kbGVSZXNpemUiLCJuZXdQcm9wcyIsIm1vdXNlSW5wdXQiLCJyZWZzIiwiY29udGFpbmVyUmVzaXplZCIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkVGV4dHVyZSIsImNvbnRhaW5lciIsImlzUmVhZHkiLCJzY2VuZSIsInJlYWR5Iiwic2V0QWN0aXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJjcm9zc09yaWdpbiIsIm5hbWUiLCJ0ZXh0dXJlIiwibW91c2UiLCJoYW5kbGVBbmltYXRlIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJOb3JtYWxCbGVuZGluZyIsInNjcm9sbCIsIkNvbXBvbmVudCIsInRlbXBWZWN0b3IyIiwibGlzdGVuZXJDYWxsYmFja05hbWVzIiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlRXZlbnRzIiwiYm9vbFByb3BzIiwiaWdub3JlUG9pbnRlckV2ZW50cyIsIk1vdXNlSW5wdXQiLCJfb25Nb3VzZURvd24iLCJjYWxsYmFja05hbWUiLCJtb3VzZUV2ZW50IiwiYmF0Y2hlZFVwZGF0ZXMiLCJfaW50ZXJzZWN0QW5kRGlzcGF0Y2giLCJldmVudCIsImludGVyc2VjdGlvbnMiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsIl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2siLCJfb25Nb3VzZVVwIiwiaW50ZXJzZWN0aW9uVVVJRE1hcCIsInJlZHVjZSIsIm1hcCIsImludGVyc2VjdGlvbiIsIm9iamVjdCIsInV1aWQiLCJpIiwibGVuZ3RoIiwiZXZlbnREaXNwYXRjaGVyIiwiZGlzcGF0Y2hFdmVudCIsIl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50IiwiX2lzUmVhZHkiLCJfYWN0aXZlIiwiX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyIsIl9vYmplY3RzVG9JbnRlcnNlY3QiLCJfcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSIsIl9wYXRjaGVkRGVzY3JpcHRvcnMiLCJyZWFjdDNSZW5kZXJlckluc3RhbmNlIiwiT2JqZWN0M0REZXNjcmlwdG9yIiwidGhyZWVFbGVtZW50RGVzY3JpcHRvcnMiLCJvYmplY3QzRCIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsImVsZW1lbnREZXNjcmlwdG9yIiwiaGFzRXZlbnQiLCJldmVudE5hbWUiLCJoYXNQcm9wIiwicHJvcE5hbWUiLCJib29sIiwidXBkYXRlIiwidGhyZWVPYmplY3QiLCJ2YWx1ZSIsInVzZXJEYXRhIiwiZGVmYXVsdCIsInB1c2giLCJhY3RpdmUiLCJvYmplY3RzIiwicmVjdXJzaXZlIiwiX3NjZW5lIiwiX2NvbnRhaW5lciIsIl9jYW1lcmEiLCJfcmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiX21vdXNlIiwiX29uTW91c2VNb3ZlIiwic2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJfdXBkYXRlRW50ZXJMZWF2ZSIsIl9jb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2hvdmVyT2JqZWN0TWFwIiwiX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMiLCJib3VuZExpc3RlbmVyIiwibGlzdGVuZXJDYWxsYmFja05hbWUiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsInByb3RvdHlwZSIsImdldFBvb2xlZCIsIk1vdXNlRXZlbnQiLCJ0YXJnZXQiLCJfZ2V0SW50ZXJzZWN0aW9ucyIsIm1vdXNlQ29vcmRzIiwicmVsYXRpdmVNb3VzZUNvb3JkcyIsIl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzIiwic2V0RnJvbUNhbWVyYSIsImludGVyc2VjdE9iamVjdHMiLCJpbnRlcnNlY3RPYmplY3QiLCJvcmlnaW5hbFJheSIsInJheSIsImNsb25lIiwicmVzdWx0UmF5IiwiY29weSIsImhvdmVyTWFwVG9VcGRhdGUiLCJtb3VzZUVudGVyRXZlbnQiLCJkZXB0aCIsIm1vdXNlTGVhdmVFdmVudCIsInVuc2VlblVVSURzIiwic2NyZWVuTW91c2VDb29yZHMiLCJjb250YWluZXJSZWN0Iiwic3ViIiwibGVmdCIsInRvcCIsImRpdmlkZSIsImNsZWFudXBGdW5jdGlvbiIsImFsbFByb3BzIiwiY29uY2F0IiwicmVtb3ZlUHJvcCIsInJlc2l6ZVdpbmRvdyIsInBsYXlUaW1lIiwicmV3aW5kVGltZSIsImxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRO0FBQ2JDLGdCQUFlLGVBREY7QUFFYkMseUJBQXdCLHdCQUZYO0FBR2JDLFVBQVMsU0FISTtBQUliQyxTQUFRLFFBSks7QUFLYkMsWUFBVyxXQUxFO0FBTWJDLGNBQWE7QUFOQSxDQUFkO2tCQVFlTixLOzs7Ozs7Ozs7Ozs7OztBQ1JmOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1PLFFBQVEsNENBQXNCLG9CQUNuQyxRQUFPQyxNQUFQLHVEQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQThCLE9BQU9BLE9BQU9DLGlCQUFkLEtBQW9DLFdBQWxFLEdBQWdGRCxPQUFPQyxpQkFBUCxFQUFoRixHQUE2RztBQUFBLFFBQUtDLENBQUw7QUFBQSxDQUQxRSxDQUF0QixDQUFkOztBQU1BLG1CQUFTQyxNQUFULENBQ0M7QUFBQTtBQUFBLEdBQVUsT0FBT0osS0FBakI7QUFDQztBQURELENBREQsRUFJRUssU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUpGLEU7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSw0QkFBZ0I7QUFDN0JDLHNCQUQ2QjtBQUU3QkMsa0NBRjZCO0FBRzdCQywwQkFINkI7QUFJN0JDLHNCQUo2QjtBQUs3QkM7QUFMNkIsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGY7Ozs7OztBQUVBLElBQU1KLE9BQU8sU0FBUEEsSUFBTyxHQUdFO0FBQUEsS0FGZEssS0FFYyx1RUFGTjtBQUNQQyxXQUFTO0FBREYsRUFFTTtBQUFBLEtBQVhDLE1BQVc7OztBQUVkLFNBQU9BLE9BQU9D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QjtBQUROLEVBQVA7QUFHQSxDQUpNOztBQU1BLElBQU11TSwwQkFBUyxTQUFUQSxNQUFTLEdBQU07QUFDM0IsUUFBTztBQUNOcEwsUUFBTSxzQkFBTWxCO0FBRE4sRUFBUDtBQUdBLENBSk0sQzs7Ozs7Ozs7QUNSUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7QUN0QkEsa0JBQWtCLHdEOzs7Ozs7O0FDQWxCO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNSRCxrQkFBa0Isd0Q7Ozs7Ozs7QUNBbEI7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7OztBQ2ZBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDckNBLGtCQUFrQix3RDs7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXNzZXRzL2pzL3BhZ2VzL3dhdGVyQ29sb3ItZmFkZS40NDEyNGQ1ZGNjNjEyMjZhMTkxYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFR5cGVzID0ge1xuXHRSRVNJWkVfV0lORE9XOiAnUkVTSVpFX1dJTkRPVycsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0TE9BRElORzogJ0xPQURJTkcnLFxuXHRMT0FERUQ6ICdMT0FERUQnLFxuXHRQTEFZX1RJTUU6ICdQTEFZX1RJTUUnLFxuXHRSRVdJTkRfVElNRTogJ1JFV0lORF9USU1FJyxcbn1cbmV4cG9ydCBkZWZhdWx0IFR5cGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsImltcG9ydCAnLi4vLi4vc3R5bHVzL3N0eWxlLnN0eWwnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXInXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGNvbXBvc2UoXG5cdHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gIT09ICd1bmRlZmluZWQnID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbikpO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8SW1hZ2VDb250YWluZXIvPlxuXHQ8L1Byb3ZpZGVyPlxuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvaW5kZXguanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZCdcbmltcG9ydCB3aW5kb3dTaXplIGZyb20gJy4vd2luZG93U2l6ZSdcbmltcG9ydCBjYW1lcmEgZnJvbSAnLi9jYW1lcmEnXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnXG5pbXBvcnQgcmVzb2x1dGlvbiBmcm9tICcuL3Jlc29sdXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxvYWQsXG4gIHdpbmRvd1NpemUsXG4gIGNhbWVyYSxcbiAgdGltZSxcbiAgcmVzb2x1dGlvbixcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgbG9hZCA9IChcblx0c3RhdGUgPSB7XG5cdFx0bG9hZGluZzogdHJ1ZVxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLkxPQURJTkc6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdH0pXG5cdFx0Y2FzZSBUeXBlcy5MT0FERUQ6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvbG9hZC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHdpbmRvd1NpemUgPSAoXG5cdHN0YXRlID0gbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuUkVTSVpFX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSxcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0XHRcdClcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTaXplXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3dpbmRvd1NpemUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBjYW1lcmEgPSAoXG5cdHN0YXRlID0ge1xuXHRcdHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAzLjgpLFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW1lcmFcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvY2FtZXJhLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgdGltZSA9IChcblx0c3RhdGUgPSB7XG5cdFx0ZWxhcHNlZDogMC4wLFxuXHRcdGR1cmF0aW9uOiAwLjUsXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuUExBWV9USU1FOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGVsYXBzZWQ6IE1hdGgubWluKHN0YXRlLmVsYXBzZWQgKyAwLjAxLCBzdGF0ZS5kdXJhdGlvbiksXG5cdFx0XHRcdGR1cmF0aW9uOiBzdGF0ZS5kdXJhdGlvbixcblx0XHRcdH0pXG5cdFx0Y2FzZSBUeXBlcy5SRVdJTkRfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiAgTWF0aC5tYXgoc3RhdGUuZWxhcHNlZCAtIDAuMDEsIDAuMCksXG5cdFx0XHRcdGR1cmF0aW9uOiBzdGF0ZS5kdXJhdGlvbixcblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGltZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbmNvbnN0IHJlc29sdXRpb24gPSAoXG5cdHN0YXRlID0ge1xuXHRcdHdpZHRoOiBjb250ZW50LmNsaWVudFdpZHRoLFxuXHRcdGhlaWdodDogY29udGVudC5jbGllbnRIZWlnaHQsXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x1dGlvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9yZXNvbHV0aW9uLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXG5cbmltcG9ydCB7cmVzaXplV2luZG93fSBmcm9tICcuLi9hY3Rpb25zL3Jlc2l6ZVdpbmRvdydcbmltcG9ydCB7cGxheVRpbWUsIHJld2luZFRpbWV9IGZyb20gJy4uL2FjdGlvbnMvdGltZSdcbmltcG9ydCB7bG9hZGluZywgbG9hZGVkfSBmcm9tICcuLi9hY3Rpb25zL2xvYWQnXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXG5cdHJldHVybiB7XG5cdFx0bG9hZGluZzogc3RhdGUubG9hZC5sb2FkaW5nLFxuXHRcdHdpZHRoOiBzdGF0ZS5yZXNvbHV0aW9uLndpZHRoLFxuXHRcdGhlaWdodDogc3RhdGUucmVzb2x1dGlvbi5oZWlnaHQsXG5cdFx0d2luZG93V2lkdGg6IHN0YXRlLndpbmRvd1NpemUueCxcblx0XHR3aW5kb3dIZWlnaHQ6IHN0YXRlLndpbmRvd1NpemUueSxcblx0XHRjYW1lcmFQb3NpdGlvbjogc3RhdGUuY2FtZXJhLnBvc2l0aW9uLFxuXHRcdGVsYXBzZWQ6IHN0YXRlLnRpbWUuZWxhcHNlZCxcblx0XHRkdXJhdGlvbjogc3RhdGUudGltZS5kdXJhdGlvbixcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRvbkxvYWRpbmc6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRpbmcoKSlcblx0XHR9LFxuXHRcdG9uTG9hZGVkOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbG9hZGVkLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRlZCgpKVxuXHRcdH0sXG5cdFx0b25SZXNpemU6IChlKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNpemVXaW5kb3coZSkpXG5cdFx0fSxcblx0XHRvblBsYXlUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChwbGF5VGltZSgpKVxuXHRcdH0sXG5cdFx0b25SZXdpbmRUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXdpbmRUaW1lKCkpXG5cdFx0fSxcblx0fVxufVxuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEltYWdlKVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9jb250YWluZXJzL0ltYWdlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0MyBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlcidcblxuaW1wb3J0IE1vdXNlSW5wdXQgZnJvbSAnLi4vbGliL01vdXNlSW5wdXQnXG5cbmltcG9ydCB2cyBmcm9tICcuLi9nbHNsL2ltYWdlLnZlcnQnXG5pbXBvcnQgZnMgZnJvbSAnLi4vZ2xzbC9pbWFnZS5mcmFnJ1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuZmxhZ0VudGVyID0gZmFsc2VcblxuXHRcdHRoaXMub25Mb2FkaW5nID0gOjp0aGlzLnByb3BzLm9uTG9hZGluZ1xuXHRcdHRoaXMub25Mb2FkZWQgPSA6OnRoaXMucHJvcHMub25Mb2FkZWRcblx0XHR0aGlzLm9uUmVzaXplID0gOjp0aGlzLnByb3BzLm9uUmVzaXplXG5cdFx0dGhpcy5vblBsYXlUaW1lID0gOjp0aGlzLnByb3BzLm9uUGxheVRpbWVcblx0XHR0aGlzLm9uUmV3aW5kVGltZSA9IDo6dGhpcy5wcm9wcy5vblJld2luZFRpbWVcblxuXHRcdHRoaXMudGV4dHVyZXMgPSB7XG5cdFx0XHRcIm1haW5cIjoge1xuXHRcdFx0XHR1cmw6IFwiLi4vYXNzZXRzL2ltZy93YXRlckNvbG9yL21vZGVsXzAyLmpwZ1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJub2lzZVwiOiB7XG5cdFx0XHRcdHVybDogXCIuLi9hc3NldHMvaW1nL3dhdGVyQ29sb3Ivbm9pc2UucG5nXCJcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiBMaWZlQ3ljbGUgKi9cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmluaXRpYWxpemUoKS50aGVuKCgpID0+IHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uTG9hZGVkKClcblx0XHRcdFx0Ly8gdGhpcy5oYW5kbGVNb3VzZU1vdmUoKVxuXHRcdFx0XHR0aGlzLnNldE1vdXNlSW5wdXQoKVxuXHRcdFx0XHR0aGlzLmhhbmRsZVJlc2l6ZSgpXG5cblx0XHRcdH0sIDMwMClcblx0XHR9KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKG5ld1Byb3BzKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bW91c2VJbnB1dCxcblx0XHR9ID0gdGhpcy5yZWZzO1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0d2luZG93V2lkdGgsXG5cdFx0XHR3aW5kb3dIZWlnaHQsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAod2luZG93V2lkdGggIT09IG5ld1Byb3BzLndpbmRvd1dpZHRoIHx8IHdpbmRvd0hlaWdodCAhPT0gbmV3UHJvcHMud2luZG93SGVpZ2h0KSB7XG5cdFx0XHRtb3VzZUlucHV0LmNvbnRhaW5lclJlc2l6ZWQoKTtcblx0XHR9XG5cdH1cblxuXG5cdC8qIGN1c3RvbSBGdW5jdGlvbiAgKi9cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMub25Mb2FkaW5nKClcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5sb2FkVGV4dHVyZSgpXG5cdFx0XHRyZXNvbHZlKClcblx0XHR9KTtcblx0fVxuXG5cdHNldE1vdXNlSW5wdXQoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bW91c2VJbnB1dCxcblx0XHRcdGNvbnRhaW5lclxuXHRcdH0gPSB0aGlzLnJlZnM7XG5cblx0XHRpZiAoIW1vdXNlSW5wdXQuaXNSZWFkeSgpKSB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdHNjZW5lLFxuXHRcdFx0XHRjYW1lcmEsXG5cdFx0XHR9ID0gdGhpcy5yZWZzO1xuXG5cdFx0XHRtb3VzZUlucHV0LnJlYWR5KHNjZW5lLCBjb250YWluZXIsIGNhbWVyYSk7XG5cdFx0XHQvLyBtb3VzZUlucHV0LnJlc3RyaWN0SW50ZXJzZWN0aW9ucyhpbWFnZU1lc2gpO1xuXHRcdFx0bW91c2VJbnB1dC5zZXRBY3RpdmUoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZVJlc2l6ZSgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UpXG5cdH1cblxuXHRoYW5kbGVNb3VzZUVudGVyKGUpIHtcblx0XHR0aGlzLmZsYWdFbnRlciA9IHRydWVcblx0fVxuXHRoYW5kbGVNb3VzZUxlYXZlKGUpIHtcblx0XHR0aGlzLmZsYWdFbnRlciA9IGZhbHNlXG5cdH1cblxuXHRoYW5kbGVBbmltYXRlKCkge1xuXHRcdGlmICh0aGlzLmZsYWdFbnRlcikgdGhpcy5vblBsYXlUaW1lKClcblx0XHRpZiAoIXRoaXMuZmxhZ0VudGVyKSB0aGlzLm9uUmV3aW5kVGltZSgpXG5cdH1cblxuXHRsb2FkVGV4dHVyZSgpIHtcblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpXG5cdFx0bG9hZGVyLmNyb3NzT3JpZ2luID0gJyonXG5cdFx0Zm9yIChsZXQgbmFtZSBpbiB0aGlzLnRleHR1cmVzKSB7XG5cdFx0XHRsb2FkZXIubG9hZCh0aGlzLnRleHR1cmVzW25hbWVdLnVybCwgKHRleHR1cmUpID0+IHtcbiBcdFx0XHR0aGlzLnRleHR1cmVzW25hbWVdLnRleHR1cmUgPSB0ZXh0dXJlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2xvYWRpbmcsIHdpZHRoLCBoZWlnaHQsIGNhbWVyYVBvc2l0aW9uLCBlbGFwc2VkLCBkdXJhdGlvbiwgbW91c2V9ID0gdGhpcy5wcm9wc1xuXG5cdFx0aWYgKGxvYWRpbmcpIHJldHVybig8aDIgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9oMj4pXG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IHJlZj1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9oMj5cblx0XHRcdFx0PFJlYWN0M1xuXHRcdFx0XHRcdG1haW5DYW1lcmE9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdHdpZHRoPXt3aWR0aH1cblx0XHRcdFx0XHRoZWlnaHQ9e2hlaWdodH1cblx0XHRcdFx0XHRvbkFuaW1hdGU9ezo6dGhpcy5oYW5kbGVBbmltYXRlfVxuXHRcdFx0XHRcdGNsZWFyQ29sb3I9ezB4ZmZmZmZmfVxuXHRcdFx0XHRcdGFudGlhbGlhcz17dHJ1ZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxtb2R1bGVcblx0XHRcdFx0XHRcdHJlZj1cIm1vdXNlSW5wdXRcIlxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRvcj17TW91c2VJbnB1dH1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PHNjZW5lXG5cdFx0XHRcdFx0XHRyZWY9XCJzY2VuZVwiXG5cdFx0XHRcdFx0PlxuXG5cblx0XHRcdFx0XHRcdHsvKiBDYW1lcmEgKi99XG5cdFx0XHRcdFx0XHQ8cGVyc3BlY3RpdmVDYW1lcmFcblx0XHRcdFx0XHRcdFx0cmVmPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0XHRcdGZvdj17MTV9XG5cdFx0XHRcdFx0XHRcdGFzcGVjdD17d2lkdGggLyBoZWlnaHR9XG5cdFx0XHRcdFx0XHRcdG5lYXI9ezAuMDF9XG5cdFx0XHRcdFx0XHRcdGZhcj17MTAwMH1cblx0XHRcdFx0XHRcdFx0cG9zaXRpb249e2NhbWVyYVBvc2l0aW9ufVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIExpZ2h0ICovfVxuXHRcdFx0XHRcdFx0PGhlbWlzcGhlcmVMaWdodFxuXHRcdFx0XHRcdFx0XHRza3lDb2xvcj17MHhmZmZmYmJ9XG5cdFx0XHRcdFx0XHRcdGdyb3VuZENvbG9yPXsweDg4Nzk3OX1cblx0XHRcdFx0XHRcdFx0aW50ZW5zaXR5PXswLjl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpcmVjdGlvbmFsTGlnaHRcblx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZmZmZmZmfVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBJbWFnZSBNZXNoICovfVxuXHRcdFx0XHRcdFx0PG1lc2hcblx0XHRcdFx0XHRcdFx0cmVmPSdpbWFnZU1lc2gnXG5cdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17KGUpID0+IHRoaXMuaGFuZGxlTW91c2VFbnRlcihlKX1cblx0XHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXsoZSkgPT4gdGhpcy5oYW5kbGVNb3VzZUxlYXZlKGUpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8cGxhbmVHZW9tZXRyeVxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxfVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PHNoYWRlck1hdGVyaWFsXG5cdFx0XHRcdFx0XHRcdFx0dmVydGV4U2hhZGVyPXt2c31cblx0XHRcdFx0XHRcdFx0XHRmcmFnbWVudFNoYWRlcj17ZnN9XG5cdFx0XHRcdFx0XHRcdFx0YmxlbmRpbmc9e1RIUkVFLk5vcm1hbEJsZW5kaW5nfVxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zcGFyZW50PXt0cnVlfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm1zPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2NvbG9yTWFwJ30gdHlwZT17J3QnfSB2YWx1ZT17dGhpcy50ZXh0dXJlc1snbWFpbiddLnRleHR1cmV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnbm9pc2VNYXAnfSB0eXBlPXsndCd9IHZhbHVlPXt0aGlzLnRleHR1cmVzWydub2lzZSddLnRleHR1cmV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnZWxhcHNlZCd9IHR5cGU9eydmJ30gdmFsdWU9e2VsYXBzZWR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnc2Nyb2xsJ30gdHlwZT17J2YnfSB2YWx1ZT17c2Nyb2xsfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2R1cmF0aW9uJ30gdHlwZT17J2YnfSB2YWx1ZT17ZHVyYXRpb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnbW91c2UnfSB0eXBlPXsndmVjMid9IHZhbHVlPXttb3VzZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydyZXNvbHV0aW9uJ30gdHlwZT17J3ZlYzInfSB2YWx1ZT17bmV3IFRIUkVFLlZlY3RvcjIod2lkdGgsIGhlaWdodCl9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC91bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0PC9zaGFkZXJNYXRlcmlhbD5cblxuXHRcdFx0XHRcdFx0PC9tZXNoPlxuXG5cdFx0XHRcdFx0PC9zY2VuZT5cblx0XHRcdFx0PC9SZWFjdDM+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvY29tcG9uZW50cy9JbWFnZS5qcyIsImltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IFJlYWN0VXBkYXRlcyBmcm9tICdyZWFjdC1kb20vbGliL1JlYWN0VXBkYXRlcyc7XG5cbmltcG9ydCBTeW50aGV0aWNNb3VzZUV2ZW50IGZyb20gJ3JlYWN0LWRvbS9saWIvU3ludGhldGljTW91c2VFdmVudCc7XG5cbmltcG9ydCBNb2R1bGUgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXIvbGliL01vZHVsZSc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncmVhY3QvbGliL1JlYWN0UHJvcFR5cGVzJztcblxuY29uc3QgdGVtcFZlY3RvcjIgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5jb25zdCBsaXN0ZW5lckNhbGxiYWNrTmFtZXMgPSB7XG4gIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcbiAgbW91c2V1cDogJ29uTW91c2VVcCcsXG59O1xuXG5jb25zdCBtb3VzZUV2ZW50cyA9IFtcbiAgJ29uTW91c2VFbnRlcicsXG4gICdvbk1vdXNlTGVhdmUnLFxuICAnb25Nb3VzZURvd24nLFxuICAnb25Nb3VzZVVwJyxcbiAgJ29uQ2xpY2snLFxuXTtcblxuY29uc3QgYm9vbFByb3BzID0ge1xuICBpZ25vcmVQb2ludGVyRXZlbnRzOiBmYWxzZSxcbn07XG5cbmNsYXNzIE1vdXNlSW5wdXQgZXh0ZW5kcyBNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faXNSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zID0gZmFsc2U7XG4gICAgdGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0ID0gbnVsbDtcblxuICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycyA9IFtdO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBzZXR1cChyZWFjdDNSZW5kZXJlckluc3RhbmNlKSB7XG4gICAgc3VwZXIuc2V0dXAocmVhY3QzUmVuZGVyZXJJbnN0YW5jZSk7XG5cbiAgICBjb25zdCBPYmplY3QzRERlc2NyaXB0b3IgPSByZWFjdDNSZW5kZXJlckluc3RhbmNlLnRocmVlRWxlbWVudERlc2NyaXB0b3JzLm9iamVjdDNELmNvbnN0cnVjdG9yO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhyZWFjdDNSZW5kZXJlckluc3RhbmNlLnRocmVlRWxlbWVudERlc2NyaXB0b3JzKS5mb3JFYWNoKGVsZW1lbnREZXNjcmlwdG9yID0+IHtcbiAgICAgIGlmIChlbGVtZW50RGVzY3JpcHRvciBpbnN0YW5jZW9mIE9iamVjdDNERGVzY3JpcHRvcikge1xuICAgICAgICBtb3VzZUV2ZW50cy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgICAgZWxlbWVudERlc2NyaXB0b3IuaGFzRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYm9vbFByb3BzKS5mb3JFYWNoKHByb3BOYW1lID0+IHtcbiAgICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5oYXNQcm9wKHByb3BOYW1lLCB7XG4gICAgICAgICAgICB0eXBlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIHVwZGF0ZSh0aHJlZU9iamVjdCwgdmFsdWUsIGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0aHJlZU9iamVjdC51c2VyRGF0YVtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJlZU9iamVjdC51c2VyRGF0YVtwcm9wTmFtZV0gPSBib29sUHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmYXVsdDogYm9vbFByb3BzW3Byb3BOYW1lXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzLnB1c2goZWxlbWVudERlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWFkeTtcbiAgfVxuXG4gIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICByZXN0cmljdEludGVyc2VjdGlvbnMob2JqZWN0cywgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMgPSB0cnVlO1xuICAgIHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCA9IG9iamVjdHM7XG5cbiAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlID0gcmVjdXJzaXZlO1xuICB9XG5cbiAgcmVhZHkoc2NlbmUsIGNvbnRhaW5lciwgY2FtZXJhKSB7XG4gICAgdGhpcy5faXNSZWFkeSA9IHRydWU7XG5cbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLl9jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XG4gICAgdGhpcy5fbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgdGhpcy5fb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX21vdXNlLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRW50ZXJMZWF2ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9jb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdGhpcy5faG92ZXJPYmplY3RNYXAgPSB7fTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuXG4gICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMobGlzdGVuZXJDYWxsYmFja05hbWVzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICBsZXQgYm91bmRMaXN0ZW5lcjtcblxuICAgICAgY29uc3QgbGlzdGVuZXJDYWxsYmFja05hbWUgPSBsaXN0ZW5lckNhbGxiYWNrTmFtZXNbZXZlbnROYW1lXTtcbiAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgICAgYm91bmRMaXN0ZW5lciA9IHRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcywgbGlzdGVuZXJDYWxsYmFja05hbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgICBib3VuZExpc3RlbmVyID0gdGhpcy5fb25Nb3VzZVVwLmJpbmQodGhpcywgbGlzdGVuZXJDYWxsYmFja05hbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm91bmRMaXN0ZW5lcikge1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGJvdW5kTGlzdGVuZXIsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZExpc3RlbmVyLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfb25Nb3VzZURvd24gPSAoY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSA9PiB7XG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgICB9ID0gdGhpcy5faW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KTtcblxuICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IGludGVyc2VjdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX29uTW91c2VVcCA9IChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpID0+IHtcbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudCxcbiAgICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICAgIH0gPSB0aGlzLl9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpO1xuXG4gICAgICBpZiAoIShldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICBpZiAodGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW50ZXJzZWN0IGN1cnJlbnQgaW50ZXJzZWN0aW9ucyB3aXRoIHRoZSBpbnRlcnNlY3Rpb25zIGZvciBjbGlja1xuICAgICAgICAvLyAgIGNhbGwgeHppYml0IEFTQVAgd2UgaGF2ZSBhIGdvb2Qgb25lIHNvblxuICAgICAgICAvLyAgICAgaXQgd2Fzbid0IHRoYXQgZ29vZFxuXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvblVVSURNYXAgPSB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sucmVkdWNlKChtYXAsIGludGVyc2VjdGlvbikgPT4ge1xuICAgICAgICAgIG1hcFtpbnRlcnNlY3Rpb24ub2JqZWN0LnV1aWRdID0gaW50ZXJzZWN0aW9uO1xuXG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tpXTtcblxuICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgICAgICBjb25zdCB1dWlkID0gb2JqZWN0LnV1aWQ7XG5cbiAgICAgICAgICBpZiAoaW50ZXJzZWN0aW9uVVVJRE1hcFt1dWlkXSkge1xuICAgICAgICAgICAgLy8gb2ggYm95IG9oIGJveSBoZXJlIHdlIGdvLCB3ZSBnb3QgYSBjbGlja2VyXG5cbiAgICAgICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXJcbiAgICAgICAgICAgICAgLmRpc3BhdGNoRXZlbnQob2JqZWN0LCAnb25DbGljaycsXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnY2xpY2snLCBldmVudCksIGludGVyc2VjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuICB9O1xuXG4gIF9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcHJvdG90eXBlKSB7XG4gICAgcmV0dXJuIFN5bnRoZXRpY01vdXNlRXZlbnQuZ2V0UG9vbGVkKG51bGwsIG51bGwsXG4gICAgICBuZXcgTW91c2VFdmVudChldmVudFR5cGUsIHByb3RvdHlwZSksIHByb3RvdHlwZS50YXJnZXQpO1xuICB9XG5cbiAgX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gU3ludGhldGljTW91c2VFdmVudC5nZXRQb29sZWQobnVsbCwgbnVsbCwgbW91c2VFdmVudCwgbW91c2VFdmVudC50YXJnZXQpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX2dldEludGVyc2VjdGlvbnModGVtcFZlY3RvcjIuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpKTtcblxuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tpXTtcblxuICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KG9iamVjdCwgY2FsbGJhY2tOYW1lLCBldmVudCwgaW50ZXJzZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBldmVudCxcbiAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIF9nZXRJbnRlcnNlY3Rpb25zKG1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGlmICh0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyh0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QsXG4gICAgICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KHRoaXMuX3NjZW5lLCB0cnVlKTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yMn0gbW91c2VDb29yZHMgdXN1YWxseSBhbiBldmVudCdzIGNsaWVudFggYW5kIGNsaWVudFlcbiAgICogQHJldHVybnMge1RIUkVFLlJheX1cbiAgICovXG4gIGdldENhbWVyYVJheShtb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGNvbnN0IHJlc3VsdFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5yYXkuY29weShvcmlnaW5hbFJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0UmF5O1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBpbnRlcnNlY3RPYmplY3QobW91c2VDb29yZHMsIG9iamVjdCwgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICBjb25zdCBvcmlnaW5hbFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdChvYmplY3QsIHJlY3Vyc2l2ZSk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIucmF5LmNvcHkob3JpZ2luYWxSYXkpO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBjb250YWluZXJSZXNpemVkKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1JlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlRW50ZXJMZWF2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVFbnRlckxlYXZlKCkge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9nZXRJbnRlcnNlY3Rpb25zKHRoaXMuX21vdXNlKTtcblxuICAgIGNvbnN0IGhvdmVyTWFwVG9VcGRhdGUgPSB7XG4gICAgICAuLi50aGlzLl9ob3Zlck9iamVjdE1hcCxcbiAgICB9O1xuXG4gICAgY29uc3QgbW91c2VFbnRlckV2ZW50ID0gdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnbW91c2VFbnRlcicsIHtcbiAgICAgIHRhcmdldDogdGhpcy5fY29udGFpbmVyLFxuICAgICAgY2xpZW50WDogdGhpcy5fbW91c2UueCxcbiAgICAgIGNsaWVudFk6IHRoaXMuX21vdXNlLnksXG4gICAgfSk7XG5cbiAgICAvLyBmaW5kIGZpcnN0IGludGVyc2VjdGlvbiB0aGF0IGRvZXMgbm90IGlnbm9yZSBwb2ludGVyIGV2ZW50c1xuICAgIGZvciAobGV0IGRlcHRoID0gMDsgZGVwdGggPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytkZXB0aCkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tkZXB0aF07XG4gICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICBpZiAob2JqZWN0LnVzZXJEYXRhICYmIG9iamVjdC51c2VyRGF0YS5pZ25vcmVQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1dWlkID0gb2JqZWN0LnV1aWQ7XG5cbiAgICAgIGlmICh0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXSkge1xuICAgICAgICBkZWxldGUgaG92ZXJNYXBUb1VwZGF0ZVt1dWlkXTtcblxuICAgICAgICAvLyBqdXN0IHVwZGF0ZSB0aGF0IGludGVyc2VjdGlvblxuICAgICAgICB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXS5pbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXSA9IHtcbiAgICAgICAgICBvYmplY3QsXG4gICAgICAgICAgaW50ZXJzZWN0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghKG1vdXNlRW50ZXJFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBtb3VzZUVudGVyRXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQob2JqZWN0LCAnb25Nb3VzZUVudGVyJyxcbiAgICAgICAgICAgIG1vdXNlRW50ZXJFdmVudCwgaW50ZXJzZWN0aW9uLCBkZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgaGF2ZSBmb3VuZCB0aGUgZmlyc3Qgc29saWQgaW50ZXJzZWN0aW9uLCBkb24ndCBnbyBmdXJ0aGVyXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBtb3VzZUxlYXZlRXZlbnQgPSB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdtb3VzZUxlYXZlJywge1xuICAgICAgdGFyZ2V0OiB0aGlzLl9jb250YWluZXIsXG4gICAgICBjbGllbnRYOiB0aGlzLl9tb3VzZS54LFxuICAgICAgY2xpZW50WTogdGhpcy5fbW91c2UueSxcbiAgICB9KTtcblxuICAgIC8vIGRlbGV0ZSBhbGwgdW5zZWVuIHV1aWRzIGluIGhvdmVyIG1hcFxuICAgIGNvbnN0IHVuc2VlblVVSURzID0gT2JqZWN0LmtleXMoaG92ZXJNYXBUb1VwZGF0ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuc2VlblVVSURzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCB1dWlkID0gdW5zZWVuVVVJRHNbaV07XG5cbiAgICAgIGlmICghKG1vdXNlTGVhdmVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBtb3VzZUxlYXZlRXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdLm9iamVjdCxcbiAgICAgICAgICAnb25Nb3VzZUxlYXZlJywgbW91c2VMZWF2ZUV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKHNjcmVlbk1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lclJlY3Q7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gc2NyZWVuTW91c2VDb29yZHMuY2xvbmUoKVxuICAgICAgLnN1Yih0ZW1wVmVjdG9yMi5zZXQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcCkpXG4gICAgICAuZGl2aWRlKHRlbXBWZWN0b3IyLnNldChjb250YWluZXJSZWN0LndpZHRoLCBjb250YWluZXJSZWN0LmhlaWdodCkpO1xuXG4gICAgLy8gbW91c2UueCA9ICggZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoICkgKiAyIC0gMTtcbiAgICAvLyBtb3VzZS55ID0gLSAoIGV2ZW50LmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgKSAqIDIgKyAxO1xuXG4gICAgcmVsYXRpdmVNb3VzZUNvb3Jkcy54ID0gcmVsYXRpdmVNb3VzZUNvb3Jkcy54ICogMiAtIDE7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3Jkcy55ID0gLXJlbGF0aXZlTW91c2VDb29yZHMueSAqIDIgKyAxO1xuXG4gICAgcmV0dXJuIHJlbGF0aXZlTW91c2VDb29yZHM7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIGRpc3Bvc2UoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUsIGZhbHNlKTtcblxuICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMuZm9yRWFjaChjbGVhbnVwRnVuY3Rpb24gPT4gY2xlYW51cEZ1bmN0aW9uKCkpO1xuICAgIGRlbGV0ZSB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zO1xuXG4gICAgZGVsZXRlIHRoaXMuX29uTW91c2VNb3ZlO1xuXG4gICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzLmZvckVhY2goZWxlbWVudERlc2NyaXB0b3IgPT4ge1xuICAgICAgY29uc3QgYWxsUHJvcHMgPSBPYmplY3Qua2V5cyhib29sUHJvcHMpXG4gICAgICAgIC5jb25jYXQobW91c2VFdmVudHMpO1xuXG4gICAgICBhbGxQcm9wcy5mb3JFYWNoKHByb3BOYW1lID0+IHtcbiAgICAgICAgZWxlbWVudERlc2NyaXB0b3IucmVtb3ZlUHJvcChwcm9wTmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3VzZUlucHV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9saWIvTW91c2VJbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdGM7XFxudmFyeWluZyB2ZWM0IHZjb2xvcjtcXG5hdHRyaWJ1dGUgdmVjMyBjb2xvcjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB0YyA9IHV2O1xcbiAgdmNvbG9yID0gdmVjNChjb2xvciwgMS4wKTtcXG4gIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9nbHNsL2ltYWdlLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDU0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHRjO1xcbnZhcnlpbmcgdmVjNCB2Y29sb3I7XFxuXFxudW5pZm9ybSBzYW1wbGVyMkQgY29sb3JNYXA7XFxudW5pZm9ybSBzYW1wbGVyMkQgbm9pc2VNYXA7XFxudW5pZm9ybSBmbG9hdCBlbGFwc2VkO1xcbnVuaWZvcm0gZmxvYXQgZHVyYXRpb247XFxuXFxudm9pZCBtYWluKCl7XFxuXFxuICBmbG9hdCBzZWZsb2F0ID0gZHVyYXRpb24gLSBtaW4oZXhwKGVsYXBzZWQpICogMC4zLCBkdXJhdGlvbik7XFxuICB2ZWMyIHNldmVjMiA9IHZlYzIobWluKGV4cChlbGFwc2VkKSAqIDAuMywgZHVyYXRpb24pKTtcXG4gIHZlYzMgc2V2ZWMzID0gMi4wIC0gdmVjMyhtaW4oZXhwKGVsYXBzZWQgKiAyLjApICwgMi4wKSk7XFxuXFxuXFx0ZmxvYXQgZ3JhZGllbnRTdGVwID0gc2VmbG9hdCAqIDAuMDM7XFxuXFx0ZmxvYXQgYWR2ZWN0U3RlcCA9IHNlZmxvYXQgKiAwLjAzO1xcblxcdGZsb2F0IGZsaXBIZWlnaHRNYXAgPSAxLjA7XFxuXFx0ZmxvYXQgZXhwYW5kID0gMS4wO1xcblxcblxcblxcdHZlYzQgYWR2ZWN0TWF0cml4ID0gdmVjNCgwLjEpO1xcblxcdHZlYzQgY3hwID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHRjLnggKyBncmFkaWVudFN0ZXAsIGZsaXBIZWlnaHRNYXAqdGMueSkpO1xcblxcdHZlYzQgY3huID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHRjLnggLSBncmFkaWVudFN0ZXAsIGZsaXBIZWlnaHRNYXAqdGMueSkpO1xcblxcdHZlYzQgY3lwID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHRjLngsIGZsaXBIZWlnaHRNYXAqKHRjLnkgKyBncmFkaWVudFN0ZXApKSk7XFxuXFx0dmVjNCBjeW4gPSB0ZXh0dXJlMkQobm9pc2VNYXAsIHZlYzIodGMueCwgZmxpcEhlaWdodE1hcCoodGMueSAtIGdyYWRpZW50U3RlcCkpKTtcXG5cXG5cXHR2ZWMzIGdyZXkgPSB2ZWMzKC4zLCAuNTksIC4xMSk7XFxuXFx0ZmxvYXQgYXhwID0gZG90KGdyZXksIGN4cC54eXopO1xcblxcdGZsb2F0IGF4biA9IGRvdChncmV5LCBjeG4ueHl6KTtcXG5cXHRmbG9hdCBheXAgPSBkb3QoZ3JleSwgY3lwLnh5eik7XFxuXFx0ZmxvYXQgYXluID0gZG90KGdyZXksIGN5bi54eXopO1xcblxcblxcdHZlYzIgZ3JhZCA9IHZlYzIoYXhwIC0gYXhuLCBheXAgLSBheW4pO1xcblxcdHZlYzIgbmV3dGMgPSB0YyArIGFkdmVjdFN0ZXAgKiBub3JtYWxpemUoYWR2ZWN0TWF0cml4Lnh5ICogZ3JhZCkgKiBleHBhbmQ7XFxuXFxuXFx0dmVjMyBiYXNlQ29sb3IgPSB0ZXh0dXJlMkQoY29sb3JNYXAsIG5ld3RjKS5yZ2IgKiB2Y29sb3IucmdiO1xcblxcbiAgZ2xfRnJhZ0NvbG9yLnJnYiA9IGJhc2VDb2xvcjtcXG5cXG5cXHRnbF9GcmFnQ29sb3IuYSA9IHZjb2xvci5hO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9nbHNsL2ltYWdlLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDU0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgcmVzaXplV2luZG93ID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNJWkVfV0lORE9XLFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgcGxheVRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUExBWV9USU1FLFxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCByZXdpbmRUaW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlJFV0lORF9USU1FLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvdGltZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURJTkdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVkID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURFRFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvbG9hZC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnZhbHVlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=