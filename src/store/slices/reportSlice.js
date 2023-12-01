import { createSlice } from "@reduxjs/toolkit";

export const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    logs: [],
  },
  reducers: {
    logging: (state, action) => {
      state.logs.push(action.payload);
    },
  },
});

export const { logging } = reportsSlice.actions;
