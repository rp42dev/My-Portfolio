import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';


function ScrollTop(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom direction="up" in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}

export default function BackToTop(props) {
    return (
        <Box color="primary.dark">
            <ScrollTop {...props} >
                <Tooltip title="Back to top">
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon fontSize='large' color='primary' />
                    </Fab>
                </Tooltip>
            </ScrollTop>
        </Box>
    );
}
