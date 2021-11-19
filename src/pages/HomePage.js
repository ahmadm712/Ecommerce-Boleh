import React, {  useContext, useEffect, useState } from "react";
import EGambar from "../assets/images/Ecommerce.png";
import AppD from "../assets/images/AppD.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CarouselComponent from "../components/carousel-card";
import BannerComponent from "../components/banner";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CartContext from "../data/context/cart/cart_context";
import Carousel from "react-multi-carousel";
// import { data } from "autoprefixer";

export default function HomePage() {
  const { addToCart } = useContext(CartContext);


  const history = useHistory();

  const handleNext = () => {
    history.push("/search");
  };

  let HandleAPI = () => {
    axios
      .get("https://oleh-oleh-skilvul.000webhostapp.com/api/product")
      .then((res) => {
        // productApi.push(res.data.product)
        // console.log(res);
        // console.log(productApi);
        console.log(res.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //logout
  const handleLogout = () => {
    localStorage.removeItem("user-info");
    history.push("/login");
  };

  //user login
  if (localStorage.getItem("user-info") !== null) {
    let user_login = JSON.parse(localStorage.getItem("user-info"));
    console.log(user_login.name);
    console.log(user_login.saldo);
  } else {
    console.log("belum login");
  }

  return (
    <div className="container-lg box-content">
      <Navbar />
      <BannerComponent />
      <br />
      <br />

      <div className="sm:px-12 lg:px-72 xl:px-80 2xl:px-96 mx-auto h-full">
        <h1 className="text-2xl">Produk Terbaru</h1>
        <CarouselComponent />
      </div>

      <br />
      <div className="sm:px-12 lg:px-72 xl:px-80 mx-auto 2xl:px-96 h-full">
        <h1 className="text-2xl">Produk Rekomendasi</h1>
        <CarouselComponent />
      </div>

      <div className="flex justify-center mt-5 mb-5">
        
      </div>
      <Footer />
    </div>
  );
}