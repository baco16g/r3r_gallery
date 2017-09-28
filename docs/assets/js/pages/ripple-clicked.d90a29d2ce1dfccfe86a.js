webpackJsonp([0],{

/***/ 28:
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

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(50);

var _typeof3 = _interopRequireDefault(_typeof2);

__webpack_require__(77);

var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

var _reactThreeRenderer = __webpack_require__(33);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _reactDom = __webpack_require__(94);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(36);

var _reactRedux = __webpack_require__(44);

var _reducers = __webpack_require__(521);

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

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(36);

var _load = __webpack_require__(522);

var _load2 = _interopRequireDefault(_load);

var _windowSize = __webpack_require__(523);

var _windowSize2 = _interopRequireDefault(_windowSize);

var _camera = __webpack_require__(524);

var _camera2 = _interopRequireDefault(_camera);

var _time = __webpack_require__(525);

var _time2 = _interopRequireDefault(_time);

var _pointer = __webpack_require__(526);

var _pointer2 = _interopRequireDefault(_pointer);

var _image = __webpack_require__(527);

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

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(28);

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

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(28);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(28);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(28);

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

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(16);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(28);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(28);

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

var _reactRedux = __webpack_require__(44);

var _Image = __webpack_require__(529);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(545);

var _time = __webpack_require__(546);

var _clickMesh = __webpack_require__(547);

var _moveMouse = __webpack_require__(548);

var _load = __webpack_require__(549);

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

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__(97);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(57);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(67);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(68);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(69);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(70);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(25);

var _react2 = _interopRequireDefault(_react);

var _reactThreeRenderer = __webpack_require__(33);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _MouseInput = __webpack_require__(530);

var _MouseInput2 = _interopRequireDefault(_MouseInput);

var _image = __webpack_require__(543);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(544);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(531);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(532);

var _keys2 = _interopRequireDefault(_keys);

var _values = __webpack_require__(535);

var _values2 = _interopRequireDefault(_values);

var _getPrototypeOf = __webpack_require__(57);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(67);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(68);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(69);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(539);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(70);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactThreeRenderer = __webpack_require__(33);

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _three = __webpack_require__(1);

var THREE = _interopRequireWildcard(_three);

var _ReactUpdates = __webpack_require__(21);

var _ReactUpdates2 = _interopRequireDefault(_ReactUpdates);

var _SyntheticMouseEvent = __webpack_require__(65);

var _SyntheticMouseEvent2 = _interopRequireDefault(_SyntheticMouseEvent);

var _Module2 = __webpack_require__(123);

var _Module3 = _interopRequireDefault(_Module2);

var _ReactPropTypes = __webpack_require__(154);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(16);

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

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(533), __esModule: true };

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(534);
module.exports = __webpack_require__(10).Object.keys;


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(76);
var $keys = __webpack_require__(52);

__webpack_require__(135)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(536), __esModule: true };

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(537);
module.exports = __webpack_require__(10).Object.values;


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(24);
var $values = __webpack_require__(538)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(52);
var toIObject = __webpack_require__(40);
var isEnum = __webpack_require__(61).f;
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

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(57);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(540);

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

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(541), __esModule: true };

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(542);
var $Object = __webpack_require__(10).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(40);
var $getOwnPropertyDescriptor = __webpack_require__(109).f;

