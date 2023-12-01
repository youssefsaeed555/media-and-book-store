import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../thunks/bookThunk.js/getBooks";
import { insertBook } from "../thunks/bookThunk.js/insertBook";
import { deleteBook } from "../thunks/bookThunk.js/deleteBook";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    //getBooks
    [getBooks.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //insetBook
    [insertBook.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
    },
    [insertBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //deleteBook
    [deleteBook.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = state.books.filter((book) => book.id != action.meta.arg.id);
    },
    [deleteBook.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
