import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { Box, Button } from "@mui/material";
import Alert from "./../../../components/Alert";
import { useState } from "react";
import axios from "./../../../config/axios";
import { startLoading, loginSuccess } from "./../authSlice";
import { useDispatch } from "react-redux";

const GoogleAuthButton = () => {
  const dispatch = useDispatch();
  const [alertContent, setAlertContent] = useState(undefined);
  
  const handleAlertClose = () => setAlertContent(undefined);
  
  const googleLogin = useGoogleLogin({
    onSuccess: async function(response){
      dispatch(startLoading());
    
      const res = await axios.post("/auth/continue-with-google", {
        body: {
          token: response.credential
        }
      });
      if(res.data.success){
        dispatch(loginSuccess(data.data.token));
        setAlertContent({
          title: "Login successful."
        })
      } else {
        setAlertContent({
          title: "Login failed."
        });
      }
      },
      onError: async () => {
        
      }
  })
  
  return (
    <>
      <Box>
        <Button
        onClick={googleLogin}
        >
          Continue With Google
        </Button>
      </Box>
      <Alert
      opne={Boolean(alertContent)}
      onClose={handleAlertClose}
      title={alertContent?.title}
      description= {alertContent?.description}
      />
    </>
  )
}

export default GoogleAuthButton;