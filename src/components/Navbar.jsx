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
  Box,
  Avatar
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinksForSM } from "./NavLinks"

// --- Icons ---
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';

// --- Custom Hooks ---
import { useAuth } from "./../providers/AuthProvider";
import { useTheme } from "./../providers/ThemeProvider";

// --- Redux ---
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from './../features/theme/themeSlice';

const Navbar = () => {
  const { token, user } = useAuth();
  const { mode, toggleTheme } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  // Redux
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleThemeMode = () => {
    toggleTheme();
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
            <Avatar src={user.profile.avatarURL} alt={user.username} />
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
