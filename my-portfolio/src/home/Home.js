import Nav from '../components/nav/Nav';
import Btn from '../components/buttons/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Fade from 'react-reveal/Fade';
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

            <Fade bottom distance="50%">
          <Typography color="secondary" variant="h1">
              Hi, I'm Raivis
          </Typography>
              </Fade>
          <InView rootMargin='0% 0% -25%' as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
          </InView>
            <Fade bottom distance="50%" delay={200}>
          <Typography sx={{ mt: 2 }} color="primary" variant="h4">
              A Junior Web Designer & Developer
          </Typography>
              </Fade>

            <Fade bottom distance="50%" delay={400}>
          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h5">
              I enjoy creating Responsive and accessible websites
          </Typography>
              </Fade>
        
          <Fade bottom distance="50%" delay={600}>
            <Box sx={{ mt: 3}}>
            <Btn />
            </Box>
          </Fade>
        </Box>
      </Box>
    <ScrollDown />
    </Container>
    
  );
}

export default HomeApp;