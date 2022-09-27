import { Typography, Paper, Stack, Box, styled } from "@mui/material";
import ProjectIcons from "./projectIcons.js";
import useMediaQuery from "../../hooks/viewPortWidth.js";
import { useColorContext } from "../../ColorContext";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.palette.text.primary,
  backgroundColor:
    useColorContext().colorMode === "dark"
      ? theme.palette.background.paper.light
      : theme.palette.background.paper.main,
  transition: theme.transitions.create("box-shadow", {
    duration: theme.transitions.duration.st,
  }),
}));

export default function TextComponent(props) {
  
  const hideTabs = useMediaQuery("(max-width: 900px)");
  return (
    <Box sx={{ zIndex: 999, width: "100%" }}>
      <StyledPaper
        square
        elevation={6}
        className={props.position === "right" ? "left" : "right"}
      >
        <Typography
          align={props.position === "left" && !hideTabs ? "right" : "left"}
          color="primary.light"
          variant="h6"
          component="h2"
        >
          {props.image.title}
        </Typography>
        <Typography color="primary.dark" variant="body1" component="p">
          {props.image.description}
        </Typography>
        <Box
          className={props.position === "left" && !hideTabs ? "align-text" : ""}
          sx={{ width: "100%" }}
        >
          <Typography
            sx={{ width: "100%" }}
            variant="caption"
            color="primary.light"
            align={!hideTabs ? "right" : "left"}
          >
            {props.image.tech.map((tech, b) => (
              <span key={b}>{tech}, </span>
            ))}
          </Typography>
        </Box>

        <Stack
          justifyContent={
            props.position === "left" && !hideTabs ? "flex-end" : "flex-start"
          }
          direction="row"
          spacing={1}
        >
          <ProjectIcons github={props.image.github} url={props.image.url} />
        </Stack>
      </StyledPaper>
    </Box>
  );
}
