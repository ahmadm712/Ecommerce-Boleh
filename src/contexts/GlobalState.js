import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  users: [
    {
      user_id: 5,
      name: "Ikhwan",
      email: "muhammadikhwanfathulloh17@gmail.com",
      password: "12345678",
      image: "https://i.ibb.co/vXgH8Wr/Logopit-1619837910132.jpg",
      saldo: "10000",
      address: "Bandung",
      phone: "085861712279",
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      payload: user
    });
  }

  function editUser(user) {
    dispatch({
      type: "EDIT_USER",
      payload: user
    });
  }

  function removeUser(user_id) {
    dispatch({
      type: "REMOVE_USER",
      payload: user_id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        addUser,
        editUser,
        removeUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};