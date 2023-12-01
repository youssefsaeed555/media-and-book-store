import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASEURL = "https://rtk-apis.onrender.com/posts";

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (item, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await axios.delete(`${BASEURL}/${item.id}`);
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
