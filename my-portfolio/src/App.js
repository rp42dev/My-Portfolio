import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { NavContext } from "./components/nav/NavContext";
import { useColorContext }  from "./ColorContext";
import "./App.css";

import HomeApp from "./home/Home";
import AboutApp from "./about/About";
import ProjectsApp from "./projects/Projects";
import ContactApp from "./contact/Contact";
import Footer from "./components/footer/FooterComponent";
import Nav from "./components/nav/Nav";
import ScrollDown from "./components/nav/buttons/ScrollDown";
import BackToTop from "./components/nav/buttons/BackToTop";


function App() {
  const colorMode = useColorContext();
  const context = useContext(NavContext);

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ThemeProvider theme={colorMode.theme}>
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
    </>
  );
}

export default App;
