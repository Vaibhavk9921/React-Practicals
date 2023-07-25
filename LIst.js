import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

// String Array in usestate

// List (Renderring Collection)

const App = () => {
    const Student = [{ id: 108, name: 'abc', address: 'xyz' }, { id: 100, name: 'aaa', address: 'zzz' }, { id: 102, name: 'bbb', address: 'vvv' }]
    return (
        <div>
            <p>
                <ul>
                    <li>{Student[0].name}</li>
                    <li>{Student[1].name}</li>
                    <li>{Student[2].name}</li>
                    <li>{Student[0].address}</li>
                    <li>{Student[1].address}</li>
                    <li>{Student[2].address}</li>
                    <li>{Student[0].id}</li>
                    <li>{Student[1].id}</li>
                    <li>{Student[2].id}</li>
                </ul>
            </p>
        </div>
    )
}
export default App;
