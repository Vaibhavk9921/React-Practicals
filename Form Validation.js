import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Form Validation 

const App=()=>{
    const {handleSubmit,register,formState:{errors}}=useForm()
    const [fn,setFn]=useState('')
    const [ln,setLn]=useState('')
    const [sage,setAge]=useState(0)
    const sendData=(data)=>{
        console.log(data)
        setFn(data.fname)
        setLn(data.lname)
        setAge(data.Age)
    }
return(
    <div>
        <form onSubmit={handleSubmit(sendData)}>
<input type='text'{...register('fname',{required:true})} placeholder='Enter First Name'></input>
{errors.fname && <div style={{color:'red'}}>This Field Is Required!!!!</div>}
        <br></br>
        <input type='text'{...register('lname',{required:true})} placeholder='Enter Last Name'></input>
        {errors.lname && <div style={{color:'red'}}>This Field Is Required!!!!</div>}
        <br></br>
        <input type='number' {...register('age',{min:1,max:100})} placeholder='Your Age'></input>
        {errors.age && <div style={{color:'red'}}>Please Select Age Between 1 to 100</div>}
        <br></br>
        <input type='submit'></input>
        </form>
        First Name:-{fn}
        <br></br>
        Last Name:- {ln}
        <br></br>
        Age is :{sage}
    </div>
)
}
export default App;
