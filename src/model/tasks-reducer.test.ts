import {useState} from "react";
import {v1} from "uuid";
import {TasksType} from "../App";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskAddAC, tasksReducer} from "./tasks-reducer";
import {addTodolistAC, removeTodolistAC} from "./todolists-reducer";

test('task have to added', () => {

    let id1 = v1()
    let id2 = v1()
    const tasks =  {
        [id1]: [{id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'ReactJ', isDone: false},],

        [id2]: [{id: v1(), title: 'Beer', isDone: true},
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Bread', isDone: false},
            {id: v1(), title: 'Butter', isDone: false},]
    }
        const action = taskAddAC(id1, 'newTask')
        const endState = tasksReducer(tasks, action);
    expect(endState[id1][0].title).toEqual('newTask');
    expect(endState[id1].length).toBe(5);
})

test('task have to be removed', () => {

    let id1 = v1()
    let id2 = v1()
    const tasks =  {
        [id1]: [
            {id: '0', title: 'HTML&CSS', isDone: true},
            {id: '1', title: 'JS', isDone: true},
            {id: '2', title: 'ReactJS', isDone: false},
            {id: '3', title: 'ReactJ', isDone: false},],

        [id2]: [
            {id: v1(), title: 'Beer', isDone: true},
            {id: '4', title: 'Milk', isDone: true},
            {id: '5', title: 'Bread', isDone: false},
            {id: '6', title: 'Butter', isDone: false},]
    }
    const action = removeTaskAC(id1, '1')
    const endState = tasksReducer(tasks, action);
    expect(endState[id1][1].title).toEqual('ReactJS');
    expect(endState[id1].length).toBe(3);
})

test(' status task have to be changed', () => {

    let id1 = v1()
    let id2 = v1()
    const tasks =  {
        [id1]: [
            {id: '0', title: 'HTML&CSS', isDone: true},
            {id: '1', title: 'JS', isDone: true},
            {id: '2', title: 'ReactJS', isDone: false},
            {id: '3', title: 'ReactJ', isDone: false},],

        [id2]: [
            {id: v1(), title: 'Beer', isDone: true},
            {id: '4', title: 'Milk', isDone: true},
            {id: '5', title: 'Bread', isDone: false},
            {id: '6', title: 'Butter', isDone: false},]
    }
    const action = changeTaskStatusAC(id1, '3', true)
    const endState = tasksReducer(tasks, action);
    expect(endState[id1][3].isDone).toEqual(true);
    expect(endState[id1].length).toBe(4);
})

test(' title task have to be changed', () => {

    let id1 = v1()
    let id2 = v1()
    const tasks =  {
        [id1]: [
            {id: '0', title: 'HTML&CSS', isDone: true},
            {id: '1', title: 'JS', isDone: true},
            ],
        [id2]: [
            {id: '4', title: 'Milk', isDone: true},
            {id: '5', title: 'Bread', isDone: false},
            {id: '6', title: 'Butter', isDone: false},]
    }
    const action = changeTaskTitleAC(id1, '0', 'NodeJs')
    const endState = tasksReducer(tasks, action);
    expect(endState[id1][0].title).toEqual('NodeJs');
    expect(endState[id1][1].title).toEqual('JS');
})


test('new array should be added when new todolist is added', () => {
    let id1 = v1()
    let id2 = v1()
    const tasks =  {
        [id1]: [
            {id: '0', title: 'HTML&CSS', isDone: true},
            {id: '1', title: 'JS', isDone: true},
        ],
        [id2]: [
            {id: '4', title: 'Milk', isDone: true},
            {id: '5', title: 'Bread', isDone: false},
            {id: '6', title: 'Butter', isDone: false},]
    }
    const action = addTodolistAC('todolistId','new todolist')

    const endState = tasksReducer(tasks, action)


    const keys = Object.keys(endState)
    const newKey = keys.find(k => k != id1 && k != id2)
    if (!newKey) {
        throw Error('new key should be added')
    }

    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])
})

test('property in task must be removed', () => {
    let id1 = v1()
    let id2 = v1()
    const tasks =  {
        [id1]: [
            {id: '0', title: 'HTML&CSS', isDone: true},
            {id: '1', title: 'JS', isDone: true},
        ],
        [id2]: [
            {id: '4', title: 'Milk', isDone: true},
            {id: '5', title: 'Bread', isDone: false},
            {id: '6', title: 'Butter', isDone: false},]
    }
    const action = removeTodolistAC(id1)

    const endState = tasksReducer(tasks, action)


    const keys = Object.keys(endState)


    expect(keys.length).toBe(1)
    expect(keys[0]).toEqual(id2)
})