import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import { useSelector } from "react-redux";
import LoginPopup from "./../partials/LoginPopup";

export default function NavbatComponent() {
  const user = useSelector((state) => state.auth.user);
  console.log(!!user);
  // State to manage user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);
  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsOpenLoginPopup(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar fluid rounded>
        {/* Navbar Brand (Logo) */}
        <Navbar.Brand href="/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MyApp</span>
        </Navbar.Brand>

        {/* Navbar Links */}
        <div className="flex md:order-2">
          {isLoggedIn ? (
            // User Dropdown (Logged In)
            <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
              <Dropdown.Header>
                <span className="block text-sm">John Doe</span>
                <span className="block truncate text-sm font-medium">john.doe@example.com</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            // Login Button (Logged Out)
            <Button gradientMonochrome="info" pill>
              <Link to="/signin">Signin</Link>
            </Button>
          )}
          <Navbar.Toggle />
        </div>

        {/* Navbar Links (Collapsible) */}
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <LoginPopup open={isOpenLoginPopup} />
    </>
  );
}
