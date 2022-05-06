import * as React from 'react';
import {
    Typography,
    Box,
    IconButton,
    Stack,
    styled,
    Grid,
    Paper,
    Tooltip,
    ButtonBase,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GitHubIcon from '@mui/icons-material/GitHub';
import useMediaQuery from '../../hooks/viewPortWidth.js';
import Fade from 'react-reveal/Fade';
import '../../projects/Projects.css';


const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 400,
    width: 100,
    boxShadow: theme.shadows[10],
    '@media (max-width:400px)': {
        height: 300,
        width: 'auto',
    },

    '& .MuiTypography-root': {
        fontStyle: theme.button,
        opacity: .7,
        color: theme.palette.primary.main,
        borderBottom: '3px solid transparent',
        borderRadius: '4px',
        transform: 'border translateX(0)', color: theme.palette.primary.main,
        transition: 'all .2s ease-in-out',
    },
    '&:hover': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 1,
        },
        '& .MuiTypography-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        '& .MuiTypography-root': {
            opacity: 1,
            borderBottom: '3px solid rgba(179, 113, 66)',
            backgroundColor: 'rgba(0, 0, 0, .3)',
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
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
}));


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    '@media (min-width:400px)': {
        padding: theme.spacing('projects'),
    },
    color: theme.palette.text.secondary,
    backgroundColor: 'rgb(20, 20, 21, 0.5)',
}));


export default function ImageBases(data) {
    const hideTabs = useMediaQuery('(max-width: 900px)');

    return (
        <>
            {data.data.map((image, i) => (
                (i % 2 === 0) ? (
                    <Grid container mb={{ xs: 6, md: 10 }} rowSpacing={{ sx: 2, md: 10 }}>

                        <Grid item xs={12} md={7} order={{ xs: 1 }}>
                            <Fade bottom>
                                <Paper elevation={8}>
                                    <ImageButton
                                        onClick={() => window.open(image.url, '_blank')}
                                        focusRipple
                                        key={image.title}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <ImageSrc style={{ backgroundImage: `url(${image.img})` }} />
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
                                            {image.title}

                                        </Typography>
                                    </ImageButton>
                                </Paper>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={5} order={{ xs: 2 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <Box sx={{ zIndex: 999, width: '100%' }}>
                                <Fade bottom cascade delay={500}>
                                    <Paper elevation={8} className={i % 2 ? 'left' : 'right'} >
                                        <Typography color='primary.dark' align={!hideTabs ? 'right' : 'left'} sx={{ m: .5 }} variant="h6">
                                            {image.title}
                                        </Typography>
                                        <Item elevation={10}>
                                            <Typography color='primary' variant="body2">
                                                {image.description}
                                            </Typography>
                                        </Item>
                                        <Stack justifyContent={!hideTabs ? 'flex-end' : 'flex-start'} direction="row" spacing={1}>
                                            <Tooltip title="On GitHub">
                                                <IconButton size="small" onClick={() => window.open(image.github, '_blank')} color='secondary' aria-label="On GitHub">
                                                    <GitHubIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Website">
                                                <IconButton size="small" onClick={() => window.open(image.url, '_blank')} color='secondary' aria-label="Website">
                                                    <RemoveRedEyeIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Stack>
                                    </Paper>
                                </Fade>
                            </Box>
                        </Grid>
                    </Grid>

                ) : (
                    <Grid container mb={{ xs: 6, md: 10 }} rowSpacing={{ sx: 2, md: 10 }}>
                        <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
                            <Fade bottom>
                                <Paper elevation={6}>
                                    <ImageButton
                                        onClick={() => window.open(image.url, '_blank')}
                                        focusRipple
                                        key={image.title}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <ImageSrc style={{ backgroundImage: `url(${image.img})` }} />
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
                                            {image.title}
                                        </Typography>
                                    </ImageButton>
                                </Paper>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <Box sx={{ zIndex: 999, width: '100%' }}>
                                <Fade bottom cascade delay={500}>
                                    <Paper elevation={6} className={i % 2 ? 'left' : 'right'}>
                                        <Typography color='primary.dark' align={hideTabs ? 'right' : 'left'} sx={{ m: .5 }} variant="h6">
                                            {image.title}
                                        </Typography>
                                        <Item elevation={10}>
                                            <Typography color='primary' variant="body2">
                                                {image.description}
                                            </Typography>
                                        </Item>
                                        <Stack justifyContent={hideTabs ? 'flex-end' : 'flex-start'} direction="row" spacing={1}>
                                            <Tooltip title="On GitHub">
                                                <IconButton size="small" onClick={() => window.open(image.github, '_blank')} color='secondary' aria-label="On GitHub">
                                                    <GitHubIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Website">
                                                <IconButton size="small" onClick={() => window.open(image.url, '_blank')} color='secondary' aria-label="Website">
                                                    <RemoveRedEyeIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Stack>
                                    </Paper>
                                </Fade>
                            </Box>
                        </Grid>
                    </Grid>
                )
            ))}

        </>
    );
}