import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgInicio from '../assets/inicio.jpg';

export default function Inicio() {
    const theme = useTheme();
    return (
      <Box sx={{ padding: theme.spacing(8) }}>         
        <Typography variant='h4' sx={{color: 'primary.main', textAlign: 'center', fontWeight:'bold' }}>
            ¡Bienvenido a Redes y Seguridad de Computadoras!
        </Typography><br/><br/> 
        <img src={imgInicio} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} /><br/>
        <Typography paragraph>
        En un mundo donde los ataques informáticos y las amenazas cibernéticas están en constante evolución, la necesidad de sistemas de seguridad avanzados y conocimientos actualizados es más crucial que nunca. Nuestra página web se dedica a explorar y explicar las tecnologías de punta en seguridad cibernética, con un enfoque particular en los sistemas de Honeynet, las redes VPN y el Internet de las Cosas (IoT). 
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
            Honeynets: La Línea Delantera en la Defensa Cibernética
        </Typography>
        <Typography paragraph>
        Descubre el intrigante mundo de los honeypots y honeynets: sistemas diseñados específicamente para ser blanco de ataques, permitiéndonos estudiar las tácticas de los intrusos y fortalecer nuestras defensas. A través de análisis detallados y estudios de caso, exploramos cómo estos sistemas funcionan y cómo se pueden implementar en entornos virtuales para mejorar la seguridad.        </Typography>
        
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
            Tunneling VPN: Navegación Segura y Protegida 
        </Typography>
        <Typography paragraph>
        En nuestra sección dedicada al tunneling VPN, te llevamos a través de los principios de las redes privadas virtuales (VPN). Aprende cómo estas herramientas esenciales protegen la privacidad y los datos en línea, y cómo puedes implementar tu propio túnel VPN usando plataformas como Google Cloud.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
            IoT: Conectando el Futuro
        </Typography>
        <Typography paragraph>
        El Internet de las Cosas está revolucionando todo, desde nuestros hogares hasta las ciudades enteras. Descubre cómo la conectividad, la tecnología de sensores, la potencia computacional, y la inteligencia artificial están impulsando esta transformación, y cuáles son las implicaciones para el futuro.
        </Typography>
      </Box>
    );
}