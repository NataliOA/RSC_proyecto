import { Divider, MenuItem, MenuList } from '@mui/material';

export default function menu(){
    return(
        <MenuList sx={{backgroundColor:'red'}}>
            <MenuItem sx={{backgroundColor:'yellow'}}>Honey Nets</MenuItem>
            <Divider />
            <MenuItem sx={{backgroundColor:'yellow'}}>Honey Nets</MenuItem>
            <MenuItem sx={{backgroundColor:'yellow'}}>Tunneling</MenuItem>
            <MenuItem sx={{backgroundColor:'yellow'}}>Internet of Things</MenuItem>
            <Divider />
            <MenuItem sx={{backgroundColor:'yellow'}}>Créditos</MenuItem>
        </MenuList>
    )
}