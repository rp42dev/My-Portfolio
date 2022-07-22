import * as React from "react";
import { AppBar, Toolbar, Stack, Container } from "@mui/material/";

import MobileMenu from "./MobileNav.js";
import useMediaQuery from "../../hooks/viewPortWidth.js";
import PcMenu from "./PcNav.js";
import Reveal from "./ScrollPosition.js";
import SocialButtons from "../social/SocialButtons.js";
import ImageButton from "../buttons/ImageButton.js";
import "./Nav.css";


export default function Nav(props) {
  
  const hideTabs = useMediaQuery("(max-width: 800px)");
  const hideMobile = useMediaQuery("(min-width: 800px)");

  return (
    <Reveal {...props}>
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
    </Reveal>
  );
}
