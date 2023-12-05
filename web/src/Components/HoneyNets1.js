import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import honeyNets1 from '../assets/1_Honeynet/Imagen_1.jpg';

export default function HonHoneyNets1() {
    const theme = useTheme();
    return (
      <Box sx={{ padding: theme.spacing(8) }}>         
        <Typography paragraph>
        Durante los últimos años las intrusiones, así como los ataques informáticos, han ido en aumento de forma considerable. De la misma forma, han venido acompañados con una clara evolución respecto a las herramientas y técnicas utilizadas por los atacantes.
Entre los responsables de estas situaciones son usuarios avanzados que desarrollan sus propias aplicaciones y tienen la capacidad para introducirse dentro de otros sistemas gracias a la creación sofisticadas puertas traseras con tal de introducirse hacia otros sistemas. 
Debido al hecho de que los ataques más sonados son sin dudas los de grandes corporativas, hace pues, que el público considere que estos intrusos solo tengan como foco de ataque aquellos equipos que contengan información trascendente. Sin embargo, esto es un grave error. Estos ataques selectivos dirigidos por expertos suponen un porcentaje muy pequeño de los que a diario se producen a través de la red. Por lo general, los ataques no van dirigidos contra equipos ni compañías específicas, sino que tienen como objetivo la víctima fácil. El blanco bien puede ser cualquier equipo que se encuentre conectado a la red que posea una debilidad específica que el atacante busca y es capaz de aprovechar con tal de obtener el acceso a la máquina.
        </Typography>
        <img src={honeyNets1} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} />
        <Typography paragraph>
        En los últimos años, la frecuencia de la aparición de estos ataques indiscriminados se ha disparado, y este acontecimiento, junto al creciente número de vulnerabilidades descubiertas en todo tipo de sistemas operativos y aplicaciones, convierte a cualquier sistema conectado a Internet en una víctima potencial. Este panorama plantea la necesidad de disponer de instrumentos que permitan descubrir y analizar tanto los agujeros de seguridad que pueda presentar un sistema como las técnicas y herramientas utilizadas por la comunidad de atacantes que pueblan la Red.
Bajo este enfoque, se presenta un tipo de herramienta pensada para la detección y el análisis de ataques, donde se plantea el uso de honeypot y que este a su vez, permite generar la honeynet. Tema que nos interesa abordar.
        </Typography>
      </Box>
    );
}