import * as React from 'react';
import Menu from './Menu.js';
import { Grid, Paper } from '@mui/material';

export default function Body(){
    
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleSelectedItem=(id)=>{
        setSelectedIndex(id);
    };

    return(
        <Grid container sx={{backgroundColor:'green'}}>
            <Grid item xs={2}>
                <Menu setSelectedItem={handleSelectedItem} />
            </Grid>
            <Grid item xs={10}>
                <Paper>{selectedIndex}</Paper>
            </Grid>
        </Grid>
    );
}