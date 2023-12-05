import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgIoT from '../assets/3_IoT/Imagen_4.jpg';

export default function IoT4() {
    const theme = useTheme();
    return (
      <Box sx={{ padding: theme.spacing(8) }}>         
        
        <img src={imgIoT} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} /><br/>
        <Typography paragraph>
        <br/>En un futuro no tan lejano, se puede esperar una integración muchos más fluida entre la tecnología y la experiencia humana. Si bien el metaverso aún pude tardar algunos años, o inclusive ser reemplazado por otra cosa similar, el audio 3D, la realidad virtual avanzada, las sensaciones hápticas y la personalización en tiempo real potenciada por IA significarán que nuestra interacción con los dispositivos que nos rodean permitirá experiencias sensoriales cada vez más reales. Además, con el auge del 5G y la conectividad rápida, tendremos una capacidad cuántica para compartir nuestras experiencias hacia cualquier distancia.
        <br/><br/><br/><br/>
        </Typography>
  
      </Box>
    );
}