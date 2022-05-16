import { Grid, Typography, Paper, Container } from '@mui/material';
import SocialLButtons from '../social/SocialButtons';
import PrivacyPolicyModal from '../legal/privacyPolicy';
import ImageButton from '../buttons/ImageButton';
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <Fade bottom delay={500}>
            <Paper>
                <Container>
                    <Grid container direction="row" justify="center" alignItems="center" sx={{
                        width: '100%',
                        height: '100px',
                        color: 'primary.contrastText',
                        textAlign: 'center',
                        p: 2,
                        fontSize: '1.5rem',
                        zIndex: 1000,
                    }}>
                        <Grid sx={{ display: 'flex', justifyContent: 'start' }} item xs={6} md={6}>
                            <ImageButton img={require('../../assets/images/logo.png')} />
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'end' }} item xs={6} md={6}>
                            <SocialLButtons />
                        </Grid>
                        <Grid item xs={12}>
                            <PrivacyPolicyModal />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="primary.dark" fontSize={10} variant="caption">
                                © 2022 - RP 80
                            </Typography>
                        </Grid>

                    </Grid>
                </Container>
            </Paper>
        </Fade>

    );
}