// AppRoutes.jsx
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Loader } from '../components/UI';
import {
  MainLayout,
  AdminLayout,
  LayoutForUnregistered
} from './../components/layout/AppLayout';
import { PrivateRoutes, AdminRoutes } from './PrivateRoutes';
import { lazy, Suspense } from 'react';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Error404 = lazy(() => import('../pages/Error404'));
const UserAccount = lazy(() => import('../pages/UserAccount'));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Routes>
            <Route element={<LayoutForUnregistered />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<Error404 />} />
            </Route>

            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/my-account" element={<UserAccount />} />
              <Route path="/*" element={<Error404 />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
