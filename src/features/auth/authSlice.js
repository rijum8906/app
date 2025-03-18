// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toLoginInfo } from "./../../utils/authUtils";

// Check local storage for initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadingStart: (state) => {
      state.loading = true;
    },
    login: async (state, action) => {
      const values = action.payload;
      // Make API call using Axios
      try {
        const response = await axios.post(
          "https://your-api-endpoint.com/login",
          toLoginInfo({
            usernameOrEmail: values.usernameOrEmail,
            password: values.password,
            remember: values.remember,
          }),
        );
        state.data = response.data;
      } catch (error) {
        state.error = error;
      }
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(data)); // Save user to local storage
    },
    logout: async (state) => {
      state.user = null;
      state.loading = false;
      localStorage.removeItem("user"); // Remove user from local storage
    },
  },
});

export const { login, logout, loadingStart } = authSlice.actions;

export default authSlice.reducer;
