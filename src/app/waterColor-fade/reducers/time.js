import Types from '../constants/actiontypes'

const time = (
	state = {
		elapsed: 0.0,
		duration: 0.5,
	}, action) => {

	switch(action.type) {
		case Types.PLAY_TIME:
			return Object.assign({}, state, {
				elapsed: Math.min(state.elapsed + 0.01, state.duration),
				duration: state.duration,
			})
		case Types.REWIND_TIME:
			return Object.assign({}, state, {
				elapsed:  Math.max(state.elapsed - 0.01, 0.0),
				duration: state.duration,
			})
		default:
			return state
	}

}

export default time
