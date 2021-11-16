import { createContext, useEffect, useState } from "react";
import axios from "axios";

const defaultValue = [];

export const WishlistContext = createContext(defaultValue);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const fetchData = () => {
    const productAPI =
      "https://oleh-oleh-skilvul.000webhostapp.com/api/product";
    const wishlistAPI =
      "https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/favorite";

    const getProduct = axios.get(productAPI);
    const getWishlist = axios.get(wishlistAPI);
    axios.all([getProduct, getWishlist]).then(
      axios.spread((...allData) => {
        const getDataProduct = allData[0].data.product;
        const getDataWishlist = allData[1].data;
        const whislitId = getDataWishlist.map((e) => {
          return e.product_id;
        });
        // check id
        for (let i = 0; i < whislitId.length; i++) {
          const findId = getDataProduct.find(
            ({ product_id }) => product_id == whislitId[i]
          );
          defaultValue.push(findId);
        }
        setWishlist(defaultValue);
      })
    );
  };

  useEffect(() => {
    fetchData();
  });

  const value = {
    wishlist: wishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
