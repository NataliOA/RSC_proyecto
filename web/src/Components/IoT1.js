import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgIoT from '../assets/3_IoT/Imagen_1.png';

export default function IoT1() {
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
        En el año de 2021 más de 10.000 millones de dispositivos de IoT en el mundo se encontraban en existencia. Para el año 2025, se espera que la generación de datos globales supere los 73 zettabytes, lo cual equivale a 73 billones de gigabytes. Aunque, en realidad no se puede cuantificar los datos digitales en términos físicos. Sin embargo, se puede decir que, si todos los datos se convirtieran a discos flexibles de la década de 1990, y se colocaran uno sobre el otro, se habría dado unas 5000 vueltas hacia la luna tanto de ida como de vuelta.        </Typography>
        <Typography paragraph>
        En tan solo unas décadas, los datos de IoT han crecido de manera significativa y es probable que eso se mantenga así. Entonces, para que pudiera surgir este concepto, varias tecnologías tuvieron que entrelazarse con tal de poder avanzar de manera conjunta. Entre estos ejemplos, se tiene en cuenta:        </Typography>
        <Typography variant="body1" paragraph>
        <li style={{ paddingLeft: '6em' }}>Conectividad. Con una evolución que va de humildes módems hasta el actual internet y la nube, la conectividad se volvió lo suficientemente rápida y sólida como para enviar y recibir enormes volúmenes de datos y dar soporte al crecimiento exponencial de IoT.</li>
        <li style={{ paddingLeft: '6em' }}>Tecnología de sensores. Bajo la constante demanda de innovación para los sensores de IoT, el mercado ha pasado de ser un grupo de pocos y costosos proveedores de nicho a ser una industria de fabricación de sensores altamente globalizada y competitiva en precios. Desde 2004, el promedio de precios de sensores de IoT cayó más de un 70%, acompañado por un aumento impulsado por la demanda de una mejor funcionalidad y diversidad en estos productos.</li>
        <li style={{ paddingLeft: '6em' }}>Poder de computación. Para usar y aprovechar todo el potencial, las empresas modernas exigen cantidades siempre crecientes de memoria y potencia de procesamiento. La carrera para lograrlo ha sido rápida y competitiva, y ha impulsado la creciente relevancia y aplicabilidad de IoT.</li>
        <li style={{ paddingLeft: '6em' }}>Tecnología de Big Data: desde la década de 1980, los datos del mundo, así como la tecnología computacional necesaria para almacenarlos, han crecido exponencialmente. Los avances en bases de datos y herramientas de análisis han permitido procesar y analizar en tiempo real volúmenes masivos de datos generados a partir de dispositivos de IoT, vehículos inteligentes, y equipamiento. Esta velocidad y capacidad son esenciales para internet de las cosas.</li>
        <li style={{ paddingLeft: '6em' }}>IA y machine learning: estas tecnologías brindan la capacidad no solo de gestionar y procesar grandes cantidades de datos de IoT, sino de analizarlos y aprender de ellos. Big Data es el alimento favorito de la inteligencia artificial y el machine learning. Cuanto más grandes y diversos sean los data sets, más sólida y precisa será la información estratégica e inteligencia que pueden brindar las analíticas avanzadas potenciadas por IA. El auge de los dispositivos de IoT ha crecido mucho, junto con el avance de la inteligencia artificial y su apetito por los datos que ellos brindan.</li>
        <li style={{ paddingLeft: '6em' }}>Computación en la nube: así como la conectividad fue esencial en el desarrollo de internet de las cosas, el auge de la computación en nube también ha estado estrechamente ligado a su evolución. Con la capacidad de entregar on-demand un procesamiento poderoso y un almacenamiento de alto volumen, los servicios de IoTen la nube allanaron el camino para que los dispositivos de IoT recopilen y transmitan data sets cada vez más grandes y complejos.</li>
        </Typography>
      </Box>
    );
}