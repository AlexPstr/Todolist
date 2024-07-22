import {Button} from "./Button";
import {TaskType} from "./App";
import {Input} from "./Input";
import {ChangeEvent, useState} from "react";
import {EditableSpan} from "./EditableSpan";

type TaskPropsType = {
    changeTaskStatus: (tdId: string, taskId: string, value: boolean) => void
    removeTask: (tlId: string, taskId: string) => void
    tdId: string,
    taskId: string
    task: TaskType
    changeTaskTitle: (tdId: string, taskId: string, title: string) => void
}


export function Task ({task, changeTaskStatus, taskId, tdId, removeTask,changeTaskTitle}: TaskPropsType) {
    const changeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.checked
        changeTaskStatus(tdId, taskId, value)

    }
    const taskRemoveHandler = () => {
        removeTask(tdId, taskId)
    }
    const changeTaskTitleHandler = (title: string) => {
        changeTaskTitle(tdId, taskId, title)
    }
    return <div className={task.isDone ? 'tasksCompleted' : ''}>
        <Input changeHandler={changeTaskHandler} checked={task.isDone} type='checkbox'/>
        <EditableSpan title={task.title} changeTitle={changeTaskTitleHandler}/>
        <Button title={"X"} onClick={taskRemoveHandler} />
    </div>
}



