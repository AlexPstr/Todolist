type ButtonPropsType = {
    title: string
    onClick: () => void
    cls?: string;
}

export function Button ({cls,title, onClick}: ButtonPropsType) {
const onClickHandler = ()=> {
    onClick()
    }

    return <button className={cls} onClick={onClickHandler}>{title}</button>
}