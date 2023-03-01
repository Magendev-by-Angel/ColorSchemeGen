import { Box, Flex, Grid, Button } from "@chakra-ui/react";
import { useState } from "react";

interface ToggleButtonProps {
	setTop: React.Dispatch<React.SetStateAction<number>>;
	right?: string;
}

const ToggleButton = ({
	setTop,
	right = "2rem",
}: ToggleButtonProps): JSX.Element => {
	return (
		<Button
			position="absolute"
			top="calc(100% + 2px)"
			right={right}
			h="2rem"
			w="2rem"
			bg="teal.200"
			borderTopRadius={0}
			_hover={{}}
			borderBottomRadius="0.5rem"
			cursor="pointer"
			onClick={() => {
				setTop(prev => {
					return prev !== 0 ? 0 : -3;
				});
			}}
		>
			<Box
				bg="teal.200"
				h="2rem"
				w="2rem"
				position="absolute"
				left="100%"
				borderRadius="0 0 1rem 1rem"
			>
				<Box
					h="100%"
					w="100%"
					bg="bg"
					borderRadius="1rem 0 0 0"
					cursor="default"
				></Box>
			</Box>
			<Box
				bg="teal.200"
				h="2rem"
				w="2rem"
				position="absolute"
				right="100%"
				borderRadius="0 0 1rem 1rem"
			>
				<Box
					h="100%"
					w="100%"
					bg="bg"
					borderRadius="0 1rem 0 0"
					cursor="default"
				></Box>
			</Box>
		</Button>
	);
};

const NavBar = () => {
	const [top, setTop] = useState(0);
	return (
		<Flex
			as="nav"
			w="100%"
			position="fixed"
			bg="#00000055"
			p="1rem"
			top={`${top}rem`}
			borderBottom="2px solid"
			borderBottomColor="teal.200"
			transition="top 200ms ease-in-out"
			justify="center"
			align="center"
			zIndex={99}
			blur="10px"
			backdropFilter="blur(10px)"
		>
			<ToggleButton setTop={setTop} />
			<Grid
				h="100%"
				w="75%"
				templateColumns="50% 1fr"
				templateAreas={`". l1"`}
			>
				<Flex gridArea="l1" justify="end">
					Profile
				</Flex>
			</Grid>
		</Flex>
	);
};

export default NavBar;
