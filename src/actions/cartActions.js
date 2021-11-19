import {
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from "./actions-types/cartActions";

export const removeItem = (id) => {
  // Add code here
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};
export const subtractQuantity = (id) => {
  // Add code here
  return {
    type: SUB_QUANTITY,
    payload: id,
  };
};
//add qt action
export const addQuantity = (id) => {
  // Add code here
  return {
    type: ADD_QUANTITY,
    payload: id,
  };
};
