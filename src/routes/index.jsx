import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { Loader } from "../components/UI";
import { MainLayout, AdminLayout } from "../components/layout";
import { PrivateRoutes, AdminRoutes } from "./PrivateRoutes";

// Lazy-loaded pages
import { Home, Login, Register, Error404 } from "./../pages";

// Using createBrowserRouter (recommended approach in v6.4+)
const router = createBrowserRouter([
  // Main routes
  {
    path: "/login",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader fullScreen />}>
          <Login />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader fullScreen />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader fullScreen />}>
        <PrivateRoutes>
          <MainLayout />
        </PrivateRoutes>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },

  // Admin routes
  {
    path: "/admin",
    element: (
      <Suspense fallback={<Loader fullScreen />}>
        <AdminRoutes>
          <AdminLayout />
        </AdminRoutes>
      </Suspense>
    ),
    children: [],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
