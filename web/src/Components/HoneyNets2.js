import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgHoney from '../assets/1_Honeynet/Imagen_2.png';

export default function HonHoneyNets2() {
    const theme = useTheme();
    return (
      <Box sx={{ padding: theme.spacing(8) }}>         
        <Typography paragraph>
        El sistema de señuelo o bien, el honeypot, es una herramienta de seguridad diseñada para ser sondeada, atacada y comprometida, que tiene la capacidad de detectar y registrar tales acciones. Su funcionamiento se encuentra basado bajo tres simples conceptos. <br/><br/>
        &emsp;&emsp;1.	Un honeypot no es un sistema de producción y, por tanto, nadie debería tratar de comunicarse con él. No habrá falsos positivos. <br/>
        &emsp;&emsp;2.	Cualquier tráfico que tenga por origen el honeypot significará que el sistema ha sido comprometido. <br/><br/>
        Este tipo de herramientas sirven para la ayuda en la prevención de ataques, la detección de intrusiones y la respuesta a este tipo de incidentes, siendo estas dos últimas tareas las que ofrecen mayores ventajas. <br/>

        </Typography>
        <img src={imgHoney} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} />
        <Typography paragraph>
        <br/>Ahora bien, entrado ya en contexto, se prosigue en hablar sobre el Honeynet, que es básicamente un honeypot, pero más complejo, ofrece un nivel de interacción más alto con el intruso, lo que permite mejorar la recopilación todavía superior a la acostumbrada bajo un ataque. Honeynet es una red completa que contiene un conjunto de sistemas dispuestos para ser atacados. Puede contener cualquier componente de red imaginable, incluyendo routers y switches, lo que le permite replicar la red de cualquier organización, no obstante, también emplea un subconjunto de honeypot para ponerse en funcionamiento así misma.        </Typography>
      </Box>
    );
}