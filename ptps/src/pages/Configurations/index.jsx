import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";

function Configurations() {

    const methods = useForm();

    const { register, handleSubmit } = methods;

    const [tipoPTP, setTipoPTP] = useState('Sopro');
    const [qtdRotuladora, setQtdRotuladora] = useState('1');

    const onSubmit = (data) => {
    
        console.log('Dados', data)
    }

    return (
        <>
            <Grid item sm={12} xs={12} display='flex' justifyContent={'center'}>
                <Box mt={40} mb={2}>
                    <Typography variant="h2">
                        Configurações
                    </Typography>
                </Box>
            </Grid>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid item lg={12}>
                        <Box mt={2}>
                            <Paper elevation={3} style={{ padding: '20px' }}>
                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Preencha os campos</Typography>
                                <Box mt={2}>
                                    <TextField id="outlined-basic" label="Linha" variant="outlined"/>
                                </Box>
                                <Box mt={2}>
                                    <RadioGroup row defaultValue={tipoPTP} onChange={(e) => setTipoPTP(e.target.value)}>
                                        <FormControlLabel value={tipoPTP && 'Sopro'} control={<Radio />} label="Sopro" />
                                        <FormControlLabel value={tipoPTP && 'Rotuladora'} control={<Radio />} label="Rotuladora" />
                                    </RadioGroup>
                                </Box>
                                {tipoPTP === 'Sopro' ?
                                    <Box mt={2}>
                                        <TextField id="outlined-basic" label="Número de moldes" variant="outlined"/>
                                    </Box>
                                : 
                                <Box mt={2}>
                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Quantidade de Rotuladoras</Typography>
                                    <RadioGroup row defaultValue={qtdRotuladora} onChange={(e) => setQtdRotuladora(e.target.value)}>
                                        <FormControlLabel value={qtdRotuladora && '1'} control={<Radio />} label="1 Rotuladora" />
                                        <FormControlLabel value={qtdRotuladora && '2'} control={<Radio />} label="2 Rotuladoras" />
                                    </RadioGroup>
                                </Box>
                                }
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Box mt={5} display='flex' justifyContent='end'>
                            <Button type="submit" color="primary" variant="contained" title="Salvar">
                                Salvar
                            </Button>
                        </Box>
                    </Grid>
                </form>
            </FormProvider>
        </>
    );
}

export default Configurations;
