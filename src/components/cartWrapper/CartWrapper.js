import React, { useEffect, useState } from "react";
import styles from "./cartWrapper.module.scss";
import Button from "../button/Button";

import Cart from "../cart/Cart";

const CartWrapper = (props) => {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    let data;
    try {
      const json = await fetch("data.json");
      data = await json.json();
    } catch (e) {
      if (e.message) {
        console.log(e.message);
      }
    } finally {
      setState(() => data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return state && state.items ? (
    <div className={styles.cartMain}>
      <div className={styles.cartCount}>
        <span className={styles.cartCountTitle}>
          Cart{`(${state.items.length})`}
        </span>
      </div>
      <div className={styles.cartContent}>
        <div></div>
        {state &&
          state.items.map((el, i) => {
            let option = el.product_options.length;
            let currency = state.currency;
            console.log(currency);
            return (
              <Cart
                key={i}
                name={el.product_name}
                src={el.image}
                price={el.price.current_price}
                oldprice={el.price.old_price}
                size={option > 0 ? el.product_options[0].value : null}
                sizeName={option > 0 ? el.product_options[0].name : null}
                colorName={option > 1 ? el.product_options[1].name : null}
                currency={currency}
                color={option > 1 ? el.product_options[1].value : null}
                patternName={option > 2 ? el.product_options[2].name : null}
                pattern={option > 2 ? el.product_options[2].value : null}
              />
            );
          })}
        <div className={styles.cartOrderTotal}>
          <Button />
        </div>
      </div>
    </div>
  ) : null;
};

export default CartWrapper;
