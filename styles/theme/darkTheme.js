import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#c5c5c5",
      light: "#717171",
    },
    secondary: {
      main: "#6bab6b",
    },
    background: {
      default: "#313131",
      paper: "#484848",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
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
