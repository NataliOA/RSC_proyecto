import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgTunn from '../assets/2_Tunelling/Imagen_3.jpg';
import imgTunn2 from '../assets/2_Tunelling/Imagen_4.jpg';

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
        No todos los proveedores de VPN o sistemas operativos funcionan de la misma manera, por lo que existen diferentes maneras de crear un túnel. En este caso, te daremos dos procedimientos: uno genérico que te dará una idea de cómo funciona el proceso y otro más específico en Google Cloud.         </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Método general.
        </Typography>
        <Typography paragraph>
        Elige un proveedor de servicios VPN: El primer paso es decidir qué servicio de VPN utilizarás. Hay una amplia gama de opciones disponibles, cada una con sus propias ventajas y desventajas. Algunos proveedores de servicios VPN populares son NordVPN, Hyde my Ass, Tuxler, Surfshark, entre otros. <br/><br/>
Descarga e instala el software de VPN: Una vez que hayas seleccionado un proveedor, tendrás que descargar e instalar su software. Generalmente, puedes encontrar el software en el sitio web del proveedor. <br/><br/>
Inicia la aplicación VPN: Después de instalar el software, tendrás que iniciar la aplicación. En la mayoría de los casos, necesitarás crear una cuenta y pagar una suscripción, aunque hay algunas VPN que ofrecen una cantidad limitada de servicios gratuitos. <br/><br/>
Configura tu conexión VPN: Cuando inicies la aplicación por primera vez, se te pedirá que configures tu conexión VPN. Aquí, podrás seleccionar la ubicación del servidor al que deseas conectarte, así como otras configuraciones avanzadas como la selección del protocolo de túnel VPN. <br/><br/>
Conéctate a la VPN: Una vez que hayas configurado tu conexión VPN, simplemente tendrás que hacer clic en el botón de conectar para establecer la conexión VPN. A partir de este momento, todo tu tráfico de internet estará encriptado y será redirigido a través del servidor VPN que seleccionaste. <br/><br/>
Verifica tu conexión VPN: Para asegurarte de que estás conectado a la VPN, puedes visitar un sitio web como ‘What Is My IP Address’ para confirmar que tu dirección IP ha cambiado a la ubicación del servidor VPN. <br/>
        </Typography>
        En resumen, la configuración de un túnel VPN puede variar según el proveedor y el sistema operativo, pero el procedimiento general es tal como te lo hemos explicado antes. Recuerda siempre hacer tu propia investigación para entender completamente las funciones y características del servicio de VPN que elijas.
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Túnel VPN en Google Cloud
        </Typography>
        <Typography paragraph>
        Crear un tunneling VPN puede parecer una tarea compleja, pero con una guía detallada y siguiendo las instrucciones cuidadosamente, puede ser una tarea bastante accesible. En este punto, se explica el otro método para crear un túnel VPN a través de Google Cloud.
        <li style={{ paddingLeft: '6em' }}>Primero, inicia sesión en la consola de Google Cloud y dirígete a la sección VPN. En la sección VPN, verás una opción que dice ‘Crear túnel VPN’. </li>
        <li style={{ paddingLeft: '6em' }}>Luego, un menú desplegable te pedirá que selecciones la puerta de enlace que necesita el nuevo túnel. Una vez que hayas hecho tu selección, haz clic en ‘Continuar’.</li>
        <li style={{ paddingLeft: '6em' }}>A continuación, tendrás que seleccionar un Cloud Router. Si no has configurado uno aún, sigue los pasos indicados en el procedimiento titulado ‘Crea túneles VPN’.</li>
        <li style={{ paddingLeft: '6em' }}>El siguiente paso es seleccionar el tipo de Puerta de enlace de VPN de intercambio de tráfico. Aquí tendrás dos opciones: Local o ajena a Google Cloud.</li>
        <li style={{ paddingLeft: '6em' }}>Luego, para el Nombre de la puerta de enlace de VPN de intercambio de tráfico, elige el recurso de puerta de enlace de VPN de intercambio de tráfico que utilizará el nuevo túnel. Para ver los nombres existentes de puertas de enlace de VPN de intercambio de tráfico en esta puerta de enlace de Cloud VPN, haz clic en ‘Ver todos los túneles existentes’ en la parte superior de la página. Es posible que recibas una advertencia de que un túnel con la misma interfaz de puerta de enlace de VPN de intercambio de tráfico ya está asociado con la misma interfaz de puerta de enlace local de Cloud VPN. Para solucionar este problema, en ‘Interfaz de puerta de enlace de Cloud VPN asociada’, selecciona la otra interfaz de VPN de alta disponibilidad.</li>
        <li style={{ paddingLeft: '6em' }}>Para finalizar la configuración del túnel, completa el resto de los pasos como se indica en el procedimiento ‘Crea túneles VPN’.</li>
        </Typography>
        <img src={imgTunn2} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} /><br/>


      </Box>
    );
}