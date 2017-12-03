webpackJsonp([4],{

/***/ 38:
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
	UPDATE_TIME: 'UPDATE_TIME'
};
exports.default = Types;

/***/ }),

/***/ 553:
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

var _reducers = __webpack_require__(554);

var _reducers2 = _interopRequireDefault(_reducers);

var _ImageContainer = __webpack_require__(561);

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

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(25);

var _load = __webpack_require__(555);

var _load2 = _interopRequireDefault(_load);

var _windowSize = __webpack_require__(556);

var _windowSize2 = _interopRequireDefault(_windowSize);

var _camera = __webpack_require__(557);

var _camera2 = _interopRequireDefault(_camera);

var _time = __webpack_require__(558);

var _time2 = _interopRequireDefault(_time);

var _mouse = __webpack_require__(559);

var _mouse2 = _interopRequireDefault(_mouse);

var _image = __webpack_require__(560);

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  load: _load2.default,
  windowSize: _windowSize2.default,
  camera: _camera2.default,
  time: _time2.default,
  mouse: _mouse2.default,
  image: _image2.default
});

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(38);

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

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(38);

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

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(38);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var camera = function camera() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		position: new THREE.Vector3(0, 0, 5)
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

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(38);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = function time() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		elapsed: 0.0
	};
	var action = arguments[1];


	switch (action.type) {
		case _actiontypes2.default.UPDATE_TIME:
			return (0, _assign2.default)({}, state, {
				elapsed: state.elapsed + 0.01
			});
		default:
			return state;
	}
};

exports.default = time;

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(38);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouse = function mouse() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		target: new THREE.Vector2(0, 0)
	};
	var action = arguments[1];


	switch (action.type) {
		case _actiontypes2.default.MOVE_MOUSE:
			return (0, _assign2.default)({}, state, {
				target: new THREE.Vector2((action.e.clientX - window.innerWidth / 2) / (window.innerWidth / 2), (window.innerHeight / 2 - action.e.clientY) / (window.innerHeight / 2))
			});
		default:
			return state;
	}
};

exports.default = mouse;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actiontypes = __webpack_require__(38);

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

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(30);

var _Image = __webpack_require__(562);

var _Image2 = _interopRequireDefault(_Image);

var _resizeWindow = __webpack_require__(565);

var _updateTime = __webpack_require__(566);

var _moveMouse = __webpack_require__(567);

var _load = __webpack_require__(568);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		loading: state.load.loading,
		width: state.windowSize.x,
		height: state.windowSize.y,
		cameraPosition: state.camera.position,
		time: state.time.elapsed,
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
			dispatch((0, _updateTime.updateTime)());
		},
		onMoveMouse: function onMoveMouse(e) {
			dispatch((0, _moveMouse.moveMouse)(e));
		}
	};
};

var ImageContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Image2.default);

exports.default = ImageContainer;

/***/ }),

/***/ 562:
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

var _image = __webpack_require__(563);

var _image2 = _interopRequireDefault(_image);

