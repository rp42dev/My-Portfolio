import * as React from 'react';
import './App.css';
import HomeApp from './home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { ContextWrapper } from './AppContext.js';
import AboutApp from './about/About';
import ProjectsApp from './projects/Projects';
import ContactApp from './contact/Contact';
import Down from './components/buttons/Down';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ContextWrapper>
        <div className="App">
          <Down />
          <HomeApp />
          <AboutApp />
          <ProjectsApp />

          <ContactApp />
        </div>
      </ContextWrapper>
    </React.Fragment>

  );
}

export default App;


