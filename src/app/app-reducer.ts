export type ThemeMode = 'dark' | 'light'

type InitialState = typeof initialState

const initialState = {
    themeMode: 'light' as ThemeMode,
}
console.log(initialState.themeMode)
export const appReducer = (
    state: InitialState = initialState,
    action: ActionsType
): InitialState => {
    switch (action.type) {
        case 'CHANGE_MODE':{
            return {...state, themeMode: action.payload.theme}
        }
        default:
            return state
    }
}


export const changeThemeAC = (theme: ThemeMode) => ({type: 'CHANGE_MODE', payload:{theme} })

// Action types
type changeThemeACType = ReturnType<typeof changeThemeAC>
type ActionsType = changeThemeACType