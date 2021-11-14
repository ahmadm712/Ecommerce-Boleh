import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./components/cart";
import { WhislistProvider } from "./components/whislist";

ReactDOM.render(
  <React.StrictMode>
    <WhislistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WhislistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
