import React from "react";
import Link from "./Link";
import { useDispatch, useSelector } from "react-redux";
import { loggedInOut } from "../../store";

const HeaderBook = () => {
  const links = [
    { label: "Media", path: "/" },
    { label: "Book Store", path: "/bookStore" },
  ];

  const renderItems = links.map((route, index) => (
    <Link key={index} to={route.path} activeClassLink="font-bold px-4">
      <li>{route.label}</li>
    </Link>
  ));
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <>
      <div className="navbar bg-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            RTK
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{renderItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn" onClick={() => dispatch(loggedInOut())}>
            {!isLoggedIn ? "Login" : "Logout"}
          </a>
        </div>
      </div>
      {error && (
        <div className="alert alert-error flex justify-center text-white rounded-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </>
  );
};

export default HeaderBook;
