import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useCallback } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { NavContext } from "./components/nav/NavContext";
import { useColorContext } from "./ColorContext";
import "./App.css";

import HomeApp from "./home/Home";
import AboutApp from "./about/About";
import ProjectsApp from "./projects/Projects";
import ContactApp from "./contact/Contact";
import Footer from "./components/footer/FooterComponent";
import Nav from "./components/nav/Nav";
import ScrollDown from "./components/nav/buttons/ScrollDown";
import BackToTop from "./components/nav/buttons/BackToTop";




const themeMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#E5E5E5",
            light: "#EEEEEE",
            dark: "#D8D8D8",
          },
          secondary: {
            main: "#b37142",
            light: "#BC855D",
            dark: "#9C5F3F",
          },
          dark: {
            main: "#121212",
          },
          background: {
            default: "#28282a",
            paper: "rgba(18, 18, 18, 0.8)",
          },
        }
      : {
          primary: {
            main: "#28282a",
            light: "#333335",
            dark: "#141415",
          },
          secondary: {
            main: "#b37142",
            light: "#BC855D",
            dark: "#9C5F3F",
          },
          dark: {
            main: "#D8D8D8",
          },

          background: {
            default: "#D8D8D8",
            paper: "rgba(229, 229, 229, 0.8)",
          },
        }),
  },
  typography: {
    fontFamily: "'Iceland', cursive",
    h1: {
      fontSize: "6rem",
      lineHeight: ".8em",
      fontWeight: "bolder",
    },
    h2: {
      lineHeight: ".8em",
      fontWeight: "bolder",
    },
    h3: {
      fontWeight: "bolder",
    },
    h6: {
      fontSize: "1.3em",
      lineHeight: ".8em",
      letterSpacing: "0.06rem",
      marginBottom: "0.35em",
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: "lighter",
      lineHeight: "1em",
      letterSpacing: "0.01rem",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: "1em",
      letterSpacing: "0.01rem",
    },
    caption: {
      fontSize: ".6rem",
      letterSpacing: ".1rem",
      fontWeight: "bold",
    },
  },
});

function App(props) {
  const colorMode = useColorContext();
  const theme = createTheme(themeMode(colorMode.colorMode));
  const context = useContext(NavContext);

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App">
            <Nav />
    
            <HomeApp />
      
            <AboutApp />
     
            <ProjectsApp />
           
            <ContactApp />
          
            {context.state.tab === "contact" ? null : <ScrollDown />}
            {context.state.tab === "home" ? null : <BackToTop />}
            <Footer />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
