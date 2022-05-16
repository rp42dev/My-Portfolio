import { Grid, Typography, Paper } from '@mui/material';
import SocialLButtons from '../social/SocialButtons';
import PrivacyPolicyModal from '../legal/privacyPolicy';
import ImageButton from '../buttons/ImageButton';

export default function Footer() {
    return (
        <Paper >
            <Grid container direction="row" justify="center" alignItems="center" sx={{

                width: '100%',
                height: '100px',
                color: 'primary.contrastText',
                textAlign: 'center',
                p: 2,
                fontSize: '1.5rem',
                zIndex: 1000,
                boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.25)',
            }}>
                <Grid item xs={12} md={4}>
                    <Typography fontSize={10} variant="caption">
                        © 2022 - RP 80
                    </Typography>
                </Grid>

                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={12} md={4}>
                    <SocialLButtons />
                </Grid>
                <Grid item xs={12} md={4}>
                    <PrivacyPolicyModal />
                </Grid>
            </Grid>
        </Paper>

    );
}