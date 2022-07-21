import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box, IconButton } from "@mui/material";
import { NavContext } from "../nav/NavContext";
import { useContext } from "react";
import Jump from "react-reveal/Jump";

export default function DownComp(props) {
  let context = useContext(NavContext);
  console.log(context.page);
  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        left: 100,
        transform: "translate(0%, 0%)",
        opacity: 0.3,
      }}
      color="primary.dark"
    >
      <Jump forever timeout={2000}>
        <IconButton onClick={props.onClick}>
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, m: 0, p: 0 }} />
        </IconButton>
      </Jump>
    </Box>
  );
}
