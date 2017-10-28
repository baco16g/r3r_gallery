import Types from '../constants/actiontypes'

const image = (
	state = {
		// maxNoise: 0.5,
	}, action) => {

	switch(action.type) {
		// case Types.LOADING:
		// 	return Object.assign({}, state, {
		// 		loading: true,
		// 	})
		// case Types.LOADED:
		// 	return Object.assign({}, state, {
		// 		loading: false,
		// 	})
		default:
			return state
	}
}

export default image
