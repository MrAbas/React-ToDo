import { useContext } from "react";
import styles from "./theme.module.scss";
import { ThemeContext } from "../../providers/ThemeProvider";

export const BtnTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  // const [btn_search, setBtnSearch] = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // setBtnSearch(btn_search === "light_bs" ? "dark_bs" : "light_bs");
  };
  return (
    <button
      onClick={changeTheme}
      className={`${styles.theme_btn} ${styles[theme]}`}
    ></button>
  );
};
