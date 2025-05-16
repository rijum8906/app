// AppRoutes.jsx
import { Suspense } from "react";
import { Routes, Route, BrowserRouter,Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { Loader } from "../components/UI";
import { MainLayout, AdminLayout } from "./../components/layout/AppLayout";
import { PrivateRoutes, AdminRoutes } from "./PrivateRoutes";
import { Home, Login, Register, Error404, UserAccount } from "../pages";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route element={<MainLayout />} >
              <Route index element={<Home />} />
              <Route path="/my-account" element={<UserAccount />} >
                
              </Route>
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;