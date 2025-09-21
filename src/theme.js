import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.800",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    primary: "#2B6CB0",
    secondary: "#48BB78",
  },
});

export default theme;
