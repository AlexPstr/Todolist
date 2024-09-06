import {Input} from "./Input";
import {Button} from "./Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
type AddItemPropsType = {
    addItem: (title: string) => void;
    text: string;
}
export const  AddItemForm = React.memo(({addItem,text}: AddItemPropsType): JSX.Element =>  {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<null | string>(null)

    console.log('render')
    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        setError(null)
    }
    const addItemHandler = () => {

        if(title.trim() === '') {
            setError("Please enter title.")
            return
        }
        addItem(title)
        setTitle('')

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            if(title.trim() === '') {
                setError("Please enter title.")
                return
            }
            addItem(title)
            setTitle('')
        }
    }
    return <>
        <TextField
            id="standard-basic"
            label={text}
            value={title}
            variant="outlined"
            size="small"
            helperText={error}
            error={!!error}
            onChange={changeTitleHandler}
            onKeyPress={onKeyPressHandler}
        />
        <IconButton color={"primary"} onClick={addItemHandler}>
            <AddCircleOutlineIcon />
        </IconButton>
    </>
})