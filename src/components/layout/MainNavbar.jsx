import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Tooltip,
  Divider,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { logout } from './../../features/auth/authSlice';
import { toggleTheme } from './../../features/theme/themeSlice';
import { toast } from 'react-toastify';
import axios from './../../api/axios';
import { useState } from 'react';

import Brightness4RoundedIcon from '@mui/icons-material/Brightness4';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7';
import MenuRoundedIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/Home';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

import { UserNavbarLinks, NavbarLinks } from './../UI/UserNavbarLinks';

const MainNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.auth);
  const { mode } = useSelector(state => state.theme);
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleAppNavDrawer = () => {
    setMobileOpen(prevState => !prevState);
  };

  const user = token ? JSON.parse(atob(token.split('.')[1])) : null;

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = async () => {
    const res = await axios.post('/auth/logout');
    if (res.data?.status) {
      dispatch(logout());
      toast.success('Logged out successfully.');
      navigate('/');
    } else {
      toast.error(res.error?.data?.message || "Couldn't log out.");
    }
    handleCloseUserMenu();
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar
        sx={{
          gap: 3
        }}
      >
        {/* --- Menu Icon ---  */}
        <IconButton
          area-label="menu"
          color="inherit"
          onClick={toggleAppNavDrawer}
        >
          <MenuRoundedIcon />
        </IconButton>

        {/* --- App Name ---  */}
        <Typography flexGrow={1}>Fistrax</Typography>

        {/*  --- Navigate Bar --- */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleAppNavDrawer}
          ModalProps={{
            keepMounted: true
          }}
        >
          <Box
            sx={{
              width: 200
            }}
          >
            {user ? <UserNavbarLinks /> : <NavbarLinks />}
          </Box>
        </Drawer>

        {/* --- Toggle Mode --- */}
        <Box>
          {mode === 'light' ? (
            <IconButton color="inherit" onClick={handleToggleTheme}>
              <Brightness4RoundedIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={handleToggleTheme}>
              <Brightness7RoundedIcon />
            </IconButton>
          )}
        </Box>

        {/* --- Login Button or Avatar --- */}
        <Box>
        {user ? (
            <Avatar src={user.avatarURL} alt={user.username}/>
        ) : (
            <Button variant="contained" startIcon={<LoginRoundedIcon />}>
              <Link to="/login">Login</Link>
            </Button>
        )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
