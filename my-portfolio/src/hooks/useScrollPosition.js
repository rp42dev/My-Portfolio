import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';

export default function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        
    });

    return (
        <Zoom appear={false} direction="down" in={!trigger}>
            {children}
        </Zoom>
    );
}