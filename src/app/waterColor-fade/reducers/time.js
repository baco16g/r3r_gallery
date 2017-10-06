import Types from '../constants/actiontypes'

const time = (
	state = {
		elapsed: 0.0,
		duration: 1.5,
	}, action) => {

	switch(action.type) {
		case Types.UPDATE_TIME:
			return Object.assign({}, state, {
				elapsed: state.elapsed + 0.01,
				duration: state.duration,
			})
		case Types.RESET_TIME:
			return Object.assign({}, state, {
				elapsed: state.elapsed * 0.0,
				duration: state.duration,
			})
		default:
			return state
	}

}

export default time
