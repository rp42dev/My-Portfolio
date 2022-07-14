import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Fade from 'react-reveal/Fade';
import DoneIcon from '@mui/icons-material/Done';
import './About.css';

function spinCube() {
  const cube = document.querySelector('.cube');
  //rotate cube on hover random
  cube.style.transition = 'transform 2s ease-in-out';
  cube.style.transform = `translateZ(-100px) rotateX(${Math.floor(Math.random() * 360)}deg) rotateY(${Math.floor(Math.random() * 360)}deg)`;
}

function AboutApp() {
  const context = useContext(AppContext);
  function handlePage() {

    context.actions.addTask('about')
  }

  return (
    <Container
      id="about"
      sx={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <Box className="cube-outer">
        <div class="scene">
          <div onMouseEnter={spinCube} class="cube">
            <div class="cube__face cube__face--front"><p>Responsive</p></div>
            <div class="cube__face cube__face--back"><p>Accessible</p></div>
            <div class="cube__face cube__face--right"><p>Website</p></div>
            <div class="cube__face cube__face--left"><p>Development</p></div>
            <div class="cube__face cube__face--top"><p>Full-Stack</p></div>
            <div class="cube__face cube__face--bottom"><p>Applications</p></div>
          </div>
         <div class="box__shadow"></div>
        </div>
      </Box>
      <Box>
        <Fade bottom cascade distance="30%">
          <Typography color="secondary" variant="h2">
            About me
          </Typography>
        </Fade>

        <Fade bottom cascade delay={200} distance="30%">
          <Box className="about-text" sx={{ mt: 2 }}>
            <Typography sx={{ mt: 2 }} color="primary.dark" variant="h6">
              I'm a Full-Stack coder developer with a passion for learning and
              problem-solving. I have an extensive background in various coding
              languages and I have a strong foundation in Full-Stack web
              development.
            </Typography>
          </Box>
        </Fade>

        <Fade bottom distance="30%" cascade delay={400}>
          <Typography sx={{ mt: 2 }} color="primary.main" variant="h6">
            My top Priorities
          </Typography>
          <InView
            rootMargin="0% 0% -25%"
            as="div"
            onChange={(inView, entry) => {
              if (inView === true) handlePage();
            }}
          ></InView>
          <Box className="priorities-text" sx={{ mt: 1 }}>
            <Typography color="primary.dark" variant="body2">
              <DoneIcon fontSize="1rem" />
              <span>
                Intuitive design provide meaningful experiences to users.
              </span>{" "}
              <br />
              <DoneIcon fontSize="1rem" />
              <span>
                Website Accessibility Best Practices to Improve UX.
              </span>{" "}
              <br />
              <DoneIcon fontSize="1rem" />
              <span>
                I'm a firm believer that "less is more" design approach.
              </span>{" "}
              <br />
              <DoneIcon fontSize="1rem" />
              <span>
                Responsive web design that works across all screen sizes.
              </span>{" "}
              <br />
              <DoneIcon fontSize="1rem" />
              <span>
                Website speed, performance optimization best practices.
              </span>
            </Typography>
          </Box>
        </Fade>

        <Fade bottom cascade delay={600} distance="30%">
          <Typography sx={{ mt: 2 }} color="primary.dark.dark" variant="h6">
            Technologies I’ve worked with
          </Typography>
          <Box className="priorities-text">
            <Typography color="primary.dark" component={"span"} variant="body2">
              <ul>
                <li>Front-End: HTML, CSS, JavaScript, React</li>
                <li>Back-End: Python, Flask, Django</li>
                <li>Databases: Postgres, MongoDB, MySQL</li>
                <li>Other library's: Mui, Bootstrap, htmx</li>
              </ul>
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
}

export default AboutApp;