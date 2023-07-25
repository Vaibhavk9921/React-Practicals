import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// useEffect Hook

// Change BG C0lor Using useState


const App = () => {
    const bgc = useRef(null)
    const [count, setCount] = useState(0)
    const [bgcolor, setBgcolor] = useState('red')
    const inr = () => {
        setCount(count + 1)
    }
    const changebg = () => {
        setBgcolor(bgc.current.value)
    }
    useEffect(() => {
        document.body.style.background = bgcolor
        console.log("Changed Background Color")
    }, [bgcolor])
    return (
        <div>
            <input type='text' ref={bgc}></input>
            <button onClick={changebg}>Change Background</button>
            <button onClick={inr}>+</button>
            <br></br>
            Count Is :- {count}
        </div>
    )
}

export default App;
