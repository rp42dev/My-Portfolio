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

            <LightSpeed left cascade duration={1500}>
          <Typography color="secondary" variant="h1">
              Hi, I'm Raivis
          </Typography>
              </LightSpeed>
          <InView rootMargin='0% 0% -25%' as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
          </InView>
            <LightSpeed left cascade delay={500} duration={1500}>
          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h4">
              A Junior Web Designer & Developer
          </Typography>
              </LightSpeed>

            <LightSpeed left cascade delay={800} duration={1500}>
          <Typography sx={{ mt: 2 }} color="primary" variant="h5">
              I enjoy creating Responsive and accessible websites
          </Typography>
              </LightSpeed>
        
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