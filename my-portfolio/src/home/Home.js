import Btn from "../components/buttons/Btn";
import Typography from "@mui/material/Typography";
import { Box, Container, Paper } from "@mui/material";
import { InView } from "react-intersection-observer";
import { useContext, useEffect, useState, useRef, memo } from "react";
import useMediaQuery from "../hooks/viewPortWidth.js";
import { NavContext } from "../components/nav/NavContext.js";
import BackToTop from "../components/buttons/ScrollTop";
import ScrollDown from "../components/buttons/ScrollDown";
import RunAwayBox from "../components/home/runAwayBox/RunAwayBox";
import "./Home.css";

//create Fade effect for the element
const fadeIn = (element, duration) => {
  element.classList.add("animated");
};

const getDuration = () => {
  return Math.floor(Math.random() * 2000) + 500;
};

const getElements = (element) => {
  return document.getElementsByClassName(element);
};

const generateRandomAnimation = (element) => {
  let elements = getElements(element);
  for (let i = 0; i < elements.length; i++) {
    fadeIn(elements[i], getDuration());
  }
};

const Boxes = memo(() => {
  const boxes = [
    {
      className: "box1 animate",
      elevation: 4,
      zIndex: 3,
    },
    {
      className: "box2 animate",
      elevation: 8,
      zIndex: 3,
    },
    {
      className: "box3 animate",
      elevation: 6,
      zIndex: 3,
    },
    {
      className: "box4 animate",
      elevation: 7,
      zIndex: 3,
    },
  ];

  return (
    <>
      {[...boxes].map((box, index) => {
        return (
          <Box zIndex={box.zIndex} key={index} className={box.className}>
            <Paper square elevation={box.elevation} />
          </Box>
        );
      })}
    </>
  );
});

function HomeApp() {
  const homeContent = [
    {
      text: "Hi, I'm Raivis",
      color: "secondary",
      variant: "h1",
    },
    {
      text: "I'm a full-stack web, app developer",
      color: "primary",
      variant: "h4",
    },
    {
      text: "I'm a coding Boot-camp graduate with a passion for learning and creating new things that live on the internet.",
      color: "primary.dark",
      variant: "h6",
    },
  ];

  const [isInView, setIsInView] = useState(false);
  const context = useContext(NavContext);
  const inViewRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    [...document.getElementsByClassName("animate")].forEach((element) => {
      setTimeout(() => {
        generateRandomAnimation("animate");
      }, 50);
    });
  }, [isMobile]);

  useEffect(() => {
    console.log("isInView", isInView);
    if (isInView) {
      context.actions.changePage("home");
    }
  }, [isInView, context.actions]);

  return (
    <div className="wrapper">
      {isMobile ? null : <Boxes />}
      <Container id="back-to-top-anchor" ref={inViewRef}>
        {isMobile ? null : <RunAwayBox isMobile />}

        <Box id="home">
          <BackToTop />

          <Box
            sx={{ zIndex: 4 }}
            className="home-content animate angle-border"
            p-3
          >
            <InView threshold={0.5} onChange={(inView) => setIsInView(inView)}>
              <Paper square sx={{ px: 3, pb: 3 }} elevation={8}>
                {homeContent.map((content, index) => {
                  return (
                    <Box key={index}>
                      <Typography
                        color={content.color}
                        variant={content.variant}
                      >
                        {content.text}
                      </Typography>
                    </Box>
                  );
                })}

                <Box sx={{ mt: 3, position: "relative", zIndex: 4 }}>
                  <Btn text="message me" />
                </Box>
              </Paper>
            </InView>
          </Box>
        </Box>

        <ScrollDown />
      </Container>
    </div>
  );
}

export default HomeApp;
