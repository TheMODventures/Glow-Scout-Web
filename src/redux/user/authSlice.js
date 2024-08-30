// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    signoutSuccess: (state) => {
      state.user = null;
      state.status = null;
      state.error = null;
      localStorage.removeItem('accessToken')
    },
  },
});

export const { setUser, setStatus, setError , signoutSuccess} = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
