import Types from '../constants/actiontypes'

export const playTime = () => {
	return {
		type: Types.PLAY_TIME,
	}
}

export const rewindTime = () => {
	return {
		type: Types.REWIND_TIME,
	}
}
