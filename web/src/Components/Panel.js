import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const info = [
    [true,false,false,true],
    [false,true,"Seguridad en una red: Honey Nets","Antecedentes","Honeypots","Funcionamiento","Implementación"],
    [false,true, "Establecimiento de un enlace seguro de red: Tunneling","¿Qué es?","Funcionamiento","Implementación","Implementación en Google Cloud"],
    [false,true, "Internet of Things", "Antecedentes","Funcionamiento","Ejemplos","Futuro"],
    [true,false,true,false]
];

function CustomTabPanel(props) {
  const {value, index, theme} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {value === 0 && theme === 1 &&(
        <Typography>11</Typography>
      )}
      {value === 1 && theme === 1 &&(
        <Typography>12</Typography>
      )}
      {value === 2 && theme === 1 &&(
        <Typography>13</Typography>
      )}
      {value === 3 && theme === 1 &&(
        <Typography>14</Typography>
      )}
      {value === 0 && theme === 2 &&(
        <Typography>21</Typography>
      )}
      {value === 1 && theme === 2 &&(
        <Typography>22</Typography>
      )}
      {value === 2 && theme === 2 &&(
        <Typography>23</Typography>
      )}
      {value === 3 && theme === 2 &&(
        <Typography>24</Typography>
      )}
      {value === 0 && theme === 3 &&(
        <Typography>31</Typography>
      )}
      {value === 1 && theme === 3 &&(
        <Typography>32</Typography>
      )}
      {value === 2 && theme === 3 &&(
        <Typography>33</Typography>
      )}
      {value === 3 && theme === 3 &&(
        <Typography>34</Typography>
      )}
      {value === 0 && theme === 4 &&(
        <Typography>41</Typography>
      )}
      {value === 1 && theme === 4 &&(
        <Typography>42</Typography>
      )}
      {value === 2 && theme === 4 &&(
        <Typography>43</Typography>
      )}
      {value === 3 && theme === 4 &&(
        <Typography>44</Typography>
      )}
    </div>
  );
}

export default function Panel({Id}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div hidden={info[Id][0]}>
        <Typography>{info[Id][2]}</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
            <Tab label={info[Id][3]} />
            <Tab label={info[Id][4]} />
            <Tab label={info[Id][5]}/>
            <Tab label={info[Id][6]}/>
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} theme={Id}>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} theme={Id}>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} theme={Id}>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3} theme={Id}> 
        </CustomTabPanel>
      </div>
      <div hidden={info[Id][1]}>
        <box hidden={info[Id][2]}>
            Página principal
        </box>
        <box hidden={info[Id][3]}>
            Créditos
        </box>
      </div>
    </Box>
  );
}