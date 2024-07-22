import {FilterType, TaskType} from "./App";
import {Task} from "./Task";
import {Button} from "./Button";
import {Input} from "./Input";
import React, {ChangeEvent, useState} from "react";
import './App.css';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

type TodolistType = {
    tasks: TaskType[]
    changeTaskStatus: (tdId: string, taskId: string, value: boolean) => void
    addNewTask: (tlId: string, title: string) => void
    changeFilter: (tlId: string, value: FilterType) => void
    removeTask:(tlId: string, taskId: string) => void
    filter: FilterType;
    tlId: string
    tLtitle: string
    removeTodolist: (tlId: string) => void
    changeTaskTitle: (tdId: string, taskId: string, title: string) => void
    changeTodolistTitle: (tdId: string, title: string) => void
}


export function Todolist ({tasks,
                              changeTaskStatus,
                              tlId, addNewTask,
                              changeFilter,
                              filter,
                              removeTask,
                              tLtitle,
                              removeTodolist,
                              changeTaskTitle,
                              changeTodolistTitle

}: TodolistType) {

    const tasksList = tasks.map((task: TaskType) => <Task
        taskId={task.id}
        tdId={tlId}
        key={task.id}
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
        task={task}
        changeTaskTitle={changeTaskTitle}

    />)



    const addTaskHandler = (title: string,) => {
        addNewTask(tlId, title)
    }
    const removeTaskHandler = () => {
        removeTodolist(tlId)
    }

    const changeTodolistTitleHandler = (title: string) => {
        changeTodolistTitle(tlId,title)
    }
    return <div>
        <h3>
            <EditableSpan title={tLtitle} changeTitle={changeTodolistTitleHandler} />
            <Button title={'X'} onClick={removeTaskHandler} />
        </h3>
        <div>
            <AddItemForm addItem={addTaskHandler}/>
            {tasksList}
        </div>
        <div>
            <Button cls={filter === "All" ? 'filterAll' : ''} title={'All'} onClick={() => {
                changeFilter(tlId, 'All')
            }}/>
            <Button cls={filter === "Active" ? 'filterActive' : ''} title={'Active'} onClick={() => {
                changeFilter(tlId, 'Active')
            }}/>
            <Button cls={filter === "Completed" ? 'filterCompleted' : ''} title={'Completed'} onClick={() => {
                changeFilter(tlId, 'Completed')
            }}/>
        </div>
    </div>
}