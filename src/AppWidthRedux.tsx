import React, {useCallback, useReducer, useState} from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline'
import {Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
    AppBar,
    Container,
    createTheme,
    Grid,
    ListItem,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import {MenuButton} from "./MenuButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskAddAC} from "./model/tasks-reducer";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC
} from "./model/todolists-reducer";
import {v1} from "uuid";


export type filterType = 'All' | 'Active' | 'Completed'
export type todolistType = {
    id: string
    title: string
    filter: filterType;
}


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksType = {
    [key: string]: TaskType[]
}
export type ThemeMode = 'light' | 'dark' | 'blue'
export type FilterType = 'All' | 'Active' | 'Completed'
function AppWidthRedux () {


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

    const removeTodolist = useCallback((todolistId:string) => {
        dispatch(removeTodolistAC(todolistId))
    },[dispatch])

    const addTodolist = useCallback((title: string) => {
        const tlId = v1()
        dispatch(addTodolistAC(tlId, title))
    },[dispatch])

    const changeTaskTitle = useCallback((todolistId: string, taskId: string, title: string)=> {
        dispatch(changeTaskTitleAC(todolistId, taskId, title))
    },[])

    const changeTodolistTitle = useCallback((todolistId: string, title: string) =>{
        dispatch(changeTodolistTitleAC(todolistId, title))
    },[])

    const [themeMode, setThemeMode] = useState('light')
    const theme = createTheme({palette: {
            mode:  themeMode === 'dark' ? 'light' : 'dark',
            primary: {
                main: '#087EA4',
            },
        },})

    const changeModeHandler = useCallback(() => {
        setThemeMode(themeMode === 'light' ? 'dark': 'light')
    },[])
    const todolistList = todolist.map(tl => {


        return <Box key={tl.id}>

            <ListItem>
                <Todolist
                    removeTodolist={removeTodolist}
                    tLtitle={tl.title}
                    removeTask={removeTask}
                    key={tl.id}
                    tlId={tl.id}
                    changeTaskStatus={changeTaskStatus}
                    addNewTask={addNewTask}
                    changeFilter={changeTodolistFilter}
                    filter={tl.filter}
                    changeTaskTitle={changeTaskTitle}
                    changeTodolistTitle={changeTodolistTitle}

                />
            </ListItem>
        </Box>
    })

    return (<ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Box sx={{flexGrow: 1}}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="small"
                                edge="end"
                                color="inherit"
                                aria-label="menu"

                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                News
                            </Typography>
                            <MenuButton>Login</MenuButton>
                            <MenuButton>Logout</MenuButton>
                            <MenuButton>Faq</MenuButton>
                            <IconButton onClick={changeModeHandler}  color="inherit">
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Box sx={{display: 'flex', minWidth: '400px', paddingLeft: '16px'}}>
                    <h3><AddItemForm addItem={addTodolist} text={"Add Todolist"}/></h3>
                </Box>
                <Grid>
                    <List sx={{display: 'flex', flexWrap: 'wrap'}}>
                        {todolistList}
                    </List>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default AppWidthRedux;
