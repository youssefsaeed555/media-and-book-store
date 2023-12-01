import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

export const photosApis = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rtk-apis.onrender.com",
  }),
  endpoints: (builder) => {
    return {
      getAlbumsPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((img) => {
            return {
              type: "Photo",
              id: img.id,
            };
          });
          tags.push({
            type: "albumPhotos",
            id: album.id,
          });
          return tags;
        },
        query: (album) => {
          return {
            url: "/photos",
            method: "GET",
            params: { album: album.id },
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "albumPhotos", id: album.id }];
        },
        query: (album) => {
          return {
            method: "POST",
            url: "/photos",
            body: {
              album: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo) => {
          return {
            method: "DELETE",
            url: `/photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useGetAlbumsPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApis;
