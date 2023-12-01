import React, { createContext, useEffect, useState } from "react";

export const navigationContext = createContext();

function Navigation({ children }) {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentUrl(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentUrl(to);
  };

  return (
    <navigationContext.Provider value={{ currentUrl, navigate }}>
      {children}
    </navigationContext.Provider>
  );
}

export default Navigation;
