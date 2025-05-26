import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = ({ text = 'Loading...', fullPage = false }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <CircularProgress size={50} thickness={5} color="primary" />
      {text && (
        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Loader;
