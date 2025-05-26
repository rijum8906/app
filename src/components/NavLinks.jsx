import { navLinks, registeredNavLinks } from './../config/navLinks';
import { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavLinksForSM = ({ isLoggedIn, onClick = () => {} }) => {
  const filteredNavLinks = isLoggedIn ? registeredNavLinks : navLinks;
  return (
    <Box sx={{ width: 300, paddingTop: 2 }}>
      <List>
        {filteredNavLinks.map(link => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton component={Link} to={link.path} onClick={onClick}>
              {/* Render icon if available */}
              {link.icon && <ListItemIcon sx={{ minWidth: 40 }}>{<link.icon />}</ListItemIcon>}
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const NavLinksForLG = ({ isLoggedIn }) => {
  const filteredNavLinks = isLoggedIn ? registeredNavLinks : navLinks;
  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'flex' },
        gap: 2
      }}
    >
      {filteredNavLinks.map(link => (
        <Button
          key={link.label}
          component={Link}
          to={link.path}
          color="inherit"
          startIcon={link.icon ? <link.icon /> : null}
        >
          {link.label}
        </Button>
      ))}
    </Box>
  );
};
