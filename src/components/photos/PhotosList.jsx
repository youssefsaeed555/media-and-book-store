import React from "react";
import { useAddPhotoMutation, useGetAlbumsPhotosQuery } from "../../store";
import Skelton from "../shared/Skelton";
import PhotosListItems from "./PhotosListItems";
import Button from "../shared/Button";

function PhotosList({ album }) {
  const { data, isFetching, isError } = useGetAlbumsPhotosQuery(album);
  const [addPhoto, resultAddPhotos] = useAddPhotoMutation();

  const handleOnClick = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skelton className="h-10 w-full" times={3} />;
  } else if (isError) {
    content = <div>Error Loading item</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItems photo={photo} key={photo.id} />;
    });
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Photos for {album.title}</h2>
        <Button loading={resultAddPhotos.isLoading} onClick={handleOnClick}>
          + Add Photo
        </Button>
      </div>
      <div className="flex mx-5 flex-wrap justify-center">{content}</div>
    </>
  );
}

export default PhotosList;
