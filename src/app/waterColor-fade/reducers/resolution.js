import Types from '../constants/actiontypes'

let content = document.getElementById('content')

const resolution = (
	state = {
		width: content.clientWidth,
		height: content.clientHeight,
	}, action) => {

	switch(action.type) {

		default:
			return state
	}

}

export default resolution
