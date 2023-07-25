import logo from './logo.svg';
import './App.css';

// Destructuring

const Hello=(props)=>{
  const {name,year}=props
  const getAge=(year)=>{
    const currentyear=new Date().getFullYear()
    const age=currentyear-year
    return age
  }
  return(
    <div>
      <p>
        Hello {name} Your Age is {getAge(year)}
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
