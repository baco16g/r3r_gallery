import Types from '../constants/actiontypes'

export const loading = () => {
	return {
		type: Types.LOADING
	}
}

export const loaded = () => {
	return {
		type: Types.LOADED
	}
}
