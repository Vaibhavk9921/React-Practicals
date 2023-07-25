import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Types Of react Forms

// 2) Uncontrolled Form

const App = () => {
    const fname = useRef('null')
    const lname = useRef('null')
    const lang = useRef('null')
    const g1 = useRef('null')
    const g2 = useRef('null')
    const submitForm = (event) => {
        event.preventDefault()
        const fn = fname.current.value
        const ln = lname.current.value
        const lng = lang.current.value
        let gender = ''
        if (g1.current.checked == true) {
            gender = "Male"
        }
        if (g2.current.checked == false) {
            gender = "Female"
        }
        console.log('First Name:' + fn)
        console.log('Last Name:' + ln)
        console.log('Selected Lang :' + lng)
        console.log('Gender :' + gender)
        console.log("Request Submitted To Server")
    }
    return (
        <div>
            <form >
                First Name:- <input type='text' name='t1' ref={fname}></input>
                <br></br>
                Last Name:- <input type='text' name='t2' ref={lname}></input>
                <br></br>
                Select Language :- <select ref={lang}>
                    <option value="c">C</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                </select>
                <br></br>
                Male:- <input type='radio' name='g1' ref={g1}></input>
                <br></br>
                Female:- <input type='radio' name='g1' ref={g2}></input>
                <br></br>
                <button onClick={submitForm}>Click Here </button>
            </form>
        </div>
    )
}
export default App;
