
import {v1} from "uuid";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskAddAC, tasksReducer, TasksType} from "./tasks-reducer";
import {addTodolistAC, removeTodolistAC} from "./todolists-reducer";
let tasks: TasksType;
let id1 = v1()
let id2 = v1()
beforeEach(() => {
      return   tasks =  {
        [id1]: [{id: '0', title: 'HTML&CSS', isDone: true},
            {id: '1', title: 'JS', isDone: true},
            {id:'2', title: 'ReactJS', isDone: false},
            {id: '3', title: 'ReactJ', isDone: false},],

        [id2]: [{id: '0', title: 'Beer', isDone: true},
            {id: '1', title: 'Milk', isDone: true},
            {id: '2', title: 'Bread', isDone: false},
            {id: '3' +
                    '', title: 'Butter', isDone: false},]
    }
})


test('task have to added', () => {

        const action = taskAddAC(id1, 'newTask')
        const endState = tasksReducer(tasks, action);
    expect(endState[id1][0].title).toEqual('newTask');
    expect(endState[id1].length).toBe(5);
})

test('task have to be removed', () => {

    const action = removeTaskAC(id1, '1')
    const endState = tasksReducer(tasks, action);
    expect(endState[id1][1].title).toEqual('ReactJS');
    expect(endState[id1].length).toBe(3);
})

test(' status task have to be changed', () => {

    const action = changeTaskStatusAC(id1, '3', true)
    const endState = tasksReducer(tasks, action);
    expect(endState[id1][3].isDone).toEqual(true);
    expect(endState[id1].length).toBe(4);
})

test(' title task have to be changed', () => {


    const action = changeTaskTitleAC(id1, '0', 'NodeJs')
    const endState = tasksReducer(tasks, action);
    expect(endState[id1][0].title).toEqual('NodeJs');
    expect(endState[id1][1].title).toEqual('JS');
})


test('new array should be added when new todolist is added', () => {

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
    const action = removeTodolistAC(id1)

    const endState = tasksReducer(tasks, action)


    const keys = Object.keys(endState)


    expect(keys.length).toBe(1)
    expect(keys[0]).toEqual(id2)
})