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
    Link,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GitHubIcon from '@mui/icons-material/GitHub';
import useMediaQuery from '../../hooks/viewPortWidth.js';
import Fade from 'react-reveal/Fade';
import '../../projects/Projects.css';
import './image.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    backgroundColor: 'rgb(20, 20, 21, 0.5)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    transition: theme.transitions.create('box-shadow', {
        duration: theme.transitions.duration.st,
    }),
    '&:hover': {
        boxShadow: theme.shadows[10],
    }
}));

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
    backgroundColor: theme.palette.secondary.main,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
}));


export default function ImageBases(data) {
    const hideTabs = useMediaQuery('(max-width: 900px)');

    return (
        <>
            {data.data.map((image, i) => (
                (i % 2 === 0) ? (
                    <Fade bottom distance="30%">
                        <Grid container mb={{ xs: 6, md: 10 }} rowSpacing={{ sx: 2, md: 10 }}>

                            <Grid item xs={12} md={7} order={{ xs: 1 }}>
                                <Paper elevation={3}>
                                    <ImageButton
                                        title='View live site'
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

                            </Grid>
                            <Grid item xs={12} md={5} order={{ xs: 2 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <Paper elevation={hideTabs ? 2 : 0} sx={{ zIndex: 999, width: '100%' }}>

                                    <Typography color='primary' align={!hideTabs ? 'right' : 'left'} sx={{ m: .5 }} variant="h6">
                                        {image.title}
                                    </Typography>
                                    <StyledPaper elevation={3} className={i % 2 ? 'left' : 'right'} >

                                        <Typography color='primary.dark' variant="body2">
                                            {image.description}
                                        </Typography>


                                    </StyledPaper>

                                    <Box className="align-text" sx={{ width: '100%' }}>
                                        <Typography sx={{ width: '100%', px: 1 }} variant="caption" color="primary.dark" align={!hideTabs ? 'right' : 'left'} >
                                            {image.tech.map((tech, i) => (
                                                <span key={i}>{tech}, </span>
                                            ))}
                                        </Typography>
                                    </Box>
                                    <Stack justifyContent={!hideTabs ? 'flex-end' : 'flex-start'} direction="row" spacing={1}>
                                        <Tooltip title="On GitHub">
                                            <IconButton size="small" component={Link} onClick={() => window.open(image.github, '_blank')} color='secondary' aria-label="On GitHub">
                                                <GitHubIcon />

                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Website">
                                            <IconButton size="small" component={Link} onClick={() => window.open(image.url, '_blank')} color='secondary' aria-label="Website">
                                                <RemoveRedEyeIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Fade>

                ) : (
                    <Fade bottom distance="30%">
                        <Grid container mb={{ xs: 6, md: 10 }} rowSpacing={{ sx: 2, md: 10 }}>
                            <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
                                <Paper elevation={3}>
                                    <ImageButton
                                        title='View live site'
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
                                </Paper >

                            </Grid>
                            <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <Paper elevation={hideTabs ? 2 : 0} sx={{ zIndex: 999, width: '100%' }}>

                                    <Typography color='primary' sx={{ m: .5 }} variant="h6">
                                        {image.title}
                                    </Typography>
                                    <StyledPaper elevation={3} className={i % 2 ? 'left' : 'right'}>

                                        <Typography color='primary.dark' variant="body2">
                                            {image.description}
                                        </Typography>

                                    </StyledPaper >
                                    <Typography sx={{ width: '100%', px: 1 }} variant="caption" color="primary.dark" align={!hideTabs ? 'right' : 'left'} >
                                        {image.tech.map((tech, i) => (
                                            <span key={i}>{tech}, </span>
                                        ))}
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Tooltip title="On GitHub">
                                            <IconButton size="small" component={Link} onClick={() => window.open(image.github, '_blank')} color='secondary' aria-label="On GitHub">
                                                <GitHubIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Website">
                                            <IconButton size="small" component={Link} onClick={() => window.open(image.url, '_blank')} color='secondary' aria-label="Website">
                                                <RemoveRedEyeIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Fade>
                )
            ))}
        </>
    );
}