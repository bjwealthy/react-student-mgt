import React from 'react';
import ReactDOM from 'react-dom'
import StudentsContainer from './functionBased/components/StudentsContainer'
import './functionBased/App.css'

//const element = <h1>Hello from react</h1>

ReactDOM.render(
    <React.StrictMode>
        <StudentsContainer />
    </React.StrictMode>
    , document.getElementById('root')
)

