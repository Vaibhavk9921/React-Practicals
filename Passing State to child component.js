import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Passing State to child component

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
    const [counter,setCounter]=useState(0)
    const handleEvent1=()=>{
        setCounter(counter+1)
    }
      const handleEvent2=()=>{
        setCounter(counter-1)
    }
      const handleEvent3=()=>{
        setCounter(0)
    }
    return(
        <div>Event Handling Demo!!!!
            <p><Button handleEvent={handleEvent1}>text="Increment"</Button></p>
            <p><Button handleEvent={handleEvent2}>text="Decrement"</Button></p>
            <p><Button handleEvent={handleEvent3}>text="Zero"</Button></p>
            <p>
                <Display counter={counter}></Display>
            </p>
        </div>
    )
}
export default App;
