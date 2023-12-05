import * as React from 'react';
import { Divider, MenuItem, MenuList, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#101f33', // Color de fondo oscuro
    },
    secondary: {
      main: '#3fb2ef', // Color de acento para elementos seleccionados o en hover
    },
  },
  typography: {
    fontFamily: 'Trebuchet MS, Arial, sans-serif',
    h1: {
        fontSize: '2.5rem',
      },
      body1: {
        fontSize: '1.2rem',
      },
  },
});


export default function Menu({setSelectedItem}){

    const handleItemClick = (id) => {
        setSelectedItem(id);
    };

    return(
        <ThemeProvider theme={theme}>
            <MenuList sx={{ height: '100%', backgroundColor: 'primary.main', color: 'white' }}>
                <MenuItem sx={{ '&:hover': { backgroundColor: 'secondary.main' }, '&.Mui-selected': { backgroundColor: 'secondary.main', color: 'primary.contrastText' } }} onClick={() => handleItemClick(0)}>Inicio</MenuItem>
            <Divider />
                <MenuItem sx={{ '&:hover': { backgroundColor: 'secondary.main' }, '&.Mui-selected': { backgroundColor: 'secondary.main', color: 'primary.contrastText' } }} onClick={() => handleItemClick(1)}><Typography variant="body1">Honey Nets</Typography></MenuItem>
                <MenuItem sx={{ '&:hover': { backgroundColor: 'secondary.main' }, '&.Mui-selected': { backgroundColor: 'secondary.main', color: 'primary.contrastText' } }} onClick={() => handleItemClick(2)}>Tunneling</MenuItem>
                <MenuItem sx={{ '&:hover': { backgroundColor: 'secondary.main' }, '&.Mui-selected': { backgroundColor: 'secondary.main', color: 'primary.contrastText' } }} onClick={() => handleItemClick(3)}>Internet of Things</MenuItem>
            <Divider />
                <MenuItem sx={{ '&:hover': { backgroundColor: 'secondary.main' }, '&.Mui-selected': { backgroundColor: 'secondary.main', color: 'primary.contrastText' } }} onClick={() => handleItemClick(4)}>Créditos</MenuItem>
        </MenuList>
        </ThemeProvider>

    );
}