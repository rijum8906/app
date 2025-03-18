import React, { useState } from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { login, logout } from "./../features/auth/authSlice";

const App = ({ open }) => {
  // State for modal visibility and login form
  const [showLoginModal, setShowLoginModal] = useState(open);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulate a login action
    dispatch(login({ username }));
    setShowLoginModal(false); // Close the modal after login
    setUsername(""); // Clear the form
    setPassword("");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-4">
      {/* Login Modal */}
      <Modal show={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <TextInput type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <TextInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={handleLogin}>
            Login
          </Button>
          <Button color="gray" onClick={() => setShowLoginModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
