import Types from '../constants/actiontypes'

const mouse = (
	state = {
		target: new THREE.Vector2(0, 0),
	}, action) => {

	switch(action.type) {
		case Types.MOVE_MOUSE:
			let rect = action.e.target.getBoundingClientRect();
			let w = (action.e.clientX - rect.left) / action.e.target.width;
			let h = (action.e.target.height - action.e.clientY + rect.top) / action.e.target.height;
			console.log(state.target)
			return Object.assign({}, state, {
				target: new THREE.Vector2(
					w,
					h
				),
			})
		default:
			return state
	}

}

export default mouse
