import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";

//Images
import LogoTech from '../../images/Arquivos Logo TechCN/V04_DERIVACAO_COLORIDA+PRETO.png';

function Home() {

    return (
        <>
            <Grid item xs={2} style={{ display: 'flex', alignItems: 'center', 
                justifyContent: 'center' }}
            >
                <Box display='flex'>
                    <img src={LogoTech} alt="Logo Tech" style={{ width: '70%' }}/>
                </Box>
            </Grid>
            <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', 
                justifyContent: 'center' }}
            >
                <Box mt={2} mb={2}> 
                    <Typography variant="h2">
                        Bem Vindo, selecione a opção que deseja utilizar
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
