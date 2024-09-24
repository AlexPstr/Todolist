import {TaskType} from "./App";
import {Input} from "./Input";
import {ChangeEvent, memo, useCallback, useState} from "react";
import {EditableSpan} from "./EditableSpan";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./model/tasks-reducer";
import {idID} from "@mui/material/locale";

type TaskPropsType = {
    tdId: string,
    taskId: string
    task: TaskType
}


export const TaskWidthRedux = memo(({task,taskId, tdId}: TaskPropsType) => {
const dispatch = useDispatch()

    const changeTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.checked
        dispatch(changeTaskStatusAC(tdId, taskId, value))
    }
    const taskRemoveHandler = () => {
    dispatch(removeTaskAC(tdId, taskId))
    }
    const changeTaskTitleHandler = useCallback((title: string) => {
        dispatch(changeTaskTitleAC(tdId,taskId, title))
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
