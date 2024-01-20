import { Search } from "../Search/Search";
import { HeaderSelect } from "../HeaderSelect/HeaderSelect";
import { BtnTheme } from "../BtnTheme/BtnTheme";
import styles from "./headerElements.module.scss";

export const HeaderElements = () => {
  return (
    <div className={styles.setting_note}>
      <Search />
      <HeaderSelect />
      {/*TODO Header поменять на ToDo */}
      <BtnTheme />
    </div>
  );
};
