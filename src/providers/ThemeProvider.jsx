import { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { generateTheme } from './../utils/themeGenrator';
import { useSelector } from 'react-redux';

const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

const ThemeModeProvider = ({ children, colors }) => {
  const { mode } = useSelector(state => state.theme);

  const theme = useMemo(
    () =>
      generateTheme({
        mode,
        primary: colors?.primary || '#AB4459',
        secondary: colors?.secondary || '#7c08b7',
        background: colors?.background || '#AB4459'
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
