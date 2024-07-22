import {Input} from "./Input";
import {Button} from "./Button";
import React, {ChangeEvent, useState} from "react";
type AddItemPropsType = {
    addItem: (title: string) => void;
}
export function AddItemForm ({addItem}: AddItemPropsType): JSX.Element  {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<null | string>(null)


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
    return <>
        <Input cls={error ? 'errorInput' : ''} type={'text'} changeHandler={changeTitleHandler} value={title}/>
        <Button title={'Add'} onClick={addItemHandler}/>
        {error && <div className={error ? 'errorRed' : ''}>{error}</div>}
    </>
}