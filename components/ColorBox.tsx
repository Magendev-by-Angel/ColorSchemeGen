import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { ColorBoxProps } from "./interfaces";

const ColorBox = ({ bg, children, i }: ColorBoxProps) => {
	const [zIndex, setZIndex] = useState(0);
	return (
		<Flex
			key={i}
			color={i >= 5 ? "white" : "black"}
			position="relative"
			justify="center"
			align="center"
			cursor="pointer"
			onMouseEnter={() => {
				setZIndex(10);
			}}
			onMouseLeave={() => {
				setZIndex(0);
			}}
			zIndex={zIndex}
			transition="transform 0.2s ease-in-out"
			_hover={{
				transform: "scale(1.2)",
			}}
			onClick={() => {
				navigator.clipboard.writeText(bg);
			}}
		>
			<Box
				h="full"
				w="full"
				transform="skew(-10deg)"
				bg={bg}
				borderRadius="md"
			></Box>
			<Box position="absolute">{children}</Box>
		</Flex>
	);
};

export default ColorBox;
