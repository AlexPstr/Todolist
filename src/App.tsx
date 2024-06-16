import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


function App() {

    return (
        <div className="App">
            <Todolist title={"what to buy"}  />
            <Todolist title={"what to learn"}  />
            <Todolist title={"what to read"}  />
        </div>
    );
}

export default App;
