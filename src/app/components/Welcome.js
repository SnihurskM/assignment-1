"use client"
import React from "react";
import { useState } from "react";
import styles from "../page.module.css";
import Form from "./Form";

export default function Welcome() {
  const [name, setName] = useState("Guest");
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };
  return (
    <header className={styles.main}>
      <h1>Welcome, {name}!</h1>
      <p>Not you?</p>
      <button className={styles.button} onClick={() => setShowForm(!showForm)}>Sign In</button>
      <div className={showForm ? "" : styles.hidden}>
        <Form hideForm={toggleForm} onSubmit={setName}/>
      </div>
    </header>
  );
}