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

// And Index.js must Contain following code
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let counter = 1
  const refresh = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App counter={counter} />);
 }
 setInterval(() => {
     refresh()
     counter = counter + 1
 }, 2000)
reportWebVitals(console.log("Web Vitals Demo!!!!!"));
