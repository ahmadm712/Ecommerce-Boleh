import { useReducer } from "react";
import CartReducer from "./cart_reducer";
import CartContext from "./cart_context";
import { ADD_TO_CART, SHOW_HIDE_CART, REMOVE_ITEM } from "./type";

const CartState = ({ children }) => {
<<<<<<< HEAD:src/context/cart/cart_state.js
  const initalState = {
    showCart: false,
    cartItems: [],
=======
    const initalState = {
      showCart: false,
      
      cartItems: [],
      total:0,
    };
  
    const [state, dispatch] = useReducer(CartReducer, initalState);
  
    const addToCart = (item) => {
      dispatch({ type: ADD_TO_CART, payload: item });
    };
  
    const showHideCart = () => {
      dispatch({ type: SHOW_HIDE_CART });
    };
  
    const removeItem = (id) => {
      dispatch({ type: REMOVE_ITEM, payload: id });
    };
  
    return (
      <CartContext.Provider
        value={{
          showCart: state.showCart,
          cartItems: state.cartItems,
          addToCart,
          showHideCart,
          removeItem,
        }}
      >
        {children}
      </CartContext.Provider>
    );
>>>>>>> efcbe06752d64d42b7ae31ebb9322e316b9ea14b:src/data/context/cart/cart_state.js
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
