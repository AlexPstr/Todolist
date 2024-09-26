
import {Task} from "./Task";

import './App.css';
import {AddItemForm} from "./AddItemForm";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import {List, ListItem, Paper} from "@mui/material";
import {PaperStyles} from "./Todolist.styles";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {memo, useCallback} from "react";
import {TaskType} from "./model/tasks-reducer";
import {filterType} from "./model/todolists-reducer";

type TodolistType = {
    tasks?: Array<TaskType>;
    changeTaskStatus: (tdId: string, taskId: string, value: boolean) => void
    addNewTask: (tlId: string, title: string) => void
    changeFilter: (tlId: string, value: filterType) => void
    removeTask:(tlId: string, taskId: string) => void
    filter: filterType;
    tlId: string
    changeTaskTitle: (tdId: string, taskId: string, title: string) => void
}


export const Tasks = memo(({
                              changeTaskStatus,
                              tlId, addNewTask,
                              changeFilter,
                              filter,
                              removeTask,
                              changeTaskTitle,


}: TodolistType) => {

    let tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks[tlId])

    if (filter === 'Active'){
        tasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'Completed'){
        tasks = tasks.filter(task => task.isDone)
    }

    const tasksList = tasks.map((task: TaskType) =>
        <ListItem key={task.id} >
            <Task
                taskId={task.id}
                tdId={tlId}
                key={task.id}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
                task={task}
                changeTaskTitle={changeTaskTitle}

    />
    </ListItem>)

    const addTaskHandler = useCallback( (title: string,) => {
        addNewTask(tlId, title)
    },[tlId])

    return <Paper sx={PaperStyles}>
        <Box>
            <AddItemForm text={"Add Task"} addItem={addTaskHandler}/>
            <List>
                {tasksList}
            </List>
            <Button
                variant={filter === "All" ? 'contained' : 'outlined'}
                onClick={() => changeFilter(tlId, 'All')}
                color={'primary'}
            >
                All
            </Button>
            <Button
                variant={filter === "Active" ? 'contained' : 'outlined'}
                onClick={() => changeFilter(tlId, 'Active')}
                color={'secondary'}
            >
                Active
            </Button>
            <Button
                variant={filter === "Completed" ? 'contained' : 'outlined'}
                onClick={() => changeFilter(tlId, 'Completed')}
                color={'success'}
            >
                Completed
            </Button>
    </Box>
        </Paper>
})