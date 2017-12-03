webpackJsonp([5],{

/***/ 232:
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

var _reducers = __webpack_require__(460);

var _reducers2 = _interopRequireDefault(_reducers);

var _TubeContainer = __webpack_require__(466);

var _TubeContainer2 = _interopRequireDefault(_TubeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : function (f) {
	return f;
}));

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(_TubeContainer2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Types = {
	RESIZE_WINDOW: 'RESIZE_WINDOW',
	MOVE_MOUSE: 'MOVE_MOUSE',
	UPDATE_CAMERA_POSITION: 'UPDATE_CAMERA_POSITION',
	UPDATE_MATERIAL_OFFSET: 'UPDATE_MATERIAL_OFFSET',
	INITIALIZE_CURVE: 'INITIALIZE_CURVE',
	UPDATE_CURVE: 'UPDATE_CURVE',
	LOADING: 'LOADING',
	LOADED: 'LOADED'
};
exports.default = Types;

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(25);

var _load = __webpack_require__(461);

var _load2 = _interopRequireDefault(_load);

var _tube = __webpack_require__(465);

var _tube2 = _interopRequireDefault(_tube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  load: _load2.default,
  tube: _tube2.default
});

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(42);

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

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(42);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tube = function tube() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
		curve: null,
		materialOffset: new THREE.Vector2(0, 0),
		mouse: {
			position: new THREE.Vector2(0, 0),
			target: new THREE.Vector2(0, 0)
		},
		camera: {
			position: new THREE.Vector3(0, 0, 0.35),
			rotation: new THREE.Euler()
		},
		windowSize: new THREE.Vector2(window.innerWidth, window.innerHeight)
	};
	var action = arguments[1];


	switch (action.type) {

		case _actiontypes2.default.INITIALIZE_CURVE:
			return (0, _assign2.default)({}, state, {
				curve: action.curve
			});

		case _actiontypes2.default.UPDATE_CURVE:
			state.curve.points[2].x = -state.mouse.position.x * 0.1;
			state.curve.points[4].x = -state.mouse.position.x * 0.1;
			state.curve.points[2].y = state.mouse.position.y * 0.1;

		// return Object.assign({}, state, {
		// 	materialOffset: new THREE.Vector2(
		// 		state.materialOffset.x + 0.02,
		// 		0,
		// 	),
		// })

		case _actiontypes2.default.UPDATE_MATERIAL_OFFSET:
			return (0, _assign2.default)({}, state, {
				materialOffset: new THREE.Vector2(state.materialOffset.x + 0.02, 0)
			});

		case _actiontypes2.default.UPDATE_CAMERA_POSITION:
			return (0, _assign2.default)({}, state, {
				mouse: {
					target: state.mouse.target,
					position: new THREE.Vector2(state.mouse.position.x + (state.mouse.target.x - state.mouse.position.x) / 30, state.mouse.position.y + (state.mouse.target.y - state.mouse.position.y) / 30)
				},
				camera: {
					position: new THREE.Vector3(0, state.mouse.position.x * 0.015, -state.mouse.position * 0.015),
					rotation: new THREE.Euler(0, Math.PI - state.mouse.position.x * 0.06, state.mouse.position.x * 0.2)
				}
			});

		case _actiontypes2.default.RESIZE_WINDOW:
			return (0, _assign2.default)({}, state, {
				windowSize: new THREE.Vector2(window.innerWidth, window.innerHeight)
			});

		case _actiontypes2.default.MOVE_MOUSE:
			return (0, _assign2.default)({}, state, {
				mouse: {
					target: new THREE.Vector2((action.e.clientX - state.windowSize.x / 2) / (state.windowSize.x / 2), (state.windowSize.y / 2 - action.e.clientY) / (state.windowSize.y / 2)),
					position: state.mouse.position
				}
			});

		default:
			return state;
	}
};

exports.default = tube;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(30);

var _Tube = __webpack_require__(467);

var _Tube2 = _interopRequireDefault(_Tube);

var _resizeWindow = __webpack_require__(494);

var _moveMouse = __webpack_require__(495);

var _moveCamera = __webpack_require__(496);

var _material = __webpack_require__(497);

var _initializeCurve = __webpack_require__(498);

var _updateCurve = __webpack_require__(499);

var _load = __webpack_require__(500);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		loading: state.load.loading,
		width: state.tube.windowSize.x,
		height: state.tube.windowSize.y,
		cameraPosition: state.tube.camera.position,
		cameraRotation: state.tube.camera.rotation,
		materialOffset: state.tube.materialOffset,
		curve: state.tube.curve
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
			// console.log('WINDOW_RESIZE')
			dispatch((0, _resizeWindow.resizeWindow)(e));
		},
		onMouseMove: function onMouseMove(e) {
			// console.log('MOVE_MOUSE')
			dispatch((0, _moveMouse.moveMouse)(e));
		},
		onMoveCamera: function onMoveCamera() {
			dispatch((0, _moveCamera.moveCamera)());
		},
		onUpdateMaterialOffset: function onUpdateMaterialOffset() {
			dispatch((0, _material.updateMaterialOffset)());
		},
		onInitializeCurve: function onInitializeCurve() {
			dispatch((0, _initializeCurve.initializeCurve)());
		},
		onUpdateCurve: function onUpdateCurve(geometries) {
			dispatch((0, _updateCurve.updateCurve)(geometries));
		}
	};
};

var TubeContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Tube2.default);

exports.default = TubeContainer;

/***/ }),

