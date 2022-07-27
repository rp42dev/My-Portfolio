import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { ContextWrapper } from "./components/nav/NavContext.js";
import { ColorContextProvider } from "./ColorContext";
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ColorContextProvider>
      <ContextWrapper>
          <App />
      </ContextWrapper>
    </ColorContextProvider>
  </React.Fragment>
);

serviceWorkerRegistration.register();

reportWebVitals();
