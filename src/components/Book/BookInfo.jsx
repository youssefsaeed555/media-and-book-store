import React, { Fragment } from "react";

const BookInfo = ({ info }) => {
  console.log(info);
  return (
    <Fragment>
      <h2 className="text-2xl font-bold mb-4">Book Details</h2>
      {!Object.keys(info).length ? (
        <div className="bg-gray-200 p-4 rounded">
          There is no book selected yet. Please select!
        </div>
      ) : (
        <div>
          <p className="font-bold">
            Created By: {info.author ? info.author : "unknown"}
          </p>
          <p className="font-medium">Title: {info.title}</p>
          <p className="font-light">Description: {info.description}</p>
          <p className="italic">Price: {info.price}</p>
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
