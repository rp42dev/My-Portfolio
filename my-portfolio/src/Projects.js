import Btn from './components/button/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

function ProjectsApp() {
  return (
    <Container id="projects">
      <Box style={{ marginTop: "10%" }}>
        <Typography color="secondary" variant="h1">Hi. I'm Raivis</Typography>
        <Typography style={{ marginTop: "2rem" }} color="primary.dark" variant="h3">I'm a full-stack developer</Typography>
        <Typography style={{ marginTop: "2rem" }} color="primary" variant="h5">I enjoy creating Responsive and accessible websites. </Typography>
      </Box>
      <Btn />
    </Container>
  );
}

export default ProjectsApp;