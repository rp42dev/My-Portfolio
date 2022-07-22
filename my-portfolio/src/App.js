import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCallback, useContext} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { InView } from "react-intersection-observer";

import { NavContext } from "./components/nav/NavContext";
import { useColorContext } from "./ColorContext";
import "./App.css";

import HomeApp from "./home/Home";
import AboutApp from "./about/About";
import ProjectsApp from "./projects/Projects";
import ContactApp from "./contact/Contact";
import Footer from "./components/footer/FooterComponent";
import Nav from "./components/nav/Nav";
import ScrollDown from "./components/buttons/ScrollDown";
import BackToTop from "./components/buttons/BackToTop";

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
      letterSpacing: "0.01rem",
    },
    body2: {
      fontSize: "1rem",
      letterSpacing: "0.01rem",
    },
    caption: {
      fontSize: ".6rem",
      letterSpacing: ".1rem",
      fontWeight: "bold",
    },
  },
});

function App() {
  const colorMode = useColorContext();
  const theme = createTheme(themeMode(colorMode.colorMode));
  const navState = useContext(NavContext);
  const context = useContext(NavContext);

  const ChangePage = useCallback(
    (page) => {
      if (page) {
        console.log(page);
        navState.actions.changePage(page);
      }
    },
    [navState.actions]
  );

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App">
            <Nav />

            <InView
              as="div"
              threshold={0.4}
              onChange={(inView) => inView && ChangePage("home", inView)}
            >
              <HomeApp />
            </InView>

            <InView
              as="div"
              threshold={0.5}
              onChange={(inView) => inView && ChangePage("about", inView)}
            >
              <AboutApp />
            </InView>

            <InView
              as="div"
              threshold={0.1}
              onChange={(inView) => inView && ChangePage("projects", inView)}
            >
              <ProjectsApp />
            </InView>

            <InView
              as="div"
              threshold={0.3}
              onChange={(inView) => inView && ChangePage("contact", inView)}
            >
              <ContactApp />
            </InView>
            <ScrollDown />
            <BackToTop />
            <Footer />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
