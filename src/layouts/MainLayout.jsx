import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

// Loader Component
import Loader from "./../components/Loader";

// Lazy Loading Component
const Navbar = lazy(() => import("./../components/Navbar"))

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Outlet />
      </Suspense>
    </>
    )
}

export default MainLayout;