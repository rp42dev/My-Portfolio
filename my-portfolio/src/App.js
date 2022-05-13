import * as React from 'react';
import './App.css';
import HomeApp from './home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { ContextWrapper } from './AppContext.js';
import AboutApp from './about/About';
import ProjectsApp from './projects/Projects';
import ContactApp from './contact/Contact';

if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}


function App() {
  if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js');
  }

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

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


