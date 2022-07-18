import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { InView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade';
import { useContext, useEffect, useState, useRef } from 'react';
import { NavContext } from '../NavContext.js';
import './Contact.css';
import ContactForm from '../components/forms/ContactForm';
import ScrollDown from '../components/buttons/ScrollDown';


function ContactApp() {
  const context = useContext(NavContext);
  const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isInView) {
    context.actions.changePage("contact");
    }
  }, [isInView])
  

  const bottomRef = useRef(null);
  
  const handleScroll = () => {
    if (bottomRef.current.getBoundingClientRect().bottom < window.innerHeight) {
      setIsVisible(true);
    }else
    {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);


  return (
    <Container
      id="contact"
      onScroll={handleScroll}
      ref={bottomRef}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box mt={2} sx={{ maxWidth: "500px" }}>
        <Fade distance="30%" bottom>
          <Typography color="secondary" variant="h2">
            Get in Touch
          </Typography>
        </Fade>
        <Fade bottom distance="30%" delay={200}>
          <Typography my={2} color="primary.dark" variant="body2">
            I’m currently looking for new opportunities, If you have a question
            feel free to send me a message and I will get back to you!
          </Typography>
        </Fade>
        <InView
          rootMargin="0% 0% 0%"
          as="div"
          onChange={(inView, entry) => {
            setIsInView(inView);
          }}
        ></InView>
        <Fade bottom distance="20%" delay={400}>
          <ContactForm />
        </Fade>
      </Box>
      {!isVisible ? <ScrollDown /> : null}
    </Container>
  );
}

export default ContactApp;