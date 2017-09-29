varying vec2 vUv;

uniform sampler2D texture;
uniform float time;
uniform float duration;
uniform vec2 mouse;

#define M_PI 3.1415926535897932384626433832795


void main() {
	vec2 uv = vUv;
	vec2 texCoord = uv;
	vec2 departure = mouse;
	float amplitude = 0.7;
	float waveLengthOffset = 0.1;
	float speed = 0.8;
	float elapsed = mod(time * speed, duration);

	vec2 u = vec2(sin(2.0*M_PI*uv.y), sin(2.0*M_PI*uv.x));

	vec2 uu = vec2(uv + u * 1. * time);

	vec4 color = texture2D(texture, uu);
	// color.rgb = color.rgb + c;

	gl_FragColor = color;
}
