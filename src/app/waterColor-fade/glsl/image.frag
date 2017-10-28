varying vec2 tc;
varying vec4 vcolor;

uniform sampler2D colorMap;
uniform sampler2D noiseMap;
uniform float elapsed;
uniform float duration;

void main(){

  float sefloat = duration - min(exp(elapsed) * 0.3, duration);
  vec2 sevec2 = vec2(min(exp(elapsed) * 0.3, duration));
  vec3 sevec3 = 2.0 - vec3(min(exp(elapsed * 2.0) , 2.0));

	float gradientStep = sefloat * 0.03;
	float advectStep = sefloat * 0.03;
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

  gl_FragColor.rgb = baseColor;

	gl_FragColor.a = vcolor.a;
}
