import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Radio, 
    RadioGroup, Select, TextField, Typography 
} from "@mui/material";

import useStyles from './styles';

function Peso() {
    
    const classes = useStyles();

    const methods = useForm();

    const { register, handleSubmit } = methods;

    const [linha, setLinha] = useState('561');
    const [produto, setProduto] = useState(false);
    const [ molde, setMolde ] = useState('molde1');
    const [ moldeDesativado, setMoldeDesativado] = useState(false)
    const [ pontoInjecao, setPontoInjecao ] = useState('ok')

    const handleChange = (event) => {
        setProduto(event.target.checked );
    };

    const handleChangeMoldeDesativado = (event) => {
        setMoldeDesativado(event.target.checked );
    };

    const handleChangePontoInjecao = (event) => {
        setPontoInjecao(event.target.value );
    };

    const onSubmit = (data) => {

        const body = {
            linha,
            ...data,
        }

        const response = fetch('http://127.0.0.1:8086/peso_add', {
            body: JSON.stringify(body)
        })

        if(response.status === 200) {
            //mensagem sucesso
            console.log('Sucesso')
        } else {
            //mensagem de erro
            console.log('Erro')
        }
    }

    return (
        <>  
            <Grid item sm={12} xs={12} display='flex' justifyContent={'center'}>
                <Box mt={4}>
                    <RadioGroup row defaultValue={linha} onChange={(e) => setLinha(e.target.value)}>
                        <FormControlLabel value={linha && '561'} control={<Radio />} label="Linha 561" />
                        <FormControlLabel value={linha && '562'} control={<Radio />} label="Linha 562" />
                    </RadioGroup>
                </Box>
            </Grid>
            {linha === '562' &&
                <Grid item xs={12}>
                    <Box mt={2} style={{ display: 'flex', justifyContent: 'center' }}>
                        <FormControlLabel value={produto} control={
                            <Checkbox  checked={produto}
                                onChange={handleChange}
                            />} label="P3" 
                        />
                    </Box>
                </Grid>
            }
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                    
                            <Grid item sm={12} xs={12} md={12}>
                                <Box mt={2}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Seleção de Moldes</Typography>
                                        <RadioGroup row defaultValue={molde} onChange={(e) => setMolde(e.target.value)}>
                                            {produto && linha === '562' ?
                                                <>
                                                    <FormControlLabel value={molde && 'molde1'} control={<Radio />} label="Molde 1" />
                                                    <FormControlLabel value={molde && 'molde2'} control={<Radio />} label="Molde 2" />
                                                    <FormControlLabel value={molde && 'molde3'} control={<Radio />} label="Molde 3" />
                                                    <FormControlLabel value={molde && 'molde4'} control={<Radio />} label="Molde 4" />
                                                    <FormControlLabel value={molde && 'molde5'} control={<Radio />} label="Molde 5" />
                                                    <FormControlLabel value={molde && 'molde6'} control={<Radio />} label="Molde 6" />
                                                    <FormControlLabel value={molde && 'molde7'} control={<Radio />} label="Molde 7" />
                                                    <FormControlLabel value={molde && 'molde8'} control={<Radio />} label="Molde 8" />
                                                </>
                                            : 
                                                <>
                                                    {linha === '562' ?
                                                        <>  
                                                            <FormControlLabel value={molde && 'molde1'} control={<Radio />} label="Molde 1" />
                                                            <FormControlLabel value={molde && 'molde2'} control={<Radio />} label="Molde 2" />
                                                            <FormControlLabel value={molde && 'molde3'} control={<Radio />} label="Molde 3" />
                                                            <FormControlLabel value={molde && 'molde4'} control={<Radio />} label="Molde 4" />
                                                            <FormControlLabel value={molde && 'molde5'} control={<Radio />} label="Molde 5" />
                                                            <FormControlLabel value={molde && 'molde6'} control={<Radio />} label="Molde 6" />
                                                            <FormControlLabel value={molde && 'molde7'} control={<Radio />} label="Molde 7" />
                                                            <FormControlLabel value={molde && 'molde8'} control={<Radio />} label="Molde 8" />
                                                            <FormControlLabel value={molde && 'molde9'} control={<Radio />} label="Molde 9" />
                                                            <FormControlLabel value={molde && 'molde10'} control={<Radio />} label="Molde 10" />
                                                            <FormControlLabel value={molde && 'molde11'} control={<Radio />} label="Molde 11" />
                                                            <FormControlLabel value={molde && 'molde12'} control={<Radio />} label="Molde 12" />
                                                            <FormControlLabel value={molde && 'molde13'} control={<Radio />} label="Molde 13" />
                                                            <FormControlLabel value={molde && 'molde14'} control={<Radio />} label="Molde 14" />
                                                            <FormControlLabel value={molde && 'molde15'} control={<Radio />} label="Molde 15" />
                                                            <FormControlLabel value={molde && 'molde16'} control={<Radio />} label="Molde 16" />
                                                        </>
                                                    :
                                                        <>
                                                            <FormControlLabel value={molde && 'molde1'} control={<Radio />} label="Molde 1" />
                                                            <FormControlLabel value={molde && 'molde2'} control={<Radio />} label="Molde 2" />
                                                            <FormControlLabel value={molde && 'molde3'} control={<Radio />} label="Molde 3" />
                                                            <FormControlLabel value={molde && 'molde4'} control={<Radio />} label="Molde 4" />
                                                            <FormControlLabel value={molde && 'molde5'} control={<Radio />} label="Molde 5" />
                                                            <FormControlLabel value={molde && 'molde6'} control={<Radio />} label="Molde 6" />
                                                            <FormControlLabel value={molde && 'molde7'} control={<Radio />} label="Molde 7" />
                                                            <FormControlLabel value={molde && 'molde8'} control={<Radio />} label="Molde 8" />
                                                            <FormControlLabel value={molde && 'molde9'} control={<Radio />} label="Molde 9" />
                                                            <FormControlLabel value={molde && 'molde10'} control={<Radio />} label="Molde 10" />
                                                        </>                                            
                                                    }
                                                </>
                                            }
                                        </RadioGroup>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={5}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <FormControlLabel value={moldeDesativado} control={
                                            <Checkbox  checked={moldeDesativado}
                                                onChange={handleChangeMoldeDesativado}
                                            />} label="Molde Desativado" 
                                        />

                                        <Box mt={10}>
                                            <TextField id="pesoDoOmbro" label="Peso do Ombro" variant="outlined" disabled />
                                        </Box>
                                        <Box mt={5}>
                                            <TextField id="pesoDoCorpo" label="Peso do Corpo" variant="outlined" disabled />
                                        </Box>
                                        <Box mt={5}>
                                            <TextField id="pesoDaBase" label="Peso da Base" variant="outlined" disabled />
                                        </Box>
                                        <Box mt={5} style={{ maxWidth: '210px' }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Centralização de Ponto Injeção</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={pontoInjecao}
                                                    label="Centralização de Ponto Injeção"
                                                    onChange={handleChangePontoInjecao}
                                                >
                                                    <MenuItem value={'ok'}>OK</MenuItem>
                                                    <MenuItem value={'nãoOk'}>Não OK</MenuItem>
                                                    <MenuItem value={'0'}>Ignorar</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Grid> 
                                             
                    <Box mt={5} display='flex' justifyContent='end'>
                        <Button type="submit" color="primary" variant="contained" title="Enviar">
                            Enviar
                        </Button>
                    </Box>
                </form>
            </FormProvider>
        </>
    )
}

export default Peso;