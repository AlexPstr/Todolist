
import {addTodolistAC, removeTodolistAC, todolistsReducer, todolistType} from "./todolists-reducer";
import {tasksReducer, TasksType} from "./tasks-reducer";
import {v1} from "uuid";

test('id todolist and id task must be equal', () => {

    const startStateTask: TasksType = {

    }
    const startStateTodolist: todolistType[] = [

    ]
    const action = addTodolistAC('todolistId1', 'newTodo')

    const taskEndState= tasksReducer(startStateTask, action)
    const todolistEndState = todolistsReducer(startStateTodolist, action)


    const keys = Object.keys(taskEndState)
    expect(keys.length).toBe(1)
    expect(todolistEndState.length).toBe(1)
    expect(keys[0]).toEqual(todolistEndState[0].id)
})

test('id todolist and id task must be removed', () => {
    const id1 = v1()
    const id2 = v1()
    const startStateTask: TasksType =  {
        [id1]: [
            {id: '0', title: 'HTML&CSS', isDone: true},
            {id: '1', title: 'JS', isDone: true},
        ],
        [id2]: [
            {id: '4', title: 'Milk', isDone: true},
            {id: '5', title: 'Bread', isDone: false},
            {id: '6', title: 'Butter', isDone: false},]
    }
    const startStateTodolist: todolistType[] = [

        {id: id1, title: 'What to learn', filter: 'All'},
        {id: id2, title: 'What to buy', filter: 'All'},
    ]
    const action = removeTodolistAC(id2)

    const taskEndState= tasksReducer(startStateTask, action)
    const todolistEndState = todolistsReducer(startStateTodolist, action)

    const keys = Object.keys(taskEndState)

    expect(keys.length).toBe(1)
    expect(todolistEndState.length).toBe(1)
    expect(keys[0]).toEqual(todolistEndState[0].id)
    expect(keys[0]).toEqual(id1)
    expect(todolistEndState[0].id).toEqual(id1)
})