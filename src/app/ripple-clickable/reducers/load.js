import Types from '../constants/actiontypes'

const load = (
	state = {
		loading: true
	}, action) => {

	switch(action.type) {
		case Types.LOADING:
			return Object.assign({}, state, {
				loading: true,
			})
		case Types.LOADED:
			return Object.assign({}, state, {
				loading: false,
			})
		default:
			return state
	}

}

export default load
