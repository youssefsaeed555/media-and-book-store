import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

export const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rtk-apis.onrender.com",
  }),
  endpoints: (builder) => {
    return {
      getUserAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return {
              type: "Album",
              id: album.id,
            };
          });
          tags.push({ type: "userAlbums", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "GET",
            params: { userId: user.id },
          };
        },
      }),
      addAlbums: builder.mutation({
        invalidatesTags: (result, error, user) => {
          console.log(user);
          return [{ type: "userAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              title: faker.commerce.productName(),
              userId: user.id,
            },
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useGetUserAlbumsQuery,
  useAddAlbumsMutation,
  useRemoveAlbumMutation,
} = albumsApi;
