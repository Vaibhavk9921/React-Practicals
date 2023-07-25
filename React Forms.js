import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// React Forms

const App = () => {
    const handleEvent = (event) => {
        event.preventdefault()
        console.log("Request Submitted To Server")
    }
    return (
        <div>
            <form onSubmit={handleEvent}>
                <button type='submit'>Click Here</button>
                <button>Ok</button>
            </form>
        </div>
    )
}

export default App;
