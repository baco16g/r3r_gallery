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

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\nattribute vec3 color;\n\nvoid main() {\n  tc = uv;\n  vcolor = vec4(color, 1.0);\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "varying vec2 tc;\nvarying vec4 vcolor;\n\nuniform sampler2D colorMap;\nuniform sampler2D noiseMap;\nuniform float elapsed;\nuniform float duration;\n\nvoid main(){\n\n\tfloat sefloat = duration - min(exp(elapsed) * 0.3, duration);\n\n\tfloat gradientStep = sefloat * 0.05;\n\tfloat advectStep = sefloat * 0.05;\n\n\tvec4 cxp = texture2D(noiseMap, vec2(tc.x + gradientStep, tc.y));\n\tvec4 cxn = texture2D(noiseMap, vec2(tc.x - gradientStep, tc.y));\n\tvec4 cyp = texture2D(noiseMap, vec2(tc.x, tc.y + gradientStep));\n\tvec4 cyn = texture2D(noiseMap, vec2(tc.x, tc.y - gradientStep));\n\n\tvec3 origin = vec3(0.0);\n\tfloat dxp = distance(origin, cxp.xyz);\n\tfloat dxn = distance(origin, cxn.xyz);\n\tfloat dyp = distance(origin, cyp.xyz);\n\tfloat dyn = distance(origin, cyn.xyz);\n\n\tvec2 grad = vec2(dxp - dxn, dyp - dyn);\n\tvec2 newtc = tc + (advectStep * normalize(grad));\n\n\tvec3 baseColor = texture2D(colorMap, newtc).rgb;\n\n\tgl_FragColor.rgb = baseColor;\n\n\tgl_FragColor.a = vcolor.a;\n}\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9sb2FkLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9yZXNvbHV0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dhdGVyQ29sb3ItZmFkZS9saWIvTW91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UudmVydCIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UuZnJhZyIsIndlYnBhY2s6Ly8vLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy90aW1lLmpzIiwid2VicGFjazovLy8uL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyJdLCJuYW1lcyI6WyJUeXBlcyIsIlJFU0laRV9XSU5ET1ciLCJVUERBVEVfQ0FNRVJBX1BPU0lUSU9OIiwiTE9BRElORyIsIkxPQURFRCIsIlBMQVlfVElNRSIsIlJFV0lORF9USU1FIiwic3RvcmUiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZCIsIndpbmRvd1NpemUiLCJjYW1lcmEiLCJ0aW1lIiwicmVzb2x1dGlvbiIsInN0YXRlIiwibG9hZGluZyIsImFjdGlvbiIsInR5cGUiLCJUSFJFRSIsIlZlY3RvcjIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsIlZlY3RvcjMiLCJlbGFwc2VkIiwiZHVyYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwiY29udGVudCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ3aW5kb3dXaWR0aCIsIngiLCJ3aW5kb3dIZWlnaHQiLCJ5IiwiY2FtZXJhUG9zaXRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm9uTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJvbkxvYWRlZCIsIm9uUmVzaXplIiwiZSIsIm9uUGxheVRpbWUiLCJvblJld2luZFRpbWUiLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwicHJvcHMiLCJmbGFnRW50ZXIiLCJ0ZXh0dXJlcyIsInVybCIsImluaXRpYWxpemUiLCJ0aGVuIiwic2V0VGltZW91dCIsInNldE1vdXNlSW5wdXQiLCJoYW5kbGVSZXNpemUiLCJuZXdQcm9wcyIsIm1vdXNlSW5wdXQiLCJyZWZzIiwiY29udGFpbmVyUmVzaXplZCIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkVGV4dHVyZSIsImNvbnRhaW5lciIsImlzUmVhZHkiLCJzY2VuZSIsInJlYWR5Iiwic2V0QWN0aXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJjcm9zc09yaWdpbiIsIm5hbWUiLCJ0ZXh0dXJlIiwibW91c2UiLCJoYW5kbGVBbmltYXRlIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJOb3JtYWxCbGVuZGluZyIsInNjcm9sbCIsIkNvbXBvbmVudCIsInRlbXBWZWN0b3IyIiwibGlzdGVuZXJDYWxsYmFja05hbWVzIiwibW91c2Vkb3duIiwibW91c2V1cCIsIm1vdXNlRXZlbnRzIiwiYm9vbFByb3BzIiwiaWdub3JlUG9pbnRlckV2ZW50cyIsIk1vdXNlSW5wdXQiLCJfb25Nb3VzZURvd24iLCJjYWxsYmFja05hbWUiLCJtb3VzZUV2ZW50IiwiYmF0Y2hlZFVwZGF0ZXMiLCJfaW50ZXJzZWN0QW5kRGlzcGF0Y2giLCJldmVudCIsImludGVyc2VjdGlvbnMiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsIl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2siLCJfb25Nb3VzZVVwIiwiaW50ZXJzZWN0aW9uVVVJRE1hcCIsInJlZHVjZSIsIm1hcCIsImludGVyc2VjdGlvbiIsIm9iamVjdCIsInV1aWQiLCJpIiwibGVuZ3RoIiwiZXZlbnREaXNwYXRjaGVyIiwiZGlzcGF0Y2hFdmVudCIsIl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50IiwiX2lzUmVhZHkiLCJfYWN0aXZlIiwiX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyIsIl9vYmplY3RzVG9JbnRlcnNlY3QiLCJfcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSIsIl9wYXRjaGVkRGVzY3JpcHRvcnMiLCJyZWFjdDNSZW5kZXJlckluc3RhbmNlIiwiT2JqZWN0M0REZXNjcmlwdG9yIiwidGhyZWVFbGVtZW50RGVzY3JpcHRvcnMiLCJvYmplY3QzRCIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsImVsZW1lbnREZXNjcmlwdG9yIiwiaGFzRXZlbnQiLCJldmVudE5hbWUiLCJoYXNQcm9wIiwicHJvcE5hbWUiLCJib29sIiwidXBkYXRlIiwidGhyZWVPYmplY3QiLCJ2YWx1ZSIsInVzZXJEYXRhIiwiZGVmYXVsdCIsInB1c2giLCJhY3RpdmUiLCJvYmplY3RzIiwicmVjdXJzaXZlIiwiX3NjZW5lIiwiX2NvbnRhaW5lciIsIl9jYW1lcmEiLCJfcmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiX21vdXNlIiwiX29uTW91c2VNb3ZlIiwic2V0IiwiY2xpZW50WCIsImNsaWVudFkiLCJfdXBkYXRlRW50ZXJMZWF2ZSIsIl9jb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiX2hvdmVyT2JqZWN0TWFwIiwiX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMiLCJib3VuZExpc3RlbmVyIiwibGlzdGVuZXJDYWxsYmFja05hbWUiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsInByb3RvdHlwZSIsImdldFBvb2xlZCIsIk1vdXNlRXZlbnQiLCJ0YXJnZXQiLCJfZ2V0SW50ZXJzZWN0aW9ucyIsIm1vdXNlQ29vcmRzIiwicmVsYXRpdmVNb3VzZUNvb3JkcyIsIl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzIiwic2V0RnJvbUNhbWVyYSIsImludGVyc2VjdE9iamVjdHMiLCJpbnRlcnNlY3RPYmplY3QiLCJvcmlnaW5hbFJheSIsInJheSIsImNsb25lIiwicmVzdWx0UmF5IiwiY29weSIsImhvdmVyTWFwVG9VcGRhdGUiLCJtb3VzZUVudGVyRXZlbnQiLCJkZXB0aCIsIm1vdXNlTGVhdmVFdmVudCIsInVuc2VlblVVSURzIiwic2NyZWVuTW91c2VDb29yZHMiLCJjb250YWluZXJSZWN0Iiwic3ViIiwibGVmdCIsInRvcCIsImRpdmlkZSIsImNsZWFudXBGdW5jdGlvbiIsImFsbFByb3BzIiwiY29uY2F0IiwicmVtb3ZlUHJvcCIsInJlc2l6ZVdpbmRvdyIsInBsYXlUaW1lIiwicmV3aW5kVGltZSIsImxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRO0FBQ2JDLGdCQUFlLGVBREY7QUFFYkMseUJBQXdCLHdCQUZYO0FBR2JDLFVBQVMsU0FISTtBQUliQyxTQUFRLFFBSks7QUFLYkMsWUFBVyxXQUxFO0FBTWJDLGNBQWE7QUFOQSxDQUFkO2tCQVFlTixLOzs7Ozs7Ozs7Ozs7OztBQ1JmOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1PLFFBQVEsNENBQXNCLG9CQUNuQyxRQUFPQyxNQUFQLHVEQUFPQSxNQUFQLE9BQWtCLFFBQWxCLElBQThCLE9BQU9BLE9BQU9DLGlCQUFkLEtBQW9DLFdBQWxFLEdBQWdGRCxPQUFPQyxpQkFBUCxFQUFoRixHQUE2RztBQUFBLFFBQUtDLENBQUw7QUFBQSxDQUQxRSxDQUF0QixDQUFkOztBQU1BLG1CQUFTQyxNQUFULENBQ0M7QUFBQTtBQUFBLEdBQVUsT0FBT0osS0FBakI7QUFDQztBQURELENBREQsRUFJRUssU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUpGLEU7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSw0QkFBZ0I7QUFDN0JDLHNCQUQ2QjtBQUU3QkMsa0NBRjZCO0FBRzdCQywwQkFINkI7QUFJN0JDLHNCQUo2QjtBQUs3QkM7QUFMNkIsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGY7Ozs7OztBQUVBLElBQU1KLE9BQU8sU0FBUEEsSUFBTyxHQUdFO0FBQUEsS0FGZEssS0FFYyx1RUFGTjtBQUNQQyxXQUFTO0FBREYsRUFFTTtBQUFBLEtBQVhDLE1BQVc7OztBQUVkLFNBQU9BLE9BQU9D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QixRQUFPO0FBQ05wTCxRQUFNLHNCQUFNbEI7QUFETixFQUFQO0FBR0EsQ0FKTSxDOzs7Ozs7OztBQ1JQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7OztBQ3RCQSxrQkFBa0Isd0Q7Ozs7Ozs7QUNBbEI7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ1JELGtCQUFrQix3RDs7Ozs7OztBQ0FsQjtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDUkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O0FDZkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNyQ0Esa0JBQWtCLHdEOzs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhc3NldHMvanMvcGFnZXMvd2F0ZXJDb2xvci1mYWRlLmJkNmU4N2E1ZTQ4ZDk4NTI5MzkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHlwZXMgPSB7XG5cdFJFU0laRV9XSU5ET1c6ICdSRVNJWkVfV0lORE9XJyxcblx0VVBEQVRFX0NBTUVSQV9QT1NJVElPTjogJ1VQREFURV9DQU1FUkFfUE9TSVRJT04nLFxuXHRMT0FESU5HOiAnTE9BRElORycsXG5cdExPQURFRDogJ0xPQURFRCcsXG5cdFBMQVlfVElNRTogJ1BMQVlfVElNRScsXG5cdFJFV0lORF9USU1FOiAnUkVXSU5EX1RJTUUnLFxufVxuZXhwb3J0IGRlZmF1bHQgVHlwZXNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvY29uc3RhbnRzL2FjdGlvbnR5cGVzLmpzIiwiaW1wb3J0ICcuLi8uLi9zdHlsdXMvc3R5bGUuc3R5bCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9JbWFnZUNvbnRhaW5lcidcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgY29tcG9zZShcblx0dHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxuKSk7XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdDxJbWFnZUNvbnRhaW5lci8+XG5cdDwvUHJvdmlkZXI+XG4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9pbmRleC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkJ1xuaW1wb3J0IHdpbmRvd1NpemUgZnJvbSAnLi93aW5kb3dTaXplJ1xuaW1wb3J0IGNhbWVyYSBmcm9tICcuL2NhbWVyYSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSdcbmltcG9ydCByZXNvbHV0aW9uIGZyb20gJy4vcmVzb2x1dGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbG9hZCxcbiAgd2luZG93U2l6ZSxcbiAgY2FtZXJhLFxuICB0aW1lLFxuICByZXNvbHV0aW9uLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBsb2FkID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRsb2FkaW5nOiB0cnVlXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuTE9BRElORzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0fSlcblx0XHRjYXNlIFR5cGVzLkxPQURFRDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9sb2FkLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3Qgd2luZG93U2l6ZSA9IChcblx0c3RhdGUgPSBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5SRVNJWkVfV0lORE9XOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLFxuXHRcdFx0XHRuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdFx0KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1NpemVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGNhbWVyYSA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDMuOCksXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVyYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9yZWR1Y2Vycy9jYW1lcmEuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCB0aW1lID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRlbGFwc2VkOiAwLjAsXG5cdFx0ZHVyYXRpb246IDAuNSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5QTEFZX1RJTUU6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0ZWxhcHNlZDogTWF0aC5taW4oc3RhdGUuZWxhcHNlZCArIDAuMDEsIHN0YXRlLmR1cmF0aW9uKSxcblx0XHRcdFx0ZHVyYXRpb246IHN0YXRlLmR1cmF0aW9uLFxuXHRcdFx0fSlcblx0XHRjYXNlIFR5cGVzLlJFV0lORF9USU1FOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGVsYXBzZWQ6ICBNYXRoLm1heChzdGF0ZS5lbGFwc2VkIC0gMC4wMSwgMC4wKSxcblx0XHRcdFx0ZHVyYXRpb246IHN0YXRlLmR1cmF0aW9uLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3RpbWUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuY29uc3QgcmVzb2x1dGlvbiA9IChcblx0c3RhdGUgPSB7XG5cdFx0d2lkdGg6IGNvbnRlbnQuY2xpZW50V2lkdGgsXG5cdFx0aGVpZ2h0OiBjb250ZW50LmNsaWVudEhlaWdodCxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHV0aW9uXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL3JlZHVjZXJzL3Jlc29sdXRpb24uanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZSdcblxuaW1wb3J0IHtyZXNpemVXaW5kb3d9IGZyb20gJy4uL2FjdGlvbnMvcmVzaXplV2luZG93J1xuaW1wb3J0IHtwbGF5VGltZSwgcmV3aW5kVGltZX0gZnJvbSAnLi4vYWN0aW9ucy90aW1lJ1xuaW1wb3J0IHtsb2FkaW5nLCBsb2FkZWR9IGZyb20gJy4uL2FjdGlvbnMvbG9hZCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cblx0cmV0dXJuIHtcblx0XHRsb2FkaW5nOiBzdGF0ZS5sb2FkLmxvYWRpbmcsXG5cdFx0d2lkdGg6IHN0YXRlLnJlc29sdXRpb24ud2lkdGgsXG5cdFx0aGVpZ2h0OiBzdGF0ZS5yZXNvbHV0aW9uLmhlaWdodCxcblx0XHR3aW5kb3dXaWR0aDogc3RhdGUud2luZG93U2l6ZS54LFxuXHRcdHdpbmRvd0hlaWdodDogc3RhdGUud2luZG93U2l6ZS55LFxuXHRcdGNhbWVyYVBvc2l0aW9uOiBzdGF0ZS5jYW1lcmEucG9zaXRpb24sXG5cdFx0ZWxhcHNlZDogc3RhdGUudGltZS5lbGFwc2VkLFxuXHRcdGR1cmF0aW9uOiBzdGF0ZS50aW1lLmR1cmF0aW9uLFxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdG9uTG9hZGluZzogKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ0xvYWRpbmcuLi4nKVxuXHRcdFx0ZGlzcGF0Y2gobG9hZGluZygpKVxuXHRcdH0sXG5cdFx0b25Mb2FkZWQ6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdsb2FkZWQuLi4nKVxuXHRcdFx0ZGlzcGF0Y2gobG9hZGVkKCkpXG5cdFx0fSxcblx0XHRvblJlc2l6ZTogKGUpID0+IHtcblx0XHRcdGRpc3BhdGNoKHJlc2l6ZVdpbmRvdyhlKSlcblx0XHR9LFxuXHRcdG9uUGxheVRpbWU6ICgpID0+IHtcblx0XHRcdGRpc3BhdGNoKHBsYXlUaW1lKCkpXG5cdFx0fSxcblx0XHRvblJld2luZFRpbWU6ICgpID0+IHtcblx0XHRcdGRpc3BhdGNoKHJld2luZFRpbWUoKSlcblx0XHR9LFxuXHR9XG59XG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW1hZ2UpXG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29udGFpbmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJ1xuXG5pbXBvcnQgTW91c2VJbnB1dCBmcm9tICcuLi9saWIvTW91c2VJbnB1dCdcblxuaW1wb3J0IHZzIGZyb20gJy4uL2dsc2wvaW1hZ2UudmVydCdcbmltcG9ydCBmcyBmcm9tICcuLi9nbHNsL2ltYWdlLmZyYWcnXG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5mbGFnRW50ZXIgPSBmYWxzZVxuXG5cdFx0dGhpcy5vbkxvYWRpbmcgPSA6OnRoaXMucHJvcHMub25Mb2FkaW5nXG5cdFx0dGhpcy5vbkxvYWRlZCA9IDo6dGhpcy5wcm9wcy5vbkxvYWRlZFxuXHRcdHRoaXMub25SZXNpemUgPSA6OnRoaXMucHJvcHMub25SZXNpemVcblx0XHR0aGlzLm9uUGxheVRpbWUgPSA6OnRoaXMucHJvcHMub25QbGF5VGltZVxuXHRcdHRoaXMub25SZXdpbmRUaW1lID0gOjp0aGlzLnByb3BzLm9uUmV3aW5kVGltZVxuXG5cdFx0dGhpcy50ZXh0dXJlcyA9IHtcblx0XHRcdFwibWFpblwiOiB7XG5cdFx0XHRcdHVybDogXCIuLi9hc3NldHMvaW1nL3dhdGVyQ29sb3Ivc3VuZmxvd2VyLmpwZ1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJub2lzZVwiOiB7XG5cdFx0XHRcdHVybDogXCIuLi9hc3NldHMvaW1nL3dhdGVyQ29sb3Ivbm9pc2UucG5nXCJcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKiBMaWZlQ3ljbGUgKi9cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLmluaXRpYWxpemUoKS50aGVuKCgpID0+IHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uTG9hZGVkKClcblx0XHRcdFx0Ly8gdGhpcy5oYW5kbGVNb3VzZU1vdmUoKVxuXHRcdFx0XHR0aGlzLnNldE1vdXNlSW5wdXQoKVxuXHRcdFx0XHR0aGlzLmhhbmRsZVJlc2l6ZSgpXG5cblx0XHRcdH0sIDMwMClcblx0XHR9KVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKG5ld1Byb3BzKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bW91c2VJbnB1dCxcblx0XHR9ID0gdGhpcy5yZWZzO1xuXG5cdFx0Y29uc3Qge1xuXHRcdFx0d2luZG93V2lkdGgsXG5cdFx0XHR3aW5kb3dIZWlnaHQsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAod2luZG93V2lkdGggIT09IG5ld1Byb3BzLndpbmRvd1dpZHRoIHx8IHdpbmRvd0hlaWdodCAhPT0gbmV3UHJvcHMud2luZG93SGVpZ2h0KSB7XG5cdFx0XHRtb3VzZUlucHV0LmNvbnRhaW5lclJlc2l6ZWQoKTtcblx0XHR9XG5cdH1cblxuXG5cdC8qIGN1c3RvbSBGdW5jdGlvbiAgKi9cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMub25Mb2FkaW5nKClcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5sb2FkVGV4dHVyZSgpXG5cdFx0XHRyZXNvbHZlKClcblx0XHR9KTtcblx0fVxuXG5cdHNldE1vdXNlSW5wdXQoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bW91c2VJbnB1dCxcblx0XHRcdGNvbnRhaW5lclxuXHRcdH0gPSB0aGlzLnJlZnM7XG5cblx0XHRpZiAoIW1vdXNlSW5wdXQuaXNSZWFkeSgpKSB7XG5cdFx0XHRjb25zdCB7XG5cdFx0XHRcdHNjZW5lLFxuXHRcdFx0XHRjYW1lcmEsXG5cdFx0XHR9ID0gdGhpcy5yZWZzO1xuXG5cdFx0XHRtb3VzZUlucHV0LnJlYWR5KHNjZW5lLCBjb250YWluZXIsIGNhbWVyYSk7XG5cdFx0XHQvLyBtb3VzZUlucHV0LnJlc3RyaWN0SW50ZXJzZWN0aW9ucyhpbWFnZU1lc2gpO1xuXHRcdFx0bW91c2VJbnB1dC5zZXRBY3RpdmUoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZVJlc2l6ZSgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UpXG5cdH1cblxuXHRoYW5kbGVNb3VzZUVudGVyKGUpIHtcblx0XHR0aGlzLmZsYWdFbnRlciA9IHRydWVcblx0fVxuXHRoYW5kbGVNb3VzZUxlYXZlKGUpIHtcblx0XHR0aGlzLmZsYWdFbnRlciA9IGZhbHNlXG5cdH1cblxuXHRoYW5kbGVBbmltYXRlKCkge1xuXHRcdGlmICh0aGlzLmZsYWdFbnRlcikgdGhpcy5vblBsYXlUaW1lKClcblx0XHRpZiAoIXRoaXMuZmxhZ0VudGVyKSB0aGlzLm9uUmV3aW5kVGltZSgpXG5cdH1cblxuXHRsb2FkVGV4dHVyZSgpIHtcblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpXG5cdFx0bG9hZGVyLmNyb3NzT3JpZ2luID0gJyonXG5cdFx0Zm9yIChsZXQgbmFtZSBpbiB0aGlzLnRleHR1cmVzKSB7XG5cdFx0XHRsb2FkZXIubG9hZCh0aGlzLnRleHR1cmVzW25hbWVdLnVybCwgKHRleHR1cmUpID0+IHtcbiBcdFx0XHR0aGlzLnRleHR1cmVzW25hbWVdLnRleHR1cmUgPSB0ZXh0dXJlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2xvYWRpbmcsIHdpZHRoLCBoZWlnaHQsIGNhbWVyYVBvc2l0aW9uLCBlbGFwc2VkLCBkdXJhdGlvbiwgbW91c2V9ID0gdGhpcy5wcm9wc1xuXG5cdFx0aWYgKGxvYWRpbmcpIHJldHVybig8aDIgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9oMj4pXG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IHJlZj1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8UmVhY3QzXG5cdFx0XHRcdFx0bWFpbkNhbWVyYT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0XHRcdGhlaWdodD17aGVpZ2h0fVxuXHRcdFx0XHRcdG9uQW5pbWF0ZT17Ojp0aGlzLmhhbmRsZUFuaW1hdGV9XG5cdFx0XHRcdFx0Y2xlYXJDb2xvcj17MHhmZmZmZmZ9XG5cdFx0XHRcdFx0YW50aWFsaWFzPXt0cnVlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG1vZHVsZVxuXHRcdFx0XHRcdFx0cmVmPVwibW91c2VJbnB1dFwiXG5cdFx0XHRcdFx0XHRkZXNjcmlwdG9yPXtNb3VzZUlucHV0fVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8c2NlbmVcblx0XHRcdFx0XHRcdHJlZj1cInNjZW5lXCJcblx0XHRcdFx0XHQ+XG5cblxuXHRcdFx0XHRcdFx0ey8qIENhbWVyYSAqL31cblx0XHRcdFx0XHRcdDxwZXJzcGVjdGl2ZUNhbWVyYVxuXHRcdFx0XHRcdFx0XHRyZWY9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0Zm92PXsxNX1cblx0XHRcdFx0XHRcdFx0YXNwZWN0PXt3aWR0aCAvIGhlaWdodH1cblx0XHRcdFx0XHRcdFx0bmVhcj17MC4wMX1cblx0XHRcdFx0XHRcdFx0ZmFyPXsxMDAwfVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17Y2FtZXJhUG9zaXRpb259XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHR7LyogTGlnaHQgKi99XG5cdFx0XHRcdFx0XHQ8aGVtaXNwaGVyZUxpZ2h0XG5cdFx0XHRcdFx0XHRcdHNreUNvbG9yPXsweGZmZmZiYn1cblx0XHRcdFx0XHRcdFx0Z3JvdW5kQ29sb3I9ezB4ODg3OTc5fVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGlyZWN0aW9uYWxMaWdodFxuXHRcdFx0XHRcdFx0XHRjb2xvcj17MHhmZmZmZmZ9XG5cdFx0XHRcdFx0XHRcdGludGVuc2l0eT17MC44fVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIEltYWdlIE1lc2ggKi99XG5cdFx0XHRcdFx0XHQ8bWVzaFxuXHRcdFx0XHRcdFx0XHRyZWY9J2ltYWdlTWVzaCdcblx0XHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXsoZSkgPT4gdGhpcy5oYW5kbGVNb3VzZUVudGVyKGUpfVxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9eyhlKSA9PiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUoZSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxwbGFuZUdlb21ldHJ5XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8c2hhZGVyTWF0ZXJpYWxcblx0XHRcdFx0XHRcdFx0XHR2ZXJ0ZXhTaGFkZXI9e3ZzfVxuXHRcdFx0XHRcdFx0XHRcdGZyYWdtZW50U2hhZGVyPXtmc31cblx0XHRcdFx0XHRcdFx0XHRibGVuZGluZz17VEhSRUUuTm9ybWFsQmxlbmRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNwYXJlbnQ9e3RydWV9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybXM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnY29sb3JNYXAnfSB0eXBlPXsndCd9IHZhbHVlPXt0aGlzLnRleHR1cmVzWydtYWluJ10udGV4dHVyZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydub2lzZU1hcCd9IHR5cGU9eyd0J30gdmFsdWU9e3RoaXMudGV4dHVyZXNbJ25vaXNlJ10udGV4dHVyZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydlbGFwc2VkJ30gdHlwZT17J2YnfSB2YWx1ZT17ZWxhcHNlZH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydzY3JvbGwnfSB0eXBlPXsnZid9IHZhbHVlPXtzY3JvbGx9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnZHVyYXRpb24nfSB0eXBlPXsnZid9IHZhbHVlPXtkdXJhdGlvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydtb3VzZSd9IHR5cGU9eyd2ZWMyJ30gdmFsdWU9e21vdXNlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J3Jlc29sdXRpb24nfSB0eXBlPXsndmVjMid9IHZhbHVlPXtuZXcgVEhSRUUuVmVjdG9yMih3aWR0aCwgaGVpZ2h0KX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3VuaWZvcm1zPlxuXHRcdFx0XHRcdFx0XHQ8L3NoYWRlck1hdGVyaWFsPlxuXG5cdFx0XHRcdFx0XHQ8L21lc2g+XG5cblx0XHRcdFx0XHQ8L3NjZW5lPlxuXHRcdFx0XHQ8L1JlYWN0Mz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9jb21wb25lbnRzL0ltYWdlLmpzIiwiaW1wb3J0IFJlYWN0MyBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgUmVhY3RVcGRhdGVzIGZyb20gJ3JlYWN0LWRvbS9saWIvUmVhY3RVcGRhdGVzJztcblxuaW1wb3J0IFN5bnRoZXRpY01vdXNlRXZlbnQgZnJvbSAncmVhY3QtZG9tL2xpYi9TeW50aGV0aWNNb3VzZUV2ZW50JztcblxuaW1wb3J0IE1vZHVsZSBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlci9saWIvTW9kdWxlJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdyZWFjdC9saWIvUmVhY3RQcm9wVHlwZXMnO1xuXG5jb25zdCB0ZW1wVmVjdG9yMiA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbmNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tOYW1lcyA9IHtcbiAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbn07XG5cbmNvbnN0IG1vdXNlRXZlbnRzID0gW1xuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZScsXG4gICdvbk1vdXNlRG93bicsXG4gICdvbk1vdXNlVXAnLFxuICAnb25DbGljaycsXG5dO1xuXG5jb25zdCBib29sUHJvcHMgPSB7XG4gIGlnbm9yZVBvaW50ZXJFdmVudHM6IGZhbHNlLFxufTtcblxuY2xhc3MgTW91c2VJbnB1dCBleHRlbmRzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pc1JlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QgPSBudWxsO1xuXG4gICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzID0gW107XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIHNldHVwKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UpIHtcbiAgICBzdXBlci5zZXR1cChyZWFjdDNSZW5kZXJlckluc3RhbmNlKTtcblxuICAgIGNvbnN0IE9iamVjdDNERGVzY3JpcHRvciA9IHJlYWN0M1JlbmRlcmVySW5zdGFuY2UudGhyZWVFbGVtZW50RGVzY3JpcHRvcnMub2JqZWN0M0QuY29uc3RydWN0b3I7XG5cbiAgICBPYmplY3QudmFsdWVzKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UudGhyZWVFbGVtZW50RGVzY3JpcHRvcnMpLmZvckVhY2goZWxlbWVudERlc2NyaXB0b3IgPT4ge1xuICAgICAgaWYgKGVsZW1lbnREZXNjcmlwdG9yIGluc3RhbmNlb2YgT2JqZWN0M0REZXNjcmlwdG9yKSB7XG4gICAgICAgIG1vdXNlRXZlbnRzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5oYXNFdmVudChldmVudE5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhib29sUHJvcHMpLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLmhhc1Byb3AocHJvcE5hbWUsIHtcbiAgICAgICAgICAgIHR5cGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgdXBkYXRlKHRocmVlT2JqZWN0LCB2YWx1ZSwgaGFzUHJvcCkge1xuICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRocmVlT2JqZWN0LnVzZXJEYXRhW3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocmVlT2JqZWN0LnVzZXJEYXRhW3Byb3BOYW1lXSA9IGJvb2xQcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0OiBib29sUHJvcHNbcHJvcE5hbWVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMucHVzaChlbGVtZW50RGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1JlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pc1JlYWR5O1xuICB9XG5cbiAgc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHJlc3RyaWN0SW50ZXJzZWN0aW9ucyhvYmplY3RzLCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyA9IHRydWU7XG4gICAgdGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0ID0gb2JqZWN0cztcblxuICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUgPSByZWN1cnNpdmU7XG4gIH1cblxuICByZWFkeShzY2VuZSwgY29udGFpbmVyLCBjYW1lcmEpIHtcbiAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuX2NhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuX3JheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcbiAgICB0aGlzLl9tb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB0aGlzLl9vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fbW91c2Uuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVFbnRlckxlYXZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2NvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLl9ob3Zlck9iamVjdE1hcCA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUsIGZhbHNlKTtcblxuICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG5cbiAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhsaXN0ZW5lckNhbGxiYWNrTmFtZXMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIGxldCBib3VuZExpc3RlbmVyO1xuXG4gICAgICBjb25zdCBsaXN0ZW5lckNhbGxiYWNrTmFtZSA9IGxpc3RlbmVyQ2FsbGJhY2tOYW1lc1tldmVudE5hbWVdO1xuICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgICBib3VuZExpc3RlbmVyID0gdGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzLCBsaXN0ZW5lckNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgIGJvdW5kTGlzdGVuZXIgPSB0aGlzLl9vbk1vdXNlVXAuYmluZCh0aGlzLCBsaXN0ZW5lckNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChib3VuZExpc3RlbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRMaXN0ZW5lciwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGJvdW5kTGlzdGVuZXIsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9vbk1vdXNlRG93biA9IChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpID0+IHtcbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudCxcbiAgICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICAgIH0gPSB0aGlzLl9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpO1xuXG4gICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gaW50ZXJzZWN0aW9ucztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfb25Nb3VzZVVwID0gKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkgPT4ge1xuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpbnRlcnNlY3Rpb25zLFxuICAgICAgfSA9IHRoaXMuX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCk7XG5cbiAgICAgIGlmICghKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnRlcnNlY3QgY3VycmVudCBpbnRlcnNlY3Rpb25zIHdpdGggdGhlIGludGVyc2VjdGlvbnMgZm9yIGNsaWNrXG4gICAgICAgIC8vICAgY2FsbCB4emliaXQgQVNBUCB3ZSBoYXZlIGEgZ29vZCBvbmUgc29uXG4gICAgICAgIC8vICAgICBpdCB3YXNuJ3QgdGhhdCBnb29kXG5cbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uVVVJRE1hcCA9IHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljay5yZWR1Y2UoKG1hcCwgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgbWFwW2ludGVyc2VjdGlvbi5vYmplY3QudXVpZF0gPSBpbnRlcnNlY3Rpb247XG5cbiAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2ldO1xuXG4gICAgICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgICAgIGNvbnN0IHV1aWQgPSBvYmplY3QudXVpZDtcblxuICAgICAgICAgIGlmIChpbnRlcnNlY3Rpb25VVUlETWFwW3V1aWRdKSB7XG4gICAgICAgICAgICAvLyBvaCBib3kgb2ggYm95IGhlcmUgd2UgZ28sIHdlIGdvdCBhIGNsaWNrZXJcblxuICAgICAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlclxuICAgICAgICAgICAgICAuZGlzcGF0Y2hFdmVudChvYmplY3QsICdvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdjbGljaycsIGV2ZW50KSwgaW50ZXJzZWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG4gIH07XG5cbiAgX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoZXZlbnRUeXBlLCBwcm90b3R5cGUpIHtcbiAgICByZXR1cm4gU3ludGhldGljTW91c2VFdmVudC5nZXRQb29sZWQobnVsbCwgbnVsbCxcbiAgICAgIG5ldyBNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcHJvdG90eXBlKSwgcHJvdG90eXBlLnRhcmdldCk7XG4gIH1cblxuICBfaW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChudWxsLCBudWxsLCBtb3VzZUV2ZW50LCBtb3VzZUV2ZW50LnRhcmdldCk7XG5cbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fZ2V0SW50ZXJzZWN0aW9ucyh0ZW1wVmVjdG9yMi5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSkpO1xuXG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2ldO1xuXG4gICAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQob2JqZWN0LCBjYWxsYmFja05hbWUsIGV2ZW50LCBpbnRlcnNlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50LFxuICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgX2dldEludGVyc2VjdGlvbnMobW91c2VDb29yZHMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgaWYgKHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCxcbiAgICAgICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3QodGhpcy5fc2NlbmUsIHRydWUpO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IyfSBtb3VzZUNvb3JkcyB1c3VhbGx5IGFuIGV2ZW50J3MgY2xpZW50WCBhbmQgY2xpZW50WVxuICAgKiBAcmV0dXJucyB7VEhSRUUuUmF5fVxuICAgKi9cbiAgZ2V0Q2FtZXJhUmF5KG1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgY29uc3QgcmVzdWx0UmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnJheS5jb3B5KG9yaWdpbmFsUmF5KTtcblxuICAgIHJldHVybiByZXN1bHRSYXk7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIGludGVyc2VjdE9iamVjdChtb3VzZUNvb3Jkcywgb2JqZWN0LCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KG9iamVjdCwgcmVjdXJzaXZlKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5yYXkuY29weShvcmlnaW5hbFJheSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuXG4gIGNvbnRhaW5lclJlc2l6ZWQoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzUmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl91cGRhdGVFbnRlckxlYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUVudGVyTGVhdmUoKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX2dldEludGVyc2VjdGlvbnModGhpcy5fbW91c2UpO1xuXG4gICAgY29uc3QgaG92ZXJNYXBUb1VwZGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuX2hvdmVyT2JqZWN0TWFwLFxuICAgIH07XG5cbiAgICBjb25zdCBtb3VzZUVudGVyRXZlbnQgPSB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdtb3VzZUVudGVyJywge1xuICAgICAgdGFyZ2V0OiB0aGlzLl9jb250YWluZXIsXG4gICAgICBjbGllbnRYOiB0aGlzLl9tb3VzZS54LFxuICAgICAgY2xpZW50WTogdGhpcy5fbW91c2UueSxcbiAgICB9KTtcblxuICAgIC8vIGZpbmQgZmlyc3QgaW50ZXJzZWN0aW9uIHRoYXQgZG9lcyBub3QgaWdub3JlIHBvaW50ZXIgZXZlbnRzXG4gICAgZm9yIChsZXQgZGVwdGggPSAwOyBkZXB0aCA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2RlcHRoKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2RlcHRoXTtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgIGlmIChvYmplY3QudXNlckRhdGEgJiYgb2JqZWN0LnVzZXJEYXRhLmlnbm9yZVBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHV1aWQgPSBvYmplY3QudXVpZDtcblxuICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdKSB7XG4gICAgICAgIGRlbGV0ZSBob3Zlck1hcFRvVXBkYXRlW3V1aWRdO1xuXG4gICAgICAgIC8vIGp1c3QgdXBkYXRlIHRoYXQgaW50ZXJzZWN0aW9uXG4gICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdID0ge1xuICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICBpbnRlcnNlY3Rpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCEobW91c2VFbnRlckV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IG1vdXNlRW50ZXJFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChvYmplY3QsICdvbk1vdXNlRW50ZXInLFxuICAgICAgICAgICAgbW91c2VFbnRlckV2ZW50LCBpbnRlcnNlY3Rpb24sIGRlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBoYXZlIGZvdW5kIHRoZSBmaXJzdCBzb2xpZCBpbnRlcnNlY3Rpb24sIGRvbid0IGdvIGZ1cnRoZXJcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdXNlTGVhdmVFdmVudCA9IHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ21vdXNlTGVhdmUnLCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIGNsaWVudFg6IHRoaXMuX21vdXNlLngsXG4gICAgICBjbGllbnRZOiB0aGlzLl9tb3VzZS55LFxuICAgIH0pO1xuXG4gICAgLy8gZGVsZXRlIGFsbCB1bnNlZW4gdXVpZHMgaW4gaG92ZXIgbWFwXG4gICAgY29uc3QgdW5zZWVuVVVJRHMgPSBPYmplY3Qua2V5cyhob3Zlck1hcFRvVXBkYXRlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5zZWVuVVVJRHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHV1aWQgPSB1bnNlZW5VVUlEc1tpXTtcblxuICAgICAgaWYgKCEobW91c2VMZWF2ZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IG1vdXNlTGVhdmVFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQodGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0ub2JqZWN0LFxuICAgICAgICAgICdvbk1vdXNlTGVhdmUnLCBtb3VzZUxlYXZlRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF07XG4gICAgfVxuICB9XG5cbiAgX2dldFJlbGF0aXZlTW91c2VDb29yZHMoc2NyZWVuTW91c2VDb29yZHMpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyUmVjdDtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSBzY3JlZW5Nb3VzZUNvb3Jkcy5jbG9uZSgpXG4gICAgICAuc3ViKHRlbXBWZWN0b3IyLnNldChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKSlcbiAgICAgIC5kaXZpZGUodGVtcFZlY3RvcjIuc2V0KGNvbnRhaW5lclJlY3Qud2lkdGgsIGNvbnRhaW5lclJlY3QuaGVpZ2h0KSk7XG5cbiAgICAvLyBtb3VzZS54ID0gKCBldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGggKSAqIDIgLSAxO1xuICAgIC8vIG1vdXNlLnkgPSAtICggZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCApICogMiArIDE7XG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRzLnggPSByZWxhdGl2ZU1vdXNlQ29vcmRzLnggKiAyIC0gMTtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRzLnkgPSAtcmVsYXRpdmVNb3VzZUNvb3Jkcy55ICogMiArIDE7XG5cbiAgICByZXR1cm4gcmVsYXRpdmVNb3VzZUNvb3JkcztcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgZGlzcG9zZSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucy5mb3JFYWNoKGNsZWFudXBGdW5jdGlvbiA9PiBjbGVhbnVwRnVuY3Rpb24oKSk7XG4gICAgZGVsZXRlIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnM7XG5cbiAgICBkZWxldGUgdGhpcy5fb25Nb3VzZU1vdmU7XG5cbiAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMuZm9yRWFjaChlbGVtZW50RGVzY3JpcHRvciA9PiB7XG4gICAgICBjb25zdCBhbGxQcm9wcyA9IE9iamVjdC5rZXlzKGJvb2xQcm9wcylcbiAgICAgICAgLmNvbmNhdChtb3VzZUV2ZW50cyk7XG5cbiAgICAgIGFsbFByb3BzLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5yZW1vdmVQcm9wKHByb3BOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdXNlSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2xpYi9Nb3VzZUlucHV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB0YztcXG52YXJ5aW5nIHZlYzQgdmNvbG9yO1xcbmF0dHJpYnV0ZSB2ZWMzIGNvbG9yO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIHRjID0gdXY7XFxuICB2Y29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xcbiAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UudmVydFxuLy8gbW9kdWxlIGlkID0gNTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdGM7XFxudmFyeWluZyB2ZWM0IHZjb2xvcjtcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCBjb2xvck1hcDtcXG51bmlmb3JtIHNhbXBsZXIyRCBub2lzZU1hcDtcXG51bmlmb3JtIGZsb2F0IGVsYXBzZWQ7XFxudW5pZm9ybSBmbG9hdCBkdXJhdGlvbjtcXG5cXG52b2lkIG1haW4oKXtcXG5cXG5cXHRmbG9hdCBzZWZsb2F0ID0gZHVyYXRpb24gLSBtaW4oZXhwKGVsYXBzZWQpICogMC4zLCBkdXJhdGlvbik7XFxuXFxuXFx0ZmxvYXQgZ3JhZGllbnRTdGVwID0gc2VmbG9hdCAqIDAuMDU7XFxuXFx0ZmxvYXQgYWR2ZWN0U3RlcCA9IHNlZmxvYXQgKiAwLjA1O1xcblxcblxcdHZlYzQgY3hwID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHRjLnggKyBncmFkaWVudFN0ZXAsIHRjLnkpKTtcXG5cXHR2ZWM0IGN4biA9IHRleHR1cmUyRChub2lzZU1hcCwgdmVjMih0Yy54IC0gZ3JhZGllbnRTdGVwLCB0Yy55KSk7XFxuXFx0dmVjNCBjeXAgPSB0ZXh0dXJlMkQobm9pc2VNYXAsIHZlYzIodGMueCwgdGMueSArIGdyYWRpZW50U3RlcCkpO1xcblxcdHZlYzQgY3luID0gdGV4dHVyZTJEKG5vaXNlTWFwLCB2ZWMyKHRjLngsIHRjLnkgLSBncmFkaWVudFN0ZXApKTtcXG5cXG5cXHR2ZWMzIG9yaWdpbiA9IHZlYzMoMC4wKTtcXG5cXHRmbG9hdCBkeHAgPSBkaXN0YW5jZShvcmlnaW4sIGN4cC54eXopO1xcblxcdGZsb2F0IGR4biA9IGRpc3RhbmNlKG9yaWdpbiwgY3huLnh5eik7XFxuXFx0ZmxvYXQgZHlwID0gZGlzdGFuY2Uob3JpZ2luLCBjeXAueHl6KTtcXG5cXHRmbG9hdCBkeW4gPSBkaXN0YW5jZShvcmlnaW4sIGN5bi54eXopO1xcblxcblxcdHZlYzIgZ3JhZCA9IHZlYzIoZHhwIC0gZHhuLCBkeXAgLSBkeW4pO1xcblxcdHZlYzIgbmV3dGMgPSB0YyArIChhZHZlY3RTdGVwICogbm9ybWFsaXplKGdyYWQpKTtcXG5cXG5cXHR2ZWMzIGJhc2VDb2xvciA9IHRleHR1cmUyRChjb2xvck1hcCwgbmV3dGMpLnJnYjtcXG5cXG5cXHRnbF9GcmFnQ29sb3IucmdiID0gYmFzZUNvbG9yO1xcblxcblxcdGdsX0ZyYWdDb2xvci5hID0gdmNvbG9yLmE7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvd2F0ZXJDb2xvci1mYWRlL2dsc2wvaW1hZ2UuZnJhZ1xuLy8gbW9kdWxlIGlkID0gNTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCByZXNpemVXaW5kb3cgPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlJFU0laRV9XSU5ET1csXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3dhdGVyQ29sb3ItZmFkZS9hY3Rpb25zL3Jlc2l6ZVdpbmRvdy5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBwbGF5VGltZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5QTEFZX1RJTUUsXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHJld2luZFRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUkVXSU5EX1RJTUUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTE9BRElOR1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZWQgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTE9BREVEXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC93YXRlckNvbG9yLWZhZGUvYWN0aW9ucy9sb2FkLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QudmFsdWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuL19vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCkge1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJ2YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGlzRW51bSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXNFbnRyaWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKSB7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIl0sInNvdXJjZVJvb3QiOiIifQ==