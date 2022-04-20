import { useState, useEffect } from "react";
import React from 'react';

function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    return () => clearTimeout(timer)
    },[]);
  
    // eslint-disable-next-line react/no-unescaped-entities
    return <h1>I've rendered {count} times!</h1>;
  }
export default Timer;