import React from 'react';
import { useSelector } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const ThemeProviderWrapper = ({ children }) => {
  const mode = useSelector(state => state.theme.mode);

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9'
      },
      secondary: {
        main: mode === 'light' ? '#ff4081' : '#f48fb1'
      },
      background: {
        default: mode === 'light' ? '#f5f7fa' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e'
      },
      text: {
        primary: mode === 'light' ? '#1e1e1e' : '#ffffff',
        secondary: mode === 'light' ? '#555' : '#b0bec5'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
