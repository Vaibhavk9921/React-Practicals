import logo from './logo.svg';
import './App.css';

// Passing Parameters to Componenets

const Hello=(props)=>{
  return(
    <div>
      <p>Hello {props.name} Your Age Is {props.age}</p>
    </div>
  )
}
const App=()=>{
  return(
    <div>
      <p>Greetings!!!</p>
   <Hello name="abc" age="18"/>
   <Hello name="xyz" age="19"/>
    </div>
  )
}

export default App;
