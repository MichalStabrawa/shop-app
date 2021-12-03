import React, { useEffect, useState } from "react";
import styles from "./cartWrapper.module.scss";
import Button from "../button/Button";

import Cart from "../cart/Cart";

const CartWrapper = (props) => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.cartMain}>
      <div className={styles.cartCount}>
        <span className={styles.cartCountTitle}>
          Cart({[data.items].length})
        </span>
      </div>
      <div className={styles.cartContent}>
        <div>
          {data &&
            data.items.map((item, index) => (
              <Cart name={item.product_name} src={item.image} key={index} />
            ))}
        </div>
        <div className={styles.cartOrderTotal}>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
