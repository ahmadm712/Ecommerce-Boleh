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
        let user_login = JSON.parse(localStorage.getItem("user-info"));
        // console.log(getDataWishlist);
        // console.log(wishlistUserId == user_login.user_id);

        // check id
        for (let i = 0; i < getDataWishlist.length; i++) {
          if (getDataWishlist[i].user_id == user_login.user_id) {
            for (let j = 0; j < getDataProduct.length; j++) {
              if (
                getDataProduct[j].product_id == getDataWishlist[i].product_id
              ) {
                defaultValue.push(getDataProduct[j]);
                // defaultValue.push(getDataWishlist[i].favorite_id);
              }
            }
          }
        }
        // console.log(defaultValue);
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
