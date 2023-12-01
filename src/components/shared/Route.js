import React from "react";
import useNavigation from "../../hooks/useNavigation";

function Route({ path, children }) {
  const { currentUrl } = useNavigation();
  if (path == currentUrl) {
    return children;
  }
  return null;
}

export default Route;
