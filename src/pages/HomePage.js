import React, { useEffect, useState } from "react";
import EGambar from "../assets/images/Ecommerce.png";
import AppD from "../assets/images/AppD.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CarouselComponent from "../components/carousel-card";
import BannerComponent from "../components/banner";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CartContext from "../context/cart/cart_context";
import Carousel from "react-multi-carousel";
// import { data } from "autoprefixer";

export default function HomePage() {
  const { addToCart } = useContext(CartContext);
  const dataProduct = [
    {
      mal_id: 5114,
      rank: 1,
      title: "Fullmetal Alchemist: Brotherhood",
      url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
      type: "TV",
      episodes: 64,
      start_date: "Apr 2009",
      end_date: "Jul 2010",
      members: 2649743,
      score: 9.16,
    },
    {
      mal_id: 28977,
      rank: 2,
      title: "Gintama\u00b0",
      url: "https://myanimelist.net/anime/28977/Gintama\u00b0",
      image_url:
        "https://cdn.myanimelist.net/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209",
      type: "TV",
      episodes: 51,
      start_date: "Apr 2015",
      end_date: "Mar 2016",
      members: 475052,
      score: 9.1,
    },
    {
      mal_id: 38524,
      rank: 3,
      title: "Shingeki no Kyojin Season 3 Part 2",
      url: "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1517/100633.jpg?s=4540a01b5883647ade494cd28392f100",
      type: "TV",
      episodes: 10,
      start_date: "Apr 2019",
      end_date: "Jul 2019",
      members: 1560848,
      score: 9.09,
    },
    {
      mal_id: 9253,
      rank: 4,
      title: "Steins;Gate",
      url: "https://myanimelist.net/anime/9253/Steins_Gate",
      image_url:
        "https://cdn.myanimelist.net/images/anime/5/73199.jpg?s=97b97d568f25a02cf5a22dda13b5371f",
      type: "TV",
      episodes: 24,
      start_date: "Apr 2011",
      end_date: "Sep 2011",
      members: 2072765,
      score: 9.09,
    },
  ];

  // const products = [
  //   {
  //     image: "https://mdbootstrap.com/img/new/slides/052.jpg",
  //     price: "Rp 200000",
  //     productName: "Hat",
  //   },
  //   {
  //     image: "https://mdbootstrap.com/img/new/slides/052.jpg",
  //     price: "Rp 300000",
  //     productName: "Shirt",
  //   },
  //   {
  //     image: "https://mdbootstrap.com/img/new/slides/052.jpg",
  //     price: "Rp 300000",
  //     productName: "Jeans",
  //   },
  // ];

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

      <div className="sm:px-12 lg:px-72 xl:px-96 mx-auto h-full w-full">
        <h1 className="text-2xl">Produk Terlaris</h1>
        <CarouselComponent />
      </div>

      <br />
      <div className="sm:px-12 lg:px-72 xl:px-96 mx-auto h-full w-full">
        <h1 className="text-2xl">Produk Rekomendasi</h1>
        <CarouselComponent />
      </div>

      <div className="flex justify-center mt-5 mb-5">
        <button className="bg-green-500  text-white font-bold py-2 px-4 rounded">
          Muat Lebih
        </button>
      </div>
      <Footer />
    </div>
  );
}
