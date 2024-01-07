import React from "react";
import "./App.scss";

const Modal = () => {
  return (
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Note</h5>
            <button
              type="button"
              class="btn-close"
              id="btn_close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              id="modalInput"
              type="text"
              name=""
              class="modal_input"
              placeholder="Input your note..."
              autocomplete="off"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              id="btn_secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button id="btnApply" type="button" class="btn btn-primary">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
