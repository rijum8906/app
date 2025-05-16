import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { navbarLinks } from "./../../config/routes";
import { useLocation, Link } from "react-router-dom";
import { logout } from "./../../features/auth/authSlice";
import { toast } from "react-toastify";
import axios from "./../../api/axios"

const MainNavbar = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  
  const user = token ? JSON.parse(atob(token.split(".")[1])) : null;

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

  // Registered Users
  const logoutHandler = async () => {
    const res = await axios.post("/auth/logout");
    if(res.data?.status){
      dispatch(logout());
      toast.success("Logged out successfully.");
    } else {
      toast.error(res.error?.data?.message || "Couldn't logged out.");
    }
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} to="/">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img={user ? user?.avatarURL : 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
          } rounded />}>
            <DropdownHeader>
              <span className="block text-sm">{user?.firstName+" "+user?.lastName || "User"}</span>
              <span className="block truncate text-sm font-medium">{user?.email || "user@example.com"}</span>
            </DropdownHeader>
            <DropdownItem as={Link} to="/my-account">
              My Account
            </DropdownItem>
            <DropdownItem as={Link} to="/my-account/settings">
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
