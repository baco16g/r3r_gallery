varying vec2 tc;
varying vec4 vcolor;
attribute vec3 color;

void main() {
  tc = uv;
  vcolor = vec4(color, 1.0);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}
