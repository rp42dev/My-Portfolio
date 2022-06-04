
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

import { useTheme } from "@mui/material/styles";
import { useColorContext } from "../../colorContext.js";


export function ModeButton(props) {
  const theme = useTheme();
  const colorMode = useColorContext();

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color={"secondary"}
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
      {props.children}
    </IconButton>
  );
}

export default ModeButton;
