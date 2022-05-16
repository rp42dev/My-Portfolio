import { ButtonBase, Tooltip, styled } from '@mui/material';


const StyledImageButton = styled(ButtonBase)(({ theme }) => ({
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

export default function ImageButton(props) {
    const handleClick = () => {
        window.location.reload(false);
    }

    return (
        <Tooltip title="Home" >
            <StyledImageButton
                sx={{ display: 'flex', justifyContent: 'start', pt: .5 }}
                focusRipple
                width='100%'
                height='100%'
                onClick={handleClick}
            >
                <img width={120} src={props.img} alt="logo" />
            </StyledImageButton>
        </Tooltip>
    );
}