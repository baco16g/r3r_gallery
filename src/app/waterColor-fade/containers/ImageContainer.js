import { connect } from 'react-redux'
import Image from '../components/Image'

import {resizeWindow} from '../actions/resizeWindow'
import {playTime, rewindTime} from '../actions/time'
import {loading, loaded} from '../actions/load'

const mapStateToProps = (state) => {

	return {
		loading: state.load.loading,
		width: state.resolution.width,
		height: state.resolution.height,
		windowWidth: state.windowSize.x,
		windowHeight: state.windowSize.y,
		cameraPosition: state.camera.position,
		elapsed: state.time.elapsed,
		duration: state.time.duration,
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
		onPlayTime: () => {
			dispatch(playTime())
		},
		onRewindTime: () => {
			dispatch(rewindTime())
		},
	}
}

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(Image)

export default ImageContainer
