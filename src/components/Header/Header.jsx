import { HeaderElements } from "../HeaderElements/HeaderElements";
import header from "./header.module.scss";

export const Header = () => {
  return (
    <div className={header.header}>
      <h1 className={header.title_header}>TODO LIST</h1>
      <HeaderElements />
    </div>
  );
};
