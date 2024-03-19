import { useThemeContext } from "../../hooks/ThemeContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./theme.module.scss";

export const BtnTheme = () => {
  const { theme, toggleTheme } = useThemeContext();
  const notify = () => toast(`${theme} theme!`);

  return (
    <button
      onClick={() => {
        toggleTheme();
        notify();
      }}
      className={`${styles.theme_btn} ${styles[`theme_btn--${theme}`]}`}
    ></button>
  );
};
