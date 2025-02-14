"use client"
import React from "react";
import { useState } from "react";
import styles from "../page.module.css";

export default function Form({ hideForm, onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <form autoComplete="none">
      <label htmlFor="name">Enter your name:</label>
      <input type="text" 
        id="name"
        className={styles.inputText} 
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" 
        className={styles.button + ' ' + styles.small}
        onClick={() => {
          hideForm();
          onSubmit(inputValue.trim() || "Guest");
          }}>
        Submit
      </button>
    </form>
  );
}