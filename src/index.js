import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./components/cart";
import { WishlistProvider } from "./components/wishlist";
import {ProductProvider} from './context/product_context'

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
