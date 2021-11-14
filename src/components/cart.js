import { createContext, useEffect, useState } from "react";
import axios from "axios";

const defaultValue = [];

export const CartContext = createContext(defaultValue);

export function CartProvider({ children }) {
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
        const cartId = getDataCart.map((e) => {
          return e.product_id;
        });
        // check id
        for (let i = 0; i < cartId.length; i++) {
          const findId = getDataProduct.find(
            ({ product_id }) => product_id == cartId[i]
          );
          defaultValue.push(findId);
        }
        setCart(defaultValue);
      })
    );
  };

  useEffect(() => {
    fetchData();
  });

  const value = {
    cart: cart,
    product_image: cart.product_image,
    product_name: cart.product_name,
    product_origin_category: cart.product_origin_category,
    product_price: cart.product_price,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
