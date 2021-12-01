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
        <img src={props.src} alt="" />
      </div>
      <div className="cart-content">
        <h2 class={styles.cartContentTitle}>{props.name}</h2>
        <p>Size {props.size}</p>
        <p>Color {props.color}</p>
        <p>Pattern {props.pattern}</p>
        <div className="cart-count-wrapper">
          <div>
            {`Count ${count}`}
            <span>Qty:</span>
            <InputNumber
              setCountUp={setCountUp}
              setCountDown={setCountDown}
              count={count}
            />
          </div>
          <span className="price">{props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;