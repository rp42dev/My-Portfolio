import Btn from '../components/button/Btn';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import './Contact.css';


function ContactApp() {
  const context = useContext(AppContext);
  function handlePage() {

    context.actions.addTask("4")

  }
  return (
    <Container id="contact">

      <Box style={{ marginTop: "10%" }}>
        <Typography color="secondary" variant="h1">Hi. I'm Raivis</Typography>
        <InView as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
          <Typography style={{ marginTop: "2rem" }} color="primary.dark" variant="h3">I'm a full-stack developer</Typography>
        </InView>
        <Typography style={{ marginTop: "2rem" }} color="primary" variant="h5">I enjoy creating Responsive and accessible websites. </Typography>
      </Box>
      <Btn />
    </Container>
  );
}

export default ContactApp;