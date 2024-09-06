
import {TaskType} from "./App";
import {Input} from "./Input";
import {ChangeEvent, memo, useCallback, useState} from "react";
import {EditableSpan} from "./EditableSpan";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

type TaskPropsType = {
    changeTaskStatus: (tdId: string, taskId: string, value: boolean) => void
    removeTask: (tlId: string, taskId: string) => void
    tdId: string,
    taskId: string
    task: TaskType
    changeTaskTitle: (tdId: string, taskId: string, title: string) => void
}


export const Task = memo(({task, changeTaskStatus, taskId, tdId, removeTask,changeTaskTitle}: TaskPropsType) => {

    console.log('Task rendered')
    const changeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.checked
        changeTaskStatus(tdId, taskId, value)

    }
    const taskRemoveHandler = () => {
        removeTask(tdId, taskId)
    }
    const changeTaskTitleHandler = useCallback((title: string) => {
        changeTaskTitle(tdId, taskId, title)
    },[tdId, taskId])

    return <Box className={task.isDone ? 'tasksCompleted' : ''}>
        <Checkbox
            checked={task.isDone}
            onChange={changeTaskHandler}
        />
        {/*<Input changeHandler={changeTaskHandler} checked={task.isDone} type='checkbox'/>*/}
        <EditableSpan
            title={task.title}
            changeTitle={changeTaskTitleHandler}/>
        <IconButton
            onClick={taskRemoveHandler}>
            <DeleteIcon />
        </IconButton>
    </Box>
})



