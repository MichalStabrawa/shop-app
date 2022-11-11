import React from "react";
import styles from "./buttonClose.module.scss";

const ButtonClose = (props) => {
  return (
    <div className={styles.closeWrapper}>
      <button className={styles.close} onClick={props.hideComponent}>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default ButtonClose;
