import React from "react";
import styles from "./cartWrapper.module.scss";
import Button from "../button/Button";
import GetData from "../../data/data.json";

import Cart from "../cart/Cart";

const d = JSON.parse(GetData);
const CartWrapper = (props) => {
  return (
    <div className={styles.cartMain}>
      <div className={styles.cartCount}>
        <span className={styles.cartCountTitle}>Cart()</span>
      </div>
      <div className={styles.cartContent}>
        <div>
          <Cart />
        </div>
        <div className={styles.cartOrderTotal}>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
