import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Types Of react Forms

// 1) Control Form(Component)

const App = () => {
    const [fname, setFname] = useState('')
    const handleEvent = (event) => {
        setFname(event.target.value)
    }
    return (
        <div>
            <form>
                <input type='text' name='t1' value={fname} onChange={handleEvent}></input>
            </form>
        </div>

    )
}
export default App;
