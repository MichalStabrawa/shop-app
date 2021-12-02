import styles from "./App.module.scss";
import React from "react";
import CartWrapper from "./components/cartWrapper/CartWrapper";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperBackground}></div>
        <div className={styles.wrapperCard}>
          <CartWrapper />
        </div>
      </div>
    </div>
  );
}

export default App;
