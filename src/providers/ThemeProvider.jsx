import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  // const [btnSearch, setBtnSearch] = useState("light_bs");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
