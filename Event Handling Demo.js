import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

//Event Handling Demo

const App =()=>{
    const [counter,setCounter]=useState(0)
    const handleEvent=()=>{
        setCounter(counter+1)
        console.log("Button Clicked")
    }
    return(
        <div>Event Handling Demo
        <p>
<button onClick={handleEvent}>click here</button>
        </p>
        <p>Counter Is {counter}</p>
        </div>
    )
}

export default App;
