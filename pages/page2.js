import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The code that we want to run
    console.log('The count is:', count);

    // Optional return function
    return () => {
      console.log('I am being cleaned up!');
    };
  }, [count]); // The dependency array

  return (
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}