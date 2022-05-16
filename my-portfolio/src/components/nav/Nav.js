import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import MobileMenu from './MobileNav.js';
import useMediaQuery from '../../hooks/viewPortWidth.js';
import PcMenu from './PcNav.js';
import useScrollToSection from '../../hooks/scrollToSection.js';
import HideOnScroll from '../../hooks/scrollPosition.js';
import SocialButtons from '../social/SocialButtons.js';
import ImageButton from '../buttons/ImageButton.js';
import './Nav.css';


export default function Nav(props) {
    const scrollTo = useScrollToSection();
    const handleChange = scrollTo.handleChange;
    const myObject = scrollTo.myObject;
    const hideTabs = useMediaQuery('(max-width: 800px)')
    const hideMobile = useMediaQuery('(min-width: 800px)')

    return (
        <HideOnScroll {...props}>
            <AppBar
                elevation={3}
                sx={{
                    px: 2,
                    typography: 'btn',
                    position: 'fixed',
                    zIndex: 1100
                }} >
                <Toolbar
                    sx={{ justifyContent: 'space-between' }} disableGutters>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <ImageButton img={require('../../assets/images/logo.png')} />
                        <SocialButtons />
                    </Stack>
                    {!hideMobile && <MobileMenu
                        myObject={myObject}

                        handleChange={handleChange} />
                    }

                    {!hideTabs && <PcMenu
                        myObject={myObject}

                        handleChange={handleChange} />
                    }
                </Toolbar>
            </AppBar>
        </HideOnScroll>

    );
}