import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import Fade from "react-reveal/Fade";
import { useContext } from "react";
import { NavContext } from "../components/nav/NavContext.js";
import "./Contact.css";
import ContactForm from "../components/forms/ContactForm";

import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";

function ContactApp() {
  const context = useContext(NavContext);

  return (
    <Container
      id="contact"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <InView
        as="div"
        threshold={0.2}
        skip={context.active}
        onChange={(inView, entry) => {
          if (inView) context.setReducer("scroll", "contact");
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
              I’m currently looking for new opportunities, If you have a
              question feel free to send me a message and I will get back to
              you!
            </Typography>
          </Fade>

          <Fade bottom distance="20%" delay={400}>
            <ContactForm />
          </Fade>
        </Box>
      </InView>
    </Container>
  );
}

export default ContactApp;
