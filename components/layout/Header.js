import React, { useContext } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../public/logo.svg";
import NavbarItem from "./NavbarItem";
import SideMenu from "./SidebarMenu";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { ThemeContext } from "../../context/themeContext";

function Navbar() {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <Paper elevation={0} className={styles.navbarContainer}>
        <div className={styles.menu}>
          <SideMenu />

          <Link href="/">
            <a className={styles.logo}>
              <Image src={logo} alt="skantz logo"></Image>
            </a>
          </Link>
        </div>

        <ul className={styles.navMenu}>
          <NavbarItem link="/" name="Home"></NavbarItem>
          <NavbarItem link="/about" name="About Us" />
          <Button href="/priser" variant="contained" size="large">
            Priser
          </Button>
          <IconButton sx={{ ml: 1 }} onClick={toggleFunction} color="inherit">
            {toggle ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </ul>
      </Paper>
    </nav>
  );
}

export default Navbar;
