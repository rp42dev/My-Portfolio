import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import { useContext } from 'react';
import { AppContext } from '../AppContext.js';

export default function HideOnScroll(props) {
    const context = useContext(AppContext);
    const open = context.menuOpen;
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: open,
    });

    return (
        <Zoom appear={false} direction="down" in={!open ? trigger : open}>
            {children}
        </Zoom>
    );
}