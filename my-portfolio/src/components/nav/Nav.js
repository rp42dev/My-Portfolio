import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import MobileMenu from "./MobileNav.js";
import useMediaQuery from "../../hooks/viewPortWidth.js";
import PcMenu from "./PcNav.js";
import useScrollToSection from "../../hooks/scrollToSection.js";
import HideOnScroll from "../../hooks/scrollPosition.js";
import SocialButtons from "../social/SocialButtons.js";
import ImageButton from "../buttons/ImageButton.js";
import { ColorContext } from "../../colorContext.js";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import "./Nav.css";

export default function Nav(props) {
  const theme = useTheme();
  const scrollTo = useScrollToSection();
  const handleChange = scrollTo.handleChange;
  const myObject = scrollTo.myObject;
  const hideTabs = useMediaQuery("(max-width: 800px)");
  const hideMobile = useMediaQuery("(min-width: 800px)");
  const colorMode = useContext(ColorContext);

  return (
    <HideOnScroll {...props}>
      <AppBar
        elevation={3}
        sx={{
          px: 2,
          typography: "btn",
          position: "fixed",
          zIndex: 1100,
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
            <Stack direction="row" spacing={2} alignItems="center">
              <ImageButton img={require("../../assets/images/logo.png")} />
              <SocialButtons />
            </Stack>
            {!hideMobile && (
              <MobileMenu myObject={myObject} handleChange={handleChange} />
            )}

            {!hideTabs && (
              <PcMenu myObject={myObject} handleChange={handleChange} />
            )}
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
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
