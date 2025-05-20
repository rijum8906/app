import React from 'react';
import axios from './../../api/axios';
import { toast } from 'react-toastify';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './../../validators/authValidator';

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
  Typography,
  Link
} from '@mui/material';

const RegisterBox = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      remember: false
    },
    resolver: zodResolver(registerSchema)
  });

  const handleRegister = async data => {
    const { firstName, lastName, email, username, password } = data;

    try {
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase(),
        username: username.toLowerCase(),
        password
      };

      const res = await axios.post('/auth/register', payload);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleRegister)}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      {' '}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #7e22ce, #2563eb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {' '}
        Register{' '}
      </Typography>
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        {...register('lastName')}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        {...register('username')}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        {...register('confirmPassword')}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <FormControlLabel
        control={<Checkbox {...register('remember')} />}
        label="Remember me"
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        sx={{
          background: 'linear-gradient(to right, #7e22ce, #2563eb)',
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(to right, #6b21a8, #1d4ed8)'
          }
        }}
        disabled={isSubmitting}
        startIcon={
          isSubmitting && <CircularProgress size={20} color="inherit" />
        }
      >
        {isSubmitting ? 'Registering...' : 'Register'}
      </Button>
      <Typography variant="body2" align="center">
        Already have an account?{' '}
        <Link component={RouterLink} to="/login" underline="hover">
          Sign In
        </Link>
      </Typography>
    </Box>
  );
};

export default RegisterBox;
