import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Typography } from '@mui/material';
import Jump from 'react-reveal/Jump';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    bottom: '-20px',
    left: '18px',
    transform: 'rotate(90deg)',
    color: theme.palette.primary.light,
    fontSize: '1.5rem',

}));

export default function DownComp(props) {

    return (
        <Box sx={{ position: 'absolute', bottom: 0, right: '0', transform: 'translate(15%, 10%)', opacity: .3 }} color="primary.dark">
            <Jump forever timeout={2000} sx={{ position: 'relative' }}>
                <StyledTypography variant="h6">Scroll</StyledTypography>
                <IconButton aria-label="go to about section">

                    <KeyboardArrowDownIcon sx={{ fontSize: 80 }} />
                </IconButton>
            </Jump>
        </Box>
    )
}


