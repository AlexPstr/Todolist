import {combineReducers, createStore} from "redux";
import {tasksReducer} from "../model/tasks-reducer";
import {todolistsReducer} from "../model/todolists-reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolist: todolistsReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>