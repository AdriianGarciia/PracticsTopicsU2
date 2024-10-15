import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.containter}>
      <p>You have moved {count} spots</p>
      <button onClick={()=>setCount(count + 1)}>
        Move 1 spot
        </button>
    </div>
  )
}