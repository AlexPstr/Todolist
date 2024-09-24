import {Provider} from "react-redux";
import {AppRootStateType, store} from "../state/store";
import {useState} from "react";
import {v1} from "uuid";
import {TasksType, todolistType} from "../App";
import {combineReducers, createStore, legacy_createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistsReducer} from "./todolists-reducer";
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolist: todolistsReducer
})
const initialGlobalSstate = {
    todolist: [
        {id: 'id1', title: 'what to learn', filter: 'All'},
        {id: 'id2', title: 'what to Buy', filter: 'All'},
    ],
    tasks: {
        'id1': [{id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'ReactJ', isDone: false},],

        'id2': [{id: v1(), title: 'Beer', isDone: true},
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Bread', isDone: false},
            {id: v1(), title: 'Butter', isDone: false},]
    }
}
const storyBookStore = legacy_createStore(rootReducer, initialGlobalSstate as AppRootStateType);
export const reduxStoreProviderDecorator = (storyFn: () => React.ReactNode ) => {
    return <Provider store={ storyBookStore }>{storyFn()}</Provider>
}