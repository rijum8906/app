import AppRoutes from './AppRoutes';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
