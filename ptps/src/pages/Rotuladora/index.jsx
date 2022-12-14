import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, FormControlLabel, Grid, Paper, Radio, 
    RadioGroup, Typography 
} from "@mui/material";

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

        const response = fetch('http://127.0.0.1:8086/rotuladoras_add', {
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
                                                <FormControlLabel {...register('Garrafa 1')} value="n??o OK" control={<Radio />} label="N??o OK" />
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
                                                <FormControlLabel {...register('Garrafa 2')} value="n??o OK" control={<Radio />} label="N??o OK" />
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
                                                <FormControlLabel {...register('Garrafa 3')} value="n??o OK" control={<Radio />} label="N??o OK" />
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
                                                <FormControlLabel {...register('Garrafa 4')} value="n??o OK" control={<Radio />} label="N??o OK" />
                                             </RadioGroup>
                                        </Paper>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={5}>
                                        <Paper elevation={3} style={{ padding: '10px' }}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Codifica????o</Typography>
                                            <RadioGroup
                                                row
                                                name="Codifica????o"
                                                defaultValue="0"
                                                
                                            >
                                                <FormControlLabel {...register('Codifica????o')} value="ok" control={<Radio />} label="OK" />
                                                <FormControlLabel {...register('Codifica????o')} value="n??o OK" control={<Radio />} label="N??o OK" />
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
                                                        <FormControlLabel {...register('Garrafa 1')} value="n??o OK" control={<Radio />} label="N??o OK" />
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
                                                        <FormControlLabel {...register('Garrafa 2')} value="n??o OK" control={<Radio />} label="N??o OK" />
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
                                                        <FormControlLabel {...register('Garrafa 3')} value="n??o OK" control={<Radio />} label="N??o OK" />
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
                                                        <FormControlLabel {...register('Garrafa 4')} value="n??o OK" control={<Radio />} label="N??o OK" />
                                                    </RadioGroup>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box mt={5}>
                                                <Paper elevation={3} style={{ padding: '10px' }}>
                                                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Codifica????o</Typography>
                                                    <RadioGroup
                                                        row
                                                        name="Codifica????o"
                                                        defaultValue="0"
                                                        
                                                    >
                                                        <FormControlLabel {...register('Codifica????o')} value="ok" control={<Radio />} label="OK" />
                                                        <FormControlLabel {...register('Codifica????o')} value="n??o OK" control={<Radio />} label="N??o OK" />
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