import React, {ChangeEvent, useState} from "react";
import {Button} from "./Button";
import {v1} from "uuid";

export type TaskType = {
    id: string;
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
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'ReactJS', isDone: false},
        ]
    )
    const [filter, setFilter] = useState<FilterType>('All');

    const [value, setValue] = useState<string>('');
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
    function removeTask(id: string) {
        setTasks(tasks.filter(task => task.id !== id))
    }
    function addTask(title: string) {
        const task: TaskType = {id: v1(),title: title.trim(), isDone: false};
        setTasks([...tasks, task])
        setValue('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={value} onChange={onChangeHandler}/>
                <Button title={'+'} onClick={()=> addTask(value)} />
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