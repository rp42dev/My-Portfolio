import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { InView } from 'react-intersection-observer';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';
import './Contact.css';
import ContactForm from '../components/forms/ContactForm';


function ContactApp() {
  const context = useContext(AppContext);
  function handlePage() {

    context.actions.addTask("4")

  }
  return (
    <Container id="contact" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      <Box  mt={2} sx={{ maxWidth: '500px' }} >
        
          <Typography color="secondary" variant="h2">Get in Touch</Typography>
          <Typography mt={2} color="primary" variant="body2">
            I’m  currently looking for new opportunities,
            If you have a question feel free to
            send me a message and I will  get back to you!
          </Typography>
          <InView as="div" onChange={(inView, entry) => { if (inView === true) handlePage() }}>
        </InView>
        <ContactForm />
      </Box>
    </Container>
  );
}

export default ContactApp;