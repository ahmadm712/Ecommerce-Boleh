import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

function CartPage(props) {
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
  if (props.product.product_favorite_status == 0) {
    initialState = false;
  }
  if (props.product.product_favorite_status == 1) {
    initialState = true;
  }

  const [switchToggled, setSwitchToggled] = useState(initialState);
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
  };
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
            <div className="absolute top-0 right-0 pr-4">
              <Link to="/cart">
                <i onClick={ToggleSwitch}> {switchToggled ? like : dislike}</i>
              </Link>
            </div>
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
                </Link>
                <div className="mx-4 py-1">
                  <p className="text-lg">Total : {props.product.cart_amount}</p>
                  {/* {console.log(props.product.cart_amount)}; */}
                </div>
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
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;