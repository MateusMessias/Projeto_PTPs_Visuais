import React, { useState } from "react";

import { Box, FormControlLabel, Grid, Radio, RadioGroup, ThemeProvider, Typography } from "@mui/material";

import theme from './style/index'
import { Container } from "@mui/system";

function App() {

    const [linha, setLinha] = useState('561')

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Container>
            <Grid item sm={12} xs={12} display='flex' justifyContent={'center'}>
                <Box mt={2} mb={2}>
                    <Typography variant="h2">
                        Selecione uma linha:
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={12} xs={12} display='flex' justifyContent={'center'}>
                <RadioGroup row defaultValue={linha} onChange={(e) => setLinha(e.target.value)}>
                    <FormControlLabel value={linha && '561'} control={<Radio />} label="Linha 561" />
                    <FormControlLabel value={linha && '562'} control={<Radio />} label="Linha 562" />
                </RadioGroup>
            </Grid>
        </Container>
      </div>
      </ThemeProvider>
  );
}

export default App;
