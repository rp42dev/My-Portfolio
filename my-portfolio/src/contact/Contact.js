import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { InView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import './Contact.css';
import ContactForm from '../components/forms/ContactForm';
import SocialButtons from '../components/social/SocialBlock.js';


function ContactApp() {
  const context = useContext(AppContext);
  function handlePage() {
    context.actions.addTask('contact')
  }
  return (
    <Container
      id="contact"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

      <Box mt={2} sx={{ maxWidth: '500px' }} >
        <Fade distance="30%" bottom>
          <Typography color="secondary" variant="h2">Get in Touch</Typography>
        </Fade>
        <Fade bottom distance="30%" delay={200}>
          <Typography my={2} color="primary.dark" variant="body2">
            I’m  currently looking for new opportunities,
            If you have a question feel free to
            send me a message and I will  get back to you!
          </Typography>
        </Fade>
        <InView rootMargin='0% 0% -25%' as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
        </InView>
        <Fade bottom distance="20%" delay={400}>
          <ContactForm />
        </Fade>
        <Fade bottom distance="20%" delay={800}>
          <SocialButtons />
        </Fade>
      </Box>
    </Container>
  );
}

export default ContactApp;