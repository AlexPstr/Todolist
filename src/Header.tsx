import Box from "@mui/material/Box";
import {AppBar, Toolbar, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {MenuButton} from "./MenuButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import React, {useCallback} from "react";
import {changeThemeAC} from "./app/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {getTheme} from "./common/theme/theme";
export type ThemeMode = 'light' | 'dark'
export function Header () {

    const dispatch = useDispatch();
    const themeMode = useSelector<AppRootStateType, ThemeMode>(state => state.app.themeMode)
    const changeModeHandler = useCallback(() => {
        const mode = themeMode === 'light' ? 'dark': 'light'
        dispatch(changeThemeAC(mode))
    },[themeMode])
    const theme = getTheme(themeMode)

    return   <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="small"
                    edge="end"
                    color="inherit"
                    aria-label="menu"

                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    News
                </Typography>
                <MenuButton>Login</MenuButton>
                <MenuButton>Logout</MenuButton>
                <MenuButton>Faq</MenuButton>
                <IconButton onClick={changeModeHandler}  color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
}