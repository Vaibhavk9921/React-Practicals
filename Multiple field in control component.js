import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Types Of react Forms

// 1) Control Form(Component)

// Using Multiple field in the control component

const App = () => {
    const [values, setValues] = useState({ fname: 'abc', address: 'xyz' })
    const handleEvent = (event) => {
        const name = event.target.name
        const value = event.target.value
        const newValues = { ...value, value: (name) }
        setValues(newValues)
    }
    return (
        <div>
            <form>
                Username:<input type='text' name='fname' value={values.fname} onChange={handleEvent}></input>
                <br></br>
                address:<input type='text' name='address' value={values.address} onChange={handleEvent}></input>
                <br></br>
            </form>
            Username:{values.fname}
            <br></br>
            address:{values.address}
        </div>
    )
}

export default App;
