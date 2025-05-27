import { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { generateTheme } from './../utils/themeGenrator';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from "./../features/theme/themeSlice";

const ThemeModeContext = createContext();

export const useTheme = () => useContext(ThemeModeContext);

const ThemeModeProvider = ({ children, colors }) => {
  const { mode } = useSelector(state => state.theme);
  const dispatch = useDispatch();

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
    <ThemeModeContext.Provider value={{ toggleTheme: () => dispatch(toggleMode()), mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
