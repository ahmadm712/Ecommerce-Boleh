import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Data from "../data/dummy-data";
import axios from "axios";

function CheckOutPage() {
  let user_login = JSON.parse(localStorage.getItem("user-info"));
  console.log(user_login.name);

  const url = `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/user/${user_login.user_id}`;
  let url2 = `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart`;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    axios
      .get(url2)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Checkout = async () => {
    axios
      .post(
        `https://6191168c41928b001768ff36.mockapi.io/api/boleh/transaction_history`,
        {
          user_id: user_login.user_id,
          transaction_confirm: 1,
          total_price: parseInt(localStorage.getItem("user-checkout")),
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    axios
      .get("https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart")
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].user_id == user_login.user_id) {
            axios
              .delete(
                `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart/${res.data[i].cart_id}`,
                {}
              )
              .then((resk) => {
                console.log(resk);
                console.log(resk.data);
              });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const axios = require("axios").default;
  const [data, setData] = useState({
    name: user_login.name,
    email: user_login.email,
    password: user_login.password,
    image: user_login.image,
    address: user_login.address,
    phone: user_login.phone,
  });

  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="font-bold">Checkout</h1>

        {posts.map((post, i) => (
          <>
            {post.user_id == user_login.user_id && (
              <div className="container flex justify-between p-12">
                <div className="box-content h-96 w-2/4 p-2 border-2">
                  <div className="box-content h-1/4 w-auto p-3 border-2">
                    <h1 className="font-semibold">Rumah</h1>
                    <p className="font-light font-normal">
                      {data.email} ({data.phone})
                    </p>
                    <p className="font-light font-normal">{data.address}</p>
                  </div>
                  <div className="box-content h-2/4 w-auto p-3 border-2 mt-3">
                    <h1>Total Pesanan (1 items)</h1>
                    <div className="box-content h-2/4 w-3/4 p-2 border-2 mt-3 flex justify-between">
                      <div>
                        <div className="box-content h-3/4 p-2 w-44 border-2 flex justify-between">
                          <img src={post.product_image} alt="img" />
                          <div>
                            <h1>{post.product_name}</h1>
                            <h1>Rp {post.product_price}</h1>
                            <h1>Jumlah : {post.cart_amount}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SideBox */}
                <div className="box-content h-full w-1/4 p-3 border-2">
                  <h1 className="font-semibold text-lg">Rincian Pembayaran</h1>
                  <br />

                  <div>
                    <h1 className="font-semibold text-lg">Total Belanja</h1>
                    <div className="flex justify-between">
                      <h1>Total Belanja</h1>
                      <h1>Rp : {post.cart_total}</h1>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex justify-between mx-1 my-1">
                        <div className="mr-3">
                          <input type="radio" />
                        </div>

                        <div>
                          <h1>Biaya Ongkir</h1>
                        </div>
                      </div>
                      <div className="flex">
                        <h1>Rp : 16.000</h1>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <h1>Total Pembayaran</h1>
                      <h1>Rp : {post.cart_total}</h1>
                    </div>
                    <br />
                  </div>

                  <div>
                    <h1 className="font-semibold text-lg">Metode Pembayaran</h1>
                    <div className="box-content h-full w-full border-2 flex justify-between">
                      <div className="px-2">
                        <h1 className="font-bold">Saldo</h1>
                        <h1>RP : {user_login.saldo}</h1>
                      </div>
                      <div className="mx-3 my-3 h-4 w-4">
                        <input type="radio" />
                      </div>
                    </div>
                    <div className="box-content h-full w-full border-2 flex justify-between mt-2">
                      <div className="px-2">
                        <h1 className="font-bold">Cash On Delivery</h1>
                        <h1>Bayar Di Tempat</h1>
                      </div>
                      <div className="mx-3 my-3 h-4 w-4">
                        <input type="radio" />
                      </div>
                    </div>
                  </div>
                  <br />

                  <button className="button-xl bg-yellow-600 hover:bg-yellow-700 rounded-md text-white w-full h-10 max-w-xl mt-3"
                  onClick={Checkout}
                  >
                    Bayar
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default CheckOutPage;
