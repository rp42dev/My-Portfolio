import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box } from "@mui/material";
import Jump from "react-reveal/Jump";

export default function DownComp(props) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        right: "0",
        transform: "translate(0%, 0%)",
        opacity: 0.3,
      }}
      color="primary.dark"
    >
      <Jump forever timeout={2000}>
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: 80, m: 0, p: 0 }} />
      </Jump>
    </Box>
  );
}
