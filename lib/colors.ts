export const HsvToHex = (h: number, s: number, v: number) => {
	const [r, g, b] = hsvToRgb(h, s, v);
	let hex = RGBToHEX(r, g, b);
	return hex;
};

export const RGBToHEX = (r: number, g: number, b: number) => {
	let R = r < 16 ? `0${r.toString(16)}` : r.toString(16);
	let G = g < 16 ? `0${g.toString(16)}` : g.toString(16);
	let B = b < 16 ? `0${b.toString(16)}` : b.toString(16);
	return `#${R}${G}${B}`;
};

export function hsvToRgb(h: number, s: number, v: number) {
	s /= 100;
	v /= 100;
	const k = (n: number) => (n + h / 60) % 6;
	const f = (n: number) =>
		v * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
	const { R, G, B } = {
		R: parseInt((255 * f(5)).toFixed()),
		G: parseInt((255 * f(3)).toFixed()),
		B: parseInt((255 * f(1)).toFixed()),
	};
	return [R, G, B];
}

export function hexToRgb(hex: string) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (result) {
		return [
			parseInt(result[1], 16),
			parseInt(result[2], 16),
			parseInt(result[3], 16),
		];
	} else {
		throw new Error(`Invalid hexadecimal color code: ${hex}`);
	}
}

export function rgbToHsv(r: number, g: number, b: number) {
	r /= 255;
	g /= 255;
	b /= 255;
	const v = Math.max(r, g, b),
		n = v - Math.min(r, g, b);
	const h =
		n === 0
			? 0
			: n && v === r
			? (g - b) / n
			: v === g
			? 2 + (b - r) / n
			: 4 + (r - g) / n;
	const { H, S, B } = {
		H: Math.floor(60 * (h < 0 ? h + 6 : h)),
		S: Math.floor(v && (n / v) * 100),
		B: Math.floor(v * 100),
	};
	return [H, S, B];
}

export const HexToHsv = (hex: string) => {
	const [r, g, b] = hexToRgb(hex);
	return rgbToHsv(r, g, b);
};

export function generateColorScheme(color: string) {
	const [h] = HexToHsv(color);
	const colors: string[] = [];

	const minSaturation = 10;
	const maxSaturation = 90;
	const minValue = 10;
	const maxValue = 90;
	colors.push(HsvToHex(h, minSaturation, maxValue));

	let prevS = 10;
	let prevV = 90;
	for (let i = 0; i < 8; i++) {
		prevS += 9;
		prevV -= 9;
		colors.push(HsvToHex(h, prevS, prevV));
	}
	colors.push(HsvToHex(h, maxSaturation, minValue));
	return colors;
}
