import { connect } from 'react-redux'
import Tube from '../components/Tube'

import {resizeWindow} from '../actions/resizeWindow'
import {moveMouse} from '../actions/moveMouse'
import {moveCamera} from '../actions/moveCamera'
import {updateMaterialOffset} from '../actions/material'
import {initializeCurve} from '../actions/initializeCurve'
import {updateCurve} from '../actions/updateCurve'
import {updateTime} from '../actions/updateTime'
import {loading, loaded} from '../actions/load'

const mapStateToProps = (state) => {
	return {
		loading: state.load.loading,
		width: state.tube.windowSize.x,
		height: state.tube.windowSize.y,
		cameraPosition: state.tube.camera.position,
		cameraRotation: state.tube.camera.rotation,
		materialOffset: state.tube.materialOffset,
		curve: state.tube.curve,
		time: state.time.elapsed,
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
			// console.log('WINDOW_RESIZE')
			dispatch(resizeWindow(e))
		},
		onMouseMove: (e) => {
			// console.log('MOVE_MOUSE')
			dispatch(moveMouse(e))
		},
		onMoveCamera: () => {
			dispatch(moveCamera())
		},
		onUpdateMaterialOffset: () => {
			dispatch(updateMaterialOffset())
		},
		onInitializeCurve: () => {
			dispatch(initializeCurve())
		},
		onUpdateCurve: (geometries) => {
			dispatch(updateCurve(geometries))
		},
		onUpdateTime: () => {
			dispatch(updateTime())
		},
	}
}

const TubeContainer = connect(mapStateToProps, mapDispatchToProps)(Tube)

export default TubeContainer
