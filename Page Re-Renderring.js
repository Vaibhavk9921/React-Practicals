import logo from './logo.svg';
import './App.css';

// Page Re-Renderring

const App = (props) => {
  const { counter } = props
  return (
    <div>
      <p>Greetings !!!!!</p>
      <p>Counter Value Is {counter}</p>
    </div>
  )
}
  
export default App;
