import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import LightSpeed from 'react-reveal/LightSpeed';
import DoneIcon from '@mui/icons-material/Done';
import './About.css';

function AboutApp() {
  const context = useContext(AppContext);
  function handlePage() {

    context.actions.addTask("2")

  }
  return (
 
    <Container id="about" sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <Box >
       
        <Typography color="secondary" variant="h2">
          <LightSpeed left cascade duration={1500}>
            About me
          </LightSpeed>
        </Typography>


        <Box className="about-text" sx={{ mt: 2 }}>
          <Typography sx={{ mt: 2 }} color="primary" variant="h6">
            <LightSpeed left delay={500} duration={1500}>
              I'm a Full-Stack Software Development Bootcamp graduate
              with a passion for learning and problem-solving,
              with an extensive background in various coding languages and
              I have a strong foundation in Full-Stack web development.
            </LightSpeed>
          </Typography>
        </Box>

        <LightSpeed left delay={1000} duration={2000}>
          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h6">
            My top Priorities
          </Typography>
          <InView as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
          <Box className="priorities-text" sx={{ mt: 1 }}>
            <Typography color="primary" variant="body2">
              <DoneIcon fontSize='1rem' /><span>Intuitive design provide meaningful experiences to users.</span> <br />
              <DoneIcon fontSize='1rem' /><span>Website Accessibility Best Practices to Improve UX.</span> <br />
              <DoneIcon fontSize='1rem' /><span>I'm a firm believer that "less is more" design approach.</span> <br />
              <DoneIcon fontSize='1rem' /><span>Responsive web design that works across all screen sizes.</span> <br />
              <DoneIcon fontSize='1rem' /><span>Website speed, performance optimization best practices.</span>
            </Typography>
          </Box>
          </InView>
        </LightSpeed>
        <LightSpeed left delay={1500} duration={2000}>
          <Typography sx={{ mt: 2 }} color="primary.dark" variant="h6">
            Technologies I’ve worked with
          </Typography>
          <Box className="priorities-text">
            <Typography color="primary" component={'span'} variant="body2">
              <ul>
                <li>Front-End: HTML, CSS, JavaScript</li>
                <li>Back-End: Python Flask, Django</li>
                <li>Databases: Postgres, MongoDB, MySQL</li>
              </ul>
            </Typography>
          </Box>
        </LightSpeed>
      </Box>
    </Container>

  );
}

export default AboutApp;