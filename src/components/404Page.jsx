import { Box, Typography, Button } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'background.default',
        color: 'text.primary',
        px: 2
      }}
    >
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100, mb: 2, color: 'primary.main' }} />
      
      <Typography variant="h3" fontWeight={700} gutterBottom>
        404 - Page Not Found
      </Typography>

      <Typography variant="h6" mb={4} maxWidth="sm">
        Oops! The page you're looking for doesn't exist or has been moved.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        size="large"
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFoundPage;