import React from "react";
import {
  useAddAlbumsMutation,
  useGetUserAlbumsQuery,
  useRemoveAlbumMutation,
} from "../../store/apis/AlbumsApi";
import Skelton from "../shared/Skelton";
import ExpandablePanel from "../shared/ExpandablePanel";
import Button from "../shared/Button";
import AlbumLIstItems from "./AlbumLIstItems";

function AlbumList({ user }) {
  const { data, isFetching, isError } = useGetUserAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumsMutation();

  const handleOnClick = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skelton className="h-10 w-full" times={3} />;
  } else if (isError) {
    content = <div>Error Loading item</div>;
  } else {
    content = data.map((album) => {
      return <AlbumLIstItems album={album} key={album.id} />;
    });
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Albums for {user.name}</h2>
        <Button loading={results.isLoading} onClick={handleOnClick}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
}

export default AlbumList;
