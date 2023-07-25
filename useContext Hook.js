import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// useContext Hook  

const App=()=>{
    const fn=useRef(null)
    const [fname,setFname]=useState('')
    const buttonclick=(event)=>{
        setFname(fn.current.value)
    }
    const Header=({fname})=>{
        return <header>
            <h1>Hello {fname}</h1>
            </header>
    }
            const Footer=({fname})=>{
                return <footer>
                    <h1>Byeee {fname}</h1>
                    </footer>
    }
    const Main=()=>{
        return(
            <div>
                <input ref={fn} placeholder='Enter Username'></input>
                <br></br>
                <button onClick={buttonclick}>Ok</button>
                <br></br>
                <br></br>
            </div>
        )
    }
    return(
        <div>
            <Header fname={fname}></Header>
            <Main></Main>
            <Footer fname={fname}></Footer>
        </div>
    )
    }

export default App;
