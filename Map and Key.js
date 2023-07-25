import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// Map and Key

const App = () => {
    const Student = [{ id: 108, name: 'abc', address: 'xyz' }, { id: 100, name: 'aaa', address: 'zzz' }, { id: 102, name: 'bbb', address: 'vvv' }]
    return (
        <div>
            <p>
                <ul>
                    {Student.map(Stud => <li key={Stud.id}>{Stud.id}</li>)}
                    {Student.map(Stud => <li key={Stud.id}>{Stud.name}</li>)}
                    {Student.map(Stud => <li key={Stud.id}>{Stud.address}</li>)}
                </ul>
            </p>
        </div>
    )
}

export default App;
