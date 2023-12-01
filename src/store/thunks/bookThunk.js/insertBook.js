import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logging } from "../../slices/reportSlice";

const BASEURL = "https://rtk-apis.onrender.com/posts";

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (args, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    //getState help me to get state from global store
    const { author } = getState().auth;
    try {
      const { data } = await axios.post(BASEURL, { ...args, author });
      // dispatch(deleteBook({ id: 3 }));
      dispatch(logging({ name: "insertBook", status: "success" }));
      return data;
    } catch (error) {
      dispatch(logging({ name: "insertBook", status: "failed" }));
      return rejectWithValue(error.message);
    }
  }
);
