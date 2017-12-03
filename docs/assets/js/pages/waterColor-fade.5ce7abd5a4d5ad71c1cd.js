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
				url: "../assets/img/waterColor/sunflower.jpg"
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

module.exports = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nuniform sampler2D colorMap;\nuniform sampler2D noiseMap;\nuniform float elapsed;\nuniform float duration;\n\nvoid main(){\n\n\tvec2 uv = vUv;\n\n\tfloat sefloat = duration - min(exp(elapsed) * 0.3, duration);\n\n\tfloat gradientStep = sefloat * 0.05;\n\tfloat advectStep = sefloat * 0.05;\n\n\tvec4 cxp = texture2D(noiseMap, vec2(uv.x + gradientStep, uv.y));\n\tvec4 cxn = texture2D(noiseMap, vec2(uv.x - gradientStep, uv.y));\n\tvec4 cyp = texture2D(noiseMap, vec2(uv.x, uv.y + gradientStep));\n\tvec4 cyn = texture2D(noiseMap, vec2(uv.x, uv.y - gradientStep));\n\n\tvec3 origin = vec3(0.0);\n\tfloat dxp = distance(origin, cxp.xyz);\n\tfloat dxn = distance(origin, cxn.xyz);\n\tfloat dyp = distance(origin, cyp.xyz);\n\tfloat dyn = distance(origin, cyn.xyz);\n\n\tvec2 grad = vec2(dxp - dxn, dyp - dyn);\n\tvec2 newuv = uv + (advectStep * normalize(grad));\n\n\tvec3 baseColor = texture2D(colorMap, newuv).rgb;\n\n\tgl_FragColor = vec4(baseColor, 1.0);\n}\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9sb2FkLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9yZXNvbHV0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9saWIvTW91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UudmVydCIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UuZnJhZyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy90aW1lLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyJdLCJuYW1lcyI6WyJUeXBlcyIsIlJFU0laRV9XSU5ET1ciLCJVUERBVEVfQ0FNRVJBX1BPU0lUSU9OIiwiTE9BRElORyIsIkxPQURFRCIsIlBMQVlfVElNRSIsIlJFV0lORF9USU1FIiwic3RvcmUiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZCIsIndpbmRvd1NpemUiLCJjYW1lcmEiLCJ0aW1lIiwicmVzb2x1dGlvbiIsInN0YXRlIiwibG9hZGluZyIsImFjdGlvbiIsInR5cGUiLCJUSFJFRSIsIlZlY3RvcjIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsIlZlY3RvcjMiLCJlbGFwc2VkIiwiZHVyYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwiY29udGVudCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ3aW5kb3dXaWR0aCIsIngiLCJ3aW5kb3dIZWlnaHQiLCJ5IiwiY2FtZXJhUG9zaXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJvbkxvYWRlZCIsIm9uUmVzaXplIiwiZSIsIm9uUGxheVRpbWUiLCJvblJld2luZFRpbWUiLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwicHJvcHMiLCJmbGFnRW50ZXIiLCJ0ZXh0dXJlcyIsInVybCIsImluaXRpYWxpemUiLCJ0aGVuIiwic2V0VGltZW91dCIsInNldE1vdXNlSW5wdXQiLCJoYW5kbGVSZXNpemUiLCJuZXdQcm9wcyIsIm1vdXNlSW5wdXQiLCJyZWZzIiwiY29udGFpbmVyUmVzaXplZCIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkVGV4dHVyZSIsImNvbnRhaW5lciIsImlzUmVhZHkiLCJzY2VuZSIsInJlYWR5Iiwic2V0QWN0aXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJjcm9zc09yaWdpbiIsIm5hbWUiLCJ0ZXh0dXJlIiwibW91c2UiLCJoYW5kbGVBbmltYXRlIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJOb3JtYWxCbGVuZGluZyIsInNjcm9sbCIsIkNvbXBvbmVudCIsInRlbXBWZWN0b3IyIiwibGlzdGVuZXJDYWxsYmFja05hbWVzIiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlRXZlbnRzIiwiYm9vbFByb3BzIiwiaWdub3JlUG9pbnRlckV2ZW50cyIsIk1vdXNlSW5wdXQiLCJfb25Nb3VzZURvd24iLCJjYWxsYmFja05hbWUiLCJtb3VzZUV2ZW50IiwiYmF0Y2hlZFVwZGF0ZXMiLCJfaW50ZXJzZWN0QW5kRGlzcGF0Y2giLCJldmVudCIsImludGVyc2VjdGlvbnMiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsIl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2siLCJfb25Nb3VzZVVwIiwiaW50ZXJzZWN0aW9uVVVJRE1hcCIsInJlZHVjZSIsIm1hcCIsImludGVyc2VjdGlvbiIsIm9iamVjdCIsInV1aWQiLCJpIiwibGVuZ3RoIiwiZXZlbnREaXNwYXRjaGVyIiwiZGlzcGF0Y2hFdmVudCIsIl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50IiwiX2lzUmVhZHkiLCJfYWN0aXZlIiwiX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyIsIl9vYmplY3RzVG9JbnRlcnNlY3QiLCJfcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSIsIl9wYXRjaGVkRGVzY3JpcHRvcnMiLCJyZWFjdDNSZW5kZXJlckluc3RhbmNlIiwiT2JqZWN0M0REZXNjcmlwdG9yIiwidGhyZWVFbGVtZW50RGVzY3JpcHRvcnMiLCJvYmplY3QzRCIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsImVsZW1lbnREZXNjcmlwdG9yIiwiaGFzRXZlbnQiLCJldmVudE5hbWUiLCJoYXNQcm9wIiwicHJvcE5hbWUiLCJib29sIiwidXBkYXRlIiwidGhyZWVPYmplY3QiLCJ2YWx1ZSIsInVzZXJEYXRhIiwiZGVmYXVsdCIsInB1c2giLCJhY3RpdmUiLCJvYmplY3RzIiwicmVjdXJzaXZlIiwiX3NjZW5lIiwiX2NvbnRhaW5lciIsIl9jYW1lcmEiLCJfcmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiX21vdXNlIiwiX29uTW91c2VNb3ZlIiwic2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJfdXBkYXRlRW50ZXJMZWF2ZSIsIl9jb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2hvdmVyT2JqZWN0TWFwIiwiX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMiLCJib3VuZExpc3RlbmVyIiwibGlzdGVuZXJDYWxsYmFja05hbWUiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsInByb3RvdHlwZSIsImdldFBvb2xlZCIsIk1vdXNlRXZlbnQiLCJ0YXJnZXQiLCJfZ2V0SW50ZXJzZWN0aW9ucyIsIm1vdXNlQ29vcmRzIiwicmVsYXRpdmVNb3VzZUNvb3JkcyIsIl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzIiwic2V0RnJvbUNhbWVyYSIsImludGVyc2VjdE9iamVjdHMiLCJpbnRlcnNlY3RPYmplY3QiLCJvcmlnaW5hbFJheSIsInJheSIsImNsb25lIiwicmVzdWx0UmF5IiwiY29weSIsImhvdmVyTWFwVG9VcGRhdGUiLCJtb3VzZUVudGVyRXZlbnQiLCJkZXB0aCIsIm1vdXNlTGVhdmVFdmVudCIsInVuc2VlblVVSURzIiwic2NyZWVuTW91c2VDb29yZHMiLCJjb250YWluZXJSZWN0Iiwic3ViIiwibGVmdCIsInRvcCIsImRpdmlkZSIsImNsZWFudXBGdW5jdGlvbiIsImFsbFByb3BzIiwiY29uY2F0IiwicmVtb3ZlUHJvcCIsInJlc2l6ZVdpbmRvdyIsInBsYXlUaW1lIiwicmV3aW5kVGltZSIsImxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRO0FBQ2JDLGdCQUFlLGVBREY7QUFFYkMseUJBQXdCLHdCQUZYO0FBR2JDLFVBQVMsU0FISTtBQUliQyxTQUFRLFFBSks7QUFLYkMsWUFBVyxXQUxFO0FBTWJDLGNBQWE7QUFOQSxDQUFkO2tCQVFlTixLOzs7Ozs7Ozs7Ozs7OztBQ1JmOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1PLFFBQVEsNENBQXNCLG9CQUNuQyxRQUFPQyxNQUFQLHVEQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQThCLE9BQU9BLE9BQU9DLGlCQUFkLEtBQW9DLFdBQWxFLEdBQWdGRCxPQUFPQyxpQkFBUCxFQUFoRixHQUE2RztBQUFBLFFBQUtDLENBQUw7QUFBQSxDQUQxRSxDQUF0QixDQUFkOztBQU1BLG1CQUFTQyxNQUFULENBQ0M7QUFBQTtBQUFBLEdBQVUsT0FBT0osS0FBakI7QUFDQztBQURELENBREQsRUFJRUssU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUpGLEU7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSw0QkFBZ0I7QUFDN0JDLHNCQUQ2QjtBQUU3QkMsa0NBRjZCO0FBRzdCQywwQkFINkI7QUFJN0JDLHNCQUo2QjtBQUs3QkM7QUFMNkIsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGY7Ozs7OztBQUVBLElBQU1KLE9BQU8sU0FBUEEsSUFBTyxHQUdFO0FBQUEsS0FGZEssS0FFYyx1RUFGTjtBQUNQQyxXQUFTO0FBREYsRUFFTTtBQUFBLEtBQVhDLE1BQVc7OztBQUVkLFNBQU9BLE9BQU9D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QUROLEVBQVA7QUFHQSxDQUpNLEM7Ozs7Ozs7O0FDUlA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7O0FDdEJBLGtCQUFrQix3RDs7Ozs7OztBQ0FsQjtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDUkQsa0JBQWtCLHdEOzs7Ozs7O0FDQWxCO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNSRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7QUNmQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3JDQSxrQkFBa0Isd0Q7Ozs7Ozs7QUNBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFzc2V0cy9qcy9wYWdlcy93YXRlckNvbG9yLWZhZGUuNWNlN2FiZDVhNGQ1YWQ3MWMxY2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRVUERBVEVfQ0FNRVJBX1BPU0lUSU9OOiAnVVBEQVRFX0NBTUVSQV9QT1NJVElPTicsXG5cdExPQURJTkc6ICdMT0FESU5HJyxcblx0TE9BREVEOiAnTE9BREVEJyxcblx0UExBWV9USU1FOiAnUExBWV9USU1FJyxcblx0UkVXSU5EX1RJTUU6ICdSRVdJTkRfVElNRScsXG59XG5leHBvcnQgZGVmYXVsdCBUeXBlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9jb25zdGFudHMvYWN0aW9udHlwZXMuanMiLCJpbXBvcnQgJy4uLy4uL3N0eWx1cy9zdHlsZS5zdHlsJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0MyBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlcic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXG5pbXBvcnQgSW1hZ2VDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0ltYWdlQ29udGFpbmVyJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBjb21wb3NlKFxuXHR0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4pKTtcblxuXG5cblJlYWN0RE9NLnJlbmRlcihcblx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0PEltYWdlQ29udGFpbmVyLz5cblx0PC9Qcm92aWRlcj5cbiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2luZGV4LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQnXG5pbXBvcnQgd2luZG93U2l6ZSBmcm9tICcuL3dpbmRvd1NpemUnXG5pbXBvcnQgY2FtZXJhIGZyb20gJy4vY2FtZXJhJ1xuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJ1xuaW1wb3J0IHJlc29sdXRpb24gZnJvbSAnLi9yZXNvbHV0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2FkLFxuICB3aW5kb3dTaXplLFxuICBjYW1lcmEsXG4gIHRpbWUsXG4gIHJlc29sdXRpb24sXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGxvYWQgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGxvYWRpbmc6IHRydWVcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2xvYWQuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCB3aW5kb3dTaXplID0gKFxuXHRzdGF0ZSA9IG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpLCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLlJFU0laRV9XSU5ET1c6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsXG5cdFx0XHRcdG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cdFx0XHQpXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2luZG93U2l6ZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy93aW5kb3dTaXplLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgY2FtZXJhID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMy44KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FtZXJhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2NhbWVyYS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHRpbWUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGVsYXBzZWQ6IDAuMCxcblx0XHRkdXJhdGlvbjogMC41LFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLlBMQVlfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBNYXRoLm1pbihzdGF0ZS5lbGFwc2VkICsgMC4wMSwgc3RhdGUuZHVyYXRpb24pLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuUkVXSU5EX1RJTUU6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0ZWxhcHNlZDogIE1hdGgubWF4KHN0YXRlLmVsYXBzZWQgLSAwLjAxLCAwLjApLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvdGltZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG5jb25zdCByZXNvbHV0aW9uID0gKFxuXHRzdGF0ZSA9IHtcblx0XHR3aWR0aDogY29udGVudC5jbGllbnRXaWR0aCxcblx0XHRoZWlnaHQ6IGNvbnRlbnQuY2xpZW50SGVpZ2h0LFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdXRpb25cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvcmVzb2x1dGlvbi5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xuXG5pbXBvcnQge3Jlc2l6ZVdpbmRvd30gZnJvbSAnLi4vYWN0aW9ucy9yZXNpemVXaW5kb3cnXG5pbXBvcnQge3BsYXlUaW1lLCByZXdpbmRUaW1lfSBmcm9tICcuLi9hY3Rpb25zL3RpbWUnXG5pbXBvcnQge2xvYWRpbmcsIGxvYWRlZH0gZnJvbSAnLi4vYWN0aW9ucy9sb2FkJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcblxuXHRyZXR1cm4ge1xuXHRcdGxvYWRpbmc6IHN0YXRlLmxvYWQubG9hZGluZyxcblx0XHR3aWR0aDogc3RhdGUucmVzb2x1dGlvbi53aWR0aCxcblx0XHRoZWlnaHQ6IHN0YXRlLnJlc29sdXRpb24uaGVpZ2h0LFxuXHRcdHdpbmRvd1dpZHRoOiBzdGF0ZS53aW5kb3dTaXplLngsXG5cdFx0d2luZG93SGVpZ2h0OiBzdGF0ZS53aW5kb3dTaXplLnksXG5cdFx0Y2FtZXJhUG9zaXRpb246IHN0YXRlLmNhbWVyYS5wb3NpdGlvbixcblx0XHRlbGFwc2VkOiBzdGF0ZS50aW1lLmVsYXBzZWQsXG5cdFx0ZHVyYXRpb246IHN0YXRlLnRpbWUuZHVyYXRpb24sXG5cdH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0b25Mb2FkaW5nOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnTG9hZGluZy4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkaW5nKCkpXG5cdFx0fSxcblx0XHRvbkxvYWRlZDogKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2xvYWRlZC4uLicpXG5cdFx0XHRkaXNwYXRjaChsb2FkZWQoKSlcblx0XHR9LFxuXHRcdG9uUmVzaXplOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmVzaXplV2luZG93KGUpKVxuXHRcdH0sXG5cdFx0b25QbGF5VGltZTogKCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocGxheVRpbWUoKSlcblx0XHR9LFxuXHRcdG9uUmV3aW5kVGltZTogKCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gocmV3aW5kVGltZSgpKVxuXHRcdH0sXG5cdH1cbn1cblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbWFnZSlcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInXG5cbmltcG9ydCBNb3VzZUlucHV0IGZyb20gJy4uL2xpYi9Nb3VzZUlucHV0J1xuXG5pbXBvcnQgdnMgZnJvbSAnLi4vZ2xzbC9pbWFnZS52ZXJ0J1xuaW1wb3J0IGZzIGZyb20gJy4uL2dsc2wvaW1hZ2UuZnJhZydcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLmZsYWdFbnRlciA9IGZhbHNlXG5cblx0XHR0aGlzLm9uTG9hZGluZyA9IDo6dGhpcy5wcm9wcy5vbkxvYWRpbmdcblx0XHR0aGlzLm9uTG9hZGVkID0gOjp0aGlzLnByb3BzLm9uTG9hZGVkXG5cdFx0dGhpcy5vblJlc2l6ZSA9IDo6dGhpcy5wcm9wcy5vblJlc2l6ZVxuXHRcdHRoaXMub25QbGF5VGltZSA9IDo6dGhpcy5wcm9wcy5vblBsYXlUaW1lXG5cdFx0dGhpcy5vblJld2luZFRpbWUgPSA6OnRoaXMucHJvcHMub25SZXdpbmRUaW1lXG5cblx0XHR0aGlzLnRleHR1cmVzID0ge1xuXHRcdFx0XCJtYWluXCI6IHtcblx0XHRcdFx0dXJsOiBcIi4uL2Fzc2V0cy9pbWcvd2F0ZXJDb2xvci9zdW5mbG93ZXIuanBnXCJcblx0XHRcdH0sXG5cdFx0XHRcIm5vaXNlXCI6IHtcblx0XHRcdFx0dXJsOiBcIi4uL2Fzc2V0cy9pbWcvd2F0ZXJDb2xvci9ub2lzZS5wbmdcIlxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIExpZmVDeWNsZSAqL1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdFx0XHQvLyB0aGlzLmhhbmRsZU1vdXNlTW92ZSgpXG5cdFx0XHRcdHRoaXMuc2V0TW91c2VJbnB1dCgpXG5cdFx0XHRcdHRoaXMuaGFuZGxlUmVzaXplKClcblxuXHRcdFx0fSwgMzAwKVxuXHRcdH0pXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUobmV3UHJvcHMpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRtb3VzZUlucHV0LFxuXHRcdH0gPSB0aGlzLnJlZnM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHR3aW5kb3dXaWR0aCxcblx0XHRcdHdpbmRvd0hlaWdodCxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmICh3aW5kb3dXaWR0aCAhPT0gbmV3UHJvcHMud2luZG93V2lkdGggfHwgd2luZG93SGVpZ2h0ICE9PSBuZXdQcm9wcy53aW5kb3dIZWlnaHQpIHtcblx0XHRcdG1vdXNlSW5wdXQuY29udGFpbmVyUmVzaXplZCgpO1xuXHRcdH1cblx0fVxuXG5cblx0LyogY3VzdG9tIEZ1bmN0aW9uICAqL1xuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhpcy5vbkxvYWRpbmcoKVxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmxvYWRUZXh0dXJlKClcblx0XHRcdHJlc29sdmUoKVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0TW91c2VJbnB1dCgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRtb3VzZUlucHV0LFxuXHRcdFx0Y29udGFpbmVyXG5cdFx0fSA9IHRoaXMucmVmcztcblxuXHRcdGlmICghbW91c2VJbnB1dC5pc1JlYWR5KCkpIHtcblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0c2NlbmUsXG5cdFx0XHRcdGNhbWVyYSxcblx0XHRcdH0gPSB0aGlzLnJlZnM7XG5cblx0XHRcdG1vdXNlSW5wdXQucmVhZHkoc2NlbmUsIGNvbnRhaW5lciwgY2FtZXJhKTtcblx0XHRcdC8vIG1vdXNlSW5wdXQucmVzdHJpY3RJbnRlcnNlY3Rpb25zKGltYWdlTWVzaCk7XG5cdFx0XHRtb3VzZUlucHV0LnNldEFjdGl2ZShmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlUmVzaXplKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSlcblx0fVxuXG5cdGhhbmRsZU1vdXNlRW50ZXIoZSkge1xuXHRcdHRoaXMuZmxhZ0VudGVyID0gdHJ1ZVxuXHR9XG5cdGhhbmRsZU1vdXNlTGVhdmUoZSkge1xuXHRcdHRoaXMuZmxhZ0VudGVyID0gZmFsc2Vcblx0fVxuXG5cdGhhbmRsZUFuaW1hdGUoKSB7XG5cdFx0aWYgKHRoaXMuZmxhZ0VudGVyKSB0aGlzLm9uUGxheVRpbWUoKVxuXHRcdGlmICghdGhpcy5mbGFnRW50ZXIpIHRoaXMub25SZXdpbmRUaW1lKClcblx0fVxuXG5cdGxvYWRUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKClcblx0XHRsb2FkZXIuY3Jvc3NPcmlnaW4gPSAnKidcblx0XHRmb3IgKGxldCBuYW1lIGluIHRoaXMudGV4dHVyZXMpIHtcblx0XHRcdGxvYWRlci5sb2FkKHRoaXMudGV4dHVyZXNbbmFtZV0udXJsLCAodGV4dHVyZSkgPT4ge1xuIFx0XHRcdHRoaXMudGV4dHVyZXNbbmFtZV0udGV4dHVyZSA9IHRleHR1cmVcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7bG9hZGluZywgd2lkdGgsIGhlaWdodCwgY2FtZXJhUG9zaXRpb24sIGVsYXBzZWQsIGR1cmF0aW9uLCBtb3VzZX0gPSB0aGlzLnByb3BzXG5cblx0XHRpZiAobG9hZGluZykgcmV0dXJuKDxoMiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L2gyPilcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgcmVmPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxSZWFjdDNcblx0XHRcdFx0XHRtYWluQ2FtZXJhPVwiY2FtZXJhXCJcblx0XHRcdFx0XHR3aWR0aD17d2lkdGh9XG5cdFx0XHRcdFx0aGVpZ2h0PXtoZWlnaHR9XG5cdFx0XHRcdFx0b25BbmltYXRlPXs6OnRoaXMuaGFuZGxlQW5pbWF0ZX1cblx0XHRcdFx0XHRjbGVhckNvbG9yPXsweGZmZmZmZn1cblx0XHRcdFx0XHRhbnRpYWxpYXM9e3RydWV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bW9kdWxlXG5cdFx0XHRcdFx0XHRyZWY9XCJtb3VzZUlucHV0XCJcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3I9e01vdXNlSW5wdXR9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxzY2VuZVxuXHRcdFx0XHRcdFx0cmVmPVwic2NlbmVcIlxuXHRcdFx0XHRcdD5cblxuXG5cdFx0XHRcdFx0XHR7LyogQ2FtZXJhICovfVxuXHRcdFx0XHRcdFx0PHBlcnNwZWN0aXZlQ2FtZXJhXG5cdFx0XHRcdFx0XHRcdHJlZj1cImNhbWVyYVwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdFx0XHRmb3Y9ezE1fVxuXHRcdFx0XHRcdFx0XHRhc3BlY3Q9e3dpZHRoIC8gaGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRuZWFyPXswLjAxfVxuXHRcdFx0XHRcdFx0XHRmYXI9ezEwMDB9XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uPXtjYW1lcmFQb3NpdGlvbn1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBMaWdodCAqL31cblx0XHRcdFx0XHRcdDxoZW1pc3BoZXJlTGlnaHRcblx0XHRcdFx0XHRcdFx0c2t5Q29sb3I9ezB4ZmZmZmJifVxuXHRcdFx0XHRcdFx0XHRncm91bmRDb2xvcj17MHg4ODc5Nzl9XG5cdFx0XHRcdFx0XHRcdGludGVuc2l0eT17MC45fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxkaXJlY3Rpb25hbExpZ2h0XG5cdFx0XHRcdFx0XHRcdGNvbG9yPXsweGZmZmZmZn1cblx0XHRcdFx0XHRcdFx0aW50ZW5zaXR5PXswLjh9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHR7LyogSW1hZ2UgTWVzaCAqL31cblx0XHRcdFx0XHRcdDxtZXNoXG5cdFx0XHRcdFx0XHRcdHJlZj0naW1hZ2VNZXNoJ1xuXHRcdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9eyhlKSA9PiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIoZSl9XG5cdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17KGUpID0+IHRoaXMuaGFuZGxlTW91c2VMZWF2ZShlKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHBsYW5lR2VvbWV0cnlcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MX1cblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezF9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxzaGFkZXJNYXRlcmlhbFxuXHRcdFx0XHRcdFx0XHRcdHZlcnRleFNoYWRlcj17dnN9XG5cdFx0XHRcdFx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI9e2ZzfVxuXHRcdFx0XHRcdFx0XHRcdGJsZW5kaW5nPXtUSFJFRS5Ob3JtYWxCbGVuZGluZ31cblx0XHRcdFx0XHRcdFx0XHR0cmFuc3BhcmVudD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDx1bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydjb2xvck1hcCd9IHR5cGU9eyd0J30gdmFsdWU9e3RoaXMudGV4dHVyZXNbJ21haW4nXS50ZXh0dXJlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J25vaXNlTWFwJ30gdHlwZT17J3QnfSB2YWx1ZT17dGhpcy50ZXh0dXJlc1snbm9pc2UnXS50ZXh0dXJlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2VsYXBzZWQnfSB0eXBlPXsnZid9IHZhbHVlPXtlbGFwc2VkfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J3Njcm9sbCd9IHR5cGU9eydmJ30gdmFsdWU9e3Njcm9sbH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydkdXJhdGlvbid9IHR5cGU9eydmJ30gdmFsdWU9e2R1cmF0aW9ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J21vdXNlJ30gdHlwZT17J3ZlYzInfSB2YWx1ZT17bW91c2V9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsncmVzb2x1dGlvbid9IHR5cGU9eyd2ZWMyJ30gdmFsdWU9e25ldyBUSFJFRS5WZWN0b3IyKHdpZHRoLCBoZWlnaHQpfSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvdW5pZm9ybXM+XG5cdFx0XHRcdFx0XHRcdDwvc2hhZGVyTWF0ZXJpYWw+XG5cblx0XHRcdFx0XHRcdDwvbWVzaD5cblxuXHRcdFx0XHRcdDwvc2NlbmU+XG5cdFx0XHRcdDwvUmVhY3QzPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJpbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCBSZWFjdFVwZGF0ZXMgZnJvbSAncmVhY3QtZG9tL2xpYi9SZWFjdFVwZGF0ZXMnO1xuXG5pbXBvcnQgU3ludGhldGljTW91c2VFdmVudCBmcm9tICdyZWFjdC1kb20vbGliL1N5bnRoZXRpY01vdXNlRXZlbnQnO1xuXG5pbXBvcnQgTW9kdWxlIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyL2xpYi9Nb2R1bGUnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3JlYWN0L2xpYi9SZWFjdFByb3BUeXBlcyc7XG5cbmNvbnN0IHRlbXBWZWN0b3IyID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuY29uc3QgbGlzdGVuZXJDYWxsYmFja05hbWVzID0ge1xuICBtb3VzZWRvd246ICdvbk1vdXNlRG93bicsXG4gIG1vdXNldXA6ICdvbk1vdXNlVXAnLFxufTtcblxuY29uc3QgbW91c2VFdmVudHMgPSBbXG4gICdvbk1vdXNlRW50ZXInLFxuICAnb25Nb3VzZUxlYXZlJyxcbiAgJ29uTW91c2VEb3duJyxcbiAgJ29uTW91c2VVcCcsXG4gICdvbkNsaWNrJyxcbl07XG5cbmNvbnN0IGJvb2xQcm9wcyA9IHtcbiAgaWdub3JlUG9pbnRlckV2ZW50czogZmFsc2UsXG59O1xuXG5jbGFzcyBNb3VzZUlucHV0IGV4dGVuZHMgTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lzUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCA9IG51bGw7XG5cbiAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMgPSBbXTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgc2V0dXAocmVhY3QzUmVuZGVyZXJJbnN0YW5jZSkge1xuICAgIHN1cGVyLnNldHVwKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UpO1xuXG4gICAgY29uc3QgT2JqZWN0M0REZXNjcmlwdG9yID0gcmVhY3QzUmVuZGVyZXJJbnN0YW5jZS50aHJlZUVsZW1lbnREZXNjcmlwdG9ycy5vYmplY3QzRC5jb25zdHJ1Y3RvcjtcblxuICAgIE9iamVjdC52YWx1ZXMocmVhY3QzUmVuZGVyZXJJbnN0YW5jZS50aHJlZUVsZW1lbnREZXNjcmlwdG9ycykuZm9yRWFjaChlbGVtZW50RGVzY3JpcHRvciA9PiB7XG4gICAgICBpZiAoZWxlbWVudERlc2NyaXB0b3IgaW5zdGFuY2VvZiBPYmplY3QzRERlc2NyaXB0b3IpIHtcbiAgICAgICAgbW91c2VFdmVudHMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLmhhc0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGJvb2xQcm9wcykuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgICAgZWxlbWVudERlc2NyaXB0b3IuaGFzUHJvcChwcm9wTmFtZSwge1xuICAgICAgICAgICAgdHlwZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgICAgICB1cGRhdGUodGhyZWVPYmplY3QsIHZhbHVlLCBoYXNQcm9wKSB7XG4gICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhyZWVPYmplY3QudXNlckRhdGFbcHJvcE5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyZWVPYmplY3QudXNlckRhdGFbcHJvcE5hbWVdID0gYm9vbFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJvb2xQcm9wc1twcm9wTmFtZV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycy5wdXNoKGVsZW1lbnREZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlzUmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzUmVhZHk7XG4gIH1cblxuICBzZXRBY3RpdmUoYWN0aXZlKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgcmVzdHJpY3RJbnRlcnNlY3Rpb25zKG9iamVjdHMsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zID0gdHJ1ZTtcbiAgICB0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QgPSBvYmplY3RzO1xuXG4gICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSA9IHJlY3Vyc2l2ZTtcbiAgfVxuXG4gIHJlYWR5KHNjZW5lLCBjb250YWluZXIsIGNhbWVyYSkge1xuICAgIHRoaXMuX2lzUmVhZHkgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5fY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuICAgIHRoaXMuX21vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgIHRoaXMuX29uTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9tb3VzZS5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cbiAgICAgIGlmICghdGhpcy5fYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUVudGVyTGVhdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5fY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwID0ge307XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcblxuICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGxpc3RlbmVyQ2FsbGJhY2tOYW1lcykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgbGV0IGJvdW5kTGlzdGVuZXI7XG5cbiAgICAgIGNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tOYW1lID0gbGlzdGVuZXJDYWxsYmFja05hbWVzW2V2ZW50TmFtZV07XG4gICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgIGJvdW5kTGlzdGVuZXIgPSB0aGlzLl9vbk1vdXNlRG93bi5iaW5kKHRoaXMsIGxpc3RlbmVyQ2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICAgICAgYm91bmRMaXN0ZW5lciA9IHRoaXMuX29uTW91c2VVcC5iaW5kKHRoaXMsIGxpc3RlbmVyQ2FsbGJhY2tOYW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGJvdW5kTGlzdGVuZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZExpc3RlbmVyLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX29uTW91c2VEb3duID0gKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkgPT4ge1xuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpbnRlcnNlY3Rpb25zLFxuICAgICAgfSA9IHRoaXMuX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCk7XG5cbiAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBpbnRlcnNlY3Rpb25zO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9vbk1vdXNlVXAgPSAoY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSA9PiB7XG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgICB9ID0gdGhpcy5faW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KTtcblxuICAgICAgaWYgKCEoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGludGVyc2VjdCBjdXJyZW50IGludGVyc2VjdGlvbnMgd2l0aCB0aGUgaW50ZXJzZWN0aW9ucyBmb3IgY2xpY2tcbiAgICAgICAgLy8gICBjYWxsIHh6aWJpdCBBU0FQIHdlIGhhdmUgYSBnb29kIG9uZSBzb25cbiAgICAgICAgLy8gICAgIGl0IHdhc24ndCB0aGF0IGdvb2RcblxuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb25VVUlETWFwID0gdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrLnJlZHVjZSgobWFwLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICAgICAgICBtYXBbaW50ZXJzZWN0aW9uLm9iamVjdC51dWlkXSA9IGludGVyc2VjdGlvbjtcblxuICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbaV07XG5cbiAgICAgICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICAgICAgY29uc3QgdXVpZCA9IG9iamVjdC51dWlkO1xuXG4gICAgICAgICAgaWYgKGludGVyc2VjdGlvblVVSURNYXBbdXVpZF0pIHtcbiAgICAgICAgICAgIC8vIG9oIGJveSBvaCBib3kgaGVyZSB3ZSBnbywgd2UgZ290IGEgY2xpY2tlclxuXG4gICAgICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyXG4gICAgICAgICAgICAgIC5kaXNwYXRjaEV2ZW50KG9iamVjdCwgJ29uQ2xpY2snLFxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ2NsaWNrJywgZXZlbnQpLCBpbnRlcnNlY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcbiAgfTtcblxuICBfY3JlYXRlU3ludGhldGljTW91c2VFdmVudChldmVudFR5cGUsIHByb3RvdHlwZSkge1xuICAgIHJldHVybiBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChudWxsLCBudWxsLFxuICAgICAgbmV3IE1vdXNlRXZlbnQoZXZlbnRUeXBlLCBwcm90b3R5cGUpLCBwcm90b3R5cGUudGFyZ2V0KTtcbiAgfVxuXG4gIF9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBldmVudCA9IFN5bnRoZXRpY01vdXNlRXZlbnQuZ2V0UG9vbGVkKG51bGwsIG51bGwsIG1vdXNlRXZlbnQsIG1vdXNlRXZlbnQudGFyZ2V0KTtcblxuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9nZXRJbnRlcnNlY3Rpb25zKHRlbXBWZWN0b3IyLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKSk7XG5cbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbaV07XG5cbiAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChvYmplY3QsIGNhbGxiYWNrTmFtZSwgZXZlbnQsIGludGVyc2VjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQsXG4gICAgICBpbnRlcnNlY3Rpb25zLFxuICAgIH07XG4gIH1cblxuICBfZ2V0SW50ZXJzZWN0aW9ucyhtb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBpZiAodGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHModGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0LFxuICAgICAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCh0aGlzLl9zY2VuZSwgdHJ1ZSk7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1RIUkVFLlZlY3RvcjJ9IG1vdXNlQ29vcmRzIHVzdWFsbHkgYW4gZXZlbnQncyBjbGllbnRYIGFuZCBjbGllbnRZXG4gICAqIEByZXR1cm5zIHtUSFJFRS5SYXl9XG4gICAqL1xuICBnZXRDYW1lcmFSYXkobW91c2VDb29yZHMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICBjb25zdCBvcmlnaW5hbFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBjb25zdCByZXN1bHRSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIucmF5LmNvcHkob3JpZ2luYWxSYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFJheTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgaW50ZXJzZWN0T2JqZWN0KG1vdXNlQ29vcmRzLCBvYmplY3QsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3Qob2JqZWN0LCByZWN1cnNpdmUpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnJheS5jb3B5KG9yaWdpbmFsUmF5KTtcblxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICB9XG5cbiAgY29udGFpbmVyUmVzaXplZCgpIHtcbiAgICB0aGlzLl9jb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5faXNSZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUVudGVyTGVhdmUoKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlRW50ZXJMZWF2ZSgpIHtcbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fZ2V0SW50ZXJzZWN0aW9ucyh0aGlzLl9tb3VzZSk7XG5cbiAgICBjb25zdCBob3Zlck1hcFRvVXBkYXRlID0ge1xuICAgICAgLi4udGhpcy5faG92ZXJPYmplY3RNYXAsXG4gICAgfTtcblxuICAgIGNvbnN0IG1vdXNlRW50ZXJFdmVudCA9IHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ21vdXNlRW50ZXInLCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIGNsaWVudFg6IHRoaXMuX21vdXNlLngsXG4gICAgICBjbGllbnRZOiB0aGlzLl9tb3VzZS55LFxuICAgIH0pO1xuXG4gICAgLy8gZmluZCBmaXJzdCBpbnRlcnNlY3Rpb24gdGhhdCBkb2VzIG5vdCBpZ25vcmUgcG9pbnRlciBldmVudHNcbiAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsrZGVwdGgpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbnNbZGVwdGhdO1xuICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgaWYgKG9iamVjdC51c2VyRGF0YSAmJiBvYmplY3QudXNlckRhdGEuaWdub3JlUG9pbnRlckV2ZW50cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXVpZCA9IG9iamVjdC51dWlkO1xuXG4gICAgICBpZiAodGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0pIHtcbiAgICAgICAgZGVsZXRlIGhvdmVyTWFwVG9VcGRhdGVbdXVpZF07XG5cbiAgICAgICAgLy8ganVzdCB1cGRhdGUgdGhhdCBpbnRlcnNlY3Rpb25cbiAgICAgICAgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0uaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0gPSB7XG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgIGludGVyc2VjdGlvbixcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIShtb3VzZUVudGVyRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgbW91c2VFbnRlckV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KG9iamVjdCwgJ29uTW91c2VFbnRlcicsXG4gICAgICAgICAgICBtb3VzZUVudGVyRXZlbnQsIGludGVyc2VjdGlvbiwgZGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGhhdmUgZm91bmQgdGhlIGZpcnN0IHNvbGlkIGludGVyc2VjdGlvbiwgZG9uJ3QgZ28gZnVydGhlclxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgbW91c2VMZWF2ZUV2ZW50ID0gdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnbW91c2VMZWF2ZScsIHtcbiAgICAgIHRhcmdldDogdGhpcy5fY29udGFpbmVyLFxuICAgICAgY2xpZW50WDogdGhpcy5fbW91c2UueCxcbiAgICAgIGNsaWVudFk6IHRoaXMuX21vdXNlLnksXG4gICAgfSk7XG5cbiAgICAvLyBkZWxldGUgYWxsIHVuc2VlbiB1dWlkcyBpbiBob3ZlciBtYXBcbiAgICBjb25zdCB1bnNlZW5VVUlEcyA9IE9iamVjdC5rZXlzKGhvdmVyTWFwVG9VcGRhdGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnNlZW5VVUlEcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgdXVpZCA9IHVuc2VlblVVSURzW2ldO1xuXG4gICAgICBpZiAoIShtb3VzZUxlYXZlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgbW91c2VMZWF2ZUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudCh0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXS5vYmplY3QsXG4gICAgICAgICAgJ29uTW91c2VMZWF2ZScsIG1vdXNlTGVhdmVFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXTtcbiAgICB9XG4gIH1cblxuICBfZ2V0UmVsYXRpdmVNb3VzZUNvb3JkcyhzY3JlZW5Nb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXJSZWN0O1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHNjcmVlbk1vdXNlQ29vcmRzLmNsb25lKClcbiAgICAgIC5zdWIodGVtcFZlY3RvcjIuc2V0KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApKVxuICAgICAgLmRpdmlkZSh0ZW1wVmVjdG9yMi5zZXQoY29udGFpbmVyUmVjdC53aWR0aCwgY29udGFpbmVyUmVjdC5oZWlnaHQpKTtcblxuICAgIC8vIG1vdXNlLnggPSAoIGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCApICogMiAtIDE7XG4gICAgLy8gbW91c2UueSA9IC0gKCBldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0ICkgKiAyICsgMTtcblxuICAgIHJlbGF0aXZlTW91c2VDb29yZHMueCA9IHJlbGF0aXZlTW91c2VDb29yZHMueCAqIDIgLSAxO1xuICAgIHJlbGF0aXZlTW91c2VDb29yZHMueSA9IC1yZWxhdGl2ZU1vdXNlQ29vcmRzLnkgKiAyICsgMTtcblxuICAgIHJldHVybiByZWxhdGl2ZU1vdXNlQ29vcmRzO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBkaXNwb3NlKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zLmZvckVhY2goY2xlYW51cEZ1bmN0aW9uID0+IGNsZWFudXBGdW5jdGlvbigpKTtcbiAgICBkZWxldGUgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucztcblxuICAgIGRlbGV0ZSB0aGlzLl9vbk1vdXNlTW92ZTtcblxuICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycy5mb3JFYWNoKGVsZW1lbnREZXNjcmlwdG9yID0+IHtcbiAgICAgIGNvbnN0IGFsbFByb3BzID0gT2JqZWN0LmtleXMoYm9vbFByb3BzKVxuICAgICAgICAuY29uY2F0KG1vdXNlRXZlbnRzKTtcblxuICAgICAgYWxsUHJvcHMuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLnJlbW92ZVByb3AocHJvcE5hbWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW91c2VJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvbGliL01vdXNlSW5wdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9nbHNsL2ltYWdlLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDU0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCBjb2xvck1hcDtcXG51bmlmb3JtIHNhbXBsZXIyRCBub2lzZU1hcDtcXG51bmlmb3JtIGZsb2F0IGVsYXBzZWQ7XFxudW5pZm9ybSBmbG9hdCBkdXJhdGlvbjtcXG5cXG52b2lkIG1haW4oKXtcXG5cXG5cXHR2ZWMyIHV2ID0gdlV2O1xcblxcblxcdGZsb2F0IHNlZmxvYXQgPSBkdXJhdGlvbiAtIG1pbihleHAoZWxhcHNlZCkgKiAwLjMsIGR1cmF0aW9uKTtcXG5cXG5cXHRmbG9hdCBncmFkaWVudFN0ZXAgPSBzZWZsb2F0ICogMC4wNTtcXG5cXHRmbG9hdCBhZHZlY3RTdGVwID0gc2VmbG9hdCAqIDAuMDU7XFxuXFxuXFx0dmVjNCBjeHAgPSB0ZXh0dXJlMkQobm9pc2VNYXAsIHZlYzIodXYueCArIGdyYWRpZW50U3RlcCwgdXYueSkpO1xcblxcdHZlYzQgY3huID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHV2LnggLSBncmFkaWVudFN0ZXAsIHV2LnkpKTtcXG5cXHR2ZWM0IGN5cCA9IHRleHR1cmUyRChub2lzZU1hcCwgdmVjMih1di54LCB1di55ICsgZ3JhZGllbnRTdGVwKSk7XFxuXFx0dmVjNCBjeW4gPSB0ZXh0dXJlMkQobm9pc2VNYXAsIHZlYzIodXYueCwgdXYueSAtIGdyYWRpZW50U3RlcCkpO1xcblxcblxcdHZlYzMgb3JpZ2luID0gdmVjMygwLjApO1xcblxcdGZsb2F0IGR4cCA9IGRpc3RhbmNlKG9yaWdpbiwgY3hwLnh5eik7XFxuXFx0ZmxvYXQgZHhuID0gZGlzdGFuY2Uob3JpZ2luLCBjeG4ueHl6KTtcXG5cXHRmbG9hdCBkeXAgPSBkaXN0YW5jZShvcmlnaW4sIGN5cC54eXopO1xcblxcdGZsb2F0IGR5biA9IGRpc3RhbmNlKG9yaWdpbiwgY3luLnh5eik7XFxuXFxuXFx0dmVjMiBncmFkID0gdmVjMihkeHAgLSBkeG4sIGR5cCAtIGR5bik7XFxuXFx0dmVjMiBuZXd1diA9IHV2ICsgKGFkdmVjdFN0ZXAgKiBub3JtYWxpemUoZ3JhZCkpO1xcblxcblxcdHZlYzMgYmFzZUNvbG9yID0gdGV4dHVyZTJEKGNvbG9yTWFwLCBuZXd1dikucmdiO1xcblxcblxcdGdsX0ZyYWdDb2xvciA9IHZlYzQoYmFzZUNvbG9yLCAxLjApO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9nbHNsL2ltYWdlLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDU0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgcmVzaXplV2luZG93ID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNJWkVfV0lORE9XLFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgcGxheVRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUExBWV9USU1FLFxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCByZXdpbmRUaW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlJFV0lORF9USU1FLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvdGltZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURJTkdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVkID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURFRFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvbG9hZC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnZhbHVlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpIHtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBpc0VudW0gPSByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlzRW50cmllcykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gZ2V0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSkge1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSAoMCwgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIuZGVmYXVsdCkob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgcmV0dXJuICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZjtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiJdLCJzb3VyY2VSb290IjoiIn0=