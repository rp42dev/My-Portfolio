import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E5E5E5',
      dark: '#C5C5C5',
      contrastText: '#E9E9E9',
    },
    secondary: {
      main: '#b37142',
    },
    dark: {
      main: '#141415',
    },
  },
  typography: {
    h1: { fontFamily: '"Roboto", sans-serif' },
    h6: {
      fontSize: '1.3rem',
      '@media (min-width:400px)': {
        fontSize: '1.4rem',
      },
      fontFamily: '"Roboto", sans-serif'
    },
    h2: {
      fontSize: '3rem',
      '@media (min-width:400px)': {
        fontSize: '4rem',
      },
      fontFamily: '"Roboto", sans-serif'
    },
    body1: {
      fontSize: '.9rem',
      '@media (min-width:400px)': {
        fontSize: '1.2rem',
      },
    },
    body2: {
      fontSize: '.9rem',
      '@media (min-width:400px)': {
        fontSize: '1.1rem',
      },
    },
    caption: {
      fontSize: '.6rem',
      letterSpacing: '0.1rem',
      fontWeight: 'bolder',
    },
    btn: { fontFamily: '"Roboto", sans-serif' },
    fontFamily: ['Roboto', 'sans-serif',].join(','),
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    < ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.Fragment>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
