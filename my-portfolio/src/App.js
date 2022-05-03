import * as React from 'react';
import './App.css';
import HomeApp from './home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { ContextWrapper } from './AppContext.js';
import AboutApp from './about/About';
import ProjectsApp from './projects/Projects';
import ContactApp from './contact/Contact';



function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ContextWrapper>
        <div className="App">
          
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


