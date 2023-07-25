import logo from './logo.svg';
import './App.css';

// Component Helper function

const Hello=(props)=>{
const getAge=(year)=>{
const currentyear=new Date().getFullYear()
const age=currentyear-year
return age
}
return(
  <div>
    <p>
      Hello {props.name} Your Age is {getAge(props.year)}
    </p>
  </div>
)
}
const App=()=>{
  let fname="abc"
  let y=1995
  return(
    <div>
<Hello name ={fname} year={y}/>
    </div>
  )
}
export default App;
