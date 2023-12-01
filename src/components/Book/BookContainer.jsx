import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";
import { getBooks } from "../../store";

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const book = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBookId = (id) => {
    const selectedBookInfo = book.books.find((item) => item.id == id);
    //because prev is reference type (Object) so not mutate the state
    setSelectedBook((prev) => ({ ...prev, ...selectedBookInfo }));
  };

  return (
    <div className="mx-8">
      <hr className="my-5" />
      <div className="flex">
        <div className="flex-1">
          <BooksList
            loading={book.loading}
            books={book.books}
            isLoggedIn={isLoggedIn}
            dispatch={dispatch}
            getBookId={getBookId}
          />
        </div>
        <div className="flex-1 ml-4">
          {" "}
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
