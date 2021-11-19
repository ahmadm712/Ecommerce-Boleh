import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CartPage() {
  let url = `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/cart`;
  const history = useHistory();

<<<<<<< HEAD
  const handleRemove = (product_id) => {
    props.removeItem(product_id);
  };
  //to add the quantity
  const handleAddQuantity = (product_id) => {
    props.addQuantity(product_id);
  };
  //to substruct from the quantity
  const handleSubtractQuantity = (product_id) => {
    props.subtractQuantity(product_id);
  };

  // console.log(props);

  return (
    <>
      <div className="flex my-4">
        <img
          className="h-48 lg:h-auto lg:w-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden  "
          src={props.product.product_image}
          alt=""
        />
        <div className="w-4/5  border-gray-400 border lg:border-gray-400 grid grid-cols-2">
          <div className="bg-white p-4  leading-normal flex flex-col justify-between">
            <div className="font-bold text-4xl mb-2">
              {props.product.product_name}
            </div>
            <div className="font-normal text-yellow-800 text-xl">
              Rp {props.product.product_price}
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 relative">
            <div className="flex flex-row absolute bottom-0 pb-4">
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </Link>

              <div className="flex px-4">
                <Link to="/cart">
                  <i
                    onClick={() => {
                      handleSubtractQuantity(props.product.product_id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </i>
                </Link>
                <div className="mx-4 py-1">
                  <p className="text-lg">{props.product.product_stock}</p>
                  {/* {console.log(props.product.cart_amount)}; */}
                </div>
                <Link to="/cart">
                  <i
                    onClick={() => {
                      handleAddQuantity(props.product.product_id);
                    }}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
=======

  function HandleCheckout() {
    history.push('/checkout')
  }

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
      <div className="box-content h-full w-3/4 mx-auto border-2 p-4 my-10">
        <div className="flex justify-around">
          {posts.map((post, index) => (
            <>
              {post.user_id == user_login.user_id && (
                <div>
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
              )}
            </>
          ))}
        </div>
        <div className='mx-auto flex mt-10'>
          <button
            className="w-40 px-4 mx-auto py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={HandleCheckout}
          >
            Checkout
          </button>
>>>>>>> efcbe06752d64d42b7ae31ebb9322e316b9ea14b
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
