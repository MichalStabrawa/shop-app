import React from "react";

const handleClickDown = (e) => {
  const findInput = e.target.nextSibling;
  findInput.stepDown();
};

const handleClickUp = (e) => {
  const findInputLast = e.target.previousSibling;
  findInputLast.stepUp();
};

const InputNumber = () => {
  return (
    <div className="number-input">
      <button onClick={handleClickDown}></button>
      <input
        className="quantity"
        type="number"
        defaultValue="1"
        min="1"
        max="9"
      />
      <button onClick={handleClickUp} className="plus"></button>
    </div>
  );
};

export default InputNumber;
