import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Header from "../../components/Header";
import Menu from "../../components/Menu";



function Home() {

    return (
        <>  
            <Menu/>
            <Header />
            <Container>
                <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', 
                    justifyContent: 'center' }}
                >
                    <Box mt={2} mb={2}> 
                        <Typography variant="h2">
                            Bem Vindo, selecione o equipamento desejado
                        </Typography>
                    </Box>
                </Grid>
            </Container>
        </>
    );
}

export default Home;
