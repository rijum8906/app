import { createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, loginSuccess, loginFailure } from './../features/auth/authSlice';
import { jwtDecode } from 'jwt-decode';
import axios from './../config/axios';

const AuthContext = createContext();

// Custom hook to consume context
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children, config }) => {
  const dispatch = useDispatch();
  const { loading, token, messages } = useSelector((state) => state.auth);
  let user = null;
  const { googleClientId } = config;
  console.log(googleClientId)
  
  const google = window.google;
  google.accounts.id.initialize({
    client_id: googleClientId,
    callback: async (googleRes) => {
      try {
      const res = await axios.post('/auth/continue-with-google', {token: googleRes.credential});

      if (res.data.success) {
        dispatch(loginSuccess(res.data));
      } else {
        dispatch(loginFailure(res.data.message || 'Login failed'));
      }
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || 'Login error'));
    }
    }
  });
  
  if (token) {
    try {
      user = jwtDecode(token);
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }

  const login = async (userCredentials) => {
    dispatch(startLoading());
    try {
      const res = await axios.post('/auth/login', userCredentials);

      if (res.data.success) {
        dispatch(loginSuccess(res.data.data));
      } else {
        dispatch(loginFailure(res.data.message || 'Login failed'));
      }
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || 'Login error'));
    }
  };
  
  const promptGoogleAuth = google.accounts.id.prompt;
  
  const googleAuth = async () => {
    
  }

  return (
    <AuthContext.Provider value={{ promptGoogleAuth, token, user, loading, login, messages }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;