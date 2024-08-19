import {filterType, todolistType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistAT = {
    type: 'REMOVE_TODOLIST'
    payload: {
        tlId: string
    }
}
export type AddTodolistAT = {
    type: 'ADD_TODOLIST'
    payload: {
        tlId: string
        title: string
    }
}
type ChangeTodolistFilterAT = {
    type: 'CHANGE_TODOLIST_FILTER'
    payload: {
        tlId: string
        filter: filterType
    }
}
type ChangeTodolistTitleAT = {
    type: 'CHANGE_TODOLIST_TITLE'
    payload: {
        tlId: string
        title: string
    }
}


export const todolistsReducer = (state: todolistType[], action: ActionTypeS) => {
    switch (action.type){
        case "REMOVE_TODOLIST": {
            return  state.filter(tl => tl.id !== action.payload.tlId)
        }
        case "ADD_TODOLIST": {
            const newTodolist: todolistType = {id: action.payload.tlId, title: action.payload.title, filter: "All"}
            return [...state, newTodolist]
        }
        case "CHANGE_TODOLIST_FILTER": {
            return state.map(tl => tl.id === action.payload.tlId ? {...tl, filter: action.payload.filter}: tl)
        }
        case "CHANGE_TODOLIST_TITLE": {
            return state.map(tl => tl.id === action.payload.tlId ? {...tl, title: action.payload.title} : tl)
        }
        default : {
            return state;
        }
    }
}

type ActionTypeS = RemoveTodolistAT | AddTodolistAT | ChangeTodolistFilterAT | ChangeTodolistTitleAT

export const removeTodolistAC = ( tlId: string): RemoveTodolistAT => ({type: 'REMOVE_TODOLIST', payload: {tlId} })
export const addTodolistAC = ( tlId: string, title: string): AddTodolistAT => ({type: 'ADD_TODOLIST', payload: {tlId,title} })
export const changeTodolistFilterAC = ( tlId: string,filter: filterType): ChangeTodolistFilterAT => ({type: 'CHANGE_TODOLIST_FILTER', payload: {tlId,filter} })
export const changeTodolistTitleAC = ( tlId: string, title: string): ChangeTodolistTitleAT => ({type: 'CHANGE_TODOLIST_TITLE', payload: {tlId, title} })