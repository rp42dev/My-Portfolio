import {
    Typography,
    Paper,
    ButtonBase,
    styled
} from '@mui/material';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 400,
    width: 100,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    transition: theme.transitions.create('box-shadow', {
        duration: theme.transitions.duration.short,
    }),
    '@media (max-width:600px)': {
        height: 300,
        width: 'auto',
    },
    '@media (max-width:400px)': {
        height: 200,
        width: 'auto',
    },
    '& .MuiTypography-root': {
        fontStyle: theme.button,
        opacity: .7,
        color: 'transparent',
        borderBottom: '3px solid transparent',
        borderRadius: '4px',
        transition: 'all .2s ease-in-out',
    },
    '&:hover': {
        boxShadow: theme.shadows[10],
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 1,
        },
        '& .MuiTypography-root': {
            backgroundColor: 'rgb(20, 20, 21, 0.5))',
        },
        '& .MuiTypography-root': {
            opacity: 1,
            borderBottom: '3px solid rgba(179, 113, 66)',
            backgroundColor: 'rgb(20, 20, 21, 0.3)',
            color: theme.palette.secondary.main,
        },

    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    borderRadius: '4px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',

});

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    borderRadius: '4px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.dark.main,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
}));


export default function ImageComponent(props) {
    return (

        <Paper elevation={3}>
            <ImageButton
                title='View live site'
                onClick={() => window.open(props.image.url, '_blank')}
                focusRipple
                key={props.image.title}
                style={{
                    width: '100%',
                }}
            >
                <ImageSrc style={{ backgroundImage: `url(${props.image.img})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Typography
                    component="span"
                    variant="button"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                >
                    {props.image.title}
                </Typography>
            </ImageButton>
        </Paper >

    );

}