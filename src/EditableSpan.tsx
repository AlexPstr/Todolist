import {ChangeEvent, useState} from "react";
import {Input} from "./Input";
import './App.css'
type EditableTaskPropsType = {
    title: string,
    changeTitle: (title: string) => void
}
export function EditableSpan ( {title,changeTitle}: EditableTaskPropsType ) {
    debugger
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
                    {{error} ? <div className={'errorRed'}>{error}</div>: ''}
                 <Input autoFocus={true}  onBlur={changeEditModHandler} type={'text'} changeHandler={changeTitleHandler} value={newTitle} />
                    </div>


                : <span onDoubleClick={changeEditModHandler}>{title}</span>}
        </>
    )

}