var _image3 = __webpack_require__(564);

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
				url: "../assets/img/ripple/cat.jpg"
			}
		};
		return _this;
	}

	/* LifeCycle */

	(0, _createClass3.default)(Image, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			this.handleInitialize().then(function () {
				setTimeout(function () {
					_this2.onLoaded();
				}, 300);
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.handleResize();
			this.handleMouseMove();
		}

		/* custom Function  */

	}, {
		key: 'handleInitialize',
		value: function handleInitialize() {
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
			    cameraPosition = _props.cameraPosition,
			    time = _props.time,
			    mouse = _props.mouse;


			if (loading) return _react2.default.createElement(
				'h2',
				null,
				'Loading...'
			);

			return _react2.default.createElement(
				_reactThreeRenderer2.default,
				{
					mainCamera: 'camera',
					width: width,
					height: height,
					onAnimate: this.handleAnimate.bind(this),
					clearColor: 0x222222,
					antialias: true
				},
				_react2.default.createElement(
					'scene',
					null,
					_react2.default.createElement('perspectiveCamera', {
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
						{ ref: 'imageMesh' },
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
								_react2.default.createElement('uniform', { name: 'time', type: 'f', value: time }),
								_react2.default.createElement('uniform', { name: 'mouse', type: 'vec2', value: mouse })
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

/***/ 563:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nuniform sampler2D texture;\nuniform float time;\nuniform vec2 mouse;\n\nvoid main() {\n\tvec2 uv = vUv;\n\tvec2 texCoord = uv;\n\tvec2 departure = vec2(0.5, 0.5);\n\tfloat interval = 1.5;\n\tfloat amplitude = 1.2;\n\tfloat waveLengthOffset = 0.1;\n\tfloat speed = 0.8;\n\tfloat elapsed = mod(time * speed, interval);\n\n\t// float frequency = 100.0;\n\t// float amplitude = 0.003;\n\t// float speed = 50.0;\n\t// float distortion = sin(uv.y * frequency + time * speed) * amplitude;\n\n\n\tfloat dist = distance(uv, departure);\n\n\tif ( (dist <= (elapsed + waveLengthOffset)) && (dist >= (elapsed - waveLengthOffset)) ) {\n\t\tfloat diff = abs(elapsed - dist);\n\t\tfloat powDiff = 1.0 - pow((diff*10.0), amplitude);\n\n\t\tfloat diffTime = diff * powDiff;\n\t\ttexCoord = uv + (uv * diffTime);\n\t}\n\n\tvec4 color = texture2D(texture, texCoord);\n\n\tgl_FragColor = color;\n}\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(38);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateTime = undefined;

var _actiontypes = __webpack_require__(38);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateTime = exports.updateTime = function updateTime() {
	return {
		type: _actiontypes2.default.UPDATE_TIME
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

var _actiontypes = __webpack_require__(38);

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

var _actiontypes = __webpack_require__(38);

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

},[553]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS9yZWR1Y2Vycy9sb2FkLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUvcmVkdWNlcnMvd2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlL3JlZHVjZXJzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlL3JlZHVjZXJzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS9yZWR1Y2Vycy9tb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlL3JlZHVjZXJzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlL2NvbXBvbmVudHMvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS9nbHNsL2ltYWdlLnZlcnQiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS9nbHNsL2ltYWdlLmZyYWciLCJ3ZWJwYWNrOi8vLy4vYXBwL3JpcHBsZS9hY3Rpb25zL3Jlc2l6ZVdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlL2FjdGlvbnMvdXBkYXRlVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmlwcGxlL2FjdGlvbnMvbW92ZU1vdXNlLmpzIiwid2VicGFjazovLy8uL2FwcC9yaXBwbGUvYWN0aW9ucy9sb2FkLmpzIl0sIm5hbWVzIjpbIlR5cGVzIiwiUkVTSVpFX1dJTkRPVyIsIk1PVkVfTU9VU0UiLCJVUERBVEVfQ0FNRVJBX1BPU0lUSU9OIiwiTE9BRElORyIsIkxPQURFRCIsIlVQREFURV9USU1FIiwic3RvcmUiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZCIsIndpbmRvd1NpemUiLCJjYW1lcmEiLCJ0aW1lIiwibW91c2UiLCJpbWFnZSIsInN0YXRlIiwibG9hZGluZyIsImFjdGlvbiIsInR5cGUiLCJUSFJFRSIsIlZlY3RvcjIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsIlZlY3RvcjMiLCJlbGFwc2VkIiwidGFyZ2V0IiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwibWFwU3RhdGVUb1Byb3BzIiwid2lkdGgiLCJ4IiwiaGVpZ2h0IiwieSIsImNhbWVyYVBvc2l0aW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwib25Mb2FkZWQiLCJvblJlc2l6ZSIsIm9uVXBkYXRlVGltZSIsIm9uTW92ZU1vdXNlIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsInByb3BzIiwidGV4dHVyZXMiLCJ1cmwiLCJoYW5kbGVJbml0aWFsaXplIiwidGhlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVSZXNpemUiLCJoYW5kbGVNb3VzZU1vdmUiLCJyZXNvbHZlIiwicmVqZWN0IiwibG9hZFRleHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImNyb3NzT3JpZ2luIiwibmFtZSIsInRleHR1cmUiLCJoYW5kbGVBbmltYXRlIiwiTm9ybWFsQmxlbmRpbmciLCJDb21wb25lbnQiLCJyZXNpemVXaW5kb3ciLCJ1cGRhdGVUaW1lIiwibW92ZU1vdXNlIiwibG9hZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVE7QUFDYkMsZ0JBQWUsZUFERjtBQUViQyxhQUFZLFlBRkM7QUFHYkMseUJBQXdCLHdCQUhYO0FBSWJDLFVBQVMsU0FKSTtBQUtiQyxTQUFRLFFBTEs7QUFNYkMsY0FBYTtBQU5BLENBQWQ7a0JBUWVOLEs7Ozs7Ozs7Ozs7Ozs7O0FDUmY7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTU8sUUFBUSw0Q0FBc0Isb0JBQ25DLFFBQU9DLE1BQVAsdURBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFBOEIsT0FBT0EsT0FBT0MsaUJBQWQsS0FBb0MsV0FBbEUsR0FBZ0ZELE9BQU9DLGlCQUFQLEVBQWhGLEdBQTZHO0FBQUEsUUFBS0MsQ0FBTDtBQUFBLENBRDFFLENBQXRCLENBQWQ7O0FBTUEsbUJBQVNDLE1BQVQsQ0FDQztBQUFBO0FBQUEsR0FBVSxPQUFPSixLQUFqQjtBQUNDO0FBREQsQ0FERCxFQUlFSyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBSkYsRTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsNEJBQWdCO0FBQzdCQyxzQkFENkI7QUFFN0JDLGtDQUY2QjtBQUc3QkMsMEJBSDZCO0FBSTdCQyxzQkFKNkI7QUFLN0JDLHdCQUw2QjtBQU03QkM7QUFONkIsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmY7Ozs7OztBQUVBLElBQU1MLE9BQU8sU0FBUEEsSUFBTyxHQUdFO0FBQUEsS0FGZE0sS0FFYyx1RUFGTjtBQUNQQyxXQUFTO0FBREYsRUFFTTtBQUFBLEtBQVhDLE1BQVc7OztBQUVkLFNBQU9BLE9BQU9DLElBQWQ7QUFDQyxPQUFLLHNCQUFNbkIsT0FBWDtBQUNDLFVBQU8sc0JBQWMsRUFBZCxFQUFrQmdCLEtBQWxCLEVBQXlCO0FBQy9CQyxhQUFTO0FBRHNCLElBQXpCLENBQVA7QUFHRCxPQUFLLHNCQUFNaEIsTUFBWDtBQUNDLFVBQU8sc0JBQWMsRUFBZCxFQUFrQmUsS0FBbEIsRUFBeUI7QUFDL0JDLGFBQVM7QUFEc0IsSUFBekIsQ0FBUDtBQUdEO0FBQ0MsVUFBT0QsS0FBUDtBQVZGO0FBYUEsQ0FsQkQ7O2tCQW9CZU4sSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJmOzs7Ozs7QUFFQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsR0FDMkQ7QUFBQSxLQUE3RUssS0FBNkUsdUVBQXJFLElBQUlJLE1BQU1DLE9BQVYsQ0FBa0JqQixPQUFPa0IsVUFBekIsRUFBcUNsQixPQUFPbUIsV0FBNUMsQ0FBcUU7QUFBQSxLQUFYTCxNQUFXOzs7QUFFN0UsU0FBT0EsT0FBT0MsSUFBZDtBQUNDLE9BQUssc0JBQU10QixhQUFYO0FBQ0MsVUFBTyxzQkFBYyxFQUFkLEVBQWtCbUIsS0FBbEIsRUFDTixJQUFJSSxNQUFNQyxPQUFWLENBQWtCakIsT0FBT2tCLFVBQXpCLEVBQXFDbEIsT0FBT21CLFdBQTVDLENBRE0sQ0FBUDtBQUdEO0FBQ0MsVUFBT1AsS0FBUDtBQU5GO0FBU0EsQ0FaRDs7a0JBY2VMLFU7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZjs7Ozs7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLEdBR0E7QUFBQSxLQUZkSSxLQUVjLHVFQUZOO0FBQ1BRLFlBQVUsSUFBSUosTUFBTUssT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QjtBQURILEVBRU07QUFBQSxLQUFYUCxNQUFXOzs7QUFFZCxTQUFPQSxPQUFPQyxJQUFkO0FBQ0M7QUFDQyxVQUFPSCxLQUFQO0FBRkY7QUFLQSxDQVZEOztrQkFZZUosTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RmOzs7Ozs7QUFFQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FHRTtBQUFBLEtBRmRHLEtBRWMsdUVBRk47QUFDUFUsV0FBUztBQURGLEVBRU07QUFBQSxLQUFYUixNQUFXOzs7QUFFZCxTQUFPQSxPQUFPQyxJQUFkO0FBQ0MsT0FBSyxzQkFBTWpCLFdBQVg7QUFDQyxVQUFPLHNCQUFjLEVBQWQsRUFBa0JjLEtBQWxCLEVBQXlCO0FBQy9CVSxhQUFTVixNQUFNVSxPQUFOLEdBQWdCO0FBRE0sSUFBekIsQ0FBUDtBQUdEO0FBQ0MsVUFBT1YsS0FBUDtBQU5GO0FBU0EsQ0FkRDs7a0JBZ0JlSCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7Ozs7OztBQUVBLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxHQUdDO0FBQUEsS0FGZEUsS0FFYyx1RUFGTjtBQUNQVyxVQUFRLElBQUlQLE1BQU1DLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckI7QUFERCxFQUVNO0FBQUEsS0FBWEgsTUFBVzs7O0FBRWQsU0FBT0EsT0FBT0MsSUFBZDtBQUNDLE9BQUssc0JBQU1yQixVQUFYO0FBQ0MsVUFBTyxzQkFBYyxFQUFkLEVBQWtCa0IsS0FBbEIsRUFBeUI7QUFDL0JXLFlBQVEsSUFBSVAsTUFBTUMsT0FBVixDQUNQLENBQUNILE9BQU9VLENBQVAsQ0FBU0MsT0FBVCxHQUFtQnpCLE9BQU9rQixVQUFQLEdBQW9CLENBQXhDLEtBQThDbEIsT0FBT2tCLFVBQVAsR0FBb0IsQ0FBbEUsQ0FETyxFQUVQLENBQUNsQixPQUFPbUIsV0FBUCxHQUFxQixDQUFyQixHQUF5QkwsT0FBT1UsQ0FBUCxDQUFTRSxPQUFuQyxLQUErQzFCLE9BQU9tQixXQUFQLEdBQXFCLENBQXBFLENBRk87QUFEdUIsSUFBekIsQ0FBUDtBQU1EO0FBQ0MsVUFBT1AsS0FBUDtBQVRGO0FBWUEsQ0FqQkQ7O2tCQW1CZUYsSzs7Ozs7Ozs7Ozs7Ozs7O0FDckJmOzs7Ozs7QUFFQSxJQUFNQyxRQUFRLFNBQVJBLEtBQVEsR0FFQztBQUFBLEtBRGRDLEtBQ2MsdUVBRE4sRUFDTTtBQUFBLEtBQVhFLE1BQVc7OztBQUVkLFNBQU9BLE9BQU9DLElBQWQ7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxVQUFPSCxLQUFQO0FBVkY7QUFZQSxDQWhCRDs7a0JBa0JlRCxLOzs7Ozs7Ozs7Ozs7OztBQ3BCZjs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTWdCLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ2YsS0FBRCxFQUFXO0FBQ2xDLFFBQU87QUFDTkMsV0FBU0QsTUFBTU4sSUFBTixDQUFXTyxPQURkO0FBRU5lLFNBQU9oQixNQUFNTCxVQUFOLENBQWlCc0IsQ0FGbEI7QUFHTkMsVUFBUWxCLE1BQU1MLFVBQU4sQ0FBaUJ3QixDQUhuQjtBQUlOQyxrQkFBZ0JwQixNQUFNSixNQUFOLENBQWFZLFFBSnZCO0FBS05YLFFBQU1HLE1BQU1ILElBQU4sQ0FBV2EsT0FMWDtBQU1OWixTQUFPRSxNQUFNRixLQUFOLENBQVlhO0FBTmIsRUFBUDtBQVFBLENBVEQ7O0FBV0EsSUFBTVUscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3hDLFFBQU87QUFDTkMsYUFBVyxxQkFBTTtBQUNoQkMsV0FBUUMsR0FBUixDQUFZLFlBQVo7QUFDQUgsWUFBUyxvQkFBVDtBQUNBLEdBSks7QUFLTkksWUFBVSxvQkFBTTtBQUNmRixXQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBSCxZQUFTLG1CQUFUO0FBQ0EsR0FSSztBQVNOSyxZQUFVLGtCQUFDZixDQUFELEVBQU87QUFDaEJVLFlBQVMsZ0NBQWFWLENBQWIsQ0FBVDtBQUNBLEdBWEs7QUFZTmdCLGdCQUFjLHdCQUFNO0FBQ25CTixZQUFTLDZCQUFUO0FBQ0EsR0FkSztBQWVOTyxlQUFhLHFCQUFDakIsQ0FBRCxFQUFPO0FBQ25CVSxZQUFTLDBCQUFVVixDQUFWLENBQVQ7QUFDQTtBQWpCSyxFQUFQO0FBbUJBLENBcEJEOztBQXNCQSxJQUFNa0IsaUJBQWlCLHlCQUFRZixlQUFSLEVBQXlCTSxrQkFBekIsa0JBQXZCOztrQkFFZVMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ2Y7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQUVNQyxLOzs7QUFFSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUFBLGtJQUNkQSxLQURjOztBQUdwQixRQUFLVCxTQUFMLEdBQW1CLGtCQUFLUyxLQUFMLEVBQVdULFNBQTlCO0FBQ0EsUUFBS0csUUFBTCxHQUFrQixrQkFBS00sS0FBTCxFQUFXTixRQUE3QjtBQUNBLFFBQUtDLFFBQUwsR0FBa0Isa0JBQUtLLEtBQUwsRUFBV0wsUUFBN0I7QUFDQSxRQUFLQyxZQUFMLEdBQXNCLGtCQUFLSSxLQUFMLEVBQVdKLFlBQWpDO0FBQ0EsUUFBS0MsV0FBTCxHQUFxQixrQkFBS0csS0FBTCxFQUFXSCxXQUFoQzs7QUFFQSxRQUFLSSxRQUFMLEdBQWdCO0FBQ2QsV0FBUTtBQUNUQyxTQUFLO0FBREk7QUFETSxHQUFoQjtBQVRvQjtBQWNsQjs7QUFFRDs7Ozt1Q0FFcUI7QUFBQTs7QUFDakIsUUFBS0MsZ0JBQUwsR0FBd0JDLElBQXhCLENBQTZCLFlBQU07QUFDL0JDLGVBQVcsWUFBTTtBQUNiLFlBQUtYLFFBQUw7QUFDSCxLQUZELEVBRUcsR0FGSDtBQUdILElBSkQ7QUFLSDs7O3NDQUVtQjtBQUNyQixRQUFLWSxZQUFMO0FBQ0EsUUFBS0MsZUFBTDtBQUNFOztBQUdEOzs7O3FDQUVtQjtBQUFBOztBQUNsQixRQUFLaEIsU0FBTDtBQUNBLFVBQU8sc0JBQVksVUFBQ2lCLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2QyxXQUFLQyxXQUFMO0FBQ01GO0FBQ04sSUFITSxDQUFQO0FBSUE7OztpQ0FFYztBQUNoQnBELFVBQU91RCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLaEIsUUFBdkMsRUFBaUQsS0FBakQ7QUFDRTs7O29DQUVpQjtBQUNuQnZDLFVBQU91RCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxLQUFLZCxXQUExQyxFQUF1RCxLQUF2RDtBQUNFOzs7a0NBR2U7QUFDWixRQUFLRCxZQUFMO0FBQ0g7OztnQ0FFYTtBQUFBOztBQUNiLE9BQU1nQixTQUFTLElBQUl4QyxNQUFNeUMsYUFBVixFQUFmO0FBQ0FELFVBQU9FLFdBQVAsR0FBcUIsR0FBckI7O0FBRmEsOEJBR0pDLElBSEk7QUFJWkgsV0FBT2xELElBQVAsQ0FBWSxPQUFLdUMsUUFBTCxDQUFjYyxJQUFkLEVBQW9CYixHQUFoQyxFQUFxQyxVQUFDYyxPQUFELEVBQWE7QUFDbEQsWUFBS2YsUUFBTCxDQUFjYyxJQUFkLEVBQW9CQyxPQUFwQixHQUE4QkEsT0FBOUI7QUFDRCxLQUZDO0FBSlk7O0FBR2IsUUFBSyxJQUFJRCxJQUFULElBQWlCLEtBQUtkLFFBQXRCLEVBQWdDO0FBQUEsVUFBdkJjLElBQXVCO0FBSS9CO0FBQ0Q7OzsyQkFJUTtBQUFBLGdCQUNvRCxLQUFLZixLQUR6RDtBQUFBLE9BQ0gvQixPQURHLFVBQ0hBLE9BREc7QUFBQSxPQUNNZSxLQUROLFVBQ01BLEtBRE47QUFBQSxPQUNhRSxNQURiLFVBQ2FBLE1BRGI7QUFBQSxPQUNxQkUsY0FEckIsVUFDcUJBLGNBRHJCO0FBQUEsT0FDcUN2QixJQURyQyxVQUNxQ0EsSUFEckM7QUFBQSxPQUMyQ0MsS0FEM0MsVUFDMkNBLEtBRDNDOzs7QUFHVixPQUFJRyxPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7O0FBRWIsVUFDQztBQUFBO0FBQUE7QUFDQyxpQkFBVyxRQURaO0FBRUMsWUFBT2UsS0FGUjtBQUdDLGFBQVFFLE1BSFQ7QUFJQyxnQkFBYSxLQUFLK0IsYUFBbEIsTUFBYSxJQUFiLENBSkQ7QUFLQyxpQkFBWSxRQUxiO0FBTUMsZ0JBQVc7QUFOWjtBQVFFO0FBQUE7QUFBQTtBQVFEO0FBQ0MsWUFBSyxRQUROO0FBRUMsV0FBSyxFQUZOO0FBR0MsY0FBUWpDLFFBQVFFLE1BSGpCO0FBSUMsWUFBTSxJQUpQO0FBS0MsV0FBSyxJQUxOO0FBTUMsZ0JBQVVFO0FBTlgsT0FSQztBQWtCRDtBQUNDLGdCQUFVLFFBRFg7QUFFQyxtQkFBYSxRQUZkO0FBR0MsaUJBQVc7QUFIWixPQWxCQztBQXVCRDtBQUNDLGFBQU8sUUFEUjtBQUVDLGlCQUFXO0FBRlosT0F2QkM7QUF5Q0Q7QUFBQTtBQUFBLFFBQU0sS0FBSSxXQUFWO0FBQ0M7QUFDQyxjQUFPLENBRFI7QUFFQyxlQUFRO0FBRlQsUUFERDtBQUtDO0FBQUE7QUFBQTtBQUNDLHFDQUREO0FBRUMsdUNBRkQ7QUFHQyxrQkFBVWhCLE1BQU04QztBQUhqQjtBQUtDO0FBQUE7QUFBQTtBQUNDLG1EQUFTLE1BQU0sU0FBZixFQUEwQixNQUFNLEdBQWhDLEVBQXFDLE9BQU8sS0FBS2pCLFFBQUwsQ0FBYyxNQUFkLEVBQXNCZSxPQUFsRSxHQUREO0FBRUMsbURBQVMsTUFBTSxNQUFmLEVBQXVCLE1BQU0sR0FBN0IsRUFBa0MsT0FBT25ELElBQXpDLEdBRkQ7QUFHQyxtREFBUyxNQUFNLE9BQWYsRUFBd0IsTUFBTSxNQUE5QixFQUFzQyxPQUFPQyxLQUE3QztBQUhEO0FBTEQ7QUFMRDtBQXpDQztBQVJGLElBREQ7QUF3RUU7OztFQWxKaUIsZ0JBQU1xRCxTOztrQkFxSlhwQixLOzs7Ozs7OztBQzNKZixtQ0FBbUMsaUJBQWlCLGFBQWEsNERBQTRELGdEQUFnRCxHQUFHLEc7Ozs7Ozs7QUNBaEwsbUNBQW1DLDhCQUE4QixxQkFBcUIscUJBQXFCLGlCQUFpQixrQkFBa0IsdUJBQXVCLG9DQUFvQyx5QkFBeUIsMEJBQTBCLGlDQUFpQyxzQkFBc0IsZ0RBQWdELGlDQUFpQywrQkFBK0IsMEJBQTBCLDJFQUEyRSw2Q0FBNkMsK0ZBQStGLHVDQUF1Qyx3REFBd0Qsd0NBQXdDLHNDQUFzQyxLQUFLLGdEQUFnRCwyQkFBMkIsR0FBRyxHOzs7Ozs7Ozs7Ozs7Ozs7QUNBcDVCOzs7Ozs7QUFFTyxJQUFNcUIsc0NBQWUsU0FBZkEsWUFBZSxDQUFDeEMsQ0FBRCxFQUFPO0FBQ2xDLFFBQU87QUFDTlQsUUFBTSxzQkFBTXRCLGFBRE47QUFFTitCLEtBQUdBO0FBRkcsRUFBUDtBQUlBLENBTE0sQzs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVPLElBQU15QyxrQ0FBYSxTQUFiQSxVQUFhLEdBQU07QUFDL0IsUUFBTztBQUNObEQsUUFBTSxzQkFBTWpCO0FBRE4sRUFBUDtBQUdBLENBSk0sQzs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVPLElBQU1vRSxnQ0FBWSxTQUFaQSxTQUFZLENBQUMxQyxDQUFELEVBQU87QUFDL0IsUUFBTztBQUNOVCxRQUFNLHNCQUFNckIsVUFETjtBQUVOOEIsS0FBR0E7QUFGRyxFQUFQO0FBSUEsQ0FMTSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7Ozs7O0FBRU8sSUFBTVgsNEJBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQzVCLFFBQU87QUFDTkUsUUFBTSxzQkFBTW5CO0FBRE4sRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTXVFLDBCQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUMzQixRQUFPO0FBQ05wRCxRQUFNLHNCQUFNbEI7QUFETixFQUFQO0FBR0EsQ0FKTSxDIiwiZmlsZSI6ImFzc2V0cy9qcy9wYWdlcy9yaXBwbGUuNWNlN2FiZDVhNGQ1YWQ3MWMxY2QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRNT1ZFX01PVVNFOiAnTU9WRV9NT1VTRScsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0TE9BRElORzogJ0xPQURJTkcnLFxuXHRMT0FERUQ6ICdMT0FERUQnLFxuXHRVUERBVEVfVElNRTogJ1VQREFURV9USU1FJyxcbn1cbmV4cG9ydCBkZWZhdWx0IFR5cGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsImltcG9ydCAnLi4vLi4vc3R5bHVzL3N0eWxlLnN0eWwnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXInXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGNvbXBvc2UoXG5cdHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gIT09ICd1bmRlZmluZWQnID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbikpO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8SW1hZ2VDb250YWluZXIvPlxuXHQ8L1Byb3ZpZGVyPlxuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUvaW5kZXguanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZCdcbmltcG9ydCB3aW5kb3dTaXplIGZyb20gJy4vd2luZG93U2l6ZSdcbmltcG9ydCBjYW1lcmEgZnJvbSAnLi9jYW1lcmEnXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnXG5pbXBvcnQgbW91c2UgZnJvbSAnLi9tb3VzZSdcbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2FkLFxuICB3aW5kb3dTaXplLFxuICBjYW1lcmEsXG4gIHRpbWUsXG4gIG1vdXNlLFxuICBpbWFnZSxcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgbG9hZCA9IChcblx0c3RhdGUgPSB7XG5cdFx0bG9hZGluZzogdHJ1ZVxuXHR9LCBhY3Rpb24pID0+IHtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFR5cGVzLkxPQURJTkc6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdH0pXG5cdFx0Y2FzZSBUeXBlcy5MT0FERUQ6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHR9KVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUvcmVkdWNlcnMvbG9hZC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHdpbmRvd1NpemUgPSAoXG5cdHN0YXRlID0gbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVHlwZXMuUkVTSVpFX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSxcblx0XHRcdFx0bmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblx0XHRcdClcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aW5kb3dTaXplXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlL3JlZHVjZXJzL3dpbmRvd1NpemUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBjYW1lcmEgPSAoXG5cdHN0YXRlID0ge1xuXHRcdHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCA1KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FtZXJhXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlL3JlZHVjZXJzL2NhbWVyYS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHRpbWUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGVsYXBzZWQ6IDAuMCxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5VUERBVEVfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICsgMC4wMVxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlL3JlZHVjZXJzL3RpbWUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBtb3VzZSA9IChcblx0c3RhdGUgPSB7XG5cdFx0dGFyZ2V0OiBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5NT1ZFX01PVVNFOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdHRhcmdldDogbmV3IFRIUkVFLlZlY3RvcjIoXG5cdFx0XHRcdFx0KGFjdGlvbi5lLmNsaWVudFggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC8gKHdpbmRvdy5pbm5lcldpZHRoIC8gMiksXG5cdFx0XHRcdFx0KHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBhY3Rpb24uZS5jbGllbnRZKSAvICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSxcblx0XHRcdFx0KSxcblx0XHRcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbW91c2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUvcmVkdWNlcnMvbW91c2UuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5jb25zdCBpbWFnZSA9IChcblx0c3RhdGUgPSB7XG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXHRcdC8vIGNhc2UgVHlwZXMuTE9BRElORzpcblx0XHQvLyBcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdC8vIFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdC8vIFx0fSlcblx0XHQvLyBjYXNlIFR5cGVzLkxPQURFRDpcblx0XHQvLyBcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdC8vIFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHQvLyBcdH0pXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlL3JlZHVjZXJzL2ltYWdlLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXG5cbmltcG9ydCB7cmVzaXplV2luZG93fSBmcm9tICcuLi9hY3Rpb25zL3Jlc2l6ZVdpbmRvdydcbmltcG9ydCB7dXBkYXRlVGltZX0gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGVUaW1lJ1xuaW1wb3J0IHttb3ZlTW91c2V9IGZyb20gJy4uL2FjdGlvbnMvbW92ZU1vdXNlJ1xuaW1wb3J0IHtsb2FkaW5nLCBsb2FkZWR9IGZyb20gJy4uL2FjdGlvbnMvbG9hZCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0bG9hZGluZzogc3RhdGUubG9hZC5sb2FkaW5nLFxuXHRcdHdpZHRoOiBzdGF0ZS53aW5kb3dTaXplLngsXG5cdFx0aGVpZ2h0OiBzdGF0ZS53aW5kb3dTaXplLnksXG5cdFx0Y2FtZXJhUG9zaXRpb246IHN0YXRlLmNhbWVyYS5wb3NpdGlvbixcblx0XHR0aW1lOiBzdGF0ZS50aW1lLmVsYXBzZWQsXG5cdFx0bW91c2U6IHN0YXRlLm1vdXNlLnRhcmdldCxcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRvbkxvYWRpbmc6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRpbmcoKSlcblx0XHR9LFxuXHRcdG9uTG9hZGVkOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbG9hZGVkLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRlZCgpKVxuXHRcdH0sXG5cdFx0b25SZXNpemU6IChlKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChyZXNpemVXaW5kb3coZSkpXG5cdFx0fSxcblx0XHRvblVwZGF0ZVRpbWU6ICgpID0+IHtcblx0XHRcdGRpc3BhdGNoKHVwZGF0ZVRpbWUoKSlcblx0XHR9LFxuXHRcdG9uTW92ZU1vdXNlOiAoZSkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gobW92ZU1vdXNlKGUpKVxuXHRcdH0sXG5cdH1cbn1cblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbWFnZSlcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb250YWluZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUvY29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInXG5cbmltcG9ydCB2cyBmcm9tICcuLi9nbHNsL2ltYWdlLnZlcnQnXG5pbXBvcnQgZnMgZnJvbSAnLi4vZ2xzbC9pbWFnZS5mcmFnJ1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0c3VwZXIocHJvcHMpXG5cblx0dGhpcy5vbkxvYWRpbmcgPSA6OnRoaXMucHJvcHMub25Mb2FkaW5nXG5cdHRoaXMub25Mb2FkZWQgPSA6OnRoaXMucHJvcHMub25Mb2FkZWRcblx0dGhpcy5vblJlc2l6ZSA9IDo6dGhpcy5wcm9wcy5vblJlc2l6ZVxuXHR0aGlzLm9uVXBkYXRlVGltZSA9IDo6dGhpcy5wcm9wcy5vblVwZGF0ZVRpbWVcblx0dGhpcy5vbk1vdmVNb3VzZSA9IDo6dGhpcy5wcm9wcy5vbk1vdmVNb3VzZVxuXG5cdHRoaXMudGV4dHVyZXMgPSB7XG5cdCAgXCJtYWluXCI6IHtcblx0XHR1cmw6IFwiLi4vYXNzZXRzL2ltZy9yaXBwbGUvY2F0LmpwZ1wiXG5cdCAgfVxuXHR9XG4gIH1cblxuICAvKiBMaWZlQ3ljbGUgKi9cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLmhhbmRsZUluaXRpYWxpemUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5vbkxvYWRlZCgpXG4gICAgICAgICAgfSwgMzAwKVxuICAgICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHR0aGlzLmhhbmRsZVJlc2l6ZSgpXG5cdHRoaXMuaGFuZGxlTW91c2VNb3ZlKClcbiAgfVxuXG5cbiAgLyogY3VzdG9tIEZ1bmN0aW9uICAqL1xuXG4gIGhhbmRsZUluaXRpYWxpemUoKSB7XG5cdCAgdGhpcy5vbkxvYWRpbmcoKVxuXHQgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0ICB0aGlzLmxvYWRUZXh0dXJlKClcbiAgICAgICAgICByZXNvbHZlKClcblx0ICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc2l6ZSgpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdmVNb3VzZSwgZmFsc2UpXG4gIH1cblxuXG4gIGhhbmRsZUFuaW1hdGUoKSB7XG4gICAgICB0aGlzLm9uVXBkYXRlVGltZSgpXG4gIH1cblxuICBsb2FkVGV4dHVyZSgpIHtcblx0ICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpXG5cdCAgbG9hZGVyLmNyb3NzT3JpZ2luID0gJyonXG5cdCAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLnRleHR1cmVzKSB7XG5cdFx0ICBsb2FkZXIubG9hZCh0aGlzLnRleHR1cmVzW25hbWVdLnVybCwgKHRleHR1cmUpID0+IHtcblx0XHQgIHRoaXMudGV4dHVyZXNbbmFtZV0udGV4dHVyZSA9IHRleHR1cmVcblx0XHR9KTtcblx0ICB9XG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuXHRjb25zdCB7bG9hZGluZywgd2lkdGgsIGhlaWdodCwgY2FtZXJhUG9zaXRpb24sIHRpbWUsIG1vdXNlfSA9IHRoaXMucHJvcHNcblxuXHRpZiAobG9hZGluZykgcmV0dXJuKDxoMj5Mb2FkaW5nLi4uPC9oMj4pXG5cblx0cmV0dXJuKFxuXHRcdDxSZWFjdDNcblx0XHRcdG1haW5DYW1lcmE9XCJjYW1lcmFcIlxuXHRcdFx0d2lkdGg9e3dpZHRofVxuXHRcdFx0aGVpZ2h0PXtoZWlnaHR9XG5cdFx0XHRvbkFuaW1hdGU9ezo6dGhpcy5oYW5kbGVBbmltYXRlfVxuXHRcdFx0Y2xlYXJDb2xvcj17MHgyMjIyMjJ9XG5cdFx0XHRhbnRpYWxpYXM9e3RydWV9XG5cdFx0PlxuXHRcdCAgPHNjZW5lXG5cdFx0XHQvLyBmb2c9e25ldyBUSFJFRS5Gb2coMHgyMjIyMjIsIDAuNiwgMi44KX1cblx0XHQgID5cblxuXHRcdFx0ey8qIEhlbHBlciAqL31cblx0XHRcdHsvKiA8YXhpc0hlbHBlciAvPiAqL31cblxuXHRcdFx0ey8qIENhbWVyYSAqL31cblx0XHRcdDxwZXJzcGVjdGl2ZUNhbWVyYVxuXHRcdFx0XHRuYW1lPVwiY2FtZXJhXCJcblx0XHRcdFx0Zm92PXsxNX1cblx0XHRcdFx0YXNwZWN0PXt3aWR0aCAvIGhlaWdodH1cblx0XHRcdFx0bmVhcj17MC4wMX1cblx0XHRcdFx0ZmFyPXsxMDAwfVxuXHRcdFx0XHRwb3NpdGlvbj17Y2FtZXJhUG9zaXRpb259XG5cdFx0XHQvPlxuXG5cdFx0XHR7LyogTGlnaHQgKi99XG5cdFx0XHQ8aGVtaXNwaGVyZUxpZ2h0XG5cdFx0XHRcdHNreUNvbG9yPXsweGZmZmZiYn1cblx0XHRcdFx0Z3JvdW5kQ29sb3I9ezB4ODg3OTc5fVxuXHRcdFx0XHRpbnRlbnNpdHk9ezAuOX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGlyZWN0aW9uYWxMaWdodFxuXHRcdFx0XHRjb2xvcj17MHhmZmZmZmZ9XG5cdFx0XHRcdGludGVuc2l0eT17MC44fVxuXHRcdFx0Lz5cblxuXHRcdFx0ey8qIGhlbHBlciBNZXNoKi99XG5cdFx0XHR7LyogPG1lc2g+XG5cdFx0XHQgIDxib3hHZW9tZXRyeVxuXHRcdFx0XHR3aWR0aD17MX1cblx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRkZXB0aD17MX1cblx0XHRcdCAgLz5cblx0XHRcdCAgPG1lc2hCYXNpY01hdGVyaWFsXG5cdFx0XHRcdGNvbG9yPXsweGVlZWVlZX1cblx0XHRcdCAgLz5cblx0XHRcdDwvbWVzaD4gKi99XG5cblx0XHRcdHsvKiBJbWFnZSBNZXNoICovfVxuXHRcdFx0PG1lc2ggcmVmPSdpbWFnZU1lc2gnPlxuXHRcdFx0XHQ8cGxhbmVHZW9tZXRyeVxuXHRcdFx0XHRcdHdpZHRoPXsxfVxuXHRcdFx0XHRcdGhlaWdodD17MX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PHNoYWRlck1hdGVyaWFsXG5cdFx0XHRcdFx0dmVydGV4U2hhZGVyPXt2c31cblx0XHRcdFx0XHRmcmFnbWVudFNoYWRlcj17ZnN9XG5cdFx0XHRcdFx0YmxlbmRpbmc9e1RIUkVFLk5vcm1hbEJsZW5kaW5nfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHVuaWZvcm1zPlxuXHRcdFx0XHRcdFx0PHVuaWZvcm0gbmFtZT17J3RleHR1cmUnfSB0eXBlPXsndCd9IHZhbHVlPXt0aGlzLnRleHR1cmVzWydtYWluJ10udGV4dHVyZX0gLz5cblx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eyd0aW1lJ30gdHlwZT17J2YnfSB2YWx1ZT17dGltZX0gLz5cblx0XHRcdFx0XHRcdDx1bmlmb3JtIG5hbWU9eydtb3VzZSd9IHR5cGU9eyd2ZWMyJ30gdmFsdWU9e21vdXNlfSAvPlxuXHRcdFx0XHRcdDwvdW5pZm9ybXM+XG5cdFx0XHRcdDwvc2hhZGVyTWF0ZXJpYWw+XG5cblx0XHRcdDwvbWVzaD5cblxuXHRcdCAgPC9zY2VuZT5cblx0XHQ8L1JlYWN0Mz5cblx0ICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUvY29tcG9uZW50cy9JbWFnZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvcmlwcGxlL2dsc2wvaW1hZ2UudmVydFxuLy8gbW9kdWxlIGlkID0gNTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIm1vZHVsZS5leHBvcnRzID0gXCJ2YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxudW5pZm9ybSBmbG9hdCB0aW1lO1xcbnVuaWZvcm0gdmVjMiBtb3VzZTtcXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0dmVjMiB1diA9IHZVdjtcXG5cXHR2ZWMyIHRleENvb3JkID0gdXY7XFxuXFx0dmVjMiBkZXBhcnR1cmUgPSB2ZWMyKDAuNSwgMC41KTtcXG5cXHRmbG9hdCBpbnRlcnZhbCA9IDEuNTtcXG5cXHRmbG9hdCBhbXBsaXR1ZGUgPSAxLjI7XFxuXFx0ZmxvYXQgd2F2ZUxlbmd0aE9mZnNldCA9IDAuMTtcXG5cXHRmbG9hdCBzcGVlZCA9IDAuODtcXG5cXHRmbG9hdCBlbGFwc2VkID0gbW9kKHRpbWUgKiBzcGVlZCwgaW50ZXJ2YWwpO1xcblxcblxcdC8vIGZsb2F0IGZyZXF1ZW5jeSA9IDEwMC4wO1xcblxcdC8vIGZsb2F0IGFtcGxpdHVkZSA9IDAuMDAzO1xcblxcdC8vIGZsb2F0IHNwZWVkID0gNTAuMDtcXG5cXHQvLyBmbG9hdCBkaXN0b3J0aW9uID0gc2luKHV2LnkgKiBmcmVxdWVuY3kgKyB0aW1lICogc3BlZWQpICogYW1wbGl0dWRlO1xcblxcblxcblxcdGZsb2F0IGRpc3QgPSBkaXN0YW5jZSh1diwgZGVwYXJ0dXJlKTtcXG5cXG5cXHRpZiAoIChkaXN0IDw9IChlbGFwc2VkICsgd2F2ZUxlbmd0aE9mZnNldCkpICYmIChkaXN0ID49IChlbGFwc2VkIC0gd2F2ZUxlbmd0aE9mZnNldCkpICkge1xcblxcdFxcdGZsb2F0IGRpZmYgPSBhYnMoZWxhcHNlZCAtIGRpc3QpO1xcblxcdFxcdGZsb2F0IHBvd0RpZmYgPSAxLjAgLSBwb3coKGRpZmYqMTAuMCksIGFtcGxpdHVkZSk7XFxuXFxuXFx0XFx0ZmxvYXQgZGlmZlRpbWUgPSBkaWZmICogcG93RGlmZjtcXG5cXHRcXHR0ZXhDb29yZCA9IHV2ICsgKHV2ICogZGlmZlRpbWUpO1xcblxcdH1cXG5cXG5cXHR2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUsIHRleENvb3JkKTtcXG5cXG5cXHRnbF9GcmFnQ29sb3IgPSBjb2xvcjtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9yaXBwbGUvZ2xzbC9pbWFnZS5mcmFnXG4vLyBtb2R1bGUgaWQgPSA1NjRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZVdpbmRvdyA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUkVTSVpFX1dJTkRPVyxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuVVBEQVRFX1RJTUUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUvYWN0aW9ucy91cGRhdGVUaW1lLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IG1vdmVNb3VzZSA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTU9WRV9NT1VTRSxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmlwcGxlL2FjdGlvbnMvbW92ZU1vdXNlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTE9BRElOR1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZWQgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTE9BREVEXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yaXBwbGUvYWN0aW9ucy9sb2FkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==