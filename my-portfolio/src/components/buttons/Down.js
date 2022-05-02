import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box, Typography } from '@mui/material';
import Jump from 'react-reveal/Jump';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';

const StyledTypography = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    bottom: '-20px',
    left: '18px',
    transform: 'rotate(90deg)',
    color: theme.palette.primary.light,
    fontSize: '1.5rem',

}));

function DownComp(props) {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#contact',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    function HideOnScroll(props) {
        const trigger = useScrollTrigger();
        return (
            <Zoom in={!trigger}>
                <Box
                    onClick={handleClick}
                    role="presentation"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                >
                    <Box sx={{ position: 'absolute', bottom: 0, right: '0', transform: 'translate(15%, 10%)', opacity: .3 }} color="primary.dark">
                        <Jump forever timeout={2000} sx={{ position: 'relative' }}>
                            <StyledTypography variant="h6">Scroll</StyledTypography>
                            <IconButton onClick={handleClick} aria-label="go to about section">

                                <KeyboardArrowDownIcon sx={{ fontSize: 80 }} />
                            </IconButton>
                        </Jump>
                    </Box>
                </Box>
            </Zoom>
        );
    }

    return (
        <HideOnScroll in={trigger} />
    )
}

export default DownComp

