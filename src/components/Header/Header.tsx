import { HeaderElements } from "../HeaderElements/HeaderElements";
import { useThemeContext } from "../../hooks/ThemeContext";
import { Outlet } from "react-router-dom";
import ProfilePages from "../../pages/ProfilePages";
import styles from "./header.module.scss";

export const Header = () => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.header}>
      <ProfilePages />
      <h1 className={`${styles.title_header} ${styles[`header--${theme}`]}`}>
        TODO LIST
      </h1>
      <HeaderElements />
      <Outlet /> {/* TODO можно же убрать */}
    </div>
  );
};
