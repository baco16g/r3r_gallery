varying vec2 tc;
varying vec4 vcolor;

uniform sampler2D colorMap;
uniform sampler2D heightMap;
uniform float time;
uniform vec2 mouse;


// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners porcentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}


void main(){

  float sefloat = 1.0 - min(time * 0.2, 1.0);
  vec2 sevec2 = vec2(1.0) - vec2(min(time * 0.5, 1.0));
  vec3 sevec3 = vec3(min(time * 0.4, 1.0));

	float gradientStep = pow(sefloat, time) * 0.025; // default .0015, min -1., max 1.
	float advectStep = pow(sefloat, time) * 0.025; // default .0015, min -1., max 1.
	float flipHeightMap = 0.7; // default 0.7, min 0., max 2.
	float expand = 1.0;// abs(cos(time * 0.01)); // default 0., min 0., max 1.


	vec4 advectMatrix = vec4(0.1);
	vec4 cxp = texture2D(heightMap, vec2(tc.x + gradientStep, flipHeightMap*tc.y));
	vec4 cxn = texture2D(heightMap, vec2(tc.x - gradientStep, flipHeightMap*tc.y));
	vec4 cyp = texture2D(heightMap, vec2(tc.x, flipHeightMap*(tc.y + gradientStep)));
	vec4 cyn = texture2D(heightMap, vec2(tc.x, flipHeightMap*(tc.y - gradientStep)));

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
