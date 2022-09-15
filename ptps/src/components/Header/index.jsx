import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

//Images
import LogoTech from '../../images/Arquivos Logo TechCN/V04_DERIVACAO_COLORIDA+PRETO.png';

const Header = () => {

  return (
    <Grid item xs={2} style={{ display: 'flex', alignItems: 'center', 
        justifyContent: 'center' }}
    >
        <Box display='flex'>
            <img src={LogoTech} alt="Logo Tech" style={{ width: '70%' }}/>
        </Box>
    </Grid>
  )

}

export default Header;