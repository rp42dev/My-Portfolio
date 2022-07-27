import {
  useState,
  useContext,
  Fragment,
} from "react";
import ModeButton from "./buttons/ThemeButton.js";
import MenuIcon from "@mui/icons-material/Menu";
import {
  useTheme,
  Tabs,
  Tab,
  Box,
  Menu,
  IconButton,
  Tooltip,
} from "@mui/material";

import { NavContext } from "./NavContext.js";

export default function MobileMenu(props) {
  const context = useContext(NavContext);

  const [anchorEl, setAnchorEl] = useState(null);
  let theme = useTheme();

  const handleChange = (event, newValue) => {
    context.setReducer("click", newValue);
      setTimeout(() => {
        handleClose();
      }, 50);
  };

  const handleClick = (event) => {
    context.setReducer("setMenu", true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    context.setReducer("setMenu", false);
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <ModeButton />
        <Tooltip title="Expand Menu">
          <IconButton
            onClick={(event) => handleClick(event)}
            size="large"
            sx={{ p: 0, px: 1 }}
            aria-controls={context.menuOpen ? "mobile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={context.menuOpen ? "true" : undefined}
          >
            <MenuIcon fontSize="large" color="secondary" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="mobile-menu"
        open={context.menuOpen}
        onClose={() => handleClose()}
        PaperProps={{
          elevation: 4,
          sx: {
            typography: "button",
            letterSpacing: "2px",
            overflow: "visible",
            backgroundColor:
              theme.palette.mode === "dark" ? "#1F1F1F" : "#F5F5F5",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mb: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Tabs
          orientation="vertical"
          value={context.state.tab}
          textColor="secondary"
          indicatorColor="secondary"
          onChange={(event, value) => handleChange(event, value)}
        >
          {context.tabs.map((option, index) => (
            <Tab key={index} label={option} value={option}></Tab>
          ))}
        </Tabs>
      </Menu>
    </Fragment>
  );
}
