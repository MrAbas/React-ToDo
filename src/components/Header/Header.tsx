import { HeaderElements } from "../HeaderElements/HeaderElements";
import { useThemeContext } from "../../hooks/ThemeContext";
import styles from "./header.module.scss";

export const Header = () => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.header}>
      <h1 className={`${styles.title_header} ${styles[`header--${theme}`]}`}>
        TODO LIST
      </h1>
      <HeaderElements />
    </div>
  );
};
