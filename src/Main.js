import React from "react";
import "./App.scss";
import Modal from "./Modal";

const Main = () => {
  return (
    <main className="main">
      <ul id="list" className="list">
        <li className="note">
          <input className="checkbox_note" type="checkbox" />
          <h2 className="text_note">1</h2>
          <span className="btns-note">
            <button className="btn_change"></button>
            <button className="btn_deleted"></button>
          </span>
        </li>
      </ul>
      <button id="btn_add" className="add-btn"></button>
      <Modal />
    </main>
  );
};

export default Main;
