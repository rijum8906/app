import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import axios from "./api/axios"

function App() {
  const { token } = useSelector((state) => state.auth);
  if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <AppRoutes />
      <ToastContainer position="bottom-right" />
    </GoogleOAuthProvider>
  );
}

export default App;