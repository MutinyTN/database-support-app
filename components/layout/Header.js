import React, { useState, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../public/logo.svg";
import NavbarItem from "./NavbarItem";
import SideMenu from "./SidebarMenu";

function Navbar() {
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
