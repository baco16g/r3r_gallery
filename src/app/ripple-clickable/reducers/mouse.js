import Types from '../constants/actiontypes'

const mouse = (
	state = {
		target: new THREE.Vector2(0, 0),
	}, action) => {

	switch(action.type) {
		case Types.MOVE_MOUSE:
			return Object.assign({}, state, {
				target: new THREE.Vector2(
					(action.e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
					(window.innerHeight / 2 - action.e.clientY) / (window.innerHeight / 2),
				),
			})
		default:
			return state
	}

}

export default mouse