/***/ 467:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tube = function (_React$Component) {
	(0, _inherits3.default)(Tube, _React$Component);

	function Tube(props) {
		var _context;

		(0, _classCallCheck3.default)(this, Tube);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Tube.__proto__ || (0, _getPrototypeOf2.default)(Tube)).call(this, props));

		_this.onLoading = (_context = _this.props).onLoading.bind(_context);
		_this.onLoaded = (_context = _this.props).onLoaded.bind(_context);
		_this.onResize = (_context = _this.props).onResize.bind(_context);
		_this.onMouseMove = (_context = _this.props).onMouseMove.bind(_context);
		_this.onMoveCamera = (_context = _this.props).onMoveCamera.bind(_context);
		_this.onUpdateMaterialOffset = (_context = _this.props).onUpdateMaterialOffset.bind(_context);
		_this.onInitializeCurve = (_context = _this.props).onInitializeCurve.bind(_context);
		_this.onUpdateCurve = (_context = _this.props).onUpdateCurve.bind(_context);

		_this.textures = {
			"stone": {
				url: "../assets/img/tube/stonePattern.jpg"
			},
			"stoneBump": {
				url: "../assets/img/tube/stonePatternBump.jpg"
			}
		};
		return _this;
	}

	/* LifeCycle */

	// componentWillMount() {
	//
	// }

	(0, _createClass3.default)(Tube, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.handleInitialize().then(function () {
				_this2.onLoaded();
				_this2.handleCloneTubeGeometry();
			});
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
				_this3.onInitializeCurve();
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
			window.addEventListener('mousemove', this.onMouseMove, false);
		}
	}, {
		key: 'handleCloneTubeGeometry',
		value: function handleCloneTubeGeometry() {
			console.log(this.refs.tubeMesh);
			this.tubeGeometry_o = this.refs.tubeMesh.geometry.clone();
		}
	}, {
		key: 'handleUpdateCurve',
		value: function handleUpdateCurve() {
			this.onUpdateCurve({
				splineGeometry: this.refs.splineMesh.geometry,
				tubeGeometry: this.refs.tubeMesh.geometry,
				tubeGeometry_o: this.tubeGeometry_o
			});
		}
	}, {
		key: 'handleMoveCamera',
		value: function handleMoveCamera() {
			this.onMoveCamera();
		}
	}, {
		key: 'handleUpdateMaterialOffset',
		value: function handleUpdateMaterialOffset() {
			this.onUpdateMaterialOffset();
		}
	}, {
		key: 'handleAnimate',
		value: function handleAnimate() {
			this.handleUpdateCurve();
			this.handleMoveCamera();
			this.handleUpdateMaterialOffset();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    loading = _props.loading,
			    width = _props.width,
			    height = _props.height,
			    cameraPosition = _props.cameraPosition,
			    cameraRotation = _props.cameraRotation,
			    materialOffset = _props.materialOffset,
			    curve = _props.curve;


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
					{
						fog: new THREE.Fog(0x222222, 0.6, 2.8)
					},
					_react2.default.createElement('perspectiveCamera', {
						name: 'camera',
						fov: 15,
						aspect: width / height,
						near: 0.01,
						far: 1000,
						position: cameraPosition,
						rotation: cameraRotation
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
						{ ref: 'splineMesh' },
						_react2.default.createElement('geometry', { vertices: curve.getPoints(70) }),
						_react2.default.createElement('lineBasicMaterial', null)
					),
					_react2.default.createElement(
						'mesh',
						{ ref: 'tubeMesh' },
						_react2.default.createElement('tubeGeometry', {
							path: curve,
							segments: 70,
							radius: 0.02,
							radiusSegments: 50,
							closed: false
						}),
						_react2.default.createElement(
							'meshStandardMaterial',
							{
								side: THREE.BackSide,
								bumpScale: 0.0003
							},
							_react2.default.createElement('texture', {
								slot: 'map',
								url: this.textures.stone.url,
								wrapS: THREE.RepeatWrapping,
								wrapT: THREE.RepeatWrapping,
								repeat: new THREE.Vector2(30, 6),
								offset: materialOffset
							}),
							_react2.default.createElement('texture', {
								slot: 'bumpMap',
								url: this.textures.stoneBump.url,
								wrapS: THREE.RepeatWrapping,
								wrapT: THREE.RepeatWrapping,
								repeat: new THREE.Vector2(30, 6)
							})
						)
					)
				)
			);
		}
	}]);
	return Tube;
}(_react2.default.Component);

exports.default = Tube;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(42);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(42);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveCamera = undefined;

var _actiontypes = __webpack_require__(42);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveCamera = exports.moveCamera = function moveCamera() {
	return {
		type: _actiontypes2.default.UPDATE_CAMERA_POSITION
	};
};

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateMaterialOffset = undefined;

var _actiontypes = __webpack_require__(42);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateMaterialOffset = exports.updateMaterialOffset = function updateMaterialOffset() {
	return {
		type: _actiontypes2.default.UPDATE_MATERIAL_OFFSET
	};
};

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initializeCurve = undefined;

