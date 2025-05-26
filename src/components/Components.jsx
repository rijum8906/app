import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const A = ({ children, to, ...rest }) => {
  return (
    <Link to={to}>
      <Button {...rest} variant="text" sx={{ px:2 }}>
        {children}
      </Button>
    </Link>
  );
};

export const CustomButton = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  );
};

export const CustomBox = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};
