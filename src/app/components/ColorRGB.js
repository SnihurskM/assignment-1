"use client"
import React from "react";
import styles from "../page.module.css";

export default function ColorRGB({ colorCode }) {
  let rgb = [0,0,0];
  if (colorCode.length === 3) {
    rgb[0] = +("0x" + colorCode[0] + colorCode[0]);
    rgb[1] = +("0x" + colorCode[1] + colorCode[1]);
    rgb[2] = +("0x" + colorCode[2] + colorCode[2]);
  } 
  else if (colorCode.length === 6) {
    rgb[0] = +("0x" + colorCode[0] + colorCode[1]);
    rgb[1] = +("0x" + colorCode[2] + colorCode[3]);
    rgb[2] = +("0x" + colorCode[4] + colorCode[5]);
  }
  return (
    <ul>
      <li><span>R:</span> {rgb[0]}</li>
      <li><span>G:</span> {rgb[1]}</li>
      <li><span>B:</span> {rgb[2]}</li>
    </ul>
  );
}
