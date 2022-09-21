import React, { useState, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../public/logo.svg";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <ul>
          <p>test</p>
          <Image src={logo} alt="skantz logo"></Image>
          <NavbarItem link="/" name="home"></NavbarItem>
          <NavbarItem link="/about" name="About Us" />
          <NavbarItem link="/about" name="About Us" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
