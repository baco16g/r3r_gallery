varying vec2 vUv;

uniform sampler2D colorMap;
uniform sampler2D noiseMap;
uniform float elapsed;
uniform float duration;

void main(){

	vec2 uv = vUv;

	float sefloat = duration - min(exp(elapsed) * 0.3, duration);

	float gradientStep = sefloat * 0.05;
	float advectStep = sefloat * 0.05;

	vec4 cxp = texture2D(noiseMap, vec2(uv.x + gradientStep, uv.y));
	vec4 cxn = texture2D(noiseMap, vec2(uv.x - gradientStep, uv.y));
	vec4 cyp = texture2D(noiseMap, vec2(uv.x, uv.y + gradientStep));
	vec4 cyn = texture2D(noiseMap, vec2(uv.x, uv.y - gradientStep));

	vec3 origin = vec3(0.0);
	float dxp = distance(origin, cxp.xyz);
	float dxn = distance(origin, cxn.xyz);
	float dyp = distance(origin, cyp.xyz);
	float dyn = distance(origin, cyn.xyz);

	vec2 grad = vec2(dxp - dxn, dyp - dyn);
	vec2 newuv = uv + (advectStep * normalize(grad));

	vec3 baseColor = texture2D(colorMap, newuv).rgb;

	gl_FragColor = vec4(baseColor, 1.0);
}
