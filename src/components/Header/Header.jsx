import { useContext } from "react";
import { HeaderElements } from "../HeaderElements/HeaderElements";
import styles from "./header.module.scss";
import { ThemeContext } from "../../providers/ThemeProvider";

export const Header = () => {
  const [theme] = useContext(ThemeContext);
  // const [theme_ht] = useContext(ThemeContext);
  // console.log(theme_ht);
  return (
    <div className={styles.header}>
      <h1 className={`${styles.title_header} ${styles[theme]}`}>TODO LIST</h1>
      <HeaderElements />
    </div>
  );
};
