import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="m-2 border rounded cursor-pointer">
      <div
        onClick={() => setExpand(!expand)}
        className="flex justify-between items-center mx-4"
      >
        <div className=" flex p-2 cursor-pointer items-center">{header}</div>
        <div>{expand ? <GoChevronDown /> : <GoChevronLeft />}</div>
      </div>
      {expand && <div className="p-2 border-t ">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
