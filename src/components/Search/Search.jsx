import searchStyles from "./search.module.scss";

export const Search = () => {
  return (
    <div className={searchStyles.wrapper}>
      <input
        type="text"
        id="inputSearch"
        className={searchStyles.input_search}
        placeholder="Search note..."
        autoComplete="off"
      ></input>
      <button id="btnSearch" className={searchStyles.btn_search}></button>
    </div>
  );
};
