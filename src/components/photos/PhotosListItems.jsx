import React from "react";
import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../../store";

function PhotosListItems({ photo }) {
  const [removePhoto, result] = useRemovePhotoMutation();
  const handleOnClick = () => {
    removePhoto(photo);
  };
  return (
    <div className="cursor-pointer relative mx-5">
      <img src={photo.url} />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-gray-300">
        <GoTrash className="text-3xl" onClick={handleOnClick} />
      </div>
    </div>
  );
}

export default PhotosListItems;
