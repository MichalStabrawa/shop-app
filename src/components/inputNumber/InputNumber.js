import React from "react";
import styles from "./inputNumber.module.scss";

const InputNumber = (props) => {
  const handleClickDown = (e) => {
    const findInput = e.target.nextSibling;
    findInput.stepDown();
    props.setCountDown();
  };

  const handleClickUp = (e) => {
    const findInputLast = e.target.previousSibling;
    findInputLast.stepUp();
    props.setCountUp();
  };

  return (
    <div className={styles.numberinput}>
      <button onClick={handleClickDown}></button>
      <input
        className="quantity"
        type="number"
        defaultValue="1"
        min="1"
        max="9"
      />
      <button onClick={handleClickUp} className={styles.plus}></button>
    </div>
  );
};

export default InputNumber;
