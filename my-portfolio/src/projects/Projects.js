import {
  Typography,
  Box, Container,
  IconButton,
  Tooltip,
} from '@mui/material';
import ProjectsComponent from '../components/projects/projectsComponent.js';
import itemData from './data/ProjectData';
import { AppContext } from '../AppContext.js';
import { useContext } from 'react';
import { InView } from 'react-intersection-observer';
import './Projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fade from 'react-reveal/Fade';

function ProjectsApp() {

  const context = useContext(AppContext);
  function handlePage() {
    context.actions.addTask('projects')
  }

  return (
    <Container id="projects">
      <InView threshold={.14} as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
        <Box sx={{ position: 'relative', height: '100%', overflow: 'hidden' }}>

          <Box sx={{ mt: 2 }}>
            <Typography color="secondary" variant="h2">Projects</Typography>
            <Typography sx={{ mt: 2, mb: 3 }} color="primary" variant="h6">
              A collection of some of my work
            </Typography>
          </Box>
          <ProjectsComponent data={itemData} />
        </Box>
        <Box>
          <Fade bottom distance="30%">
            <Typography color="primary.dark" variant="body1">
              More projects on my GitHub page
              <Tooltip title="On GitHub">
                <IconButton color="secondary" aria-label="delete">
                  <GitHubIcon fontSize='large' />
                </IconButton>
              </Tooltip>
            </Typography>
          </Fade>
        </Box>
      </InView>
    </Container>
  );
}

export default ProjectsApp;
