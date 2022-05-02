import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MediaCard from '../components/image/Image';
import LightSpeed from 'react-reveal/LightSpeed';
import { useInView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import './Projects.css';
import image1 from '../assets/images/tattoo.webp';
import image2 from '../assets/images/hats.webp';
import image3 from '../assets/images/emo.webp';
import image4 from '../assets/images/game.webp';
import image5 from '../assets/images/flower.webp';

console.log(image1);

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  '@media (min-width:400px)': {
    padding: theme.spacing(3),
  },
  color: theme.palette.text.secondary,
  opacity: 0,
}));


function ProjectsApp() {

  const context = useContext(AppContext);
  function handlePage() {
    context.actions.addTask("3")
  }

  const { ref, inView } = useInView({
    threshold: .14,
    onChange: (inView) => { if (inView === true) handlePage() },
  });

  return (
    <Container id="projects">


      <Box sx={{ position: 'relative', height: '100%', overflow: 'hidden' }}>

        <Box sx={{ mt: 2 }}>
          <Typography color="secondary" variant="h2">My Portfolio</Typography>
          <Typography sx={{ mt: 2 }} color="primary" variant="h6">
            A collection of some of my work
          </Typography>
        </Box>
        <Box sx={{ width: '100%', mt: 2 }}>

          <Grid ref={ref} container rowSpacing={{ sx: 2, md: 10 }}>
            <Grid item xs={12} md={7} order={{ xs: 1 }}>
              <LightSpeed left delay={500} duration={2000}>
                <div>  <MediaCard image={itemData[0].img} /> </div>
              </LightSpeed>
            </Grid >

            <Grid item xs={12} md={5} order={{ xs: 2 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Box sx={{ zIndex: 999, width: '100%' }}>
                <LightSpeed right cascade delay={500}>
                  <div className='right'>
                    <Item elevation={12}>
                      <Typography variant="body2">
                        {itemData[0].description}
                      </Typography>
                    </Item>
                  </div>
                </LightSpeed>
              </Box>
            </Grid>

            <Grid item xs={12} md={5} order={{ xs: 4, md: 3 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>

              <Box sx={{ zIndex: 999 }}>
                <LightSpeed left cascade delay={500}>
                  <div className='left'>
                    <Item elevation={12}>
                      <Typography variant="body2">
                        {itemData[1].description}
                      </Typography>
                    </Item>
                  </div>
                </LightSpeed>
              </Box>
            </Grid>

            <Grid item xs={12} md={7} mt={{ xs: 6, md: 0 }} order={{ xs: 3, md: 4 }}>
              <LightSpeed right delay={500} duration={1500}>
                <div>  <MediaCard image={itemData[1].img} /> </div>
              </LightSpeed>
            </Grid>

            <Grid item xs={12} md={7} mt={{ xs: 6, md: 0 }} order={{ xs: 5 }}>
              <LightSpeed left delay={500} duration={1500}>
                <div>  <MediaCard image={itemData[2].img} /> </div>
              </LightSpeed>
            </Grid>

            <Grid item xs={12} md={5} order={{ xs: 6 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Box sx={{ zIndex: 999, width: '100%' }}>
                <LightSpeed right cascade delay={500}>
                  <div className='right'>
                    <Item elevation={12}>
                      <Typography variant="body2">
                        {itemData[2].description}
                      </Typography>
                    </Item>
                  </div>
                </LightSpeed>
              </Box>
            </Grid>

            <Grid item xs={12} md={5} order={{ xs: 8, md: 7 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Box sx={{ zIndex: 999, width: '100%' }}>
                <LightSpeed left cascade delay={500}>
                  <div className='left'>
                    <Item elevation={12}>
                      <Typography variant="body2">
                        {itemData[3].description}
                      </Typography>
                    </Item>
                  </div>
                </LightSpeed>
              </Box>
            </Grid>

            <Grid item xs={12} md={7} mt={{ xs: 6, md: 0 }} order={{ xs: 7, md: 8 }}>
              <LightSpeed right delay={500} duration={1500}>
                <div>  <MediaCard image={itemData[3].img} /> </div>
              </LightSpeed>
            </Grid>

            <Grid item xs={12} md={7} mt={{ xs: 9, md: 0 }} order={{ xs: 9 }}>
              <LightSpeed left delay={500} duration={1500}>
                <div>  <MediaCard image={itemData[4].img} /> </div>
              </LightSpeed>
            </Grid>

            <Grid item xs={12} md={5} order={{ xs: 10 }}
              sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Box sx={{ zIndex: 999, width: '100%' }}>
                <LightSpeed right cascade delay={500}>
                  <div className='right'>
                    <Item elevation={12}>
                      <Typography variant="body2">
                        {itemData[2].description}
                      </Typography>
                    </Item>
                  </div>
                </LightSpeed>
              </Box>
            </Grid>


          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectsApp;

const itemData = [
  {
    img: image1,
    title: 'Breakfast',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem gravida, dictum ligula sit amet, auctor ligula. Etiam quis urna eu lorem consequat rutrum. In bibendum, est eu luctus congue itaner.',
  },
  {
    img: image2,
    title: 'Burger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem gravida, dictum ligula sit amet, auctor ligula. Etiam quis urna eu lorem consequat rutrum. In bibendum, est eu luctus congue itaner.',
  },
  {
    img: image3,
    title: 'Camera',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem gravida, dictum ligula sit amet, auctor ligula. Etiam quis urna eu lorem consequat rutrum. In bibendum, est eu luctus congue itaner.',
  },
  {
    img: image4,
    title: 'Coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem gravida, dictum ligula sit amet, auctor ligula. Etiam quis urna eu lorem consequat rutrum. In bibendum, est eu luctus congue itaner.',
  },
  {
    img: image5,
    title: 'Coffee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem gravida, dictum ligula sit amet, auctor ligula. Etiam quis urna eu lorem consequat rutrum. In bibendum, est eu luctus congue itaner.',
  },
];