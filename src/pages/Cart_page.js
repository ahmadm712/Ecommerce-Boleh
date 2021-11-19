import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CartPage() {
  let url = `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart`;
  const history = useHistory();

  let user_login = JSON.parse(localStorage.getItem("user-info"));
  //define state
  const [posts, setPosts] = useState([]);

  //useEffect hook
  useEffect(() => {
    //panggil method "fetchData"
    fectData();
    let user_checkout = 0;
        axios
      .get(url)
      .then((res) => {
       for (var i = res.data.length - 1; i >= 0; i--) {
        if (res.data[i].user_id == user_login.user_id) {
          user_checkout += parseInt(res.data[i].cart_total);
        }
       }
       localStorage.setItem("user-checkout", user_checkout);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //function "fetchData"
  const fectData = async () => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DeleteCart = async (cart_id) => {
    await axios
      .delete(
        `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart/${cart_id}`,
        {}
      )
      .then((resk) => {
        console.log(resk);
        console.log(resk.data);
      });
    window.location.reload();
  };

  const Increment = async (cart_id, product_price, cart_amount, cart_total) => {
    await axios
      .put(
        `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart/${cart_id}`,
        {
          cart_amount: parseInt(cart_amount) + 1,
          cart_total: parseInt(cart_total) + parseInt(product_price),
        }
      )
      .then((resk) => {
        console.log(resk);
        console.log(resk.data);
      });
    window.location.reload();
  };

  const Decrement = async (cart_id, product_price, cart_amount, cart_total) => {
    await axios
      .put(
        `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart/${cart_id}`,
        {
          cart_amount: parseInt(cart_amount) - 1,
          cart_total: parseInt(cart_total) - parseInt(product_price),
        }
      )
      .then((resk) => {
        console.log(resk);
        console.log(resk.data);
      });
    window.location.reload();
  };
  return (
    <div>
      <Navbar />
      {posts.map((post, index) => (
        <div>
          <div>
            {post.user_id == user_login.user_id && (
              <div className="box-content h-full w-3/4 mx-auto border-2 p-4 my-10">
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-semibold text-lg">
                      {post.product_name}
                    </h1>
                    <div className="flex justify-between w-80 p-2 ">
                      <img
                        src={post.product_image}
                        alt=""
                        className="w-full rounded-md h-full"
                      />
                    </div>
                    <h1 className="font-semibold text-lg">
                      {" "}
                      Harga : Rp {post.product_price}
                    </h1>
                    <button
                      className="w-full button h-8 bg-gray-400 text-white hover:bg-gray-800 mt-3"
                      onClick={(e) => DeleteCart(post.cart_id)}
                    >
                      {" "}
                      Hapus dari Keranjang
                    </button>
                    <button
                      className="w-full button h-8 bg-gray-400 text-white hover:bg-gray-800 mt-3"
                      onClick={(e) =>
                        Decrement(
                          post.cart_id,
                          post.product_price,
                          post.cart_amount,
                          post.cart_total
                        )
                      }
                    >
                      {" "}
                      Kurang
                    </button>
                    <button
                      className="w-full button h-8 bg-gray-400 text-white hover:bg-gray-800 mt-3"
                      onClick={(e) =>
                        Increment(
                          post.cart_id,
                          post.product_price,
                          post.cart_amount,
                          post.cart_total
                        )
                      }
                    >
                      {" "}
                      Tambah
                    </button>
                    <h1 className="font-semibold text-lg">
                      {" "}
                      Jumlah : {post.cart_amount}
                    </h1>
                    <h1 className="font-semibold text-lg">
                      {" "}
                      Total : Rp {post.cart_total}
                    </h1>
                  </div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default CartPage;
