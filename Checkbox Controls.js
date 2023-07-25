import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Types Of react Forms

// 1) Control Form(Component)

// Checkbox Controls

const App=()=>
{
    const [ischecked,setIschecked] =useState(false)
    const handleChange=(event)=>
    {
        setIschecked(event.target.value)
    }
    return(
        <form>
            <input type='checkbox'checked={ischecked} onChange={handleChange}></input>
            {ischecked&&<div>Blue Is Selected</div>}
            {!ischecked&&<div>Blue Is Deselected</div>}
        </form>
    )
}
export default App;
