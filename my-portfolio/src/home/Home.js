import Nav from '../components/nav/Nav';
import Btn from '../components/buttons/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import BackToTop from '../components/buttons/ScrollTop';
import ScrollDown from '../components/buttons/ScrollDown';
import './Home.css';


function HomeApp() {
  
  const context = useContext(AppContext);
  function handlePage() {
    context.actions.addTask('home')
  }
  
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
          <InView rootMargin='0% 0% -25%' as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
          </InView>
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