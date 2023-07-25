import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Seperating Display logic by another component

const Display = (props) => {
    return (
        <li key={props.id}>{props.name}</li>
    )
}
const App = () => {
    const Student = [{ id: 108, name: 'abc', address: 'xyz' }, { id: 100, name: 'aaa', address: 'zzz' }, { id: 102, name: 'bbb', address: 'vvv' }]
    return (
        <div>
            <p>
                <ul>
                    {Student.map(Stud => <Display id={Stud.id} name={Stud.name}></Display>)}

                </ul>
            </p>
        </div>
    )
}
export default App;
