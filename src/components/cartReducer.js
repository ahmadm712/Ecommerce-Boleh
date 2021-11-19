import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
import produce from "immer";
import {
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_ITEM,
} from "../actions/actions-types/cartActions";

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
        setProduct(defaultValue);
      })
    );
  };
  let initValue = { defaultValue, addedItems: [], total: 0 };
  console.log(initValue);
  const cartReducer = (state = initValue, action) => {
    if (action.type === REMOVE_ITEM) {
      // Add code here
      const nextState = produce(state, (draf) => {
        const id = action.payload;
        let itemToRemove = draf.addedItems.find(
          (item) => item.product_id === id
        );
        if (itemToRemove) {
          let new_items = draf.addedItems.filter(
            (item) => item.product_id !== id
          );
          let newTotal =
            draf.total -
            itemToRemove.product_price * itemToRemove.product_stock;
          return {
            ...state,
            addedItems: new_items,
            total: newTotal,
          };
        }
      });
      return nextState;
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
      // Add code here
      const nextState = produce(state, (draf) => {
        const id = action.payload;
        const found = draf.addedItems.find((item) => item.product_id === id);
        found.product_stock++;
        draf.total += parseInt(found.product_price);
      });

      return nextState;
    }
    if (action.type === SUB_QUANTITY) {
      // Add code here
      const nextState = produce(state, (draf) => {
        const id = action.payload;
        const findItem = draf.addedItems.find((item) => item.product_id === id);
        if (findItem.product_stock === 1) {
          let newItem = draf.addedItems.filter(
            (item) => item.product_id !== id
          );
          return {
            ...state,
            addedItems: newItem,
          };
        } else {
          findItem.product_stock--;
          draf.total = draf.total - findItem.product_price;
        }
      });

      return nextState;
    }
  };

  useEffect(() => {
    fetchData();
  });

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = {
    product: product,
    dispatch: dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
