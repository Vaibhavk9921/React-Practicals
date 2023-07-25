import logo from './logo.svg';
import './App.css';

// Passing Value of variable to the Componenets

const Hello=(props)=>{
  return(
    <div>
      <p>
Hello {props.name} Your Age Is {props.age}
      </p>
    </div>
  )
}
const App=()=>{
  let fname ="abc"
  let age1 ="19"
  return(
    <div>
      <p>Greetings !!!!</p>
      <Hello name={fname} age={age1}/>
    </div>
  )
}
export default App;
