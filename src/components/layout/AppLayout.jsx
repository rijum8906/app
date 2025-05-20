import { MainNavbar, MainFooter, AdminNavbar } from './';
import { PrivateRoutes, AdminRoutes } from './../../routes/PrivateRoutes';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './../UI/Loader';

const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <MainFooter />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <AdminRoutes>
        <AdminNavbar />
        <Outlet />
        <MainFooter />
      </AdminRoutes>
    </>
  );
};

const LayoutForUnregistered = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export { MainLayout, AdminLayout, LayoutForUnregistered };
