import { HeaderElements } from "../HeaderElements/HeaderElements";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title_header}>TODO LIST</h1>
      <HeaderElements />
    </div>
  );
};
