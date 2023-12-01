import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

//slices
import { userSlice } from "./slices/userSlice";
import { bookSlice } from "./slices/bookSlice";
import { userAuthSlice, loggedInOut } from "./slices/authSlice";
import { reportsSlice, logging } from "./slices/reportSlice";

//thunk:
//book thunk
import { getBooks } from "./thunks/bookThunk.js/getBooks";
import { insertBook } from "./thunks/bookThunk.js/insertBook";
import { deleteBook } from "./thunks/bookThunk.js/deleteBook";

//user thunk
import { getUsers } from "./thunks/userThunk.js/fetchUser";
import { deleteUser } from "./thunks/userThunk.js/deleteUser";

//APIS
import {
  useGetUserAlbumsQuery,
  albumsApi,
  useAddAlbumsMutation,
  useRemoveAlbumMutation,
} from "./apis/AlbumsApi";
import {
  photosApis,
  useGetAlbumsPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./apis/PhotosApi";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    books: bookSlice.reducer,
    auth: userAuthSlice.reducer,
    logs: reportsSlice.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApis.reducerPath]: photosApis.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApis.middleware);
  },
});

setupListeners(store.dispatch);

export default store;
export {
  getBooks,
  insertBook,
  loggedInOut,
  deleteBook,
  logging,
  getUsers,
  deleteUser,
  useGetUserAlbumsQuery,
  useAddAlbumsMutation,
  useRemoveAlbumMutation,
  useGetAlbumsPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
};
