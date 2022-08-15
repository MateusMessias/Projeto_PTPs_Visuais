import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, Radio, RadioGroup, ThemeProvider, Typography } from "@mui/material";
import { Container } from "@mui/system";

//Images
import LogoTech from './images/Arquivos Logo TechCN/V04_DERIVACAO_COLORIDA+PRETO.png';

//Style
import theme from './style/index'

function App() {

    const methods = useForm();

    const { register, handleSubmit } = methods;

    const [linha, setLinha] = useState('561');
    const [produto, setProduto] = useState(false);

    const handleChange = (event) => {
        setProduto(event.target.checked );
    };

    const onSubmit = (data) => {
        const body = {
            linha,
            ...data,
        }
        console.log('Dados', body)
    }

    return (
        <ThemeProvider theme={theme}>
        <div className="app">
            <Container>
                <Box display='flex'>
                    <img src={LogoTech} alt="Logo Tech" style={{ width: '15%' }}/>
                </Box>
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
                                                name="molde1"
                                                defaultValue="0"
                                            >
                                                <FormControlLabel {...register('molde1')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('molde1')} value="não OK" control={<Radio />} label="Não OK" />
                                                <FormControlLabel {...register('molde1')} value="0" control={<Radio />} label="Molde Desativado" />
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
                                                name="molde2"
                                                defaultValue="0"
                                                
                                            >
                                                <FormControlLabel {...register('molde2')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('molde2')} value="não OK" control={<Radio />} label="Não OK" />
                                                <FormControlLabel {...register('molde2')} value="0" control={<Radio />} label="Molde Desativado" />
                                            </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={5}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 3</Typography>
                                            <RadioGroup
                                                row
                                                name="molde3"
                                                defaultValue="0"
                                                
                                            >
                                                <FormControlLabel {...register('molde3')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('molde3')} value="não OK" control={<Radio />} label="Não OK" />
                                                <FormControlLabel {...register('molde3')} value="0" control={<Radio />} label="Molde Desativado" />
                                            </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={5}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 4</Typography>
                                            <RadioGroup
                                                row
                                                name="molde4"
                                                defaultValue="0"
                                                
                                            >
                                                <FormControlLabel {...register('molde4')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('molde4')} value="não OK" control={<Radio />} label="Não OK" />
                                                <FormControlLabel {...register('molde4')} value="0" control={<Radio />} label="Molde Desativado" />
                                            </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </>
                        : 
                            <>
                                <Grid item xs={12}>
                                    <Box mt={2}>
                                        <FormControlLabel value={produto} control={
                                            <Checkbox  checked={produto}
                                                onChange={handleChange}
                                            />} label="P3" 
                                        />
                                    </Box>
                                </Grid>
                                {produto ?
                                    <>
                                        <Grid item xs={12}>
                                            <Box mt={2}>
                                                <Paper elevation={3} style={{ padding: '10px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 1</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="molde1"
                                                        defaultValue="0"
                                                    >
                                                        <FormControlLabel {...register('molde1')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('molde1')} value="não OK" control={<Radio />} label="Não OK" />
                                                        <FormControlLabel {...register('molde1')} value="0" control={<Radio />} label="Molde Desativado" />
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
                                                        name="molde2"
                                                        defaultValue="0"
                                                        
                                                    >
                                                        <FormControlLabel {...register('molde2')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('molde2')} value="não OK" control={<Radio />} label="Não OK" />
                                                        <FormControlLabel {...register('molde2')} value="0" control={<Radio />} label="Molde Desativado" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box mt={5}>
                                                <Paper elevation={3} style={{ padding: '10px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 3</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="molde2"
                                                        defaultValue="0"
                                                        
                                                    >
                                                        <FormControlLabel {...register('molde3')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('molde3')} value="não OK" control={<Radio />} label="Não OK" />
                                                        <FormControlLabel {...register('molde3')} value="0" control={<Radio />} label="Molde Desativado" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                    </>
                                :
                                    <>
                                        <Grid item xs={12}>
                                            <Box mt={2}>
                                                <Paper elevation={3} style={{ padding: '10px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 1</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="molde1"
                                                        defaultValue="0"
                                                    >
                                                        <FormControlLabel {...register('molde1')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('molde1')} value="não OK" control={<Radio />} label="Não OK" />
                                                        <FormControlLabel {...register('molde1')} value="0" control={<Radio />} label="Molde Desativado" />
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
                                                        name="molde2"
                                                        defaultValue="0"
                                                        
                                                    >
                                                        <FormControlLabel {...register('molde2')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('molde2')} value="não OK" control={<Radio />} label="Não OK" />
                                                        <FormControlLabel {...register('molde2')} value="0" control={<Radio />} label="Molde Desativado" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                    </>
                                }
                            </>
                        }
                        <Box mt={5} display='flex' justifyContent='end'>
                            <Button type="submit" color="primary" variant="contained" title="Salvar">
                                Salvar
                            </Button>
                        </Box>
                    </form>
                </FormProvider>
            </Container>
        </div>
        </ThemeProvider>
    );
}

export default App;
