import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Renderring Value Present Inside register

function App(){
    const {handleSubmit,register}=useForm()
    const [fn,setFn]=useState(' ')
    const[ln,setLn]=useState(' ')
    const sendData=(data)=>{
        console.log(data)
        setFn(data.fname)
        setLn(data.lname)  
}
return(
    <div>
        <form onSubmit={handleSubmit(sendData)}>
            <input type='text' {...register('fname')} placeholder='Enter Firstname'></input>
            <br></br>
            <input type='text'{...register('lname')} placeholder='Enter Lastname'></input>
            <br></br>
            <input type='submit'></input>
        </form>
        First Name:{fn}
        <br></br>
        Last Name:-{ln}
        <br></br>
    </div>
)
}
export default App;
