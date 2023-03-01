const circle = (
	radius: number,
	centerRadius: number,
	boxSize: number
): {
	x: number;
	y: number;
	floorX: number;
	floorY: number;
}[] => {
	function radians(degrees: number): number {
		var pi = Math.PI;
		return degrees * (pi / 180);
	}
	let positions: {
		x: number;
		y: number;
		floorX: number;
		floorY: number;
	}[] = [];
	for (let i = 10; i < 90; i = i + 8) {
		let x = centerRadius + Math.round(radius * Math.cos(radians(i)));
		let y = centerRadius + Math.round(radius * Math.sin(radians(i)));
		console.log(centerRadius, radius, x, y);
		const position = {
			x: x * 4,
			y: y * 4,
			floorX: Math.floor(((x * 4) / boxSize) * 100),
			floorY: Math.floor(((y * 4) / boxSize) * 100),
		};
		positions.push(position);
	}
	return positions;
};

export default circle;
