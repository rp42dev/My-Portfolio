import Nav from '../components/nav/Nav';
import Btn from '../components/buttons/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container, Paper, useTheme, styled } from '@mui/material';
import Fade from 'react-reveal/Fade';
import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import { useColorContext  } from '../colorContext';
import BackToTop from '../components/buttons/ScrollTop';
import ScrollDown from '../components/buttons/ScrollDown';
import './Home.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor:
    useColorContext().colorMode === "dark"
      ? theme.palette.background.paper.light
      : theme.palette.background.paper.main,
}));


function HomeApp() {
  const theme = useTheme();
  const colorTheme = useColorContext();
  const context = useContext(AppContext);
  function handlePage() {
    context.actions.addTask('home')
  }
  
  return (
    <Container id="back-to-top-anchor">
      <Box id="navigation">
        <Nav />
      </Box>

      <StyledPaper square elevation={8} className="box1"></StyledPaper>
      <StyledPaper square elevation={12} className="box2"></StyledPaper>
      <StyledPaper square elevation={8} className="box3"></StyledPaper>
      <StyledPaper square elevation={10} className="box4"></StyledPaper>

      <Paper
        square
        sx={{
          backgroundColor:
            colorTheme.colorMode === "dark"
              ? theme.palette.secondary.dark
              : theme.palette.secondary.dark,
        }}
        elevation={6}
        className="box6"
      ></Paper>

      <BackToTop />

      <Box id="home" sx={{ position: "relative" }}>
        <Box className="home-content" p-3>
          <Box className="box5"></Box>
          <Fade bottom distance="50%">
            <Typography color="secondary" variant="h1">
              Hi, I'm Raivis
            </Typography>
          </Fade>
          <InView
            rootMargin="0% 0% -25%"
            as="div"
            onChange={(inView, entry) => {
              if (inView === true) handlePage();
            }}
          ></InView>
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
            <Box sx={{ mt: 3 }}>
              <Btn text="message" />
            </Box>
          </Fade>
        </Box>
      </Box>
      <ScrollDown />
    </Container>
  );
}

export default HomeApp;