import React from "react";
import {  Grid, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";


//Style
import theme from './style/index'

import Routes from './routes';

function App() {

    return (
        <ThemeProvider theme={theme}>
        <div className="app">
            <Grid container justifyContent="center" spacing={4}>
                <Routes />
            </Grid>
        </div>
        </ThemeProvider>
    );
}

export default App;
