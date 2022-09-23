import React, { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [cookies, setCookies] = useCookies(["theme"]);
  const [toggle, setToggle] = useState(cookies.ThemeOption === "true" || true);

  console.log(cookies);
  console.log("toggle:" + toggle);

  const toggleFunction = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setCookies("ThemeOption", toggle, { path: "/" });
  });

  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeContextProvider };
