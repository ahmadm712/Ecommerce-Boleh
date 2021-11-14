import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Whislist2() {
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
        const initialState = [];

        for (let i = 0; i < whislitId.length; i++) {
          //   console.log(whislitId[i]);
          const findId = getDataProduct.find(
            ({ product_id }) => product_id == whislitId[i]
          );
          initialState.push(findId);
        }
        console.log(initialState);
      })
    );
  };

  useEffect(() => {
    fetchData();
  });
  return <div></div>;
}
