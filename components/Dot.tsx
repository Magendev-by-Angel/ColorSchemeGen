import { Box, useColorModeValue } from "@chakra-ui/react";
import { DotProps } from "./interfaces";

const Dot = ({ x, y, colorBG }: DotProps) => {
	console.log(x, y);
	return (
		<Box
			position="absolute"
			left={x}
			bottom={y}
			bg={colorBG}
			h="10px"
			w="10px"
			borderRadius="full"
			border="1px solid"
		></Box>
	);
};

export default Dot;
