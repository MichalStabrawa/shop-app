import "./App.module.scss";
import React from "react";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-background"></div>
        <div className="wrapper-card">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
