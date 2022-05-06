import Typography from '@mui/material/Typography';
import { Box, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import MediaCard from '../components/image/Image';
import Fade from 'react-reveal/Fade';
import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import Tooltip from '@mui/material/Tooltip';
import './Projects.css';
import itemData from '../data/ProjectData';
import useMediaQuery from '../hooks/viewPortWidth.js';



const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  '@media (min-width:400px)': {
    padding: theme.spacing('projects'),
  },
  color: theme.palette.text.secondary,
  backgroundColor: 'rgb(20, 20, 21, 0.5)',
}));


function ProjectsApp() {
  const hideTabs = useMediaQuery('(max-width: 900px)')

  const context = useContext(AppContext);
  function handlePage() {
    context.actions.addTask('projects')
  }

  return (
    <Container id="projects">
      <InView threshold={.14} as="Box" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
        <Box sx={{ position: 'relative', height: '100%', overflow: 'hidden' }}>

          <Box sx={{ mt: 2 }}>
            <Typography color="secondary" variant="h2">My Portfolio</Typography>
            <Typography sx={{ mt: 2 }} color="primary" variant="h6">
              A collection of some of my work
            </Typography>
          </Box>
          <Box sx={{ width: '100%', mt: 2 }}>

            <Grid container rowSpacing={{ sx: 2, md: 10 }}>
              <Grid item xs={12} md={7} order={{ xs: 1 }}>
                <Fade bottom>
                  <Box>  <MediaCard image={itemData[0].img} /> </Box>
                </Fade>
              </Grid >

              <Grid item xs={12} md={5} order={{ xs: 2 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Box sx={{ zIndex: 999, width: '100%' }}>
                  <Fade bottom cascade delay={500}>
                    <Box className='right'>
                      <Typography color='primary.dark' align={!hideTabs ? 'right' : 'left'} sx={{ m: .5 }} variant="h6">
                        {itemData[0].title}
                      </Typography>
                      <Item elevation={10}>
                        <Typography color='primary' variant="body2">
                          {itemData[0].description}
                        </Typography>
                      </Item>
                      <Stack justifyContent={!hideTabs ? 'flex-end' : 'flex-start'} direction="row" spacing={1}>
                        <Tooltip title="On GitHub">
                          <IconButton size="small" onClick={() => window.open(itemData[0].github, '_blank')} color='secondary' aria-label="On GitHub">
                            <GitHubIcon  />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Website">
                          <IconButton size="small" onClick={() => window.open(itemData[0].url, '_blank')} color='secondary' aria-label="Website">
                            <RemoveRedEyeIcon  />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Box>
                  </Fade>
                </Box>
              </Grid>

              <Grid item xs={12} md={5} order={{ xs: 4, md: 3 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>

                <Box sx={{ zIndex: 999 }}>
                  <Fade bottom cascade delay={500}>
                    <Box className='left'>
                      <Typography color='primary.dark' sx={{ m: .5 }} variant="h6">
                        {itemData[1].title}
                      </Typography>
                      <Item elevation={10}>
                        <Typography color='primary' variant="body2">
                          {itemData[1].description}
                        </Typography>
                      </Item>
                      <Stack direction="row" spacing={1}>
                        <Tooltip title="On GitHub">
                          <IconButton size="small" onClick={() => window.open(itemData[1].github, '_blank')} color='secondary' aria-label="On GitHub">
                            <GitHubIcon  />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Website">
                          <IconButton size="small" onClick={() => window.open(itemData[1].url, '_blank')} color='secondary' aria-label="Website">
                            <RemoveRedEyeIcon  />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Box>
                  </Fade>
                </Box>
              </Grid>

              <Grid item xs={12} md={7} mt={{ xs: 6, md: 0 }} order={{ xs: 3, md: 4 }}>
                <Fade bottom >
                  <Box>  <MediaCard image={itemData[1].img} /> </Box>
                </Fade>
              </Grid>

              <Grid item xs={12} md={7} mt={{ xs: 6, md: 0 }} order={{ xs: 5 }}>
                <Fade bottom >
                  <Box>  <MediaCard image={itemData[2].img} /> </Box>
                </Fade>
              </Grid>

              <Grid item xs={12} md={5} order={{ xs: 6 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Box sx={{ zIndex: 999, width: '100%' }}>
                  <Fade bottom cascade delay={500}>
                    <Box className='right'>
                      <Typography color='primary.dark' align={!hideTabs ? 'right' : 'left'} sx={{ m: .5 }} variant="h6">
                        {itemData[2].title}
                      </Typography>
                      <Item elevation={10}>
                        <Typography color='primary' variant="body2">
                          {itemData[2].description}
                        </Typography>
                      </Item>
                      <Stack justifyContent={!hideTabs ? 'flex-end' : 'flex-start' }  direction="row" spacing={1}>
                        <Tooltip title="On GitHub">
                          <IconButton size="small" onClick={() => window.open(itemData[2].github, '_blank')} color='secondary' aria-label="On GitHub">
                            <GitHubIcon  />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Website">
                          <IconButton size="small" onClick={() => window.open(itemData[2].url, '_blank')} color='secondary' aria-label="Website">
                            <RemoveRedEyeIcon  />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Box>
                  </Fade>
                </Box>
              </Grid>

              <Grid item xs={12} md={5} order={{ xs: 8, md: 7 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Box sx={{ zIndex: 999, width: '100%' }}>
                  <Fade bottom cascade delay={500}>
                    <Box className='left'>
                      <Typography color='primary.dark' sx={{ m: .5 }} variant="h6">
                        {itemData[3].title}
                      </Typography>
                      <Item elevation={10}>
                        <Typography color='primary' variant="body2">
                          {itemData[3].description}
                        </Typography>
                      </Item>
                      <Stack direction="row" spacing={1}>
                        <Tooltip title="On GitHub">
                          <IconButton size="small" onClick={() => window.open(itemData[3].github, '_blank')} color='secondary' aria-label="On GitHub">
                            <GitHubIcon  />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Website">
                          <IconButton size="small" onClick={() => window.open(itemData[3].url, '_blank')} color='secondary' aria-label="Website">
                            <RemoveRedEyeIcon  />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Box>
                  </Fade>
                </Box>
              </Grid>

              <Grid item xs={12} md={7} mt={{ xs: 6, md: 0 }} order={{ xs: 7, md: 8 }}>
                <Fade bottom>
                  <Box>  <MediaCard image={itemData[3].img} /> </Box>
                </Fade>
              </Grid>

              <Grid item xs={12} md={7} mt={{ xs: 6, md: 0 }} order={{ xs: 9 }}>
                <Fade bottom>
                  <Box>  <MediaCard image={itemData[4].img} /> </Box>
                </Fade>
              </Grid>

              <Grid item xs={12} md={5} order={{ xs: 10 }}
                sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <Box sx={{ zIndex: 999, width: '100%' }}>
                  <Fade bottom cascade delay={500}>
                    <Box className='right'>
                      <Typography color='primary.dark' align={!hideTabs ? 'right': 'left'} sx={{ m: .5 }} variant="h6">
                        {itemData[4].title}
                      </Typography>
                      <Item elevation={10}>
                        <Typography color='primary' variant="body2">
                          {itemData[4].description}
                        </Typography>
                      </Item>
                      <Stack justifyContent={!hideTabs ? "flex-end" : "flex-start"} direction="row" spacing={1}>
                        <Tooltip title="On GitHub">
                          <IconButton size="small" onClick={() => window.open(itemData[4].github, '_blank')} color='secondary' aria-label="On GitHub">
                            <GitHubIcon  />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Website">
                          <IconButton size="small" onClick={() => window.open(itemData[3].url, '_blank')} color='secondary' aria-label="Website">
                            <RemoveRedEyeIcon />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Box>
                  </Fade>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </InView>
    </Container>
  );
}

export default ProjectsApp;
