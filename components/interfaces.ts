export interface ColorsControllerProps {
	boxSize: number;
	setBoxSize: React.Dispatch<React.SetStateAction<number>>;
	setRadius: React.Dispatch<React.SetStateAction<number>>;
	centerRadius: number;
	setCenterRadius: React.Dispatch<React.SetStateAction<number>>;
	colorBG: number;
	setColorBG: React.Dispatch<React.SetStateAction<number>>;
}

export interface ColorsContainerProps {
	arrayDots: {
		x: number;
		y: number;
		color: string;
	}[];
}

export interface ColorBoxProps {
	bg: string;
	i: number;
	children: React.ReactNode;
}

export interface DotProps {
	x: string;
	y: string;
	colorBG: string;
}
