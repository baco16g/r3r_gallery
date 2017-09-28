import React from 'react'
import React3 from 'react-three-renderer'

import vs from '../glsl/image.vert'
import fs from '../glsl/image.frag'

class Image extends React.Component {

  constructor(props) {
	super(props)

	this.onLoading = ::this.props.onLoading
	this.onLoaded = ::this.props.onLoaded
	this.onResize = ::this.props.onResize
	this.onUpdateTime = ::this.props.onUpdateTime
	this.onMoveMouse = ::this.props.onMoveMouse

	this.textures = {
	  "main": {
		url: "../assets/img/ripple/cat.jpg"
	  }
	}
  }

  /* LifeCycle */

  componentWillMount() {
      this.handleInitialize().then(() => {
          setTimeout(() => {
              this.onLoaded()
          }, 300)
      })
  }

  componentDidMount() {
	this.handleResize()
	this.handleMouseMove()
  }


  /* custom Function  */

  handleInitialize() {
	  this.onLoading()
	  return new Promise((resolve, reject) => {
		  this.loadTexture()
          resolve()
	  });
  }

  handleResize() {
	window.addEventListener('resize', this.onResize, false)
  }

  handleMouseMove() {
	window.addEventListener('mousemove', this.onMoveMouse, false)
  }


  handleAnimate() {
      this.onUpdateTime()
  }

  loadTexture() {
	  const loader = new THREE.TextureLoader()
	  loader.crossOrigin = '*'
	  for (let name in this.textures) {
		  loader.load(this.textures[name].url, (texture) => {
		  this.textures[name].texture = texture
		});
	  }
  }



  render() {
	const {loading, width, height, cameraPosition, time, mouse} = this.props

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
			// fog={new THREE.Fog(0x222222, 0.6, 2.8)}
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

			{/* Image Mesh */}
			<mesh ref='imageMesh'>
				<planeGeometry
					width={1}
					height={1}
				/>
				<shaderMaterial
					vertexShader={vs}
					fragmentShader={fs}
					blending={THREE.NormalBlending}
				>
					<uniforms>
						<uniform name={'texture'} type={'t'} value={this.textures['main'].texture} />
						<uniform name={'time'} type={'f'} value={time} />
						<uniform name={'mouse'} type={'vec2'} value={mouse} />
					</uniforms>
				</shaderMaterial>

			</mesh>

		  </scene>
		</React3>
	  )
  }
}

export default Image
