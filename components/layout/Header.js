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
          <NavbarItem children="/" name="home" />
          <NavbarItem children="/about" name="About Us" />

          <li>
            <Link href="/blog/hello-world">
              <a>Blog Post</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
