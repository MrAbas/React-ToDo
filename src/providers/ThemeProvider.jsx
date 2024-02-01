import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.theme ? localStorage.theme : "light"
  );

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
