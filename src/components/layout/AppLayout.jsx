import { MainNavbar, MainFooter, AdminNavbar } from "./";
import { PrivateRoutes, AdminRoutes } from "./../../routes/PrivateRoutes"
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
        <MainNavbar />
        <Outlet />
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

export { MainLayout, AdminLayout };
