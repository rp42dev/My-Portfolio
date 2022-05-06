import {
  Typography,
  Box, Container,
} from '@mui/material';
import ImageBases from '../components/image/images';
import itemData from './data/ProjectData';
import { AppContext } from '../AppContext.js';
import { useContext } from 'react';
import { InView } from 'react-intersection-observer';
import './Projects.css';


function ProjectsApp() {

  const context = useContext(AppContext);
  function handlePage() {
    context.actions.addTask('projects')
  }

  return (
    <Container id="projects">
      <InView threshold={.14} as="Box" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
        <Box sx={{ position: 'relative', height: '100%', overflow: 'hidden' }}>

          <Box sx={{ mt: 2 }}>
            <Typography color="secondary" variant="h2">Portfolio</Typography>
            <Typography sx={{ mt: 2, mb: 3 }} color="primary" variant="h6">
              A collection of some of my work
            </Typography>
          </Box>

          <ImageBases data={itemData} />
        </Box>
      </InView>
    </Container>
  );
}

export default ProjectsApp;
