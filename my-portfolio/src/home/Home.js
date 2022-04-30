import Nav from '../components/nav/Nav';
import Btn from '../components/button/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import DownComp from '../components/down/Down';
import './Home.css';

function HomeApp() {

  return (
    <Container>
      <Box id="navigation"> <Nav /></Box>

      <Box id="home" sx={{ position: 'relative' }}>
        <Box classList="home-content text-justify" >

          <Typography color="secondary" variant="h1">
            <LightSpeed left cascade duration={1500}>
              Hi. I'm Raivis
              </LightSpeed>
          </Typography>


          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h3">
            <LightSpeed left cascade delay={500} duration={1500}>
              I'm a full-stack developer
              </LightSpeed>
          </Typography>


          <Typography sx={{ mt: 2 }} color="primary" variant="h5">
            <LightSpeed left cascade delay={800} duration={1500}>
              I enjoy creating Responsive and accessible websites.
              </LightSpeed>
          </Typography>

          <LightSpeed left delay={1500} duration={2000}>
            <Btn />
          </LightSpeed>
          <DownComp prop={'#about'} />
        </Box>
      </Box>

    </Container>
  );
}

export default HomeApp;