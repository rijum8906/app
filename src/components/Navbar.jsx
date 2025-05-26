import {
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Icons ---
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';

// --- Redux ---
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from './../features/theme/themeSlice';

const Navbar = () => {
  const { token } = useSelector(state => state.auth);
  const { mode } = useSelector(state => state.theme);

  const [mobileOpen, setMobileOpen] = useState(false);

  // Redux
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleThemeMode = () => {
    dispatch(toggleMode());
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 5,
          position: 'sticky',
          top: 8,
          left: '2.5%',
          width: '95%',
          zIndex: 2,
          boxShadow: 'none'
        }}
      >
        <Box sx={{ gap: 3, py: 1, px: 3 }} display="flex" alignItems="center">
          <IconButton onClick={toggleSidebar} color="inherit" edge="start">
            <MenuRoundedIcon />
          </IconButton>

          <Typography flexGrow={1} variant="h6" noWrap>
            {WEBSITE_NAME}
          </Typography>

          <IconButton color="inherit" onClick={toggleThemeMode}>
            {mode === 'light' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
          </IconButton>

          {token ? (
            <Button startIcon={<LoginRoundedIcon />} color="onPrimary" size="large" variant="outlined">
              Avatar
            </Button>
          ) : (
            <Button color="primary" startIcon={<LoginRoundedIcon />} variant="outlined">
              Login
            </Button>
          )}
        </Box>
      </Box>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { 
            width: 280,
            boxSizing: 'border-box' 
          },
            zIndex: 2,
            borderRadius: 10 
        }}
      >
        <Box
          sx={{
            width: 280,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            py: 2,
            borderRadius: 10
          }}
        >
          <NavLinksForSM isLoggedIn={Boolean(token)} onClick={toggleSidebar} />
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
