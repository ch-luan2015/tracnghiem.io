import * as React, {createContext} from "react";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { createBreakpoints } from "@chakra-ui/theme-tools";



import Home from "./Pages/Home";
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const newTheme = {
  ...theme,
  breakpoints,
};

export const doQuestion = createContext();
export const App = () => (
  <ChakraProvider theme={newTheme}>
    <CSSReset />
    <Home />
  </ChakraProvider>
);
