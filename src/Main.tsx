import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    addTodolistAC,
    changeTodolistFilterAC, changeTodolistTitleAC,
    filterType,
    removeTodolistAC,
    todolistType
} from "./model/todolists-reducer";
import {ThemeMode} from "./Header";
import React, {useCallback} from "react";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskAddAC} from "./model/tasks-reducer";
import {v1} from "uuid";
import {getTheme} from "./common/theme/theme";
import Box from "@mui/material/Box";
import {Grid, ListItem} from "@mui/material";
import {Tasks} from "./Tasks";
import {AddItemForm} from "./AddItemForm";
import List from "@mui/material/List";
import {Todolists} from "./Todolists";

export function Main () {

    const dispatch = useDispatch();
    const addTodolist = useCallback((title: string) => {
        const tlId = v1()
        dispatch(addTodolistAC(tlId, title))
    },[dispatch])
    return <>
        <Box sx={{display: 'flex', minWidth: '400px', paddingLeft: '16px'}}>
            <h3><AddItemForm addItem={addTodolist} text={"Add Tasks"}/></h3>
        </Box>
        <Grid>
            <List sx={{display: 'flex', flexWrap: 'wrap'}}>
               <Todolists />
            </List>
        </Grid>
    </>
}