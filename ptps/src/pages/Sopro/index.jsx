import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, Radio, 
    RadioGroup, Typography 
} from "@mui/material";
import AspectoVisual from "../../components/AspectoVisual";
import Header from "../../components/Header";


function Sopro() {

    const [ services, setServices ] = useState('aspectoVisual');

    
    return (
        <>  
            <Header/>
            <Grid item sm={12} xs={12} display='flex' justifyContent={'center'}>
                <RadioGroup row defaultValue={services} onChange={(e) => setServices(e.target.value)}>
                    <FormControlLabel value={services && 'aspectoVisual'} control={<Radio />} label="Aspecto Visual" />
                    <FormControlLabel value={services && 'espessura'} control={<Radio />} label="Espessura" />
                    <FormControlLabel value={services && 'explosao'} control={<Radio />} label="Explosão" />
                    <FormControlLabel value={services && 'peso'} control={<Radio />} label="Peso" />
                </RadioGroup>
            </Grid>  
           
            { services === 'aspectoVisual' &&  <AspectoVisual />}
           
        </>
    )
}

export default Sopro;