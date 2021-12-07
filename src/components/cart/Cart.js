import React, { useState } from "react";
import InputNumber from "../inputNumber/InputNumber";
import styles from "../cart/cart.module.scss";
import ButtonClose from "../buttonClose/ButtonClose";

const Cart = (props) => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const setCountUp = () => {
    setCount(count + 1);
  };

  const setCountDown = () => {
    setCount(count - 1);
  };

  const hideCart = () => {
    // eslint-disable-next-line no-const-assign
    setShow(false);
  };

  return show ? (
    <div className={styles.cartWrapper}>
      <ButtonClose hide={hideCart} />
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
        <div className="test">
          <div>
            {`Count ${count}`}
            <span>Qty:</span>
            <InputNumber
              setCountUp={setCountUp}
              setCountDown={setCountDown}
              count={count}
            />
          </div>
          <div>
            <p>
              {props.oldprice ? (
                <span>
                  {props.currency} <s>{props.oldprice}</s>
                </span>
              ) : null}
            </p>
            <span className="price">
              {props.currency} {props.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;
