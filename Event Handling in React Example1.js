import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Event HAndling Basic Example
const App=()=>{
  const handleEvent=()=>{
    console.log("Button Clicked")
  }
  return(
    <div>
      <p>
        <button onClick={handleEvent}>click here</button>
      </p>
    </div>
  )
}

export default App;
