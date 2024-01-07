import React from "react";
import "./App.scss";
import Wrapper from "./WrapperSearch";

const ElementsActive = () => {
  return (
    <div className="setting_note">
      <Wrapper />
      <select id="dropDown" className="drop-down">
        <option>all</option>
        <option>Complete</option>
        <option>Incomplete</option>
      </select>
      <button id="theme" className="theme_btn"></button>
    </div>
  );
};

export default ElementsActive;
