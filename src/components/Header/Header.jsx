import { useContext } from "react";
import { HeaderElements } from "../HeaderElements/HeaderElements";
import { ThemeContext } from "../../providers/ThemeProvider";
import styles from "./header.module.scss";

export const Header = () => {
  const [theme] = useContext(ThemeContext);
  // const [theme_ht] = useContext(ThemeContext);
  // console.log(theme_ht);
  return (
    <div className={styles.header}>
      <h1 className={`${styles.title_header} ${styles[`header--${theme}`]}`}>
        TODO LIST
      </h1>
      <HeaderElements />
    </div>
  );
};
