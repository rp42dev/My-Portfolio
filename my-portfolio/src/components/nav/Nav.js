import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import MobileMenu from "./MobileNav.js";
import useMediaQuery from "../../hooks/viewPortWidth.js";
import PcMenu from "./PcNav.js";
import HideOnScroll from "../../hooks/scrollPosition.js";
import SocialButtons from "../social/SocialButtons.js";
import ImageButton from "../buttons/ImageButton.js";
import "./Nav.css";


export default function Nav(props) {
  
  const hideTabs = useMediaQuery("(max-width: 800px)");
  const hideMobile = useMediaQuery("(min-width: 800px)");

  return (
    <HideOnScroll {...props}>
      <AppBar
        elevation={6}
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
              <MobileMenu/>
            )}

            {!hideTabs && (
              <PcMenu/>
            )}

          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
