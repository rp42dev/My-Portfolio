import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { useContext } from 'react';
import { NavContext } from '../NavContext.js';

export default function HideOnScroll(props) {
    const context = useContext(NavContext);
    const open = context.menuOpen;
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: open,
    });

    return (
        <Slide appear={false} direction="down" in={!open ? !trigger : open}>
            {children}
        </Slide>
    );
}