import Nav from '../components/nav/Nav';
import Btn from '../components/button/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import DownComp from '../components/down/Down';
import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import './Home.css';

function HomeApp() {
  const context = useContext(AppContext);
  function handlePage() {

    context.actions.addTask("1")

  }
  return (
    <Container>
      <Box id="navigation"> <Nav /></Box>

      <Box id="home" sx={{ position: 'relative' }}>
        <Box className="home-content" >

          <Typography color="secondary" variant="h1">
            <LightSpeed left cascade duration={1500}>
              Hi. I'm Raivis
              </LightSpeed>
          </Typography>

      <InView as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>

          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h3">
            <LightSpeed left cascade delay={500} duration={1500}>
              I'm a full-stack developer
              </LightSpeed>
          </Typography>

          <Typography sx={{ mt: 2 }} color="primary" variant="h6">
            <LightSpeed left cascade delay={800} duration={1500}>
              I enjoy creating Responsive and accessible websites.
              </LightSpeed>
          </Typography>
          </InView>
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