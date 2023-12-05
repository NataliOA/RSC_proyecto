import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgIoT from '../assets/3_IoT/Imagen_3.jpg';

export default function IoT2() {
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
        Las redes de IoT y los datos que producen están operando en prácticamente todos los aspectos de la vida moderna en nuestras casas, autos, tiendas, e incluso en nuestros cuerpos.            </Typography>
        <Typography variant="body1" paragraph>
        <li style={{ paddingLeft: '6em' }}>Hogares inteligentes: muchas personas ya están íntimamente familiarizadas con las redes de IoT en sus propias casas. Mediante conmutadores, sensores y dispositivos inteligentes que se comunican a través de protocolos como Z-Wave o Zigbee, los sistemas de automatización del hogar se pueden usar para monitorear y controlar cosas como iluminación, climatización, sistemas de seguridad, electrodomésticos. </li>
        <li style={{ paddingLeft: '6em' }}>Redes inteligentes: combinadas con IA y tecnología de analíticas avanzadas, las redes inteligentes usan soluciones de IoT para facilitar la integración de tecnología con el fin de ayudar a los consumidores a mejorar el racionamiento y comprender la energía que están usando.</li>
        <li style={{ paddingLeft: '6em' }}>Ciudades inteligentes: según el índice de ciudades inteligentes (SCI), se trata de “un entorno urbano que aplica tecnología para potenciar los beneficios y disminuir las deficiencias de la urbanización”. </li>
        <li style={{ paddingLeft: '6em' }}>Automóviles conectados: hoy, prácticamente todos los autos nuevos salen al mercado con IoT y funcionalidad inteligente, y se espera que la ubicuidad de los autos 5G crezca durante los próximos cinco años y más allá. </li>
        <li style={{ paddingLeft: '6em' }}>IoT en el comercio minorista:  las soluciones de IoT orientadas al cliente se usan cada vez más para mejorar las experiencias en la tienda. </li>
        <li style={{ paddingLeft: '6em' }}>Telesalud: cada vez es más común ver dispositivos médicos de consumo impulsados por IoT, tales como relojes inteligentes y dispensadores de medicación que ayudan a los profesionales a monitorear a los pacientes de forma remota. </li>
        <li style={{ paddingLeft: '6em' }}>Gestión del tránsito: a través de una red de sensores, cámaras y otros dispositivos, la tecnología de IoT se puede usar para reducir la congestión del tránsito y ayudar a brindar opciones viables de nuevas rutas. </li>
        </Typography>
      </Box>
    );
}