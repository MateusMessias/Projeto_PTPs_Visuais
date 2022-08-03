import React, { useState } from "react";

import { Box, Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, ThemeProvider, Typography } from "@mui/material";

import theme from './style/index'
import { Container } from "@mui/system";
import { FormProvider, useForm } from "react-hook-form";

function App() {

    const methods = useForm();

    const { handleSubmit } = methods;

    const [linha, setLinha] = useState('561')

    const onSubmit = (data) => {
        console.log('da', data)
    }


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
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {linha === '561' ? 
                            <>
                                <Grid item xs={12}>
                                    <Box mt={2}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 1</Typography>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                defaultValue={'0'}
                                            >
                                                <FormControlLabel value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel value="não OK" control={<Radio />} label="Não OK" />
                                                <FormControlLabel value="0" control={<Radio />} label="Molde Desativado" />
                                            </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={5}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 2</Typography>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                defaultValue={'0'}
                                            >
                                                <FormControlLabel value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel value="não OK" control={<Radio />} label="Não OK" />
                                                <FormControlLabel value="0" control={<Radio />} label="Molde Desativado" />
                                            </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </>
                        : null
                        }
                        <Box mt={5} display='flex' justifyContent='end'>
                            <Button variant="contained">Salvar</Button>
                        </Box>
                    </form>
                </FormProvider>
            </Container>
        </div>
        </ThemeProvider>
    );
}

export default App;
