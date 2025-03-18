// src/features/auth/Login.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulate a login API call
    const user = { username };
    dispatch(login(user));
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
