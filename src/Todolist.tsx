import React from "react";
import {Button} from "./Button";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}
type TodolistPropsType = {
    title: string;
    tasks: Array<TaskType>;
}


export const Todolist = ({tasks, title} :TodolistPropsType) => {




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