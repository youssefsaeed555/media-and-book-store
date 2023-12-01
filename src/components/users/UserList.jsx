import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../shared/Button";
import Skelton from "../shared/Skelton";
import { useThunk } from "../../hooks/useThunk";

import { getUsers } from "../../store/thunks/userThunk.js/fetchUser";
import { createUser } from "../../store/thunks/userThunk.js/addUser";
import UserListItems from "./UserListItems";

function UserList() {
  const [fetchUser, isLoadingUserList, loadingUserError] = useThunk(getUsers);
  const [addUser, isLoadingUserCreate, loadingUserCreateError] =
    useThunk(createUser);

  const user = useSelector((state) => state.users);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleAddUser = () => {
    addUser();
  };

  let content;

  if (loadingUserError) {
    content = <div>{loadingUserError}</div>;
  } else if (isLoadingUserList) {
    content = <Skelton times={6} className="w-fill h-10" />;
  } else {
    content = user?.users?.map((user) => (
      <UserListItems user={user} key={user.id} />
    ));
  }

  return (
    <div>
      <div className="flex justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isLoadingUserCreate} onClick={handleAddUser}>
          + Add user
        </Button>
        {loadingUserCreateError && "error in creating user"}
      </div>
      {content}
    </div>
  );
}

export default UserList;
