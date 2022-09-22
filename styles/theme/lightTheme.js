import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#242424",
      light: "#5c5c5c",
    },
    secondary: {
      main: "#6bab6b",
    },
  },

  typography: {
    h1: {
      fontFamily: "Roboto",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Lato",
    },
    a: {
      fontFamily: "Lato",
    },

    subtitle1: {
      fontFamily: "Lato",
    },
    subtitle2: {
      fontFamily: "Lato",
    },
    body1: {
      fontFamily: "Lato",
    },
    body2: {
      fontFamily: "Lato",
    },
    button: {
      fontFamily: "Lato",
    },
    caption: {
      fontFamily: "Lato",
    },
    overline: {
      fontFamily: "Lato",
    },
    fontFamily: "Lato",
  },
});
