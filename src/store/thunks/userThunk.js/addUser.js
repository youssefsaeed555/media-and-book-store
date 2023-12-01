import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import axios from "axios";
const BASEURL = "https://rtk-apis.onrender.com";

export const createUser = createAsyncThunk(
  "users/addUser",
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post(BASEURL, {
        name: faker.name.fullName(),
      });
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
