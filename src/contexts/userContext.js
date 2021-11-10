import React, { createContext } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("Ikhwan");
  const [email, setEmail] = useState("muhammadikhwanfathulloh17@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [image, setImage] = useState("https://i.ibb.co/vXgH8Wr/Logopit-1619837910132.jpg");
  const [saldo, setSaldo] = useState("10000");
  const [address, setAddress] = useState("Bandung");
  const [phone, setPhone] = useState("085861712279");
  return (
    <UserContext.Provider value={{ name, email, password, image, saldo, address, phone }}>
      {children}
    </UserContext.Provider>
  );
};

const withUser = (Child) => (props) => (
  <UserContext.Consumer>
    {(context) => <Child {...props} {...context} />}
    {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
  </UserContext.Consumer>
);

export { UserProvider, withUser };