import { Box, Grid, Flex } from "@chakra-ui/react";

interface SectionProps {
	children: JSX.Element | JSX.Element[] | string | number | null | undefined;
	h?: string;
	w?: string;
}

const Section = ({
	children,
	h = "100vh",
	w = "100vw",
}: SectionProps): JSX.Element => {
	return (
		<Flex h={h} w={w} justify="center" align="center">
			{children}
		</Flex>
	);
};

export default Section;
