import React, { useState } from "react";
import { deleteBook } from "../../store";

const BooksList = ({ loading, books, isLoggedIn, dispatch, getBookId }) => {
  const [dataDeleted, setDataDeleted] = useState({});

  const renderBooks = books.length ? (
    books?.map((book) => (
      <li className="m-4 flex justify-between items-center" key={book.id}>
        <div>{book.title}</div>
        <div role="group">
          <button
            type="button"
            className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${
              !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isLoggedIn}
            onClick={() => getBookId(book.id)}
          >
            Read
          </button>
          <button
            type="button"
            className={`bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 ${
              !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isLoggedIn}
            onClick={() =>
              dispatch(deleteBook(book))
                .unwrap()
                .then((originalPromiseResult) => {
                  setDataDeleted(originalPromiseResult);
                  document.getElementById("my_modal_2").showModal();
                })
                .catch((rejectedValueOrSerializedError) => {
                  console.log(rejectedValueOrSerializedError);
                })
            }
          >
            Delete
          </button>
        </div>
      </li>
    ))
  ) : (
    <p>there is no books to show</p>
  );

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Books List</h2>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h2 className="text-center font-bold text-lg">
                your deleted data
              </h2>
              <p className="py-4">
                {dataDeleted.title} author by {dataDeleted.author}
              </p>
              <p className="py-4">the price is {dataDeleted.price} and</p>
              <p className="py-4">
                the description is {dataDeleted.description}
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <ul className="border-2 border-gray-200 border-r-4 ">
            {renderBooks}
          </ul>
        </div>
      )}
    </>
  );
};

export default BooksList;
