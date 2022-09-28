import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container, IconButton } from '@mui/material';
import {useTheme} from '@mui/material/styles';
import { useColorContext } from "../../ColorContext";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledModal = styled(Modal)({
    overflowY: 'scroll',
    justifyContent: 'center',
});

const style = {
  position: "relative",
  border: "2px solid #000",
  boxShadow: 24,
  minWidth: "auto",
  maxWidth: "900px",
  margin: "auto",
  p: 3,
  mt: 8,
};

export default function PrivacyPolicyModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    return (
      <div>
        <Button color="secondary" onClick={handleOpen}>
          <Typography variant="caption"> Privacy Policy</Typography>
        </Button>
        <StyledModal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          color="theme.palette.primary.dark"
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Container sx={style} style={{ backgroundColor: theme.palette.background.paper }}>
              <AppBar>
                <Toolbar>
                  <Container sx={{ display: "flex", justifyContent: "end" }}>
                    <IconButton
                      color="secondary"
                      size="large"
                      onClick={handleClose}
                    >
                      <CloseIcon fontSize="large" />
                    </IconButton>
                  </Container>
                </Toolbar>
              </AppBar>

              <Typography
                color="primary"
                id="transition-modal-title"
                variant="h5"
                component="h1"
              >
                Privacy Policy for rp42
              </Typography>
              <Box id="transition-modal-description" sx={{ mt: 2 }}>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  At rp42, accessible from
                  https://rp42.dev/, one of our main
                  priorities is the privacy of our visitors. This Privacy Policy
                  document contains types of information that is collected and
                  recorded by rp42 and how we use it.
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us.
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  This Privacy Policy applies only to our online activities and
                  is valid for visitors to our website with regards to the
                  information that they shared and/or collect in rp42. This
                  policy is not applicable to any information collected offline
                  or via channels other than this website. Our Privacy Policy
                  was created with the help of the{" "}
                  <a href="https://www.generateprivacypolicy.com/">
                    Free Privacy Policy Generator
                  </a>
                  .
                </Typography>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  Consent
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </Typography>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  Information we collect
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  When you register for an Account, we may ask for your contact
                  information, including items such as name, company name,
                  address, email address, and telephone number.
                </Typography>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  How we use your information
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  We use the information we collect in various ways, including
                  to:
                </Typography>

                <ul>
                  <li>
                    <Typography color="primary.dark" variant="body1">
                      {" "}
                      Provide, operate, and maintain our website
                    </Typography>
                  </li>
                  <li>
                    <Typography color="primary.dark" variant="body1">
                      {" "}
                      Improve, personalize, and expand our website
                    </Typography>
                  </li>
                  <li>
                    <Typography color="primary.dark" variant="body1">
                      {" "}
                      Understand and analyze how you use our website
                    </Typography>
                  </li>
                  <li>
                    <Typography color="primary.dark" variant="body1">
                      {" "}
                      Develop new products, services, features, and
                      functionality
                    </Typography>
                  </li>
                  <li>
                    <Typography color="primary.dark" variant="body1">
                      {" "}
                      Communicate with you, either directly or through one of
                      our partners, including for customer service, to provide
                      you with updates and other information relating to the
                      website, and for marketing and promotional purposes
                    </Typography>
                  </li>
                  <li>
                    <Typography color="primary.dark" variant="body1">
                      {" "}
                      Send you emails
                    </Typography>
                  </li>
                  <li>
                    <Typography color="primary.dark" variant="body1">
                      {" "}
                      Find and prevent fraud
                    </Typography>
                  </li>
                </ul>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  Log Files
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  rp42 follows a standard procedure of using log files. These
                  files log visitors when they visit websites. All hosting
                  companies do this and a part of hosting services' analytics.
                  The information collected by log files include internet
                  protocol (IP) addresses, browser type, Internet Service
                  Provider (ISP), date and time stamp, referring/exit pages, and
                  possibly the number of clicks. These are not linked to any
                  information that is personally identifiable. The purpose of
                  the information is for analyzing trends, administering the
                  site, tracking users' movement on the website, and gathering
                  demographic information.
                </Typography>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  Advertising Partners Privacy Policies
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  You may consult this ul to find the Privacy Policy for each of
                  the advertising partners of rp42.
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  Third-party ad servers or ad networks uses technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on rp42,
                  which are sent directly to users' browser. They automatically
                  receive your IP address when this occurs. These technologies
                  are used to measure the effectiveness of their advertising
                  campaigns and/or to personalize the advertising content that
                  you see on websites that you visit.
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  Note that rp42 has no access to or control over these cookies
                  that are used by third-party advertisers.
                </Typography>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  Third Party Privacy Policies
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  rp42's Privacy Policy does not apply to other advertisers or
                  websites. Thus, we are advising you to consult the respective
                  Privacy Policies of these third-party ad servers for more
                  detailed information. It may include their practices and
                  instructions about how to opt-out of certain options.{" "}
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites.
                </Typography>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  CCPA Privacy Rights (Do Not Sell My Personal Information)
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  Under the CCPA, among other rights, California consumers have
                  the right to:
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  Request that a business that collects a consumer's personal
                  data disclose the categories and specific pieces of personal
                  data that a business has collected about consumers.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  Request that a business delete any personal data about the
                  consumer that a business has collected.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  Request that a business that sells a consumer's personal data,
                  not sell the consumer's personal data.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </Typography>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  GDPR Data Protection Rights
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  We would like to make sure you are fully aware of all of your
                  data protection rights. Every user is entitled to the
                  following:
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  The right to access – You have the right to request copies of
                  your personal data. We may charge you a small fee for this
                  service.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate. You
                  also have the right to request that we complete the
                  information you believe is incomplete.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                </Typography>
                <Typography color="primary.dark" variant="body1">
                  {" "}
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </Typography>

                <Typography color="primary" mt={3} variant="h6">
                  {" "}
                  Children's Information
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                </Typography>

                <Typography color="primary.dark" variant="body1">
                  {" "}
                  rp42 does not knowingly collect any Personal Identifiable
                  Information from children under the age of 13. If you think
                  that your child provided this kind of information on our
                  website, we strongly encourage you to contact us immediately
                  and we will do our best efforts to promptly remove such
                  information from our records.
                </Typography>
              </Box>
            </Container>
          </Fade>
        </StyledModal>
      </div>
    );
}