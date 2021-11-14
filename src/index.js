import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./components/cart";
import { WishlistProvider } from "./components/wishlist";

ReactDOM.render(
  <React.StrictMode>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
