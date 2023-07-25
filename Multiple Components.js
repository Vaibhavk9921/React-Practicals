import logo from './logo.svg';
import './App.css';

//Creating Multiple Componenets in react App

const Hello=()=>{
  return(
    <div>
      <p>
        Hello World
      </p>
    </div>
  )
}
const App=()=>{
return(
  <div>
    <p>Greetings!!!!</p>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
    <Hello/>
  </div>
)
}
export default App;
