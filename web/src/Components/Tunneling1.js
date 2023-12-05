import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgTunn from '../assets/2_Tunelling/Imagen_1.png';

export default function Tunneling1() {
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
            El tunneling VPN es una de las formas más seguras para protegerse mientras se navega en internet. Justamente, con sus infinitas posibilidades, la red global también ha traído consigo riesgos y desafíos.  
        </Typography>
        <Typography paragraph>
            Actualmente, los ataques cibernéticos a organizaciones se han vuelto más frecuentes y sofisticados. Solo en 2022, el grupo de extorsión LockBit publicó información sobre 801 organizaciones vulneradas en su web de filtraciones, un aumento del 95% en comparación con las entradas del año anterior. Este aumento en los ataques cibernéticos subraya la importancia de contar con conexiones seguras y cifradas, especialmente para las empresas y aquellos que trabajan de forma remota.
        </Typography>
        <Typography paragraph>
        Ahí es donde entran en juego las VPN (Virtual Private Networks o Redes Privadas Virtuales), una herramienta esencial en el mundo cibernético moderno. Pero, ¿qué hace exactamente una VPN y cómo protege nuestros datos?
        </Typography>
      </Box>
    );
}