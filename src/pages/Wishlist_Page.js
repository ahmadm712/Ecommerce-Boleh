import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

function WishlistPage(props) {
  const history = useHistory();
  const deleteWishlist = (favorite_id) => {
    console.log(props);
    // const removeWishlist = {
    //   user_id: user_login.user_id,
    //   product_id: props.product_id,
    // };
    // axios
    //   .get(
    //     `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/favorite/${product_id}`,
    //     removeWishlist
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };
  return (
    <>
      <div className="container">
        <div className="w-4/6 h-55 border relative">
          <img
            className="w-full rounded-md h-full"
            src={props.wishlist.product_image}
            alt=""
          />
          <div className="font-light text-green-800">
            {props.wishlist.product_origin_category}
          </div>
          <div className="font-bold text-xl mb-2">
            {props.wishlist.product_name}
          </div>
          <div className="font-normal text-yellow-800">
            {props.wishlist.product_price}
          </div>
          <div className="absolute top-0 right-0 ">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="48px"
              height="48px"
              viewBox="0 0 480 480"
              preserveAspectRatio="xMidYMid meet"
            >
              <g id="layer101" fill="#ff3d00" stroke="none">
                <path d="M185 357 c-122 -103 -135 -120 -135 -171 0 -39 5 -53 29 -77 24 -23 38 -29 73 -29 24 0 54 7 66 16 20 14 24 14 44 0 12 -9 42 -16 66 -16 35 0 49 6 73 29 24 24 29 38 29 77 0 42 -4 51 -43 88 -46 44 -144 126 -149 125 -2 0 -25 -19 -53 -42z" />
              </g>
            </svg>
          </div>

          <button
            className="w-full button h-8 bg-gray-400 text-white hover:bg-gray-800"
            onClick={() => {
              history.push(`detail_produk/${props.wishlist.product_id}`);
            }}
          >
            {" "}
            Detail
          </button>
          <button
            className="w-full button h-8 bg-gray-400 text-white hover:bg-gray-800 my-2"
            onClick={(e) => deleteWishlist(props.wishlist.product_id)}
          >
            Hapus
          </button>
        </div>
      </div>
    </>
  );
}

export default WishlistPage;
