import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASEURL = "https://rtk-apis.onrender.com/posts";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const data = await axios.get(BASEURL);
      return data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
