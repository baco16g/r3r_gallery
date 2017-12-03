webpackJsonp([3],{

/***/ 33:
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
	UPDATE_TIME: 'UPDATE_TIME',
	LOADING: 'LOADING',
	LOADED: 'LOADED'
};
exports.default = Types;

/***/ }),

/***/ 501:
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

var _reducers = __webpack_require__(502);

var _reducers2 = _interopRequireDefault(_reducers);

var _TubeContainer = __webpack_require__(506);

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

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(25);

var _load = __webpack_require__(503);

var _load2 = _interopRequireDefault(_load);

var _time = __webpack_require__(504);

var _time2 = _interopRequireDefault(_time);

var _tube = __webpack_require__(505);

var _tube2 = _interopRequireDefault(_tube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  load: _load2.default,
  time: _time2.default,
  tube: _tube2.default
});

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(33);

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

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(33);

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

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__(7);

var _assign2 = _interopRequireDefault(_assign);

var _actiontypes = __webpack_require__(33);

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
					position: new THREE.Vector3(0, state.mouse.position.x * 0.015, -state.mouse.position.y * 0.015),
					rotation: new THREE.Euler(0, Math.PI - state.mouse.position.x * 0.06, state.mouse.position.y * 0.2)
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

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__(30);

var _Tube = __webpack_require__(507);

var _Tube2 = _interopRequireDefault(_Tube);

var _resizeWindow = __webpack_require__(510);

var _moveMouse = __webpack_require__(511);

var _moveCamera = __webpack_require__(512);

var _material = __webpack_require__(513);

var _initializeCurve = __webpack_require__(514);

var _updateCurve = __webpack_require__(515);

var _updateTime = __webpack_require__(516);

var _load = __webpack_require__(517);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		loading: state.load.loading,
		width: state.tube.windowSize.x,
		height: state.tube.windowSize.y,
		cameraPosition: state.tube.camera.position,
		cameraRotation: state.tube.camera.rotation,
		materialOffset: state.tube.materialOffset,
		curve: state.tube.curve,
		time: state.time.elapsed
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
		},
		onUpdateTime: function onUpdateTime() {
			dispatch((0, _updateTime.updateTime)());
		}
	};
};

var TubeContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Tube2.default);

exports.default = TubeContainer;

/***/ }),

/***/ 507:
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

var _tube = __webpack_require__(508);

var _tube2 = _interopRequireDefault(_tube);

var _tube3 = __webpack_require__(509);

