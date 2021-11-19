import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";

const defaultValue = [];

export const CartContext = createContext(defaultValue);

export function CartProvider({ children }) {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    const productAPI =
      "https://oleh-oleh-skilvul.000webhostapp.com/api/product";
    const cartAPI =
      "https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart";

    const getProduct = axios.get(productAPI);
    const getCart = axios.get(cartAPI);
    axios.all([getProduct, getCart]).then(
      axios.spread((...allData) => {
        const getDataProduct = allData[0].data.product;
        const getDataCart = allData[1].data;
        let user_login = JSON.parse(localStorage.getItem("user-info"));
        // check id
        for (let i = 0; i < getDataCart.length; i++) {
          if (getDataCart[i].user_id == user_login.user_id) {
            for (let j = 0; j < getDataProduct.length; j++) {
              if (getDataProduct[j].product_id == getDataCart[i].product_id) {
                defaultValue.push(getDataProduct[j]);
                // defaultValue.push(getDataWishlist[i].favorite_id);
              }
            }
          }
        }
        console.log(defaultValue);
        setProduct(defaultValue);
      })
    );
  };

  useEffect(() => {
    fetchData();
  });

  const value = {
    product: product,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
