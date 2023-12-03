import * as React from 'react';
import { Divider, MenuItem, MenuList } from '@mui/material';

export default function Menu({setSelectedItem}){

    const handleItemClick = (id) => {
        setSelectedItem(id);
    };

    return(
        <MenuList sx={{backgroundColor:'red'}}>
            <MenuItem sx={{backgroundColor:'yellow'}} onClick={()=>handleItemClick(0)}>Honey Nets</MenuItem>
            <Divider />
            <MenuItem sx={{backgroundColor:'yellow'}} onClick={()=>handleItemClick(1)}>Honey Nets</MenuItem>
            <MenuItem sx={{backgroundColor:'yellow'}} onClick={()=>handleItemClick(2)}>Tunneling</MenuItem>
            <MenuItem sx={{backgroundColor:'yellow'}} onClick={()=>handleItemClick(3)}>Internet of Things</MenuItem>
            <Divider />
            <MenuItem sx={{backgroundColor:'yellow'}} onClick={()=>handleItemClick(4)}>Créditos</MenuItem>
        </MenuList>
    );
}