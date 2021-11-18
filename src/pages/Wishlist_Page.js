import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../components/footer";

function WishlistPage(props) {
  const history = useHistory();
  const dislike = (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
    >
      <g id="layer101" fill="#9CA3AF" stroke="none">
        <path d="M167 389 c-81 -61 -119 -119 -119 -183 0 -52 13 -80 48 -102 31 -21 96 -21 127 -1 22 14 27 14 46 1 26 -19 101 -20 129 -3 46 29 65 103 42 163 -19 52 -158 176 -196 176 -5 0 -39 -23 -77 -51z m150 -33 c115 -87 138 -194 48 -232 -39 -16 -59 -11 -97 23 -26 25 -26 25 -37 5 -14 -26 -65 -44 -94 -33 -58 23 -76 91 -40 153 20 35 129 128 149 128 7 0 38 -20 71 -44z" />
      </g>
    </svg>
  );
  const like = (
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
  );

  let initialState = false;
  if (props.wishlist.product_favorite_status == 0) {
    initialState = false;
  }
  if (props.wishlist.product_favorite_status == 1) {
    initialState = true;
  }

  const [switchToggled, setSwitchToggled] = useState(initialState);
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
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
            <Link to="/wishlist">
              <i onClick={ToggleSwitch}> {switchToggled ? like : dislike}</i>
            </Link>
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
        </div>
      </div>
    </>
  );
}

export default WishlistPage;
