import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Reveal from "../RevealOnScroll";
import ScrollTo from "../ScrollTo";


export default function BackToTop(props) {
  return (
    <Box color="primary.dark">
      <Reveal {...props} direction={'up'} trigger={'up'}>
        <Box
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}
        >
          <ScrollTo {...props} anchor={"home"}>
            <Tooltip title="Back to top">
              <Fab
                color="secondary"
                size="small"
                aria-label="scroll back to top"
              >
                <KeyboardArrowUpIcon fontSize="large" color="dark" />
              </Fab>
            </Tooltip>
          </ScrollTo>
        </Box>
      </Reveal>
    </Box>
  );
}
