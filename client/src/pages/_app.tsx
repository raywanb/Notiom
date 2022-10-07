import { ChakraProvider } from "@chakra-ui/react";
import theme from '../styles/theme'
import React from "react";



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
