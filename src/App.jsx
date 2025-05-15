import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import AppRoutes from "./routes/index.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRoutes />
          <ToastContainer position="bottom-right" />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
