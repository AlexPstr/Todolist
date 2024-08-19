import {TasksType} from "../App";
import {AddTask} from "@mui/icons-material";
import {v1} from "uuid";
import {AddTodolistAT, RemoveTodolistAT} from "./todolists-reducer";

type AddTaskAT = ReturnType<typeof taskAddAC>;
type RemoveTaskAT = ReturnType<typeof removeTaskAC>
type ChangeTaskStatusAT = ReturnType<typeof changeTaskStatusAC>
type ChangeTaskTitleAT = ReturnType<typeof changeTaskTitleAC>
type ActionType = AddTaskAT  | RemoveTaskAT | ChangeTaskStatusAT | ChangeTaskTitleAT | AddTodolistAT | RemoveTodolistAT

export const tasksReducer = (state: TasksType, action: ActionType): TasksType => {
    switch (action.type) {
        case "ADD_TASK": {
            const task  = {id: v1(), title: action.title, isDone: false};
            return {
                ...state,
                [action.todolistId]:[task, ...state[action.todolistId] ]
            }
        }
        case "REMOVE_TASK":{
            return {
                ...state,
                [action.todolistId]:state[action.todolistId]
                    .filter(task => task.id !== action.taskId),
            }
        }
        case "CHANGE_TASK_STATUS": {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(task => task.id === action.taskId ? {...task, isDone: action.status} : task),
            }
        }
        case "CHANGE_TITLE_STATUS":{
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(task => task.id === action.taskId ? {...task, title: action.title} : task),
            }
        }
        case "ADD_TODOLIST": {
            return {
                ...state,
                [action.payload.tlId]: []
            }
        }
        case "REMOVE_TODOLIST":{
            const copyTask = {...state}
            delete copyTask[action.payload.tlId]
            return copyTask
        }
        default: {
            return state
        }
    }
}

export const taskAddAC = (todolistId: string, title: string) => ({type: 'ADD_TASK', todolistId, title})as const
export const removeTaskAC = (todolistId: string, taskId: string) => ({type: 'REMOVE_TASK', todolistId, taskId}) as const
export const changeTaskStatusAC = (todolistId:string, taskId: string, status: boolean) => ({type: 'CHANGE_TASK_STATUS', todolistId,taskId, status}) as const
export const changeTaskTitleAC = (todolistId:string, taskId: string, title: string) => ({type: 'CHANGE_TITLE_STATUS', todolistId,taskId, title}) as const