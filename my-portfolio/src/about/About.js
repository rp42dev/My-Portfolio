import { useContext, useEffect, useState, memo } from "react";
import { NavContext } from "../components/nav/NavContext.js";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import useMediaQuery from "../hooks/viewPortWidth.js";
import TheCube from "../components/about/cube/Cube.js";
import { InView } from "react-intersection-observer";
import CardComponent from "../components/SimpleCard.js";
import Fade from "react-reveal/Fade";
import "./About.css";

const aboutContent = [
  {
    title: "About Me",
    text: 'I am a full stack web developer with a passion for building beautiful, responsive websites and a passion for learning new technologies. I am currently volunteering as a web developer for a local charity called, "From lads to dads".',
  },
  {
    title: "Skills",
    text: "I have a strong foundation in HTML, CSS, JavaScript, Python, React, Django and more.",
  },
  {
    title: "Experience",
    text: 'I have spearheaded a number of projects including a website for a local charity, a website for a tattoo workshop, and many sprint-like coding events called "Hackathons".',
  },
];

const About = memo((props) => {
  return (
    <>
     <Fade bottom distance="30%" delay={400}>
      <Typography color="secondary" variant="h2">
        About
      </Typography>
      </Fade>
      <Box className="priorities-text" sx={{ mt: 1 }}>
        <Grid container rowSpacing={{ xs: 3, md: 6 }}>
          {aboutContent.map((text, index) => (
            <Grid item xs={12} key={index}>
             
                <CardComponent title={text.title} text={text.text} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
});

function AboutApp() {
  const context = useContext(NavContext);
  const isMobile = useMediaQuery("(max-width: 600px)");
  let [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      context.actions.changePage("about");
    }
  }, [isInView, context.actions]);

  return (
    <Container
      id="about"
      sx={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        {isMobile ? null : <TheCube isInView />}
        <InView
          rootMargin="0% 0% -25%"
          as="div"
          onChange={(inView, entry) => {
            setIsInView(inView);
          }}
        ></InView>
        <About />
      </Box>
    </Container>
  );
}

export default AboutApp;
