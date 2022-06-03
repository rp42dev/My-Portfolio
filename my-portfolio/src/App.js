import * as React from 'react';
import './App.css';
import HomeApp from './home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import AboutApp from './about/About';
import ProjectsApp from './projects/Projects';
import ContactApp from './contact/Contact';
import Footer from './components/footer/FooterComponent';
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";

import { useColorContext } from './colorContext';


const themeMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#E5E5E5",
          },
          secondary: {
            main: "#b37142",
          },
          dark: {
            main: "#28282a",
          },
          background: {
            default: "#28282a",
          },
          paper: {
            main: "#28282a",
          },
        }
      : {
          primary: {
            main: "#28282a",
          },
          secondary: {
            main: "#b37142",
          },
          dark: {
            main: "#E5E5E5",
          },
          background: {
            default: "#ebebeb",
            paper: {
              main: "#ebebeb",
          },
          },
        }),
  },
  typography: {
    h1: { fontFamily: '"Roboto", sans-serif' },
    h6: {
      fontSize: "1.3rem",
      "@media (min-width:400px)": {
        fontSize: "1.4rem",
      },
      fontFamily: '"Roboto", sans-serif',
    },
    h2: {
      fontSize: "3rem",
      "@media (min-width:400px)": {
        fontSize: "4rem",
      },
      fontFamily: '"Roboto", sans-serif',
    },
    body1: {
      fontSize: ".9rem",
      "@media (min-width:400px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: ".9rem",
      "@media (min-width:400px)": {
        fontSize: "1.1rem",
      },
    },
    caption: {
      fontSize: ".6rem",
      letterSpacing: "0.1rem",
      fontWeight: "bolder",
    },
    btn: { fontFamily: '"Roboto", sans-serif' },
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});



function App() {

  const colorMode = useColorContext();

  const theme = createTheme(themeMode(colorMode.colorMode));
  console.log(theme.palette.mode);

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
        <div className="App">
          <HomeApp />
          <AboutApp />
          <ProjectsApp />

          <ContactApp />
          <Footer />
        </div>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;


