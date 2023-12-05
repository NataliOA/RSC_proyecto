import * as React from 'react';
import Menu from './Menu.js';
import Panel from './Panel.js';
import { Grid } from '@mui/material';

export default function Body(){
    
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleSelectedItem=(id)=>{
        setSelectedIndex(id);
    };

    return(
        <Grid container sx={{backgroundColor:'white'}}>
            <Grid item xs={2}>
                <Menu setSelectedItem={handleSelectedItem} />
            </Grid>
            <Grid item xs={10}>
                <Panel Id={selectedIndex}/>
            </Grid>
        </Grid>
    );
}