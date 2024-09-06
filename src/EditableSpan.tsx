import React, {ChangeEvent, memo, useState} from "react";
import {Input} from "./Input";
import './App.css'
import TextField from "@mui/material/TextField";
type EditableTaskPropsType = {
    title: string,
    changeTitle: (title: string) => void
}
export const EditableSpan = memo(( {title,changeTitle}: EditableTaskPropsType ) => {
    console.log('EditableSpan rendered');
    const  [editMode, setEditMode] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState(title)
    const [error, setError] = useState<null | string>(null)
    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        setError(null)
    }
    const changeEditModHandler = () => {
        if (newTitle.trim() === ''){
            setError('Please enter title.')
            return
        }
        setEditMode(!editMode)
        if (editMode === true){
            changeTitle(newTitle)
        }
    }
    return (
        <>
            {editMode
                ? <div>
                    <TextField
                        id="standard-basic"
                        label="Enter Title"
                        value={newTitle}
                        variant="filled"
                        helperText={error}
                        size="small"
                        error={!!error}
                        onChange={changeTitleHandler}
                        autoFocus={true}
                        onBlur={changeEditModHandler}
                    />
                    </div>


                : <span onDoubleClick={changeEditModHandler}>{title}</span>}
        </>
    )

})