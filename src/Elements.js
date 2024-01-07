import React from "react";
import "./App.scss";

const ElementActive = () => {
  return (
    <div className="wrapper">
      <input type="text"></input>
      <button>Search</button>
      <select id="dropDown" className="drop-down">
        <option>all</option>
        <option>Complete</option>
        <option>Incomplete</option>
      </select>
    </div>
  );
};

export default ElementActive;
