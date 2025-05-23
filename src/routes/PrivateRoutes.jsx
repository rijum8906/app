import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const { user } = useSelector(state => state.auth);

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

const AdminRoutes = () => {
  const { user } = useSelector(state => state.auth);

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export { AdminRoutes, PrivateRoutes };
