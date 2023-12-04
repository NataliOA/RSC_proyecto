import {Grid, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2b5388', // Color de fondo oscuro
    },
  },
  typography: {
    
    h1: {
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '2.8rem',
      },
      body1: {
        fontSize: '1.2rem',
      },
  },
});
export default function Head(){
    return(
        <ThemeProvider theme={theme}>
            <Grid container sx={{backgroundColor:'primary.main'}}>
                <Grid item md={4}>

                </Grid>
                <Grid item md={4}  sx={{ pt: 2, pb: 2, pl: 3, pr: 3 }}>
                    <Typography variant="h1" sx={{ color: 'white', textAlign: 'center' }}>Redes y Seguridad de Computadoras</Typography>
                </Grid>
                <Grid item md={4}>
                    
                </Grid>
            </Grid>
        </ThemeProvider>
    )

}