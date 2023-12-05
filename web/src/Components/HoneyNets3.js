import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgHoney from '../assets/1_Honeynet/Imagen_3.png';

export default function HonHoneyNets3() {
    const theme = useTheme();
    return (
      <Box sx={{ padding: theme.spacing(8) }}>         
        <img src={imgHoney} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} />
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
            Diseño y configuración
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Topología de red:</span> Una honeynet suele constar de varios sistemas conectados entre sí, simulando una red real.
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Sistemas operativos y servicios: </span> Los sistemas en la honeynet pueden ejecutar diferentes sistemas operativos y servicios para atraer a una variedad de atacantes. Estos sistemas se conocen como honeypots.
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
            Honeypots
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Sistemas de alto o bajo interacción:</span> Los honeypots pueden ser de alto o bajo nivel de interacción. Los de alto nivel interactúan con los atacantes de manera más profunda, emulando servicios y aplicaciones reales. Los de bajo nivel simulan servicios básicos y son más seguros, pero menos informativos.
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Atracción de atacantes: </span> Los honeypots se configuran para atraer a los atacantes. Pueden simular servicios comunes como servidores web, bases de datos, sistemas de correo, etc.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Detección de actividad sospechosa
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Monitoreo de tráfico:</span> Se implementa un sistema de monitoreo de red para registrar todo el tráfico que fluye hacia y desde la honeynet.
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Análisis de registros: </span> Los administradores analizan los registros para identificar patrones de tráfico inusuales o actividades sospechosas.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Análisis de atacantes
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Captura de Malware: </span>Si un atacante introduce malware en la honeynet, este se puede capturar y analizar para comprender sus características y métodos.
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Seguimiento de tácticas y técnicas: </span> Los expertos estudian las tácticas, técnicas y procedimientos utilizados por los atacantes para mejorar la comprensión de las amenazas.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
            Aprendizaje y mejora
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Refinamiento de la seguridad: </span> La información recopilada se utiliza para mejorar las defensas de la red principal. Los conocimientos adquiridos permiten desarrollar medidas proactivas contra futuros ataques.
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Actualizaciones de firmas y reglas: </span> Las firmas de intrusiones y las reglas de seguridad se actualizan con la información obtenida, mejorando la capacidad de detectar y prevenir amenazas similares en el futuro.
        </Typography> 

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Informes y colaboración
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Generación de informes: </span> Se crean informes detallados sobre los ataques observados, las tácticas utilizadas y las lecciones aprendidas.
        </Typography>
        <Typography variant="body1" paragraph>
            <span style={{ fontWeight: 'bold' }}>Compartir información: </span> La información recopilada se puede compartir con la comunidad de seguridad cibernética para mejorar la conciencia y la respuesta a amenazas.
        </Typography> 
      </Box>
    );
}