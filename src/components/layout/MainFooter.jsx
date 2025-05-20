import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  const COMPANY_NAME =
    process.env.COMPANY_NAME || process.env.WEBSITE_NAME || 'Your Company';
  const WEBSITE_LINK = process.env.WEBSITE_LINK || 'http://localhost:5173';
  const YOUR_NAME = process.env.YOUR_NAME || 'Riju Mondal';
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800]
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          Made with love by{' '}
          <Link href={WEBSITE_LINK} target="_blank" underline="hover">
            {YOUR_NAME}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
