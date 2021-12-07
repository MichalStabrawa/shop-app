import React from "react";
import styles from "./buttonClose.module.scss";

const ButtonClose = (props) => {
  return (
    <div className={styles.closeWrapper}>
      <button class={styles.close} onClick={props.hide}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default ButtonClose;
