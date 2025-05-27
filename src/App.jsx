import AppRoutes from './AppRoutes';
import ThemeProvider from './providers/ThemeProvider';
import AuthProvider from "./providers/AuthProvider";

const config = {
  googleClientId: "877754789380-g3b58he48vfp7s2ugfnbselc3i8nkh4u.apps.googleusercontent.com"
}

function App() {
  return (
    <>
      <AuthProvider config={config}>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