var _actiontypes = __webpack_require__(42);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initializeCurve = exports.initializeCurve = function initializeCurve() {

	/* 初期宣言 */
	var points = [];
	var curvePointNum = 5;

	/* Z軸をずらしつつ、複数の座標を作成し、配列に格納 */
	for (var i = 0; i < curvePointNum; i++) {
		points.push(new THREE.Vector3(0, 0, 2.5 * (i / 4)));
	}
	points[curvePointNum - 1].y = -0.06;

	/* 座標を用いて、間の座標を補完して、カーブの作成 */
	var curve = new THREE.CatmullRomCurve3(points);

	return {
		type: _actiontypes2.default.INITIALIZE_CURVE,
		curve: curve
	};
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateCurve = undefined;

var _actiontypes = __webpack_require__(42);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateCurve = exports.updateCurve = function updateCurve(geometries) {

	var splineGeometry = geometries.splineGeometry;
	var tubeGeometry = geometries.tubeGeometry;
	var tubeGeometry_o = geometries.tubeGeometry_o;

	var index = 0,
	    vertice_o = null,
	    vertice = null;
	// For each vertice of the tube, move it a bit based on the spline
	for (var i = 0, j = tubeGeometry.vertices.length; i < j; i += 1) {
		// Get the original tube vertice
		vertice_o = tubeGeometry_o.vertices[i];
		// Get the visible tube vertice
		vertice = tubeGeometry.vertices[i];
		// Calculate index of the vertice based on the Z axis
		// The tube is made of 50 rings of vertices
		index = Math.floor(i / 50);
		// Update tube vertice
		vertice.x += (vertice_o.x + splineGeometry.vertices[index].x - vertice.x) / 10;
		vertice.y += (vertice_o.y + splineGeometry.vertices[index].y - vertice.y) / 5;
	}

	// Warn ThreeJs that the points have changed
	tubeGeometry.verticesNeedUpdate = true;
	splineGeometry.verticesNeedUpdate = true;

	return {
		type: _actiontypes2.default.UPDATE_CURVE
	};
};

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(42);

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

},[232]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5maW5pdGVkVHViZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5maW5pdGVkVHViZS9jb25zdGFudHMvYWN0aW9udHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZmluaXRlZFR1YmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZmluaXRlZFR1YmUvcmVkdWNlcnMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5maW5pdGVkVHViZS9yZWR1Y2Vycy90dWJlLmpzIiwid2VicGFjazovLy8uL2FwcC9pbmZpbml0ZWRUdWJlL2NvbnRhaW5lcnMvVHViZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5maW5pdGVkVHViZS9jb21wb25lbnRzL1R1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZmluaXRlZFR1YmUvYWN0aW9ucy9yZXNpemVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZmluaXRlZFR1YmUvYWN0aW9ucy9tb3ZlTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZmluaXRlZFR1YmUvYWN0aW9ucy9tb3ZlQ2FtZXJhLmpzIiwid2VicGFjazovLy8uL2FwcC9pbmZpbml0ZWRUdWJlL2FjdGlvbnMvbWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZmluaXRlZFR1YmUvYWN0aW9ucy9pbml0aWFsaXplQ3VydmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZmluaXRlZFR1YmUvYWN0aW9ucy91cGRhdGVDdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5maW5pdGVkVHViZS9hY3Rpb25zL2xvYWQuanMiXSwibmFtZXMiOlsic3RvcmUiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiVHlwZXMiLCJSRVNJWkVfV0lORE9XIiwiTU9WRV9NT1VTRSIsIlVQREFURV9DQU1FUkFfUE9TSVRJT04iLCJVUERBVEVfTUFURVJJQUxfT0ZGU0VUIiwiSU5JVElBTElaRV9DVVJWRSIsIlVQREFURV9DVVJWRSIsIkxPQURJTkciLCJMT0FERUQiLCJsb2FkIiwidHViZSIsInN0YXRlIiwibG9hZGluZyIsImFjdGlvbiIsInR5cGUiLCJjdXJ2ZSIsIm1hdGVyaWFsT2Zmc2V0IiwiVEhSRUUiLCJWZWN0b3IyIiwibW91c2UiLCJwb3NpdGlvbiIsInRhcmdldCIsImNhbWVyYSIsIlZlY3RvcjMiLCJyb3RhdGlvbiIsIkV1bGVyIiwid2luZG93U2l6ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvaW50cyIsIngiLCJ5IiwiTWF0aCIsIlBJIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwibWFwU3RhdGVUb1Byb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJjYW1lcmFQb3NpdGlvbiIsImNhbWVyYVJvdGF0aW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvbkxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwib25Mb2FkZWQiLCJvblJlc2l6ZSIsIm9uTW91c2VNb3ZlIiwib25Nb3ZlQ2FtZXJhIiwib25VcGRhdGVNYXRlcmlhbE9mZnNldCIsIm9uSW5pdGlhbGl6ZUN1cnZlIiwib25VcGRhdGVDdXJ2ZSIsImdlb21ldHJpZXMiLCJUdWJlQ29udGFpbmVyIiwiVHViZSIsInByb3BzIiwidGV4dHVyZXMiLCJ1cmwiLCJoYW5kbGVJbml0aWFsaXplIiwidGhlbiIsImhhbmRsZUNsb25lVHViZUdlb21ldHJ5IiwiaGFuZGxlUmVzaXplIiwiaGFuZGxlTW91c2VNb3ZlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWZzIiwidHViZU1lc2giLCJ0dWJlR2VvbWV0cnlfbyIsImdlb21ldHJ5IiwiY2xvbmUiLCJzcGxpbmVHZW9tZXRyeSIsInNwbGluZU1lc2giLCJ0dWJlR2VvbWV0cnkiLCJoYW5kbGVVcGRhdGVDdXJ2ZSIsImhhbmRsZU1vdmVDYW1lcmEiLCJoYW5kbGVVcGRhdGVNYXRlcmlhbE9mZnNldCIsImhhbmRsZUFuaW1hdGUiLCJGb2ciLCJnZXRQb2ludHMiLCJCYWNrU2lkZSIsInN0b25lIiwiUmVwZWF0V3JhcHBpbmciLCJzdG9uZUJ1bXAiLCJDb21wb25lbnQiLCJyZXNpemVXaW5kb3ciLCJtb3ZlTW91c2UiLCJtb3ZlQ2FtZXJhIiwidXBkYXRlTWF0ZXJpYWxPZmZzZXQiLCJpbml0aWFsaXplQ3VydmUiLCJjdXJ2ZVBvaW50TnVtIiwiaSIsInB1c2giLCJDYXRtdWxsUm9tQ3VydmUzIiwidXBkYXRlQ3VydmUiLCJpbmRleCIsInZlcnRpY2VfbyIsInZlcnRpY2UiLCJqIiwidmVydGljZXMiLCJsZW5ndGgiLCJmbG9vciIsInZlcnRpY2VzTmVlZFVwZGF0ZSIsImxvYWRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSw0Q0FBc0Isb0JBQ25DLFFBQU9DLE1BQVAsdURBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFBOEIsT0FBT0EsT0FBT0MsaUJBQWQsS0FBb0MsV0FBbEUsR0FBZ0ZELE9BQU9DLGlCQUFQLEVBQWhGLEdBQTZHO0FBQUEsUUFBS0MsQ0FBTDtBQUFBLENBRDFFLENBQXRCLENBQWQ7O0FBTUEsbUJBQVNDLE1BQVQsQ0FDQztBQUFBO0FBQUEsR0FBVSxPQUFPSixLQUFqQjtBQUNDO0FBREQsQ0FERCxFQUlFSyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBSkYsRTs7Ozs7Ozs7Ozs7OztBQ2pCQSxJQUFNQyxRQUFRO0FBQ2JDLGdCQUFlLGVBREY7QUFFYkMsYUFBWSxZQUZDO0FBR2JDLHlCQUF3Qix3QkFIWDtBQUliQyx5QkFBd0Isd0JBSlg7QUFLYkMsbUJBQWtCLGtCQUxMO0FBTWJDLGVBQWMsY0FORDtBQU9iQyxVQUFTLFNBUEk7QUFRYkMsU0FBUTtBQVJLLENBQWQ7a0JB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TztBQUNORSxRQUFNLHNCQUFNUDtBQUROLEVBQVA7QUFHQSxDQUpNOztBQU1BLElBQU1rRywwQkFBUyxTQUFUQSxNQUFTLEdBQU07QUFDM0IsUUFBTztBQUNOM0YsUUFBTSxzQkFBTU47QUFETixFQUFQO0FBR0EsQ0FKTSxDIiwiZmlsZSI6ImFzc2V0cy9qcy9wYWdlcy9pbmZpbml0ZWRUdWJlLmJkNmU4N2E1ZTQ4ZDk4NTI5MzkwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi8uLi9zdHlsdXMvc3R5bGUuc3R5bCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IFR1YmVDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL1R1YmVDb250YWluZXInXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGNvbXBvc2UoXG5cdHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24gIT09ICd1bmRlZmluZWQnID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbikpO1xuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8VHViZUNvbnRhaW5lci8+XG5cdDwvUHJvdmlkZXI+XG4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZmluaXRlZFR1YmUvaW5kZXguanMiLCJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRNT1ZFX01PVVNFOiAnTU9WRV9NT1VTRScsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0VVBEQVRFX01BVEVSSUFMX09GRlNFVDogJ1VQREFURV9NQVRFUklBTF9PRkZTRVQnLFxuXHRJTklUSUFMSVpFX0NVUlZFOiAnSU5JVElBTElaRV9DVVJWRScsXG5cdFVQREFURV9DVVJWRTogJ1VQREFURV9DVVJWRScsXG5cdExPQURJTkc6ICdMT0FESU5HJyxcblx0TE9BREVEOiAnTE9BREVEJyxcbn1cbmV4cG9ydCBkZWZhdWx0IFR5cGVzXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5maW5pdGVkVHViZS9jb25zdGFudHMvYWN0aW9udHlwZXMuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZCdcbmltcG9ydCB0dWJlIGZyb20gJy4vdHViZSdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbG9hZCxcbiAgdHViZSxcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5maW5pdGVkVHViZS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGxvYWQgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGxvYWRpbmc6IHRydWVcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5maW5pdGVkVHViZS9yZWR1Y2Vycy9sb2FkLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuY29uc3QgdHViZSA9IChcblx0c3RhdGUgPSB7XG5cdFx0Y3VydmU6IG51bGwsXG5cdFx0bWF0ZXJpYWxPZmZzZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApLFxuXHRcdG1vdXNlOiB7XG5cdFx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjIoMCwgMCksXG5cdFx0XHR0YXJnZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApLFxuXHRcdH0sXG5cdFx0Y2FtZXJhOiB7XG5cdFx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMC4zNSksXG5cdFx0XHRyb3RhdGlvbjogbmV3IFRIUkVFLkV1bGVyKCksXG5cdFx0fSxcblx0XHR3aW5kb3dTaXplOiBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblxuXG5cdHN3aXRjaChhY3Rpb24udHlwZSkge1xuXG5cdFx0Y2FzZSBUeXBlcy5JTklUSUFMSVpFX0NVUlZFOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGN1cnZlOiBhY3Rpb24uY3VydmUsXG5cdFx0XHR9KVxuXG5cdFx0Y2FzZSBUeXBlcy5VUERBVEVfQ1VSVkU6XG5cdFx0XHRzdGF0ZS5jdXJ2ZS5wb2ludHNbMl0ueCA9IC1zdGF0ZS5tb3VzZS5wb3NpdGlvbi54ICogMC4xO1xuXHRcdFx0c3RhdGUuY3VydmUucG9pbnRzWzRdLnggPSAtc3RhdGUubW91c2UucG9zaXRpb24ueCAqIDAuMTtcblx0XHRcdHN0YXRlLmN1cnZlLnBvaW50c1syXS55ID0gc3RhdGUubW91c2UucG9zaXRpb24ueSAqIDAuMTtcblxuXHRcdFx0Ly8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHQvLyBcdG1hdGVyaWFsT2Zmc2V0OiBuZXcgVEhSRUUuVmVjdG9yMihcblx0XHRcdC8vIFx0XHRzdGF0ZS5tYXRlcmlhbE9mZnNldC54ICsgMC4wMixcblx0XHRcdC8vIFx0XHQwLFxuXHRcdFx0Ly8gXHQpLFxuXHRcdFx0Ly8gfSlcblxuXHRcdGNhc2UgVHlwZXMuVVBEQVRFX01BVEVSSUFMX09GRlNFVDpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRtYXRlcmlhbE9mZnNldDogbmV3IFRIUkVFLlZlY3RvcjIoXG5cdFx0XHRcdFx0c3RhdGUubWF0ZXJpYWxPZmZzZXQueCArIDAuMDIsXG5cdFx0XHRcdFx0MCxcblx0XHRcdFx0KSxcblx0XHRcdH0pXG5cblx0XHRjYXNlIFR5cGVzLlVQREFURV9DQU1FUkFfUE9TSVRJT046XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0bW91c2U6IHtcblx0XHRcdFx0XHR0YXJnZXQ6IHN0YXRlLm1vdXNlLnRhcmdldCxcblx0XHRcdFx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjIoXG5cdFx0XHRcdFx0XHRzdGF0ZS5tb3VzZS5wb3NpdGlvbi54ICsgKHN0YXRlLm1vdXNlLnRhcmdldC54IC0gc3RhdGUubW91c2UucG9zaXRpb24ueCkgLyAzMCxcblx0XHRcdFx0XHRcdHN0YXRlLm1vdXNlLnBvc2l0aW9uLnkgKyAoc3RhdGUubW91c2UudGFyZ2V0LnkgLSBzdGF0ZS5tb3VzZS5wb3NpdGlvbi55KSAvIDMwXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjYW1lcmE6IHtcblx0XHRcdFx0XHRwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoXG5cdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0c3RhdGUubW91c2UucG9zaXRpb24ueCAqIDAuMDE1LFxuXHRcdFx0XHRcdFx0LXN0YXRlLm1vdXNlLnBvc2l0aW9uICogMC4wMTUsXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRyb3RhdGlvbjogbmV3IFRIUkVFLkV1bGVyKFxuXHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdE1hdGguUEkgLSBzdGF0ZS5tb3VzZS5wb3NpdGlvbi54ICogMC4wNixcblx0XHRcdFx0XHRcdHN0YXRlLm1vdXNlLnBvc2l0aW9uLnggKiAwLjIsXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cblxuXHRcdGNhc2UgVHlwZXMuUkVTSVpFX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR3aW5kb3dTaXplOiBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdFx0fSlcblxuXG5cblx0XHRjYXNlIFR5cGVzLk1PVkVfTU9VU0U6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0bW91c2U6IHtcblx0XHRcdFx0XHR0YXJnZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdFx0KGFjdGlvbi5lLmNsaWVudFggLSBzdGF0ZS53aW5kb3dTaXplLnggLyAyKSAvIChzdGF0ZS53aW5kb3dTaXplLnggLyAyKSxcblx0XHRcdFx0XHRcdChzdGF0ZS53aW5kb3dTaXplLnkgLyAyIC0gYWN0aW9uLmUuY2xpZW50WSkgLyAoc3RhdGUud2luZG93U2l6ZS55IC8gMiksXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRwb3NpdGlvbjogc3RhdGUubW91c2UucG9zaXRpb25cblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB0dWJlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5maW5pdGVkVHViZS9yZWR1Y2Vycy90dWJlLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFR1YmUgZnJvbSAnLi4vY29tcG9uZW50cy9UdWJlJ1xuXG5pbXBvcnQge3Jlc2l6ZVdpbmRvd30gZnJvbSAnLi4vYWN0aW9ucy9yZXNpemVXaW5kb3cnXG5pbXBvcnQge21vdmVNb3VzZX0gZnJvbSAnLi4vYWN0aW9ucy9tb3ZlTW91c2UnXG5pbXBvcnQge21vdmVDYW1lcmF9IGZyb20gJy4uL2FjdGlvbnMvbW92ZUNhbWVyYSdcbmltcG9ydCB7dXBkYXRlTWF0ZXJpYWxPZmZzZXR9IGZyb20gJy4uL2FjdGlvbnMvbWF0ZXJpYWwnXG5pbXBvcnQge2luaXRpYWxpemVDdXJ2ZX0gZnJvbSAnLi4vYWN0aW9ucy9pbml0aWFsaXplQ3VydmUnXG5pbXBvcnQge3VwZGF0ZUN1cnZlfSBmcm9tICcuLi9hY3Rpb25zL3VwZGF0ZUN1cnZlJ1xuaW1wb3J0IHtsb2FkaW5nLCBsb2FkZWR9IGZyb20gJy4uL2FjdGlvbnMvbG9hZCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0bG9hZGluZzogc3RhdGUubG9hZC5sb2FkaW5nLFxuXHRcdHdpZHRoOiBzdGF0ZS50dWJlLndpbmRvd1NpemUueCxcblx0XHRoZWlnaHQ6IHN0YXRlLnR1YmUud2luZG93U2l6ZS55LFxuXHRcdGNhbWVyYVBvc2l0aW9uOiBzdGF0ZS50dWJlLmNhbWVyYS5wb3NpdGlvbixcblx0XHRjYW1lcmFSb3RhdGlvbjogc3RhdGUudHViZS5jYW1lcmEucm90YXRpb24sXG5cdFx0bWF0ZXJpYWxPZmZzZXQ6IHN0YXRlLnR1YmUubWF0ZXJpYWxPZmZzZXQsXG5cdFx0Y3VydmU6IHN0YXRlLnR1YmUuY3VydmVcblx0fVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcblx0cmV0dXJuIHtcblx0XHRvbkxvYWRpbmc6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdMb2FkaW5nLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRpbmcoKSlcblx0XHR9LFxuXHRcdG9uTG9hZGVkOiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbG9hZGVkLi4uJylcblx0XHRcdGRpc3BhdGNoKGxvYWRlZCgpKVxuXHRcdH0sXG5cdFx0b25SZXNpemU6IChlKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnV0lORE9XX1JFU0laRScpXG5cdFx0XHRkaXNwYXRjaChyZXNpemVXaW5kb3coZSkpXG5cdFx0fSxcblx0XHRvbk1vdXNlTW92ZTogKGUpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdNT1ZFX01PVVNFJylcblx0XHRcdGRpc3BhdGNoKG1vdmVNb3VzZShlKSlcblx0XHR9LFxuXHRcdG9uTW92ZUNhbWVyYTogKCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2gobW92ZUNhbWVyYSgpKVxuXHRcdH0sXG5cdFx0b25VcGRhdGVNYXRlcmlhbE9mZnNldDogKCkgPT4ge1xuXHRcdFx0ZGlzcGF0Y2godXBkYXRlTWF0ZXJpYWxPZmZzZXQoKSlcblx0XHR9LFxuXHRcdG9uSW5pdGlhbGl6ZUN1cnZlOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChpbml0aWFsaXplQ3VydmUoKSlcblx0XHR9LFxuXHRcdG9uVXBkYXRlQ3VydmU6IChnZW9tZXRyaWVzKSA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVDdXJ2ZShnZW9tZXRyaWVzKSlcblx0XHR9LFxuXHR9XG59XG5cbmNvbnN0IFR1YmVDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUdWJlKVxuXG5leHBvcnQgZGVmYXVsdCBUdWJlQ29udGFpbmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5maW5pdGVkVHViZS9jb250YWluZXJzL1R1YmVDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJ1xuXG5jbGFzcyBUdWJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRzdXBlcihwcm9wcylcblxuXHR0aGlzLm9uTG9hZGluZyA9IDo6dGhpcy5wcm9wcy5vbkxvYWRpbmdcblx0dGhpcy5vbkxvYWRlZCA9IDo6dGhpcy5wcm9wcy5vbkxvYWRlZFxuXHR0aGlzLm9uUmVzaXplID0gOjp0aGlzLnByb3BzLm9uUmVzaXplXG5cdHRoaXMub25Nb3VzZU1vdmUgPSA6OnRoaXMucHJvcHMub25Nb3VzZU1vdmVcblx0dGhpcy5vbk1vdmVDYW1lcmEgPSA6OnRoaXMucHJvcHMub25Nb3ZlQ2FtZXJhXG5cdHRoaXMub25VcGRhdGVNYXRlcmlhbE9mZnNldCA9IDo6dGhpcy5wcm9wcy5vblVwZGF0ZU1hdGVyaWFsT2Zmc2V0XG5cdHRoaXMub25Jbml0aWFsaXplQ3VydmUgPSA6OnRoaXMucHJvcHMub25Jbml0aWFsaXplQ3VydmVcblx0dGhpcy5vblVwZGF0ZUN1cnZlID0gOjp0aGlzLnByb3BzLm9uVXBkYXRlQ3VydmVcblxuXHR0aGlzLnRleHR1cmVzID0ge1xuXHQgIFwic3RvbmVcIjoge1xuXHRcdHVybDogXCIuLi9hc3NldHMvaW1nL3R1YmUvc3RvbmVQYXR0ZXJuLmpwZ1wiXG5cdCAgfSxcblx0ICBcInN0b25lQnVtcFwiOiB7XG5cdFx0dXJsOiBcIi4uL2Fzc2V0cy9pbWcvdHViZS9zdG9uZVBhdHRlcm5CdW1wLmpwZ1wiXG5cdCAgfVxuXHR9XG4gIH1cblxuICAvKiBMaWZlQ3ljbGUgKi9cblxuICAvLyBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vXG4gIC8vIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmhhbmRsZUluaXRpYWxpemUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkxvYWRlZCgpXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvbmVUdWJlR2VvbWV0cnkoKVxuICAgIH0pXG5cdHRoaXMuaGFuZGxlUmVzaXplKClcblx0dGhpcy5oYW5kbGVNb3VzZU1vdmUoKVxuICB9XG5cblxuICAvKiBjdXN0b20gRnVuY3Rpb24gICovXG5cbiAgaGFuZGxlSW5pdGlhbGl6ZSgpIHtcbiAgICAgIHRoaXMub25Mb2FkaW5nKClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkluaXRpYWxpemVDdXJ2ZSgpXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVJlc2l6ZSgpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVDbG9uZVR1YmVHZW9tZXRyeSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVmcy50dWJlTWVzaClcbiBcdHRoaXMudHViZUdlb21ldHJ5X28gPSB0aGlzLnJlZnMudHViZU1lc2guZ2VvbWV0cnkuY2xvbmUoKVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlQ3VydmUoKSB7XG5cdCB0aGlzLm9uVXBkYXRlQ3VydmUoe1xuXHRcdCBzcGxpbmVHZW9tZXRyeTogdGhpcy5yZWZzLnNwbGluZU1lc2guZ2VvbWV0cnksXG5cdFx0IHR1YmVHZW9tZXRyeTogdGhpcy5yZWZzLnR1YmVNZXNoLmdlb21ldHJ5LFxuXHRcdCB0dWJlR2VvbWV0cnlfbzogdGhpcy50dWJlR2VvbWV0cnlfbyxcblx0IH0pXG4gIH1cblxuICBoYW5kbGVNb3ZlQ2FtZXJhKCkge1xuXHQgIHRoaXMub25Nb3ZlQ2FtZXJhKClcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZU1hdGVyaWFsT2Zmc2V0KCkge1xuXHQgIHRoaXMub25VcGRhdGVNYXRlcmlhbE9mZnNldCgpXG4gIH1cblxuICBoYW5kbGVBbmltYXRlKCkge1xuXHQgIHRoaXMuaGFuZGxlVXBkYXRlQ3VydmUoKVxuXHQgIHRoaXMuaGFuZGxlTW92ZUNhbWVyYSgpXG5cdCAgdGhpcy5oYW5kbGVVcGRhdGVNYXRlcmlhbE9mZnNldCgpXG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuXHRjb25zdCB7bG9hZGluZywgd2lkdGgsIGhlaWdodCwgY2FtZXJhUG9zaXRpb24sIGNhbWVyYVJvdGF0aW9uLCBtYXRlcmlhbE9mZnNldCwgY3VydmV9ID0gdGhpcy5wcm9wc1xuXG5cbiAgICBpZiAobG9hZGluZykgcmV0dXJuKDxoMj5Mb2FkaW5nLi4uPC9oMj4pXG5cdHJldHVybihcblx0XHQ8UmVhY3QzXG5cdFx0ICBtYWluQ2FtZXJhPVwiY2FtZXJhXCJcblx0XHQgIHdpZHRoPXt3aWR0aH1cblx0XHQgIGhlaWdodD17aGVpZ2h0fVxuXHRcdCAgb25BbmltYXRlPXs6OnRoaXMuaGFuZGxlQW5pbWF0ZX1cblx0XHQgIGNsZWFyQ29sb3I9ezB4MjIyMjIyfVxuXHRcdCAgYW50aWFsaWFzPXt0cnVlfVxuXHRcdD5cblx0XHQgIDxzY2VuZVxuXHRcdFx0Zm9nPXtuZXcgVEhSRUUuRm9nKDB4MjIyMjIyLCAwLjYsIDIuOCl9XG5cdFx0ICA+XG5cblx0XHRcdHsvKiBIZWxwZXIgKi99XG5cdFx0XHR7LyogPGF4aXNIZWxwZXIgLz4gKi99XG5cblx0XHRcdHsvKiBDYW1lcmEgKi99XG5cdFx0XHQ8cGVyc3BlY3RpdmVDYW1lcmFcblx0XHRcdCAgbmFtZT1cImNhbWVyYVwiXG5cdFx0XHQgIGZvdj17MTV9XG5cdFx0XHQgIGFzcGVjdD17d2lkdGggLyBoZWlnaHR9XG5cdFx0XHQgIG5lYXI9ezAuMDF9XG5cdFx0XHQgIGZhcj17MTAwMH1cblx0XHRcdCAgcG9zaXRpb249e2NhbWVyYVBvc2l0aW9ufVxuXHRcdFx0ICByb3RhdGlvbj17Y2FtZXJhUm90YXRpb259XG5cdFx0XHQvPlxuXG5cdFx0XHR7LyogTGlnaHQgKi99XG5cdFx0XHQ8aGVtaXNwaGVyZUxpZ2h0XG5cdFx0XHQgIHNreUNvbG9yPXsweGZmZmZiYn1cblx0XHRcdCAgZ3JvdW5kQ29sb3I9ezB4ODg3OTc5fVxuXHRcdFx0ICBpbnRlbnNpdHk9ezAuOX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGlyZWN0aW9uYWxMaWdodFxuXHRcdFx0ICBjb2xvcj17MHhmZmZmZmZ9XG5cdFx0XHQgIGludGVuc2l0eT17MC44fVxuXHRcdFx0Lz5cblxuXHRcdFx0ey8qIGhlbHBlciBNZXNoKi99XG5cdFx0XHR7LyogPG1lc2g+XG5cdFx0XHQgIDxib3hHZW9tZXRyeVxuXHRcdFx0XHR3aWR0aD17MX1cblx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRkZXB0aD17MX1cblx0XHRcdCAgLz5cblx0XHRcdCAgPG1lc2hCYXNpY01hdGVyaWFsXG5cdFx0XHRcdGNvbG9yPXsweGVlZWVlZX1cblx0XHRcdCAgLz5cblx0XHRcdDwvbWVzaD4gKi99XG5cblx0XHRcdHsvKiBzcGxpbmUgTWVzaCAqL31cblx0XHRcdDxtZXNoIHJlZj0nc3BsaW5lTWVzaCc+XG5cdFx0XHQgIDxnZW9tZXRyeSB2ZXJ0aWNlcz17Y3VydmUuZ2V0UG9pbnRzKDcwKX0gLz5cblx0XHRcdCAgPGxpbmVCYXNpY01hdGVyaWFsIC8+XG5cdFx0XHQ8L21lc2g+XG5cblx0XHRcdHsvKiBUdWJlIE1lc2ggKi99XG5cdFx0XHQ8bWVzaCByZWY9J3R1YmVNZXNoJz5cblx0XHRcdCAgPHR1YmVHZW9tZXRyeVxuXHRcdFx0XHRwYXRoPXtjdXJ2ZX1cblx0XHRcdFx0c2VnbWVudHM9ezcwfVxuXHRcdFx0XHRyYWRpdXM9ezAuMDJ9XG5cdFx0XHRcdHJhZGl1c1NlZ21lbnRzPXs1MH1cblx0XHRcdFx0Y2xvc2VkPXtmYWxzZX1cblx0XHRcdCAgLz5cblx0XHRcdCAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsXG5cdFx0XHRcdHNpZGU9e1RIUkVFLkJhY2tTaWRlfVxuXHRcdFx0XHRidW1wU2NhbGU9ezAuMDAwM31cblx0XHRcdCAgPlxuXHRcdFx0XHQ8dGV4dHVyZVxuXHRcdFx0XHQgIHNsb3Q9eydtYXAnfVxuXHRcdFx0XHQgIHVybD17dGhpcy50ZXh0dXJlcy5zdG9uZS51cmx9XG5cdFx0XHRcdCAgd3JhcFM9e1RIUkVFLlJlcGVhdFdyYXBwaW5nfVxuXHRcdFx0XHQgIHdyYXBUPXtUSFJFRS5SZXBlYXRXcmFwcGluZ31cblx0XHRcdFx0ICByZXBlYXQ9e25ldyBUSFJFRS5WZWN0b3IyKDMwLCA2KX1cblx0XHRcdFx0ICBvZmZzZXQ9e21hdGVyaWFsT2Zmc2V0fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8dGV4dHVyZVxuXHRcdFx0XHQgIHNsb3Q9eydidW1wTWFwJ31cblx0XHRcdFx0ICB1cmw9e3RoaXMudGV4dHVyZXMuc3RvbmVCdW1wLnVybH1cblx0XHRcdFx0ICB3cmFwUz17VEhSRUUuUmVwZWF0V3JhcHBpbmd9XG5cdFx0XHRcdCAgd3JhcFQ9e1RIUkVFLlJlcGVhdFdyYXBwaW5nfVxuXHRcdFx0XHQgIHJlcGVhdD17bmV3IFRIUkVFLlZlY3RvcjIoMzAsIDYpfVxuXHRcdFx0XHQvPlxuXHRcdFx0ICA8L21lc2hTdGFuZGFyZE1hdGVyaWFsPlxuXHRcdFx0PC9tZXNoPlxuXHRcdCAgPC9zY2VuZT5cblx0XHQ8L1JlYWN0Mz5cblx0ICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHViZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZmluaXRlZFR1YmUvY29tcG9uZW50cy9UdWJlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHJlc2l6ZVdpbmRvdyA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuUkVTSVpFX1dJTkRPVyxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5maW5pdGVkVHViZS9hY3Rpb25zL3Jlc2l6ZVdpbmRvdy5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBtb3ZlTW91c2UgPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLk1PVkVfTU9VU0UsXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZmluaXRlZFR1YmUvYWN0aW9ucy9tb3ZlTW91c2UuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgbW92ZUNhbWVyYSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5VUERBVEVfQ0FNRVJBX1BPU0lUSU9OLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5maW5pdGVkVHViZS9hY3Rpb25zL21vdmVDYW1lcmEuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTWF0ZXJpYWxPZmZzZXQgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuVVBEQVRFX01BVEVSSUFMX09GRlNFVCxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZmluaXRlZFR1YmUvYWN0aW9ucy9tYXRlcmlhbC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQ3VydmUgPSAoKSA9PiB7XG5cblx0Lyog5Yid5pyf5a6j6KiAICovXG5cdGxldCBwb2ludHMgPSBbXVxuXHRsZXQgY3VydmVQb2ludE51bSA9IDVcblxuXHQvKiBa6Lu444KS44Ga44KJ44GX44Gk44Gk44CB6KSH5pWw44Gu5bqn5qiZ44KS5L2c5oiQ44GX44CB6YWN5YiX44Gr5qC857SNICovXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY3VydmVQb2ludE51bTsgaSsrKSB7XG5cdCAgcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMi41ICogKGkgLyA0KSkpXG5cdH1cblx0cG9pbnRzW2N1cnZlUG9pbnROdW0gLSAxXS55ID0gLTAuMDZcblxuXHQvKiDluqfmqJnjgpLnlKjjgYTjgabjgIHplpPjga7luqfmqJnjgpLoo5zlrozjgZfjgabjgIHjgqvjg7zjg5bjga7kvZzmiJAgKi9cblx0bGV0IGN1cnZlID0gbmV3IFRIUkVFLkNhdG11bGxSb21DdXJ2ZTMocG9pbnRzKVxuXG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuSU5JVElBTElaRV9DVVJWRSxcblx0XHRjdXJ2ZTogY3VydmUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmZpbml0ZWRUdWJlL2FjdGlvbnMvaW5pdGlhbGl6ZUN1cnZlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnZlID0gKGdlb21ldHJpZXMpID0+IHtcblxuXHRsZXQgc3BsaW5lR2VvbWV0cnkgPSBnZW9tZXRyaWVzLnNwbGluZUdlb21ldHJ5XG5cdGxldCB0dWJlR2VvbWV0cnkgPSBnZW9tZXRyaWVzLnR1YmVHZW9tZXRyeVxuXHRsZXQgdHViZUdlb21ldHJ5X28gPSBnZW9tZXRyaWVzLnR1YmVHZW9tZXRyeV9vXG5cblx0bGV0IGluZGV4ID0gMCwgdmVydGljZV9vID0gbnVsbCwgdmVydGljZSA9IG51bGw7XG5cdC8vIEZvciBlYWNoIHZlcnRpY2Ugb2YgdGhlIHR1YmUsIG1vdmUgaXQgYSBiaXQgYmFzZWQgb24gdGhlIHNwbGluZVxuIFx0Zm9yIChsZXQgaSA9IDAsIGogPSB0dWJlR2VvbWV0cnkudmVydGljZXMubGVuZ3RoOyBpIDwgajsgaSArPSAxKSB7XG5cdFx0Ly8gR2V0IHRoZSBvcmlnaW5hbCB0dWJlIHZlcnRpY2Vcblx0XHR2ZXJ0aWNlX28gPSB0dWJlR2VvbWV0cnlfby52ZXJ0aWNlc1tpXTtcblx0XHQvLyBHZXQgdGhlIHZpc2libGUgdHViZSB2ZXJ0aWNlXG5cdFx0dmVydGljZSA9IHR1YmVHZW9tZXRyeS52ZXJ0aWNlc1tpXTtcblx0XHQvLyBDYWxjdWxhdGUgaW5kZXggb2YgdGhlIHZlcnRpY2UgYmFzZWQgb24gdGhlIFogYXhpc1xuXHRcdC8vIFRoZSB0dWJlIGlzIG1hZGUgb2YgNTAgcmluZ3Mgb2YgdmVydGljZXNcblx0XHRpbmRleCA9IE1hdGguZmxvb3IoaSAvIDUwKTtcblx0XHQvLyBVcGRhdGUgdHViZSB2ZXJ0aWNlXG5cdFx0dmVydGljZS54ICs9XG5cdFx0XHQodmVydGljZV9vLnggKyBzcGxpbmVHZW9tZXRyeS52ZXJ0aWNlc1tpbmRleF0ueCAtIHZlcnRpY2UueCkgL1xuXHRcdFx0MTA7XG5cdFx0dmVydGljZS55ICs9XG5cdFx0XHQodmVydGljZV9vLnkgKyBzcGxpbmVHZW9tZXRyeS52ZXJ0aWNlc1tpbmRleF0ueSAtIHZlcnRpY2UueSkgL1xuXHRcdFx0NTtcblx0fVxuXG5cdC8vIFdhcm4gVGhyZWVKcyB0aGF0IHRoZSBwb2ludHMgaGF2ZSBjaGFuZ2VkXG4gXHR0dWJlR2VvbWV0cnkudmVydGljZXNOZWVkVXBkYXRlID0gdHJ1ZTtcbiBcdHNwbGluZUdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5VUERBVEVfQ1VSVkUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmZpbml0ZWRUdWJlL2FjdGlvbnMvdXBkYXRlQ3VydmUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5MT0FESU5HXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlZCA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5MT0FERURcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZmluaXRlZFR1YmUvYWN0aW9ucy9sb2FkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==