import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASEURL = "https://rtk-apis.onrender.com/users";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(BASEURL);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
