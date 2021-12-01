import styles from "./App.module.scss";
import React from "react";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperBackground}></div>
        <div className={styles.wrapperCard}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
