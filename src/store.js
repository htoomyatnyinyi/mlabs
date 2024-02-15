// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./rdx/slice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
