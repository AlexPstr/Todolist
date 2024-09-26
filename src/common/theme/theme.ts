import { createTheme } from '@mui/material/styles'
export const getTheme = (themeMode: "light" | "dark") => {
    return  createTheme({
        palette: {
            mode: themeMode === 'light' ? 'light' : 'dark',
            primary: {
                main: '#087EA4',
            },
        },
    })
}
