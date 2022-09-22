import Navbar from "./Header";
import Footer from "./Footer";
import styles from "./Header.module.css";
import { ThemeContextProvider } from "../../context/themeContext";
import { lightTheme } from "../../styles/theme/lightTheme";
import { darkTheme } from "../../styles/theme/darkTheme";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }) {
  const { toggle } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={toggle ? lightTheme : darkTheme}>
      <CssBaseline />

      <div className={styles.body}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
