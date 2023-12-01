import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../thunks/userThunk.js/fetchUser";
import { createUser } from "../thunks/userThunk.js/addUser";
import { deleteUser } from "../thunks/userThunk.js/deleteUser";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //getUsers
    [getUsers.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [createUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteUser.fulfilled]: (state, action) => {
      const filterUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      state.users = filterUsers;
    },
  },
});
