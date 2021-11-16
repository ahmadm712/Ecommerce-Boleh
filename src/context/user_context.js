import axios from "axios";
import { createContext, useEffect, useState } from "react";

function createNewUser(user) {
  return {
    name: user.name,
    email: user.email,
    password: user.password,
    image: user.image,
    saldo: user.saldo,
    address: user.address,
    phone: user.phone,
  };
}

const defaultValue = [];

export const UserContext = createContext(defaultValue);

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = "https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/user";
    axios
      .get(url)
      .then((response) => response.data.user)
      .then((data) => data.map(createNewUser))
      .then(setUser);
  }, []);

  const contextValue = {
    user: user.slice(0, 5),
  };

  console.log("Context", contextValue);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}