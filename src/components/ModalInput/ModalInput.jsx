import React from "react";
import styles from "./modalInput.module.scss";

export const ModalInput = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className={styles.modal_input}
      placeholder="Input your note..."
      autoComplete="off"
    />
  );
});
