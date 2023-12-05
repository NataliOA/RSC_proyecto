import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgHoney from '../assets/1_Honeynet/Imagen_4.png';

export default function HonHoneyNets4() {
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
        <Typography paragraph>
        Llevar a cabo esto en un conjunto de computadoras es bastante complejo y riesgoso. Por ende, se decide realizar honeynets virtuales, que son implementaciones de ataques dentro de una misma computadora, lo que facilita su aplicación haciendo que se tenga que configurar el equipo de trabajo para poder realizarlo. Entre los pasos a seguir se encuentran los siguientes.<br/>
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
            Paso 1: Planificación y Diseño
        </Typography>
        <Typography variant="body1" paragraph>
            Objetivos: Define los objetivos de tu honeynet virtual. ¿Quieres estudiar ataques específicos, comprender tácticas de atacantes o probar la efectividad de ciertas medidas de seguridad?<br/>
            Topología de red: Decide la topología de red para tu honeynet. Puedes usar una sola máquina virtual como honeypot o configurar una red de honeypots interconectados.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Paso 2: Selección de Herramientas
        </Typography>
        <Typography variant="body1" paragraph>
            Honeypot Software: Elige el software honeypot que se adapte a tus necesidades. Algunas opciones populares incluyen Honeyd, Dionaea, Snort, Cowrie, entre otros.<br/>
            Plataforma de Virtualización: Decide si usarás máquinas virtuales (por ejemplo, VMware, VirtualBox) o contenedores (como Docker) para implementar tu honeynet virtual.
        </Typography>


        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Paso 3: Configuración del Honeypot
        </Typography>
        <Typography variant="body1" paragraph>
            Instalación: Configura tu software honeypot en las máquinas virtuales o contenedores según las instrucciones del proveedor. <br/>
            Personalización: Ajusta la configuración del honeypot según tus objetivos. Puedes simular servicios específicos, configurar señuelos y definir la interacción con atacantes.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Paso 4: Configuración de Red
        </Typography>
        <Typography variant="body1" paragraph>
            Red Interna: Configura una red interna para tu honeynet. Esto puede hacerse mediante la configuración de redes virtuales internas o segmentos de red en tu plataforma de virtualización.<br/>
            Conectividad: Asegúrate de que tus honeypots puedan recibir tráfico desde la red externa o desde otros sistemas en tu entorno virtual.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Paso 5: Monitoreo y Registro
        </Typography>
        <Typography variant="body1" paragraph>
            Herramientas de Monitoreo: Utiliza herramientas de monitoreo de red y sistemas para registrar todo el tráfico que fluye hacia y desde tu honeynet.<br/>
            Análisis de Registros: Implementa un sistema para analizar los registros de tus honeypots y detectar patrones de actividad sospechosa.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Paso 6: Seguridad
        </Typography>
        <Typography variant="body1" paragraph>
            Aislamiento: Asegúrate de que tu honeynet esté aislado de la red principal para evitar posibles daños.<br/>
            Actualizaciones: Mantén actualizado el software honeypot y el sistema operativo de tus honeypots para abordar posibles vulnerabilidades.
        </Typography>

        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4' }}>
        Paso 7: Análisis y Mejora
        </Typography>
        <Typography variant="body1" paragraph>
            Análisis de Atacantes: Examina los datos recopilados para entender las tácticas y técnicas de los atacantes.<br/>
            Mejora Continua: Utiliza la información obtenida para mejorar las defensas de tu red principal y ajustar la configuración de tu honeynet.
        </Typography>

      </Box>
    );
}