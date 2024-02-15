// slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setUsername, setPassword, setLoggedIn } = authSlice.actions;
export default authSlice.reducer;
