import logo from './logo.svg';
import './App.css';

// Need For Statefull Component Hook (usestate) eg

const App = (props) => {
  let counter = 0
  const setCounter = () => {
    counter += 1
  }
  setInterval(() => {
    setCounter()
  }, 2000)
  return (
    <div>
      <p>Greetings !!!!!</p>
      <p>Counter Value Is {counter}</p>
    </div>
  )
}

export default App;
