export const navbarLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/pricing", label: "Pricing", registeredOnly: true }, // Only shows when logged in
  { path: "/login", label: "Login" },
  { path: "/register", label: "Register", unRegisteredOnly: true }, // Only shows when NOT logged in
  { path: "/dashboard", label: "Dashboard", registeredOnly: true }, // Only shows when logged in
];
