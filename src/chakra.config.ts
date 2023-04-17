import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    primary: {},
    secondary: {
      100: "#31BAC3",
    },
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    accent: "#a6c8ff",
    textFaint: "#ABABAB",
    accentGreen: "#d4edff",
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        // borderRadius: '0px'
      },
    },
  },
});
export default theme;
