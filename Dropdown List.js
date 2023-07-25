import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Types Of react Forms

// 1) Control Form(Component)

// Dropdown List

const App = () => {
    const [selectedvalue, setSelectedvalue] = useState('option')
    const handleEvent = (event) => {
        setSelectedvalue(event.target.value)
    }
    return (
        <div>
            <form>
                <select value={selectedvalue} onChange={handleEvent}>
                    <option value="c">C</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                </select>
            </form>
            <br></br>
            You Selected {selectedvalue}
        </div>
    )
}
export default App;
