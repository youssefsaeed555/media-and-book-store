import { createSlice } from "@reduxjs/toolkit";

export const userAuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    author: "Youssef",
  },
  reducers: {
    loggedInOut: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { loggedInOut } = userAuthSlice.actions;
