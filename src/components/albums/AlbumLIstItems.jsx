import React from "react";
import ExpandablePanel from "../shared/ExpandablePanel";
import Button from "../shared/Button";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../../store";
import PhotosList from "../photos/PhotosList";

function AlbumLIstItems({ album }) {
  const [removeAlbum, removeResults] = useRemoveAlbumMutation();

  const handleOnClick = () => {
    removeAlbum(album);
  };

  let header = (
    <div className="flex gap-5">
      <Button loading={removeResults.isLoading} onClick={handleOnClick}>
        <GoTrash />
      </Button>
      <div>{album.title}</div>
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumLIstItems;
