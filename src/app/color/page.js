"use client"
import React from "react";
import styles from "../page.module.css";
import NavBar from "../components/NavBar";
import ColorConvert from "../components/ColorConvert";
import Footer from "../components/Footer";

export default function Color() {
  return (
    <div className={styles.page}>
      <NavBar currPage={"color"} />
      <div className={styles.main + ' ' + styles.center}>
        <h1>Hex to RGB color converter</h1>
        <p>Enter hex number of color:</p>
        <ColorConvert className={styles.main} />
      </div>
      <Footer />
    </div>
  );
}