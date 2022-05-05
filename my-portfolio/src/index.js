import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: { fontFamily: '"Roboto", sans-serif' },
    h6: {
      fontSize: '1rem',
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
      fontSize: '.7rem',
      '@media (min-width:400px)': {
        fontSize: '1rem',
      },
    },
    body2: {  
      fontSize: '.7rem',
      '@media (min-width:400px)': {
        fontSize: '1rem',
      },
    },
    btn: { fontFamily: '"Roboto", sans-serif' },
    fontFamily: ['Roboto', 'sans-serif',].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#E5E5E5',
    },
    secondary: {
      main: '#C06800',
    },
    dark: {
      main: '#1C1C1C',
    },
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
