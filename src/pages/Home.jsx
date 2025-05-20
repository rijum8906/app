import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { Star, Lock, Speed } from '@mui/icons-material';

const features = [
  {
    icon: <Star fontSize="large" color="primary" />,
    title: 'Quality',
    description: 'High-quality components built for performance and clarity.'
  },
  {
    icon: <Lock fontSize="large" color="primary" />,
    title: 'Security',
    description: 'Secure and private authentication with modern standards.'
  },
  {
    icon: <Speed fontSize="large" color="primary" />,
    title: 'Speed',
    description: 'Lightning-fast experience with optimized performance.'
  }
];

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(to right, #8e24aa, #3949ab)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Welcome to YourApp
          </Typography>
          <Typography variant="h6" color="white" gutterBottom>
            Build modern, scalable apps with ease.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3 }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} mt={1}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card elevation={3} sx={{ textAlign: 'center', py: 4 }}>
                <CardContent>
                  {feature.icon}
                  <Typography variant="h6" fontWeight={600} mt={2}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Ready to explore?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Sign in or create an account to get started with YourApp.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Join Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
