import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const Error404 = lazy(() => import('./Error404'));
const UserAccount = lazy(() => import('./UserAccount'));

export { Home, Login, Register, Error404, UserAccount };
