"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar currPage={"home"} />
      <Welcome className={styles.main}/>
      <Footer />
    </div>
  );
}
