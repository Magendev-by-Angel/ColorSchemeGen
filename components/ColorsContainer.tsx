import { Flex, Grid } from "@chakra-ui/react";
import { ColorsContainerProps } from "./interfaces";
import circle from "./Circle";
import ColorBox from "./ColorBox";
import { HsvToHex } from "../lib/colors";

const ColorsContainer = ({ arrayDots }: ColorsContainerProps) => {
	return (
		<Flex h="60%" w="100%" alignItems="center" justifyContent="center">
			<Grid
				w="80%"
				h="60vh"
				templateAreas={{
					base: `"1" "2" "3" "4" "5" "6" "7" "8" "9" "0"`,
					md: `"1 2 3 4 5 6 7 8 9 0"`,
				}}
				templateColumns={{ base: "1fr", md: "repeat(10, 1fr)" }}
				templateRows={{ base: "repeat(auto-fill, 1fr)", md: "1fr" }}
				// templateAreas={`"1 2 3 4 5 6 7 8 9 0"`}
				// templateColumns="repeat(auto-fill, 1fr)"
				// templateRows="1fr"
				gap={4}
			>
				{arrayDots.map((item, i) => {
					return (
						<ColorBox key={i} bg={item.color} i={i}>
							{item.color}
						</ColorBox>
					);
				})}
			</Grid>
		</Flex>
	);
};

export default ColorsContainer;
