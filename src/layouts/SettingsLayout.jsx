import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Paper } from '@mui/material';

// Loader Component
import Loader from './../components/Loader';

// Lazy loaded Component
const SettingsSidebar = lazy(() => import('./../components/settings/SettingsSidebar'));

const SettingsLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            height: '100vh'
          }}
        >
          <Paper
            elevation={4}
            sx={{
              bgcolor: 'background.paper',
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0
            }}
          >
            <SettingsSidebar />
          </Paper>
          <Paper
            sx={{
              flexGrow: 1,
              boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.2)',
              bgcolor: 'background.paper',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20
            }}
          >
            <Outlet />
          </Paper>
        </Paper>
      </Suspense>
    </>
  );
};

export default SettingsLayout;
