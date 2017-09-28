import Types from '../constants/actiontypes'

export const initializeCurve = () => {

	/* 初期宣言 */
	let points = []
	let curvePointNum = 5

	/* Z軸をずらしつつ、複数の座標を作成し、配列に格納 */
	for (let i = 0; i < curvePointNum; i++) {
	  points.push(new THREE.Vector3(0, 0, 2.5 * (i / 4)))
	}
	points[curvePointNum - 1].y = -0.06

	/* 座標を用いて、間の座標を補完して、カーブの作成 */
	let curve = new THREE.CatmullRomCurve3(points)

	return {
		type: Types.INITIALIZE_CURVE,
		curve: curve,
	}
}
