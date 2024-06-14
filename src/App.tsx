import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

const tasks1: TaskType[] = [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'ReactJS', isDone: false},
]

const task2: TaskType[] = [

]
function App() {
    return (
        <div className="App">
            <Todolist title={"what to buy"} tasks={tasks1}/>
            <Todolist title={"what to learn"} tasks={tasks1}/>
            <Todolist title={"what to read"} tasks={task2}/>
        </div>
    );
}

export default App;
