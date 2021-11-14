import { createContext, useState, useContext } from "react";
import produce from "immer";

function createNewCart(cart) {
  return {};
}

const initialState = [];
export const cartContext = createContext(initialState);

export function CartProvider({ children }) {
  const value = {};

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
