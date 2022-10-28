import { Grid, Typography, Paper, Container } from "@mui/material";
import SocialLButtons from "../social/SocialButtons";
import PrivacyPolicyModal from "../legal/privacyPolicy";
import ImageButton from "../buttons/ImageButton";
import Fade from "react-reveal/Fade";
import { useColorContext } from "../../colorContext";
import { useTheme } from "@mui/material/styles";
import Logo from "../buttons/Logo";


export default function Footer() {
  let colorMode = useColorContext();
  let theme = useTheme();
  return (
    <Fade bottom delay={500}>
      <Paper
        id="footer"
        sx={{
          backgroundColor:
            colorMode.colorMode === "dark" ? "#141415" : "#28282a",
          color: theme.palette.primary.main,
        }}
        elevation={6}
      >
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            sx={{
              width: "100%",
              minHeight: "100px",
              color: "primary.contrastText",
              textAlign: "center",
              p: 2,
              fontSize: "1.5rem",
              zIndex: 1000,
            }}
          >
            <Grid
              sx={{ display: "flex", justifyContent: "start" }}
              item
              xs={6}
              md={6}
            >
              <Logo />
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "end" }}
              item
              xs={6}
              md={6}
            >
              <SocialLButtons />
            </Grid>
            <Grid item xs={6} md={6}>
              <Typography
                color="#D8D8D8"
                fontSize={10}
                variant="caption"
                sx={{ display: "flex", justifyContent: "start" }}
              >
                © 2022 - rp42
              </Typography>
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "end" }}
              item
              xs={6}
              md={6}
            >
              <PrivacyPolicyModal />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Fade>
  );
}
