import './App.css';
import Body from './Components/Body.js';
import Head from './Components/Head.js';
import {Box} from '@mui/material';

function App() {
  return (
    <Box sx={{ width:'100%'}}>
      <Head />
      <Body />
    </Box>
  );
}

export default App;
