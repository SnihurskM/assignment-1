"use client"
import React from "react";
import styles from "../page.module.css";

export default function ColorSwatch({ colorBg }) {
  return (
    <div className={styles.colorSwatch} style={{ backgroundColor: `#${ colorBg }` }}></div>
  );
}