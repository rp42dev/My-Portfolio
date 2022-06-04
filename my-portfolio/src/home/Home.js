import Nav from "../components/nav/Nav";
import Btn from "../components/buttons/Btn";
import Typography from "@mui/material/Typography";
import { Box, Container, Paper, styled } from "@mui/material";
import Fade from "react-reveal/Fade";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import { AppContext } from "../AppContext.js";
import { useColorContext } from "../colorContext";
import BackToTop from "../components/buttons/ScrollTop";
import ScrollDown from "../components/buttons/ScrollDown";

import RunAwayBox from "../components/RunAwayBox";
import "./Home.css";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor:
    useColorContext().colorMode === "dark"
      ? theme.palette.background.paper.light
      : theme.palette.background.paper.main,
}));


function HomeApp() {

  const context = useContext(AppContext);

  function handlePage() {
    context.actions.addTask("home");
  }

  return (
    <Container id="back-to-top-anchor" sx={{ position: "relative" }}>
      <Box id="navigation">
        <Nav />
      </Box>

      <StyledPaper
        sx={{ zIndex: 3 }}
        square
        elevation={8}
        className="box1"
      ></StyledPaper>
      <StyledPaper
        sx={{ zIndex: 3 }}
        square
        elevation={12}
        className="box2"
      ></StyledPaper>
      <StyledPaper
        sx={{ zIndex: 3 }}
        square
        elevation={8}
        className="box3"
      ></StyledPaper>
      <StyledPaper
        sx={{ zIndex: 3 }}
        square
        elevation={10}
        className="box4"
      ></StyledPaper>

      <RunAwayBox />

      <BackToTop />

      <Box id="home">
        <Box className="home-content" p-3>
          <Box sx={{ zIndex: 4 }} className="box5"></Box>

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
              if (inView === true) handlePage();
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
