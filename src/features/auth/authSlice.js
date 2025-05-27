import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  loading: false,
  messages: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: state => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.messages.succees = action.payload.message;
      state.loading = false;
    },
    logout: state => {
      state.token = null;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.messages.error = action.payload;
    }
  }
});

export const { startLoading, loginSuccess, logout, loginFailure } = authSlice.actions;
export default authSlice.reducer;