var _tube4 = _interopRequireDefault(_tube3);

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
		_this.onUpdateTime = (_context = _this.props).onUpdateTime.bind(_context);

		_this.textures = {
			"stone": {
				url: "/assets/img/tube/stonePattern.jpg"
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
			this.onUpdateTime();
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
			    curve = _props.curve,
			    time = _props.time;


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
							'shaderMaterial',
							{
								vertexShader: _tube2.default,
								fragmentShader: _tube4.default,
								blending: THREE.NormalBlending,
								side: THREE.DoubleSide
							},
							_react2.default.createElement(
								'uniforms',
								null,
								_react2.default.createElement('uniform', { name: 'time', type: 'f', value: time })
							)
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

/***/ 508:
/***/ (function(module, exports) {

module.exports = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n"

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

module.exports = "uniform float time;\n\nvarying vec2 vUv;\n\nfloat random (in float x) {\n\treturn fract(sin(x)*1e4);\n}\n\nfloat random (in vec2 st) {\n\treturn fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);\n}\n\nfloat pattern(vec2 st, vec2 v, float t) {\n\tvec2 p = floor(st+v);\n\treturn step(t, random(100.+p*.000001)+random(p.x)*0.5 );\n}\n\nvoid main() {\n\tvec2 st = vUv;\n\n\tvec2 grid = vec2(1000.,1000.);\n\tst *= grid;\n\n\tvec2 ipos = floor(st);  // integer\n\tvec2 fpos = fract(st);  // fraction\n\n\tvec2 vel = vec2(time*max(grid.x,grid.y)); // time\n\tvel *= vec2(1.,0.0) * random(1.0+ipos.y); // direction\n\n\tvec3 color = vec3(0.);\n\tcolor.r = pattern(st,vel,1.0);\n\tcolor.g = pattern(st,vel,1.0);\n\tcolor.b = pattern(st,vel,1.0);\n\n\t// Margins\n\tcolor *= step(0.1,fpos.y);\n\tcolor *= vec3(abs(sin(time * 0.17)), abs(cos(time * 0.47)), abs(sin(time * 0.79)));\n\n\tgl_FragColor = vec4(color,1.0);\n}\n"

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resizeWindow = undefined;

var _actiontypes = __webpack_require__(33);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeWindow = exports.resizeWindow = function resizeWindow(e) {
	return {
		type: _actiontypes2.default.RESIZE_WINDOW,
		e: e
	};
};

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveMouse = undefined;

var _actiontypes = __webpack_require__(33);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveMouse = exports.moveMouse = function moveMouse(e) {
	return {
		type: _actiontypes2.default.MOVE_MOUSE,
		e: e
	};
};

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.moveCamera = undefined;

var _actiontypes = __webpack_require__(33);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveCamera = exports.moveCamera = function moveCamera() {
	return {
		type: _actiontypes2.default.UPDATE_CAMERA_POSITION
	};
};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateMaterialOffset = undefined;

var _actiontypes = __webpack_require__(33);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateMaterialOffset = exports.updateMaterialOffset = function updateMaterialOffset() {
	return {
		type: _actiontypes2.default.UPDATE_MATERIAL_OFFSET
	};
};

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initializeCurve = undefined;

var _actiontypes = __webpack_require__(33);

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

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateCurve = undefined;

var _actiontypes = __webpack_require__(33);

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

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateTime = undefined;

var _actiontypes = __webpack_require__(33);

var _actiontypes2 = _interopRequireDefault(_actiontypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateTime = exports.updateTime = function updateTime() {
	return {
		type: _actiontypes2.default.UPDATE_TIME
	};
};

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loaded = exports.loading = undefined;

var _actiontypes = __webpack_require__(33);

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

},[501]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGltZU1hY2hpbmUvY29uc3RhbnRzL2FjdGlvbnR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC90aW1lTWFjaGluZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdGltZU1hY2hpbmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RpbWVNYWNoaW5lL3JlZHVjZXJzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RpbWVNYWNoaW5lL3JlZHVjZXJzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RpbWVNYWNoaW5lL3JlZHVjZXJzL3R1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3RpbWVNYWNoaW5lL2NvbnRhaW5lcnMvVHViZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdGltZU1hY2hpbmUvY29tcG9uZW50cy9UdWJlLmpzIiwid2VicGFjazovLy8uL2FwcC90aW1lTWFjaGluZS9nbHNsL3R1YmUudmVydCIsIndlYnBhY2s6Ly8vLi9hcHAvdGltZU1hY2hpbmUvZ2xzbC90dWJlLmZyYWciLCJ3ZWJwYWNrOi8vLy4vYXBwL3RpbWVNYWNoaW5lL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwid2VicGFjazovLy8uL2FwcC90aW1lTWFjaGluZS9hY3Rpb25zL21vdmVNb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdGltZU1hY2hpbmUvYWN0aW9ucy9tb3ZlQ2FtZXJhLmpzIiwid2VicGFjazovLy8uL2FwcC90aW1lTWFjaGluZS9hY3Rpb25zL21hdGVyaWFsLmpzIiwid2VicGFjazovLy8uL2FwcC90aW1lTWFjaGluZS9hY3Rpb25zL2luaXRpYWxpemVDdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdGltZU1hY2hpbmUvYWN0aW9ucy91cGRhdGVDdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdGltZU1hY2hpbmUvYWN0aW9ucy91cGRhdGVUaW1lLmpzIiwid2VicGFjazovLy8uL2FwcC90aW1lTWFjaGluZS9hY3Rpb25zL2xvYWQuanMiXSwibmFtZXMiOlsiVHlwZXMiLCJSRVNJWkVfV0lORE9XIiwiTU9WRV9NT1VTRSIsIlVQREFURV9DQU1FUkFfUE9TSVRJT04iLCJVUERBVEVfTUFURVJJQUxfT0ZGU0VUIiwiSU5JVElBTElaRV9DVVJWRSIsIlVQREFURV9DVVJWRSIsIlVQREFURV9USU1FIiwiTE9BRElORyIsIkxPQURFRCIsInN0b3JlIiwid2luZG93IiwiZGV2VG9vbHNFeHRlbnNpb24iLCJmIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvYWQiLCJ0aW1lIiwidHViZSIsInN0YXRlIiwibG9hZGluZyIsImFjdGlvbiIsInR5cGUiLCJlbGFwc2VkIiwiY3VydmUiLCJtYXRlcmlhbE9mZnNldCIsIlRIUkVFIiwiVmVjdG9yMiIsIm1vdXNlIiwicG9zaXRpb24iLCJ0YXJnZXQiLCJjYW1lcmEiLCJWZWN0b3IzIiwicm90YXRpb24iLCJFdWxlciIsIndpbmRvd1NpemUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb2ludHMiLCJ4IiwieSIsIk1hdGgiLCJQSSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1hcFN0YXRlVG9Qcm9wcyIsIndpZHRoIiwiaGVpZ2h0IiwiY2FtZXJhUG9zaXRpb24iLCJjYW1lcmFSb3RhdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25Mb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIm9uTG9hZGVkIiwib25SZXNpemUiLCJvbk1vdXNlTW92ZSIsIm9uTW92ZUNhbWVyYSIsIm9uVXBkYXRlTWF0ZXJpYWxPZmZzZXQiLCJvbkluaXRpYWxpemVDdXJ2ZSIsIm9uVXBkYXRlQ3VydmUiLCJnZW9tZXRyaWVzIiwib25VcGRhdGVUaW1lIiwiVHViZUNvbnRhaW5lciIsIlR1YmUiLCJwcm9wcyIsInRleHR1cmVzIiwidXJsIiwiaGFuZGxlSW5pdGlhbGl6ZSIsInRoZW4iLCJoYW5kbGVDbG9uZVR1YmVHZW9tZXRyeSIsImhhbmRsZVJlc2l6ZSIsImhhbmRsZU1vdXNlTW92ZSIsInJlc29sdmUiLCJyZWplY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVmcyIsInR1YmVNZXNoIiwidHViZUdlb21ldHJ5X28iLCJnZW9tZXRyeSIsImNsb25lIiwic3BsaW5lR2VvbWV0cnkiLCJzcGxpbmVNZXNoIiwidHViZUdlb21ldHJ5IiwiaGFuZGxlVXBkYXRlQ3VydmUiLCJoYW5kbGVNb3ZlQ2FtZXJhIiwiaGFuZGxlVXBkYXRlTWF0ZXJpYWxPZmZzZXQiLCJoYW5kbGVBbmltYXRlIiwiRm9nIiwiZ2V0UG9pbnRzIiwiTm9ybWFsQmxlbmRpbmciLCJEb3VibGVTaWRlIiwiQ29tcG9uZW50IiwicmVzaXplV2luZG93IiwibW92ZU1vdXNlIiwibW92ZUNhbWVyYSIsInVwZGF0ZU1hdGVyaWFsT2Zmc2V0IiwiaW5pdGlhbGl6ZUN1cnZlIiwiY3VydmVQb2ludE51bSIsImkiLCJwdXNoIiwiQ2F0bXVsbFJvbUN1cnZlMyIsInVwZGF0ZUN1cnZlIiwiaW5kZXgiLCJ2ZXJ0aWNlX28iLCJ2ZXJ0aWNlIiwiaiIsInZlcnRpY2VzIiwibGVuZ3RoIiwiZmxvb3IiLCJ2ZXJ0aWNlc05lZWRVcGRhdGUiLCJ1cGRhdGVUaW1lIiwibG9hZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVE7QUFDYkMsZ0JBQWUsZUFERjtBQUViQyxhQUFZLFlBRkM7QUFHYkMseUJBQXdCLHdCQUhYO0FBSWJDLHlCQUF3Qix3QkFKWDtBQUtiQyxtQkFBa0Isa0JBTEw7QUFNYkMsZUFBYyxjQU5EO0FBT2JDLGNBQWEsYUFQQTtBQVFiQyxVQUFTLFNBUkk7QUFTYkMsU0FBUTtBQVRLLENBQWQ7a0JBV2VULEs7Ozs7Ozs7Ozs7Ozs7O0FDWGY7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTVUsUUFBUSw0Q0FBc0Isb0JBQ25DLFFBQU9DLE1BQVAsdURBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFBOEIsT0FBT0EsT0FBT0MsaUJBQWQsS0FBb0MsV0FBbEUsR0FBZ0ZELE9BQU9DLGlCQUFQLEVBQWhGLEdBQTZHO0FBQUEsUUFBS0MsQ0FBTDtBQUFBLENBRDFFLENBQXRCLENBQWQ7O0FBTUEsbUJBQVNDLE1BQVQsQ0FDQztBQUFBO0FBQUEsR0FBVSxPQUFPSixLQUFqQjtBQUNDO0FBREQsQ0FERCxFQUlFSyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBSkYsRTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsNEJBQWdCO0FBQzdCQyxzQkFENkI7QUFFN0JDLHNCQUY2QjtBQUc3QkM7QUFINkIsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7OztBQUVBLElBQU1GLE9BQU8sU0FBUEEsSUFBTyxHQUdFO0FBQUEsS0FGZEcsS0FFYyx1RUFGTjtBQUNQQyxXQUFTO0FBREYsRUFFTTtBQUFBLEtBQVhDLE1BQVc7OztBQUVkLFNBQU9BLE9BQU9DLElBQWQ7QUFDQyxPQUFLLHNCQUFNZixPQUFYO0FBQ0MsVUFBTyxzQkFBYyxFQUFkLEVBQWtCWSxLQUFsQixFQUF5QjtBQUMvQkMsYUFBUztBQURzQixJQUF6QixDQUFQO0FBR0QsT0FBSyxzQkFBTVosTUFBWDtBQUNDLFVBQU8sc0JBQWMsRUFBZCxFQUFrQlcsS0FBbEIsRUFBeUI7QUFDL0JDLGFBQVM7QUFEc0IsSUFBekIsQ0FBUDtBQUdEO0FBQ0MsVUFBT0QsS0FBUDtBQVZGO0FBYUEsQ0FsQkQ7O2tCQW9CZUgsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJmOzs7Ozs7QUFFQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FHRTtBQUFBLEtBRmRFLEtBRWMsdUVBRk47QUFDUEksV0FBUztBQURGLEVBRU07QUFBQSxLQUFYRixNQUFXOzs7QUFFZCxTQUFPQSxPQUFPQyxJQUFkO0FBQ0MsT0FBSyxzQkFBTWhCLFdBQVg7QUFDQyxVQUFPLHNCQUFjLEVBQWQsRUFBa0JhLEtBQWxCLEVBQXlCO0FBQy9CSSxhQUFTSixNQUFNSSxPQUFOLEdBQWdCO0FBRE0sSUFBekIsQ0FBUDtBQUdEO0FBQ0MsVUFBT0osS0FBUDtBQU5GO0FBU0EsQ0FkRDs7a0JBZ0JlRixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7Ozs7OztBQUVBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxHQWFFO0FBQUEsS0FaZEMsS0FZYyx1RUFaTjtBQUNQSyxTQUFPLElBREE7QUFFUEMsa0JBQWdCLElBQUlDLE1BQU1DLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FGVDtBQUdQQyxTQUFPO0FBQ05DLGFBQVUsSUFBSUgsTUFBTUMsT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQURKO0FBRU5HLFdBQVEsSUFBSUosTUFBTUMsT0FBVixDQUFrQixDQUFsQixFQUFxQixDQUFyQjtBQUZGLEdBSEE7QUFPUEksVUFBUTtBQUNQRixhQUFVLElBQUlILE1BQU1NLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsSUFBeEIsQ0FESDtBQUVQQyxhQUFVLElBQUlQLE1BQU1RLEtBQVY7QUFGSCxHQVBEO0FBV1BDLGNBQVksSUFBSVQsTUFBTUMsT0FBVixDQUFrQmpCLE9BQU8wQixVQUF6QixFQUFxQzFCLE9BQU8yQixXQUE1QztBQVhMLEVBWU07QUFBQSxLQUFYaEIsTUFBVzs7O0FBSWQsU0FBT0EsT0FBT0MsSUFBZDs7QUFFQyxPQUFLLHNCQUFNbEIsZ0JBQVg7QUFDQyxVQUFPLHNCQUFjLEVBQWQsRUFBa0JlLEtBQWxCLEVBQXlCO0FBQy9CSyxXQUFPSCxPQUFPRztBQURpQixJQUF6QixDQUFQOztBQUlELE9BQUssc0JBQU1uQixZQUFYO0FBQ0NjLFNBQU1LLEtBQU4sQ0FBWWMsTUFBWixDQUFtQixDQUFuQixFQUFzQkMsQ0FBdEIsR0FBMEIsQ0FBQ3BCLE1BQU1TLEtBQU4sQ0FBWUMsUUFBWixDQUFxQlUsQ0FBdEIsR0FBMEIsR0FBcEQ7QUFDQXBCLFNBQU1LLEtBQU4sQ0FBWWMsTUFBWixDQUFtQixDQUFuQixFQUFzQkMsQ0FBdEIsR0FBMEIsQ0FBQ3BCLE1BQU1TLEtBQU4sQ0FBWUMsUUFBWixDQUFxQlUsQ0FBdEIsR0FBMEIsR0FBcEQ7QUFDQXBCLFNBQU1LLEtBQU4sQ0FBWWMsTUFBWixDQUFtQixDQUFuQixFQUFzQkUsQ0FBdEIsR0FBMEJyQixNQUFNUyxLQUFOLENBQVlDLFFBQVosQ0FBcUJXLENBQXJCLEdBQXlCLEdBQW5EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRCxPQUFLLHNCQUFNckMsc0JBQVg7QUFDQyxVQUFPLHNCQUFjLEVBQWQsRUFBa0JnQixLQUFsQixFQUF5QjtBQUMvQk0sb0JBQWdCLElBQUlDLE1BQU1DLE9BQVYsQ0FDZlIsTUFBTU0sY0FBTixDQUFxQmMsQ0FBckIsR0FBeUIsSUFEVixFQUVmLENBRmU7QUFEZSxJQUF6QixDQUFQOztBQU9ELE9BQUssc0JBQU1yQyxzQkFBWDtBQUNDLFVBQU8sc0JBQWMsRUFBZCxFQUFrQmlCLEtBQWxCLEVBQXlCO0FBQy9CUyxXQUFPO0FBQ05FLGFBQVFYLE1BQU1TLEtBQU4sQ0FBWUUsTUFEZDtBQUVORCxlQUFVLElBQUlILE1BQU1DLE9BQVYsQ0FDVFIsTUFBTVMsS0FBTixDQUFZQyxRQUFaLENBQXFCVSxDQUFyQixHQUF5QixDQUFDcEIsTUFBTVMsS0FBTixDQUFZRSxNQUFaLENBQW1CUyxDQUFuQixHQUF1QnBCLE1BQU1TLEtBQU4sQ0FBWUMsUUFBWixDQUFxQlUsQ0FBN0MsSUFBa0QsRUFEbEUsRUFFVHBCLE1BQU1TLEtBQU4sQ0FBWUMsUUFBWixDQUFxQlcsQ0FBckIsR0FBeUIsQ0FBQ3JCLE1BQU1TLEtBQU4sQ0FBWUUsTUFBWixDQUFtQlUsQ0FBbkIsR0FBdUJyQixNQUFNUyxLQUFOLENBQVlDLFFBQVosQ0FBcUJXLENBQTdDLElBQWtELEVBRmxFO0FBRkosS0FEd0I7QUFRL0JULFlBQVE7QUFDUEYsZUFBVSxJQUFJSCxNQUFNTSxPQUFWLENBQ1QsQ0FEUyxFQUVUYixNQUFNUyxLQUFOLENBQVlDLFFBQVosQ0FBcUJVLENBQXJCLEdBQXlCLEtBRmhCLEVBR1QsQ0FBQ3BCLE1BQU1TLEtBQU4sQ0FBWUMsUUFBWixDQUFxQlcsQ0FBdEIsR0FBMEIsS0FIakIsQ0FESDtBQU1QUCxlQUFVLElBQUlQLE1BQU1RLEtBQVYsQ0FDVCxDQURTLEVBRVRPLEtBQUtDLEVBQUwsR0FBVXZCLE1BQU1TLEtBQU4sQ0FBWUMsUUFBWixDQUFxQlUsQ0FBckIsR0FBeUIsSUFGMUIsRUFHVHBCLE1BQU1TLEtBQU4sQ0FBWUMsUUFBWixDQUFxQlcsQ0FBckIsR0FBeUIsR0FIaEI7QUFOSDtBQVJ1QixJQUF6QixDQUFQOztBQXdCRCxPQUFLLHNCQUFNeEMsYUFBWDtBQUNDLFVBQU8sc0JBQWMsRUFBZCxFQUFrQm1CLEtBQWxCLEVBQXlCO0FBQy9CZ0IsZ0JBQVksSUFBSVQsTUFBTUMsT0FBVixDQUFrQmpCLE9BQU8wQixVQUF6QixFQUFxQzFCLE9BQU8yQixXQUE1QztBQURtQixJQUF6QixDQUFQOztBQU1ELE9BQUssc0JBQU1wQyxVQUFYO0FBQ0MsVUFBTyxzQkFBYyxFQUFkLEVBQWtCa0IsS0FBbEIsRUFBeUI7QUFDL0JTLFdBQU87QUFDTkUsYUFBUSxJQUFJSixNQUFNQyxPQUFWLENBQ1AsQ0FBQ04sT0FBT3NCLENBQVAsQ0FBU0MsT0FBVCxHQUFtQnpCLE1BQU1nQixVQUFOLENBQWlCSSxDQUFqQixHQUFxQixDQUF6QyxLQUErQ3BCLE1BQU1nQixVQUFOLENBQWlCSSxDQUFqQixHQUFxQixDQUFwRSxDQURPLEVBRVAsQ0FBQ3BCLE1BQU1nQixVQUFOLENBQWlCSyxDQUFqQixHQUFxQixDQUFyQixHQUF5Qm5CLE9BQU9zQixDQUFQLENBQVNFLE9BQW5DLEtBQStDMUIsTUFBTWdCLFVBQU4sQ0FBaUJLLENBQWpCLEdBQXFCLENBQXBFLENBRk8sQ0FERjtBQUtOWCxlQUFVVixNQUFNUyxLQUFOLENBQVlDO0FBTGhCO0FBRHdCLElBQXpCLENBQVA7O0FBVUQ7QUFDQyxVQUFPVixLQUFQO0FBdkVGO0FBeUVBLENBMUZEOztrQkE0RmVELEk7Ozs7Ozs7Ozs7Ozs7OztBQzlGZjs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTTRCLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQzNCLEtBQUQsRUFBVztBQUNsQyxRQUFPO0FBQ05DLFdBQVNELE1BQU1ILElBQU4sQ0FBV0ksT0FEZDtBQUVOMkIsU0FBTzVCLE1BQU1ELElBQU4sQ0FBV2lCLFVBQVgsQ0FBc0JJLENBRnZCO0FBR05TLFVBQVE3QixNQUFNRCxJQUFOLENBQVdpQixVQUFYLENBQXNCSyxDQUh4QjtBQUlOUyxrQkFBZ0I5QixNQUFNRCxJQUFOLENBQVdhLE1BQVgsQ0FBa0JGLFFBSjVCO0FBS05xQixrQkFBZ0IvQixNQUFNRCxJQUFOLENBQVdhLE1BQVgsQ0FBa0JFLFFBTDVCO0FBTU5SLGtCQUFnQk4sTUFBTUQsSUFBTixDQUFXTyxjQU5yQjtBQU9ORCxTQUFPTCxNQUFNRCxJQUFOLENBQVdNLEtBUFo7QUFRTlAsUUFBTUUsTUFBTUYsSUFBTixDQUFXTTtBQVJYLEVBQVA7QUFVQSxDQVhEOztBQWFBLElBQU00QixxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDeEMsUUFBTztBQUNOQyxhQUFXLHFCQUFNO0FBQ2hCQyxXQUFRQyxHQUFSLENBQVksWUFBWjtBQUNBSCxZQUFTLG9CQUFUO0FBQ0EsR0FKSztBQUtOSSxZQUFVLG9CQUFNO0FBQ2ZGLFdBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FILFlBQVMsbUJBQVQ7QUFDQSxHQVJLO0FBU05LLFlBQVUsa0JBQUNkLENBQUQsRUFBTztBQUNoQjtBQUNBUyxZQUFTLGdDQUFhVCxDQUFiLENBQVQ7QUFDQSxHQVpLO0FBYU5lLGVBQWEscUJBQUNmLENBQUQsRUFBTztBQUNuQjtBQUNBUyxZQUFTLDBCQUFVVCxDQUFWLENBQVQ7QUFDQSxHQWhCSztBQWlCTmdCLGdCQUFjLHdCQUFNO0FBQ25CUCxZQUFTLDZCQUFUO0FBQ0EsR0FuQks7QUFvQk5RLDBCQUF3QixrQ0FBTTtBQUM3QlIsWUFBUyxxQ0FBVDtBQUNBLEdBdEJLO0FBdUJOUyxxQkFBbUIsNkJBQU07QUFDeEJULFlBQVMsdUNBQVQ7QUFDQSxHQXpCSztBQTBCTlUsaUJBQWUsdUJBQUNDLFVBQUQsRUFBZ0I7QUFDOUJYLFlBQVMsOEJBQVlXLFVBQVosQ0FBVDtBQUNBLEdBNUJLO0FBNkJOQyxnQkFBYyx3QkFBTTtBQUNuQlosWUFBUyw2QkFBVDtBQUNBO0FBL0JLLEVBQVA7QUFpQ0EsQ0FsQ0Q7O0FBb0NBLElBQU1hLGdCQUFnQix5QkFBUW5CLGVBQVIsRUFBeUJLLGtCQUF6QixpQkFBdEI7O2tCQUVlYyxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EZjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0lBRU1DLEk7OztBQUVKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFBQSxnSUFDZEEsS0FEYzs7QUFHcEIsUUFBS2QsU0FBTCxHQUFtQixrQkFBS2MsS0FBTCxFQUFXZCxTQUE5QjtBQUNBLFFBQUtHLFFBQUwsR0FBa0Isa0JBQUtXLEtBQUwsRUFBV1gsUUFBN0I7QUFDQSxRQUFLQyxRQUFMLEdBQWtCLGtCQUFLVSxLQUFMLEVBQVdWLFFBQTdCO0FBQ0EsUUFBS0MsV0FBTCxHQUFxQixrQkFBS1MsS0FBTCxFQUFXVCxXQUFoQztBQUNBLFFBQUtDLFlBQUwsR0FBc0Isa0JBQUtRLEtBQUwsRUFBV1IsWUFBakM7QUFDQSxRQUFLQyxzQkFBTCxHQUFnQyxrQkFBS08sS0FBTCxFQUFXUCxzQkFBM0M7QUFDQSxRQUFLQyxpQkFBTCxHQUEyQixrQkFBS00sS0FBTCxFQUFXTixpQkFBdEM7QUFDQSxRQUFLQyxhQUFMLEdBQXVCLGtCQUFLSyxLQUFMLEVBQVdMLGFBQWxDO0FBQ0EsUUFBS0UsWUFBTCxHQUFzQixrQkFBS0csS0FBTCxFQUFXSCxZQUFqQzs7QUFFQSxRQUFLSSxRQUFMLEdBQWdCO0FBQ2QsWUFBUztBQUNWQyxTQUFLO0FBREs7QUFESyxHQUFoQjtBQWJvQjtBQWtCbEI7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOzs7O3NDQUVvQjtBQUFBOztBQUNyQixRQUFLQyxnQkFBTCxHQUF3QkMsSUFBeEIsQ0FBNkIsWUFBTTtBQUNsQyxXQUFLZixRQUFMO0FBQ0EsV0FBS2dCLHVCQUFMO0FBQ0EsSUFIRDtBQUlBLFFBQUtDLFlBQUw7QUFDQSxRQUFLQyxlQUFMO0FBQ0U7O0FBR0Q7Ozs7cUNBRW1CO0FBQUE7O0FBQ2xCLFFBQUtyQixTQUFMO0FBQ0EsVUFBTyxzQkFBWSxVQUFDc0IsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLFdBQUtmLGlCQUFMO0FBQ0FjO0FBQ0EsSUFITSxDQUFQO0FBSUE7OztpQ0FFYztBQUNoQmpFLFVBQU9tRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLcEIsUUFBdkMsRUFBaUQsS0FBakQ7QUFDRTs7O29DQUVpQjtBQUNuQi9DLFVBQU9tRSxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxLQUFLbkIsV0FBMUMsRUFBdUQsS0FBdkQ7QUFDRTs7OzRDQUV5QjtBQUN6QkosV0FBUUMsR0FBUixDQUFZLEtBQUt1QixJQUFMLENBQVVDLFFBQXRCO0FBQ0YsUUFBS0MsY0FBTCxHQUFzQixLQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUJFLFFBQW5CLENBQTRCQyxLQUE1QixFQUF0QjtBQUNFOzs7c0NBRW1CO0FBQ3BCLFFBQUtwQixhQUFMLENBQW1CO0FBQ2xCcUIsb0JBQWdCLEtBQUtMLElBQUwsQ0FBVU0sVUFBVixDQUFxQkgsUUFEbkI7QUFFbEJJLGtCQUFjLEtBQUtQLElBQUwsQ0FBVUMsUUFBVixDQUFtQkUsUUFGZjtBQUdsQkQsb0JBQWdCLEtBQUtBO0FBSEgsSUFBbkI7QUFLQzs7O3FDQUVrQjtBQUNsQixRQUFLckIsWUFBTDtBQUNBOzs7K0NBRTRCO0FBQzVCLFFBQUtDLHNCQUFMO0FBQ0E7OztrQ0FFZTtBQUNaLFFBQUtJLFlBQUw7QUFDSCxRQUFLc0IsaUJBQUw7QUFDQSxRQUFLQyxnQkFBTDtBQUNBLFFBQUtDLDBCQUFMO0FBQ0E7OzsyQkFJUTtBQUFBLGdCQUNvRixLQUFLckIsS0FEekY7QUFBQSxPQUNIL0MsT0FERyxVQUNIQSxPQURHO0FBQUEsT0FDTTJCLEtBRE4sVUFDTUEsS0FETjtBQUFBLE9BQ2FDLE1BRGIsVUFDYUEsTUFEYjtBQUFBLE9BQ3FCQyxjQURyQixVQUNxQkEsY0FEckI7QUFBQSxPQUNxQ0MsY0FEckMsVUFDcUNBLGNBRHJDO0FBQUEsT0FDcUR6QixjQURyRCxVQUNxREEsY0FEckQ7QUFBQSxPQUNxRUQsS0FEckUsVUFDcUVBLEtBRHJFO0FBQUEsT0FDNEVQLElBRDVFLFVBQzRFQSxJQUQ1RTs7O0FBSVYsT0FBSUcsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ2IsVUFDQztBQUFBO0FBQUE7QUFDRSxpQkFBVyxRQURiO0FBRUUsWUFBTzJCLEtBRlQ7QUFHRSxhQUFRQyxNQUhWO0FBSUUsZ0JBQWEsS0FBS3lDLGFBQWxCLE1BQWEsSUFBYixDQUpGO0FBS0UsaUJBQVksUUFMZDtBQU1FLGdCQUFXO0FBTmI7QUFRRTtBQUFBO0FBQUE7QUFDRCxXQUFLLElBQUkvRCxNQUFNZ0UsR0FBVixDQUFjLFFBQWQsRUFBd0IsR0FBeEIsRUFBNkIsR0FBN0I7QUFESjtBQVFEO0FBQ0UsWUFBSyxRQURQO0FBRUUsV0FBSyxFQUZQO0FBR0UsY0FBUTNDLFFBQVFDLE1BSGxCO0FBSUUsWUFBTSxJQUpSO0FBS0UsV0FBSyxJQUxQO0FBTUUsZ0JBQVVDLGNBTlo7QUFPRSxnQkFBVUM7QUFQWixPQVJDO0FBbUJEO0FBQ0UsZ0JBQVUsUUFEWjtBQUVFLG1CQUFhLFFBRmY7QUFHRSxpQkFBVztBQUhiLE9BbkJDO0FBd0JEO0FBQ0UsYUFBTyxRQURUO0FBRUUsaUJBQVc7QUFGYixPQXhCQztBQTBDRDtBQUFBO0FBQUEsUUFBTSxLQUFJLFlBQVY7QUFDRSxrREFBVSxVQUFVMUIsTUFBTW1FLFNBQU4sQ0FBZ0IsRUFBaEIsQ0FBcEIsR0FERjtBQUVFO0FBRkYsTUExQ0M7QUFnREQ7QUFBQTtBQUFBLFFBQU0sS0FBSSxVQUFWO0FBQ0U7QUFDRCxhQUFNbkUsS0FETDtBQUVELGlCQUFVLEVBRlQ7QUFHRCxlQUFRLElBSFA7QUFJRCx1QkFBZ0IsRUFKZjtBQUtELGVBQVE7QUFMUCxRQURGO0FBUUU7QUFBQTtBQUFBO0FBQ0Msb0NBREQ7QUFFQyxzQ0FGRDtBQUdDLGtCQUFVRSxNQUFNa0UsY0FIakI7QUFJYSxjQUFNbEUsTUFBTW1FO0FBSnpCO0FBTUM7QUFBQTtBQUFBO0FBRUMsbURBQVMsTUFBTSxNQUFmLEVBQXVCLE1BQU0sR0FBN0IsRUFBa0MsT0FBTzVFLElBQXpDO0FBRkQ7QUFORDtBQVJGO0FBaERDO0FBUkYsSUFERDtBQWlGRTs7O0VBNUtnQixnQkFBTTZFLFM7O2tCQStLVjVCLEk7Ozs7Ozs7O0FDckxmLG1DQUFtQyxpQkFBaUIsYUFBYSw0REFBNEQsZ0RBQWdELEdBQUcsRzs7Ozs7OztBQ0FoTCxxQ0FBcUMscUJBQXFCLCtCQUErQiw2QkFBNkIsR0FBRywrQkFBK0IsdUVBQXVFLEdBQUcsNkNBQTZDLHlCQUF5Qiw0REFBNEQsR0FBRyxpQkFBaUIsa0JBQWtCLG9DQUFvQyxlQUFlLDRCQUE0QixzQ0FBc0MsNERBQTRELHFEQUFxRCx5Q0FBeUMsa0NBQWtDLGtDQUFrQyxrQ0FBa0MsOENBQThDLHVGQUF1RixxQ0FBcUMsR0FBRyxHOzs7Ozs7Ozs7Ozs7Ozs7QUNBNTZCOzs7Ozs7QUFFTyxJQUFNNkIsc0NBQWUsU0FBZkEsWUFBZSxDQUFDcEQsQ0FBRCxFQUFPO0FBQ2xDLFFBQU87QUFDTnJCLFFBQU0sc0JBQU10QixhQUROO0FBRU4yQyxLQUFHQTtBQUZHLEVBQVA7QUFJQSxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOzs7Ozs7QUFFTyxJQUFNcUQsZ0NBQVksU0FBWkEsU0FBWSxDQUFDckQsQ0FBRCxFQUFPO0FBQy9CLFFBQU87QUFDTnJCLFFBQU0sc0JBQU1yQixVQUROO0FBRU4wQyxLQUFHQTtBQUZHLEVBQVA7QUFJQSxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOzs7Ozs7QUFFTyxJQUFNc0Qsa0NBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQy9CLFFBQU87QUFDTjNFLFFBQU0sc0JBQU1wQjtBQUROLEVBQVA7QUFHQSxDQUpNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOzs7Ozs7QUFFTyxJQUFNZ0csc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN6QyxRQUFPO0FBQ041RSxRQUFNLHNCQUFNbkI7QUFETixFQUFQO0FBR0EsQ0FKTSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7Ozs7O0FBRU8sSUFBTWdHLDRDQUFrQixTQUFsQkEsZUFBa0IsR0FBTTs7QUFFcEM7QUFDQSxLQUFJN0QsU0FBUyxFQUFiO0FBQ0EsS0FBSThELGdCQUFnQixDQUFwQjs7QUFFQTtBQUNBLE1BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxhQUFwQixFQUFtQ0MsR0FBbkMsRUFBd0M7QUFDdEMvRCxTQUFPZ0UsSUFBUCxDQUFZLElBQUk1RSxNQUFNTSxPQUFWLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLE9BQU9xRSxJQUFJLENBQVgsQ0FBeEIsQ0FBWjtBQUNEO0FBQ0QvRCxRQUFPOEQsZ0JBQWdCLENBQXZCLEVBQTBCNUQsQ0FBMUIsR0FBOEIsQ0FBQyxJQUEvQjs7QUFFQTtBQUNBLEtBQUloQixRQUFRLElBQUlFLE1BQU02RSxnQkFBVixDQUEyQmpFLE1BQTNCLENBQVo7O0FBRUEsUUFBTztBQUNOaEIsUUFBTSxzQkFBTWxCLGdCQUROO0FBRU5vQixTQUFPQTtBQUZELEVBQVA7QUFJQSxDQW5CTSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVPLElBQU1nRixvQ0FBYyxTQUFkQSxXQUFjLENBQUN6QyxVQUFELEVBQWdCOztBQUUxQyxLQUFJb0IsaUJBQWlCcEIsV0FBV29CLGNBQWhDO0FBQ0EsS0FBSUUsZUFBZXRCLFdBQVdzQixZQUE5QjtBQUNBLEtBQUlMLGlCQUFpQmpCLFdBQVdpQixjQUFoQzs7QUFFQSxLQUFJeUIsUUFBUSxDQUFaO0FBQUEsS0FBZUMsWUFBWSxJQUEzQjtBQUFBLEtBQWlDQyxVQUFVLElBQTNDO0FBQ0E7QUFDQyxNQUFLLElBQUlOLElBQUksQ0FBUixFQUFXTyxJQUFJdkIsYUFBYXdCLFFBQWIsQ0FBc0JDLE1BQTFDLEVBQWtEVCxJQUFJTyxDQUF0RCxFQUF5RFAsS0FBSyxDQUE5RCxFQUFpRTtBQUNqRTtBQUNBSyxjQUFZMUIsZUFBZTZCLFFBQWYsQ0FBd0JSLENBQXhCLENBQVo7QUFDQTtBQUNBTSxZQUFVdEIsYUFBYXdCLFFBQWIsQ0FBc0JSLENBQXRCLENBQVY7QUFDQTtBQUNBO0FBQ0FJLFVBQVFoRSxLQUFLc0UsS0FBTCxDQUFXVixJQUFJLEVBQWYsQ0FBUjtBQUNBO0FBQ0FNLFVBQVFwRSxDQUFSLElBQ0MsQ0FBQ21FLFVBQVVuRSxDQUFWLEdBQWM0QyxlQUFlMEIsUUFBZixDQUF3QkosS0FBeEIsRUFBK0JsRSxDQUE3QyxHQUFpRG9FLFFBQVFwRSxDQUExRCxJQUNBLEVBRkQ7QUFHQW9FLFVBQVFuRSxDQUFSLElBQ0MsQ0FBQ2tFLFVBQVVsRSxDQUFWLEdBQWMyQyxlQUFlMEIsUUFBZixDQUF3QkosS0FBeEIsRUFBK0JqRSxDQUE3QyxHQUFpRG1FLFFBQVFuRSxDQUExRCxJQUNBLENBRkQ7QUFHQTs7QUFFRDtBQUNDNkMsY0FBYTJCLGtCQUFiLEdBQWtDLElBQWxDO0FBQ0E3QixnQkFBZTZCLGtCQUFmLEdBQW9DLElBQXBDOztBQUVELFFBQU87QUFDTjFGLFFBQU0sc0JBQU1qQjtBQUROLEVBQVA7QUFHQSxDQWhDTSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7Ozs7O0FBRU8sSUFBTTRHLGtDQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUMvQixRQUFPO0FBQ04zRixRQUFNLHNCQUFNaEI7QUFETixFQUFQO0FBR0EsQ0FKTSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7Ozs7O0FBRU8sSUFBTWMsNEJBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQzVCLFFBQU87QUFDTkUsUUFBTSxzQkFBTWY7QUFETixFQUFQO0FBR0EsQ0FKTTs7QUFNQSxJQUFNMkcsMEJBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQzNCLFFBQU87QUFDTjVGLFFBQU0sc0JBQU1kO0FBRE4sRUFBUDtBQUdBLENBSk0sQyIsImZpbGUiOiJhc3NldHMvanMvcGFnZXMvdGltZU1hY2hpbmUuYmQ2ZTg3YTVlNDhkOTg1MjkzOTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUeXBlcyA9IHtcblx0UkVTSVpFX1dJTkRPVzogJ1JFU0laRV9XSU5ET1cnLFxuXHRNT1ZFX01PVVNFOiAnTU9WRV9NT1VTRScsXG5cdFVQREFURV9DQU1FUkFfUE9TSVRJT046ICdVUERBVEVfQ0FNRVJBX1BPU0lUSU9OJyxcblx0VVBEQVRFX01BVEVSSUFMX09GRlNFVDogJ1VQREFURV9NQVRFUklBTF9PRkZTRVQnLFxuXHRJTklUSUFMSVpFX0NVUlZFOiAnSU5JVElBTElaRV9DVVJWRScsXG5cdFVQREFURV9DVVJWRTogJ1VQREFURV9DVVJWRScsXG5cdFVQREFURV9USU1FOiAnVVBEQVRFX1RJTUUnLFxuXHRMT0FESU5HOiAnTE9BRElORycsXG5cdExPQURFRDogJ0xPQURFRCcsXG59XG5leHBvcnQgZGVmYXVsdCBUeXBlc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3RpbWVNYWNoaW5lL2NvbnN0YW50cy9hY3Rpb250eXBlcy5qcyIsImltcG9ydCAnLi4vLi4vc3R5bHVzL3N0eWxlLnN0eWwnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QzIGZyb20gJ3JlYWN0LXRocmVlLXJlbmRlcmVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcbmltcG9ydCBUdWJlQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9UdWJlQ29udGFpbmVyJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBjb21wb3NlKFxuXHR0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpIDogZiA9PiBmXG4pKTtcblxuXG5cblJlYWN0RE9NLnJlbmRlcihcblx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0PFR1YmVDb250YWluZXIvPlxuXHQ8L1Byb3ZpZGVyPlxuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC90aW1lTWFjaGluZS9pbmRleC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkJ1xuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJ1xuaW1wb3J0IHR1YmUgZnJvbSAnLi90dWJlJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsb2FkLFxuICB0aW1lLFxuICB0dWJlLFxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC90aW1lTWFjaGluZS9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IGxvYWQgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGxvYWRpbmc6IHRydWVcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5MT0FESU5HOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHR9KVxuXHRcdGNhc2UgVHlwZXMuTE9BREVEOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdGltZU1hY2hpbmUvcmVkdWNlcnMvbG9hZC5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHRpbWUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGVsYXBzZWQ6IDAuMCxcblx0fSwgYWN0aW9uKSA9PiB7XG5cblx0c3dpdGNoKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBUeXBlcy5VUERBVEVfVElNRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRlbGFwc2VkOiBzdGF0ZS5lbGFwc2VkICsgMC4wMVxuXHRcdFx0fSlcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0aW1lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdGltZU1hY2hpbmUvcmVkdWNlcnMvdGltZS5qcyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmNvbnN0IHR1YmUgPSAoXG5cdHN0YXRlID0ge1xuXHRcdGN1cnZlOiBudWxsLFxuXHRcdG1hdGVyaWFsT2Zmc2V0OiBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSxcblx0XHRtb3VzZToge1xuXHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApLFxuXHRcdFx0dGFyZ2V0OiBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSxcblx0XHR9LFxuXHRcdGNhbWVyYToge1xuXHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDAuMzUpLFxuXHRcdFx0cm90YXRpb246IG5ldyBUSFJFRS5FdWxlcigpLFxuXHRcdH0sXG5cdFx0d2luZG93U2l6ZTogbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksXG5cdH0sIGFjdGlvbikgPT4ge1xuXG5cblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblxuXHRcdGNhc2UgVHlwZXMuSU5JVElBTElaRV9DVVJWRTpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHRjdXJ2ZTogYWN0aW9uLmN1cnZlLFxuXHRcdFx0fSlcblxuXHRcdGNhc2UgVHlwZXMuVVBEQVRFX0NVUlZFOlxuXHRcdFx0c3RhdGUuY3VydmUucG9pbnRzWzJdLnggPSAtc3RhdGUubW91c2UucG9zaXRpb24ueCAqIDAuMTtcblx0XHRcdHN0YXRlLmN1cnZlLnBvaW50c1s0XS54ID0gLXN0YXRlLm1vdXNlLnBvc2l0aW9uLnggKiAwLjE7XG5cdFx0XHRzdGF0ZS5jdXJ2ZS5wb2ludHNbMl0ueSA9IHN0YXRlLm1vdXNlLnBvc2l0aW9uLnkgKiAwLjE7XG5cblx0XHRcdC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0Ly8gXHRtYXRlcmlhbE9mZnNldDogbmV3IFRIUkVFLlZlY3RvcjIoXG5cdFx0XHQvLyBcdFx0c3RhdGUubWF0ZXJpYWxPZmZzZXQueCArIDAuMDIsXG5cdFx0XHQvLyBcdFx0MCxcblx0XHRcdC8vIFx0KSxcblx0XHRcdC8vIH0pXG5cblx0XHRjYXNlIFR5cGVzLlVQREFURV9NQVRFUklBTF9PRkZTRVQ6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0bWF0ZXJpYWxPZmZzZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdHN0YXRlLm1hdGVyaWFsT2Zmc2V0LnggKyAwLjAyLFxuXHRcdFx0XHRcdDAsXG5cdFx0XHRcdCksXG5cdFx0XHR9KVxuXG5cdFx0Y2FzZSBUeXBlcy5VUERBVEVfQ0FNRVJBX1BPU0lUSU9OOlxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG5cdFx0XHRcdG1vdXNlOiB7XG5cdFx0XHRcdFx0dGFyZ2V0OiBzdGF0ZS5tb3VzZS50YXJnZXQsXG5cdFx0XHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdFx0c3RhdGUubW91c2UucG9zaXRpb24ueCArIChzdGF0ZS5tb3VzZS50YXJnZXQueCAtIHN0YXRlLm1vdXNlLnBvc2l0aW9uLngpIC8gMzAsXG5cdFx0XHRcdFx0XHRzdGF0ZS5tb3VzZS5wb3NpdGlvbi55ICsgKHN0YXRlLm1vdXNlLnRhcmdldC55IC0gc3RhdGUubW91c2UucG9zaXRpb24ueSkgLyAzMFxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSxcblx0XHRcdFx0Y2FtZXJhOiB7XG5cdFx0XHRcdFx0cG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKFxuXHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdHN0YXRlLm1vdXNlLnBvc2l0aW9uLnggKiAwLjAxNSxcblx0XHRcdFx0XHRcdC1zdGF0ZS5tb3VzZS5wb3NpdGlvbi55ICogMC4wMTUsXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRyb3RhdGlvbjogbmV3IFRIUkVFLkV1bGVyKFxuXHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdE1hdGguUEkgLSBzdGF0ZS5tb3VzZS5wb3NpdGlvbi54ICogMC4wNixcblx0XHRcdFx0XHRcdHN0YXRlLm1vdXNlLnBvc2l0aW9uLnkgKiAwLjIsXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXG5cblxuXHRcdGNhc2UgVHlwZXMuUkVTSVpFX1dJTkRPVzpcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuXHRcdFx0XHR3aW5kb3dTaXplOiBuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXHRcdFx0fSlcblxuXG5cblx0XHRjYXNlIFR5cGVzLk1PVkVfTU9VU0U6XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcblx0XHRcdFx0bW91c2U6IHtcblx0XHRcdFx0XHR0YXJnZXQ6IG5ldyBUSFJFRS5WZWN0b3IyKFxuXHRcdFx0XHRcdFx0KGFjdGlvbi5lLmNsaWVudFggLSBzdGF0ZS53aW5kb3dTaXplLnggLyAyKSAvIChzdGF0ZS53aW5kb3dTaXplLnggLyAyKSxcblx0XHRcdFx0XHRcdChzdGF0ZS53aW5kb3dTaXplLnkgLyAyIC0gYWN0aW9uLmUuY2xpZW50WSkgLyAoc3RhdGUud2luZG93U2l6ZS55IC8gMiksXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRwb3NpdGlvbjogc3RhdGUubW91c2UucG9zaXRpb25cblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB0dWJlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdGltZU1hY2hpbmUvcmVkdWNlcnMvdHViZS5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvVHViZSdcblxuaW1wb3J0IHtyZXNpemVXaW5kb3d9IGZyb20gJy4uL2FjdGlvbnMvcmVzaXplV2luZG93J1xuaW1wb3J0IHttb3ZlTW91c2V9IGZyb20gJy4uL2FjdGlvbnMvbW92ZU1vdXNlJ1xuaW1wb3J0IHttb3ZlQ2FtZXJhfSBmcm9tICcuLi9hY3Rpb25zL21vdmVDYW1lcmEnXG5pbXBvcnQge3VwZGF0ZU1hdGVyaWFsT2Zmc2V0fSBmcm9tICcuLi9hY3Rpb25zL21hdGVyaWFsJ1xuaW1wb3J0IHtpbml0aWFsaXplQ3VydmV9IGZyb20gJy4uL2FjdGlvbnMvaW5pdGlhbGl6ZUN1cnZlJ1xuaW1wb3J0IHt1cGRhdGVDdXJ2ZX0gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGVDdXJ2ZSdcbmltcG9ydCB7dXBkYXRlVGltZX0gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGVUaW1lJ1xuaW1wb3J0IHtsb2FkaW5nLCBsb2FkZWR9IGZyb20gJy4uL2FjdGlvbnMvbG9hZCdcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0bG9hZGluZzogc3RhdGUubG9hZC5sb2FkaW5nLFxuXHRcdHdpZHRoOiBzdGF0ZS50dWJlLndpbmRvd1NpemUueCxcblx0XHRoZWlnaHQ6IHN0YXRlLnR1YmUud2luZG93U2l6ZS55LFxuXHRcdGNhbWVyYVBvc2l0aW9uOiBzdGF0ZS50dWJlLmNhbWVyYS5wb3NpdGlvbixcblx0XHRjYW1lcmFSb3RhdGlvbjogc3RhdGUudHViZS5jYW1lcmEucm90YXRpb24sXG5cdFx0bWF0ZXJpYWxPZmZzZXQ6IHN0YXRlLnR1YmUubWF0ZXJpYWxPZmZzZXQsXG5cdFx0Y3VydmU6IHN0YXRlLnR1YmUuY3VydmUsXG5cdFx0dGltZTogc3RhdGUudGltZS5lbGFwc2VkLFxuXHR9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdG9uTG9hZGluZzogKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ0xvYWRpbmcuLi4nKVxuXHRcdFx0ZGlzcGF0Y2gobG9hZGluZygpKVxuXHRcdH0sXG5cdFx0b25Mb2FkZWQ6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdsb2FkZWQuLi4nKVxuXHRcdFx0ZGlzcGF0Y2gobG9hZGVkKCkpXG5cdFx0fSxcblx0XHRvblJlc2l6ZTogKGUpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdXSU5ET1dfUkVTSVpFJylcblx0XHRcdGRpc3BhdGNoKHJlc2l6ZVdpbmRvdyhlKSlcblx0XHR9LFxuXHRcdG9uTW91c2VNb3ZlOiAoZSkgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ01PVkVfTU9VU0UnKVxuXHRcdFx0ZGlzcGF0Y2gobW92ZU1vdXNlKGUpKVxuXHRcdH0sXG5cdFx0b25Nb3ZlQ2FtZXJhOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaChtb3ZlQ2FtZXJhKCkpXG5cdFx0fSxcblx0XHRvblVwZGF0ZU1hdGVyaWFsT2Zmc2V0OiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVNYXRlcmlhbE9mZnNldCgpKVxuXHRcdH0sXG5cdFx0b25Jbml0aWFsaXplQ3VydmU6ICgpID0+IHtcblx0XHRcdGRpc3BhdGNoKGluaXRpYWxpemVDdXJ2ZSgpKVxuXHRcdH0sXG5cdFx0b25VcGRhdGVDdXJ2ZTogKGdlb21ldHJpZXMpID0+IHtcblx0XHRcdGRpc3BhdGNoKHVwZGF0ZUN1cnZlKGdlb21ldHJpZXMpKVxuXHRcdH0sXG5cdFx0b25VcGRhdGVUaW1lOiAoKSA9PiB7XG5cdFx0XHRkaXNwYXRjaCh1cGRhdGVUaW1lKCkpXG5cdFx0fSxcblx0fVxufVxuXG5jb25zdCBUdWJlQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVHViZSlcblxuZXhwb3J0IGRlZmF1bHQgVHViZUNvbnRhaW5lclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3RpbWVNYWNoaW5lL2NvbnRhaW5lcnMvVHViZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdDMgZnJvbSAncmVhY3QtdGhyZWUtcmVuZGVyZXInXG5cbmltcG9ydCB2cyBmcm9tICcuLi9nbHNsL3R1YmUudmVydCdcbmltcG9ydCBmcyBmcm9tICcuLi9nbHNsL3R1YmUuZnJhZydcblxuY2xhc3MgVHViZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0c3VwZXIocHJvcHMpXG5cblx0dGhpcy5vbkxvYWRpbmcgPSA6OnRoaXMucHJvcHMub25Mb2FkaW5nXG5cdHRoaXMub25Mb2FkZWQgPSA6OnRoaXMucHJvcHMub25Mb2FkZWRcblx0dGhpcy5vblJlc2l6ZSA9IDo6dGhpcy5wcm9wcy5vblJlc2l6ZVxuXHR0aGlzLm9uTW91c2VNb3ZlID0gOjp0aGlzLnByb3BzLm9uTW91c2VNb3ZlXG5cdHRoaXMub25Nb3ZlQ2FtZXJhID0gOjp0aGlzLnByb3BzLm9uTW92ZUNhbWVyYVxuXHR0aGlzLm9uVXBkYXRlTWF0ZXJpYWxPZmZzZXQgPSA6OnRoaXMucHJvcHMub25VcGRhdGVNYXRlcmlhbE9mZnNldFxuXHR0aGlzLm9uSW5pdGlhbGl6ZUN1cnZlID0gOjp0aGlzLnByb3BzLm9uSW5pdGlhbGl6ZUN1cnZlXG5cdHRoaXMub25VcGRhdGVDdXJ2ZSA9IDo6dGhpcy5wcm9wcy5vblVwZGF0ZUN1cnZlXG5cdHRoaXMub25VcGRhdGVUaW1lID0gOjp0aGlzLnByb3BzLm9uVXBkYXRlVGltZVxuXG5cdHRoaXMudGV4dHVyZXMgPSB7XG5cdCAgXCJzdG9uZVwiOiB7XG5cdFx0dXJsOiBcIi9hc3NldHMvaW1nL3R1YmUvc3RvbmVQYXR0ZXJuLmpwZ1wiXG5cdCAgfSxcblx0fVxuICB9XG5cbiAgLyogTGlmZUN5Y2xlICovXG5cbiAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvL1xuICAvLyB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdHRoaXMuaGFuZGxlSW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdHRoaXMuaGFuZGxlQ2xvbmVUdWJlR2VvbWV0cnkoKVxuXHR9KVxuXHR0aGlzLmhhbmRsZVJlc2l6ZSgpXG5cdHRoaXMuaGFuZGxlTW91c2VNb3ZlKClcbiAgfVxuXG5cbiAgLyogY3VzdG9tIEZ1bmN0aW9uICAqL1xuXG4gIGhhbmRsZUluaXRpYWxpemUoKSB7XG5cdCAgdGhpcy5vbkxvYWRpbmcoKVxuXHQgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0ICB0aGlzLm9uSW5pdGlhbGl6ZUN1cnZlKClcblx0XHQgIHJlc29sdmUoKVxuXHQgIH0pO1xuICB9XG5cbiAgaGFuZGxlUmVzaXplKCkge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUoKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZUNsb25lVHViZUdlb21ldHJ5KCkge1xuXHQgIGNvbnNvbGUubG9nKHRoaXMucmVmcy50dWJlTWVzaClcblx0dGhpcy50dWJlR2VvbWV0cnlfbyA9IHRoaXMucmVmcy50dWJlTWVzaC5nZW9tZXRyeS5jbG9uZSgpXG4gIH1cblxuICBoYW5kbGVVcGRhdGVDdXJ2ZSgpIHtcblx0IHRoaXMub25VcGRhdGVDdXJ2ZSh7XG5cdFx0IHNwbGluZUdlb21ldHJ5OiB0aGlzLnJlZnMuc3BsaW5lTWVzaC5nZW9tZXRyeSxcblx0XHQgdHViZUdlb21ldHJ5OiB0aGlzLnJlZnMudHViZU1lc2guZ2VvbWV0cnksXG5cdFx0IHR1YmVHZW9tZXRyeV9vOiB0aGlzLnR1YmVHZW9tZXRyeV9vLFxuXHQgfSlcbiAgfVxuXG4gIGhhbmRsZU1vdmVDYW1lcmEoKSB7XG5cdCAgdGhpcy5vbk1vdmVDYW1lcmEoKVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlTWF0ZXJpYWxPZmZzZXQoKSB7XG5cdCAgdGhpcy5vblVwZGF0ZU1hdGVyaWFsT2Zmc2V0KClcbiAgfVxuXG4gIGhhbmRsZUFuaW1hdGUoKSB7XG4gICAgICB0aGlzLm9uVXBkYXRlVGltZSgpXG5cdCAgdGhpcy5oYW5kbGVVcGRhdGVDdXJ2ZSgpXG5cdCAgdGhpcy5oYW5kbGVNb3ZlQ2FtZXJhKClcblx0ICB0aGlzLmhhbmRsZVVwZGF0ZU1hdGVyaWFsT2Zmc2V0KClcbiAgfVxuXG5cblxuICByZW5kZXIoKSB7XG5cdGNvbnN0IHtsb2FkaW5nLCB3aWR0aCwgaGVpZ2h0LCBjYW1lcmFQb3NpdGlvbiwgY2FtZXJhUm90YXRpb24sIG1hdGVyaWFsT2Zmc2V0LCBjdXJ2ZSwgdGltZX0gPSB0aGlzLnByb3BzXG5cblxuXHRpZiAobG9hZGluZykgcmV0dXJuKDxoMj5Mb2FkaW5nLi4uPC9oMj4pXG5cdHJldHVybihcblx0XHQ8UmVhY3QzXG5cdFx0ICBtYWluQ2FtZXJhPVwiY2FtZXJhXCJcblx0XHQgIHdpZHRoPXt3aWR0aH1cblx0XHQgIGhlaWdodD17aGVpZ2h0fVxuXHRcdCAgb25BbmltYXRlPXs6OnRoaXMuaGFuZGxlQW5pbWF0ZX1cblx0XHQgIGNsZWFyQ29sb3I9ezB4MjIyMjIyfVxuXHRcdCAgYW50aWFsaWFzPXt0cnVlfVxuXHRcdD5cblx0XHQgIDxzY2VuZVxuXHRcdFx0Zm9nPXtuZXcgVEhSRUUuRm9nKDB4MjIyMjIyLCAwLjYsIDIuOCl9XG5cdFx0ICA+XG5cblx0XHRcdHsvKiBIZWxwZXIgKi99XG5cdFx0XHR7LyogPGF4aXNIZWxwZXIgLz4gKi99XG5cblx0XHRcdHsvKiBDYW1lcmEgKi99XG5cdFx0XHQ8cGVyc3BlY3RpdmVDYW1lcmFcblx0XHRcdCAgbmFtZT1cImNhbWVyYVwiXG5cdFx0XHQgIGZvdj17MTV9XG5cdFx0XHQgIGFzcGVjdD17d2lkdGggLyBoZWlnaHR9XG5cdFx0XHQgIG5lYXI9ezAuMDF9XG5cdFx0XHQgIGZhcj17MTAwMH1cblx0XHRcdCAgcG9zaXRpb249e2NhbWVyYVBvc2l0aW9ufVxuXHRcdFx0ICByb3RhdGlvbj17Y2FtZXJhUm90YXRpb259XG5cdFx0XHQvPlxuXG5cdFx0XHR7LyogTGlnaHQgKi99XG5cdFx0XHQ8aGVtaXNwaGVyZUxpZ2h0XG5cdFx0XHQgIHNreUNvbG9yPXsweGZmZmZiYn1cblx0XHRcdCAgZ3JvdW5kQ29sb3I9ezB4ODg3OTc5fVxuXHRcdFx0ICBpbnRlbnNpdHk9ezAuOX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGlyZWN0aW9uYWxMaWdodFxuXHRcdFx0ICBjb2xvcj17MHhmZmZmZmZ9XG5cdFx0XHQgIGludGVuc2l0eT17MC44fVxuXHRcdFx0Lz5cblxuXHRcdFx0ey8qIGhlbHBlciBNZXNoKi99XG5cdFx0XHR7LyogPG1lc2g+XG5cdFx0XHQgIDxib3hHZW9tZXRyeVxuXHRcdFx0XHR3aWR0aD17MX1cblx0XHRcdFx0aGVpZ2h0PXsxfVxuXHRcdFx0XHRkZXB0aD17MX1cblx0XHRcdCAgLz5cblx0XHRcdCAgPG1lc2hCYXNpY01hdGVyaWFsXG5cdFx0XHRcdGNvbG9yPXsweGVlZWVlZX1cblx0XHRcdCAgLz5cblx0XHRcdDwvbWVzaD4gKi99XG5cblx0XHRcdHsvKiBzcGxpbmUgTWVzaCAqL31cblx0XHRcdDxtZXNoIHJlZj0nc3BsaW5lTWVzaCc+XG5cdFx0XHQgIDxnZW9tZXRyeSB2ZXJ0aWNlcz17Y3VydmUuZ2V0UG9pbnRzKDcwKX0gLz5cblx0XHRcdCAgPGxpbmVCYXNpY01hdGVyaWFsIC8+XG5cdFx0XHQ8L21lc2g+XG5cblx0XHRcdHsvKiBUdWJlIE1lc2ggKi99XG5cdFx0XHQ8bWVzaCByZWY9J3R1YmVNZXNoJz5cblx0XHRcdCAgPHR1YmVHZW9tZXRyeVxuXHRcdFx0XHRwYXRoPXtjdXJ2ZX1cblx0XHRcdFx0c2VnbWVudHM9ezcwfVxuXHRcdFx0XHRyYWRpdXM9ezAuMDJ9XG5cdFx0XHRcdHJhZGl1c1NlZ21lbnRzPXs1MH1cblx0XHRcdFx0Y2xvc2VkPXtmYWxzZX1cblx0XHRcdCAgLz5cblx0XHRcdCAgPHNoYWRlck1hdGVyaWFsXG5cdFx0XHRcdCAgdmVydGV4U2hhZGVyPXt2c31cblx0XHRcdFx0ICBmcmFnbWVudFNoYWRlcj17ZnN9XG5cdFx0XHRcdCAgYmxlbmRpbmc9e1RIUkVFLk5vcm1hbEJsZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgc2lkZT17VEhSRUUuRG91YmxlU2lkZX1cblx0XHRcdCAgPlxuXHRcdFx0XHQgIDx1bmlmb3Jtcz5cblx0XHRcdFx0XHQgIHsvKiA8dW5pZm9ybSBuYW1lPXsndGV4dHVyZSd9IHR5cGU9eyd0J30gdmFsdWU9e3RoaXMudGV4dHVyZXNbJ3NhbmQnXS50ZXh0dXJlfSAvPiAqL31cblx0XHRcdFx0XHQgIDx1bmlmb3JtIG5hbWU9eyd0aW1lJ30gdHlwZT17J2YnfSB2YWx1ZT17dGltZX0gLz5cblx0XHRcdFx0XHQgIHsvKiA8dW5pZm9ybSBuYW1lPXsnbW91c2UnfSB0eXBlPXsndmVjMid9IHZhbHVlPXttb3VzZX0gLz4gKi99XG5cdFx0XHRcdCAgPC91bmlmb3Jtcz5cblx0XHRcdCAgPC9zaGFkZXJNYXRlcmlhbD5cblx0XHRcdDwvbWVzaD5cblx0XHQgIDwvc2NlbmU+XG5cdFx0PC9SZWFjdDM+XG5cdCAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1YmVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC90aW1lTWFjaGluZS9jb21wb25lbnRzL1R1YmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwidmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3RpbWVNYWNoaW5lL2dsc2wvdHViZS52ZXJ0XG4vLyBtb2R1bGUgaWQgPSA1MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwibW9kdWxlLmV4cG9ydHMgPSBcInVuaWZvcm0gZmxvYXQgdGltZTtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbmZsb2F0IHJhbmRvbSAoaW4gZmxvYXQgeCkge1xcblxcdHJldHVybiBmcmFjdChzaW4oeCkqMWU0KTtcXG59XFxuXFxuZmxvYXQgcmFuZG9tIChpbiB2ZWMyIHN0KSB7XFxuXFx0cmV0dXJuIGZyYWN0KHNpbihkb3Qoc3QueHksIHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkqIDQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG5mbG9hdCBwYXR0ZXJuKHZlYzIgc3QsIHZlYzIgdiwgZmxvYXQgdCkge1xcblxcdHZlYzIgcCA9IGZsb29yKHN0K3YpO1xcblxcdHJldHVybiBzdGVwKHQsIHJhbmRvbSgxMDAuK3AqLjAwMDAwMSkrcmFuZG9tKHAueCkqMC41ICk7XFxufVxcblxcbnZvaWQgbWFpbigpIHtcXG5cXHR2ZWMyIHN0ID0gdlV2O1xcblxcblxcdHZlYzIgZ3JpZCA9IHZlYzIoMTAwMC4sMTAwMC4pO1xcblxcdHN0ICo9IGdyaWQ7XFxuXFxuXFx0dmVjMiBpcG9zID0gZmxvb3Ioc3QpOyAgLy8gaW50ZWdlclxcblxcdHZlYzIgZnBvcyA9IGZyYWN0KHN0KTsgIC8vIGZyYWN0aW9uXFxuXFxuXFx0dmVjMiB2ZWwgPSB2ZWMyKHRpbWUqbWF4KGdyaWQueCxncmlkLnkpKTsgLy8gdGltZVxcblxcdHZlbCAqPSB2ZWMyKDEuLDAuMCkgKiByYW5kb20oMS4wK2lwb3MueSk7IC8vIGRpcmVjdGlvblxcblxcblxcdHZlYzMgY29sb3IgPSB2ZWMzKDAuKTtcXG5cXHRjb2xvci5yID0gcGF0dGVybihzdCx2ZWwsMS4wKTtcXG5cXHRjb2xvci5nID0gcGF0dGVybihzdCx2ZWwsMS4wKTtcXG5cXHRjb2xvci5iID0gcGF0dGVybihzdCx2ZWwsMS4wKTtcXG5cXG5cXHQvLyBNYXJnaW5zXFxuXFx0Y29sb3IgKj0gc3RlcCgwLjEsZnBvcy55KTtcXG5cXHRjb2xvciAqPSB2ZWMzKGFicyhzaW4odGltZSAqIDAuMTcpKSwgYWJzKGNvcyh0aW1lICogMC40NykpLCBhYnMoc2luKHRpbWUgKiAwLjc5KSkpO1xcblxcblxcdGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsMS4wKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC90aW1lTWFjaGluZS9nbHNsL3R1YmUuZnJhZ1xuLy8gbW9kdWxlIGlkID0gNTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCBUeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9udHlwZXMnXG5cbmV4cG9ydCBjb25zdCByZXNpemVXaW5kb3cgPSAoZSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlJFU0laRV9XSU5ET1csXG5cdFx0ZTogZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3RpbWVNYWNoaW5lL2FjdGlvbnMvcmVzaXplV2luZG93LmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IG1vdmVNb3VzZSA9IChlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuTU9WRV9NT1VTRSxcblx0XHRlOiBlLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdGltZU1hY2hpbmUvYWN0aW9ucy9tb3ZlTW91c2UuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgbW92ZUNhbWVyYSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5VUERBVEVfQ0FNRVJBX1BPU0lUSU9OLFxuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdGltZU1hY2hpbmUvYWN0aW9ucy9tb3ZlQ2FtZXJhLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1hdGVyaWFsT2Zmc2V0ID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFR5cGVzLlVQREFURV9NQVRFUklBTF9PRkZTRVQsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC90aW1lTWFjaGluZS9hY3Rpb25zL21hdGVyaWFsLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVDdXJ2ZSA9ICgpID0+IHtcblxuXHQvKiDliJ3mnJ/lrqPoqIAgKi9cblx0bGV0IHBvaW50cyA9IFtdXG5cdGxldCBjdXJ2ZVBvaW50TnVtID0gNVxuXG5cdC8qIFrou7jjgpLjgZrjgonjgZfjgaTjgaTjgIHopIfmlbDjga7luqfmqJnjgpLkvZzmiJDjgZfjgIHphY3liJfjgavmoLzntI0gKi9cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJ2ZVBvaW50TnVtOyBpKyspIHtcblx0ICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAyLjUgKiAoaSAvIDQpKSlcblx0fVxuXHRwb2ludHNbY3VydmVQb2ludE51bSAtIDFdLnkgPSAtMC4wNlxuXG5cdC8qIOW6p+aomeOCkueUqOOBhOOBpuOAgemWk+OBruW6p+aomeOCkuijnOWujOOBl+OBpuOAgeOCq+ODvOODluOBruS9nOaIkCAqL1xuXHRsZXQgY3VydmUgPSBuZXcgVEhSRUUuQ2F0bXVsbFJvbUN1cnZlMyhwb2ludHMpXG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5JTklUSUFMSVpFX0NVUlZFLFxuXHRcdGN1cnZlOiBjdXJ2ZSxcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3RpbWVNYWNoaW5lL2FjdGlvbnMvaW5pdGlhbGl6ZUN1cnZlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUN1cnZlID0gKGdlb21ldHJpZXMpID0+IHtcblxuXHRsZXQgc3BsaW5lR2VvbWV0cnkgPSBnZW9tZXRyaWVzLnNwbGluZUdlb21ldHJ5XG5cdGxldCB0dWJlR2VvbWV0cnkgPSBnZW9tZXRyaWVzLnR1YmVHZW9tZXRyeVxuXHRsZXQgdHViZUdlb21ldHJ5X28gPSBnZW9tZXRyaWVzLnR1YmVHZW9tZXRyeV9vXG5cblx0bGV0IGluZGV4ID0gMCwgdmVydGljZV9vID0gbnVsbCwgdmVydGljZSA9IG51bGw7XG5cdC8vIEZvciBlYWNoIHZlcnRpY2Ugb2YgdGhlIHR1YmUsIG1vdmUgaXQgYSBiaXQgYmFzZWQgb24gdGhlIHNwbGluZVxuIFx0Zm9yIChsZXQgaSA9IDAsIGogPSB0dWJlR2VvbWV0cnkudmVydGljZXMubGVuZ3RoOyBpIDwgajsgaSArPSAxKSB7XG5cdFx0Ly8gR2V0IHRoZSBvcmlnaW5hbCB0dWJlIHZlcnRpY2Vcblx0XHR2ZXJ0aWNlX28gPSB0dWJlR2VvbWV0cnlfby52ZXJ0aWNlc1tpXTtcblx0XHQvLyBHZXQgdGhlIHZpc2libGUgdHViZSB2ZXJ0aWNlXG5cdFx0dmVydGljZSA9IHR1YmVHZW9tZXRyeS52ZXJ0aWNlc1tpXTtcblx0XHQvLyBDYWxjdWxhdGUgaW5kZXggb2YgdGhlIHZlcnRpY2UgYmFzZWQgb24gdGhlIFogYXhpc1xuXHRcdC8vIFRoZSB0dWJlIGlzIG1hZGUgb2YgNTAgcmluZ3Mgb2YgdmVydGljZXNcblx0XHRpbmRleCA9IE1hdGguZmxvb3IoaSAvIDUwKTtcblx0XHQvLyBVcGRhdGUgdHViZSB2ZXJ0aWNlXG5cdFx0dmVydGljZS54ICs9XG5cdFx0XHQodmVydGljZV9vLnggKyBzcGxpbmVHZW9tZXRyeS52ZXJ0aWNlc1tpbmRleF0ueCAtIHZlcnRpY2UueCkgL1xuXHRcdFx0MTA7XG5cdFx0dmVydGljZS55ICs9XG5cdFx0XHQodmVydGljZV9vLnkgKyBzcGxpbmVHZW9tZXRyeS52ZXJ0aWNlc1tpbmRleF0ueSAtIHZlcnRpY2UueSkgL1xuXHRcdFx0NTtcblx0fVxuXG5cdC8vIFdhcm4gVGhyZWVKcyB0aGF0IHRoZSBwb2ludHMgaGF2ZSBjaGFuZ2VkXG4gXHR0dWJlR2VvbWV0cnkudmVydGljZXNOZWVkVXBkYXRlID0gdHJ1ZTtcbiBcdHNwbGluZUdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5VUERBVEVfQ1VSVkUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC90aW1lTWFjaGluZS9hY3Rpb25zL3VwZGF0ZUN1cnZlLmpzIiwiaW1wb3J0IFR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb250eXBlcydcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRpbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogVHlwZXMuVVBEQVRFX1RJTUUsXG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC90aW1lTWFjaGluZS9hY3Rpb25zL3VwZGF0ZVRpbWUuanMiLCJpbXBvcnQgVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5MT0FESU5HXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlZCA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUeXBlcy5MT0FERURcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3RpbWVNYWNoaW5lL2FjdGlvbnMvbG9hZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=