import React, { useState, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./NavbarItem.module.css";

export default function NavbarItem({ children, name }) {
  // const [item,setItem] = useState(Item)

  return (
    <>
      <li className={styles.item}>
        <Link href={children}>{name}</Link>
      </li>
    </>
  );
}
