import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import Jump from 'react-reveal/Jump';
import IconButton from '@mui/material/IconButton';


function DownComp() {
    const handleChange = (event) => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'       
        });
    };

    return (
        <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 0)', opacity: .3 }} color="primary.dark">
            <Jump forever timeout={2000}>
                <IconButton onClick={handleChange} aria-label="go to about section">
                    <KeyboardArrowDownIcon sx={{ fontSize: 200}} />
                </IconButton>
            </Jump>
        </Box>
    )
}

export default DownComp

