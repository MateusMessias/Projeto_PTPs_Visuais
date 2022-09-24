import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function Home() {

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} justifyContent='center'>
                <Box mt={40} mb={2} display='flex' justifyContent='center'> 
                    <Typography variant="h1">
                        Bem-Vindo ao Sistema de Coletas Curitibana
                    </Typography>
                </Box>
                <Box mt={5} mb={2} display='flex' justifyContent='center'> 
                    <Typography variant="h5">
                        Selecione o serviço que deseja utilizar
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Home;
