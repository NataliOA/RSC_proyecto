import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgIoT from '../assets/3_IoT/Imagen_2.jpg';

export default function IoT1() {
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
        Los dispositivos de IoT son nuestros ojos y oídos cuando no podemos estar allí físicamente –capturan cualquier dato para el cual estén programados–. Estos datos se pueden recopilar y analizar para ayudarnos a fundamentar y automatizar las acciones o decisiones posteriores. Hay cuatro etapas clave en este proceso:
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Cuatro etapas clave de internet de las cosas
        </Typography>
        <Typography variant="body1" paragraph>
        <ol style={{ paddingLeft: '6em' }}>
            <li>Capturar los datos. A través de sensores, los dispositivos de IoT capturan datos desde sus entornos. Esto podría ser algo tan simple como la temperatura o tan complejo como un feed de video en tiempo real.</li>
            <li>Compartir los datos. Mediante conexiones de red disponibles, los dispositivos IoT envían estos datos a un sistema en la nube pública o privada (dispositivo-sistema-dispositivo), a otro dispositivo (dispositivo-dispositivo), o los almacenan localmente como se indica para el procesamiento edge.</li>
            <li>Procesar los datos. En este punto, el software se programa para que haga algo en base a esos datos –como encender un ventilador o enviar una advertencia–.</li>
            <li>Actuar a partir de los datos. Se analizan los datos acumulados desde todos los dispositivos de una red de IoT. Esto brinda información estratégica poderosa para fundamentar acciones y decisiones de negocio confiables.</li>
        </ol>
        </Typography>
      </Box>
    );
}