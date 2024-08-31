

import { v1 } from 'uuid'
import {todolistType} from "../App";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./todolists-reducer";

let todolistId1 = v1()
let todolistId2 = v1()
let startState: todolistType[]
beforeEach(() => {
    return startState = [
        {id: todolistId1, title: 'What to learn', filter: 'All'},
        {id: todolistId2, title: 'What to buy', filter: 'All'},
    ]
})

test('correct todolist should be removed', () => {

    const endState: todolistType[] = todolistsReducer(startState , removeTodolistAC(todolistId2))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toEqual(todolistId1)

})
test('todolist  have to  added', () => {

    const todolistId3 = v1()
    const endState: todolistType[] = todolistsReducer(startState , addTodolistAC(todolistId3, 'what to kill'))

    expect(endState.length).toBe(3)
    expect(endState[2].id).toEqual(todolistId3)

})
test('todolist title have to  changed', () => {

    const title = 'What to watch'
    const endState: todolistType[] = todolistsReducer(startState , changeTodolistTitleAC(todolistId1, title))

    expect(endState.length).toBe(2)
    expect(endState[0].title).toEqual(title)

})

test('todolist filter have to  changed', () => {
    const filter = 'Completed'
    const endState: todolistType[] = todolistsReducer(startState , changeTodolistFilterAC(todolistId1, filter))

    expect(endState.length).toBe(2)
    expect(endState[0].filter).toEqual(filter)

})