import ProjectsComponent from "../components/projects/projectsComponent.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fade from "react-reveal/Fade";
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

  return (
    <Container id="projects">
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
    </Container>
  );
}

export default ProjectsApp;
