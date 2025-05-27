import { Box, TextField, Button, Typography, Paper, InputAdornment, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { startLoading, loginSuccess, loginFailure } from './../authSlice';
import { useAuth } from "./../../../providers/AuthProvider"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { GoogleAuthButton } from "./../../../components/AuthButtons";
import { showAlert } from "./../../../components/customs/GlobalAlert";

// Zod schema
const schema = z.object({
  identifier: z.string().min(3, 'Email or username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

const LoginPage = () => {
  const { loading, login, googleAuth, promptGoogleAuth } = useAuth();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = data => {
    dispatch(startLoading());
    console.log('Login submitted:', data);
    // Handle actual login logic
  };
  
  const handleGoogleAuth = data => {
    showAlert("Hey there", "error")
    promptGoogleAuth();
  }

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: theme => theme.palette.background.default, px: 2 }}
    >
      <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: 400, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={600} mb={2} textAlign="center">
          Sign In to Your Account
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Email or Username"
            fullWidth
            margin="normal"
            {...register('identifier')}
            error={!!errors.identifier}
            helperText={errors.identifier?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              )
            }}
          />
          {loading ? (
            <Button
              variant="outlined"
              fullWidth
              size="large"
              startIcon={<CircularProgress size={20} thickness={4} color="primary" />}
            >
              Login
            </Button>
          ) : (
            <Button variant="contained" fullWidth size="large" type="submit">
              Login
            </Button>
          )}
        </form>
        <Box sx={{
          mt: 3,
          '& *': {
            borderRadius: 1
          }
        }}>
          <GoogleAuthButton onClick={handleGoogleAuth}/>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
