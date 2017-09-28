varying vec2 vUv;

uniform sampler2D texture;
uniform float time;
uniform float duration;
uniform vec2 mouse;

void main() {
	vec2 uv = vUv;
	vec2 texCoord = uv;
	vec2 departure = mouse;
	float amplitude = 0.7;
	float waveLengthOffset = 0.1;
	float speed = 0.8;
	float elapsed = mod(time * speed, duration);
	// float elapsed = time;

	float dist = distance(uv, departure);

	if ( (dist <= (elapsed + waveLengthOffset)) && (dist >= (elapsed - waveLengthOffset)) ) {
		float diff = (elapsed - dist);
		float powDiff = 1.0 - pow((diff*10.0), amplitude);

		float diffTime = diff * powDiff;
		texCoord = uv + (uv * diffTime);
	}

	vec4 color = texture2D(texture, texCoord);

	gl_FragColor = color;
}
