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
                    <img src="https://picsum.photos/300/300" alt="img" />
                    <div>
                      <h1>Seblak</h1>
                      <h1>15.000</h1>
                      <h1>jumlah : 1</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
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
                <h1>Rp : 100.000</h1>
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
                <h1>Rp : 116.000</h1>
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

            <button className="button-xl bg-yellow-600 hover:bg-yellow-700 rounded-md text-white w-full h-10 max-w-xl mt-3">
              Bayar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOutPage;
