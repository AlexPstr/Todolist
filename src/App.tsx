/*import React, {useReducer, useState} from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline'
import {v1, v4} from "uuid";
import {Tasks} from "./Tasks";
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
function App() {
    const id1 = v1()
    const id2 = v1()
    const [todolist, setTodolist] = useState<todolistType[]>( [
          {id: id1, title: 'what to learn', filter: 'All'},
          {id: id2, title: 'what to Buy', filter: 'All'},
         ])
    const [tasks, setTasks] = useState<TasksType>({
            [id1]: [{id: v1(), title: 'HTML&CSS', isDone: true},
                    {id: v1(), title: 'JS', isDone: true},
                    {id: v1(), title: 'ReactJS', isDone: false},
                    {id: v1(), title: 'ReactJ', isDone: false},],

            [id2]: [{id: v1(), title: 'Beer', isDone: true},
                    {id: v1(), title: 'Milk', isDone: true},
                    {id: v1(), title: 'Bread', isDone: false},
                    {id: v1(), title: 'Butter', isDone: false},]
        }
    )
    //task
    function changeTaskStatus (todolistId: string, taskId: string, value: boolean){
        debugger
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(task => task.id === taskId ? {...task,isDone: value} : task) })
    }
    function addNewTask (todolistId:string, title: string) {
        const newTask = {id: v1(), title, isDone: false}
        setTasks({...tasks, [todolistId]: [...tasks[todolistId],newTask ]})
    }
    function changeTodolistFilter (tlId: string, filter: filterType) {
        setTodolist(todolist.map(tl => tl.id === tlId ? {...tl, filter: filter} : tl))
    }
    function removeTask (tlId: string, taskId: string)  {
        setTasks({...tasks, [tlId]: tasks[tlId].filter(task => task.id !== taskId)})
    }
    // todolist

    function removeTodolist (todolistId:string)  {
        setTodolist(todolist.filter(tl => tl.id !== todolistId))
        const copyTasks = {...tasks}
        delete copyTasks[todolistId]
        setTasks(copyTasks)
    }

    function addTodolist (title: string) {
        const id = v1()
        const newTodo: todolistType = {id, title, filter: 'All'}
        setTodolist([...todolist, newTodo])
        setTasks({...tasks, [id]: []})
    }

    function changeTaskTitle (todolistId: string, taskId: string, title: string) {
        setTasks({...tasks,
            [todolistId]: tasks[todolistId].map(task => task.id === taskId
                ?
                {...task, title}
                : task)})
    }

    function changeTodolistTitle (todolistId: string, title: string) {
        setTodolist(todolist.map(tl => tl.id === todolistId ? {...tl, title}: tl))
    }

    const [themeMode, setThemeMode] = useState('light')
    const theme = createTheme({palette: {
            mode:  themeMode === 'dark' ? 'light' : 'dark',
            primary: {
                main: '#087EA4',
            },
        },})

    const changeModeHandler = () => {
        setThemeMode(themeMode === 'light' ? 'dark': 'light')
    }
    const todolistList = todolist.map(tl => {
        let filteredTasks = tasks[tl.id]
        if (tl.filter === 'Active'){
            filteredTasks = tasks[tl.id].filter(task => !task.isDone)
        }
        if (tl.filter === 'Completed'){
            filteredTasks = tasks[tl.id].filter(task => task.isDone)
        }

        return <Box>

            <ListItem>
                <Tasks
                    removeTodolist={removeTodolist}
                    tLtitle={tl.title}
                    removeTask={removeTask}
                    key={tl.id}
                    tlId={tl.id}
                    tasks={filteredTasks}
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
                    <h3><AddItemForm addItem={addTodolist} text={"Add Tasks"}/></h3>
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

export default App;*/
