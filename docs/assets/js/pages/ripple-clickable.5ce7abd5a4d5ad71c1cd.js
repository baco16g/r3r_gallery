webpackJsonp([1],{

/***/ 34:
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

/***/ 569:
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

var _reducers = __webpack_require__(570);

var _reducers2 = _interopRequireDefault(_reducers);

var _ImageContainer = __webpack_require__(577);

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

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(25);

var _load = __webpack_require__(571);

var _load2 = _interopRequireDefault(_load);

var _windowSize = __webpack_require__(572);

var _windowSize2 = _interopRequireDefault(_windowSize);

var _camera = __webpack_require__(573);

var _camera2 = _interopRequireDefault(_camera);

var _time = __webpack_require__(574);

var _time2 = _interopRequireDefault(_time);

var _pointer = __webpack_require__(575);

var _pointer2 = _interopRequireDefault(_pointer);

var _image = __webpack_require__(576);

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

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(34);

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

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(34);

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

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(34);

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

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(34);

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

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(34);

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

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(34);

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

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(30);

var _Image = __webpack_require__(578);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(582);

var _time = __webpack_require__(583);

var _clickMesh = __webpack_require__(584);

var _moveMouse = __webpack_require__(585);

var _load = __webpack_require__(586);

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

/***/ 578:
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

var _MouseInput = __webpack_require__(579);

var _MouseInput2 = _interopRequireDefault(_MouseInput);

var _image = __webpack_require__(580);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(581);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 579:
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

/***/ 580:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nuniform sampler2D texture;\nuniform float time;\nuniform float duration;\nuniform vec2 mouse;\n\nvoid main() {\n\tvec2 uv = vUv;\n\tvec2 texCoord = uv;\n\tvec2 departure = mouse;\n\tfloat amplitude = 0.7;\n\tfloat waveLengthOffset = 0.1;\n\tfloat speed = 0.8;\n\tfloat elapsed = mod(time * speed, duration);\n\t// float elapsed = time;\n\n\tfloat dist = distance(uv, departure);\n\n\tif ( (dist <= (elapsed + waveLengthOffset)) && (dist >= (elapsed - waveLengthOffset)) ) {\n\t\tfloat diff = abs(elapsed - dist);\n\t\tfloat powDiff = 1.0 - pow((diff*10.0), amplitude);\n\n\t\tfloat diffTime = diff * powDiff;\n\t\ttexCoord = uv + (uv * diffTime);\n\t}\n\n\tvec4 color = texture2D(texture, texCoord);\n\n\tgl_FragColor = color;\n}\n"

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(34);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resetTime = exports.updateTime = undefined;

var _actiontypes = __webpack_require__(34);

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

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clickMesh = undefined;

var _actiontypes = __webpack_require__(34);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clickMesh = exports.clickMesh = function clickMesh(e) {
	return {
		type: _actiontypes2.default.CLICK_MESH,
		e: e
	};
};

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(34);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(34);

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

},[569]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9jb25zdGFudHMvYWN0aW9udHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvcmVkdWNlcnMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy93aW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy90aW1lLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvcmVkdWNlcnMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9jb21wb25lbnRzL0ltYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2xpYi9Nb3VzZUlucHV0LmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2dsc2wvaW1hZ2UudmVydCIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9nbHNsL2ltYWdlLmZyYWciLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS1jbGlja2FibGUvYWN0aW9ucy90aW1lLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2FjdGlvbnMvY2xpY2tNZXNoLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2FjdGlvbnMvbW92ZU1vdXNlLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUtY2xpY2thYmxlL2FjdGlvbnMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiXSwibmFtZXMiOlsiVHlwZXMiLCJSRVNJWkVfV0lORE9XIiwiTU9WRV9NT1VTRSIsIlVQREFURV9DQU1FUkFfUE9TSVRJT04iLCJMT0FESU5HIiwiTE9BREVEIiwiVVBEQVRFX1RJTUUiLCJSRVNFVF9USU1FIiwiQ0xJQ0tfTUVTSCIsInN0b3JlIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWQiLCJ3aW5kb3dTaXplIiwiY2FtZXJhIiwidGltZSIsInBvaW50ZXIiLCJpbWFnZSIsInN0YXRlIiwibG9hZGluZyIsImFjdGlvbiIsInR5cGUiLCJUSFJFRSIsIlZlY3RvcjIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsIlZlY3RvcjMiLCJlbGFwc2VkIiwiZHVyYXRpb24iLCJyZWN0IiwiZSIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRZIiwidG9wIiwibWFwU3RhdGVUb1Byb3BzIiwiY29udGVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ4Iiwid2luZG93SGVpZ2h0IiwieSIsImNhbWVyYVBvc2l0aW9uIiwicG9pbnRlclBvc2l0aW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwib25Mb2FkZWQiLCJvblJlc2l6ZSIsIm9uVXBkYXRlVGltZSIsIm9uUmVzZXRUaW1lIiwib25DbGlja01lc2giLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwicHJvcHMiLCJ0ZXh0dXJlcyIsInVybCIsImluaXRpYWxpemUiLCJ0aGVuIiwic2V0VGltZW91dCIsInNldE1vdXNlSW5wdXQiLCJoYW5kbGVSZXNpemUiLCJuZXdQcm9wcyIsIm1vdXNlSW5wdXQiLCJyZWZzIiwiY29udGFpbmVyUmVzaXplZCIsInJlc29sdmUiLCJyZWplY3QiLCJsb2FkVGV4dHVyZSIsImNvbnRhaW5lciIsImlzUmVhZHkiLCJzY2VuZSIsInJlYWR5Iiwic2V0QWN0aXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJjcm9zc09yaWdpbiIsIm5hbWUiLCJ0ZXh0dXJlIiwiaGFuZGxlQW5pbWF0ZSIsImhhbmRsZUNsaWNrIiwiTm9ybWFsQmxlbmRpbmciLCJDb21wb25lbnQiLCJ0ZW1wVmVjdG9yMiIsImxpc3RlbmVyQ2FsbGJhY2tOYW1lcyIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZUV2ZW50cyIsImJvb2xQcm9wcyIsImlnbm9yZVBvaW50ZXJFdmVudHMiLCJNb3VzZUlucHV0IiwiX29uTW91c2VEb3duIiwiY2FsbGJhY2tOYW1lIiwibW91c2VFdmVudCIsImJhdGNoZWRVcGRhdGVzIiwiX2ludGVyc2VjdEFuZERpc3BhdGNoIiwiZXZlbnQiLCJpbnRlcnNlY3Rpb25zIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJfaW50ZXJzZWN0aW9uc0ZvckNsaWNrIiwiX29uTW91c2VVcCIsImludGVyc2VjdGlvblVVSURNYXAiLCJyZWR1Y2UiLCJtYXAiLCJpbnRlcnNlY3Rpb24iLCJvYmplY3QiLCJ1dWlkIiwiaSIsImxlbmd0aCIsImV2ZW50RGlzcGF0Y2hlciIsImRpc3BhdGNoRXZlbnQiLCJfY3JlYXRlU3ludGhldGljTW91c2VFdmVudCIsIl9pc1JlYWR5IiwiX2FjdGl2ZSIsIl9yZXN0cmljdEludGVyc2VjdGlvbnMiLCJfb2JqZWN0c1RvSW50ZXJzZWN0IiwiX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUiLCJfcGF0Y2hlZERlc2NyaXB0b3JzIiwicmVhY3QzUmVuZGVyZXJJbnN0YW5jZSIsIk9iamVjdDNERGVzY3JpcHRvciIsInRocmVlRWxlbWVudERlc2NyaXB0b3JzIiwib2JqZWN0M0QiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJlbGVtZW50RGVzY3JpcHRvciIsImhhc0V2ZW50IiwiZXZlbnROYW1lIiwiaGFzUHJvcCIsInByb3BOYW1lIiwiYm9vbCIsInVwZGF0ZSIsInRocmVlT2JqZWN0IiwidmFsdWUiLCJ1c2VyRGF0YSIsImRlZmF1bHQiLCJwdXNoIiwiYWN0aXZlIiwib2JqZWN0cyIsInJlY3Vyc2l2ZSIsIl9zY2VuZSIsIl9jb250YWluZXIiLCJfY2FtZXJhIiwiX3JheWNhc3RlciIsIlJheWNhc3RlciIsIl9tb3VzZSIsIl9vbk1vdXNlTW92ZSIsInNldCIsIl91cGRhdGVFbnRlckxlYXZlIiwiX2NvbnRhaW5lclJlY3QiLCJfaG92ZXJPYmplY3RNYXAiLCJfY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucyIsImJvdW5kTGlzdGVuZXIiLCJsaXN0ZW5lckNhbGxiYWNrTmFtZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwicHJvdG90eXBlIiwiZ2V0UG9vbGVkIiwiTW91c2VFdmVudCIsIl9nZXRJbnRlcnNlY3Rpb25zIiwibW91c2VDb29yZHMiLCJyZWxhdGl2ZU1vdXNlQ29vcmRzIiwiX2dldFJlbGF0aXZlTW91c2VDb29yZHMiLCJzZXRGcm9tQ2FtZXJhIiwiaW50ZXJzZWN0T2JqZWN0cyIsImludGVyc2VjdE9iamVjdCIsIm9yaWdpbmFsUmF5IiwicmF5IiwiY2xvbmUiLCJyZXN1bHRSYXkiLCJjb3B5IiwiaG92ZXJNYXBUb1VwZGF0ZSIsIm1vdXNlRW50ZXJFdmVudCIsImRlcHRoIiwibW91c2VMZWF2ZUV2ZW50IiwidW5zZWVuVVVJRHMiLCJzY3JlZW5Nb3VzZUNvb3JkcyIsImNvbnRhaW5lclJlY3QiLCJzdWIiLCJkaXZpZGUiLCJjbGVhbnVwRnVuY3Rpb24iLCJhbGxQcm9wcyIsImNvbmNhdCIsInJlbW92ZVByb3AiLCJyZXNpemVXaW5kb3ciLCJ1cGRhdGVUaW1lIiwicmVzZXRUaW1lIiwiY2xpY2tNZXNoIiwibW92ZU1vdXNlIiwibG9hZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVE7QUFDYkMsZ0JBQWUsZUFERjtBQUViQyxhQUFZLFlBRkM7QUFHYkMseUJBQXdCLHdCQUhYO0FBSWJDLFVBQVMsU0FKSTtBQUtiQyxTQUFRLFFBTEs7QUFNYkMsY0FBYSxhQU5BO0FBT2JDLGFBQVksWUFQQztBQVFiQyxhQUFZO0FBUkMsQ0FBZDtrQkFVZVIsSzs7Ozs7Ozs7Ozs7Ozs7QUNWZjs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNUyxRQUFRLDRDQUFzQixvQkFDbkMsUUFBT0MsTUFBUCx1REFBT0EsTUFBUCxPQUFrQixRQUFsQixJQUE4QixPQUFPQSxPQUFPQyxpQkFBZCxLQUFvQyxXQUFsRSxHQUFnRkQsT0FBT0MsaUJBQVAsRUFBaEYsR0FBNkc7QUFBQSxRQUFLQyxDQUFMO0FBQUEsQ0FEMUUsQ0FBdEIsQ0FBZDs7QUFNQSxtQkFBU0MsTUFBVCxDQUNDO0FBQUE7QUFBQSxHQUFVLE9BQU9KLEtBQWpCO0FBQ0M7QUFERCxDQURELEVBSUVLLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRixFOzs7Ozs7Ozs7Ozs7OztBQ2pCQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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QXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7QUN0QkEsa0JBQWtCLHdEOzs7Ozs7O0FDQWxCO0FBQ0E7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNSRCxrQkFBa0Isd0Q7Ozs7Ozs7QUNBbEI7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7OztBQ2ZBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDckNBLGtCQUFrQix3RDs7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXNzZXRzL2pzL3BhZ2VzL3JpcHBsZS1jbGlja2FibGUuNWNlN2FiZDVhNGQ1YWQ3MWMxY2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRNT1ZFX01PVVNFOiAnTU9WRV9NT1VTRScsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0TE9BRElORzogJ0xPQURJTkcnLFxuXHRMT0FERUQ6ICdMT0FERUQnLFxuXHRVUERBVEVfVElNRTogJ1VQREFURV9USU1FJyxcblx0UkVTRVRfVElNRTogJ1JFU0VUX1RJTUUnLFxuXHRDTElDS19NRVNIOiAnQ0xJQ0tfTUVTSCcsXG59XG5leHBvcnQgZGVmYXVsdCBUeXBlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvY29uc3RhbnRzL2FjdGlvbnR5cGVzLmpzIiwiaW1wb3J0ICcuLi8uLi9zdHlsdXMvc3R5bGUuc3R5bCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9JbWFnZUNvbnRhaW5lcidcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgY29tcG9zZShcblx0dHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbiAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKSA6IGYgPT4gZlxuKSk7XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdDxJbWFnZUNvbnRhaW5lci8+XG5cdDwvUHJvdmlkZXI+XG4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvaW5kZXguanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZCdcbmltcG9ydCB3aW5kb3dTaXplIGZyb20gJy4vd2luZG93U2l6ZSdcbmltcG9ydCBjYW1lcmEgZnJvbSAnLi9jYW1lcmEnXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnXG4vLyBpbXBvcnQgbW91c2UgZnJvbSAnLi9tb3VzZSdcbmltcG9ydCBwb2ludGVyIGZyb20gJy4vcG9pbnRlcidcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2FkLFxuICB3aW5kb3dTaXplLFxuICBjYW1lcmEsXG4gIHRpbWUsXG4gIC8vIG1vdXNlLFxuICBwb2ludGVyLFxuICBpbWFnZSxcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGxvYWQgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGxvYWRpbmc6IHRydWVcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy9sb2FkLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3Qgd2luZG93U2l6ZSA9IChcblx0c3RhdGUgPSBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5SRVNJWkVfV0lORE9XOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLFxuXHRcdFx0XHRuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdFx0KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvd1NpemVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL3dpbmRvd1NpemUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBjYW1lcmEgPSAoXG5cdHN0YXRlID0ge1xuXHRcdHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAzLjgpLFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW1lcmFcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL2NhbWVyYS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHRpbWUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGVsYXBzZWQ6IDAuMCxcblx0XHRkdXJhdGlvbjogMS41LFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLlVQREFURV9USU1FOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGVsYXBzZWQ6IHN0YXRlLmVsYXBzZWQgKyAwLjAxLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuUkVTRVRfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICogMC4wLFxuXHRcdFx0XHRkdXJhdGlvbjogc3RhdGUuZHVyYXRpb24sXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL3RpbWUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBwb2ludGVyID0gKFxuXHRzdGF0ZSA9IHtcblx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjIoMC41LCAwLjUpLFxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLkNMSUNLX01FU0g6XG5cdFx0XHRsZXQgcmVjdCA9IGFjdGlvbi5lLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjIoXG5cdFx0XHRcdFx0KGFjdGlvbi5lLmNsaWVudFggLSByZWN0LmxlZnQpIC8gYWN0aW9uLmUudGFyZ2V0LndpZHRoLFxuXHRcdFx0XHRcdChhY3Rpb24uZS50YXJnZXQuaGVpZ2h0IC0gYWN0aW9uLmUuY2xpZW50WSArIHJlY3QudG9wKSAvIGFjdGlvbi5lLnRhcmdldC5oZWlnaHQsXG5cdFx0XHRcdCksXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvaW50ZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL3JlZHVjZXJzL3BvaW50ZXIuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBpbWFnZSA9IChcblx0c3RhdGUgPSB7XG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdC8vIGNhc2UgVHlwZXMuTE9BRElORzpcblx0XHQvLyBcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdC8vIFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdC8vIFx0fSlcblx0XHQvLyBjYXNlIFR5cGVzLkxPQURFRDpcblx0XHQvLyBcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdC8vIFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHQvLyBcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9yZWR1Y2Vycy9pbWFnZS5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xuXG5pbXBvcnQge3Jlc2l6ZVdpbmRvd30gZnJvbSAnLi4vYWN0aW9ucy9yZXNpemVXaW5kb3cnXG5pbXBvcnQge3VwZGF0ZVRpbWUsIHJlc2V0VGltZX0gZnJvbSAnLi4vYWN0aW9ucy90aW1lJ1xuaW1wb3J0IHtjbGlja01lc2h9IGZyb20gJy4uL2FjdGlvbnMvY2xpY2tNZXNoJ1xuaW1wb3J0IHttb3ZlTW91c2V9IGZyb20gJy4uL2FjdGlvbnMvbW92ZU1vdXNlJ1xuaW1wb3J0IHtsb2FkaW5nLCBsb2FkZWR9IGZyb20gJy4uL2FjdGlvbnMvbG9hZCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cdHJldHVybiB7XG5cdFx0bG9hZGluZzogc3RhdGUubG9hZC5sb2FkaW5nLFxuXHRcdHdpZHRoOiBjb250ZW50LmNsaWVudFdpZHRoLFxuXHRcdGhlaWdodDogY29udGVudC5jbGllbnRIZWlnaHQsXG5cdFx0d2luZG93V2lkdGg6IHN0YXRlLndpbmRvd1NpemUueCxcblx0XHR3aW5kb3dIZWlnaHQ6IHN0YXRlLndpbmRvd1NpemUueSxcblx0XHRjYW1lcmFQb3NpdGlvbjogc3RhdGUuY2FtZXJhLnBvc2l0aW9uLFxuXHRcdGVsYXBzZWQ6IHN0YXRlLnRpbWUuZWxhcHNlZCxcblx0XHRkdXJhdGlvbjogc3RhdGUudGltZS5kdXJhdGlvbixcblx0XHRwb2ludGVyUG9zaXRpb246IHN0YXRlLnBvaW50ZXIucG9zaXRpb24sXG5cdFx0Ly8gbW91c2U6IHN0YXRlLm1vdXNlLnRhcmdldCxcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRvbkxvYWRpbmc6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRpbmcoKSlcblx0XHR9LFxuXHRcdG9uTG9hZGVkOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbG9hZGVkLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRlZCgpKVxuXHRcdH0sXG5cdFx0b25SZXNpemU6IChlKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNpemVXaW5kb3coZSkpXG5cdFx0fSxcblx0XHRvblVwZGF0ZVRpbWU6ICgpID0+IHtcblx0XHRcdGRpc3BhdGNoKHVwZGF0ZVRpbWUoKSlcblx0XHR9LFxuXHRcdG9uUmVzZXRUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNldFRpbWUoKSlcblx0XHR9LFxuXHRcdG9uQ2xpY2tNZXNoOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2goY2xpY2tNZXNoKGUpKVxuXHRcdH0sXG5cdFx0Ly8gb25Nb3ZlTW91c2U6IChlKSA9PiB7XG5cdFx0Ly8gXHRkaXNwYXRjaChtb3ZlTW91c2UoZSkpXG5cdFx0Ly8gfSxcblx0fVxufVxuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEltYWdlKVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInXG5cbmltcG9ydCBNb3VzZUlucHV0IGZyb20gJy4uL2xpYi9Nb3VzZUlucHV0J1xuXG5pbXBvcnQgdnMgZnJvbSAnLi4vZ2xzbC9pbWFnZS52ZXJ0J1xuaW1wb3J0IGZzIGZyb20gJy4uL2dsc2wvaW1hZ2UuZnJhZydcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLm9uTG9hZGluZyA9IDo6dGhpcy5wcm9wcy5vbkxvYWRpbmdcblx0XHR0aGlzLm9uTG9hZGVkID0gOjp0aGlzLnByb3BzLm9uTG9hZGVkXG5cdFx0dGhpcy5vblJlc2l6ZSA9IDo6dGhpcy5wcm9wcy5vblJlc2l6ZVxuXHRcdHRoaXMub25VcGRhdGVUaW1lID0gOjp0aGlzLnByb3BzLm9uVXBkYXRlVGltZVxuXHRcdC8vIHRoaXMub25Nb3ZlTW91c2UgPSA6OnRoaXMucHJvcHMub25Nb3ZlTW91c2Vcblx0XHR0aGlzLm9uUmVzZXRUaW1lID0gOjp0aGlzLnByb3BzLm9uUmVzZXRUaW1lXG5cdFx0dGhpcy5vbkNsaWNrTWVzaCA9IDo6dGhpcy5wcm9wcy5vbkNsaWNrTWVzaFxuXG5cdFx0dGhpcy50ZXh0dXJlcyA9IHtcblx0XHRcdFwibWFpblwiOiB7XG5cdFx0XHRcdHVybDogXCIuLi9hc3NldHMvaW1nL3JpcHBsZS9jYXQyLmpwZ1wiXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyogTGlmZUN5Y2xlICovXG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5pbml0aWFsaXplKCkudGhlbigoKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5vbkxvYWRlZCgpXG5cdFx0XHRcdC8vIHRoaXMuaGFuZGxlTW91c2VNb3ZlKClcblx0XHRcdFx0dGhpcy5zZXRNb3VzZUlucHV0KClcblx0XHRcdFx0dGhpcy5oYW5kbGVSZXNpemUoKVxuXG5cdFx0XHR9LCAzMDApXG5cdFx0fSlcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShuZXdQcm9wcykge1xuXHRcdGNvbnN0IHtcblx0XHRcdG1vdXNlSW5wdXQsXG5cdFx0fSA9IHRoaXMucmVmcztcblxuXHRcdGNvbnN0IHtcblx0XHRcdHdpbmRvd1dpZHRoLFxuXHRcdFx0d2luZG93SGVpZ2h0LFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKHdpbmRvd1dpZHRoICE9PSBuZXdQcm9wcy53aW5kb3dXaWR0aCB8fCB3aW5kb3dIZWlnaHQgIT09IG5ld1Byb3BzLndpbmRvd0hlaWdodCkge1xuXHRcdFx0bW91c2VJbnB1dC5jb250YWluZXJSZXNpemVkKCk7XG5cdFx0fVxuXHR9XG5cblxuXHQvKiBjdXN0b20gRnVuY3Rpb24gICovXG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLm9uTG9hZGluZygpXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMubG9hZFRleHR1cmUoKVxuXHRcdFx0cmVzb2x2ZSgpXG5cdFx0fSk7XG5cdH1cblxuXHRzZXRNb3VzZUlucHV0KCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdG1vdXNlSW5wdXQsXG5cdFx0XHRjb250YWluZXJcblx0XHR9ID0gdGhpcy5yZWZzO1xuXG5cdFx0aWYgKCFtb3VzZUlucHV0LmlzUmVhZHkoKSkge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRzY2VuZSxcblx0XHRcdFx0Y2FtZXJhLFxuXHRcdFx0fSA9IHRoaXMucmVmcztcblxuXHRcdFx0bW91c2VJbnB1dC5yZWFkeShzY2VuZSwgY29udGFpbmVyLCBjYW1lcmEpO1xuXHRcdFx0Ly8gbW91c2VJbnB1dC5yZXN0cmljdEludGVyc2VjdGlvbnMoaW1hZ2VNZXNoKTtcblx0XHRcdG1vdXNlSW5wdXQuc2V0QWN0aXZlKGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVSZXNpemUoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlKVxuXHR9XG5cblx0Ly8gaGFuZGxlTW91c2VNb3ZlKCkge1xuXHQvLyBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW92ZU1vdXNlLCBmYWxzZSlcblx0Ly8gXHR9XG5cblx0aGFuZGxlQ2xpY2soZSkge1xuXHRcdHRoaXMub25SZXNldFRpbWUoKVxuXHRcdHRoaXMub25DbGlja01lc2goZSlcblx0fVxuXG5cdGhhbmRsZUFuaW1hdGUoKSB7XG5cdFx0dGhpcy5vblVwZGF0ZVRpbWUoKVxuXHR9XG5cblx0bG9hZFRleHR1cmUoKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKVxuXHRcdGxvYWRlci5jcm9zc09yaWdpbiA9ICcqJ1xuXHRcdGZvciAobGV0IG5hbWUgaW4gdGhpcy50ZXh0dXJlcykge1xuXHRcdFx0bG9hZGVyLmxvYWQodGhpcy50ZXh0dXJlc1tuYW1lXS51cmwsICh0ZXh0dXJlKSA9PiB7XG4gXHRcdFx0dGhpcy50ZXh0dXJlc1tuYW1lXS50ZXh0dXJlID0gdGV4dHVyZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge2xvYWRpbmcsIHdpZHRoLCBoZWlnaHQsIGNhbWVyYVBvc2l0aW9uLCBlbGFwc2VkLCBkdXJhdGlvbiwgcG9pbnRlclBvc2l0aW9ufSA9IHRoaXMucHJvcHNcblxuXHRcdGlmIChsb2FkaW5nKSByZXR1cm4oPGgyPkxvYWRpbmcuLi48L2gyPilcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXYgcmVmPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxSZWFjdDNcblx0XHRcdFx0XHRtYWluQ2FtZXJhPVwiY2FtZXJhXCJcblx0XHRcdFx0XHR3aWR0aD17d2lkdGh9XG5cdFx0XHRcdFx0aGVpZ2h0PXtoZWlnaHR9XG5cdFx0XHRcdFx0b25BbmltYXRlPXs6OnRoaXMuaGFuZGxlQW5pbWF0ZX1cblx0XHRcdFx0XHRjbGVhckNvbG9yPXsweDAwMDAwMH1cblx0XHRcdFx0XHRhbnRpYWxpYXM9e3RydWV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bW9kdWxlXG5cdFx0XHRcdFx0XHRyZWY9XCJtb3VzZUlucHV0XCJcblx0XHRcdFx0XHRcdGRlc2NyaXB0b3I9e01vdXNlSW5wdXR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8c2NlbmVcblx0XHRcdFx0XHRcdHJlZj1cInNjZW5lXCJcblx0XHRcdFx0XHRcdC8vIGZvZz17bmV3IFRIUkVFLkZvZygweDIyMjIyMiwgMC42LCAyLjgpfVxuXHRcdFx0XHRcdD5cblxuXHRcdFx0XHRcdFx0ey8qIEhlbHBlciAqL31cblx0XHRcdFx0XHRcdHsvKiA8YXhpc0hlbHBlciAvPiAqL31cblxuXHRcdFx0XHRcdFx0ey8qIENhbWVyYSAqL31cblx0XHRcdFx0XHRcdDxwZXJzcGVjdGl2ZUNhbWVyYVxuXHRcdFx0XHRcdFx0XHRyZWY9XCJjYW1lcmFcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY2FtZXJhXCJcblx0XHRcdFx0XHRcdFx0Zm92PXsxNX1cblx0XHRcdFx0XHRcdFx0YXNwZWN0PXt3aWR0aCAvIGhlaWdodH1cblx0XHRcdFx0XHRcdFx0bmVhcj17MC4wMX1cblx0XHRcdFx0XHRcdFx0ZmFyPXsxMDAwfVxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbj17Y2FtZXJhUG9zaXRpb259XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHR7LyogTGlnaHQgKi99XG5cdFx0XHRcdFx0XHQ8aGVtaXNwaGVyZUxpZ2h0XG5cdFx0XHRcdFx0XHRcdHNreUNvbG9yPXsweGZmZmZiYn1cblx0XHRcdFx0XHRcdFx0Z3JvdW5kQ29sb3I9ezB4ODg3OTc5fVxuXHRcdFx0XHRcdFx0XHRpbnRlbnNpdHk9ezAuOX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8ZGlyZWN0aW9uYWxMaWdodFxuXHRcdFx0XHRcdFx0XHRjb2xvcj17MHhmZmZmZmZ9XG5cdFx0XHRcdFx0XHRcdGludGVuc2l0eT17MC44fVxuXHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0ey8qIGhlbHBlciBNZXNoKi99XG5cdFx0XHRcdFx0XHR7LyogPG1lc2g+XG5cdFx0XHRcdFx0XHRcdFx0PGJveEdlb21ldHJ5XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezF9XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRcdFx0XHRcdGRlcHRoPXsxfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8bWVzaEJhc2ljTWF0ZXJpYWxcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj17MHhlZWVlZWV9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L21lc2g+ICovfVxuXG5cdFx0XHRcdFx0XHR7LyogSW1hZ2UgTWVzaCAqL31cblx0XHRcdFx0XHRcdDxtZXNoXG5cdFx0XHRcdFx0XHRcdHJlZj0naW1hZ2VNZXNoJ1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHBsYW5lR2VvbWV0cnlcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD17MX1cblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezF9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxzaGFkZXJNYXRlcmlhbFxuXHRcdFx0XHRcdFx0XHRcdHZlcnRleFNoYWRlcj17dnN9XG5cdFx0XHRcdFx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI9e2ZzfVxuXHRcdFx0XHRcdFx0XHRcdGJsZW5kaW5nPXtUSFJFRS5Ob3JtYWxCbGVuZGluZ31cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDx1bmlmb3Jtcz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eyd0ZXh0dXJlJ30gdHlwZT17J3QnfSB2YWx1ZT17dGhpcy50ZXh0dXJlc1snbWFpbiddLnRleHR1cmV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsndGltZSd9IHR5cGU9eydmJ30gdmFsdWU9e2VsYXBzZWR9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dW5pZm9ybSBuYW1lPXsnZHVyYXRpb24nfSB0eXBlPXsnZid9IHZhbHVlPXtkdXJhdGlvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydtb3VzZSd9IHR5cGU9eyd2ZWMyJ30gdmFsdWU9e3BvaW50ZXJQb3NpdGlvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3VuaWZvcm1zPlxuXHRcdFx0XHRcdFx0XHQ8L3NoYWRlck1hdGVyaWFsPlxuXG5cdFx0XHRcdFx0XHQ8L21lc2g+XG5cblx0XHRcdFx0XHQ8L3NjZW5lPlxuXHRcdFx0XHQ8L1JlYWN0Mz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvY29tcG9uZW50cy9JbWFnZS5qcyIsImltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IFJlYWN0VXBkYXRlcyBmcm9tICdyZWFjdC1kb20vbGliL1JlYWN0VXBkYXRlcyc7XG5cbmltcG9ydCBTeW50aGV0aWNNb3VzZUV2ZW50IGZyb20gJ3JlYWN0LWRvbS9saWIvU3ludGhldGljTW91c2VFdmVudCc7XG5cbmltcG9ydCBNb2R1bGUgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXIvbGliL01vZHVsZSc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncmVhY3QvbGliL1JlYWN0UHJvcFR5cGVzJztcblxuY29uc3QgdGVtcFZlY3RvcjIgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5jb25zdCBsaXN0ZW5lckNhbGxiYWNrTmFtZXMgPSB7XG4gIG1vdXNlZG93bjogJ29uTW91c2VEb3duJyxcbiAgbW91c2V1cDogJ29uTW91c2VVcCcsXG59O1xuXG5jb25zdCBtb3VzZUV2ZW50cyA9IFtcbiAgJ29uTW91c2VFbnRlcicsXG4gICdvbk1vdXNlTGVhdmUnLFxuICAnb25Nb3VzZURvd24nLFxuICAnb25Nb3VzZVVwJyxcbiAgJ29uQ2xpY2snLFxuXTtcblxuY29uc3QgYm9vbFByb3BzID0ge1xuICBpZ25vcmVQb2ludGVyRXZlbnRzOiBmYWxzZSxcbn07XG5cbmNsYXNzIE1vdXNlSW5wdXQgZXh0ZW5kcyBNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faXNSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fcmVzdHJpY3RJbnRlcnNlY3Rpb25zID0gZmFsc2U7XG4gICAgdGhpcy5fb2JqZWN0c1RvSW50ZXJzZWN0ID0gbnVsbDtcblxuICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMuX3BhdGNoZWREZXNjcmlwdG9ycyA9IFtdO1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBzZXR1cChyZWFjdDNSZW5kZXJlckluc3RhbmNlKSB7XG4gICAgc3VwZXIuc2V0dXAocmVhY3QzUmVuZGVyZXJJbnN0YW5jZSk7XG5cbiAgICBjb25zdCBPYmplY3QzRERlc2NyaXB0b3IgPSByZWFjdDNSZW5kZXJlckluc3RhbmNlLnRocmVlRWxlbWVudERlc2NyaXB0b3JzLm9iamVjdDNELmNvbnN0cnVjdG9yO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhyZWFjdDNSZW5kZXJlckluc3RhbmNlLnRocmVlRWxlbWVudERlc2NyaXB0b3JzKS5mb3JFYWNoKGVsZW1lbnREZXNjcmlwdG9yID0+IHtcbiAgICAgIGlmIChlbGVtZW50RGVzY3JpcHRvciBpbnN0YW5jZW9mIE9iamVjdDNERGVzY3JpcHRvcikge1xuICAgICAgICBtb3VzZUV2ZW50cy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgICAgZWxlbWVudERlc2NyaXB0b3IuaGFzRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYm9vbFByb3BzKS5mb3JFYWNoKHByb3BOYW1lID0+IHtcbiAgICAgICAgICBlbGVtZW50RGVzY3JpcHRvci5oYXNQcm9wKHByb3BOYW1lLCB7XG4gICAgICAgICAgICB0eXBlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgICAgIHVwZGF0ZSh0aHJlZU9iamVjdCwgdmFsdWUsIGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0aHJlZU9iamVjdC51c2VyRGF0YVtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJlZU9iamVjdC51c2VyRGF0YVtwcm9wTmFtZV0gPSBib29sUHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmYXVsdDogYm9vbFByb3BzW3Byb3BOYW1lXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzLnB1c2goZWxlbWVudERlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNSZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNSZWFkeTtcbiAgfVxuXG4gIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICByZXN0cmljdEludGVyc2VjdGlvbnMob2JqZWN0cywgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgICB0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMgPSB0cnVlO1xuICAgIHRoaXMuX29iamVjdHNUb0ludGVyc2VjdCA9IG9iamVjdHM7XG5cbiAgICB0aGlzLl9yZXN0cmljdGVkSW50ZXJzZWN0aW9uUmVjdXJzaXZlID0gcmVjdXJzaXZlO1xuICB9XG5cbiAgcmVhZHkoc2NlbmUsIGNvbnRhaW5lciwgY2FtZXJhKSB7XG4gICAgdGhpcy5faXNSZWFkeSA9IHRydWU7XG5cbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLl9jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XG4gICAgdGhpcy5fbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgdGhpcy5fb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX21vdXNlLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuICAgICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRW50ZXJMZWF2ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLl9jb250YWluZXJSZWN0ID0gdGhpcy5fY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdGhpcy5faG92ZXJPYmplY3RNYXAgPSB7fTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX29uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbiAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuXG4gICAgdGhpcy5fY2F1Z2h0TGlzdGVuZXJzQ2xlYW51cEZ1bmN0aW9ucyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMobGlzdGVuZXJDYWxsYmFja05hbWVzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICBsZXQgYm91bmRMaXN0ZW5lcjtcblxuICAgICAgY29uc3QgbGlzdGVuZXJDYWxsYmFja05hbWUgPSBsaXN0ZW5lckNhbGxiYWNrTmFtZXNbZXZlbnROYW1lXTtcbiAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlZG93bic6XG4gICAgICAgICAgYm91bmRMaXN0ZW5lciA9IHRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcywgbGlzdGVuZXJDYWxsYmFja05hbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZXVwJzpcbiAgICAgICAgICBib3VuZExpc3RlbmVyID0gdGhpcy5fb25Nb3VzZVVwLmJpbmQodGhpcywgbGlzdGVuZXJDYWxsYmFja05hbWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm91bmRMaXN0ZW5lcikge1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGJvdW5kTGlzdGVuZXIsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBib3VuZExpc3RlbmVyLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfb25Nb3VzZURvd24gPSAoY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KSA9PiB7XG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgICB9ID0gdGhpcy5faW50ZXJzZWN0QW5kRGlzcGF0Y2goY2FsbGJhY2tOYW1lLCBtb3VzZUV2ZW50KTtcblxuICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpIHtcbiAgICAgICAgdGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ludGVyc2VjdGlvbnNGb3JDbGljayA9IGludGVyc2VjdGlvbnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX29uTW91c2VVcCA9IChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpID0+IHtcbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudCxcbiAgICAgICAgaW50ZXJzZWN0aW9ucyxcbiAgICAgIH0gPSB0aGlzLl9pbnRlcnNlY3RBbmREaXNwYXRjaChjYWxsYmFja05hbWUsIG1vdXNlRXZlbnQpO1xuXG4gICAgICBpZiAoIShldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSkge1xuICAgICAgICBpZiAodGhpcy5faW50ZXJzZWN0aW9uc0ZvckNsaWNrID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW50ZXJzZWN0IGN1cnJlbnQgaW50ZXJzZWN0aW9ucyB3aXRoIHRoZSBpbnRlcnNlY3Rpb25zIGZvciBjbGlja1xuICAgICAgICAvLyAgIGNhbGwgeHppYml0IEFTQVAgd2UgaGF2ZSBhIGdvb2Qgb25lIHNvblxuICAgICAgICAvLyAgICAgaXQgd2Fzbid0IHRoYXQgZ29vZFxuXG4gICAgICAgIGNvbnN0IGludGVyc2VjdGlvblVVSURNYXAgPSB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sucmVkdWNlKChtYXAsIGludGVyc2VjdGlvbikgPT4ge1xuICAgICAgICAgIG1hcFtpbnRlcnNlY3Rpb24ub2JqZWN0LnV1aWRdID0gaW50ZXJzZWN0aW9uO1xuXG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tpXTtcblxuICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgICAgICBjb25zdCB1dWlkID0gb2JqZWN0LnV1aWQ7XG5cbiAgICAgICAgICBpZiAoaW50ZXJzZWN0aW9uVVVJRE1hcFt1dWlkXSkge1xuICAgICAgICAgICAgLy8gb2ggYm95IG9oIGJveSBoZXJlIHdlIGdvLCB3ZSBnb3QgYSBjbGlja2VyXG5cbiAgICAgICAgICAgIFJlYWN0My5ldmVudERpc3BhdGNoZXJcbiAgICAgICAgICAgICAgLmRpc3BhdGNoRXZlbnQob2JqZWN0LCAnb25DbGljaycsXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnY2xpY2snLCBldmVudCksIGludGVyc2VjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9pbnRlcnNlY3Rpb25zRm9yQ2xpY2sgPSBudWxsO1xuICB9O1xuXG4gIF9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcHJvdG90eXBlKSB7XG4gICAgcmV0dXJuIFN5bnRoZXRpY01vdXNlRXZlbnQuZ2V0UG9vbGVkKG51bGwsIG51bGwsXG4gICAgICBuZXcgTW91c2VFdmVudChldmVudFR5cGUsIHByb3RvdHlwZSksIHByb3RvdHlwZS50YXJnZXQpO1xuICB9XG5cbiAgX2ludGVyc2VjdEFuZERpc3BhdGNoKGNhbGxiYWNrTmFtZSwgbW91c2VFdmVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gU3ludGhldGljTW91c2VFdmVudC5nZXRQb29sZWQobnVsbCwgbnVsbCwgbW91c2VFdmVudCwgbW91c2VFdmVudC50YXJnZXQpO1xuXG4gICAgY29uc3QgaW50ZXJzZWN0aW9ucyA9IHRoaXMuX2dldEludGVyc2VjdGlvbnModGVtcFZlY3RvcjIuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpKTtcblxuICAgIFJlYWN0VXBkYXRlcy5iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVyc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tpXTtcblxuICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGludGVyc2VjdGlvbi5vYmplY3Q7XG5cbiAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KG9iamVjdCwgY2FsbGJhY2tOYW1lLCBldmVudCwgaW50ZXJzZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBldmVudCxcbiAgICAgIGludGVyc2VjdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIF9nZXRJbnRlcnNlY3Rpb25zKG1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkcyA9IHRoaXMuX2dldFJlbGF0aXZlTW91c2VDb29yZHMobW91c2VDb29yZHMpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGlmICh0aGlzLl9yZXN0cmljdEludGVyc2VjdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyh0aGlzLl9vYmplY3RzVG9JbnRlcnNlY3QsXG4gICAgICAgIHRoaXMuX3Jlc3RyaWN0ZWRJbnRlcnNlY3Rpb25SZWN1cnNpdmUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KHRoaXMuX3NjZW5lLCB0cnVlKTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yMn0gbW91c2VDb29yZHMgdXN1YWxseSBhbiBldmVudCdzIGNsaWVudFggYW5kIGNsaWVudFlcbiAgICogQHJldHVybnMge1RIUkVFLlJheX1cbiAgICovXG4gIGdldENhbWVyYVJheShtb3VzZUNvb3Jkcykge1xuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZHMgPSB0aGlzLl9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKG1vdXNlQ29vcmRzKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUmF5ID0gdGhpcy5fcmF5Y2FzdGVyLnJheS5jbG9uZSgpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEocmVsYXRpdmVNb3VzZUNvb3JkcywgdGhpcy5fY2FtZXJhKTtcblxuICAgIGNvbnN0IHJlc3VsdFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5yYXkuY29weShvcmlnaW5hbFJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0UmF5O1xuICB9XG5cbiAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICBpbnRlcnNlY3RPYmplY3QobW91c2VDb29yZHMsIG9iamVjdCwgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gdGhpcy5fZ2V0UmVsYXRpdmVNb3VzZUNvb3Jkcyhtb3VzZUNvb3Jkcyk7XG5cbiAgICBjb25zdCBvcmlnaW5hbFJheSA9IHRoaXMuX3JheWNhc3Rlci5yYXkuY2xvbmUoKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHJlbGF0aXZlTW91c2VDb29yZHMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICBjb25zdCBpbnRlcnNlY3Rpb25zID0gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdChvYmplY3QsIHJlY3Vyc2l2ZSk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIucmF5LmNvcHkob3JpZ2luYWxSYXkpO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cblxuICBjb250YWluZXJSZXNpemVkKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lclJlY3QgPSB0aGlzLl9jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1JlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlRW50ZXJMZWF2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVFbnRlckxlYXZlKCkge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLl9nZXRJbnRlcnNlY3Rpb25zKHRoaXMuX21vdXNlKTtcblxuICAgIGNvbnN0IGhvdmVyTWFwVG9VcGRhdGUgPSB7XG4gICAgICAuLi50aGlzLl9ob3Zlck9iamVjdE1hcCxcbiAgICB9O1xuXG4gICAgY29uc3QgbW91c2VFbnRlckV2ZW50ID0gdGhpcy5fY3JlYXRlU3ludGhldGljTW91c2VFdmVudCgnbW91c2VFbnRlcicsIHtcbiAgICAgIHRhcmdldDogdGhpcy5fY29udGFpbmVyLFxuICAgICAgY2xpZW50WDogdGhpcy5fbW91c2UueCxcbiAgICAgIGNsaWVudFk6IHRoaXMuX21vdXNlLnksXG4gICAgfSk7XG5cbiAgICAvLyBmaW5kIGZpcnN0IGludGVyc2VjdGlvbiB0aGF0IGRvZXMgbm90IGlnbm9yZSBwb2ludGVyIGV2ZW50c1xuICAgIGZvciAobGV0IGRlcHRoID0gMDsgZGVwdGggPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgKytkZXB0aCkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uc1tkZXB0aF07XG4gICAgICBjb25zdCBvYmplY3QgPSBpbnRlcnNlY3Rpb24ub2JqZWN0O1xuXG4gICAgICBpZiAob2JqZWN0LnVzZXJEYXRhICYmIG9iamVjdC51c2VyRGF0YS5pZ25vcmVQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1dWlkID0gb2JqZWN0LnV1aWQ7XG5cbiAgICAgIGlmICh0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXSkge1xuICAgICAgICBkZWxldGUgaG92ZXJNYXBUb1VwZGF0ZVt1dWlkXTtcblxuICAgICAgICAvLyBqdXN0IHVwZGF0ZSB0aGF0IGludGVyc2VjdGlvblxuICAgICAgICB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXS5pbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ob3Zlck9iamVjdE1hcFt1dWlkXSA9IHtcbiAgICAgICAgICBvYmplY3QsXG4gICAgICAgICAgaW50ZXJzZWN0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghKG1vdXNlRW50ZXJFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBtb3VzZUVudGVyRXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgICBSZWFjdDMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQob2JqZWN0LCAnb25Nb3VzZUVudGVyJyxcbiAgICAgICAgICAgIG1vdXNlRW50ZXJFdmVudCwgaW50ZXJzZWN0aW9uLCBkZXB0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgaGF2ZSBmb3VuZCB0aGUgZmlyc3Qgc29saWQgaW50ZXJzZWN0aW9uLCBkb24ndCBnbyBmdXJ0aGVyXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBtb3VzZUxlYXZlRXZlbnQgPSB0aGlzLl9jcmVhdGVTeW50aGV0aWNNb3VzZUV2ZW50KCdtb3VzZUxlYXZlJywge1xuICAgICAgdGFyZ2V0OiB0aGlzLl9jb250YWluZXIsXG4gICAgICBjbGllbnRYOiB0aGlzLl9tb3VzZS54LFxuICAgICAgY2xpZW50WTogdGhpcy5fbW91c2UueSxcbiAgICB9KTtcblxuICAgIC8vIGRlbGV0ZSBhbGwgdW5zZWVuIHV1aWRzIGluIGhvdmVyIG1hcFxuICAgIGNvbnN0IHVuc2VlblVVSURzID0gT2JqZWN0LmtleXMoaG92ZXJNYXBUb1VwZGF0ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuc2VlblVVSURzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCB1dWlkID0gdW5zZWVuVVVJRHNbaV07XG5cbiAgICAgIGlmICghKG1vdXNlTGVhdmVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCBtb3VzZUxlYXZlRXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgUmVhY3QzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdLm9iamVjdCxcbiAgICAgICAgICAnb25Nb3VzZUxlYXZlJywgbW91c2VMZWF2ZUV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX2hvdmVyT2JqZWN0TWFwW3V1aWRdO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRSZWxhdGl2ZU1vdXNlQ29vcmRzKHNjcmVlbk1vdXNlQ29vcmRzKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX2NvbnRhaW5lclJlY3Q7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRzID0gc2NyZWVuTW91c2VDb29yZHMuY2xvbmUoKVxuICAgICAgLnN1Yih0ZW1wVmVjdG9yMi5zZXQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcCkpXG4gICAgICAuZGl2aWRlKHRlbXBWZWN0b3IyLnNldChjb250YWluZXJSZWN0LndpZHRoLCBjb250YWluZXJSZWN0LmhlaWdodCkpO1xuXG4gICAgLy8gbW91c2UueCA9ICggZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoICkgKiAyIC0gMTtcbiAgICAvLyBtb3VzZS55ID0gLSAoIGV2ZW50LmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgKSAqIDIgKyAxO1xuXG4gICAgcmVsYXRpdmVNb3VzZUNvb3Jkcy54ID0gcmVsYXRpdmVNb3VzZUNvb3Jkcy54ICogMiAtIDE7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3Jkcy55ID0gLXJlbGF0aXZlTW91c2VDb29yZHMueSAqIDIgKyAxO1xuXG4gICAgcmV0dXJuIHJlbGF0aXZlTW91c2VDb29yZHM7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gIGRpc3Bvc2UoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fb25Nb3VzZU1vdmUsIGZhbHNlKTtcblxuICAgIHRoaXMuX2NhdWdodExpc3RlbmVyc0NsZWFudXBGdW5jdGlvbnMuZm9yRWFjaChjbGVhbnVwRnVuY3Rpb24gPT4gY2xlYW51cEZ1bmN0aW9uKCkpO1xuICAgIGRlbGV0ZSB0aGlzLl9jYXVnaHRMaXN0ZW5lcnNDbGVhbnVwRnVuY3Rpb25zO1xuXG4gICAgZGVsZXRlIHRoaXMuX29uTW91c2VNb3ZlO1xuXG4gICAgdGhpcy5fcGF0Y2hlZERlc2NyaXB0b3JzLmZvckVhY2goZWxlbWVudERlc2NyaXB0b3IgPT4ge1xuICAgICAgY29uc3QgYWxsUHJvcHMgPSBPYmplY3Qua2V5cyhib29sUHJvcHMpXG4gICAgICAgIC5jb25jYXQobW91c2VFdmVudHMpO1xuXG4gICAgICBhbGxQcm9wcy5mb3JFYWNoKHByb3BOYW1lID0+IHtcbiAgICAgICAgZWxlbWVudERlc2NyaXB0b3IucmVtb3ZlUHJvcChwcm9wTmFtZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3VzZUlucHV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvbGliL01vdXNlSW5wdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3JpcHBsZS1jbGlja2FibGUvZ2xzbC9pbWFnZS52ZXJ0XG4vLyBtb2R1bGUgaWQgPSA1ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBcInZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxudW5pZm9ybSBmbG9hdCBkdXJhdGlvbjtcXG51bmlmb3JtIHZlYzIgbW91c2U7XFxuXFxudm9pZCBtYWluKCkge1xcblxcdHZlYzIgdXYgPSB2VXY7XFxuXFx0dmVjMiB0ZXhDb29yZCA9IHV2O1xcblxcdHZlYzIgZGVwYXJ0dXJlID0gbW91c2U7XFxuXFx0ZmxvYXQgYW1wbGl0dWRlID0gMC43O1xcblxcdGZsb2F0IHdhdmVMZW5ndGhPZmZzZXQgPSAwLjE7XFxuXFx0ZmxvYXQgc3BlZWQgPSAwLjg7XFxuXFx0ZmxvYXQgZWxhcHNlZCA9IG1vZCh0aW1lICogc3BlZWQsIGR1cmF0aW9uKTtcXG5cXHQvLyBmbG9hdCBlbGFwc2VkID0gdGltZTtcXG5cXG5cXHRmbG9hdCBkaXN0ID0gZGlzdGFuY2UodXYsIGRlcGFydHVyZSk7XFxuXFxuXFx0aWYgKCAoZGlzdCA8PSAoZWxhcHNlZCArIHdhdmVMZW5ndGhPZmZzZXQpKSAmJiAoZGlzdCA+PSAoZWxhcHNlZCAtIHdhdmVMZW5ndGhPZmZzZXQpKSApIHtcXG5cXHRcXHRmbG9hdCBkaWZmID0gYWJzKGVsYXBzZWQgLSBkaXN0KTtcXG5cXHRcXHRmbG9hdCBwb3dEaWZmID0gMS4wIC0gcG93KChkaWZmKjEwLjApLCBhbXBsaXR1ZGUpO1xcblxcblxcdFxcdGZsb2F0IGRpZmZUaW1lID0gZGlmZiAqIHBvd0RpZmY7XFxuXFx0XFx0dGV4Q29vcmQgPSB1diArICh1diAqIGRpZmZUaW1lKTtcXG5cXHR9XFxuXFxuXFx0dmVjNCBjb2xvciA9IHRleHR1cmUyRCh0ZXh0dXJlLCB0ZXhDb29yZCk7XFxuXFxuXFx0Z2xfRnJhZ0NvbG9yID0gY29sb3I7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9nbHNsL2ltYWdlLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDU4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgcmVzaXplV2luZG93ID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNJWkVfV0lORE9XLFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuVVBEQVRFX1RJTUUsXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlc2V0VGltZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5SRVNFVF9USU1FLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9hY3Rpb25zL3RpbWUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgY2xpY2tNZXNoID0gKGUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5DTElDS19NRVNILFxuXHRcdGU6IGUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUtY2xpY2thYmxlL2FjdGlvbnMvY2xpY2tNZXNoLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IG1vdmVNb3VzZSA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTU9WRV9NT1VTRSxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9hY3Rpb25zL21vdmVNb3VzZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURJTkdcblx0fVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVkID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLkxPQURFRFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlLWNsaWNrYWJsZS9hY3Rpb25zL2xvYWQuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3ZhbHVlc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC52YWx1ZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC92YWx1ZXMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsInZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC10by1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldE93blByb3BlcnR5RGVzY3JpcHRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gKDAsIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IyLmRlZmF1bHQpKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIHJldHVybiAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiXSwic291cmNlUm9vdCI6IiJ9