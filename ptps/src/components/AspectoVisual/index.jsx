import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, Radio, 
    RadioGroup, Typography 
} from "@mui/material";

import useStyles from './styles';

function AspectoVisual() {
    
    const classes = useStyles();

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

        const response = fetch('http://127.0.0.1:8086/aspecto_visual_add', {
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
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                    {linha === '561' ? 
                        <>
                            <Grid item sm={12} xs={12} md={12}>
                                <Box mt={2}>
                                    <Paper elevation={3} className={classes.paper}>
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
                                    <Paper elevation={3} className={classes.paper}>
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
                                    <Paper elevation={3} className={classes.paper}>
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
                                    <Paper elevation={3} className={classes.paper}>
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
                            <Grid item xs={12}>
                                <Box mt={5}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 5</Typography>
                                        <RadioGroup
                                            row
                                            name="molde5"
                                            defaultValue="0"
                                            
                                        >
                                            <FormControlLabel {...register('molde5')} value="ok" control={<Radio />} label="OK" />
                                            <FormControlLabel {...register('molde5')} value="não OK" control={<Radio />} label="Não OK" />
                                            <FormControlLabel {...register('molde5')} value="0" control={<Radio />} label="Molde Desativado" />
                                        </RadioGroup>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={5}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 6</Typography>
                                        <RadioGroup
                                            row
                                            name="molde6"
                                            defaultValue="0"
                                            
                                        >
                                            <FormControlLabel {...register('molde6')} value="ok" control={<Radio />} label="OK" />
                                            <FormControlLabel {...register('molde6')} value="não OK" control={<Radio />} label="Não OK" />
                                            <FormControlLabel {...register('molde6')} value="0" control={<Radio />} label="Molde Desativado" />
                                        </RadioGroup>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={5}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 7</Typography>
                                        <RadioGroup
                                            row
                                            name="molde7"
                                            defaultValue="0"
                                            
                                        >
                                            <FormControlLabel {...register('molde7')} value="ok" control={<Radio />} label="OK" />
                                            <FormControlLabel {...register('molde7')} value="não OK" control={<Radio />} label="Não OK" />
                                            <FormControlLabel {...register('molde7')} value="0" control={<Radio />} label="Molde Desativado" />
                                        </RadioGroup>
                                    </Paper>
                                </Box>
                            </Grid><Grid item xs={12}>
                                <Box mt={5}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 8</Typography>
                                        <RadioGroup
                                            row
                                            name="molde8"
                                            defaultValue="0"
                                            
                                        >
                                            <FormControlLabel {...register('molde8')} value="ok" control={<Radio />} label="OK" />
                                            <FormControlLabel {...register('molde8')} value="não OK" control={<Radio />} label="Não OK" />
                                            <FormControlLabel {...register('molde8')} value="0" control={<Radio />} label="Molde Desativado" />
                                        </RadioGroup>
                                    </Paper>
                                </Box>
                            </Grid><Grid item xs={12}>
                                <Box mt={5}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 9</Typography>
                                        <RadioGroup
                                            row
                                            name="molde9"
                                            defaultValue="0"
                                            
                                        >
                                            <FormControlLabel {...register('molde9')} value="ok" control={<Radio />} label="OK" />
                                            <FormControlLabel {...register('molde9')} value="não OK" control={<Radio />} label="Não OK" />
                                            <FormControlLabel {...register('molde9')} value="0" control={<Radio />} label="Molde Desativado" />
                                        </RadioGroup>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={5}>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 10</Typography>
                                        <RadioGroup
                                            row
                                            name="molde10"
                                            defaultValue="0"
                                            
                                        >
                                            <FormControlLabel {...register('molde10')} value="ok" control={<Radio />} label="OK" />
                                            <FormControlLabel {...register('molde10')} value="não OK" control={<Radio />} label="Não OK" />
                                            <FormControlLabel {...register('molde10')} value="0" control={<Radio />} label="Molde Desativado" />
                                            </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                </>
                            :
                            <>
                            <Grid item xs={12}>
                                <Box mt={2} style={{ display: 'flex', justifyContent: 'center' }}>
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
                                            <Paper elevation={3} className={classes.paper}>
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
                                            <Paper elevation={3} className={classes.paper}>
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
                                            <Paper elevation={3} className={classes.paper}>
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
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
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
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 5</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde5"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde5')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde5')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde5')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 6</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde6"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde6')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde6')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde6')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 7</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde7"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde7')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde7')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde7')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 8</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde8"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde8')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde8')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde8')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                </>
                            :
                                <>
                                    <Grid item xs={12}>
                                        <Box mt={2}>
                                            <Paper elevation={3} className={classes.paper}>
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
                                            <Paper elevation={3} className={classes.paper}>
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
                                            <Paper elevation={3} className={classes.paper}>
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
                                            <Paper elevation={3} className={classes.paper}>
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
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 5</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde5"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde5')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde5')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde5')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 6</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde6"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde6')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde6')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde6')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 7</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde7"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde7')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde7')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde7')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 8</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde8"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde8')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde8')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde8')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 9</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde9"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde9')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde9')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde9')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 10</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde10"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde10')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde10')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde10')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 11</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde11"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde11')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde11')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde11')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 12</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde12"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde12')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde12')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde12')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 13</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde13"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde13')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde13')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde13')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 14</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde14"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde14')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde14')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde14')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 15</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde15"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde15')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde15')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde15')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box mt={5}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Molde 16</Typography>
                                                <RadioGroup
                                                    row
                                                    name="molde16"
                                                    defaultValue="0"
                                                    
                                                >
                                                    <FormControlLabel {...register('molde16')} value="ok" control={<Radio />} label="OK" />
                                                    <FormControlLabel {...register('molde16')} value="não OK" control={<Radio />} label="Não OK" />
                                                    <FormControlLabel {...register('molde16')} value="0" control={<Radio />} label="Molde Desativado" />
                                                </RadioGroup>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                </>
                            }
                        </>
                    }
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

export default AspectoVisual;