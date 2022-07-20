import { useState, useContext, Fragment, useEffect } from "react";
import ModeButton from "./ThemeButton.js";
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
  const open = Boolean(anchorEl);
  let theme = useTheme();

  useEffect(() => {
    if (open) {
      context.setValue.setMenu(true);
    } else {
      context.setValue.setMenu(false);
    }	
  }, [anchorEl, context.setValue, open]);
   

  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <ModeButton />
        <Tooltip title="Expand Menu">
          <IconButton
            onClick={(event)=>setAnchorEl(event.currentTarget)}
            size="large"
            sx={{ p: 0, px: 1 }}
            aria-controls={open ? "mobile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon fontSize="large" color="secondary" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="mobile-menu"
        open={open}
        onClose={() => setAnchorEl(null)}
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
          value={context.page}
          textColor="secondary"
          indicatorColor="secondary"
        >
          {context.menuItems.map((option, index) => (
            <Tab
              key={index}
              onClick={() => {
                context.setScrollTo.setScroll(option);
              }}
              label={option}
              value={option}
            ></Tab>
          ))}
        </Tabs>
      </Menu>
    </Fragment>
  );
}
