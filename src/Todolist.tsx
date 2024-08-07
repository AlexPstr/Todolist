import {FilterType, TaskType} from "./App";
import {Task} from "./Task";
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import Button from '@mui/material/Button';
import cls from './Todolist.module.css'
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import {List, ListItem, Paper} from "@mui/material";
import {PaperStyles} from "./Todolist.styles";

type TodolistType = {
    tasks: TaskType[]
    changeTaskStatus: (tdId: string, taskId: string, value: boolean) => void
    addNewTask: (tlId: string, title: string) => void
    changeFilter: (tlId: string, value: FilterType) => void
    removeTask:(tlId: string, taskId: string) => void
    filter: FilterType;
    tlId: string
    tLtitle: string
    removeTodolist: (tlId: string) => void
    changeTaskTitle: (tdId: string, taskId: string, title: string) => void
    changeTodolistTitle: (tdId: string, title: string) => void
}


export function Todolist ({tasks,
                              changeTaskStatus,
                              tlId, addNewTask,
                              changeFilter,
                              filter,
                              removeTask,
                              tLtitle,
                              removeTodolist,
                              changeTaskTitle,
                              changeTodolistTitle

}: TodolistType) {

    const tasksList = tasks.map((task: TaskType) => <ListItem> <Task
        taskId={task.id}
        tdId={tlId}
        key={task.id}
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
        task={task}
        changeTaskTitle={changeTaskTitle}

    />
    </ListItem>)

    const addTaskHandler = (title: string,) => {
        addNewTask(tlId, title)
    }
    const removeTaskHandler = () => {
        removeTodolist(tlId)
    }

    const changeTodolistTitleHandler = (title: string) => {
        changeTodolistTitle(tlId,title)
    }
    return <Paper sx={PaperStyles}>
        <Box>
            <h3 className={cls.todoTitle}>
                <Box >
                    <EditableSpan title={tLtitle} changeTitle={changeTodolistTitleHandler}/>
                    <IconButton onClick={removeTaskHandler}>
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            </h3>
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
                title={'Completed'} onClick={() => changeFilter(tlId, 'Completed')}
                color={'success'}
            >
                Completed
            </Button>
    </Box>
        </Paper>
}