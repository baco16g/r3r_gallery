varying vec2 vUv;

uniform sampler2D texture;
uniform float time;
uniform vec2 mouse;

void main() {
	vec2 uv = vUv;
	vec2 texCoord = uv;
	vec2 departure = vec2(0.5, 0.5);
	float interval = 1.5;
	float amplitude = 1.2;
	float waveLengthOffset = 0.1;
	float speed = 0.8;
	float elapsed = mod(time * speed, interval);

	// float frequency = 100.0;
	// float amplitude = 0.003;
	// float speed = 50.0;
	// float distortion = sin(uv.y * frequency + time * speed) * amplitude;


	float dist = distance(uv, departure);

	if ( (dist <= (elapsed + waveLengthOffset)) && (dist >= (elapsed - waveLengthOffset)) ) {
		float diff = abs(elapsed - dist);
		float powDiff = 1.0 - pow((diff*10.0), amplitude);

		float diffTime = diff * powDiff;
		texCoord = uv + (uv * diffTime);
	}

	vec4 color = texture2D(texture, texCoord);

	gl_FragColor = color;
}
