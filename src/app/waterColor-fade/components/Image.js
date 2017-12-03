import React from 'react'
import React3 from 'react-three-renderer'

import MouseInput from '../lib/MouseInput'

import vs from '../glsl/image.vert'
import fs from '../glsl/image.frag'

class Image extends React.Component {

	constructor(props) {
		super(props)

		this.flagEnter = false

		this.onLoading = ::this.props.onLoading
		this.onLoaded = ::this.props.onLoaded
		this.onResize = ::this.props.onResize
		this.onPlayTime = ::this.props.onPlayTime
		this.onRewindTime = ::this.props.onRewindTime

		this.textures = {
			"main": {
				url: "../assets/img/waterColor/sunflower.jpg"
			},
			"noise": {
				url: "../assets/img/waterColor/noise.png"
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

	handleMouseEnter(e) {
		this.flagEnter = true
	}
	handleMouseLeave(e) {
		this.flagEnter = false
	}

	handleAnimate() {
		if (this.flagEnter) this.onPlayTime()
		if (!this.flagEnter) this.onRewindTime()
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
		const {loading, width, height, cameraPosition, elapsed, duration, mouse} = this.props

		if (loading) return(<h2 className="loader"></h2>)

		return(
			<div ref="container">
				<React3
					mainCamera="camera"
					width={width}
					height={height}
					onAnimate={::this.handleAnimate}
					clearColor={0xffffff}
					antialias={true}
				>
					<module
						ref="mouseInput"
						descriptor={MouseInput}
					/>

					<scene
						ref="scene"
					>


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

						{/* Image Mesh */}
						<mesh
							ref='imageMesh'
							onMouseEnter={(e) => this.handleMouseEnter(e)}
							onMouseLeave={(e) => this.handleMouseLeave(e)}
						>
							<planeGeometry
								width={1}
								height={1}
							/>
							<shaderMaterial
								vertexShader={vs}
								fragmentShader={fs}
								blending={THREE.NormalBlending}
								transparent={true}
							>
								<uniforms>
									<uniform name={'colorMap'} type={'t'} value={this.textures['main'].texture} />
									<uniform name={'noiseMap'} type={'t'} value={this.textures['noise'].texture} />
									<uniform name={'elapsed'} type={'f'} value={elapsed} />
									<uniform name={'scroll'} type={'f'} value={scroll} />
									<uniform name={'duration'} type={'f'} value={duration} />
									<uniform name={'mouse'} type={'vec2'} value={mouse} />
									<uniform name={'resolution'} type={'vec2'} value={new THREE.Vector2(width, height)} />
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
