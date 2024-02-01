import { useContext, useEffect, useState } from "react";
import styles from "./theme.module.scss";
import { ThemeContext } from "../../providers/ThemeProvider";

export const BtnTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    /* if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
    } */
    setTheme(theme === "light" ? "dark" : "light");
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  };

  return (
    <button
      onClick={changeTheme}
      className={`${styles.theme_btn} ${styles[`theme_btn--${theme}`]}`}
    ></button>
  );
};
