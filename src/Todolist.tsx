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
type FilterType = 'All' | 'Active' | 'Completed'

export const Todolist = ({title} :TodolistPropsType) => {

    const [tasks, setTasks] = useState<Array<TaskType>>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false},
            {id: 4, title: 'ReactJS', isDone: false},
        ]
    )
    const [filter, setFilter] = useState<FilterType>('All');

    let filteredTasks = tasks;
    if (filter === 'Active') {
        filteredTasks = tasks.filter(t => !t.isDone)
    }
    if (filter === 'Completed') {
        filteredTasks = tasks.filter(t => t.isDone)
    }
    function changeFilterTasks(value: FilterType) {
        setFilter(value)
    }
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
            {filteredTasks.length === 0
             ? (<span>Елемнты не найдены</span>)
             :(<ul> {filteredTasks.map((task) => {
                    return   <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                        <button onClick={()=> removeTask(task.id)}>X</button>
            </li>
            })}
            </ul>)}
            <div>
                <Button title={'All'} onClick={()=> changeFilterTasks('All')} />
                <Button title={'Active'} onClick={() =>changeFilterTasks('Active')} />
                <Button title={'Completed'} onClick={()=> changeFilterTasks('Completed')} />
            </div>
        </div>
    )
}