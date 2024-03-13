import React, { useState } from "react";

interface IThemeContext {
  theme: string;
  toggleTheme?: () => void;
}
const defaultState = {
  theme: "light",
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.theme ? localStorage.theme : "light"
  );

  const toggleTheme = () => {
    console.log(theme);
    let newTheme = localStorage.theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
