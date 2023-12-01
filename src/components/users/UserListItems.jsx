import React from "react";
import { GoSync, GoTrash } from "react-icons/go";
import { useThunk } from "../../hooks/useThunk";
import { deleteUser } from "../../store";
import Button from "../shared/Button";
import ExpandablePanel from "../shared/ExpandablePanel";
import AlbumList from "../albums/AlbumList";

function UserListItems({ user }) {
  const [removeUser, loading, error] = useThunk(deleteUser);

  const handleOnClick = (userId) => {
    removeUser(userId);
  };

  const header = (
    <>
      <Button loading={loading} onClick={() => handleOnClick(user.id)}>
        <GoTrash />
      </Button>

      {error && <div>error in deleting user.</div>}
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user?.name}
      </div>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItems;
