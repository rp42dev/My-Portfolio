import * as React from 'react';
import './App.css';
import HomeApp from './home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import AboutApp from './about/About';
import ProjectsApp from './projects/Projects';
import ContactApp from './contact/Contact';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="App">   
          <HomeApp />
          <AboutApp />
          <ProjectsApp />
          <ContactApp />
      </Container>
    </React.Fragment>

  );
}

export default App;


