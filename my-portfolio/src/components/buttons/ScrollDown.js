import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Typography } from '@mui/material';
import Jump from 'react-reveal/Jump';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    bottom: '-20px',
    left: '10px',
    transform: 'rotate(90deg)',
    color: theme.palette.primary.light,
    fontSize: '1.5rem',

}));

export default function DownComp(props) {
    return (
        <Box sx={{ position: 'absolute', bottom: 0, right: '0', transform: 'translate(0%, 0%)', opacity: .3 }} color="primary.dark">
            <Jump forever timeout={2000} >
                <StyledTypography variant="h6">Scroll</StyledTypography>
                <KeyboardArrowDownIcon sx={{ fontSize: 80 }} />
            </Jump>
        </Box>
    )
}


