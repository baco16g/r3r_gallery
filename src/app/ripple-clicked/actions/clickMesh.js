import Types from '../constants/actiontypes'

export const clickMesh = (e) => {
	return {
		type: Types.CLICK_MESH,
		e: e,
	}
}
