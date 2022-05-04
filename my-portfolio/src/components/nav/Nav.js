import * as React from 'react';
import Box from '@mui/material/Box';
import MobileMenu from './MobileNav.js';
import useMediaQuery from '../../hooks/ViewPort.js';
import PcMenu from './PcNav.js';
import './Nav.css';
import useScrollToSection from '../../hooks/useScrollToSection.js';
import HideOnScroll from '../../hooks/useScrollPosition.js';


export default function Nav(props) {
    const { children } = props;
    const scrollTo = useScrollToSection();

    const handleChange = scrollTo.handleChange;
    const myObject = scrollTo.myObject;

    const hideTabs = useMediaQuery('(max-width: 800px)')
    const hideMobile = useMediaQuery('(min-width: 800px)')


    return (
        <HideOnScroll {...props}>
            <Box

                sx={{
                    typography: 'btn',
                    position: 'fixed',
                    zIndex: 1100
                }}>

                {!hideMobile && <MobileMenu
                    myObject={myObject}
                    handleChange={handleChange} />
                }

                {!hideTabs && <PcMenu
                    myObject={myObject}
                    handleChange={handleChange} />
                }
            </Box>
        </HideOnScroll>

    );
}