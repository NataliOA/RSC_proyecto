import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgTunn from '../assets/2_Tunelling/Imagen_5.png';

export default function Tunneling4() {
    const theme = useTheme();
    return (
      <Box sx={{ padding: theme.spacing(8) }}>         
        
        <img src={imgTunn} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} /><br/>
        <Typography paragraph>
        <br/>En resumen, el tunneling VPN es una herramienta poderosa para la protección de la privacidad y la seguridad en línea. Sin embargo, su uso debe estar enmarcado siempre en el respeto por las leyes y regulaciones aplicables. Así, garantizaremos un entorno digital seguro y ético para todos.        </Typography>
        <Typography paragraph>
        Ya sea que se busque proteger información personal o la de una empresa, un túnel VPN puede ofrecer esa capa adicional de seguridad. Como hemos visto, su implementación puede ser más sencilla de lo que se imagina, siempre y cuando se cuente con la guía adecuada.
Teniendo en cuenta todos estos aspectos, el tunneling VPN es una gran herramienta para garantizar la privacidad y seguridad en un contexto donde las filtraciones de datos son cada vez más avanzadas.
        <br/><br/><br/><br/>
        </Typography>
      </Box>
    );
}