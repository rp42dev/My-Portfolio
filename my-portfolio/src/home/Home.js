import Nav from "../components/nav/Nav";
import Btn from "../components/buttons/Btn";
import Typography from "@mui/material/Typography";
import { Box, Container, Paper, styled } from "@mui/material";
import { InView } from "react-intersection-observer";
import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../AppContext.js";
import { useColorContext } from "../colorContext";
import BackToTop from "../components/buttons/ScrollTop";
import ScrollDown from "../components/buttons/ScrollDown";

import RunAwayBox from "../components/runAwayBtn/RunAwayBox";
import "./Home.css";

//create Fade effect for the element
const fadeIn = (element, duration) => {
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  element.style.opacity = 1;
};

const getDuration = () => {
  return Math.floor(Math.random() * 2000) + 500;
};

const getElements = (element) => {
  return document.getElementsByClassName(element);
};

const generateRandomAnimation = (element) => {
  console.log("generateRandomAnimation");
  let elements = getElements(element);
  for (let i = 0; i < elements.length; i++) {
    fadeIn(elements[i], getDuration());
  }
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor:
    useColorContext().colorMode === "dark"
      ? theme.palette.background.paper.light
      : theme.palette.background.paper.main,
}));


function HomeApp() {
  const [isVisible, setIsVisible] = useState(false);
  const inViewRef = useRef(null);

  useEffect(() => {
    [...document.getElementsByClassName("box")].forEach((element) => {
      element.style.opacity = 0;
        setTimeout(() => {
          generateRandomAnimation("box");
        }, 50);
    });
  }, []);

  const handleScroll = () => {
    if (inViewRef.current.getBoundingClientRect().bottom + 300 < window.innerHeight) {
      setIsVisible(false);
      [...document.getElementsByClassName("box")].forEach((element) => {
        element.style.opacity = 0;
      });
    } else {
      setIsVisible(true);
      generateRandomAnimation("box");
    }
  };
  console.log(window.innerHeight);
  console.log("isVisible", isVisible);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const context = useContext(AppContext);

  function handlePage(inView, entry) {
    context.actions.addTask("home");

  }

  return (
    <Container
      id="back-to-top-anchor"
      ref={inViewRef}
    
    >
      <Box id="navigation">
        <Nav />
      </Box>

      <StyledPaper
        sx={{ zIndex: 3 }}
        square
        elevation={8}
        className="box1 box"
      ></StyledPaper>
      <StyledPaper
        sx={{ zIndex: 3 }}
        square
        elevation={12}
        className="box2 box"
      ></StyledPaper>
      <StyledPaper
        sx={{ zIndex: 3 }}
        square
        elevation={8}
        className="box3 box"
      ></StyledPaper>
      <StyledPaper
        sx={{ zIndex: 3 }}
        square
        elevation={10}
        className="box4 box"
      ></StyledPaper>

      <RunAwayBox />

      <BackToTop />

      <Box id="home">
        <Box className="home-content box" p-3>
          <Box sx={{ zIndex: 4 }} className="box5 box"></Box>

          <Typography
            color="secondary"
            variant="h1"
            sx={{ position: "relative", zIndex: 4 }}
          >
            Hi, I'm Raivis
          </Typography>

          <InView
            rootMargin="0% 0% -25%"
            as="div"
            onChange={(inView, entry) => {
              if (inView === true) handlePage(inView, entry);
            }}
          ></InView>

          <Typography
            sx={{ mt: 2, position: "relative", zIndex: 4 }}
            color="primary"
            variant="h4"
          >
            A Junior Web Designer & Developer
          </Typography>

          <Typography
            sx={{ mt: 2, position: "relative", zIndex: 3 }}
            color="primary.dark"
            variant="h5"
          >
            I enjoy creating Responsive and accessible websites
          </Typography>

          <Box sx={{ mt: 3, position: "relative", zIndex: 4 }}>
            <Btn text="message" />
          </Box>
        </Box>
      </Box>

      <ScrollDown />
    </Container>
  );
}

export default HomeApp;
