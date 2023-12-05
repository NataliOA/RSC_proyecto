import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgTunn from '../assets/2_Tunelling/Imagen_2.png';

export default function Tunneling2() {
    const theme = useTheme();
    return (
      <Box sx={{ padding: theme.spacing(8) }}>         
        <Typography paragraph>
        Una técnica innovadora que encapsula un protocolo de red dentro de otro protocolo de red. De esta forma, se crea una suerte de túnel de información en el interior de una red de computadoras. De esta forma, se permite el transporte de un protocolo específico a través de una red que, en circunstancias regulares, no lo admitiría. Unos de los focos más interesantes de aplicar esta técnica se basan en la creación de diferentes tipos de redes privadas virtuales (VPN). <br/>
        Imagina que estás en una cafetería, utilizando su red wifi pública. Sin un tunneling VPN, tu información de navegación, contraseñas y otros datos sensibles estarían expuestos. Esta tecnología comienza con la descomposición de los datos que deben viajar a través del túnel en fragmentos denominados “paquetes”. A continuación, estos paquetes se encapsulan dentro de otros paquetes de datos, un proceso que se conoce como “encapsulación”. En su esencia, esta encapsulación constituye una envoltura de protección para el contenido original, escondiendo la naturaleza de los datos transmitidos a observadores externos.
        </Typography>        
        <Typography paragraph>
        Posterior a la encapsulación, sigue la encriptación. En este paso, todos los datos encapsulados se cifran. En otras palabras, se convierten en un conjunto de caracteres aparentemente sin sentido que solo pueden volver a su formato original con la clave de descifrado adecuada. Este proceso es crucial con tal de asegurar la conexión encriptada segura y privada, protegiendo los datos de miradas indiscretas. <br/>
        El túnel VPN no solo protege la información contra ataques de hackers o entidades malintencionadas, sino que también defiende la privacidad del usuario de su propio proveedor de servicios de Internet y del gobierno. El resultado es un túnel privado y seguro que guarda todos los aspectos de la actividad en línea del usuario, ya sea navegación por la web, chat o cualquier otro tráfico de red.
        </Typography>
        <img src={imgTunn} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} /><br/>

        <Typography paragraph>
        Por otro lado, es importante tener en cuenta el tipo de protocolo que ha de ser implementado. Los protocolos definen las reglas adecuadas para un tránsito seguro y fluido de los datos a través de la red. Existe una variedad de protocolos disponibles para usar, cada uno con sus propias ventajas, niveles de seguridad, velocidades y características únicas. Entre protocolos que pueden emplearse, se encuentra:<br/>
        <li style={{ paddingLeft: '6em' }}>Open VPN</li>
        <li style={{ paddingLeft: '6em' }}>IKEv2/IPSec.</li>
        <li style={{ paddingLeft: '6em' }}>WireGuard.</li>
        <li style={{ paddingLeft: '6em' }}>PPTP</li>
        <li style={{ paddingLeft: '6em' }}>SSTP</li>
        </Typography>

      </Box>
    );
}