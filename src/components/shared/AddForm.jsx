import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../../store";

const Addform = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const title = useRef(null);
  const description = useRef(null);
  const price = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      insertBook({
        title: title.current.value,
        description: description.current.value,
        price: price.current.value,
      })
    );
    title.current.value = "";
    description.current.value = "";
    price.current.value = "";
  };
  return (
    <div className="flex">
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Insert Book</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
              ref={title}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
              ref={price}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="3"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
              ref={description}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ${
              !isLoggedIn ? "cursor-not-allowed opacity-50" : ""
            } `}
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
