import React, { useState } from "react";
import EGambar from "../assets/images/Ecommerce.png";
import AppD from "../assets/images/AppD.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CarouselComponent from "../components/carousel-card";
import BannerComponent from "../components/banner";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function TopupPage() {
  let user_login = JSON.parse(localStorage.getItem("user-info"));
  console.log(user_login.name);

  const url = `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/user/${user_login.user_id}`;

  const axios = require("axios").default;
  const [data, setData] = useState({
    voucher_id: "",
    saldo_new: 0,
    saldo_old: 0,
  });

  const history = useHistory();

  const handleNext = () => {
    history.push("/search");
  };

  function submit(e) {
    e.preventDefault();

    axios
      .get(url)
      .then((res) => {
        data.saldo_old = parseInt(res.data.saldo);
        console.log(res.data.saldo);
        const url_voucher = `https://6191168c41928b001768ff36.mockapi.io/api/boleh/voucher/${data.voucher_id}`;
        axios
          .get(url_voucher)
          .then((res) => {
            data.saldo_new = parseInt(res.data.voucher_saldo);
            console.log(res.data.voucher_saldo);
            let total_saldo = data.saldo_new + data.saldo_old;
            if (total_saldo != "") {
              axios
                .put(url, {
                  saldo: total_saldo,
                })
                .then((res) => {
                  console.log(res.data);
                  localStorage.setItem("user-info", JSON.stringify(res.data));
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "TopUp Succes",
                    showConfirmButton: false,
                    timer: 900,
                  });
                  history.push("/topup");
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <>
      <div className="container-xl">
        <Navbar />
        <br />
        <div className="container w-full mx-auto">
          <div className="w-3/6 h-55 relative mx-auto">
            <form onSubmit={(e) => submit(e)} className="space-y-6">
              <div>
                <label>Saldo dummy untuk topup</label>
              </div>
              <div>
                <label>V-0000001 = Rp 25000</label>
              </div>
              <div>
                <label>V-0000002 = Rp 50000</label>
              </div>
              <div>
                <label>V-0000003 = Rp 75000</label>
              </div>
              <div>
                <label>V-0000004 = Rp 100000</label>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Saldo
                </label>
                <input
                  onChange={(e) => handle(e)}
                  id="voucher_id"
                  value={data.voucher_id}
                  placeholder="Input voucher id"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Top Up
              </button>
            </form>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div></div>

        <Footer />
      </div>
    </>
  );
}

export default TopupPage;
