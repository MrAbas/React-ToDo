import React from "react";
import "./App.scss";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <input
        type="text"
        id="inputSearch"
        className="input_search"
        placeholder="Search note..."
        autoComplete="off"
      ></input>
      <button id="btnSearch" className="btn-search"></button>
    </div>
  );
};

export default Wrapper;
