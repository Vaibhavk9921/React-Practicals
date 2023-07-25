import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

//Event Handling Demo with three operation increment decrement and zero 

const App = () => {
    const [counter, setCounter] = useState(0)
    const handleEvent1 = () => {
        setCounter(counter + 1)
        console.log("Button Clicked")
    }
    const handleEvent2 = () => {
        setCounter(counter - 1)
        console.log("Button Clicked")
    }
    const handleEvent3 = () => {
        setCounter(0)
        console.log("Button Clicked")
    }
    return (
        <div>Event Handling Demo
            <p><button onClick={handleEvent1}>Increment</button></p>
            <p><button onClick={handleEvent2}>Decrement</button></p>
            <p><button onClick={handleEvent3}>Clear</button></p>
            Counter is {counter}
        </div>
    )
}
export default App;
