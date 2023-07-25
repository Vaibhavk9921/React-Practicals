import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
//Statefull Component Hook (usestate) eg

const App = () => {
  const [counter, setCounter] = useState(0)
  setInterval(() => {
    setCounter(counter + 1)
  }, 1000)
  return (
    <div>
      <p>Greetings !!!!!</p>
      <p>Counter Value Is {counter}</p>
    </div>
  )
}

export default App;
