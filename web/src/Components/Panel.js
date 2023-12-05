import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HoneyNets1 from './HoneyNets1';
import HoneyNets2 from './HoneyNets2';
import HoneyNets3 from './HoneyNets3';
import HoneyNets4 from './HoneyNets4';
import Tunneling1 from './Tunneling1';
import Tunneling2 from './Tunneling2';
import Tunneling3 from './Tunneling3';
import Tunneling4 from './Tunneling4';
import IoT1 from './IoT1';
import IoT2 from './IoT2';
import IoT3 from './IoT3';
import IoT4 from './IoT4';
import Inicio from './Inicio';
import Credits from './creditos';

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
        <Typography><HoneyNets1/></Typography>
      )}
      {value === 1 && theme === 1 &&( 
        <Typography><HoneyNets2/></Typography>
      )}
      {value === 2 && theme === 1 &&(
        <Typography><HoneyNets3/></Typography>
      )}
      {value === 3 && theme === 1 &&(
        <Typography><HoneyNets4/></Typography>
      )}
      {value === 0 && theme === 2 &&(
        <Typography><Tunneling1/></Typography>
      )}
      {value === 1 && theme === 2 &&(
        <Typography><Tunneling2/></Typography>
      )}
      {value === 2 && theme === 2 &&(
        <Typography><Tunneling3/></Typography>
      )}
      {value === 3 && theme === 2 &&(
        <Typography><Tunneling4/></Typography>
      )}
      {value === 0 && theme === 3 &&(
        <Typography><IoT1/></Typography>
      )}
      {value === 1 && theme === 3 &&(
        <Typography><IoT2/></Typography>
      )}
      {value === 2 && theme === 3 &&(
        <Typography><IoT3/></Typography>
      )}
      {value === 3 && theme === 3 &&(
        <Typography><IoT4/></Typography>
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
        <Typography variant='h6' sx={{ fontSize: '1.8rem', color: 'primary.main', textAlign: 'center'  }}>{info[Id][2]}</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
            <Tab label={info[Id][3]}/>
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
            <Inicio/>
        </box>
        <box hidden={info[Id][3]}>
            <Credits/>
        </box>
      </div>
    </Box>
  );
}