// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#f6b933",
    secondary: "#f6cb33",
    third: "#e08700",
    input: "#3D3522",
    black: "#292929",
    white: "#e3e4dc",
  },
  fonts: {
    text: "Inter, sans-serif",
    title: "Secular One, sans-serif",
    cards: "Playfair Display, serif",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "white",
      },
    },
  },
});
