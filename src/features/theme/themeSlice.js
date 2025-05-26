import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'main',
  mode: 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: state => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});

export const { toggleMode, changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
