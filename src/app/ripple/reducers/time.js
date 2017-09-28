import Types from '../constants/actiontypes'

const time = (
	state = {
		elapsed: 0.0,
	}, action) => {

	switch(action.type) {
		case Types.UPDATE_TIME:
			return Object.assign({}, state, {
				elapsed: state.elapsed + 0.01
			})
		default:
			return state
	}

}

export default time
