import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { useTheme } from "@mui/material/styles";
import { useColorContext } from "../../../colorContext.js";

export function ModeButton(props) {
  const theme = useTheme();
  const colorMode = useColorContext();

  return (
    <Tooltip
      title={colorMode.colorMode === "light" ? "Dark Mode" : "Light Mode"}
    >
      <span>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color={"secondary"}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon fontSize="large" />
          ) : (
            <Brightness4Icon fontSize="large" />
          )}
          {props.children}
        </IconButton>
      </span>
    </Tooltip>
  );
}

export default ModeButton;
