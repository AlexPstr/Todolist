import React, {useState} from "react";
import {Button} from "./Button";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}
type TodolistPropsType = {
    title: string;
}


export const Todolist = ({title} :TodolistPropsType) => {

    const [tasks, setTasks] = useState<Array<TaskType>>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false},
            {id: 4, title: 'ReactJS', isDone: false},
        ]
    )
    function removeTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id))
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length === 0
             ? (<span>Елемнты не найдены</span>)
             :(<ul> {tasks.map((task) => {
                    return   <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                        <button onClick={()=> removeTask(task.id)}>X</button>
            </li>
            })}
            </ul>)}
            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
            </div>
        </div>
    )
}