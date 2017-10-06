import Types from '../constants/actiontypes'

export const updateTime = () => {
	return {
		type: Types.UPDATE_TIME,
	}
}

export const resetTime = () => {
	return {
		type: Types.RESET_TIME,
	}
}
