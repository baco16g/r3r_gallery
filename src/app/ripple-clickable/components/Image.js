import React from 'react'
import React3 from 'react-three-renderer'

import MouseInput from '../lib/MouseInput'

import vs from '../glsl/image.vert'
import fs from '../glsl/image.frag'

class Image extends React.Component {

	constructor(props) {
		super(props)

		this.onLoading = ::this.props.onLoading
		this.onLoaded = ::this.props.onLoaded
		this.onResize = ::this.props.onResize
		this.onUpdateTime = ::this.props.onUpdateTime
		// this.onMoveMouse = ::this.props.onMoveMouse
		this.onResetTime = ::this.props.onResetTime
		this.onClickMesh = ::this.props.onClickMesh

		this.textures = {
			"main": {
				url: "../assets/img/ripple/cat2.jpg"
			}
		}
	}

	/* LifeCycle */

	componentDidMount() {
		this.initialize().then(() => {
			setTimeout(() => {
				this.onLoaded()
				// this.handleMouseMove()
				this.setMouseInput()
				this.handleResize()

			}, 300)
		})
	}

	componentDidUpdate(newProps) {
		const {
			mouseInput,
		} = this.refs;

		const {
			windowWidth,
			windowHeight,
		} = this.props;

		if (windowWidth !== newProps.windowWidth || windowHeight !== newProps.windowHeight) {
			mouseInput.containerResized();
		}
	}


	/* custom Function  */

	initialize() {
		this.onLoading()
		return new Promise((resolve, reject) => {
			this.loadTexture()
			resolve()
		});
	}

	setMouseInput() {
		const {
			mouseInput,
			container
		} = this.refs;

		if (!mouseInput.isReady()) {
			const {
				scene,
				camera,
			} = this.refs;

			mouseInput.ready(scene, container, camera);
			// mouseInput.restrictIntersections(imageMesh);
			mouseInput.setActive(false);
		}
	}

	handleResize() {
		window.addEventListener('resize', this.onResize, false)
	}

	// handleMouseMove() {
	// 	window.addEventListener('mousemove', this.onMoveMouse, false)
	// 	}

	handleClick(e) {
		this.onResetTime()
		this.onClickMesh(e)
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
		const {loading, width, height, cameraPosition, elapsed, duration, pointerPosition} = this.props

		if (loading) return(<h2>Loading...</h2>)

		return(
			<div ref="container">
				<React3
					mainCamera="camera"
					width={width}
					height={height}
					onAnimate={::this.handleAnimate}
					clearColor={0x000000}
					antialias={true}
				>
					<module
						ref="mouseInput"
						descriptor={MouseInput}
					/>
					<scene
						ref="scene"
						// fog={new THREE.Fog(0x222222, 0.6, 2.8)}
					>

						{/* Helper */}
						{/* <axisHelper /> */}

						{/* Camera */}
						<perspectiveCamera
							ref="camera"
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
						<mesh
							ref='imageMesh'
							onClick={(e) => this.handleClick(e)}
						>
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
									<uniform name={'time'} type={'f'} value={elapsed} />
									<uniform name={'duration'} type={'f'} value={duration} />
									<uniform name={'mouse'} type={'vec2'} value={pointerPosition} />
								</uniforms>
							</shaderMaterial>

						</mesh>

					</scene>
				</React3>
			</div>
		)
	}
}

export default Image
