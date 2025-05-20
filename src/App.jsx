import AppRoutes from './routes/index.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import axios from './api/axios';
import ThemeProvider from './providers/ThemeProvider';

function App() {
  const { token } = useSelector(state => state.auth);
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
