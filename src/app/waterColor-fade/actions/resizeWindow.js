import Types from '../constants/actiontypes'

export const resizeWindow = (e) => {
	return {
		type: Types.RESIZE_WINDOW,
		e: e,
	}
}
