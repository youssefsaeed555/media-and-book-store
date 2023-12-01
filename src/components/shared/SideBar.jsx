import React from "react";
import Link from "./Link";

function SideBar() {
  const links = [
    { label: "Media", path: "/" },
    { label: "Book Store", path: "/bookStore" },
  ];

  const renderItems = links.map((route, index) => (
    <Link
      key={index}
      to={route.path}
      activeClassLink="font-bold border-l-4 border-blue-500 pl-2"
    >
      {route.label}
    </Link>
  ));

  return (
    <div className="sticky top-0 flex flex-col mx-2 bg-slate-50 w-[10%]">
      {renderItems}
    </div>
  );
}

export default SideBar;
