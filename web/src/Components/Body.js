import Menu from './Menu.js';
import { Grid } from '@mui/material';

export default function Body(){
    return(
        <Grid container sx={{backgroundColor:'green'}}>
            <Grid item xs={2}>
                <Menu />
            </Grid>
            <Grid item xs={10}>

            </Grid>
        </Grid>
    )
}