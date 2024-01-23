import { useContext } from "react";
import styles from "./theme.module.scss";
import { ThemeContext } from "../../providers/ThemeProvider";

export const BtnTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={changeTheme}
      className={`${styles.theme_btn} ${styles[`theme_btn--${theme}`]}`}
    ></button>
  );
};
