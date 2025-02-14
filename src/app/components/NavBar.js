import React from "react";
import Link from 'next/link';
import styles from "../page.module.css";

export default function NavBar({ currPage }) {
  const home = currPage === "home" ? 
    <li> Home </li> :
    <li><Link href={"../"} className={styles.interact}>Home</Link></li>
  const color = currPage === "color" ? 
    <li> Color Converter </li> :
    <li><Link href={"/color/"} className={styles.interact}>Color Converter</Link></li>

  return (
    <nav className={styles.nav}>
      <ul>
        {home}
        {color}
      </ul>
    </nav>
  )
}