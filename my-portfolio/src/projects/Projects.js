import ProjectsComponent from "../components/projects/projectsComponent.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fade from "react-reveal/Fade";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import { NavContext } from "../components/nav/NavContext.js";
import { Element } from "react-scroll";

import GithubCard from "../components/projects/GithubCard.js";

import {
  Typography,
  Box,
  Container,
  IconButton,
  Tooltip,
  Link,
} from "@mui/material";
import "./Projects.css";

function ProjectsApp() {
  const context = useContext(NavContext);
  return (
    <Container className="wrapperRef" id="projects">
      <InView
        as="div"
        threshold={0.2}
        skip={context.active}
        onChange={(inView, entry) => {
          if (inView) context.setReducer("scroll", "projects");
        }}
      >
        <Element name="projects" />
        <Box sx={{ position: "relative", height: "100%", overflow: "hidden" }}>
          <Box sx={{ mt: 2 }}>
            <Fade bottom distance="30%" delay={400}>
              <Typography color="secondary" variant="h2">
                Projects
              </Typography>
              <Typography sx={{ mt: 2, mb: 3 }} color="primary" variant="h6">
                A collection of some of my work
              </Typography>
            </Fade>
          </Box>
          <ProjectsComponent />
        </Box>
        <Box>
          <Fade bottom distance="30%">
            <Typography color="primary.dark" variant="body1">
              More projects on my GitHub page
              <Tooltip title="On GitHub">
                <IconButton
                  component={Link}
                  onClick={() =>
                    window.open("https://github.com/Raivis80", "_blank")
                  }
                  color="secondary"
                  aria-label="github"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Typography>
          </Fade>
        </Box>
            <GithubCard />
      </InView>
    </Container>
  );
}

export default ProjectsApp;
