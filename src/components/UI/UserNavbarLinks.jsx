import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

const UserNavbarLinks = () => {
  return (
    <List>
      <Link to="/">
        <ListItem>
          <ListItemButton
            sx={{
              gap: 2,
              textWeight: 800
            }}
          >
            <HomeRoundedIcon />
            <ListItemText primary="Home"></ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/inbox">
        <ListItem>
          <ListItemButton
            sx={{
              gap: 2,
              textWeight: 800
            }}
          >
            <MailRoundedIcon />
            <ListItemText primary="Inbox"></ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/about">
        <ListItem>
          <ListItemButton
            sx={{
              gap: 2,
              textWeight: 800
            }}
          >
            <InfoRoundedIcon />
            <ListItemText primary="About"></ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
};

const NavbarLinks = () => {
  return (
    <List>
      <Link to="/">
        <ListItem>
          <ListItemButton
            sx={{
              gap: 2,
              textWeight: 800
            }}
          >
            <HomeRoundedIcon />
            <ListItemText primary="Home"></ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/login">
        <ListItem>
          <ListItemButton
            sx={{
              gap: 2,
              textWeight: 800
            }}
          >
            <LoginRoundedIcon />
            <ListItemText primary="Login"></ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/register">
        <ListItem>
          <ListItemButton
            sx={{
              gap: 2,
              textWeight: 800
            }}
          >
            <AppRegistrationRoundedIcon />
            <ListItemText primary="Register"></ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/about">
        <ListItem>
          <ListItemButton
            sx={{
              gap: 2,
              textWeight: 800
            }}
          >
            <InfoRoundedIcon />
            <ListItemText primary="About"></ListItemText>
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
};

export { UserNavbarLinks, NavbarLinks };
