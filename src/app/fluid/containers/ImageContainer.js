import { connect } from 'react-redux'
import Image from '../components/Image'

import {resizeWindow} from '../actions/resizeWindow'
import {updateTime, resetTime} from '../actions/time'
import {clickMesh} from '../actions/clickMesh'
import {moveMouse} from '../actions/moveMouse'
import {loading, loaded} from '../actions/load'

const mapStateToProps = (state) => {

	let content = document.getElementById('content')
	return {
		loading: state.load.loading,
		width: content.clientWidth,
		height: content.clientHeight,
		windowWidth: state.windowSize.x,
		windowHeight: state.windowSize.y,
		cameraPosition: state.camera.position,
		elapsed: state.time.elapsed,
		duration: state.time.duration,
		pointerPosition: state.pointer.position,
		// mouse: state.mouse.target,
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
		onResetTime: () => {
			dispatch(resetTime())
		},
		onClickMesh: (e) => {
			dispatch(clickMesh(e))
		},
		// onMoveMouse: (e) => {
		// 	dispatch(moveMouse(e))
		// },
	}
}

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(Image)

export default ImageContainer
