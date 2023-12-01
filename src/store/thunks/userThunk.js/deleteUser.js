import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASEURL = "https://rtk-apis.onrender.com/users";

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await axios.delete(`${BASEURL}/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
