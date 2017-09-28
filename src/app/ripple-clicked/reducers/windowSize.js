import Types from '../constants/actiontypes'

const windowSize = (
	state = new THREE.Vector2(window.innerWidth, window.innerHeight), action) => {

	switch(action.type) {
		case Types.RESIZE_WINDOW:
			return Object.assign({}, state,
				new THREE.Vector2(window.innerWidth, window.innerHeight)
			)
		default:
			return state
	}

}

export default windowSize
