import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    changeTodolistFilterAC,
    filterType,
    todolistType
} from "./model/todolists-reducer";
import React, {useCallback} from "react";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskAddAC} from "./model/tasks-reducer";

import Box from "@mui/material/Box";
import {ListItem} from "@mui/material";
import {Tasks} from "./Tasks";
import {TodolistTitle} from "./TodolistTitle";

export function Todolists () {
    const todolist = useSelector<AppRootStateType, todolistType[]>(state => state.todolist)
    const dispatch = useDispatch();
    //task
    const changeTaskStatus = useCallback((todolistId: string, taskId: string, value: boolean)=>{
        dispatch(changeTaskStatusAC(todolistId, taskId, value))
    },[dispatch])
    const addNewTask = useCallback((todolistId:string, title: string) => {
        dispatch(taskAddAC(todolistId, title))
    },[dispatch])
    const changeTodolistFilter = useCallback((tlId: string, filter: filterType)=> {
        dispatch(changeTodolistFilterAC(tlId, filter))
    },[dispatch])
    const removeTask = useCallback((tlId: string, taskId: string) =>  {
        dispatch(removeTaskAC(tlId, taskId))

    },[dispatch])
    // todolist


    const changeTaskTitle = useCallback((todolistId: string, taskId: string, title: string)=> {
        dispatch(changeTaskTitleAC(todolistId, taskId, title))
    },[])



    const todolistList = todolist.map(tl => {


        return <Box key={tl.id}>

            <ListItem>
                <Box>
                    <TodolistTitle tdId={tl.id}  tdTitle={tl.title}  />
                    <Tasks
                        removeTask={removeTask}
                        key={tl.id}
                        tlId={tl.id}
                        changeTaskStatus={changeTaskStatus}
                        addNewTask={addNewTask}
                        changeFilter={changeTodolistFilter}
                        filter={tl.filter}
                        changeTaskTitle={changeTaskTitle}
                    />
                </Box>

            </ListItem>
        </Box>
    })

    return <>{todolistList}</>
}