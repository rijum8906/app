import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  error: null,
  loading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.loading = false;
    },
    logout: state => {
      state.token = null;
      state.loading = false;
    },
    loginFailure: (state, error) => {
      state.error = action.payload;
    }
  }
});

export const { startLoading, loginSuccess, logout, loginFailure } = authSlice.actions;
export default authSlice.reducer;
