import React, { useState } from "react";
import { Box, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import AspectoVisual from "../../components/AspectoVisual";
import Peso from "../../components/Peso"

function Sopro() {

    const [ services, setServices ] = useState('aspectoVisual');

    
    return (
        <>  
            <Grid item sm={12} xs={12} display='flex' justifyContent={'center'}>
                <Box mt={40}>
                    <RadioGroup row defaultValue={services} onChange={(e) => setServices(e.target.value)}>
                        <FormControlLabel value={services && 'aspectoVisual'} control={<Radio />} label="Aspecto Visual" />
                        <FormControlLabel value={services && 'espessura'} control={<Radio />} label="Espessura" />
                        <FormControlLabel value={services && 'explosao'} control={<Radio />} label="Explosão" />
                        <FormControlLabel value={services && 'peso'} control={<Radio />} label="Peso" />
                    </RadioGroup>
                </Box>
            </Grid>  
           
            { services === 'aspectoVisual' &&  <AspectoVisual />}
            { services === 'peso' &&  <Peso />}
           
        </>
    )
}

export default Sopro;