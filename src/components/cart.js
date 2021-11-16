import { createContext, useEffect, useState } from "react";
import axios from "axios";

const defaultValue = [];
const defaultValue2 = [];

export const CartContext = createContext(defaultValue);

export function CartProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

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
        const productId = getDataCart.map((e) => {
          return e.product_id;
        });
        // console.log(productId);
        const cartId = getDataProduct.map((e) => {
          return e.product_id;
        });
        // console.log(cartId);

        // check id
        for (let i = 0; i < productId.length; i++) {
          const findId = getDataProduct.find(
            ({ product_id }) => product_id == productId[i]
          );
          defaultValue.push(findId);
        }
        setProduct(defaultValue);

        for (let i = 0; i < productId.length; i++) {
          const findId = getDataCart.find(
            ({ product_id }) => product_id == productId[i]
          );
          defaultValue2.push(findId);
        }
        // console.log(defaultValue2);
        setCart(defaultValue2);
      })
    );
  };

  useEffect(() => {
    fetchData();
  });

  const value = {
    product: product,
    cart: cart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
