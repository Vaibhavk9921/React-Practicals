import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// String Array in usestate

// Multiple Event Handler using single function

const App = () => {
    const Hello = (msg) => {
        const handleEvent = () => {
            console.log(msg)
        }
        return handleEvent
    }
    return (
        <div>
            <p>
                <button onClick={Hello("Hello")}>Hello </button>
                <button onClick={Hello("REACT")}>React </button>
                <button onClick={Hello("World")}>World </button>
            </p>
        </div>
    )
}
export default App;
