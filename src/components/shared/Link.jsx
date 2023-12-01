import React from "react";
import useNavigation from "../../hooks/useNavigation";
import classNames from "classnames";

function Link({ to, children, activeClassLink }) {
  const { navigate, currentUrl } = useNavigation();
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "text-white",
    "mb-3",
    currentUrl == to && activeClassLink
  );

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}

export default Link;
