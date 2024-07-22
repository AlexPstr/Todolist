import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

type InputType = {
    type:string
    value?: string
    checked?: boolean
    changeHandler: (e:ChangeEvent<HTMLInputElement>) => void
    cls?: string
}
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
export function Input ({type, value, checked,changeHandler, cls, ...restProps}: InputType & DefaultInputPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeHandler(e)
    }
    return <input
        className={cls}
        checked={checked}
        onChange={onChangeHandler}
        value={value}
        type={type}
        {...restProps}
    />
}