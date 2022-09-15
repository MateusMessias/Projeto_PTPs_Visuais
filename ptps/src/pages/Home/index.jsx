import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import Header from "../../components/Header";



function Home() {

    return (
        <>
           <Header />
            <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', 
                justifyContent: 'center' }}
            >
                <Box mt={2} mb={2}> 
                    <Typography variant="h2">
                        Bem Vindo, selecione o equipamento desejado
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={12} xs={12} display='flex' justifyContent={'center'}>
                <Box mt={2} mb={2}>
                    <Link href="/sopro" title="Sopro" style={{ display : 'flex', alignItems : 'center' }}>
                        <Typography variant="h3" >
                            Sopro
                        </Typography>
                    </Link>
                </Box>
                <Box mt={2} ml={6} mb={2}>
                    <Link href="/rotuladora" title="Rotuladora" style={{ display : 'flex', alignItems : 'center' }}>
                        <Typography variant="h3" >
                            Rotuladora
                        </Typography>
                    </Link>
                </Box>
                <Box mt={2} ml={6} mb={2}>
                    <Link href="/configurations" title="Configurações" style={{ display : 'flex', alignItems : 'center' }}>
                        <Typography variant="h3" >
                            Configurações
                        </Typography>
                    </Link>
                </Box>
            </Grid>
        </>
    );
}

export default Home;
