import { MainNavbar, MainFooter, AdminNavbar } from "./";
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
      <AdminNavbar />
      <Outlet />
      <MainFooter />
    </>
  );
};

export { MainLayout, AdminLayout };
