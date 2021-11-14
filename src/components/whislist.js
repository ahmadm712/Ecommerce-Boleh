import { createContext, useEffect, useState } from "react";
import axios from "axios";

const defaultValue = [];

export const WhislistContext = createContext(defaultValue);

export function WhislistProvider({ children }) {
  const [whislist, setWhislist] = useState([]);
  const fetchData = () => {
    const productAPI =
      "https://oleh-oleh-skilvul.000webhostapp.com/api/product";
    const whislistAPI =
      "https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/favorite";

    const getProduct = axios.get(productAPI);
    const getWhislist = axios.get(whislistAPI);
    axios.all([getProduct, getWhislist]).then(
      axios.spread((...allData) => {
        const getDataProduct = allData[0].data.product;
        const getDataWhislist = allData[1].data;
        const whislitId = getDataWhislist.map((e) => {
          return e.product_id;
        });
        // check id
        for (let i = 0; i < whislitId.length; i++) {
          const findId = getDataProduct.find(
            ({ product_id }) => product_id == whislitId[i]
          );
          defaultValue.push(findId);
        }
        setWhislist(defaultValue);
      })
    );
  };

  useEffect(() => {
    fetchData();
  });

  const value = {
    whislist: whislist,
    product_image: whislist.product_image,
    product_name: whislist.product_name,
    product_origin_category: whislist.product_origin_category,
    product_price: whislist.product_price,
  };

  return (
    <WhislistContext.Provider value={value}>
      {children}
    </WhislistContext.Provider>
  );
}
