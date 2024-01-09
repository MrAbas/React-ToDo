import { Search } from "../Search/Search";
import headerElStyles from "./headerElements.module.scss";

export const HeaderElements = () => {
  return (
    <div className={headerElStyles.setting_note}>
      <Search />
      <select id="dropDown" className={headerElStyles.drop_down}>
        <option>all</option>
        <option>Complete</option>
        <option>Incomplete</option>
      </select>
      <button id="theme" className={headerElStyles.theme_btn}></button>
    </div>
  );
};
