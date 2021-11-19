import { useReducer } from "react";
import CartReducer from "./cart_reducer";
import CartContext from "./cart_context";
import { ADD_TO_CART,SHOW_HIDE_CART, REMOVE_ITEM } from "./type";

const CartState = ({ children }) => {
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
  };
  
  export default CartState;
