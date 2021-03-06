import React from 'react'
import React3 from 'react-three-renderer'

import vs from '../glsl/tube.vert'
import fs from '../glsl/tube.frag'

class Tube extends React.Component {

  constructor(props) {
	super(props)

	this.onLoading = ::this.props.onLoading
	this.onLoaded = ::this.props.onLoaded
	this.onResize = ::this.props.onResize
	this.onMouseMove = ::this.props.onMouseMove
	this.onMoveCamera = ::this.props.onMoveCamera
	this.onUpdateMaterialOffset = ::this.props.onUpdateMaterialOffset
	this.onInitializeCurve = ::this.props.onInitializeCurve
	this.onUpdateCurve = ::this.props.onUpdateCurve
	this.onUpdateTime = ::this.props.onUpdateTime

	this.textures = {
	  "stone": {
		url: "/assets/img/tube/stonePattern.jpg"
	  },
	}
  }

  /* LifeCycle */

  // componentWillMount() {
  //
  // }

  componentDidMount() {
	this.handleInitialize().then(() => {
		this.onLoaded()
		this.handleCloneTubeGeometry()
	})
	this.handleResize()
	this.handleMouseMove()
  }


  /* custom Function  */

  handleInitialize() {
	  this.onLoading()
	  return new Promise((resolve, reject) => {
		  this.onInitializeCurve()
		  resolve()
	  });
  }

  handleResize() {
	window.addEventListener('resize', this.onResize, false)
  }

  handleMouseMove() {
	window.addEventListener('mousemove', this.onMouseMove, false)
  }

  handleCloneTubeGeometry() {
	  console.log(this.refs.tubeMesh)
	this.tubeGeometry_o = this.refs.tubeMesh.geometry.clone()
  }

  handleUpdateCurve() {
	 this.onUpdateCurve({
		 splineGeometry: this.refs.splineMesh.geometry,
		 tubeGeometry: this.refs.tubeMesh.geometry,
		 tubeGeometry_o: this.tubeGeometry_o,
	 })
  }

  handleMoveCamera() {
	  this.onMoveCamera()
  }

  handleUpdateMaterialOffset() {
	  this.onUpdateMaterialOffset()
  }

  handleAnimate() {
      this.onUpdateTime()
	  this.handleUpdateCurve()
	  this.handleMoveCamera()
	  this.handleUpdateMaterialOffset()
  }



  render() {
	const {loading, width, height, cameraPosition, cameraRotation, materialOffset, curve, time} = this.props


	if (loading) return(<h2>Loading...</h2>)
	return(
		<React3
		  mainCamera="camera"
		  width={width}
		  height={height}
		  onAnimate={::this.handleAnimate}
		  clearColor={0x222222}
		  antialias={true}
		>
		  <scene
			fog={new THREE.Fog(0x222222, 0.6, 2.8)}
		  >

			{/* Helper */}
			{/* <axisHelper /> */}

			{/* Camera */}
			<perspectiveCamera
			  name="camera"
			  fov={15}
			  aspect={width / height}
			  near={0.01}
			  far={1000}
			  position={cameraPosition}
			  rotation={cameraRotation}
			/>

			{/* Light */}
			<hemisphereLight
			  skyColor={0xffffbb}
			  groundColor={0x887979}
			  intensity={0.9}
			/>
			<directionalLight
			  color={0xffffff}
			  intensity={0.8}
			/>

			{/* helper Mesh*/}
			{/* <mesh>
			  <boxGeometry
				width={1}
				height={1}
				depth={1}
			  />
			  <meshBasicMaterial
				color={0xeeeeee}
			  />
			</mesh> */}

			{/* spline Mesh */}
			<mesh ref='splineMesh'>
			  <geometry vertices={curve.getPoints(70)} />
			  <lineBasicMaterial />
			</mesh>

			{/* Tube Mesh */}
			<mesh ref='tubeMesh'>
			  <tubeGeometry
				path={curve}
				segments={70}
				radius={0.02}
				radiusSegments={50}
				closed={false}
			  />
			  <shaderMaterial
				  vertexShader={vs}
				  fragmentShader={fs}
				  blending={THREE.NormalBlending}
                  side={THREE.DoubleSide}
			  >
				  <uniforms>
					  {/* <uniform name={'texture'} type={'t'} value={this.textures['sand'].texture} /> */}
					  <uniform name={'time'} type={'f'} value={time} />
					  {/* <uniform name={'mouse'} type={'vec2'} value={mouse} /> */}
				  </uniforms>
			  </shaderMaterial>
			</mesh>
		  </scene>
		</React3>
	  )
  }
}

export default Tube