__webpack_require__(135)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nuniform sampler2D texture;\nuniform float time;\nuniform float duration;\nuniform vec2 mouse;\n\nvoid main() {\n\tvec2 uv = vUv;\n\tvec2 texCoord = uv;\n\tvec2 departure = mouse;\n\tfloat amplitude = 0.7;\n\tfloat waveLengthOffset = 0.1;\n\tfloat speed = 0.8;\n\tfloat elapsed = mod(time * speed, duration);\n\t// float elapsed = time;\n\n\tfloat dist = distance(uv, departure);\n\n\tif ( (dist <= (elapsed + waveLengthOffset)) && (dist >= (elapsed - waveLengthOffset)) ) {\n\t\tfloat diff = (elapsed - dist);\n\t\tfloat powDiff = 1.0 - pow((diff*10.0), amplitude);\n\n\t\tfloat diffTime = diff * powDiff;\n\t\ttexCoord = uv + (uv * diffTime);\n\t}\n\n\tvec4 color = texture2D(texture, texCoord);\n\n\tgl_FragColor = color;\n}\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(28);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetTime = exports.updateTime = undefined;

var _actiontypes = __webpack_require__(28);

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

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clickMesh = undefined;

var _actiontypes = __webpack_require__(28);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clickMesh = exports.clickMesh = function clickMesh(e) {
	return {
		type: _actiontypes2.default.CLICK_MESH,
		e: e
	};
};

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(28);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(28);

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

},[520]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrZWQvY29uc3RhbnRzL2FjdGlvbnR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2tlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrZWQvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2VkL3JlZHVjZXJzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2VkL3JlZHVjZXJzL3dpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2VkL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrZWQvcmVkdWNlcnMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrZWQvcmVkdWNlcnMvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrZWQvcmVkdWNlcnMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2VkL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2VkL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2VkL2xpYi9Nb3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvdmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrZWQvZ2xzbC9pbWFnZS52ZXJ0Iiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2tlZC9nbHNsL2ltYWdlLmZyYWciLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2VkL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2tlZC9hY3Rpb25zL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2VkL2FjdGlvbnMvY2xpY2tNZXNoLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2tlZC9hY3Rpb25zL21vdmVNb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrZWQvYWN0aW9ucy9sb2FkLmpzIl0sIm5hbWVzIjpbIlR5cGVzIiwiUkVTSVpFX1dJTkRPVyIsIk1PVkVfTU9VU0UiLCJVUERBVEVfQ0FNRVJBX1BPU0lUSU9OIiwiTE9BRElORyIsIkxPQURFRCIsIlVQREFURV9USU1FIiwiUkVTRVRfVElNRSIsIkNMSUNLX01FU0giLCJzdG9yZSIsIndpbmRvdyIsImRldlRvb2xzRXh0ZW5zaW9uIiwiZiIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2FkIiwid2luZG93U2l6ZSIsImNhbWVyYSIsInRpbWUiLCJwb2ludGVyIiwiaW1hZ2UiLCJzdGF0ZSIsImxvYWRpbmciLCJhY3Rpb24iLCJ0eXBlIiwiVEhSRUUiLCJWZWN0b3IyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJWZWN0b3IzIiwiZWxhcHNlZCIsImR1cmF0aW9uIiwicmVjdCIsImUiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50WSIsInRvcCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbnRlbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIndpbmRvd1dpZHRoIiwieCIsIndpbmRvd0hlaWdodCIsInkiLCJjYW1lcmFQb3NpdGlvbiIsInBvaW50ZXJQb3NpdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25Mb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIm9uTG9hZGVkIiwib25SZXNpemUiLCJvblVwZGF0ZVRpbWUiLCJvblJlc2V0VGltZSIsIm9uQ2xpY2tNZXNoIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsInByb3BzIiwidGV4dHVyZXMiLCJ1cmwiLCJpbml0aWFsaXplIiwidGhlbiIsInNldFRpbWVvdXQiLCJzZXRNb3VzZUlucHV0IiwiaGFuZGxlUmVzaXplIiwibmV3UHJvcHMiLCJtb3VzZUlucHV0IiwicmVmcyIsImNvbnRhaW5lclJlc2l6ZWQiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZFRleHR1cmUiLCJjb250YWluZXIiLCJpc1JlYWR5Iiwic2NlbmUiLCJyZWFkeSIsInNldEFjdGl2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwiY3Jvc3NPcmlnaW4iLCJuYW1lIiwidGV4dHVyZSIsImhhbmRsZUFuaW1hdGUiLCJoYW5kbGVDbGljayIsIk5vcm1hbEJsZW5kaW5nIiwiQ29tcG9uZW50IiwidGVtcFZlY3RvcjIiLCJsaXN0ZW5lckNhbGxiYWNrTmFtZXMiLCJtb3VzZWRvd24iLCJtb3VzZXVwIiwibW91c2VFdmVudHMiLCJib29sUHJvcHMiLCJpZ25vcmVQb2ludGVyRXZlbnRzIiwiTW91c2VJbnB1dCIsIl9vbk1vdXNlRG93biIsImNhbGxiYWNrTmFtZSIsIm1vdXNlRXZlbnQiLCJiYXRjaGVkVXBkYXRlcyIsIl9pbnRlcnNlY3RBbmREaXNwYXRjaCIsImV2ZW50IiwiaW50ZXJzZWN0aW9ucyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiX2ludGVyc2VjdGlvbnNGb3JDbGljayIsIl9vbk1vdXNlVXAiLCJpbnRlcnNlY3Rpb25VVUlETWFwIiwicmVkdWNlIiwibWFwIiwiaW50ZXJzZWN0aW9uIiwib2JqZWN0IiwidXVpZCIsImkiLCJsZW5ndGgiLCJldmVudERpc3BhdGNoZXIiLCJkaXNwYXRjaEV2ZW50IiwiX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQiLCJfaXNSZWFkeSIsIl9hY3RpdmUiLCJfcmVzdHJpY3RJbnRlcnNlY3Rpb25zIiwiX29iamVjdHNUb0ludGVyc2VjdCIsIl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlIiwiX3BhdGNoZWREZXNjcmlwdG9ycyIsInJlYWN0M1JlbmRlcmVySW5zdGFuY2UiLCJPYmplY3QzRERlc2NyaXB0b3IiLCJ0aHJlZUVsZW1lbnREZXNjcmlwdG9ycyIsIm9iamVjdDNEIiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwiZWxlbWVudERlc2NyaXB0b3IiLCJoYXNFdmVudCIsImV2ZW50TmFtZSIsImhhc1Byb3AiLCJwcm9wTmFtZSIsImJvb2wiLCJ1cGRhdGUiLCJ0aHJlZU9iamVjdCIsInZhbHVlIiwidXNlckRhdGEiLCJkZWZhdWx0IiwicHVzaCIsImFjdGl2ZSIsIm9iamVjdHMiLCJyZWN1cnNpdmUiLCJfc2NlbmUiLCJfY29udGFpbmVyIiwiX2NhbWVyYSIsIl9yYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJfbW91c2UiLCJfb25Nb3VzZU1vdmUiLCJzZXQiLCJfdXBkYXRlRW50ZXJMZWF2ZSIsIl9jb250YWluZXJSZWN0IiwiX2hvdmVyT2JqZWN0TWFwIiwiX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMiLCJib3VuZExpc3RlbmVyIiwibGlzdGVuZXJDYWxsYmFja05hbWUiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsInByb3RvdHlwZSIsImdldFBvb2xlZCIsIk1vdXNlRXZlbnQiLCJfZ2V0SW50ZXJzZWN0aW9ucyIsIm1vdXNlQ29vcmRzIiwicmVsYXRpdmVNb3VzZUNvb3JkcyIsIl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzIiwic2V0RnJvbUNhbWVyYSIsImludGVyc2VjdE9iamVjdHMiLCJpbnRlcnNlY3RPYmplY3QiLCJvcmlnaW5hbFJheSIsInJheSIsImNsb25lIiwicmVzdWx0UmF5IiwiY29weSIsImhvdmVyTWFwVG9VcGRhdGUiLCJtb3VzZUVudGVyRXZlbnQiLCJkZXB0aCIsIm1vdXNlTGVhdmVFdmVudCIsInVuc2VlblVVSURzIiwic2NyZWVuTW91c2VDb29yZHMiLCJjb250YWluZXJSZWN0Iiwic3ViIiwiZGl2aWRlIiwiY2xlYW51cEZ1bmN0aW9uIiwiYWxsUHJvcHMiLCJjb25jYXQiLCJyZW1vdmVQcm9wIiwicmVzaXplV2luZG93IiwidXBkYXRlVGltZSIsInJlc2V0VGltZSIsImNsaWNrTWVzaCIsIm1vdmVNb3VzZSIsImxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRO0FBQ2JDLGdCQUFlLGVBREY7QUFFYkMsYUFBWSxZQUZDO0FBR2JDLHlCQUF3Qix3QkFIWDtBQUliQyxVQUFTLFNBSkk7QUFLYkMsU0FBUSxRQUxLO0FBTWJDLGNBQWEsYUFOQTtBQU9iQyxhQUFZLFlBUEM7QUFRYkMsYUFBWTtBQVJDLENBQWQ7a0JBVWVSLEs7Ozs7Ozs7Ozs7Ozs7O0FDVmY7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTVMsUUFBUSw0Q0FBc0Isb0JBQ25DLFFBQU9DLE1BQVAsdURBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFBOEIsT0FBT0EsT0FBT0MsaUJBQWQsS0FBb0MsV0FBbEUsR0FBZ0ZELE9BQU9DLGlCQUFQLEVBQWhGLEdBQTZHO0FBQUEsUUFBS0MsQ0FBTDtBQUFBLENBRDFFLENBQXRCLENBQWQ7O0FBTUEsbUJBQVNDLE1BQVQsQ0FDQztBQUFBO0FBQUEsR0FBVSxPQUFPSixLQUFqQjtBQUNDO0FBREQsQ0FERCxFQUlFSyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBSkYsRTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFGQTtrQkFJZSw0QkFBZ0I7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TSxzQkFBTW5CO0FBRE4sRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTWtNLGdDQUFZLFNBQVpBLFNBQVksR0FBTTtBQUM5QixRQUFPO0FBQ04vSyxRQUFNLHNCQUFNbEI7QUFETixFQUFQO0FBR0EsQ0FKTSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNSUDs7Ozs7O0FBRU8sSUFBTWtNLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ3RLLENBQUQsRUFBTztBQUMvQixRQUFPO0FBQ05WLFFBQU0sc0JBQU1qQixVQUROO0FBRU4yQixLQUFHQTtBQUZHLEVBQVA7QUFJQSxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOzs7Ozs7QUFFTyxJQUFNdUssZ0NBQVksU0FBWkEsU0FBWSxDQUFDdkssQ0FBRCxFQUFPO0FBQy9CLFFBQU87QUFDTlYsUUFBTSxzQkFBTXZCLFVBRE47QUFFTmlDLEtBQUdBO0FBRkcsRUFBUDtBQUlBLENBTE0sQzs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVPLElBQU1aLDRCQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUM1QixRQUFPO0FBQ05FLFFBQU0sc0JBQU1yQjtBQUROLEVBQVA7QUFHQSxDQUpNOztBQU1BLElBQU11TSwwQkFBUyxTQUFUQSxNQUFTLEdBQU07QUFDM0IsUUFBTztBQUNObEwsUUFBTSxzQkFBTXBCO0FBRE4sRUFBUDtBQUdBLENBSk0sQyIsImZpbGUiOiJhc3NldHMvanMvcGFnZXMvcmlwcGxlLWNsaWNrZWQuZDkwYTI5ZDJjZTFkZmNjZmU4NmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRNT1ZFX01PVVNFOiAnTU9WRV9NT1VTRScsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0TE9BRElORzogJ0xPQURJTkcnLFxuXHRMT0FERUQ6ICdMT0FERUQnLFxuXHRVUERBVEVfVElNRTogJ1VQREFURV9USU1FJyxcblx0UkVTRVRfVElNRTogJ1JFU0VUX1RJTUUnLFxuXHRDTElDS19NRVNIOiAnQ0xJQ0tfTUVTSCcsXG59XG5leHBvcnQgZGVmYXVsdCBUeXBlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2VkL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsImltcG9ydCAnLi4vLi4vc3R5bHVzL3N0eWxlLnN0eWwnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXInXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGNvbXBvc2UoXG5cdHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gIT09ICd1bmRlZmluZWQnID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbikpO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8SW1hZ2VDb250YWluZXIvPlxuXHQ8L1Byb3ZpZGVyPlxuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2tlZC9pbmRleC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkJ1xuaW1wb3J0IHdpbmRvd1NpemUgZnJvbSAnLi93aW5kb3dTaXplJ1xuaW1wb3J0IGNhbWVyYSBmcm9tICcuL2NhbWVyYSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSdcbi8vIGltcG9ydCBtb3VzZSBmcm9tICcuL21vdXNlJ1xuaW1wb3J0IHBvaW50ZXIgZnJvbSAnLi9wb2ludGVyJ1xuaW1wb3J0IGltYWdlIGZyb20gJy4vaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxvYWQsXG4gIHdpbmRvd1NpemUsXG4gIGNhbWVyYSxcbiAgdGltZSxcbiAgLy8gbW91c2UsXG4gIHBvaW50ZXIsXG4gIGltYWdlLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2tlZC9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGxvYWQgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGxvYWRpbmc6IHRydWVcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrZWQvcmVkdWNlcnMvbG9hZC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHdpbmRvd1NpemUgPSAoXG5cdHN0YXRlID0gbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuUkVTSVpFX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSxcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0XHRcdClcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTaXplXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrZWQvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGNhbWVyYSA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDMuOCksXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVyYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2VkL3JlZHVjZXJzL2NhbWVyYS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHRpbWUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGVsYXBzZWQ6IDAuMCxcblx0XHRkdXJhdGlvbjogMS41LFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLlVQREFURV9USU1FOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGVsYXBzZWQ6IHN0YXRlLmVsYXBzZWQgKyAwLjAxLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuUkVTRVRfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICogMC4wLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2tlZC9yZWR1Y2Vycy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgcG9pbnRlciA9IChcblx0c3RhdGUgPSB7XG5cdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKDAuNSwgMC41KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5DTElDS19NRVNIOlxuXHRcdFx0bGV0IHJlY3QgPSBhY3Rpb24uZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdChhY3Rpb24uZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIGFjdGlvbi5lLnRhcmdldC53aWR0aCxcblx0XHRcdFx0XHQoYWN0aW9uLmUudGFyZ2V0LmhlaWdodCAtIGFjdGlvbi5lLmNsaWVudFkgKyByZWN0LnRvcCkgLyBhY3Rpb24uZS50YXJnZXQuaGVpZ2h0LFxuXHRcdFx0XHQpLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwb2ludGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrZWQvcmVkdWNlcnMvcG9pbnRlci5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGltYWdlID0gKFxuXHRzdGF0ZSA9IHtcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Ly8gY2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdC8vIFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0Ly8gXHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0Ly8gXHR9KVxuXHRcdC8vIGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdC8vIFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0Ly8gXHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdC8vIFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2tlZC9yZWR1Y2Vycy9pbWFnZS5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xuXG5pbXBvcnQge3Jlc2l6ZVdpbmRvd30gZnJvbSAnLi4vYWN0aW9ucy9yZXNpemVXaW5kb3cnXG5pbXBvcnQge3VwZGF0ZVRpbWUsIHJlc2V0VGltZX0gZnJvbSAnLi4vYWN0aW9ucy90aW1lJ1xuaW1wb3J0IHtjbGlja01lc2h9IGZyb20gJy4uL2FjdGlvbnMvY2xpY2tNZXNoJ1xuaW1wb3J0IHttb3ZlTW91c2V9IGZyb20gJy4uL2FjdGlvbnMvbW92ZU1vdXNlJ1xuaW1wb3J0IHtsb2FkaW5nLCBsb2FkZWR9IGZyb20gJy4uL2FjdGlvbnMvbG9hZCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cdHJldHVybiB7XG5cdFx0bG9hZGluZzogc3RhdGUubG9hZC5sb2FkaW5nLFxuXHRcdHdpZHRoOiBjb250ZW50LmNsaWVudFdpZHRoLFxuXHRcdGhlaWdodDogY29udGVudC5jbGllbnRIZWlnaHQsXG5cdFx0d2luZG93V2lkdGg6IHN0YXRlLndpbmRvd1NpemUueCxcblx0XHR3aW5kb3dIZWlnaHQ6IHN0YXRlLndpbmRvd1NpemUueSxcblx0XHRjYW1lcmFQb3NpdGlvbjogc3RhdGUuY2FtZXJhLnBvc2l0aW9uLFxuXHRcdGVsYXBzZWQ6IHN0YXRlLnRpbWUuZWxhcHNlZCxcblx0XHRkdXJhdGlvbjogc3RhdGUudGltZS5kdXJhdGlvbixcblx0XHRwb2ludGVyUG9zaXRpb246IHN0YXRlLnBvaW50ZXIucG9zaXRpb24sXG5cdFx0Ly8gbW91c2U6IHN0YXRlLm1vdXNlLnRhcmdldCxcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRvbkxvYWRpbmc6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRpbmcoKSlcblx0XHR9LFxuXHRcdG9uTG9hZGVkOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbG9hZGVkLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRlZCgpKVxuXHRcdH0sXG5cdFx0b25SZXNpemU6IChlKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNpemVXaW5kb3coZSkpXG5cdFx0fSxcblx0XHRvblVwZGF0ZVRpbWU6ICgpID0+IHtcblx0XHRcdGRpc3BhdGNoKHVwZGF0ZVRpbWUoKSlcblx0XHR9LFxuXHRcdG9uUmVzZXRUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNldFRpbWUoKSlcblx0XHR9LFxuXHRcdG9uQ2xpY2tNZXNoOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2goY2xpY2tNZXNoKGUpKVxuXHRcdH0sXG5cdFx0Ly8gb25Nb3ZlTW91c2U6IChlKSA9PiB7XG5cdFx0Ly8gXHRkaXNwYXRjaChtb3ZlTW91c2UoZSkpXG5cdFx0Ly8gfSxcblx0fVxufVxuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEltYWdlKVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2VkL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJ1xuXG5pbXBvcnQgTW91c2VJbnB1dCBmcm9tICcuLi9saWIvTW91c2VJbnB1dCdcblxuaW1wb3J0IHZzIGZyb20gJy4uL2dsc2wvaW1hZ2UudmVydCdcbmltcG9ydCBmcyBmcm9tICcuLi9nbHNsL2ltYWdlLmZyYWcnXG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5vbkxvYWRpbmcgPSA6OnRoaXMucHJvcHMub25Mb2FkaW5nXG5cdFx0dGhpcy5vbkxvYWRlZCA9IDo6dGhpcy5wcm9wcy5vbkxvYWRlZFxuXHRcdHRoaXMub25SZXNpemUgPSA6OnRoaXMucHJvcHMub25SZXNpemVcblx0XHR0aGlzLm9uVXBkYXRlVGltZSA9IDo6dGhpcy5wcm9wcy5vblVwZGF0ZVRpbWVcblx0XHQvLyB0aGlzLm9uTW92ZU1vdXNlID0gOjp0aGlzLnByb3BzLm9uTW92ZU1vdXNlXG5cdFx0dGhpcy5vblJlc2V0VGltZSA9IDo6dGhpcy5wcm9wcy5vblJlc2V0VGltZVxuXHRcdHRoaXMub25DbGlja01lc2ggPSA6OnRoaXMucHJvcHMub25DbGlja01lc2hcblxuXHRcdHRoaXMudGV4dHVyZXMgPSB7XG5cdFx0XHRcIm1haW5cIjoge1xuXHRcdFx0XHR1cmw6IFwiLi4vYXNzZXRzL2ltZy9yaXBwbGUvY2F0Mi5qcGdcIlxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qIExpZmVDeWNsZSAqL1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdFx0XHQvLyB0aGlzLmhhbmRsZU1vdXNlTW92ZSgpXG5cdFx0XHRcdHRoaXMuc2V0TW91c2VJbnB1dCgpXG5cdFx0XHRcdHRoaXMuaGFuZGxlUmVzaXplKClcblxuXHRcdFx0fSwgMzAwKVxuXHRcdH0pXG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUobmV3UHJvcHMpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRtb3VzZUlucHV0LFxuXHRcdH0gPSB0aGlzLnJlZnM7XG5cblx0XHRjb25zdCB7XG5cdFx0XHR3aW5kb3dXaWR0aCxcblx0XHRcdHdpbmRvd0hlaWdodCxcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmICh3aW5kb3dXaWR0aCAhPT0gbmV3UHJvcHMud2luZG93V2lkdGggfHwgd2luZG93SGVpZ2h0ICE9PSBuZXdQcm9wcy53aW5kb3dIZWlnaHQpIHtcblx0XHRcdG1vdXNlSW5wdXQuY29udGFpbmVyUmVzaXplZCgpO1xuXHRcdH1cblx0fVxuXG5cblx0LyogY3VzdG9tIEZ1bmN0aW9uICAqL1xuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhpcy5vbkxvYWRpbmcoKVxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmxvYWRUZXh0dXJlKClcblx0XHRcdHJlc29sdmUoKVxuXHRcdH0pO1xuXHR9XG5cblx0c2V0TW91c2VJbnB1dCgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRtb3VzZUlucHV0LFxuXHRcdFx0Y29udGFpbmVyXG5cdFx0fSA9IHRoaXMucmVmcztcblxuXHRcdGlmICghbW91c2VJbnB1dC5pc1JlYWR5KCkpIHtcblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0c2NlbmUsXG5cdFx0XHRcdGNhbWVyYSxcblx0XHRcdH0gPSB0aGlzLnJlZnM7XG5cblx0XHRcdG1vdXNlSW5wdXQucmVhZHkoc2NlbmUsIGNvbnRhaW5lciwgY2FtZXJhKTtcblx0XHRcdC8vIG1vdXNlSW5wdXQucmVzdHJpY3RJbnRlcnNlY3Rpb25zKGltYWdlTWVzaCk7XG5cdFx0XHRtb3VzZUlucHV0LnNldEFjdGl2ZShmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlUmVzaXplKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSlcblx0fVxuXG5cdC8vIGhhbmRsZU1vdXNlTW92ZSgpIHtcblx0Ly8gXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdmVNb3VzZSwgZmFsc2UpXG5cdC8vIFx0fVxuXG5cdGhhbmRsZUNsaWNrKGUpIHtcblx0XHR0aGlzLm9uUmVzZXRUaW1lKClcblx0XHR0aGlzLm9uQ2xpY2tNZXNoKGUpXG5cdH1cblxuXHRoYW5kbGVBbmltYXRlKCkge1xuXHRcdHRoaXMub25VcGRhdGVUaW1lKClcblx0fVxuXG5cdGxvYWRUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKClcblx0XHRsb2FkZXIuY3Jvc3NPcmlnaW4gPSAnKidcblx0XHRmb3IgKGxldCBuYW1lIGluIHRoaXMudGV4dHVyZXMpIHtcblx0XHRcdGxvYWRlci5sb2FkKHRoaXMudGV4dHVyZXNbbmFtZV0udXJsLCAodGV4dHVyZSkgPT4ge1xuIFx0XHRcdHRoaXMudGV4dHVyZXNbbmFtZV0udGV4dHVyZSA9IHRleHR1cmVcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtsb2FkaW5nLCB3aWR0aCwgaGVpZ2h0LCBjYW1lcmFQb3NpdGlvbiwgZWxhcHNlZCwgZHVyYXRpb24sIHBvaW50ZXJQb3NpdGlvbn0gPSB0aGlzLnByb3BzXG5cblx0XHRpZiAobG9hZGluZykgcmV0dXJuKDxoMj5Mb2FkaW5nLi4uPC9oMj4pXG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IHJlZj1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8UmVhY3QzXG5cdFx0XHRcdFx0bWFpbkNhbWVyYT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0XHRcdGhlaWdodD17aGVpZ2h0fVxuXHRcdFx0XHRcdG9uQW5pbWF0ZT17Ojp0aGlzLmhhbmRsZUFuaW1hdGV9XG5cdFx0XHRcdFx0Y2xlYXJDb2xvcj17MHgwMDAwMDB9XG5cdFx0XHRcdFx0YW50aWFsaWFzPXt0cnVlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG1vZHVsZVxuXHRcdFx0XHRcdFx0cmVmPVwibW91c2VJbnB1dFwiXG5cdFx0XHRcdFx0XHRkZXNjcmlwdG9yPXtNb3VzZUlucHV0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PHNjZW5lXG5cdFx0XHRcdFx0XHRyZWY9XCJzY2VuZVwiXG5cdFx0XHRcdFx0XHQvLyBmb2c9e25ldyBUSFJFRS5Gb2coMHgyMjIyMjIsIDAuNiwgMi44KX1cblx0XHRcdFx0XHQ+XG5cblx0XHRcdFx0XHRcdHsvKiBIZWxwZXIgKi99XG5cdFx0XHRcdFx0XHR7LyogPGF4aXNIZWxwZXIgLz4gKi99XG5cblx0XHRcdFx0XHRcdHsvKiBDYW1lcmEgKi99XG5cdFx0XHRcdFx0XHQ8cGVyc3BlY3RpdmVDYW1lcmFcblx0XHRcdFx0XHRcdFx0cmVmPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImNhbWVyYVwiXG5cdFx0XHRcdFx0XHRcdGZvdj17MTV9XG5cdFx0XHRcdFx0XHRcdGFzcGVjdD17d2lkdGggLyBoZWlnaHR9XG5cdFx0XHRcdFx0XHRcdG5lYXI9ezAuMDF9XG5cdFx0XHRcdFx0XHRcdGZhcj17MTAwMH1cblx0XHRcdFx0XHRcdFx0cG9zaXRpb249e2NhbWVyYVBvc2l0aW9ufVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIExpZ2h0ICovfVxuXHRcdFx0XHRcdFx0PGhlbWlzcGhlcmVMaWdodFxuXHRcdFx0XHRcdFx0XHRza3lDb2xvcj17MHhmZmZmYmJ9XG5cdFx0XHRcdFx0XHRcdGdyb3VuZENvbG9yPXsweDg4Nzk3OX1cblx0XHRcdFx0XHRcdFx0aW50ZW5zaXR5PXswLjl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpcmVjdGlvbmFsTGlnaHRcblx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZmZmZmZmfVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdHsvKiBoZWxwZXIgTWVzaCovfVxuXHRcdFx0XHRcdFx0ey8qIDxtZXNoPlxuXHRcdFx0XHRcdFx0XHRcdDxib3hHZW9tZXRyeVxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxfVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17MX1cblx0XHRcdFx0XHRcdFx0XHRkZXB0aD17MX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PG1lc2hCYXNpY01hdGVyaWFsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I9ezB4ZWVlZWVlfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9tZXNoPiAqL31cblxuXHRcdFx0XHRcdFx0ey8qIEltYWdlIE1lc2ggKi99XG5cdFx0XHRcdFx0XHQ8bWVzaFxuXHRcdFx0XHRcdFx0XHRyZWY9J2ltYWdlTWVzaCdcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxwbGFuZUdlb21ldHJ5XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8c2hhZGVyTWF0ZXJpYWxcblx0XHRcdFx0XHRcdFx0XHR2ZXJ0ZXhTaGFkZXI9e3ZzfVxuXHRcdFx0XHRcdFx0XHRcdGZyYWdtZW50U2hhZGVyPXtmc31cblx0XHRcdFx0XHRcdFx0XHRibGVuZGluZz17VEhSRUUuTm9ybWFsQmxlbmRpbmd9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybXM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsndGV4dHVyZSd9IHR5cGU9eyd0J30gdmFsdWU9e3RoaXMudGV4dHVyZXNbJ21haW4nXS50ZXh0dXJlfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J3RpbWUnfSB0eXBlPXsnZid9IHZhbHVlPXtlbGFwc2VkfSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J2R1cmF0aW9uJ30gdHlwZT17J2YnfSB2YWx1ZT17ZHVyYXRpb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnbW91c2UnfSB0eXBlPXsndmVjMid9IHZhbHVlPXtwb2ludGVyUG9zaXRpb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC91bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0PC9zaGFkZXJNYXRlcmlhbD5cblxuXHRcdFx0XHRcdFx0PC9tZXNoPlxuXG5cdFx0XHRcdFx0PC9zY2VuZT5cblx0XHRcdFx0PC9SZWFjdDM+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2tlZC9jb21wb25lbnRzL0ltYWdlLmpzIiwiaW1wb3J0IFJlYWN0MyBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgUmVhY3RVcGRhdGVzIGZyb20gJ3JlYWN0LWRvbS9saWIvUmVhY3RVcGRhdGVzJztcblxuaW1wb3J0IFN5bnRoZXRpY01vdXNlRXZlbnQgZnJvbSAncmVhY3QtZG9tL2xpYi9TeW50aGV0aWNNb3VzZUV2ZW50JztcblxuaW1wb3J0IE1vZHVsZSBmcm9tICdyZWFjdC10aHJlZS1yZW5kZXJlci9saWIvTW9kdWxlJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdyZWFjdC9saWIvUmVhY3RQcm9wVHlwZXMnO1xuXG5jb25zdCB0ZW1wVmVjdG9yMiA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbmNvbnN0IGxpc3RlbmVyQ2FsbGJhY2tOYW1lcyA9IHtcbiAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbn07XG5cbmNvbnN0IG1vdXNlRXZlbnRzID0gW1xuICAnb25Nb3VzZUVudGVyJyxcbiAgJ29uTW91c2VMZWF2ZScsXG4gICdvbk1vdXNlRG93bicsXG4gICdvbk1vdXNlVXAnLFxuICAnb25DbGljaycsXG5dO1xuXG5jb25zdCBib29sUHJvcHMgPSB7XG4gIGlnbm9yZVBvaW50ZXJFdmVudHM6IGZhbHNlLFxufTtcblxuY2xhc3MgTW91c2VJbnB1dCBleHRlbmRzIE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pc1JlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QgPSBudWxsO1xuXG4gICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzID0gW107XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIHNldHVwKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UpIHtcbiAgICBzdXBlci5zZXR1cChyZWFjdDNSZW5kZXJlckluc3RhbmNlKTtcblxuICAgIGNvbnN0IE9iamVjdDNERGVzY3JpcHRvciA9IHJlYWN0M1JlbmRlcmVySW5zdGFuY2UudGhyZWVFbGVtZW50RGVzY3JpcHRvcnMub2JqZWN0M0QuY29uc3RydWN0b3I7XG5cbiAgICBPYmplY3QudmFsdWVzKHJlYWN0M1JlbmRlcmVySW5zdGFuY2UudGhyZWVFbGVtZW50RGVzY3JpcHRvcnMpLmZvckVhY2goZWxlbWVudERlc2NyaXB0b3IgPT4ge1xuICAgICAgaWYgKGVsZW1lbnREZXNjcmlwdG9yIGluc3RhbmNlb2YgT2JqZWN0M0REZXNjcmlwdG9yKSB7XG4gICAgICAgIG1vdXNlRXZlbnRzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5oYXNFdmVudChldmVudE5hbWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhib29sUHJvcHMpLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICAgIGVsZW1lbnREZXNjcmlwdG9yLmhhc1Byb3AocHJvcE5hbWUsIHtcbiAgICAgICAgICAgIHR5cGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICAgICAgdXBkYXRlKHRocmVlT2JqZWN0LCB2YWx1ZSwgaGFzUHJvcCkge1xuICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRocmVlT2JqZWN0LnVzZXJEYXRhW3Byb3BOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocmVlT2JqZWN0LnVzZXJEYXRhW3Byb3BOYW1lXSA9IGJvb2xQcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0OiBib29sUHJvcHNbcHJvcE5hbWVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMucHVzaChlbGVtZW50RGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc1JlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLl9pc1JlYWR5O1xuICB9XG5cbiAgc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHJlc3RyaWN0SW50ZXJzZWN0aW9ucyhvYmplY3RzLCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucyA9IHRydWU7XG4gICAgdGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0ID0gb2JqZWN0cztcblxuICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUgPSByZWN1cnNpdmU7XG4gIH1cblxuICByZWFkeShzY2VuZSwgY29udGFpbmVyLCBjYW1lcmEpIHtcbiAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuX2NhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMuX3JheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcbiAgICB0aGlzLl9tb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICB0aGlzLl9vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fbW91c2Uuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVFbnRlckxlYXZlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX2NvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLl9ob3Zlck9iamVjdE1hcCA9IHt9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUsIGZhbHNlKTtcblxuICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG5cbiAgICB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhsaXN0ZW5lckNhbGxiYWNrTmFtZXMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIGxldCBib3VuZExpc3RlbmVyO1xuXG4gICAgICBjb25zdCBsaXN0ZW5lckNhbGxiYWNrTmFtZSA9IGxpc3RlbmVyQ2FsbGJhY2tOYW1lc1tldmVudE5hbWVdO1xuICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgY2FzZSAnbW91c2Vkb3duJzpcbiAgICAgICAgICBib3VuZExpc3RlbmVyID0gdGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzLCBsaXN0ZW5lckNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgIGJvdW5kTGlzdGVuZXIgPSB0aGlzLl9vbk1vdXNlVXAuYmluZCh0aGlzLCBsaXN0ZW5lckNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChib3VuZExpc3RlbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgYm91bmRMaXN0ZW5lciwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGJvdW5kTGlzdGVuZXIsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9vbk1vdXNlRG93biA9IChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpID0+IHtcbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudCxcbiAgICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICAgIH0gPSB0aGlzLl9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpO1xuXG4gICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gaW50ZXJzZWN0aW9ucztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfb25Nb3VzZVVwID0gKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkgPT4ge1xuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpbnRlcnNlY3Rpb25zLFxuICAgICAgfSA9IHRoaXMuX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCk7XG5cbiAgICAgIGlmICghKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbnRlcnNlY3QgY3VycmVudCBpbnRlcnNlY3Rpb25zIHdpdGggdGhlIGludGVyc2VjdGlvbnMgZm9yIGNsaWNrXG4gICAgICAgIC8vICAgY2FsbCB4emliaXQgQVNBUCB3ZSBoYXZlIGEgZ29vZCBvbmUgc29uXG4gICAgICAgIC8vICAgICBpdCB3YXNuJ3QgdGhhdCBnb29kXG5cbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uVVVJRE1hcCA9IHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljay5yZWR1Y2UoKG1hcCwgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgbWFwW2ludGVyc2VjdGlvbi5vYmplY3QudXVpZF0gPSBpbnRlcnNlY3Rpb247XG5cbiAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2ldO1xuXG4gICAgICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgICAgIGNvbnN0IHV1aWQgPSBvYmplY3QudXVpZDtcblxuICAgICAgICAgIGlmIChpbnRlcnNlY3Rpb25VVUlETWFwW3V1aWRdKSB7XG4gICAgICAgICAgICAvLyBvaCBib3kgb2ggYm95IGhlcmUgd2UgZ28sIHdlIGdvdCBhIGNsaWNrZXJcblxuICAgICAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlclxuICAgICAgICAgICAgICAuZGlzcGF0Y2hFdmVudChvYmplY3QsICdvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdjbGljaycsIGV2ZW50KSwgaW50ZXJzZWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IG51bGw7XG4gIH07XG5cbiAgX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoZXZlbnRUeXBlLCBwcm90b3R5cGUpIHtcbiAgICByZXR1cm4gU3ludGhldGljTW91c2VFdmVudC5nZXRQb29sZWQobnVsbCwgbnVsbCxcbiAgICAgIG5ldyBNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcHJvdG90eXBlKSwgcHJvdG90eXBlLnRhcmdldCk7XG4gIH1cblxuICBfaW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBTeW50aGV0aWNNb3VzZUV2ZW50LmdldFBvb2xlZChudWxsLCBudWxsLCBtb3VzZUV2ZW50LCBtb3VzZUV2ZW50LnRhcmdldCk7XG5cbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fZ2V0SW50ZXJzZWN0aW9ucyh0ZW1wVmVjdG9yMi5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSkpO1xuXG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2ldO1xuXG4gICAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJzZWN0aW9uLm9iamVjdDtcblxuICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQob2JqZWN0LCBjYWxsYmFja05hbWUsIGV2ZW50LCBpbnRlcnNlY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV2ZW50LFxuICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgX2dldEludGVyc2VjdGlvbnMobW91c2VDb29yZHMpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgaWYgKHRoaXMuX3Jlc3RyaWN0SW50ZXJzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCxcbiAgICAgICAgdGhpcy5fcmVzdHJpY3RlZEludGVyc2VjdGlvblJlY3Vyc2l2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3QodGhpcy5fc2NlbmUsIHRydWUpO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IyfSBtb3VzZUNvb3JkcyB1c3VhbGx5IGFuIGV2ZW50J3MgY2xpZW50WCBhbmQgY2xpZW50WVxuICAgKiBAcmV0dXJucyB7VEhSRUUuUmF5fVxuICAgKi9cbiAgZ2V0Q2FtZXJhUmF5KG1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxSYXkgPSB0aGlzLl9yYXljYXN0ZXIucmF5LmNsb25lKCk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShyZWxhdGl2ZU1vdXNlQ29vcmRzLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgY29uc3QgcmVzdWx0UmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnJheS5jb3B5KG9yaWdpbmFsUmF5KTtcblxuICAgIHJldHVybiByZXN1bHRSYXk7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIGludGVyc2VjdE9iamVjdChtb3VzZUNvb3Jkcywgb2JqZWN0LCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KG9iamVjdCwgcmVjdXJzaXZlKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5yYXkuY29weShvcmlnaW5hbFJheSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuXG4gIGNvbnRhaW5lclJlc2l6ZWQoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzUmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl91cGRhdGVFbnRlckxlYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUVudGVyTGVhdmUoKSB7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX2dldEludGVyc2VjdGlvbnModGhpcy5fbW91c2UpO1xuXG4gICAgY29uc3QgaG92ZXJNYXBUb1VwZGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuX2hvdmVyT2JqZWN0TWFwLFxuICAgIH07XG5cbiAgICBjb25zdCBtb3VzZUVudGVyRXZlbnQgPSB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdtb3VzZUVudGVyJywge1xuICAgICAgdGFyZ2V0OiB0aGlzLl9jb250YWluZXIsXG4gICAgICBjbGllbnRYOiB0aGlzLl9tb3VzZS54LFxuICAgICAgY2xpZW50WTogdGhpcy5fbW91c2UueSxcbiAgICB9KTtcblxuICAgIC8vIGZpbmQgZmlyc3QgaW50ZXJzZWN0aW9uIHRoYXQgZG9lcyBub3QgaWdub3JlIHBvaW50ZXIgZXZlbnRzXG4gICAgZm9yIChsZXQgZGVwdGggPSAwOyBkZXB0aCA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2RlcHRoKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb25zW2RlcHRoXTtcbiAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgIGlmIChvYmplY3QudXNlckRhdGEgJiYgb2JqZWN0LnVzZXJEYXRhLmlnbm9yZVBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHV1aWQgPSBvYmplY3QudXVpZDtcblxuICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdKSB7XG4gICAgICAgIGRlbGV0ZSBob3Zlck1hcFRvVXBkYXRlW3V1aWRdO1xuXG4gICAgICAgIC8vIGp1c3QgdXBkYXRlIHRoYXQgaW50ZXJzZWN0aW9uXG4gICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdLmludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdID0ge1xuICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICBpbnRlcnNlY3Rpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCEobW91c2VFbnRlckV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IG1vdXNlRW50ZXJFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChvYmplY3QsICdvbk1vdXNlRW50ZXInLFxuICAgICAgICAgICAgbW91c2VFbnRlckV2ZW50LCBpbnRlcnNlY3Rpb24sIGRlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBoYXZlIGZvdW5kIHRoZSBmaXJzdCBzb2xpZCBpbnRlcnNlY3Rpb24sIGRvbid0IGdvIGZ1cnRoZXJcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdXNlTGVhdmVFdmVudCA9IHRoaXMuX2NyZWF0ZVN5bnRoZXRpY01vdXNlRXZlbnQoJ21vdXNlTGVhdmUnLCB7XG4gICAgICB0YXJnZXQ6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIGNsaWVudFg6IHRoaXMuX21vdXNlLngsXG4gICAgICBjbGllbnRZOiB0aGlzLl9tb3VzZS55LFxuICAgIH0pO1xuXG4gICAgLy8gZGVsZXRlIGFsbCB1bnNlZW4gdXVpZHMgaW4gaG92ZXIgbWFwXG4gICAgY29uc3QgdW5zZWVuVVVJRHMgPSBPYmplY3Qua2V5cyhob3Zlck1hcFRvVXBkYXRlKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5zZWVuVVVJRHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGNvbnN0IHV1aWQgPSB1bnNlZW5VVUlEc1tpXTtcblxuICAgICAgaWYgKCEobW91c2VMZWF2ZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IG1vdXNlTGVhdmVFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQodGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF0ub2JqZWN0LFxuICAgICAgICAgICdvbk1vdXNlTGVhdmUnLCBtb3VzZUxlYXZlRXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5faG92ZXJPYmplY3RNYXBbdXVpZF07XG4gICAgfVxuICB9XG5cbiAgX2dldFJlbGF0aXZlTW91c2VDb29yZHMoc2NyZWVuTW91c2VDb29yZHMpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyUmVjdDtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSBzY3JlZW5Nb3VzZUNvb3Jkcy5jbG9uZSgpXG4gICAgICAuc3ViKHRlbXBWZWN0b3IyLnNldChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKSlcbiAgICAgIC5kaXZpZGUodGVtcFZlY3RvcjIuc2V0KGNvbnRhaW5lclJlY3Qud2lkdGgsIGNvbnRhaW5lclJlY3QuaGVpZ2h0KSk7XG5cbiAgICAvLyBtb3VzZS54ID0gKCBldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGggKSAqIDIgLSAxO1xuICAgIC8vIG1vdXNlLnkgPSAtICggZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCApICogMiArIDE7XG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRzLnggPSByZWxhdGl2ZU1vdXNlQ29vcmRzLnggKiAyIC0gMTtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRzLnkgPSAtcmVsYXRpdmVNb3VzZUNvb3Jkcy55ICogMiArIDE7XG5cbiAgICByZXR1cm4gcmVsYXRpdmVNb3VzZUNvb3JkcztcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgZGlzcG9zZSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSwgZmFsc2UpO1xuXG4gICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucy5mb3JFYWNoKGNsZWFudXBGdW5jdGlvbiA9PiBjbGVhbnVwRnVuY3Rpb24oKSk7XG4gICAgZGVsZXRlIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnM7XG5cbiAgICBkZWxldGUgdGhpcy5fb25Nb3VzZU1vdmU7XG5cbiAgICB0aGlzLl9wYXRjaGVkRGVzY3JpcHRvcnMuZm9yRWFjaChlbGVtZW50RGVzY3JpcHRvciA9PiB7XG4gICAgICBjb25zdCBhbGxQcm9wcyA9IE9iamVjdC5rZXlzKGJvb2xQcm9wcylcbiAgICAgICAgLmNvbmNhdChtb3VzZUV2ZW50cyk7XG5cbiAgICAgIGFsbFByb3BzLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5yZW1vdmVQcm9wKHByb3BOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdXNlSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrZWQvbGliL01vdXNlSW5wdXQuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDUzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDUzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC52YWx1ZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDUzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNTM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1Mzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDU0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3JpcHBsZS1jbGlja2VkL2dsc2wvaW1hZ2UudmVydFxuLy8gbW9kdWxlIGlkID0gNTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcbnVuaWZvcm0gZmxvYXQgZHVyYXRpb247XFxudW5pZm9ybSB2ZWMyIG1vdXNlO1xcblxcbnZvaWQgbWFpbigpIHtcXG5cXHR2ZWMyIHV2ID0gdlV2O1xcblxcdHZlYzIgdGV4Q29vcmQgPSB1djtcXG5cXHR2ZWMyIGRlcGFydHVyZSA9IG1vdXNlO1xcblxcdGZsb2F0IGFtcGxpdHVkZSA9IDAuNztcXG5cXHRmbG9hdCB3YXZlTGVuZ3RoT2Zmc2V0ID0gMC4xO1xcblxcdGZsb2F0IHNwZWVkID0gMC44O1xcblxcdGZsb2F0IGVsYXBzZWQgPSBtb2QodGltZSAqIHNwZWVkLCBkdXJhdGlvbik7XFxuXFx0Ly8gZmxvYXQgZWxhcHNlZCA9IHRpbWU7XFxuXFxuXFx0ZmxvYXQgZGlzdCA9IGRpc3RhbmNlKHV2LCBkZXBhcnR1cmUpO1xcblxcblxcdGlmICggKGRpc3QgPD0gKGVsYXBzZWQgKyB3YXZlTGVuZ3RoT2Zmc2V0KSkgJiYgKGRpc3QgPj0gKGVsYXBzZWQgLSB3YXZlTGVuZ3RoT2Zmc2V0KSkgKSB7XFxuXFx0XFx0ZmxvYXQgZGlmZiA9IChlbGFwc2VkIC0gZGlzdCk7XFxuXFx0XFx0ZmxvYXQgcG93RGlmZiA9IDEuMCAtIHBvdygoZGlmZioxMC4wKSwgYW1wbGl0dWRlKTtcXG5cXG5cXHRcXHRmbG9hdCBkaWZmVGltZSA9IGRpZmYgKiBwb3dEaWZmO1xcblxcdFxcdHRleENvb3JkID0gdXYgKyAodXYgKiBkaWZmVGltZSk7XFxuXFx0fVxcblxcblxcdHZlYzQgY29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdGV4Q29vcmQpO1xcblxcblxcdGdsX0ZyYWdDb2xvciA9IGNvbG9yO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3JpcHBsZS1jbGlja2VkL2dsc2wvaW1hZ2UuZnJhZ1xuLy8gbW9kdWxlIGlkID0gNTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCByZXNpemVXaW5kb3cgPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlJFU0laRV9XSU5ET1csXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2VkL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuVVBEQVRFX1RJTUUsXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0VGltZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNFVF9USU1FLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrZWQvYWN0aW9ucy90aW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IGNsaWNrTWVzaCA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuQ0xJQ0tfTUVTSCxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrZWQvYWN0aW9ucy9jbGlja01lc2guanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgbW92ZU1vdXNlID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5NT1ZFX01PVVNFLFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2tlZC9hY3Rpb25zL21vdmVNb3VzZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURJTkdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVkID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURFRFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrZWQvYWN0aW9ucy9sb2FkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==