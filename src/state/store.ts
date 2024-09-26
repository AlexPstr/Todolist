import {combineReducers, createStore} from "redux";
import {tasksReducer} from "../model/tasks-reducer";
import {todolistsReducer} from "../model/todolists-reducer";
import {appReducer} from "../app/app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    tasks: tasksReducer,
    todolist: todolistsReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>