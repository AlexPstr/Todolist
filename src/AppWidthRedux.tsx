
import './App.css';
import CssBaseline from '@mui/material/CssBaseline'

import {
    Container,
    ThemeProvider,
} from "@mui/material";

import {Header, ThemeMode} from "./Header";
import {Main} from "./Main";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {getTheme} from "./common/theme/theme";


function AppWidthRedux () {
    const themeMode = useSelector<AppRootStateType, ThemeMode>(state => state.app.themeMode)

    return (<ThemeProvider theme={getTheme(themeMode)}>
            <CssBaseline />
            <Container>
                <Header />
                <Main />
            </Container>
        </ThemeProvider>
    );
}

export default AppWidthRedux;
