varying vec2 tc;
varying vec4 vcolor;

uniform sampler2D colorMap;
uniform sampler2D noiseMap;
uniform float time;

void main(){

  float sefloat = 1.0 - min(exp(time * 0.6) * 0.5, 1.0);
  vec2 sevec2 = vec2(min(time * 0.8, 1.0));
  vec3 sevec3 = vec3(min(time * 0.8, 1.0));

	float gradientStep = pow(sefloat, time) * 0.05;
	float advectStep = pow(sefloat, time) * 0.05;
	float flipHeightMap = 1.0;
	float expand = 1.0;


	vec4 advectMatrix = vec4(0.1);
	vec4 cxp = texture2D(noiseMap, vec2(tc.x + gradientStep, flipHeightMap*tc.y));
	vec4 cxn = texture2D(noiseMap, vec2(tc.x - gradientStep, flipHeightMap*tc.y));
	vec4 cyp = texture2D(noiseMap, vec2(tc.x, flipHeightMap*(tc.y + gradientStep)));
	vec4 cyn = texture2D(noiseMap, vec2(tc.x, flipHeightMap*(tc.y - gradientStep)));

	vec3 grey = vec3(.3, .59, .11);
	float axp = dot(grey, cxp.xyz);
	float axn = dot(grey, cxn.xyz);
	float ayp = dot(grey, cyp.xyz);
	float ayn = dot(grey, cyn.xyz);

	vec2 grad = vec2(axp - axn, ayp - ayn);
	vec2 newtc = tc + advectStep * normalize(advectMatrix.xy * grad) * expand;

	vec3 baseColor = texture2D(colorMap, newtc).rgb * vcolor.rgb;

  gl_FragColor.rgb = baseColor * sevec3;

	gl_FragColor.a = vcolor.a;
}
