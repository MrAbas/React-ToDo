import { Search } from "../Search/Search";
import { HeaderSelect } from "../HeaderSelect/HeaderSelect";
import { BtnTheme } from "../BtnTheme/BtnTheme";
import styles from "./headerElements.module.scss";

export const HeaderElements = () => {
  //вынести select и тему в отдельный компонент
  return (
    <div className={styles.setting_note}>
      <Search />
      <HeaderSelect />
      <BtnTheme />
    </div>
  );
};
