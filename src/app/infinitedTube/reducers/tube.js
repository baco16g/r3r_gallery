import Types from '../constants/actiontypes'

const tube = (
	state = {
		curve: null,
		materialOffset: new THREE.Vector2(0, 0),
		mouse: {
			position: new THREE.Vector2(0, 0),
			target: new THREE.Vector2(0, 0),
		},
		camera: {
			position: new THREE.Vector3(0, 0, 0.35),
			rotation: new THREE.Euler(),
		},
		windowSize: new THREE.Vector2(window.innerWidth, window.innerHeight),
	}, action) => {



	switch(action.type) {

		case Types.INITIALIZE_CURVE:
			return Object.assign({}, state, {
				curve: action.curve,
			})

		case Types.UPDATE_CURVE:
			state.curve.points[2].x = -state.mouse.position.x * 0.1;
			state.curve.points[4].x = -state.mouse.position.x * 0.1;
			state.curve.points[2].y = state.mouse.position.y * 0.1;

			// return Object.assign({}, state, {
			// 	materialOffset: new THREE.Vector2(
			// 		state.materialOffset.x + 0.02,
			// 		0,
			// 	),
			// })

		case Types.UPDATE_MATERIAL_OFFSET:
			return Object.assign({}, state, {
				materialOffset: new THREE.Vector2(
					state.materialOffset.x + 0.02,
					0,
				),
			})

		case Types.UPDATE_CAMERA_POSITION:
			return Object.assign({}, state, {
				mouse: {
					target: state.mouse.target,
					position: new THREE.Vector2(
						state.mouse.position.x + (state.mouse.target.x - state.mouse.position.x) / 30,
						state.mouse.position.y + (state.mouse.target.y - state.mouse.position.y) / 30
					)
				},
				camera: {
					position: new THREE.Vector3(
						0,
						state.mouse.position.x * 0.015,
						-state.mouse.position * 0.015,
					),
					rotation: new THREE.Euler(
						0,
						Math.PI - state.mouse.position.x * 0.06,
						state.mouse.position.x * 0.2,
					)
				}
			})



		case Types.RESIZE_WINDOW:
			return Object.assign({}, state, {
				windowSize: new THREE.Vector2(window.innerWidth, window.innerHeight)
			})



		case Types.MOVE_MOUSE:
			return Object.assign({}, state, {
				mouse: {
					target: new THREE.Vector2(
						(action.e.clientX - state.windowSize.x / 2) / (state.windowSize.x / 2),
						(state.windowSize.y / 2 - action.e.clientY) / (state.windowSize.y / 2),
					),
					position: state.mouse.position
				}
			})

		default:
			return state
	}
}

export default tube
