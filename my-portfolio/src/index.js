import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ContextWrapper } from './AppContext.js';

const theme = createTheme({
  typography: {
    h1: { fontFamily: '"Roboto", sans-serif' },
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
  },
});

theme.typography.body1 = {
  fontSize: '.7rem',
  '@media (min-width:400px)': {
    fontSize: '.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
};

theme.typography.body2 = {
  fontSize: '.7rem',
  '@media (min-width:400px)': {
    fontSize: '.9rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.1rem',
  },
};


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
