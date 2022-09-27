import { Box, Container, Typography, Grid } from "@mui/material";
import { InView } from "react-intersection-observer";
import TheCube from "../components/about/cube/Cube.js";
import { NavContext } from "../components/nav/NavContext.js";
import { useContext, memo } from "react";

import CardComponent from "../components/SimpleCard.js";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import data from "./data/data";
import "./About.css";

const aboutContent = data.about.content;

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

function AboutApp(props) {
  const context = useContext(NavContext);
  return (
    <InView
      threshold={0.5}
      skip={context.active}
      onChange={(inView, entry) => {
        if (inView) context.setReducer("scroll", "about");
      }}
    >
      <Element name="about">
        <Container
          id="about"
          className="wrapperRef"
          sx={{ position: "relative", display: "flex", alignItems: "center" }}
        >
          {" "}
          <Box sx={{ position: "relative", width: "100%" }}>
            
            <TheCube />
            <About />
          </Box>
        </Container>
      </Element>
    </InView>
  );
}

export default AboutApp;
