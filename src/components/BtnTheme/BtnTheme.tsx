import { useThemeContext } from "../../hooks/ThemeContext";
import styles from "./theme.module.scss";

export const BtnTheme = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.theme_btn} ${styles[`theme_btn--${theme}`]}`}
    ></button>
  );
};
