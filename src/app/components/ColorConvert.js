"use client"
import React from "react";
import { useState } from "react";
import styles from "../page.module.css";
import ColorSwatch from "./ColorSwatch";
import ColorRGB from "./ColorRGB";

export default function ColorConvert() {
  const [color, setColor] = useState("ffff00");
  return (
    <div>
      <label htmlFor="colorHex">
        #
        <input type="text" 
          id="colorHex" 
          autoComplete="none"
          maxLength={6}
          value={color}
          className={styles.inputText}
          onChange={(e) => setColor(e.target.value)}
           />
      </label>
      <div className={styles.container}>
        <ColorSwatch colorBg={color} />
        <ColorRGB colorCode={color} />
      </div>
    </div>
  );
}