import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const A = ({ children, to, ...rest }) => {
  return (
    <Typography
      component={Link}
      to={to}
      sx={{ textDecoration: "underline" }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export const CustomButton = ({ children, ...rest }) => {
  return (
    <Button disableRipple disableFocusRipple {...rest}>
      {children}
    </Button>
  );
};

export const CustomBox = ({children,  ...rest}) => {
  return (
    <Box {...rest}>
      {children}
    </Box>
  );
}