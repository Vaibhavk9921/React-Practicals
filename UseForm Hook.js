import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// UseForm Hook 
// Example Of How To use register Function

function App(){
const{register,handleSubmit}=useForm()
const sendData=(data)=>{
    console.log(data)
}
return(
    <div>
        <form onSubmit={handleSubmit(sendData)}>
            <input type='text'{...register('fname')} placeholder='Enter First Name'></input>
            <br></br>
            <input type='text' {...register('lname')} placeholder='Enter Last Name'></input>
            <br></br>
            <input type='submit'></input>
        </form>
    </div>
)
}
export default App;
