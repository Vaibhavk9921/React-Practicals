import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Types Of react Forms

// 1) Control Form(Component)

// Radiobutton Controls

const App = () => {
    const [gender, setGender] = useState('Male')
    const handleEvent1 = (event) => {
        setGender('Male')
    }
    const handleEvent2 = (event) => {
        setGender('Female')
    }
    return (
        <div>
            <form>
                Male :- <input type='radio' onChange={handleEvent1} name='g' checked={gender == 'Male'} ></input>
                <br></br>
                Female :- <input type='radio' onChange={handleEvent2} name='g' checked={gender == 'Female'} ></input>
            </form>
            You Selected : {gender}
        </div>

    )
}
export default App;
