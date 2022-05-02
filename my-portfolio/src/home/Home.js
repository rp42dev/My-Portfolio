import Nav from '../components/nav/Nav';
import Btn from '../components/buttons/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import { useInView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import './Home.css';

function HomeApp() {
  const context = useContext(AppContext);
  function handlePage() {

    context.actions.addTask("1")

  }
  const { ref, inView2, entry } = useInView({
    /* Optional options */
    onChange: (inView2, entry) => { if (inView2 === true) handlePage() },
    threshold: 0,
  });
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

        <div ref={ref}></div>

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
        
          <LightSpeed left delay={1500} duration={2000}>
            <Btn />
          </LightSpeed>
        </Box>
      </Box>

    </Container>
    
  );
}

export default HomeApp;