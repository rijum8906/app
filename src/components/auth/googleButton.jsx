import { GoogleLogin } from '@react-oauth/google';
import axios from '../../api/axios';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';

const GoogleLoginButton = () => {
  const dispatch = useDispatch();

  const handleSuccess = async (credentialResponse) => {
    try {
      dispatch(loginStart());

      const res = await axios.post("/auth/continue-with-google", {
        token: credentialResponse.credential,
      });

      console.log(res)
      const token = res.data.data.token;
      const user = JOSN.parse(atob(token.slpit(".")[1]));

      dispatch(loginSuccess({
        token,
        user
      }));
      toast.success("Logged in with Google!");
    } catch (err) {
      dispatch(loginFailure());
      toast.error(err.response?.data?.message || "Google login failed.");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => toast.error("Google Sign-In failed")}
    />
  );
};

export default GoogleLoginButton