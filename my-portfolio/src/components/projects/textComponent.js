import {
    Typography,
    Paper,
    Stack,
    Box,
    styled
} from '@mui/material';
import ProjectIcons from '../icons/projectIcons.js';
import useMediaQuery from '../../hooks/viewPortWidth.js';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    backgroundColor: 'rgb(20, 20, 21, .6)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    transition: theme.transitions.create('box-shadow', {
        duration: theme.transitions.duration.st,
    }),
    '@media (max-width:900px)': {
        backgroundColor: 'rgb(20, 20, 21, .0)',
        boxShadow: theme.shadows[0],
    }
}));


export default function TextComponent(props) {
    const hideTabs = useMediaQuery('(max-width: 900px)');
    return (

        <Paper elevation={hideTabs ? 3 : 0} sx={{ zIndex: 999, width: '100%' }}>

            <Typography align={props.position === 'left' && !hideTabs ? 'right' : 'left'} color='primary' px={1} variant="h6">
                {props.image.title}
            </Typography>

            <StyledPaper elevation={props.position === 'right' ? 3 : 0} className={props.position === 'right' ? 'left' : 'right'}>

                <Typography color='primary.dark' variant="body2">
                    {props.image.description}
                </Typography>

            </StyledPaper >
            <Box px={1} className={props.position === 'left' && !hideTabs ? "align-text" : ''} sx={{ width: '100%' }}>
                <Typography sx={{ width: '100%' }} variant="caption" color="primary.dark" align={!hideTabs ? 'right' : 'left'} >
                    {props.image.tech.map((tech, b) => (
                        <span key={b}>{tech}, </span>
                    ))}
                </Typography>
            </Box>

            <Stack justifyContent={props.position === 'left' && !hideTabs ? 'flex-end' : 'flex-start'} direction="row" spacing={1}>
                <ProjectIcons github={props.image.github} url={props.image.url} />
            </Stack>
        </Paper>
    );
}
