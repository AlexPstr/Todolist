import React, {useState} from 'react';
import './App.css';

import {v1, v4} from "uuid";
import {Todolist} from "./Todolist";
import {AddItemForm} from "./AddItemForm";

export type filterType = 'All' | 'Active' | 'Completed'
export type todolistType = {
    id: string
    title: string
    filter: filterType;
}


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksType = {
    [key: string]: TaskType[]
}
export type FilterType = 'All' | 'Active' | 'Completed'
function App() {
    const id1 = v1()
    const id2 = v1()
    const [todolist, setTodolist] = useState<todolistType[]>([
        {id: id1, title: 'what to learn', filter: 'All'},
        {id: id2, title: 'what to Buy', filter: 'All'},
    ]);

    const [tasks, setTasks] = useState<TasksType>(
        {
            [id1]: [{id: v1(), title: 'HTML&CSS', isDone: true},
                    {id: v1(), title: 'JS', isDone: true},
                    {id: v1(), title: 'ReactJS', isDone: false},
                    {id: v1(), title: 'ReactJ', isDone: false},],

            [id2]: [{id: v1(), title: 'Beer', isDone: true},
                    {id: v1(), title: 'Milk', isDone: true},
                    {id: v1(), title: 'Bread', isDone: false},
                    {id: v1(), title: 'Butter', isDone: false},]
        }
    )
    //task
    function changeTaskStatus (todolistId: string, taskId: string, value: boolean){
        debugger
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(task => task.id === taskId ? {...task,isDone: value} : task) })
    }
    function addNewTask (todolistId:string, title: string) {
        const newTask = {id: v1(), title, isDone: false}
        setTasks({...tasks, [todolistId]: [...tasks[todolistId],newTask ]})
    }
    function changeFilter (tlId: string, filter: filterType) {
        setTodolist(todolist.map(tl => tl.id === tlId ? {...tl, filter: filter} : tl))
    }
    function removeTask (tlId: string, taskId: string)  {
        setTasks({...tasks, [tlId]: tasks[tlId].filter(task => task.id !== taskId)})
    }
    // todolist

    function removeTodolist (todolistId:string)  {
        setTodolist(todolist.filter(tl => tl.id !== todolistId))
        const copyTasks = {...tasks}
        delete copyTasks[todolistId]
        setTasks(copyTasks)
    }

    function addTodolist (title: string) {
        const id = v1()
        const newTodo: todolistType = {id, title, filter: 'All'}
        setTodolist([...todolist, newTodo])
        setTasks({...tasks, [id]: []})
    }

    function changeTaskTitle (todolistId: string, taskId: string, title: string) {
        setTasks({...tasks,
            [todolistId]: tasks[todolistId].map(task => task.id === taskId
                ?
                {...task, title}
                : task)})
    }

    function changeTodolistTitle (todolistId: string, title: string) {
        setTodolist(todolist.map(tl => tl.id === todolistId ? {...tl, title}: tl))
    }
    const todolistList = todolist.map(tl => {
        let filteredTasks = tasks[tl.id]
        if (tl.filter === 'Active'){
            filteredTasks = tasks[tl.id].filter(task => !task.isDone)
        }
        if (tl.filter === 'Completed'){
            filteredTasks = tasks[tl.id].filter(task => task.isDone)
        }

        return <div>

                <Todolist
                    removeTodolist={removeTodolist}
                    tLtitle={tl.title}
                    removeTask={removeTask}
                    key={tl.id}
                    tlId={tl.id}
                    tasks = {filteredTasks}
                    changeTaskStatus={changeTaskStatus}
                    addNewTask={addNewTask}
                    changeFilter={changeFilter}
                    filter={tl.filter}
                    changeTaskTitle={changeTaskTitle}
                    changeTodolistTitle={changeTodolistTitle}

                />
               </div>
    })
    return (
        <div className="App">
            <h3><AddItemForm addItem={addTodolist} /></h3>
            {todolistList}
        </div>
    );
}

export default App;
