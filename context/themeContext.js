import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeContextProvider };
