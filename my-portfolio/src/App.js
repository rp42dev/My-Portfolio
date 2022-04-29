import * as React from 'react';
import './App.css';
import HomeApp from './Home';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import AboutApp from './About';
import ProjectsApp from './Projects';
import ContactApp from './Contact';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <div className="App">
          <HomeApp />
          <AboutApp />
          <ProjectsApp />
          <ContactApp />
        </div>
      </Container>
    </React.Fragment>

  );
}

export default App;


