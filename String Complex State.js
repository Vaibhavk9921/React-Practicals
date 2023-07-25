import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// String Complex State

const Display=(props)=>{
        return(
            <div>
                <p>Counter is {props.counter} </p>
            </div>
        )
    }
    const Button=(props)=>{
    return(
        <div>
            <button onClick={props.handleEvent}>{props.text}</button>
        </div>
    )
    }
const App=()=>{
    const [clicks,setClicks]=useState({left:0,right:0})
    const inrLeft=()=>{
        const newclicks={left:clicks.left+1,right:clicks.right}
        setClicks(newclicks)
    }
    const inrRight=()=>{
        const newclicks={left:clicks.left,right:clicks.right+1}
        setClicks(newclicks)
    }
    return(
        <div>
            <p>Event Handling Demo!!!!</p>
            <p><Button handleEvent={inrLeft} text="Left"></Button></p>
            <p><Button handleEvent={inrRight} text="Right"></Button></p>
            <p>
                LEFT:<Display counter={clicks.left}></Display>
                RIGHT:<Display counter={clicks.right}></Display>
            </p>
        </div>
    )
}

export default App;
