import React, { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  
  const [count,setCount]=useState(0);

  const increment = () => {
    setCount(count+1);
  }

  const decrement =() =>{
    setCount(count-1);
  }

  const reset =()=>{
    setCount(0);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Counter App</h1>
      <h2 className={styles.count}>{count}</h2>
      <button className={styles.increment} onClick={increment}>Increment</button>
      <button className={styles.decrement} onClick={decrement}>Decrement</button>
      <button className={styles.reset} onClick={reset}>Reset</button>
    </div>
  )
}
