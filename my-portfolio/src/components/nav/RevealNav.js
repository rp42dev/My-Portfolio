import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { useContext } from 'react';
import { NavContext } from "./NavContext.js";

export default function Reveal(props) {
    const context = useContext(NavContext);
    const menuOpen = context.state.menuOpen;
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: menuOpen,
    });

    return (
      <Slide
        appear={false}
        direction="down"
        in={!menuOpen ? !trigger : menuOpen}
      >
        {children}
      </Slide>
    );
}