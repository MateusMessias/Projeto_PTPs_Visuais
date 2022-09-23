import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function Home() {

    return (
        <>
            <Grid item xs={12} justifyContent='center'>
                <Box mt={40} mb={2} display='flex' justifyContent='center'> 
                    <Typography variant="h2">
                        Bem-Vindo ao Sistema de Coletas Curitibana
                    </Typography>
                </Box>
            </Grid>
        </>
    );
}

export default Home;
