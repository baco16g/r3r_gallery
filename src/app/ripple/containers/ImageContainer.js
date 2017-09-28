import { connect } from 'react-redux'
import Image from '../components/Image'

import {resizeWindow} from '../actions/resizeWindow'
import {updateTime} from '../actions/updateTime'
import {moveMouse} from '../actions/moveMouse'
import {loading, loaded} from '../actions/load'

const mapStateToProps = (state) => {
	return {
		loading: state.load.loading,
		width: state.windowSize.x,
		height: state.windowSize.y,
		cameraPosition: state.camera.position,
		time: state.time.elapsed,
		mouse: state.mouse.target,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLoading: () => {
			console.log('Loading...')
			dispatch(loading())
		},
		onLoaded: () => {
			console.log('loaded...')
			dispatch(loaded())
		},
		onResize: (e) => {
			dispatch(resizeWindow(e))
		},
		onUpdateTime: () => {
			dispatch(updateTime())
		},
		onMoveMouse: (e) => {
			dispatch(moveMouse(e))
		},
	}
}

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(Image)

export default ImageContainer
