import Types from '../constants/actiontypes'

export const moveCamera = () => {
	return {
		type: Types.UPDATE_CAMERA_POSITION,
	}
}
