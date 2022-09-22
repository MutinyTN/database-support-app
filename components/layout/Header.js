import React, { useContext } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../public/logo.svg";
import NavbarItem from "./NavbarItem";
import SideMenu from "./SidebarMenu";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { ThemeContext } from "../../context/themeContext";

function Navbar() {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
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
          <Button
            href="/priser"
            variant="contained"
            size="large"
            color="inherit"
            className={styles.button}
          >
            Priser
          </Button>{" "}
          <IconButton sx={{ ml: 1 }} onClick={toggleFunction} color="inherit">
            {toggle ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
