import * as React from "react";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Home from "./Pages/Home";
import StoreProvider from "./ultis/store";
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

function App() {
  return (
    <StoreProvider>
      <ChakraProvider theme={newTheme}>
        <CSSReset />
        <Home />
      </ChakraProvider>
    </StoreProvider>
  );
}
export default App;
