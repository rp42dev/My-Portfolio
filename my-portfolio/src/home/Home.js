import Btn from "../components/buttons/Btn";
import Typography from "@mui/material/Typography";
import { Box, Container, Paper } from "@mui/material";
import { useEffect, memo } from "react";
import useMediaQuery from "../hooks/viewPortWidth.js";
import RunAwayBox from "../components/home/runAwayBox/RunAwayBox";
import ScrollToView from "../components/nav/ScrollToView";
import { useContext } from "react";
import { NavContext } from "../components/nav/NavContext.js";

import { InView } from "react-intersection-observer";
import data from "./data/data";
import "./Home.css";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const homeContent = data.home.content;

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
      <div className="box-overlay"></div>
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

function HomeApp(props) {
  const isPc = useMediaQuery("(max-width: 600px)");
  const context = useContext(NavContext);

  useEffect(() => {
    [...document.getElementsByClassName("animate")].forEach((element) => {
      setTimeout(() => {
        generateRandomAnimation("animate");
      }, 50);
    });
  }, [isPc]);

  return (
    <div className="wrapper">
      <Boxes />
      <InView
        as="div"
        threshold={0.5}
        skip={context.active}
        onChange={(inView, entry) => {
          if (inView) context.setReducer("scroll", "home");
        }}
      >
        <Container id="back-to-top-anchor">
          <Element name="home">
            <RunAwayBox />
            <Box id="home">
              <Box
                sx={{ zIndex: 4 }}
                className="home-content animate angle-border"
                p-3
              >
                <Paper square sx={{ p: 3, pt: 1 }} elevation={8}>
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
                    <ScrollToView {...props} anchor={"contact"}>
                      <Btn text="message me" />
                    </ScrollToView>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Element>
        </Container>
      </InView>
    </div>
  );
}

export default HomeApp;
