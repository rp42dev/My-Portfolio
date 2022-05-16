import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import MobileMenu from './MobileNav.js';
import useMediaQuery from '../../hooks/viewPortWidth.js';
import PcMenu from './PcNav.js';
import useScrollToSection from '../../hooks/scrollToSection.js';
import ButtonBase from '@mui/material/ButtonBase';
import HideOnScroll from '../../hooks/scrollPosition.js';
import SocialButtons from '../social/SocialButtons.js';

import './Nav.css';
import { Tooltip } from '@mui/material';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));


export default function Nav(props) {
    const scrollTo = useScrollToSection();
    const handleChange = scrollTo.handleChange;
    const myObject = scrollTo.myObject;
    const hideTabs = useMediaQuery('(max-width: 800px)')
    const hideMobile = useMediaQuery('(min-width: 800px)')

    const handleClick = () => {
        window.location.reload(false);
    }

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
                        <Tooltip title="Home" >
                            <ImageButton
                                sx={{ display: 'flex', justifyContent: 'start', pt: .5 }}
                                id="nav-logo"
                                focusRipple

                                width='100%'
                                height='100%'
                                onClick={(event) => handleClick(event, 'home')}
                            >
                                <img width={120} src={require('../../assets/images/logo.png')} alt="logo" />
                            </ImageButton>
                        </Tooltip>
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