import cls from "./Todolist.module.css";
import Box from "@mui/material/Box";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useCallback} from "react";
import {changeTodolistTitleAC, removeTodolistAC} from "./model/todolists-reducer";
import {useDispatch} from "react-redux";

type TodolistTitlePropsType = {
    tdId: string,
    tdTitle: string,
}
export  function TodolistTitle ({tdId, tdTitle}: TodolistTitlePropsType) {

    const dispatch = useDispatch()
    const changeTodolistTitle = useCallback((title: string) =>{
        dispatch(changeTodolistTitleAC(tdId, title))
    },[])
    const removeTodolistHandler = useCallback(() => {
        dispatch(removeTodolistAC(tdId))
    },[])
    return <h3 className={cls.todoTitle}>
        <Box>
            <EditableSpan title={tdTitle} changeTitle={changeTodolistTitle}/>
            <IconButton onClick={removeTodolistHandler}>
                <DeleteIcon/>
            </IconButton>
        </Box>
    </h3>
}