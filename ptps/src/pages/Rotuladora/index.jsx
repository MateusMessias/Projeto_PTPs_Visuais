import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, Radio, 
    RadioGroup, Typography 
} from "@mui/material";
import Menu from "../../components/Menu";

function Rotuladora() {

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
        <>
            <Menu/>
            <Grid item sm={12} xs={12} display='flex' justifyContent={'center'}>
                    <Box mt={45}>
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
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Garrafa 1</Typography>
                                            <RadioGroup
                                                row
                                                name="Garrafa 1"
                                                defaultValue="0"
                                            >
                                                <FormControlLabel {...register('Garrafa 1')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('Garrafa 1')} value="não OK" control={<Radio />} label="Não OK" />
                                            </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={5}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Garrafa 2</Typography>
                                            <RadioGroup
                                                row
                                                name="Garrafa 2"
                                                defaultValue="0"
                
                                            >
                                                <FormControlLabel {...register('Garrafa 2')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('Garrafa 2')} value="não OK" control={<Radio />} label="Não OK" />
                                             </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={5}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Garrafa 3</Typography>
                                            <RadioGroup
                                                row
                                                name="Garrafa 3"
                                                defaultValue="0"
                                                
                                            >
                                                <FormControlLabel {...register('Garrafa 3')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('Garrafa 3')} value="não OK" control={<Radio />} label="Não OK" />
                                            </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={5}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Garrafa 4</Typography>
                                            <RadioGroup
                                                row
                                                name="Garrafa 4"
                                                defaultValue="0"
                                                
                                            >
                                                <FormControlLabel {...register('Garrafa 4')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('Garrafa 4')} value="não OK" control={<Radio />} label="Não OK" />
                                             </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={5}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Codificação</Typography>
                                            <RadioGroup
                                                row
                                                name="Codificação"
                                                defaultValue="0"
                                                
                                            >
                                                <FormControlLabel {...register('Codificação')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('Codificação')} value="não OK" control={<Radio />} label="Não OK" />
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
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Garrafa 1</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="Garrafa 1"
                                                        defaultValue="0"
                                                    >
                                                        <FormControlLabel {...register('Garrafa 1')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('Garrafa 1')} value="não OK" control={<Radio />} label="Não OK" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box mt={5}>
                                                <Paper elevation={3} style={{ padding: '10px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Garrafa 2</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="Garrafa 2"
                                                        defaultValue="0"
                                                        
                                                    >
                                                        <FormControlLabel {...register('Garrafa 2')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('Garrafa 2')} value="não OK" control={<Radio />} label="Não OK" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box mt={5}>
                                                <Paper elevation={3} style={{ padding: '10px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Garrafa 3</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="Garrafa 3"
                                                        defaultValue="0"
                                                        
                                                    >
                                                        <FormControlLabel {...register('Garrafa 3')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('Garrafa 3')} value="não OK" control={<Radio />} label="Não OK" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box mt={5}>
                                                <Paper elevation={3} style={{ padding: '10px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Garrafa 4</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="Garrafa 4"
                                                        defaultValue="0"
                                                        
                                                    >
                                                        <FormControlLabel {...register('Garrafa 4')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('Garrafa 4')} value="não OK" control={<Radio />} label="Não OK" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box mt={5}>
                                                <Paper elevation={3} style={{ padding: '10px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Codificação</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="Codificação"
                                                        defaultValue="0"
                                                        
                                                    >
                                                        <FormControlLabel {...register('Codificação')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('Codificação')} value="não OK" control={<Radio />} label="Não OK" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid> 
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

export default Rotuladora;