import Nav from '../components/nav/Nav';
import Btn from '../components/buttons/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import { useInView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import './Home.css';
import BackToTop from '../components/buttons/ScrollTop';
import ScrollDown from '../components/buttons/ScrollDown';



function HomeApp() {
  const context = useContext(AppContext);
  function handlePage() {
    context.actions.addTask(1)
  }

  const { ref, inView2, entry } = useInView({
    onChange: (inView2, entry) => { if (inView2 === true) handlePage() },
    threshold: 0,
  });
  
  return (
    <Container id="back-to-top-anchor">
      <Box id="navigation"> <Nav/></Box>

      <BackToTop />

      <Box id="home" sx={{ position: 'relative' }}>
        <Box className="home-content" >

          <Typography color="secondary" variant="h1">
            <LightSpeed left cascade duration={1500}>
              Hi, I'm Raivis
              </LightSpeed>
          </Typography>

        <div ref={ref}></div>

          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h4">
            <LightSpeed left cascade delay={500} duration={1500}>
              A Junior Web Designer & Developer
              </LightSpeed>
          </Typography>

          <Typography sx={{ mt: 2 }} color="primary" variant="h5">
            <LightSpeed left cascade delay={800} duration={1500}>
              I enjoy creating Responsive and accessible websites
              </LightSpeed>
          </Typography>
        
          <LightSpeed left delay={1500} duration={2000}>
            <Btn />
          </LightSpeed>
        </Box>
      </Box>
    <ScrollDown />
    </Container>
    
  );
}

export default HomeApp;