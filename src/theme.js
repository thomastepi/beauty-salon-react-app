import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "brand.background",
        color: "brand.text",
        fontFamily: "Montserrat, sans-serif",
      },
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
    pacifico: "'Pacifico', cursive",
  },
  colors: {
    brand: {
      primary: "#D4B4B4",
      secondary: "#A9A9A9",
      background: "#1A1A1D",
      surface: "#242427",
      text: "#E6E6E6",
      textMuted: "#B9B9B9",
      accent: "#EAC7C7",
    },
  },
});

export default theme;
