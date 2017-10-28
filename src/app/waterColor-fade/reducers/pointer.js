import Types from '../constants/actiontypes'

const pointer = (
	state = {
		position: new THREE.Vector2(0.5, 0.5),
	}, action) => {

	switch(action.type) {
		case Types.CLICK_MESH:
			let rect = action.e.target.getBoundingClientRect();
			console.log(rect);
			return Object.assign({}, state, {
				position: new THREE.Vector2(
					(action.e.clientX - rect.left) / action.e.target.width,
					(action.e.target.height - action.e.clientY + rect.top) / action.e.target.height,
				),
			})
		default:
			return state
	}

}

export default pointer
