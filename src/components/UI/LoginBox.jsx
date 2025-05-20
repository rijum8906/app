import {
  loginStart,
  loginSuccess,
  loginFailure
} from './../../features/auth/authSlice';
import axios from './../../api/axios';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './../../validators/authValidator';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material';

const LoginBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(state => state.auth.loading);

  const sendLoginDataToServer = async (url, payload) => {
    try {
      dispatch(loginStart());
      const res = await axios.post(url, payload);
      const token = res.data.data.token;
      const user = JSON.parse(atob(token.split('.')[1]));

      dispatch(loginSuccess(token));
      toast.success('Logged in successfully!');
      navigate('/');
    } catch (err) {
      dispatch(loginFailure());
      toast.error(
        err.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: { emailOrUsername: '', password: '', remember: false },
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async data => {
    const { emailOrUsername, password } = data;

    const isEmail = emailOrUsername.includes('@');
    const payload = {
      password,
      ...(isEmail
        ? { email: emailOrUsername.toLowerCase() }
        : { username: emailOrUsername.toLowerCase() })
    };
    await sendLoginDataToServer('/auth/login', payload);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        maxWidth: 400,
        mx: 'auto',
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
          fontWeight: 600,
          background: 'linear-gradient(to right, #8e24aa, #3949ab)',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}
      >
        {' '}
        Log In{' '}
      </Typography>
      <TextField
        fullWidth
        label="Username or Email"
        variant="outlined"
        {...register('emailOrUsername')}
        error={Boolean(errors.emailOrUsername)}
        helperText={errors.emailOrUsername?.message}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        {...register('password')}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <FormControlLabel
        control={<Checkbox {...register('remember')} />}
        label="Remember me"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
        disabled={isSubmitting || loading}
        startIcon={(isSubmitting || loading) && <CircularProgress size={20} />}
      >
        {isSubmitting || loading ? 'Signing in...' : 'Sign In'}
      </Button>
      <Box display="flex" justifyContent="center" mt={2}>
        <GoogleLogin
          onSuccess={async data => {
            await sendLoginDataToServer('/auth/continue-with-google', {
              token: data.credential
            });
          }}
        />
      </Box>
      <Typography variant="body2" align="center" mt={2}>
        Don't have an account?{' '}
        <Link
          to="/register"
          style={{ color: '#7b1fa2', textDecoration: 'none', fontWeight: 500 }}
        >
          Register
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginBox;
