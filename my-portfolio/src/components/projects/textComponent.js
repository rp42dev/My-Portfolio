import {
    Typography,
    Paper,
    Stack,
    Box,
    styled
} from '@mui/material';
import ProjectIcons from '../icons/projectIcons.js';
import useMediaQuery from '../../hooks/viewPortWidth.js';


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper.main,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('box-shadow', {
        duration: theme.transitions.duration.st,
    }),

}));


export default function TextComponent(props) {
    const hideTabs = useMediaQuery('(max-width: 900px)');
    return (
      <Box sx={{ zIndex: 999, width: "100%" }}
      >

        <StyledPaper
          elevation={6}
          className={props.position === "right" ? "left" : "right"}
        >
        <Typography
          align={props.position === "left" && !hideTabs ? "right" : "left"}
          color="primary"
          
          variant="h6"
        >
          {props.image.title}
        </Typography>
          <Typography color="primary.dark" variant="body2">
            {props.image.description}
          </Typography>
        <Box
          className={props.position === "left" && !hideTabs ? "align-text" : ""}
          sx={{ width: "100%" }}
        >
          <Typography
            sx={{ width: "100%", fontWeight: "bold" }}
            variant="caption"
            color="primary.dark"
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
