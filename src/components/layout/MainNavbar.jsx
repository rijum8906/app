import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { navbarLinks } from "./../../config/routes";
import { useLocation, Link } from "react-router-dom";
import { logout } from "./../../features/auth/authSlice";

const MainNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  // Filter links based on authentication status
  const filteredLinks = navbarLinks.filter((link) => {
    if(link.registeredOnly && user){
      return true;
    }
    if(link.unRegisteredOnly && !user){
      return true;
    } 
    if(!link.registeredOnly && !link.unRegisteredOnly){
      return true;
    }
  });

  // Unregistered user
  console.log(user.profileInfo.avatarURL)

  // Registered Users
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} to="/">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img={user ? user.profileInfo.avatarURL.substr(0,user.profileInfo.avatarURL.length - 6 ) : 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
          } rounded />}>
            <DropdownHeader>
              <span className="block text-sm">{user.profileInfo.firstName+" "+user.profileInfo.lastName || "User"}</span>
              <span className="block truncate text-sm font-medium">{user.email || "user@example.com"}</span>
            </DropdownHeader>
            <DropdownItem as={Link} to="/dashboard">
              Dashboard
            </DropdownItem>
            <DropdownItem as={Link} to="/settings">
              Settings
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={logoutHandler}>Log out</DropdownItem>
          </Dropdown>
        ) : (
          <Button as={Link} to="/login" gradientDuoTone="purpleToBlue" size="md" outline>
            Login
          </Button>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {filteredLinks.map((link) => (
          <NavbarLink key={link.path} as={Link} to={link.path} active={location.pathname === link.path}>
            {link.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export default MainNavbar;
