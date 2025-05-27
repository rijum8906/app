import { Button } from "@mui/material";
import GoogleIcon from "./../assets/google-logo.png";


export const GoogleAuthButton = ({text = "Continue With Google", ...rest}) => {
  return (
    <>
      <Button
      variant="outlined"
      sx={{
        width: "100%",
        py: 1,
        '& img': {
          height: 25,
          width: 25
        }
      }} {...rest}
      endIcon={<img src={GoogleIcon} />}
      >
        {text}
      </Button>
    </>
  )
}