import { Grid, Flex, Input, Box } from "@chakra-ui/react";
import { ColorsControllerProps } from "./interfaces";

const ColorsController = ({
	boxSize,
	setBoxSize,
	setRadius,
	centerRadius,
	setCenterRadius,
	colorBG,
	setColorBG,
}: ColorsControllerProps) => {
	return (
		<Flex w="90%" mt={14} mr={{ base: 0, xl: 24 }}>
			<Grid
				w="100%"
				templateAreas={`"darkness darknessSl darknessNm" "hue hueSl hueNm"`}
				templateColumns="1fr 6fr 1fr"
				templateRows="repeat(3,1fr)"
				columnGap={5}
				rowGap={3}
			>
				<Flex gridArea="darkness" align="center" justify="right">
					Curve displacement
				</Flex>
				<Input
					type="range"
					value={centerRadius}
					onChange={e => {
						setCenterRadius(parseInt(e.target.value));
					}}
					min="-100"
					max="100"
				/>
				<Input
					gridArea="darknessNm"
					type="number"
					value={centerRadius}
					textAlign="center"
					isReadOnly={true}
				/>
				<Flex gridArea="hue" align="center" justify="right">
					Color hue
				</Flex>
				<Input
					gridArea="hueSl"
					type="range"
					value={colorBG}
					onChange={e => {
						setColorBG(parseInt(e.target.value));
					}}
					min="0"
					max="360"
				/>
				<Input
					gridArea="hueNm"
					type="text"
					value={`${colorBG}°`}
					textAlign="center"
					isReadOnly={true}
				/>
			</Grid>
			<Flex></Flex>
		</Flex>
	);
};

export default ColorsController;
