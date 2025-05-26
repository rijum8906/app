import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// --- Layouts ---
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import SettingsLayout from './layouts/SettingsLayout';

// --- Lazy Loaded Page ---
const PageNotFoundComp = lazy(() => import('./components/404Page'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const GeneralSettings = lazy(() => import('./pages/settings/GeneralSettings'));

function AppRoutes() {
  return (
    <Routes>
      {/* --- SettingsLayout --- */}
      <Route path="/settings" element={<SettingsLayout />}>
        <Route index element={<Navigate to="general" />} />
        <Route path="general" element={<GeneralSettings />} />
      </Route>

      {/* --- AuthLayout --- */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* --- MainLayout --- */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<PageNotFoundComp />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
