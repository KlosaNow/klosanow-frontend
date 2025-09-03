import { extendTheme } from "@chakra-ui/react";
import { colors } from "./data/colors";

const breakpoints = {
  sm: "40em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Encode Sans', serif`,
    body: `'Encode Sans', sans-serif`,
  },
  colors: {
    ...colors,
    transparent: {
      100: "transparent",
    },
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
