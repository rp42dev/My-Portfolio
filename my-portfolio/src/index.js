import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: { fontFamily : '"Roboto", sans-serif' },
    btn: { fontFamily : '"Roboto", sans-serif' },
    fontFamily: ['Roboto', 'sans-serif',].join(','),
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#E5E5E5',
    },
    secondary: {
      main: '#C06800',
    },
  },

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    < ThemeProvider theme = {theme}>
    <App />
    </ThemeProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
