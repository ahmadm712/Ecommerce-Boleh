import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./components/cart";
import CartState from "./data/context/cart/cart_state";
import { WishlistProvider } from "./components/wishlist";
import { ProductProvider } from "./data/context/product_context";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <CartState>
            <App />
          </CartState>
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
