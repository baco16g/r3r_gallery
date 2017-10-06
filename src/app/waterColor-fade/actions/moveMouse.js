import Types from '../constants/actiontypes'

export const moveMouse = (e) => {
	return {
		type: Types.MOVE_MOUSE,
		e: e,
	}
}
