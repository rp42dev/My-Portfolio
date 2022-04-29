import Nav from './components/nav/Nav';
import Btn from './components/button/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import DownComp from './components/down/Down';

function HomeApp() {
  return (
    <Container>
      <Box id="navigation"> <Nav /></Box>
     
      <Box id="home">
        <LightSpeed left duration={1500}>
          <Typography color="secondary" variant="h1">Hi. I'm Raivis</Typography>
        </LightSpeed>
        <LightSpeed left delay={500} duration={2000}>
          <Typography style={{ marginTop: "2rem" }} color="primary.dark" variant="h3">I'm a full-stack developer</Typography>
        </LightSpeed>
        <LightSpeed left delay={1000} duration={1500}>
          <Typography style={{ marginTop: "2rem" }} color="primary" variant="h5">I enjoy creating Responsive and accessible websites. </Typography>
        </LightSpeed>
        <LightSpeed left delay={1500} duration={2000}>
          <Btn />
        </LightSpeed>  
        <DownComp />
      </Box>
    
    </Container>
  );
}

export default HomeApp;