import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

// Loader Component
import Loader from "./../components/Loader";

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
    )
}

export default MainLayout;