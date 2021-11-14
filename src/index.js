import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./components/cart";
import { WhislistProvider } from "./components/whislist";
import {ProductProvider} from './context/product_context'

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <WhislistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WhislistProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
