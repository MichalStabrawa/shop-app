import React, { useState } from "react";
import InputNumber from "../inputNumber/InputNumber";
import styles from "../cart/cart.module.scss";

const Cart = (props) => {
  const [count, setCount] = useState(0);

  const setCountUp = () => {
    setCount(count + 1);
  };

  const setCountDown = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartImg}>
        <img src={props.src} className={styles.imgProduct} alt="" />
      </div>
      <div className={styles.cartContent}>
        <h2 className={styles.cartContentTitle}>{props.name}</h2>
        <p>
          {props.sizeName} {props.size}
        </p>
        <p>
          {props.colorName} {props.color}
        </p>
        <p>
          {props.patternName} {props.pattern}
        </p>
        <div className={styles.cartCOntentWrapper}>
          <div>
            {`Count ${count}`}
            <span>Qty:</span>
            <InputNumber
              setCountUp={setCountUp}
              setCountDown={setCountDown}
              count={count}
            />
          </div>
          <span>
            <p>
              {props.oldprice ? (
                <span>
                  {props.currency} <s>{props.oldprice}</s>
                </span>
              ) : null}
            </p>
          </span>
          <span className="price">
            {props.currency} {props.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
