import logo from './logo.svg';
import './App.css';

//Arrow Function with Multiple line

const App=()=>{
  return(
    <div>
      <p>
        Hello World
        <br></br>
        This Is My First React App 
      </p>
    </div>
  )
}
//Arrow Function with Single line

const App=()=>(<div>
  <p>
    Hello World
    <br></br>
    This Is My First React App 
  </p>
</div>)
export default App;
