"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import theme from "../theme/theme";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<CacheProvider>
					<ChakraProvider theme={theme}>
						<NavBar />
						{children}
					</ChakraProvider>
				</CacheProvider>
			</body>
		</html>
	);
}
