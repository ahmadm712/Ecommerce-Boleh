import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import {ProductContext} from '../context/product_context'


export default function CarouselComponent() {
  const {product} =  useContext(ProductContext)
  // const [data, setdata] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const history = useHistory();

  const handleKlik = (id) => {
    // history.pushState(`detail_produk/${id}`);
  };

  // const getProduk = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://oleh-oleh-skilvul.000webhostapp.com/api/product"
  //     );
  //     // console.log(res.data.product);
  //     const p = await res.data.product;
  //     // const jsonP = p.json()
  //     // console.log(jsonP)
  //     setdata(p);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProduk();
  // }, []);

  return (
    <Carousel responsive={responsive} itemClass="image-item">
      {product.map((res, i) => {
        return (
          <div className="w-4/6 h-55">
            <img
              src={res.product_image}
              alt=""
              className="w-full rounded-md h-full"
            />
            <h2 className="text-lg font-semibold">{res.product_name}</h2>

            <h2 className="font-light text-green-800">
              {res.product_origin_category}
            </h2>
            <h2 className="font-normal text-yellow-800">
              Rp {res.product_price}
            </h2>
            <button
              className="w-full button bg-gray-400 text-white hover:bg-gray-800"
              onClick={() => {
                history.push(`detail_produk/${res.product_id}`
                );
              }}
              data={product}
            >
              {" "}
              Detail
            </button>
          </div>
        );
      })}
    </Carousel>
  );
}
