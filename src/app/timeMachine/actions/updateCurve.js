import Types from '../constants/actiontypes'

export const updateCurve = (geometries) => {

	let splineGeometry = geometries.splineGeometry
	let tubeGeometry = geometries.tubeGeometry
	let tubeGeometry_o = geometries.tubeGeometry_o

	let index = 0, vertice_o = null, vertice = null;
	// For each vertice of the tube, move it a bit based on the spline
 	for (let i = 0, j = tubeGeometry.vertices.length; i < j; i += 1) {
		// Get the original tube vertice
		vertice_o = tubeGeometry_o.vertices[i];
		// Get the visible tube vertice
		vertice = tubeGeometry.vertices[i];
		// Calculate index of the vertice based on the Z axis
		// The tube is made of 50 rings of vertices
		index = Math.floor(i / 50);
		// Update tube vertice
		vertice.x +=
			(vertice_o.x + splineGeometry.vertices[index].x - vertice.x) /
			10;
		vertice.y +=
			(vertice_o.y + splineGeometry.vertices[index].y - vertice.y) /
			5;
	}

	// Warn ThreeJs that the points have changed
 	tubeGeometry.verticesNeedUpdate = true;
 	splineGeometry.verticesNeedUpdate = true;

	return {
		type: Types.UPDATE_CURVE,
	}
}
