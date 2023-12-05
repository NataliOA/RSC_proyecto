import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import imgCred from '../assets/creditos.jpg';

export default function HonHoneyNets1() {
    const theme = useTheme();
    return (
      <Box sx={{ padding: theme.spacing(8) }}>     
        <Typography variant='h4' sx={{color: 'primary.main', textAlign: 'center'  }}>
            Créditos
        </Typography><br/><br/>     
        <img src={imgCred} alt="Honey Nets"   style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            width: '50%', 
            height: 'auto'
         }} /><br/>

        <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'#4472C4', textAlign:'center' }}>
            Autores     
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'black', textAlign:'center' }}>
            Alma Angélica Ordoñez Sánchez     
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'black', textAlign:'center' }}>
            Andrea Natalí Ortega Aguilar   
        </Typography>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold', color:'black', textAlign:'center' }}>
            Esteban Alfonso Pacheco Serralta    
        </Typography>
      </Box>
    );
}