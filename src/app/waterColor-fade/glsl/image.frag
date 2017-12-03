varying vec2 tc;
varying vec4 vcolor;

uniform sampler2D colorMap;
uniform sampler2D noiseMap;
uniform float elapsed;
uniform float duration;

void main(){

	float sefloat = duration - min(exp(elapsed) * 0.3, duration);

	float gradientStep = sefloat * 0.05;
	float advectStep = sefloat * 0.05;

	vec4 cxp = texture2D(noiseMap, vec2(tc.x + gradientStep, tc.y));
	vec4 cxn = texture2D(noiseMap, vec2(tc.x - gradientStep, tc.y));
	vec4 cyp = texture2D(noiseMap, vec2(tc.x, tc.y + gradientStep));
	vec4 cyn = texture2D(noiseMap, vec2(tc.x, tc.y - gradientStep));

	vec3 origin = vec3(0.0);
	float dxp = distance(origin, cxp.xyz);
	float dxn = distance(origin, cxn.xyz);
	float dyp = distance(origin, cyp.xyz);
	float dyn = distance(origin, cyn.xyz);

	vec2 grad = vec2(dxp - dxn, dyp - dyn);
	vec2 newtc = tc + (advectStep * normalize(grad));

	vec3 baseColor = texture2D(colorMap, newtc).rgb;

	gl_FragColor.rgb = baseColor;

	gl_FragColor.a = vcolor.a;
}
